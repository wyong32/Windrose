/**
 * 扫描 `src/data/wiki/items/*.js` 中引用的 `/images/wiki/...` 路径，检查 `public` 下是否存在对应文件。
 * 用法：node scripts/check-missing-wiki-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const WIKI_DIR = path.join(ROOT, 'src/data/wiki/items')
const PUBLIC = path.join(ROOT, 'public')

const seen = new Set()
const missing = []

for (const f of fs.readdirSync(WIKI_DIR)) {
  if (!f.endsWith('.js')) continue
  const text = fs.readFileSync(path.join(WIKI_DIR, f), 'utf8')
  let m
  const fileRe = /["'](\/images\/wiki\/[^"']+)["']/g
  while ((m = fileRe.exec(text)) !== null) {
    const p = m[1]
    if (seen.has(p)) continue
    seen.add(p)
    const rel = p.replace(/^\//, '')
    const abs = path.join(PUBLIC, rel)
    if (!fs.existsSync(abs)) missing.push(p)
  }
}

if (missing.length) {
  console.error('Missing', missing.length, 'files:')
  for (const p of missing.sort()) console.error(' ', p)
  process.exitCode = 1
} else {
  console.error('OK: all', seen.size, 'unique /images/wiki/… paths from wiki/items/*.js exist under public/')
}
