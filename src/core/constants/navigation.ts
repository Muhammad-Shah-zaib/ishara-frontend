export interface NavLink {
  label: string
  to: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/home' },
  { label: 'Translate', to: '/translate' },
  { label: 'About us', to: '/about' },
]
