import { useState, useRef, useEffect } from 'react'
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
  const [buyOpen, setBuyOpen] = useState(false)
  const buyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (buyRef.current && !buyRef.current.contains(e.target as Node)) {
        setBuyOpen(false)
      }
    }
    if (buyOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [buyOpen])

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
        <div ref={buyRef} className="relative">
          <button
            onClick={() => setBuyOpen(!buyOpen)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            <span>🎯</span>
            <span className="hidden sm:inline">Buy Thadm</span>
          </button>

          {buyOpen && (
            <div className="absolute right-0 top-full z-[60] mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#161B22] shadow-2xl">
              <a
                href="https://kalam-plus.lemonsqueezy.com/checkout/buy/aa50a097-5fab-40c4-b1a4-0dc89f6bc4c0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setBuyOpen(false)}
                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-white/5"
              >
                <div>
                  <span className="block text-sm font-semibold text-white">Annual</span>
                  <span className="text-xs text-gray-400">$29/year</span>
                </div>
              </a>
              <div className="border-t border-white/5" />
              <a
                href="https://kalam-plus.lemonsqueezy.com/checkout/buy/a932ba42-c9b9-4913-bca0-825f785afb39"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setBuyOpen(false)}
                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-white/5"
              >
                <div>
                  <span className="block text-sm font-semibold text-white">Lifetime</span>
                  <span className="text-xs text-gray-400">$49 one-time</span>
                </div>
                <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                  BEST VALUE
                </span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
