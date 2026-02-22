import type { NavLink, FooterSection } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Thadm', href: '#thadm' },
  { label: 'TranscriptAI', href: '#transcriptai' },
  { label: 'About', href: '#about' },
]

export const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Thadm', href: '#thadm', badge: 'NEW' },
      { label: 'TranscriptAI', href: '#transcriptai' },
      { label: 'Neural Notes', href: '#', badge: 'Coming Soon' },
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
