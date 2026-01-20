import { Twitter, Github, Mail } from 'lucide-react'
import { footerSections, socialLinks } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import logo from '@/assets/images/logo.jpg'

const iconMap: Record<string, React.ElementType> = {
  Twitter,
  Github,
  Mail,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-background-primary">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt={siteConfig.name} className="h-8 w-8 rounded-lg" />
              <span className="font-semibold text-white">{siteConfig.name}</span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              AI-powered productivity tools that respect your privacy.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-medium text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="ml-2 text-xs text-cyan-400">{link.badge}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} {siteConfig.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
