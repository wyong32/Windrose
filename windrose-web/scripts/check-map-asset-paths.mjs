/**
 * 检查 `windrose-map-pin-popups.json` 与 `windroseMap.js` 中本地图路径（/map-loot-icons/、/images/）是否存在于 public。
 * 用法：node scripts/check-map-asset-paths.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const missing = new Set()

function checkFile(text) {
  const re = /["'](\/map-loot-icons\/[^"']+|\/images\/wiki\/[^"']+)["']/g
  let m
  while ((m = re.exec(text)) !== null) {
    const p = m[1]
    const rel = p.replace(/^\//, '')
    if (!fs.existsSync(path.join(PUBLIC, rel))) missing.add(p)
  }
}

checkFile(fs.readFileSync(path.join(ROOT, 'src/data/map/windrose-map-pin-popups.json'), 'utf8'))
checkFile(fs.readFileSync(path.join(ROOT, 'src/data/map/windroseMap.js'), 'utf8'))

if (missing.size) {
  console.error('Missing files for', missing.size, 'paths:')
  for (const p of [...missing].sort()) console.error(' ', p)
  process.exitCode = 1
} else {
  console.error('OK: map popups + windroseMap local image paths exist under public/')
}
