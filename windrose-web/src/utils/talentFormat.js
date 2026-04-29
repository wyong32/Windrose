/** @param {{ valuesByLevel?: Record<string, number> }} stat @param {number} level */
export function statValueAtLevel(stat, level) {
  const vb = stat.valuesByLevel
  if (!vb) return 0
  const pick = (k) => vb[k] ?? vb[String(k)]
  let v = pick(level)
  if (v === undefined) {
    for (let L = level; L >= 1; L--) {
      v = pick(L)
      if (v !== undefined) break
    }
  }
  if (v === undefined) v = pick(3) ?? pick(1)
  return v ?? 0
}

/** @param {{ displayType: string, inverseValue?: boolean }} stat @param {number} raw */
export function formatStatValue(stat, raw) {
  switch (stat.displayType) {
    case 'RatioToPercent': {
      let pct = raw * 100
      if (Math.abs(pct) < 0.05 && pct !== 0) pct = Number(pct.toFixed(2))
      else pct = Math.round(pct * 10) / 10
      return `${pct}%`
    }
    case 'ValueAsValue':
      return String(raw)
    case 'SecondsAsMinutes':
      return String(Math.round(raw / 60))
    default:
      return String(raw)
  }
}

/**
 * @param {{ description: string, stats?: Array<{ displayType: string, inverseValue?: boolean, valuesByLevel?: Record<string, number> }> }} perk
 * @param {number} level 1–3
 */
export function formatPerkDescription(perk, level) {
  const L = Math.min(3, Math.max(1, level))
  let text = perk.description || ''
  const stats = perk.stats || []
  stats.forEach((stat, idx) => {
    const raw = statValueAtLevel(stat, L)
    const formatted = formatStatValue(stat, raw)
    text = text.replaceAll(`{${idx}}`, formatted)
  })
  return text
}
