// Feature types
export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  accent: 'cyan' | 'purple' | 'red'
}

// Step types for HowItWorks
export interface Step {
  id: string
  number: number
  icon: string
  title: string
  description: string
  accent: 'cyan' | 'purple' | 'red'
}

// Testimonial types
export interface Testimonial {
  id: string
  quote: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

// FAQ types
export interface FAQItem {
  id: string
  question: string
  answer: string
}

// Pricing feature types
export interface PricingFeature {
  id: string
  text: string
}

// Navigation types
export interface NavLink {
  label: string
  href: string
}

// Footer link types
export interface FooterLink {
  label: string
  href: string
  badge?: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

// Site configuration
export interface SiteConfig {
  name: string
  company: string
  description: string
  version: string
  platform: string
  downloadUrl: string
  price: {
    current: number
    original: number
    currency: string
    period: string
  }
}
