import { Apple, Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { navLinks } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import logo from '@/assets/images/logo.jpg'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background-primary/80 backdrop-blur-xl">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt={siteConfig.name} className="h-8 w-8 rounded-lg" />
          <span className="font-semibold text-white">{siteConfig.name}</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href={siteConfig.downloadUrl} className={buttonVariants({ size: 'sm' })}>
          <Apple className="h-4 w-4" />
          <span className="hidden sm:inline">Download</span>
          <Download className="h-4 w-4" />
        </a>
      </nav>
    </header>
  )
}
