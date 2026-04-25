/**
 * 与 windrose.tools 一致：图标资源位于 `public/map-markers/`，与 CDN
 * `cdn.pixel6.tools/windrose/images/icons/` 路径对应。
 *
 * `pin.markerType` 为 API 的 `markers[].type`（手动大本营为 `T_MapIcon_*`）。
 */

/** @param {string} type */
export function markerRelativePath(type) {
  const t = String(type || '')
  if (t === 'StartLocation') return 'BuildingBits/T_RespawnTent_01.webp'
  if (t === 'Tortuga') return 'map/T_IconPOI_Fort.webp'
  if (t === 'T_QuestIcon_Main_Active') return 'UI/Meta/Adventure/Assets/T_QuestIcon_Main_Active.png'
  if (t === 'T_QuestIcon_Side_Active') return 'UI/Meta/Adventure/Assets/T_QuestIcon_Side_Active.png'
  if (t.startsWith('POI_SeaAdventure_')) return 'map/T_MapIcon_Ship.webp'
  if (t.startsWith('T_MapIcon_') || t.startsWith('T_IconPOI_')) return `map/${t}.webp`
  return 'map/T_IconPOI_Quest.webp'
}

/** 用于 `<img src>`（含 Vite `base`） */
export function markerIconPublicUrl(type) {
  const base = (import.meta.env?.BASE_URL || '/').replace(/([^/])$/, '$1/')
  const rel = markerRelativePath(type).replace(/^\/+/, '')
  return `${base}map-markers/${rel}`.replace(/\/{2,}/g, '/')
}
