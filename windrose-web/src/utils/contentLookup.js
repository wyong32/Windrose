/**
 * @param {{ addressBar?: string }[]} list
 * @param {string | undefined | null} segment
 */
export function getByAddressBar(list, segment) {
  const s = String(segment ?? '')
  if (!s) return null
  return list.find((item) => String(item.addressBar ?? '') === s) ?? null
}
