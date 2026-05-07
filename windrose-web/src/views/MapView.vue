<template>
  <article class="map-page wr-map">
    <section class="page-hero page-hero--chart" aria-labelledby="map-hero-title">
      <div class="container">
        <nav class="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="page-breadcrumb__sep" aria-hidden="true">/</li>
            <li><span aria-current="page">Interactive Map</span></li>
          </ol>
        </nav>
        <div class="page-hero__shell page-hero__shell--compact">
          <span class="page-hero__sigil" aria-hidden="true" />
          <p class="page-hero__eyebrow">Atlas · POI layers · search</p>
          <h1 id="map-hero-title">Windrose Interactive Map</h1>
          <div class="page-hero__meta">
            <span>Layers</span>
            <span>Search</span>
            <span>Coordinates</span>
          </div>
          <p class="page-hero__lead page-hero__lead--single">
            Pan, zoom, toggle layers, search markers—corner HUD gives x/y for callouts. Plan a build on
            <a href="/talents">Talents &amp; Build</a>, then return here for pins.
          </p>
        </div>
        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-map-01" :rotation-index="0" />
        </div>
      </div>
    </section>

    <section class="wr-map__body" aria-label="Interactive map and POI tools">
      <div class="container wr-map__body-inner">
        <div class="wr-map__panel wr-map__panel--split">
          <div class="wr-map__sidebar">
            <div class="wr-map__layers-wrap">
              <aside
                v-if="mapReady"
                ref="filterRailRef"
                class="wr-map__layers village-filter-rail"
                aria-label="POI layers"
              >
                <div class="wr-map__layers-head">
                  <h2 class="wr-map__layers-title">Layers</h2>
                  <p class="wr-map__layers-hint">Expand a group, toggle types, or search above.</p>
                </div>
                <div class="wr-map__layers-body village-filter-rail__body">
                  <section
                    v-for="cat in mapCategories"
                    :key="cat.id"
                    class="wr-map__cat village-filter-cat"
                    :data-vcat="cat.id"
                  >
                    <div class="wr-map__cat-head village-filter-cat__head">
                      <button
                        type="button"
                        class="wr-map__cat-toggle village-filter-cat__expand"
                        :aria-expanded="categoryExpanded[cat.id] ? 'true' : 'false'"
                        @click="categoryExpanded[cat.id] = !categoryExpanded[cat.id]"
                      >
                        <span class="wr-map__cat-chev" aria-hidden="true">{{
                          categoryChevron(categoryExpanded[cat.id])
                        }}</span>
                        <span class="wr-map__cat-label">{{ cat.name }}</span>
                        <span class="wr-map__cat-summary">{{ categorySummary(cat) }}</span>
                      </button>
                      <input
                        class="wr-map__cat-master village-filter-cat__master"
                        type="checkbox"
                        :data-village-master="cat.id"
                        :checked="categoryAllOn(cat.id)"
                        :aria-label="`${cat.name}: toggle all types`"
                        @change="onMasterChange(cat, $event)"
                      />
                    </div>
                    <div v-show="categoryExpanded[cat.id]" class="wr-map__kind-grid village-kind-grid" role="group">
                      <div v-for="row in cat.list" :key="row.category" class="wr-map__kind village-kind-cell">
                        <label class="wr-map__kind-check village-kind-cell__toggle">
                          <input v-model="kindVisible[row.category]" type="checkbox" />
                        </label>
                        <button
                          type="button"
                          class="wr-map__kind-btn village-kind-cell__main"
                          :disabled="countForKind(row.category) === 0 || !kindVisible[row.category]"
                          @click="focusKindPins(row.category)"
                        >
                          <span class="wr-map__kind-name village-kind-cell__name">{{ row.name }}</span>
                          <span class="wr-map__kind-count village-kind-cell__count">{{ countForKind(row.category) }}</span>
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </aside>
              <div v-else class="wr-map__layers-placeholder" aria-live="polite">
                <p class="wr-map__layers-placeholder-text">Initializing map…</p>
              </div>
            </div>
          </div>

          <div class="wr-map__map-column">
            <div class="wr-map__map-toolbar">
              <MapPinSearch
                v-model="pinSearchQuery"
                :disabled="!mapReady"
                :match-count="searchMatchCount"
                label="Search markers"
                placeholder="Name, id, popup text, or layer…"
                @enter="focusNextSearchMatch"
              />
            </div>
            <WindroseMapViewport
              :map-container="mapContainerForProp"
              :map-ready="mapReady"
              :map-error="mapError"
              :coord-hud="coordHudForProp"
              :show-coord-hud="true"
            />
          </div>
        </div>

        <p v-if="mapError" class="wr-map__error" role="alert">{{ mapError }}</p>

        <!-- 广告位 -->
        <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
          <GptBanner gpt-slot-id="div-gpt-ad-map-02" :rotation-index="1" />
        </div>
      </div>
    </section>

    <section class="guide-body-section wr-map__seo" aria-labelledby="map-about-heading">
      <div class="container">
        <div class="guide-body-content wr-html-prose">
          <h2 id="map-about-heading">Why use this Windrose interactive map?</h2>
          <p>
            This atlas pairs the community vector seascape with structured POI markers so solo captains and crews can
            scout camps, farming loops, wrecks, ruins, and exploration objectives without tab-hunting through
            spreadsheets. When a popup drops a weird material name, look up the matching row in the wiki resources deck
            (or another category) before you reroute the whole night.
          </p>
          <p>
            Because everything loads with the page, response times stay predictable and the chart stays readable even on
            modest laptops—important when you are alt-tabbing between Discord, the wiki, and the game during Early
            Access nights. Still learning pin vocabulary? The Getting Started hub explains how we think about markers;
            Advanced covers when those same pins become haul routes and fort timers.
          </p>

          <h2 id="map-how-heading">How to use this map</h2>
          <ol class="wr-map__seo-steps">
            <li>
              <strong>Pick layers</strong> — Expand a category and toggle only the pin families you care about (for
              example camps plus resources for a new outpost route).
            </li>
            <li>
              <strong>Search markers</strong> — Enter a POI title, tag, or fragment of popup copy, then
              press Enter to cycle through matches while the map flies to each marker.
            </li>
            <li>
              <strong>Read coordinates</strong> — Watch the HUD in the corner for normalized x/y values that line up
              with this chart; use them to align screenshots or squad callouts with wiki pages.
            </li>
            <li>
              <strong>Compare sources</strong> — Cross-check tricky islets against the official Windrose map when
              patch notes reshuffle spawns; this fan map optimizes for fast filtering, not proprietary live telemetry.
            </li>
          </ol>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-map-03" :rotation-index="2" />
          </div>

          <h2 id="map-faq-heading">FAQ: Windrose map &amp; POI data</h2>
          <dl class="wr-map__faq">
            <div class="wr-map__faq-item">
              <dt>Where do the markers come from?</dt>
              <dd>
                Volunteers curate the pin list for Windrose Compass and ship updates with the site. If something is wrong
                after a patch, it is usually just a slow refresh—check again after a few days or ping whoever keeps this
                site updated. Cross-check unusual loot against long-form Guides articles that focus on
                that biome so you know whether it is data lag or a real spawn change.
              </dd>
            </div>
            <div class="wr-map__faq-item">
              <dt>Does this replace the official interactive map?</dt>
              <dd>
                No. Treat this page as a companion: it emphasizes fast filters and our guides, while in-game placement
                always wins when the two disagree.
              </dd>
            </div>
            <div class="wr-map__faq-item">
              <dt>Will my filters persist?</dt>
              <dd>
                Layer toggles reset on refresh by design so new visitors always start from a predictable baseline. Use
                browser bookmarks for recurring routes instead.
              </dd>
            </div>
            <div class="wr-map__faq-item">
              <dt>How often is the coastline data updated?</dt>
              <dd>
                Coastlines refresh when maintainers ingest new survey notes—there is no live satellite layer here, just
                the vector silhouette you see on screen.
              </dd>
            </div>
          </dl>

          <!-- 广告位 -->
          <div class="ad-wrap" style="width: 100%; min-height: 100px; display: flex; justify-content: center; align-items: center;">
            <GptBanner gpt-slot-id="div-gpt-ad-map-04" :rotation-index="3" />
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import windroseBundle from '@/data/map/windroseMap.js'
import GptBanner from '@/components/GptBanner.vue'
import MapPinSearch from '@/views/map/MapPinSearch.vue'
import WindroseMapViewport from '@/views/map/WindroseMapViewport.vue'
import { useWindroseMap } from '@/views/map/useWindroseMap.js'

const coordHud = ref('—')

const {
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
} = useWindroseMap(windroseBundle, { coordHud })

/** Template unwraps refs in props; wrap so child receives the real Ref objects */
const mapContainerForProp = computed(() => mapContainer)
const coordHudForProp = computed(() => coordHud)

function categorySummary(cat) {
  const rows = (cat.list || []).filter((row) => countForKind(row.category) > 0)
  if (!rows.length) return '0/0'
  const on = rows.filter((row) => kindVisible[row.category]).length
  return `${on}/${rows.length}`
}

function onMasterChange(cat, e) {
  const el = e.target
  if (!el || el.tagName !== 'INPUT') return
  const wantOn = !!el.checked
  for (const row of cat.list || []) {
    kindVisible[row.category] = wantOn
  }
  nextTick(() => syncCategoryMasterCheckboxes())
}
</script>

<!--
  Map page layout + Leaflet：本块样式无 scoped，子组件与 Leaflet 注入的 DOM 才能匹配。
  约定（首页 map-teaser 的 :deep 依赖于此，改名须同步改 HomeView）：
  - .wr-map / .wr-map__*：地图壳层 BEM，视为对外稳定类名。
  - .map-page：Leaflet / rtv-* 控件层叠作用域前缀，避免污染全站。
-->
<style>
/* 地图页 hero 压缩，把视觉重心让给下方图台 */
.map-page .page-hero--chart {
  padding-bottom: 0.6rem;
}

.map-page .page-hero__shell--compact {
  padding-bottom: clamp(0.85rem, 1.6vw, 1.15rem);
}

.map-page .page-hero__lead--single {
  margin-bottom: 0;
}

/* Map page — aligned with site tokens; ocean fill matches chart edges */
.wr-map {
  --wr-map-ocean: #2a77c4;
  --wr-map-viewport-height: 680px;
  padding-bottom: 2.25rem;
}

@media (max-width: 1024px) {
  .wr-map {
    --wr-map-viewport-height: min(480px, calc(100dvh - 220px));
  }
}

@media (max-width: 768px) {
  .wr-map {
    --wr-map-viewport-height: min(400px, calc(100dvh - 190px));
  }
}

.wr-map .wr-map__hero-code {
  font-size: 0.88em;
  padding: 0.08em 0.28em;
  border-radius: 0.2rem;
  border: 1px solid rgba(160, 188, 210, 0.25);
  background: rgba(4, 6, 10, 0.45);
  color: var(--color-brass);
}

.wr-map__body {
  margin-top: clamp(1rem, 2.5vw, 1.75rem);
}

.wr-map__body-inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.wr-map__panel {
  border-radius: 10px;
  border: 1px solid rgba(160, 188, 210, 0.12);
  background: var(--color-bg-elevated);
  overflow: hidden;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.2);
}

/* Left: layers only · Right: search bar + map; on narrow screens map column stacks first */
.wr-map__panel--split {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 12px;
}

.wr-map__sidebar {
  display: flex;
  flex-direction: column;
  min-height: 0;
  order: 0;
  max-height: min(520px, 62vh);
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  background: linear-gradient(
    168deg,
    rgba(24, 34, 50, 0.97) 0%,
    rgba(14, 20, 32, 0.94) 42%,
    rgba(10, 14, 22, 0.96) 100%
  );
}

.wr-map__sidebar::-webkit-scrollbar {
  width: 7px;
}

.wr-map__sidebar::-webkit-scrollbar-thumb {
  background: rgba(160, 188, 210, 0.28);
  border-radius: 999px;
}

.wr-map__map-column {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 0;
  order: -1;
  height: var(--wr-map-viewport-height);
}

.wr-map__map-toolbar {
  flex-shrink: 0;
  padding: 0.55rem 0.65rem 0.5rem;
  border-bottom: 1px solid rgba(160, 188, 210, 0.12);
  background: linear-gradient(180deg, rgba(14, 20, 32, 0.98) 0%, rgba(10, 14, 22, 0.92) 100%);
}

.wr-map__map-toolbar .map-raster-poi-search__label {
  margin-bottom: 0.3rem;
}

.wr-map__map-toolbar .map-raster-poi-search__meta {
  margin-top: 0.28rem;
}

.wr-map__map-stage {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.wr-map__map-wrap {
  flex: 1;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.wr-map__map {
  position: relative;
  flex: none;
  width: 100%;
  height: 100%;
  min-height: 0;
  border-radius: 10px;
  border: none;
  background: var(--wr-map-ocean);
  overflow: hidden;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 12px 40px rgba(0, 0, 0, 0.35);
}

.wr-map__map .rtv-map-host {
  width: 100%;
  height: 100%;
  min-height: 0;
  border: none;
  border-radius: inherit;
}

.wr-map__seo {
  margin-top: clamp(1.75rem, 4vw, 2.75rem);
}

.wr-map__seo-steps {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.wr-map__seo-steps li {
  margin-bottom: 0.55rem;
}

.wr-map__seo-steps strong {
  color: var(--color-parchment);
}

.wr-map__faq {
  margin: 0.85rem 0 0;
  display: grid;
  gap: 0.85rem;
}

.wr-map__faq-item {
  margin: 0;
  padding: 0.85rem 1rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(160, 188, 210, 0.14);
  background: rgba(4, 6, 10, 0.35);
}

.wr-map__faq-item dt {
  margin: 0 0 0.4rem;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-parchment);
}

.wr-map__faq-item dd {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.62;
  color: var(--color-text-muted);
}

.wr-map__faq-item dd code {
  font-size: 0.88em;
  color: var(--color-brass);
}

@media (min-width: 1025px) {
  .wr-map__panel--split {
    grid-template-columns: minmax(188px, 14rem) minmax(0, 1fr);
    grid-template-rows: var(--wr-map-viewport-height);
    align-items: stretch;
  }

  .wr-map__panel--split > .wr-map__sidebar,
  .wr-map__panel--split > .wr-map__map-column {
    min-height: 0;
  }

  .wr-map__sidebar {
    order: 0;
    height: 100%;
    max-height: none;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid rgba(160, 188, 210, 0.14);
    box-shadow: inset -8px 0 20px rgba(0, 0, 0, 0.12);
  }

  .wr-map__map-column {
    order: 0;
    height: 100%;
    max-height: 100%;
    padding: 0.4rem 0.4rem 0.4rem 0.75rem;
  }

  .wr-map__map-toolbar {
    padding-left: 0.35rem;
    padding-right: 0.35rem;
    border-radius: 10px 10px 0 0;
    border: 1px solid rgba(160, 188, 210, 0.12);
    border-bottom: none;
    margin-bottom: 0;
  }

  .wr-map__map-wrap {
    flex: 1;
    min-height: 0;
    border-radius: 0 0 10px 10px;
  }

  .wr-map__map {
    border-radius: 0 0 10px 10px;
  }
}

.wr-map__hud {
  position: absolute;
  z-index: 500;
  right: 8px;
  bottom: 8px;
  padding: 0.3rem 0.45rem;
  border-radius: 4px;
  border: 1px solid rgba(160, 188, 210, 0.22);
  background: rgba(6, 9, 16, 0.9);
  font-family: ui-monospace, monospace;
  font-size: 0.65rem;
  color: var(--color-cyan-bright);
  pointer-events: none;
}

.wr-map__layers-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-top: none;
}

.wr-map__layers-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0.85rem;
  min-height: 7rem;
}

.wr-map__layers-placeholder-text {
  margin: 0;
  font-size: 0.84rem;
  color: var(--color-text-muted);
  text-align: center;
}

.wr-map__layers {
  display: flex;
  flex-direction: column;
  position: relative;
  inset: auto;
  width: 100%;
  flex: 1;
  min-height: 0;
  max-height: none;
  overflow: hidden;
}

.wr-map__layers-head {
  padding: 0.5rem 0.7rem 0.45rem;
  border-bottom: 1px solid rgba(160, 188, 210, 0.1);
  background: linear-gradient(90deg, rgba(212, 180, 106, 0.08), transparent 42%);
}

.wr-map__layers-title {
  margin: 0 0 0.2rem;
  font-size: 1rem;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-parchment);
  text-shadow: none;
}

.wr-map__layers-hint {
  margin: 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.wr-map__layers-body {
  flex: 1;
  min-height: 0;
  max-height: none;
  overflow-y: auto;
  padding: 0.35rem 0 0.65rem;
  scrollbar-gutter: stable;
}

.wr-map__layers-body::-webkit-scrollbar {
  width: 6px;
}

.wr-map__layers-body::-webkit-scrollbar-thumb {
  background: rgba(160, 188, 210, 0.22);
  border-radius: 999px;
}

.wr-map__sidebar .wr-map__kind-grid {
  grid-template-columns: 1fr;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.wr-map__cat-head {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.65rem;
}

.wr-map__cat-toggle {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.wr-map__cat-toggle:hover {
  color: var(--color-parchment);
}

.wr-map__cat-chev {
  width: 1rem;
  font-size: 0.65rem;
  opacity: 0.7;
}

.wr-map__cat-label {
  font-weight: 600;
}

.wr-map__cat-summary {
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--color-gold-hot);
}

.wr-map__cat-master {
  accent-color: var(--color-gold-hot);
}

.wr-map__kind-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.35rem;
  padding: 0.15rem 0.65rem 0.55rem 1.5rem;
}

@media (max-width: 768px) {
  .wr-map__kind-grid {
    grid-template-columns: 1fr;
  }
}

.wr-map .village-kind-cell {
  display: flex;
  align-items: stretch;
  min-width: 0;
  border-radius: 6px;
  border: 1px solid rgba(160, 188, 210, 0.15);
  background: rgba(6, 9, 16, 0.35);
}

.wr-map .village-kind-cell__toggle {
  display: flex;
  align-items: center;
  padding: 0 0.35rem 0 0.45rem;
  border-right: 1px solid rgba(160, 188, 210, 0.12);
  cursor: pointer;
}

.wr-map .village-kind-cell__main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem;
  min-width: 0;
  margin: 0;
  padding: 0.4rem 0.5rem;
  border: none;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.wr-map .village-kind-cell__main:hover:not(:disabled) {
  color: var(--color-parchment);
}

.wr-map .village-kind-cell__main:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.wr-map__kind-count {
  flex-shrink: 0;
  min-width: 1.35rem;
  text-align: center;
  font-size: 0.72rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
}

.wr-map__error {
  margin: 0;
  padding: 0.65rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(176, 61, 50, 0.45);
  color: #f0d8d4;
  background: rgba(40, 14, 12, 0.55);
}

.wr-map .map-raster-poi-search__shell {
  max-width: 100%;
  padding: 0;
  border: none;
  background: transparent;
}

.wr-map .map-raster-poi-search__label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  cursor: pointer;
}

.wr-map .map-raster-poi-search__label-mark {
  width: 5px;
  height: 5px;
  border-radius: 1px;
  background: var(--color-gold-hot);
}

.wr-map .map-raster-poi-search__label-text {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.wr-map .map-raster-poi-search__row {
  display: flex;
  gap: 0.4rem;
}

.wr-map .map-raster-poi-search__input-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.05rem 0.5rem;
  border-radius: 6px;
  border: 1px solid rgba(160, 188, 210, 0.2);
  background: rgba(6, 9, 16, 0.45);
}

.wr-map .map-raster-poi-search__input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  padding: 0.45rem 0;
}

.wr-map .map-raster-poi-search__input::placeholder {
  color: var(--color-text-muted);
}

.wr-map .map-raster-poi-search__input:focus {
  outline: none;
}

.wr-map .map-raster-poi-search__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  border-radius: 6px;
  border: 1px solid rgba(160, 188, 210, 0.2);
  background: rgba(6, 9, 16, 0.45);
  color: var(--color-text-muted);
  cursor: pointer;
}

.wr-map .map-raster-poi-search__meta {
  margin: 0.4rem 0 0;
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

.wr-map .map-raster-poi-search__meta--warn {
  color: #e8a090;
}

.wr-map .map-raster-poi-search__meta--ok {
  color: var(--color-sea);
}

.wr-map .map-raster-poi-search__mag {
  width: 1.2rem;
  height: 1.2rem;
  color: var(--color-text-muted);
}

.wr-map .map-raster-poi-search__mag svg {
  width: 100%;
  height: 100%;
}

.wr-map .map-raster-poi-search--map-loading {
  opacity: 0.55;
  pointer-events: none;
}

.map-page.wr-map .leaflet-container {
  background: var(--wr-map-ocean);
  font-family: inherit;
}

.map-page .leaflet-control-zoom a {
  background: rgba(18, 26, 38, 0.92);
  color: var(--color-text);
  border-color: rgba(160, 188, 210, 0.25);
}

.map-page .leaflet-bar {
  border: 1px solid rgba(160, 188, 210, 0.25);
  border-radius: 6px;
  overflow: hidden;
}

.map-page .rtv-map-marker {
  background: transparent;
  border: none;
}

.map-page .rtv-map-pin {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  pointer-events: none;
  color: #e8eef5;
}

.map-page .rtv-map-pin__svg,
.map-page .rtv-map-pin > svg,
.map-page .rtv-map-pin__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.55));
}

.map-page .rtv-map-marker--vcat-1 .rtv-map-pin {
  color: #e6cf92;
}

.map-page .rtv-map-marker--vcat-2 .rtv-map-pin {
  color: #c5d0de;
}

.map-page .rtv-map-marker--vcat-3 .rtv-map-pin {
  color: #c4b6dc;
}

.map-page .rtv-map-marker--vcat-4 .rtv-map-pin {
  color: #8ec8ff;
}

.map-page .rtv-map-marker--vcat-5 .rtv-map-pin {
  color: #9dd89d;
}

.map-page .rtv-map-marker--vcat-6 .rtv-map-pin {
  color: #d4a574;
}

.map-page .rtv-map-marker--selected .rtv-map-pin {
  outline: 2px solid rgba(212, 180, 106, 0.85);
  outline-offset: 2px;
  border-radius: 4px;
}

.map-page .leaflet-popup-content-wrapper {
  background: rgba(12, 18, 28, 0.96);
  color: var(--color-text);
  border: 1px solid rgba(160, 188, 210, 0.25);
  border-radius: 8px;
}

.map-page .leaflet-popup-tip {
  background: rgba(12, 18, 28, 0.96);
  border: 1px solid rgba(160, 188, 210, 0.25);
  border-top: none;
  border-right: none;
}

.map-page .rtv-map-popup strong {
  color: var(--color-gold-hot);
}

.map-page .rtv-map-popup__desc {
  margin: 0.5rem 0 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: rgba(230, 236, 244, 0.88);
  font-weight: 400;
}

.map-page .rtv-map-popup__roll-meta {
  margin: 0.5rem 0 0.35rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: rgba(230, 236, 244, 0.88);
}

.map-page .rtv-map-popup__rolls {
  margin-top: 0.35rem;
}

.map-page .rtv-map-popup__loot-wrap {
  margin-top: 0.35rem;
  max-height: min(240px, 45vh);
  overflow: auto;
  border-radius: 6px;
  border: 1px solid rgba(160, 188, 210, 0.16);
  background: rgba(4, 8, 14, 0.5);
}

.map-page .rtv-map-popup__loot-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.74rem;
}

.map-page .rtv-map-popup__loot-table th {
  position: sticky;
  top: 0;
  background: rgba(12, 18, 28, 0.96);
  text-align: left;
  padding: 0.3rem 0.38rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.58rem;
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(160, 188, 210, 0.22);
}

.map-page .rtv-map-popup__loot-table th:nth-child(2),
.map-page .rtv-map-popup__loot-table th:nth-child(3) {
  text-align: right;
}

.map-page .rtv-map-popup__loot-table td {
  padding: 0.28rem 0.38rem;
  vertical-align: middle;
  border-bottom: 1px solid rgba(160, 188, 210, 0.08);
}

.map-page .rtv-map-popup__loot-cell {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  min-width: 0;
}

.map-page .rtv-map-popup__loot-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  object-fit: contain;
  border: 1px solid rgba(160, 188, 210, 0.18);
  background: rgba(6, 10, 18, 0.65);
}

.map-page .rtv-map-popup__loot-icon--ph {
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: 1px dashed rgba(160, 188, 210, 0.2);
  background: rgba(6, 10, 18, 0.35);
}

.map-page .rtv-map-popup__loot-link {
  font-weight: 600;
  color: var(--color-parchment);
  text-decoration: none;
}

.map-page .rtv-map-popup__loot-name {
  font-weight: 600;
  color: var(--color-parchment);
}

.map-page .rtv-map-popup__loot-link:hover {
  color: var(--color-gold-hot);
  text-decoration: underline;
}

.map-page .rtv-map-popup__loot-name--common {
  color: #c5d0de;
}

.map-page .rtv-map-popup__loot-name--uncommon {
  color: #9dd89d;
}

.map-page .rtv-map-popup__loot-name--rare {
  color: #8ec8ff;
}

.map-page .rtv-map-popup__loot-name--epic {
  color: #c4b6dc;
}

.map-page .rtv-map-popup__loot-name--legendary {
  color: #f0d78c;
}

.map-page .rtv-map-popup__loot-td-q,
.map-page .rtv-map-popup__loot-td-ch {
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;
  color: rgba(230, 236, 244, 0.92);
}

.map-page .rtv-map-popup__loot-foot {
  margin: 0.45rem 0 0;
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--color-text-muted);
}

.map-page .rtv-map-popup__loot-foot a {
  color: var(--color-sea);
}

.map-page .rtv-map-popup__html code {
  font-size: 0.72rem;
  word-break: break-all;
}
</style>
