import type { NavLink, FooterSection } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'TranscriptAI', href: '#' },
      { label: 'Neural Notes', href: '#', badge: 'Coming Soon' },
      { label: 'More Products', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'GitHub', href: '#', icon: 'Github' },
  { name: 'Email', href: '#', icon: 'Mail' },
]
