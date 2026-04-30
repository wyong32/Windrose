/** 主导航与页脚 Quick Links 共用，需与 `AppHeader` / `AppFooter` 保持一致 */
export const PRIMARY_NAV = [
  { label: 'Home', to: '/' },
  { label: 'Getting Started', to: '/getting-started' },
  { label: 'Advanced', to: '/advanced' },
  { label: 'Talents & Build', to: '/talents' },
  { label: 'Wiki', to: '/wiki' },
  { label: 'Interactive Map', to: '/map' },
  { label: 'Updates & Roadmap', to: '/update' },
  { label: 'Guides', to: '/guides' },
  { label: 'Mods', to: '/mods' },
]

export const LEGAL_NAV = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Copyright', to: '/copyright' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
]

/** 页脚「官方外链」行：留空则整段不渲染（全站内链，不指向第三方） */
export const OFFICIAL_OUTBOUND = []
