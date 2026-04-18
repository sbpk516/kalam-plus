import { Twitter, Github, Mail } from 'lucide-react'
import { footerSections, socialLinks } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import logo from '@/assets/images/logo.jpg'
import type { AppRoute } from '@/hooks/useHashRoute'

const iconMap: Record<string, React.ElementType> = {
  Twitter,
  Github,
  Mail,
}

const routeLinks: Record<string, AppRoute> = {
  '#thadm': 'thadm',
  '#transcriptai': 'transcriptai',
  '#products': 'products',
}

interface FooterProps {
  navigate: (route: AppRoute) => void
}

export function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    const route = routeLinks[href]
    if (route) {
      e.preventDefault()
      navigate(route)
    }
  }

  return (
    <footer className="relative border-t border-white/[0.06] bg-background-primary">
      {/* Top aurora wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={() => navigate('products')}
              className="group flex items-center gap-2.5"
            >
              <img
                src={logo}
                alt={siteConfig.company}
                className="h-7 w-7 rounded-lg ring-1 ring-white/10"
              />
              <span className="text-[15px] font-medium tracking-tight text-white transition-colors group-hover:text-gray-100">
                {siteConfig.company}
              </span>
            </button>

            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-gray-400">
              AI-powered productivity tools that respect your privacy.
              <br />
              <span className="text-gray-500">Built to stay local.</span>
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                    aria-label={link.name}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
                {section.title}
              </h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="group inline-flex items-center gap-2 text-[14px] text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-200">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-[12px] text-gray-500">
            &copy; {currentYear} {siteConfig.company}. All rights reserved.
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gray-600">
            Made for people who care
          </p>
        </div>
      </div>
    </footer>
  )
}
