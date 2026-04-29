import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import guides from '../src/data/guides/guideArticles.js'
import mods from '../src/data/mods/modArticles.js'
import { seoConfig } from '../src/seo/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullDomain = seoConfig.fullDomain.replace(/\/+$/, '')

const staticRoutes = [
  { path: '/', name: 'home' },
  { path: '/getting-started', name: 'getting-started' },
  { path: '/advanced', name: 'advanced' },
  { path: '/talents', name: 'talents' },
  { path: '/wiki', name: 'wiki' },
  { path: '/wiki/resources', name: 'wiki-resources' },
  { path: '/wiki/consumables', name: 'wiki-consumables' },
  { path: '/wiki/weapons', name: 'wiki-weapons' },
  { path: '/wiki/equipment', name: 'wiki-equipment' },
  { path: '/wiki/ship', name: 'wiki-ship' },
  { path: '/wiki/misc', name: 'wiki-misc' },
  { path: '/map', name: 'map' },
  { path: '/guides', name: 'guides' },
  { path: '/mods', name: 'mods' },
  { path: '/privacy-policy', name: 'privacy-policy' },
  { path: '/terms-of-use', name: 'terms-of-use' },
  { path: '/copyright', name: 'copyright' },
  { path: '/about-us', name: 'about-us' },
  { path: '/contact-us', name: 'contact-us' },
]

function getPriority(name) {
  return (seoConfig.priorities && seoConfig.priorities[name]) ?? 0.7
}

function getChangefreq(name) {
  return (seoConfig.changefreq && seoConfig.changefreq[name]) ?? 'monthly'
}

function urlNode(loc, lastmod, changefreq, priority) {
  /* 避免 0.95 等浮点经 toFixed(1) 变成 0.9 */
  const p = String(Math.round((priority ?? 0.7) * 100) / 100)
  return `  <url>
    <loc>${fullDomain}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`
}

function generate() {
  const lastmod = new Date().toISOString().split('T')[0]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  for (const r of staticRoutes) {
    xml += `\n${urlNode(r.path, lastmod, getChangefreq(r.name), getPriority(r.name))}`
  }

  const guideList = Array.isArray(guides) ? guides : []
  for (const g of guideList) {
    if (!g?.addressBar) continue
    const slug = String(g.addressBar).replace(/^\/+|\/+$/g, '')
    const guidePath = `/guides/${slug}`
    const date = g.publishDate ? String(g.publishDate).split('T')[0] : lastmod
    xml += `\n${urlNode(guidePath, date, getChangefreq('guide-article'), getPriority('guide-article'))}`
  }

  const modList = Array.isArray(mods) ? mods : []
  for (const m of modList) {
    if (!m?.addressBar) continue
    const slug = String(m.addressBar).replace(/^\/+|\/+$/g, '')
    const modPath = `/mods/${slug}`
    const date = m.publishDate ? String(m.publishDate).split('T')[0] : lastmod
    xml += `\n${urlNode(modPath, date, getChangefreq('mod-article'), getPriority('mod-article'))}`
  }

  xml += '\n</urlset>'

  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const publicDir = path.dirname(publicPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log('Sitemap written to public/sitemap.xml')

  const count = (xml.match(/<url>/g) || []).length
  console.log(`Total URLs: ${count}`)
}

generate()
