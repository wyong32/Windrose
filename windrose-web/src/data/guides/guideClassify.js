/**
 * Guide categories: each article’s `classify` must match one `id` below.
 *
 * @typedef {{ id: string, label: string, description: string }} GuideClassifyItem
 */

/** @type {GuideClassifyItem[]} */
export const GUIDE_CLASSIFY = [
  {
    id: 'gameplay',
    label: 'Gameplay',
    description: 'Co-op, talents, exploration, bases, and general world progression.',
  },
  {
    id: 'fishing',
    label: 'Fishing',
    description: 'Rods, routes, collections, and fishing-focused guides.',
  },
  {
    id: 'ships',
    label: 'Ships',
    description: 'Unlocks, wharf, cannons, hull loadouts, and naval play.',
  },
  {
    id: 'equipment',
    label: 'Gear & builds',
    description: 'Weapons, armor, builds, tier lists, and secret gear.',
  },
]

/** @param {string} id */
export function getGuideClassifyById(id) {
  return GUIDE_CLASSIFY.find((c) => c.id === id) ?? null
}
