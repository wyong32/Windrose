/**
 * Windrose Compass — 生产环境 canonical、OG、Twitter、sitemap 使用此域名。
 * @see https://windrosegame.net
 */
export const seoConfig = {
  domain: 'windrosegame.net',
  fullDomain: 'https://windrosegame.net',
  siteName: 'Windrose Compass',
  /** 默认分享图（站内路径，运行时拼为绝对 URL） */
  defaultOgImage: '/images/bg.webp',
  defaults: {
    /** 仅「|」右侧描述段；须含品牌词 Windrose，并与首页 meta 一致 */
    title: 'Windrose Wiki, Interactive Map, Guides & Mods',
    description:
      'Windrose Compass: fan wiki tables, interactive map with POI search, and guides for Early Access pirate survival—ships, camps, and sailing in one hub.',
    keywords:
      'Windrose, Windrose mod, Windrose mods, Windrose Early Access, Windrose wiki, Windrose interactive map, Windrose multiplayer, play Windrose online, pirate survival game, Windrose Compass, PvE co-op, open world sailing, ship combat, crafting guide, windrosegame.net',
    author: 'Windrose Compass',
    type: 'website',
  },
  social: {
    twitterSite: '',
    twitterCreator: '',
  },
  /** sitemap priority（0.0–1.0），键与路由 `name` 对齐 */
  priorities: {
    home: 1.0,
    'getting-started': 0.9,
    advanced: 0.88,
    wiki: 0.92,
    'wiki-resources': 0.85,
    'wiki-consumables': 0.85,
    'wiki-weapons': 0.85,
    'wiki-equipment': 0.85,
    'wiki-ship': 0.85,
    'wiki-misc': 0.82,
    map: 0.95,
    guides: 0.88,
    'guide-article': 0.78,
    mods: 0.82,
    'mod-article': 0.72,
    'privacy-policy': 0.35,
    'terms-of-use': 0.35,
    copyright: 0.35,
    'about-us': 0.45,
    'contact-us': 0.45,
  },
  changefreq: {
    home: 'weekly',
    'getting-started': 'weekly',
    advanced: 'weekly',
    wiki: 'weekly',
    'wiki-resources': 'weekly',
    'wiki-consumables': 'weekly',
    'wiki-weapons': 'weekly',
    'wiki-equipment': 'weekly',
    'wiki-ship': 'weekly',
    'wiki-misc': 'weekly',
    map: 'weekly',
    guides: 'weekly',
    'guide-article': 'monthly',
    mods: 'weekly',
    'mod-article': 'monthly',
    'privacy-policy': 'yearly',
    'terms-of-use': 'yearly',
    copyright: 'yearly',
    'about-us': 'yearly',
    'contact-us': 'yearly',
  },
}
