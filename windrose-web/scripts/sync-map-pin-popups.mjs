/**
 * 按 windrose.tools `GET /api/map/runtime?layout=…` 生成 `windrose-map-pin-popups.json`（与地图布局 [windrose.tools/map](https://windrose.tools/map?layout=1f2f09693d80952d) 同源）。
 * 仅写入 runtime 中存在的字段：任务奖励来自 `questPopup.rewards`；探索 XP 来自 `poiPopup.explorationExperienceCount`。
 * 奖励行的 chance 若 API 未提供则不输出（弹窗显示为 —）。图标优先 mirror 到 public/map-loot-icons/，失败则用站内 wiki 图路径；再不济留空 src，不写外链占位。
 *
 * POI 箱表不在该 API 中；由 `scrape-poi-loot-into-pin-popups.mjs` 写入 JSON 的 **`poiRewards`** / **`chestCount`**。同步时会从现有 JSON **保留**这些字段，避免刷 runtime 时把已爬取的箱表冲掉。
 *
 * 运行：node scripts/sync-map-pin-popups.mjs [layoutId]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT = path.join(ROOT, 'src/data/map/windrose-map-pin-popups.json')
const ICON_DIR = path.join(ROOT, 'public/map-loot-icons')
const REMOTE = 'https://windrose.tools'
const LAYOUT = process.argv[2] || '1f2f09693d80952d'

const wikiSources = [
  await import('../src/data/wiki/items/resources.js').then((m) => m.default),
  await import('../src/data/wiki/items/consumables.js').then((m) => m.default),
  await import('../src/data/wiki/items/weapons.js').then((m) => m.default),
  await import('../src/data/wiki/items/equipment.js').then((m) => m.default),
  await import('../src/data/wiki/items/ship.js').then((m) => m.default),
  await import('../src/data/wiki/items/misc.js').then((m) => m.default),
]
const categories = ['resources', 'consumables', 'weapons', 'equipment', 'ship', 'misc']

/** @type {Map<string, { wikiCategory: string, wikiItemId: string, wikiImage: string }>} */
const wikiByItemId = new Map()
/** @type {Map<string, string>} 物品英文名 → 站内 wiki 图 */
const wikiImageByLabel = new Map()
/** @type {Map<string, { wikiCategory: string, wikiItemId: string, wikiImage: string }>} */
const wikiMetaByLabel = new Map()
for (let i = 0; i < wikiSources.length; i++) {
  const rows = wikiSources[i]
  const cat = categories[i]
  if (!Array.isArray(rows)) continue
  for (const row of rows) {
    const name = row?.name && String(row.name).trim()
    const img = typeof row?.image === 'string' && row.image.startsWith('/') ? row.image : ''
    if (row?.id && !wikiByItemId.has(row.id)) {
      wikiByItemId.set(row.id, {
        wikiCategory: cat,
        wikiItemId: row.id,
        wikiImage: img,
      })
    }
    if (name && img && !wikiImageByLabel.has(name)) wikiImageByLabel.set(name, img)
    if (name && row?.id && !wikiMetaByLabel.has(name)) {
      wikiMetaByLabel.set(name, { wikiCategory: cat, wikiItemId: row.id, wikiImage: img })
    }
  }
}

function pinIdFromRuntimeId(rid) {
  const s = String(rid)
  const q = ':quest:'
  const i = s.indexOf(q)
  if (i === -1) return 'wr-' + s.split(':').join('-')
  return 'wr-' + s.slice(0, i).split(':').join('-') + '-quest-' + s.slice(i + q.length)
}

const res = await fetch(`${REMOTE}/api/map/runtime?layout=${encodeURIComponent(LAYOUT)}`)
if (!res.ok) throw new Error(`runtime ${res.status}`)
const { markers } = await res.json()

/** 保留抓取脚本写入的 POI 箱表，避免全量 sync 覆盖 */
let existingPopups = Object.create(null)
try {
  if (fs.existsSync(OUT)) {
    existingPopups = JSON.parse(fs.readFileSync(OUT, 'utf8'))
  }
} catch {
  existingPopups = Object.create(null)
}

fs.mkdirSync(ICON_DIR, { recursive: true })

/** @type {Map<string, string>} */
const iconCache = new Map()

async function localIconFor(item) {
  const iconPath = item?.icon
  if (!iconPath || typeof iconPath !== 'string') return ''
  const full = iconPath.startsWith('http') ? iconPath : `${REMOTE}${iconPath.startsWith('/') ? '' : '/'}${iconPath}`
  if (iconCache.has(full)) return iconCache.get(full)

  const baseFromUrl = path.basename(iconPath.replace(/\\/g, '/').split('?')[0]) || 'icon.webp'
  const safe = baseFromUrl.replace(/[^a-zA-Z0-9._-]/g, '_')
  const dest = path.join(ICON_DIR, safe)

  let publicPath = `/map-loot-icons/${safe}`
  try {
    if (!fs.existsSync(dest)) {
      const ir = await fetch(full)
      if (!ir.ok) throw new Error(String(ir.status))
      fs.writeFileSync(dest, Buffer.from(await ir.arrayBuffer()))
    }
  } catch {
    const wiki = wikiByItemId.get(item?.id)
    const localWiki =
      wiki?.wikiImage && String(wiki.wikiImage).startsWith('/') ? String(wiki.wikiImage) : ''
    const byName = item?.name && wikiImageByLabel.get(String(item.name).trim())
    publicPath =
      localWiki || (byName && byName.startsWith('/') ? byName : '') || ''
  }
  iconCache.set(full, publicPath)
  return publicPath
}

function rewardRowsFromQuest(m) {
  const rewards = m.questPopup?.rewards
  if (!Array.isArray(rewards) || !rewards.length) return []
  return rewards
}

const out = Object.create(null)

for (const m of markers || []) {
  if (m == null || m.id == null) continue
  const pinId = pinIdFromRuntimeId(m.id)
  const rewardsRaw = rewardRowsFromQuest(m)
  /** @type {Array<object>} */
  const rewards = []
  for (const rw of rewardsRaw) {
    const req = rw?.requirement
    const item = req?.item
    if (!item?.name) continue
    const qty = Number(req?.quantity)
    const image = await localIconFor(item)
    const wiki = wikiByItemId.get(item.id) || wikiMetaByLabel.get(String(item.name || '').trim())
    rewards.push({
      label: item.name,
      quantity: Number.isFinite(qty) ? qty : 1,
      rarity: item.rarity ?? '',
      image,
      wikiCategory: wiki?.wikiCategory ?? '',
      wikiItemId: wiki?.wikiItemId ?? '',
    })
  }

  const hasPoi = m.poiPopup && typeof m.poiPopup === 'object'
  const hasQuest = m.questPopup && typeof m.questPopup === 'object'
  const explorationXpRaw = hasPoi && m.poiPopup.explorationExperienceCount != null
    ? Number(m.poiPopup.explorationExperienceCount)
    : null
  const explorationXp =
    explorationXpRaw != null && Number.isFinite(explorationXpRaw) && explorationXpRaw > 0
      ? explorationXpRaw
      : null

  const questXpRaw = hasQuest && m.questPopup.experience != null ? Number(m.questPopup.experience) : null
  const questExperience =
    questXpRaw != null && Number.isFinite(questXpRaw) && questXpRaw > 0 ? questXpRaw : null

  const prev = existingPopups[pinId] && typeof existingPopups[pinId] === 'object' ? existingPopups[pinId] : {}
  const poiRewards =
    Array.isArray(prev.poiRewards) && prev.poiRewards.length ? prev.poiRewards : undefined
  const chestCount = prev.chestCount != null ? prev.chestCount : undefined

  out[pinId] = {
    runtimeName: String(m.name ?? ''),
    explorationXp,
    questExperience,
    questDescription: hasQuest && m.questPopup.description ? String(m.questPopup.description) : '',
    rewards,
    ...(rewards.length ? { questRewards: rewards } : {}),
    ...(poiRewards ? { poiRewards } : {}),
    ...(chestCount != null ? { chestCount } : {}),
  }
}

fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8')
console.log('wrote', OUT, 'keys', Object.keys(out).length)
