/**
 * Windrose 地图页 Leaflet 逻辑（对齐 roadtovostok-web `useRasterMapPage.js`）：
 * 接收 `windroseMap.js` 的 default bundle，负责底图、标点、搜索、路由 ?loc=、侧栏筛选。
 * 数据约定：`mapCategories[].list[].category` 与每条 pin 的 `category`（子类 slug）一致；大类 `id` 由该 slug 在 `mapCategories` 中反查。
 */
import { useRoute } from 'vue-router'
import { reactive, ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { buildMapPinHtml, MAP_PIN_LEAFLET_ICON_PX } from '@/data/map/pinIcons.js'

function defaultOnCategoryIds(categories) {
  if (!Array.isArray(categories) || !categories.length) return new Set(['windrose'])
  return new Set(categories.map((c) => c.id))
}

const ERR_DIM = 'Could not read map image dimensions.'
const ERR_IMG =
  'Map image failed to load. Set basemapPublicPath in windrose-map-meta.json and add the file under public/, or switch to vector mode.'
const ERR_TERRAIN = 'Island outline data is missing. Try refreshing the page; if it keeps happening, the site bundle may be incomplete.'

export function useWindroseMap(bundle, options = {}) {
  const { coordHud: coordHudRef, fitBoundsZoomOffset = 0 } = options
  const {
    imageUrl,
    pins,
    mapCategories,
    basemapIsOgSocialCard = false,
    useRasterBasemap = true,
    leafletVirtualSize = 1000,
    leafletVirtualWidth,
    leafletVirtualHeight,
    terrain = null,
  } = bundle

  const onByDefault = defaultOnCategoryIds(mapCategories)
  const vectorW = Number(leafletVirtualWidth) || Number(leafletVirtualSize) || 1000
  const vectorH = Number(leafletVirtualHeight) || Number(leafletVirtualSize) || 1000
  const listCategoriesByMapId = Object.fromEntries(
    mapCategories.map((c) => [c.id, (c.list || []).map((row) => row.category)]),
  )

  /** 子类 slug → 侧栏大类 `mapCategories[].id`（用于标记配色、展开分组） */
  const mapIdByListCategory = Object.fromEntries(
    mapCategories.flatMap((c) => (c.list || []).map((row) => [row.category, c.id])),
  )

  /** 由 pin 的 `category`（子类 slug）反查侧栏大类 `id` */
  function sidebarGroupIdForPin(p) {
    const sub = p?.category
    if (sub == null || sub === '') return null
    return mapIdByListCategory[sub] ?? null
  }

  const route = useRoute()
  const mapPoints = computed(() => (Array.isArray(pins) ? pins : []))
  const pinSearchQuery = ref('')
  const searchCycleIndex = ref(0)

  const kindVisible = reactive(
    Object.fromEntries(
      mapCategories.flatMap((c) =>
        (c.list || []).map((row) => [row.category, onByDefault.has(c.id)]),
      ),
    ),
  )
  const categoryExpanded = reactive(
    Object.fromEntries(mapCategories.map((c) => [c.id, onByDefault.has(c.id)])),
  )
  const kindCycle = reactive({})

  const kindMetaById = computed(() => {
    const appearance = Object.create(null)
    const labels = Object.create(null)
    for (const c of mapCategories) {
      for (const row of c.list || []) {
        appearance[row.category] = { pinIcon: row.pinIcon }
        labels[row.category] = row.name
      }
    }
    return { appearance, labels }
  })

  function pinTitle(p) {
    return p?.title ?? ''
  }

  function pinMatchesQueryRaw(p, qLower) {
    if (!qLower) return true
    if (String(pinTitle(p)).toLowerCase().includes(qLower)) return true
    if (String(p?.id ?? '').toLowerCase().includes(qLower)) return true
    if (String(p?.category ?? '').toLowerCase().includes(qLower)) return true
    const kl = String(kindMetaById.value.labels[p?.category] ?? '').toLowerCase()
    if (kl.includes(qLower)) return true
    const plain = String(p?.content ?? '')
      .replace(/<[^>]+>/g, ' ')
      .toLowerCase()
    return plain.includes(qLower)
  }

  const searchMatches = computed(() => {
    const q = pinSearchQuery.value.trim().toLowerCase()
    if (!q) return []
    return mapPoints.value.filter((p) => pinMatchesQueryRaw(p, q))
  })
  const searchMatchCount = computed(() => searchMatches.value.length)

  function ensurePinKindVisible(p) {
    const sub = p?.category
    if (sub == null || kindVisible[sub]) return
    kindVisible[sub] = true
    const mapCatId = sidebarGroupIdForPin(p)
    if (mapCatId != null && mapCatId in categoryExpanded) categoryExpanded[mapCatId] = true
  }

  function focusNextSearchMatch() {
    const list = searchMatches.value
    if (!list.length) return
    const idx = searchCycleIndex.value % list.length
    const p = list[idx]
    searchCycleIndex.value = (idx + 1) % list.length
    ensurePinKindVisible(p)
    applyMarkerVisibility()
    nextTick(() => focusPoi(p.id))
  }

  function clearPinSearch() {
    pinSearchQuery.value = ''
    searchCycleIndex.value = 0
  }

  watch(pinSearchQuery, () => {
    searchCycleIndex.value = 0
    nextTick(() => applyMarkerVisibility())
  })

  const mapContainer = ref(null)
  const filterRailRef = ref(null)
  const mapError = ref('')
  const mapReady = ref(false)
  const selectedPoiId = ref(null)

  let mapInstance = null
  let resizeObserver = null
  let markersLayer = null
  const markerById = new Map()

  const categoryChevron = (expanded) => (expanded ? '▼' : '▶')

  function heroForPin(p) {
    if (!p?.image) return null
    return { src: p.image, alt: p.imageAlt || pinTitle(p) }
  }

  function countForKind(listCategory) {
    return mapPoints.value.filter((p) => p.category === listCategory).length
  }

  function categoryAllOn(catId) {
    const subs = listCategoriesByMapId[catId]
    return Boolean(subs?.length && subs.every((sub) => kindVisible[sub]))
  }

  function syncCategoryMasterCheckboxes() {
    const root = filterRailRef.value
    if (!root) return
    for (const c of mapCategories) {
      const el = root.querySelector(`input[data-village-master="${c.id}"]`)
      if (!el || el.tagName !== 'INPUT') continue
      const subs = listCategoriesByMapId[c.id]
      if (!subs?.length) {
        el.indeterminate = false
        continue
      }
      const nOn = subs.filter((sub) => kindVisible[sub]).length
      el.indeterminate = nOn > 0 && nOn < subs.length
    }
  }

  const selectedPoi = computed(() => mapPoints.value.find((p) => p.id === selectedPoiId.value) ?? null)

  function syncMarkerSelectionClass() {
    const id = selectedPoiId.value
    for (const [mid, marker] of markerById) {
      const el = marker.getElement?.()
      if (el) el.classList.toggle('rtv-map-marker--selected', mid === id)
    }
  }

  function focusPoi(id) {
    selectedPoiId.value = id
    const marker = markerById.get(id)
    if (!mapInstance || !marker || !markersLayer?.hasLayer(marker)) return
    mapInstance.flyTo(marker.getLatLng(), Math.max(mapInstance.getZoom(), 0.5), {
      duration: 0.42,
      easeLinearity: 0.22,
    })
    marker.openPopup()
  }

  function focusKindPins(listCategory) {
    if (!kindVisible[listCategory]) return
    const pinsList = mapPoints.value.filter(
      (p) => p.category === listCategory && kindVisible[p.category],
    )
    if (!pinsList.length) return
    const idx = (kindCycle[listCategory] ?? 0) % pinsList.length
    kindCycle[listCategory] = idx + 1
    focusPoi(pinsList[idx].id)
  }

  watch(selectedPoiId, () => nextTick(() => syncMarkerSelectionClass()))

  watch(
    kindVisible,
    () => {
      applyMarkerVisibility()
      const sel = selectedPoi.value
      if (sel && !kindVisible[sel.category]) selectedPoiId.value = null
      nextTick(() => syncCategoryMasterCheckboxes())
    },
    { deep: true },
  )

  function syncRouteLocQuery() {
    const raw = route.query.loc
    if (raw == null || raw === '' || !mapReady.value) return
    const match = mapPoints.value.find((x) => String(x.id) === String(raw))
    if (!match) return
    if (match.category != null && !kindVisible[match.category]) {
      ensurePinKindVisible(match)
      nextTick(() => focusPoi(match.id))
    } else {
      focusPoi(match.id)
    }
  }

  watch(
    () => [String(route.query.loc ?? ''), mapReady.value],
    () => nextTick(() => syncRouteLocQuery()),
  )

  function escapeHtml(text) {
    return String(text)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
  }

  function buildPopupHtml(p) {
    const title = pinTitle(p)
    const hero = heroForPin(p)
    const thumb = hero
      ? `<div class="rtv-map-popup__thumb"><img src="${escapeHtml(hero.src)}" alt="${escapeHtml(hero.alt)}" width="88" height="88" loading="lazy" decoding="async"></div>`
      : ''
    const cls = thumb ? 'rtv-map-popup rtv-map-popup--with-media' : 'rtv-map-popup'
    const body = p.content ? `<div class="rtv-map-popup__html">${String(p.content)}</div>` : ''
    return `<div class="${cls}"><div class="rtv-map-popup__body"><strong>${escapeHtml(title)}</strong>${body}</div>${thumb}</div>`
  }

  function normalizedToLatLng(xNorm, yNorm, w, h) {
    return L.latLng(h - yNorm * h, xNorm * w)
  }

  function markerModifierForPin(p) {
    const mapCatId = sidebarGroupIdForPin(p)
    const raw = mapCatId != null ? mapCatId : 'windrose'
    const slug = String(raw).replace(/[^a-z0-9_-]/gi, '') || 'windrose'
    return `rtv-map-marker--vcat-${slug}`
  }

  function applyMarkerVisibility() {
    if (!markersLayer) return
    const q = pinSearchQuery.value.trim().toLowerCase()
    for (const [id, marker] of markerById) {
      const p = mapPoints.value.find((x) => x.id === id)
      if (!p) continue
      const vis = kindVisible[p.category] === true && pinMatchesQueryRaw(p, q)
      const on = markersLayer.hasLayer(marker)
      if (vis && !on) markersLayer.addLayer(marker)
      else if (!vis && on) {
        markersLayer.removeLayer(marker)
        marker.closePopup()
      }
    }
  }

  function teardownMap() {
    resizeObserver?.disconnect()
    resizeObserver = null
    mapInstance?.remove()
    mapInstance = null
    markersLayer = null
    markerById.clear()
    mapReady.value = false
    selectedPoiId.value = null
    clearPinSearch()
    if (coordHudRef) coordHudRef.value = '—'
  }

  function mountMapLayers(w, h) {
    const el = mapContainer.value
    if (!el) return

    const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(h, w))
    mapInstance = L.map(el, {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 5,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      wheelPxPerZoomLevel: 72,
      wheelDebounceTime: 32,
      maxBounds: bounds.pad(0.02),
      maxBoundsViscosity: 0.9,
      attributionControl: false,
      zoomControl: false,
    })

    const baseLayer = L.layerGroup().addTo(mapInstance)

    if (useRasterBasemap) {
      L.imageOverlay(imageUrl, bounds).addTo(baseLayer)
    } else {
      if (!terrain?.oceanFill) {
        mapError.value = ERR_TERRAIN
        mapInstance.remove()
        mapInstance = null
        return
      }
      L.rectangle(bounds, {
        interactive: false,
        stroke: false,
        fillColor: terrain.oceanFill,
        fillOpacity: 1,
      }).addTo(baseLayer)
      for (const isl of terrain.islands || []) {
        const latlngRings = (isl.rings || [])
          .filter((ring) => Array.isArray(ring) && ring.length >= 3)
          .map((ring) => ring.map(([x, y]) => normalizedToLatLng(x, y, w, h)))
        if (!latlngRings.length) continue
        const latlngs = latlngRings.length === 1 ? latlngRings[0] : latlngRings
        L.polygon(latlngs, {
          interactive: false,
          stroke: true,
          color: isl.stroke ?? '#2a5a38',
          weight: 1.25,
          fillColor: isl.fill ?? '#4a8f5c',
          fillOpacity: 0.9,
        }).addTo(baseLayer)
      }
    }

    L.control.zoom({ position: 'topright' }).addTo(mapInstance)

    if (coordHudRef) {
      mapInstance.on('mousemove', (e) => {
        const { lat, lng } = e.latlng
        coordHudRef.value = `x: ${Math.min(1, Math.max(0, lng / w)).toFixed(4)}, y: ${Math.min(1, Math.max(0, (h - lat) / h)).toFixed(4)}`
      })
      mapInstance.on('mouseout', () => {
        coordHudRef.value = '—'
      })
    }

    markerById.clear()
    markersLayer = L.layerGroup()
    const appear = kindMetaById.value.appearance
    const pinPx = MAP_PIN_LEAFLET_ICON_PX
    const pinHalf = pinPx / 2
    const selectPoi = (id) => {
      selectedPoiId.value = id
    }

    for (const p of mapPoints.value) {
      const latlng = normalizedToLatLng(p.x, p.y, w, h)
      const icon = L.divIcon({
        className: `rtv-map-marker ${markerModifierForPin(p)}`,
        html: buildMapPinHtml(p, appear[p.category]),
        iconSize: [pinPx, pinPx],
        iconAnchor: [pinHalf, pinHalf],
        popupAnchor: [0, -(pinHalf + 4)],
      })
      const marker = L.marker(latlng, { icon, title: pinTitle(p) })
      const hasRichPopup = Boolean(heroForPin(p))
      marker.bindPopup(buildPopupHtml(p), {
        className: 'rtv-map-popup-wrap',
        maxWidth: hasRichPopup ? 380 : 300,
        offset: L.point(0, -6),
      })
      marker.on('click', () => selectPoi(p.id))
      marker.on('popupopen', () => selectPoi(p.id))
      markerById.set(p.id, marker)
      markersLayer.addLayer(marker)
    }
    markersLayer.addTo(mapInstance)
    applyMarkerVisibility()

    const zoomToPins = (!useRasterBasemap || basemapIsOgSocialCard) && mapPoints.value.length > 0
    if (zoomToPins) {
      const bb = mapPoints.value.reduce(
        (acc, p) => {
          const ll = normalizedToLatLng(p.x, p.y, w, h)
          return acc ? acc.extend(ll) : L.latLngBounds(ll, ll)
        },
        null,
      )
      mapInstance.fitBounds(bb.pad(0.04), { maxZoom: useRasterBasemap ? 3.5 : 3.45, animate: false })
    } else {
      mapInstance.fitBounds(bounds, { animate: false })
      if (fitBoundsZoomOffset > 0) {
        const base = mapInstance.getZoom()
        if (Number.isFinite(base)) {
          mapInstance.setZoom(Math.min(base + fitBoundsZoomOffset, mapInstance.getMaxZoom()))
        }
      }
    }

    mapReady.value = true
    nextTick(() => {
      syncMarkerSelectionClass()
      syncCategoryMasterCheckboxes()
    })

    resizeObserver = new ResizeObserver(() => mapInstance?.invalidateSize({ animate: false }))
    resizeObserver.observe(el)
  }

  function setupMap() {
    if (!mapContainer.value) return
    teardownMap()
    mapError.value = ''

    if (useRasterBasemap) {
      if (!String(imageUrl || '').trim()) {
        mapError.value = ERR_IMG
        return
      }
      const probe = new Image()
      probe.decoding = 'async'
      probe.onload = () => {
        const { naturalWidth: w, naturalHeight: h } = probe
        if (!w || !h) mapError.value = ERR_DIM
        else mountMapLayers(w, h)
      }
      probe.onerror = () => {
        mapError.value = ERR_IMG
      }
      probe.src = imageUrl
    } else {
      mountMapLayers(vectorW, vectorH)
    }
  }

  onMounted(setupMap)
  onUnmounted(teardownMap)

  return {
    mapContainer,
    filterRailRef,
    mapError,
    mapReady,
    kindVisible,
    categoryExpanded,
    mapCategories,
    categoryChevron,
    countForKind,
    categoryAllOn,
    focusKindPins,
    syncCategoryMasterCheckboxes,
    pinSearchQuery,
    searchMatchCount,
    focusNextSearchMatch,
  }
}
