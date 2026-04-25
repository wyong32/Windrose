/**
 * 图钉：与 windrose.tools 一致使用 `<img>`，资源在 `public/map-markers/`（由脚本从 CDN 拉取）。
 * 每条 pin 的 `markerType` 对应 API `markers[].type`；无字段时按侧栏 `pinIcon` 回退。
 */
import { markerIconPublicUrl } from '@/data/map/markerIconPaths.js'

export const MAP_PIN_LEAFLET_ICON_PX = 24

/** 无 `markerType` 的旧数据：侧栏 `pinIcon` → 用于解析 CDN 的 type 语义 */
const PIN_ICON_FALLBACK_TYPE = {
  brethrenIcon: 'T_MapIcon_Brethren',
  buccaneerIcon: 'T_MapIcon_Buccaneers',
  civilianIcon: 'T_MapIcon_Civilians',
  hideout: 'T_IconPOI_CoastalCamp',
  location: 'T_IconPOI_Quest',
  locked_structure: 'T_IconPOI_Cave',
  bolt: 'T_MapIcon_Outpost_02',
  key: 'T_MapIcon_Altar_02',
  fishing_spot: 'T_IconPOI_Shipwreck',
  fire_candle: 'T_MapIcon_Firebowl',
  enemy_spawn: 'T_MapIcon_Corrupted',
  radio: 'T_MapIcon_StargazerTower',
  tasks: 'T_QuestIcon_Main_Active',
}

function escAttr(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
}

function resolveMarkerType(pin, fromKind) {
  const mt = pin?.markerType
  if (mt && String(mt).trim()) return String(mt).trim()
  const rawId = String(fromKind?.pinIcon ?? pin?.pinIcon ?? 'location')
    .trim()
    .replace(/[^a-z0-9_-]/gi, '')
  const iconId = rawId || 'location'
  return PIN_ICON_FALLBACK_TYPE[iconId] ?? 'T_IconPOI_Quest'
}

/**
 * @param {{ category?: string, pinIcon?: string, markerType?: string }} pin
 * @param {{ pinIcon?: string }} [fromKind]
 */
export function buildMapPinHtml(pin, fromKind) {
  const markerType = resolveMarkerType(pin, fromKind)
  const src = markerIconPublicUrl(markerType)
  const catAttr = escAttr(
    String(pin?.category ?? '')
      .trim()
      .replace(/[^a-z0-9_-]/gi, '') || 'default',
  )
  const px = MAP_PIN_LEAFLET_ICON_PX
  const styleAttr = escAttr(`width:${px}px;height:${px}px`)
  const srcAttr = escAttr(src)
  return `<div class="rtv-map-pin" data-category="${catAttr}" style="${styleAttr}"><img class="rtv-map-pin__img" src="${srcAttr}" alt="" width="${px}" height="${px}" decoding="async" /></div>`
}
