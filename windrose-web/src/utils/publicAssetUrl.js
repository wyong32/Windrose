/**
 * Resolve a path served from `public/` for use in `<img src>` etc.
 * Honors Vite `base` (e.g. `/app/`) so `/images/foo.webp` becomes `/app/images/foo.webp`.
 * Absolute http(s) URLs are returned unchanged.
 *
 * @param {string | undefined | null} path
 * @returns {string}
 */
export function publicAssetUrl(path) {
  const p0 = String(path ?? '').trim()
  if (!p0) return ''
  if (/^https?:\/\//i.test(p0)) return p0
  const base = import.meta.env.BASE_URL || '/'
  const rel = p0.startsWith('/') ? p0.slice(1) : p0
  const joined = `${base}${rel}`
  return joined.replace(/([^:])\/{2,}/g, '$1/')
}
