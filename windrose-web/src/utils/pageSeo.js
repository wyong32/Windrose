/** 浏览器标签标题左侧（游戏名 SEO） */
const DOCUMENT_TITLE_LEAD = 'Windrose Game'
/** 历史标题后缀「| Windrose Compass」，用于 normalize 去重 */
const SITE_NAME = 'Windrose Compass'

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const LEAD_PREFIX_RE = new RegExp(`^\\s*${escapeRe(DOCUMENT_TITLE_LEAD)}\\s*\\|\\s*`, 'i')
const TRAIL_COMPASS_RE = new RegExp(`\\s*\\|\\s*${escapeRe(SITE_NAME)}\\s*$`, 'i')
const TRAIL_LEAD_RE = new RegExp(`\\s*\\|\\s*${escapeRe(DOCUMENT_TITLE_LEAD)}\\s*$`, 'i')

/** 清理标题段：去掉重复的「游戏名 |」前缀，以及历史后缀「| Windrose Compass」「| Windrose Game」。 */
function normalizeTitleSegment(raw) {
  if (!raw || typeof raw !== 'string') return ''
  let s = raw.trim().replace(LEAD_PREFIX_RE, '').trim()
  s = s.replace(TRAIL_COMPASS_RE, '').trim()
  s = s.replace(TRAIL_LEAD_RE, '').trim()
  return s
}

/** 浏览器标签标题：`Windrose Game | {描述}`；描述为空时仅返回左侧游戏名。 */
export function buildDocumentTitle(segment) {
  const clean = normalizeTitleSegment(segment)
  return clean ? `${DOCUMENT_TITLE_LEAD} | ${clean}` : DOCUMENT_TITLE_LEAD
}
