/**
 * Wiki 大类：slug 与路由 `/wiki/:slug` 对应；条目数据见 `items/*.js`（`export default []`）。
 */
export const WIKI_CATEGORY_ORDER = [
  'resources',
  'consumables',
  'weapons',
  'equipment',
  'ship',
  'misc',
]

export const WIKI_CATEGORY_META = {
  resources: {
    slug: 'resources',
    label: 'Resources',
    tagline: 'Raw materials, harvest nodes, and world drops',
    description:
      'Ores, fibers, salvage, and biome-specific haul—structured rows you can extend from game patches or community notes.',
  },
  consumables: {
    slug: 'consumables',
    label: 'Consumables',
    tagline: 'Food, medicine, buffs, and expendables',
    description:
      'Recipes, duration, and stacking rules will live here once tables are wired to your CSV or data imports.',
  },
  weapons: {
    slug: 'weapons',
    label: 'Weapons',
    tagline: 'Melee, ranged, and thrown loadouts',
    description:
      'Damage families, stamina costs, and upgrade paths—tables fill in as patches land and numbers are double-checked in-game.',
  },
  equipment: {
    slug: 'equipment',
    label: 'Equipment',
    tagline: 'Armor, tools, and worn gear',
    description:
      'Sets, resist profiles, and crafting tiers; cross-link to Resources when a forge recipe matters.',
  },
  ship: {
    slug: 'ship',
    label: 'Ship',
    tagline: 'Hulls, modules, and deck hardware',
    description:
      'Gunports, cargo tiers, and storm notes—cross-check geography on the interactive map when a route depends on exact placement.',
  },
  misc: {
    slug: 'misc',
    label: 'Misc',
    tagline: 'Catch-all reference',
    description:
      'Quest items, currencies, trophies, and anything that refuses a tidy bucket—still searchable from the hub.',
  },
}

export function getCategoryMeta(slug) {
  return WIKI_CATEGORY_META[slug] ?? null
}
