/** 主导航与页脚 Quick Links 共用，需与 `AppHeader` / `AppFooter` 保持一致 */
export const PRIMARY_NAV = [
  { label: 'Home', to: '/' },
  { label: 'Getting Started', to: '/getting-started' },
  { label: 'Advanced', to: '/advanced' },
  { label: 'Wiki', to: '/wiki' },
  { label: 'Interactive Map', to: '/map' },
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

/** 游戏与工具外链（页脚图标行）；`rel` 含 noopener noreferrer */
export const OFFICIAL_OUTBOUND = [
  {
    label: 'Windrose official site',
    href: 'https://windrosecrew.com/',
    icon: 'globe',
  },
  {
    label: 'Windrose on Steam',
    href: 'https://store.steampowered.com/app/3041230/Windrose/',
    icon: 'steam',
  },
  {
    label: 'Official Windrose interactive map',
    href: 'https://windrose.tools/map',
    icon: 'map',
  },
]
