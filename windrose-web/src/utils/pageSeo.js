import { SITE_NAME } from '@/config/site.js'

const SITE_SUFFIX_RE = new RegExp(
  `\\s*\\|\\s*${SITE_NAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`,
  'i',
)

/** 去掉已写在 raw 末尾的品牌后缀，避免 `Foo | Site | Site`。 */
export function normalizeTitleSegment(raw) {
  if (!raw || typeof raw !== 'string') return ''
  return raw.trim().replace(SITE_SUFFIX_RE, '').trim()
}

/** 浏览器标签标题：`{segment} | Windrose Compass` */
export function buildDocumentTitle(segment) {
  const clean = normalizeTitleSegment(segment)
  return clean ? `${clean} | ${SITE_NAME}` : SITE_NAME
}
