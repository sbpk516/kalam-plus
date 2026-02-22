import { cn } from '@/lib/utils'
import { navLinks } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import logo from '@/assets/images/logo.jpg'
import type { AppRoute } from '@/hooks/useHashRoute'

interface HeaderProps {
  currentRoute: AppRoute
  navigate: (route: AppRoute) => void
}

export function Header({ currentRoute, navigate }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background-primary/80 backdrop-blur-xl">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo - now Kalam Plus brand */}
        <button
          onClick={() => navigate('products')}
          className="flex items-center gap-3"
        >
          <img src={logo} alt={siteConfig.company} className="h-8 w-8 rounded-lg" />
          <span className="font-semibold text-white">{siteConfig.company}</span>
        </button>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const route = link.href.replace('#', '') as AppRoute
            const isActive =
              currentRoute === route ||
              (link.label === 'Products' && currentRoute === 'products')
            return (
              <button
                key={link.href}
                onClick={() => navigate(route as AppRoute)}
                className={cn(
                  'text-sm transition-colors',
                  isActive ? 'font-medium text-white' : 'text-gray-400 hover:text-white'
                )}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        {/* Buy Thadm CTA */}
        <button
          onClick={() => navigate('thadm')}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
        >
          <span>🎯</span>
          <span className="hidden sm:inline">Buy Thadm</span>
        </button>
      </nav>
    </header>
  )
}
