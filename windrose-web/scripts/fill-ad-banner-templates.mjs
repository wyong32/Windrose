import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const JOBS = [
  { file: 'src/views/AdvancedView.vue', prefix: 'div-gpt-ad-advanced-', expect: 7 },
  { file: 'src/views/wiki/WikiWeaponsPage.vue', prefix: 'div-gpt-ad-wiki-weapons-', expect: 3 },
  { file: 'src/views/mods/ModsListView.vue', prefix: 'div-gpt-ad-mods-list-', expect: 2 },
  { file: 'src/views/UpdateView.vue', prefix: 'div-gpt-ad-update-', expect: 3 },
  { file: 'src/views/wiki/WikiMiscPage.vue', prefix: 'div-gpt-ad-wiki-misc-', expect: 3 },
  { file: 'src/views/wiki/WikiConsumablesPage.vue', prefix: 'div-gpt-ad-wiki-consumables-', expect: 3 },
  { file: 'src/views/TalentsView.vue', prefix: 'div-gpt-ad-talents-', expect: 4 },
  { file: 'src/views/mods/ModArticleView.vue', prefix: 'div-gpt-ad-mod-article-', expect: 6 },
  { file: 'src/views/wiki/WikiHubView.vue', prefix: 'div-gpt-ad-wiki-hub-', expect: 3 },
  { file: 'src/views/GettingStartedView.vue', prefix: 'div-gpt-ad-getting-started-', expect: 7 },
  { file: 'src/views/guides/GuideArticleView.vue', prefix: 'div-gpt-ad-guide-article-', expect: 5 },
  { file: 'src/views/wiki/WikiResourcesPage.vue', prefix: 'div-gpt-ad-wiki-resources-', expect: 3 },
  { file: 'src/views/guides/GuidesListView.vue', prefix: 'div-gpt-ad-guides-list-', expect: 3 },
  { file: 'src/views/wiki/WikiEquipmentPage.vue', prefix: 'div-gpt-ad-wiki-equipment-', expect: 3 },
  { file: 'src/views/wiki/WikiShipPage.vue', prefix: 'div-gpt-ad-wiki-ship-', expect: 3 },
  { file: 'src/views/MapView.vue', prefix: 'div-gpt-ad-map-', expect: 4 },
]

function bannerNum(slotIndex0) {
  return (slotIndex0 % 3) + 1
}

function patchContent(content, idPrefix, expect) {
  const lines = content.split('\n')
  const out = []
  let slotIndex = 0
  for (const line of lines) {
    if (line.trim() === '广告位') {
      const indent = line.match(/^(\s*)/)[1]
      const num = String(slotIndex + 1).padStart(2, '0')
      const bn = bannerNum(slotIndex)
      slotIndex++
      out.push(`${indent}<!-- /23346398271/windrosegame.net_all_0506/windrosegame.net_0506_banner_${bn} -->`)
      out.push(`${indent}<div id="${idPrefix}${num}" style="min-width: 300px; min-height: 250px"></div>`)
    } else {
      out.push(line)
    }
  }
  if (slotIndex !== expect) {
    throw new Error(`slot count ${slotIndex} !== expect ${expect}`)
  }
  return out.join('\n')
}

for (const job of JOBS) {
  const fp = path.join(root, job.file)
  const raw = fs.readFileSync(fp, 'utf8')
  const text = patchContent(raw, job.prefix, job.expect)
  fs.writeFileSync(fp, text)
  console.log('patched', job.file)
}
