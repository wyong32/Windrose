import { COMMENT_API_ORIGIN, COMMENT_HOME_SECTION_SLUG, COMMENT_PROJECT_SLUG } from '@/config/comments.js'

/**
 * @param {Response} res
 * @returns {Promise<{ ok: boolean, status: number, data?: any, errorMessage?: string }>}
 */
async function readJsonResponse(res) {
  const status = res.status
  let body = {}
  try {
    const text = await res.text()
    body = text ? JSON.parse(text) : {}
  } catch {
    body = {}
  }
  const errorMessage = body?.error?.message || (typeof body?.message === 'string' ? body.message : undefined)
  if (!res.ok) {
    return { ok: false, status, errorMessage: errorMessage || res.statusText || 'Request failed' }
  }
  return { ok: true, status, data: body }
}

function assertApiKey(apiKey) {
  if (!apiKey || typeof apiKey !== 'string') {
    return { ok: false, status: 0, errorMessage: 'Comments are not configured (missing API key).' }
  }
  return null
}

/**
 * @param {{ apiKey: string, page?: number, pageSize?: number, sort?: string }} opts
 */
export async function fetchHomeReviews(opts) {
  const err = assertApiKey(opts.apiKey)
  if (err) return err

  const page = opts.page ?? 1
  const pageSize = Math.min(100, Math.max(1, opts.pageSize ?? 15))
  const sort = opts.sort ?? 'createdAt_desc'

  const url = new URL(
    `${COMMENT_API_ORIGIN}/api/v1/p/${COMMENT_PROJECT_SLUG}/sections/${COMMENT_HOME_SECTION_SLUG}/reviews`,
  )
  url.searchParams.set('page', String(page))
  url.searchParams.set('pageSize', String(pageSize))
  url.searchParams.set('sort', sort)

  let res
  try {
    res = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'X-API-Key': opts.apiKey },
    })
  } catch (e) {
    return { ok: false, status: 0, errorMessage: e?.message || 'Network error' }
  }

  const parsed = await readJsonResponse(res)
  if (!parsed.ok) return parsed
  const data = parsed.data?.data
  const total = typeof parsed.data?.total === 'number' ? parsed.data.total : 0
  const pageOut = typeof parsed.data?.page === 'number' ? parsed.data.page : page
  const pageSizeOut = typeof parsed.data?.pageSize === 'number' ? parsed.data.pageSize : pageSize
  return {
    ok: true,
    status: res.status,
    reviews: Array.isArray(data) ? data : [],
    total,
    page: pageOut,
    pageSize: pageSizeOut,
  }
}

/**
 * @param {{ apiKey: string, body: string, authorDisplayName?: string }} opts
 */
export async function createHomeReview(opts) {
  const err = assertApiKey(opts.apiKey)
  if (err) return err

  const body = String(opts.body ?? '').trim()
  if (body.length < 1 || body.length > 2000) {
    return { ok: false, status: 400, errorMessage: 'Comment must be between 1 and 2000 characters.' }
  }

  const payload = { body }
  const name = String(opts.authorDisplayName ?? '').trim()
  if (name.length > 0) {
    if (name.length > 120) {
      return { ok: false, status: 400, errorMessage: 'Display name must be at most 120 characters.' }
    }
    payload.authorDisplayName = name
  }

  const url = `${COMMENT_API_ORIGIN}/api/v1/p/${COMMENT_PROJECT_SLUG}/sections/${COMMENT_HOME_SECTION_SLUG}/reviews`

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': opts.apiKey,
      },
      body: JSON.stringify(payload),
    })
  } catch (e) {
    return { ok: false, status: 0, errorMessage: e?.message || 'Network error' }
  }

  const parsed = await readJsonResponse(res)
  if (!parsed.ok) return parsed
  const raw = parsed.data
  const review = raw && typeof raw === 'object' && 'id' in raw ? raw : raw?.data
  return { ok: true, status: res.status, review }
}
