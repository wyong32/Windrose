/**
 * 打开 windrose.tools 地图，按 windroseMap.js 内归一化坐标逐点点标点，从 Leaflet 弹窗 DOM 解析
 * 「Item / QTY / Chance」箱表（与你在官网上看到的列表一致），wiki 补图后写回
 * `src/data/map/windrose-map-pin-popups.json` 的对应 wr- key（合并保留原有 runtimeName、探索 XP、任务文案等）。
 *
 * 请先跑一次：`node scripts/sync-map-pin-popups.mjs`（拉 runtime 基线）。本脚本写入 **`poiRewards`** / **`chestCount`**；全量爬取结束后**再跑一次 sync**，用 API 重写 `rewards`/`questRewards` 并保留本脚本写入的 `poiRewards`。弹窗合并见 `useWindroseMap.popupForPin`。每成功一个标点即保存 JSON，避免长跑中断丢进度。
 *
 * 依赖：playwright — `npx playwright install chromium`
 *
 * 用法：
 *   npm run scrape-map-loot
 *   或 `node scripts/scrape-poi-loot-into-pin-popups.mjs`
 *   PowerShell: `$env:LIMIT='50'; $env:HEADLESS='1'; npm run scrape-map-loot`
 *   全量：`LIMIT=99999`（或 PowerShell `$env:LIMIT='99999'`）
 *
 * 环境变量：LAYOUT、LIMIT、OFFSET、HEADLESS、DELAY_MS、WRITE=1（默认写入 pin-popups；WRITE=0 只打印统计）
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const MAP_JS = path.join(ROOT, 'src/data/map/windroseMap.js')
const POPUPS_JSON = path.join(ROOT, 'src/data/map/windrose-map-pin-popups.json')

const REMOTE = 'https://windrose.tools'
const LAYOUT = process.env.LAYOUT || '1f2f09693d80952d'
/** 未设置 LIMIT 时只跑前若干个点，避免误跑全图；全量请设 LIMIT=99999 */
const LIMIT_ALL = 99999
const rawLimit =
  process.env.LIMIT != null && process.env.LIMIT !== ''
    ? parseInt(process.env.LIMIT, 10)
    : 15
const OFFSET = process.env.OFFSET ? parseInt(process.env.OFFSET, 10) : 0
const HEADLESS = process.env.HEADLESS !== '0'
const DELAY_MS = process.env.DELAY_MS ? parseInt(process.env.DELAY_MS, 10) : 600
const WRITE = process.env.WRITE !== '0'

async function enrichRewards(rows) {
  const wikiSources = [
    (await import('../src/data/wiki/items/resources.js')).default,
    (await import('../src/data/wiki/items/consumables.js')).default,
    (await import('../src/data/wiki/items/weapons.js')).default,
    (await import('../src/data/wiki/items/equipment.js')).default,
    (await import('../src/data/wiki/items/ship.js')).default,
    (await import('../src/data/wiki/items/misc.js')).default,
  ]
  const categories = ['resources', 'consumables', 'weapons', 'equipment', 'ship', 'misc']
  const byName = new Map()
  for (let i = 0; i < wikiSources.length; i++) {
    const arr = wikiSources[i]
    const cat = categories[i]
    if (!Array.isArray(arr)) continue
    for (const row of arr) {
      const n = row?.name && String(row.name).trim()
      if (n && !byName.has(n)) byName.set(n, { row, cat })
    }
  }
  return rows.map((r) => {
    const hit = byName.get(String(r.label || '').trim())
    if (!hit) return r
    const { row, cat } = hit
    return {
      ...r,
      rarity: r.rarity || row.rarity || '',
      image: r.image || (typeof row.image === 'string' ? row.image : ''),
      wikiCategory: r.wikiCategory || cat,
      wikiItemId: r.wikiItemId || row.id,
    }
  })
}

/** wr- 标点（跳过任务叠加 id），含归一化 x/y */
function loadPinTargets() {
  const text = fs.readFileSync(MAP_JS, 'utf8')
  /** @type {{ id: string, x: number, y: number }[]} */
  const list = []
  const re = /"id"\s*:\s*"(wr-[^"]+)"/g
  let m
  while ((m = re.exec(text)) !== null) {
    const id = m[1]
    if (id.includes('-quest-')) continue
    const pos = m.index
    const slice = text.slice(pos, pos + 900)
    const xm = slice.match(/"x"\s*:\s*([\d.]+)/)
    const ym = slice.match(/"y"\s*:\s*([\d.]+)/)
    if (!xm || !ym) continue
    list.push({ id, x: parseFloat(xm[1]), y: parseFloat(ym[1]) })
  }
  return list
}

async function scrapeOpenPopup(page) {
  return page.evaluate(() => {
    const norm = (s) => (s || '').replace(/\s+/g, ' ').trim()
    const pop = document.querySelector('.leaflet-popup .leaflet-popup-content')
    if (!pop) return { chestCount: null, rewards: [] }

    const fullText = norm(pop.innerText || '')
    let chestCount = null
    const cm = fullText.match(/Chests?\s*:?\s*(\d+)/i)
    if (cm) chestCount = parseInt(cm[1], 10)

    const tables = Array.from(pop.querySelectorAll('table'))
    const rewards = []
    for (const t of tables) {
      const headerRow = t.querySelector('thead tr') || t.querySelector('tr')
      if (!headerRow) continue
      const ths = Array.from(headerRow.querySelectorAll('th, td')).map((el) => norm(el.textContent))
      const joined = ths.join(' ')
      if (!/Item/i.test(joined) || !/QTY|Qty/i.test(joined) || !/Chance/i.test(joined)) continue
      const itemCol = ths.findIndex((x) => /\bitem\b/i.test(x))
      const qtyColIx = ths.findIndex((x) => /\bqty\b/i.test(x))
      const chanceColIx = ths.findIndex((x) => /\bchance\b/i.test(x))

      const body = t.tBodies[0] || t
      const dataRows = Array.from(body.querySelectorAll('tr')).filter((tr) => tr.querySelector('td'))
      for (const tr of dataRows) {
        const tds = Array.from(tr.querySelectorAll('td'))
        if (tds.length < 3) continue
        const itemCell = tds[itemCol >= 0 ? itemCol : 0]
        const qtyCol = norm(tds[qtyColIx >= 0 ? qtyColIx : 1]?.textContent || '')
        const chanceCol = norm(tds[chanceColIx >= 0 ? chanceColIx : 2]?.textContent || '')
        let label = norm(itemCell.innerText || itemCell.textContent || '')
        const img = itemCell.querySelector('img')
        let image = ''
        if (img && img.src) {
          image = img.src
          if (label === '' && img.alt) label = norm(img.alt)
        }
        if (!image) {
          const anyImg = tr.querySelector('img')
          if (anyImg?.src) image = anyImg.src
        }
        const chanceMatch = chanceCol.match(/([\d.]+)\s*%/)
        let chance = chanceMatch ? parseFloat(chanceMatch[1]) : parseFloat(chanceCol)
        if (!Number.isFinite(chance)) chance = NaN

        const qtyStr = qtyCol.trim()
        const isRange = /\d\s*-\s*\d/.test(qtyStr)
        const base = { label: label || 'Unknown', rarity: '' }
        if (chanceCol) base.chanceText = chanceCol
        if (Number.isFinite(chance)) base.chance = chance
        if (image) base.image = image
        if (isRange || (/[^\d.]/.test(qtyStr) && qtyStr !== '')) {
          rewards.push({ ...base, quantityText: qtyStr })
        } else {
          const n = parseFloat(qtyStr)
          rewards.push({ ...base, quantity: Number.isFinite(n) ? n : 1 })
        }
      }
    }

    return {
      chestCount: Number.isFinite(chestCount) ? chestCount : null,
      rewards,
    }
  })
}

async function clickPin(page, xNorm, yNorm, flipY) {
  const loc = page.locator('.leaflet-container').first()
  await loc.waitFor({ state: 'visible', timeout: 120000 })
  const box = await loc.boundingBox()
  if (!box) throw new Error('no leaflet bbox')
  const yn = flipY ? 1 - yNorm : yNorm
  await page.mouse.click(box.x + xNorm * box.width, box.y + yn * box.height)
}

async function tryScrapeAt(page, x, y, flipY) {
  await page.keyboard.press('Escape').catch(() => {})
  await page.waitForTimeout(200)
  await clickPin(page, x, y, flipY)
  await page.waitForTimeout(DELAY_MS + 150)
  try {
    await page.locator('.leaflet-popup-content').first().waitFor({ state: 'visible', timeout: 5000 })
  } catch {
    return null
  }
  return scrapeOpenPopup(page)
}

async function main() {
  const targets = loadPinTargets()
  const slice = targets.slice(OFFSET, OFFSET + (rawLimit >= LIMIT_ALL ? targets.length : Math.min(rawLimit, targets.length - OFFSET)))

  console.error(
    `pins (wr-, no -quest-): ${targets.length}; scraping ${slice.length} (OFFSET=${OFFSET}, LIMIT=${rawLimit >= LIMIT_ALL ? 'ALL' : rawLimit})`,
  )

  const browser = await chromium.launch({ headless: HEADLESS })
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
  })
  await page.goto(`${REMOTE}/map?layout=${encodeURIComponent(LAYOUT)}`, {
    waitUntil: 'domcontentloaded',
    timeout: 180000,
  })
  await page.waitForSelector('.leaflet-container', { timeout: 120000 })
  await page.waitForSelector('.leaflet-marker-icon', { timeout: 120000 }).catch(() => {})
  await page.waitForTimeout(800)
  try {
    await page.waitForFunction(
      () => !/\bLoading saved world layout\b/i.test(document.body?.innerText || ''),
      { timeout: 90000 },
    )
  } catch {
    /* 部分环境下文案不同，忽略 */
  }
  await page.waitForTimeout(2200)

  /** 逐点落盘：长跑中断时已抓到的箱表不会丢 */
  let existingPopups = Object.create(null)
  if (WRITE) {
    try {
      existingPopups = JSON.parse(fs.readFileSync(POPUPS_JSON, 'utf8'))
    } catch {
      existingPopups = Object.create(null)
    }
  }

  function mergePoiRowIntoJson(row) {
    const cur = existingPopups[row.id]
    if (!cur) {
      existingPopups[row.id] = {
        runtimeName: '',
        explorationXp: null,
        questExperience: null,
        questDescription: '',
        rewards: [],
        poiRewards: row.rewards,
      }
    } else {
      existingPopups[row.id] = {
        ...cur,
        poiRewards: row.rewards,
      }
    }
    if (row.chestCount != null) existingPopups[row.id].chestCount = row.chestCount
    else delete existingPopups[row.id].chestCount
    fs.writeFileSync(POPUPS_JSON, JSON.stringify(existingPopups, null, 2) + '\n', 'utf8')
  }

  let ok = 0
  let empty = 0

  for (const { id, x, y } of slice) {
    process.stderr.write(`→ ${id} … `)
    let data = await tryScrapeAt(page, x, y, false)
    if (!data?.rewards?.length) data = await tryScrapeAt(page, x, y, true)
    if (data?.rewards?.length) {
      data.rewards = await enrichRewards(data.rewards)
      ok++
      console.error(`OK ${data.rewards.length} rows`)
      if (WRITE) {
        mergePoiRowIntoJson({
          id,
          chestCount: data.chestCount,
          rewards: data.rewards,
        })
      }
    } else {
      empty++
      console.error('no loot table')
    }
    await page.waitForTimeout(DELAY_MS)
  }

  await browser.close()

  if (!WRITE) {
    console.error(`done. scraped=${ok} empty=${empty} (WRITE=0, no file change)`)
    return
  }

  console.error(`wrote ${POPUPS_JSON} incrementally. scraped=${ok} empty=${empty}`)
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
