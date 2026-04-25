import { seoConfig } from './config.js'

/**
 * 开发环境用当前 origin，生产用固定 canonical 域名（避免收录 localhost）。
 */
export function getCanonicalOrigin() {
  if (typeof window === 'undefined') {
    return seoConfig.fullDomain.replace(/\/+$/, '')
  }
  if (import.meta.env.DEV) {
    return `${window.location.protocol}//${window.location.host}`
  }
  return seoConfig.fullDomain.replace(/\/+$/, '')
}

/**
 * 将站内路径或绝对 URL 转为绝对 URL（用于 og:image、JSON-LD）。
 */
export function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return ''
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const origin = getCanonicalOrigin()
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  if (!base) return `${origin}${path}`
  return `${origin}/${base.replace(/^\/+/, '')}${path}`.replace(/([^:])\/{2,}/g, '$1/')
}

/**
 * 当前路由 path 对应的 canonical（含 Vite `base` 时拼接）。
 */
export function resolveCanonicalUrl(routePath) {
  const origin = getCanonicalOrigin()
  const rawBase = import.meta.env.BASE_URL || '/'
  const baseSeg = rawBase === '/' ? '' : `/${String(rawBase).replace(/^\/+|\/+$/g, '')}`
  const p = routePath.startsWith('/') ? routePath : `/${routePath}`
  const joined = `${origin}${baseSeg}${p}`.replace(/([^:])\/{2,}/g, '$1/')
  return joined
}

function setMeta(attribute, name, content) {
  if (content === undefined || content === null || content === '') return
  let el = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkRel(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * 页面级 SEO：TDK、Canonical、OG、Twitter、JSON-LD（默认 WebPage）。
 */
export function applyDocumentSeo({ path, title, description, keywords, ogImage, ogType, jsonLd }) {
  if (typeof document === 'undefined') return

  const canonicalUrl = resolveCanonicalUrl(path)

  document.title = title || seoConfig.defaults.title

  setMeta('name', 'description', description || seoConfig.defaults.description)
  if (keywords) setMeta('name', 'keywords', keywords)
  setMeta('name', 'author', seoConfig.defaults.author)
  setMeta('name', 'robots', 'index, follow')
  setMeta('name', 'googlebot', 'index, follow')

  const absImage = toAbsoluteUrl(ogImage || seoConfig.defaultOgImage)

  setMeta('property', 'og:title', title || seoConfig.defaults.title)
  setMeta('property', 'og:description', description || seoConfig.defaults.description)
  setMeta('property', 'og:image', absImage)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:type', ogType || seoConfig.defaults.type || 'website')
  setMeta('property', 'og:site_name', seoConfig.siteName)
  setMeta('property', 'og:locale', 'en_US')

  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title || seoConfig.defaults.title)
  setMeta('name', 'twitter:description', description || seoConfig.defaults.description)
  setMeta('name', 'twitter:image', absImage)
  if (seoConfig.social.twitterSite) {
    setMeta('name', 'twitter:site', seoConfig.social.twitterSite)
  }
  if (seoConfig.social.twitterCreator) {
    setMeta('name', 'twitter:creator', seoConfig.social.twitterCreator)
  }

  setLinkRel('canonical', canonicalUrl)

  const ld =
    jsonLd ||
    buildDefaultWebPageJsonLd({
      name: title || seoConfig.defaults.title,
      description: description || seoConfig.defaults.description,
      url: canonicalUrl,
    })
  injectJsonLd(ld)
}

export function buildDefaultWebPageJsonLd({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain.replace(/\/+$/, ''),
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain.replace(/\/+$/, ''),
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl(seoConfig.defaultOgImage),
      },
    },
  }
}

/** 指南 / 模组详情等文章型页面 */
export function buildArticleJsonLd({ headline, description, url, datePublished, imageUrl }) {
  const img = imageUrl ? toAbsoluteUrl(imageUrl) : toAbsoluteUrl(seoConfig.defaultOgImage)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    inLanguage: 'en',
    datePublished: datePublished || undefined,
    dateModified: datePublished || undefined,
    image: img,
    author: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain.replace(/\/+$/, ''),
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.fullDomain.replace(/\/+$/, ''),
      logo: {
        '@type': 'ImageObject',
        url: toAbsoluteUrl(seoConfig.defaultOgImage),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

/**
 * Strip @context from a node so it can sit under a shared @graph wrapper.
 * @param {unknown} node
 */
function stripLdContext(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) return node
  const { ['@context']: _ctx, ...rest } = /** @type {Record<string, unknown>} */ (node)
  return rest
}

/**
 * Merge guide-specific JSON-LD from `head` (JSON string) with the default Article node.
 * Produces `{ "@context": "https://schema.org", "@graph": [ Article, … ] }`.
 * If `head` is missing or invalid JSON, returns `articleLd` unchanged.
 *
 * @param {Record<string, unknown>} articleLd - from {@link buildArticleJsonLd}
 * @param {string | undefined | null} headJson
 */
export function mergeArticleJsonLdWithHead(articleLd, headJson) {
  const raw = String(headJson ?? '').trim()
  if (!raw) return articleLd

  let extra
  try {
    extra = JSON.parse(raw)
  } catch {
    if (import.meta.env.DEV) {
      console.warn('[seo] guide `head` JSON-LD parse failed; using Article node only')
    }
    return articleLd
  }

  if (!extra || typeof extra !== 'object' || Array.isArray(extra)) return articleLd

  const articleNode = stripLdContext(articleLd)

  if (Array.isArray(extra['@graph'])) {
    const nodes = extra['@graph']
      .filter((n) => n && typeof n === 'object' && !Array.isArray(n))
      .map((n) => stripLdContext(n))
    return {
      '@context': 'https://schema.org',
      '@graph': [articleNode, ...nodes],
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [articleNode, stripLdContext(extra)],
  }
}

export function injectJsonLd(data) {
  const existing = document.querySelector('script[data-seo-ld="1"]')
  if (existing) existing.remove()
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo-ld', '1')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}
