import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import logo from '@/assets/images/logo.jpg'
import type { AppRoute } from '@/hooks/useHashRoute'
import { ThadmBuyModal, useThadmBuyModal } from '@/components/sections/thadm/ThadmBuyModal'

interface HeaderProps {
  currentRoute: AppRoute
  navigate: (route: AppRoute) => void
}

export function Header({ currentRoute, navigate }: HeaderProps) {
  const { open, openModal, closeModal } = useThadmBuyModal()

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-background-primary/60 backdrop-blur-xl">
        <nav className="section-container flex h-16 items-center justify-between">
          {/* Brand */}
          <button onClick={() => navigate('products')} className="group flex items-center gap-2.5">
            <img
              src={logo}
              alt={siteConfig.company}
              className="h-7 w-7 rounded-lg ring-1 ring-white/10"
            />
            <span className="text-[15px] font-medium tracking-tight text-white transition-colors group-hover:text-gray-100">
              {siteConfig.company}
            </span>
          </button>

          {/* Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const route = link.href.replace('#', '') as AppRoute
              const isActive =
                currentRoute === route || (link.label === 'Products' && currentRoute === 'products')
              return (
                <button
                  key={link.href}
                  onClick={() => navigate(route as AppRoute)}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-200',
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.06]" aria-hidden />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* Buy Thadm CTA */}
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 text-[13px] font-medium text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(99,102,241,0.65)]"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            <span className="hidden sm:inline">Buy Thadm</span>
          </button>
        </nav>
      </header>

      <ThadmBuyModal open={open} onClose={closeModal} />
    </>
  )
}
