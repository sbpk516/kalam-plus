import { useState } from 'react'
import { X, Apple, Monitor, ExternalLink } from 'lucide-react'
import { useThadmRelease } from '@/hooks/useThadmRelease'
import { thadmConfig } from '@/data/thadm'

type Platform = 'mac-arm' | 'mac-intel' | 'windows' | 'linux'

const platformsMeta: {
  id: Platform
  label: string
  sublabel: string
  icon: React.ReactNode
  available: boolean
}[] = [
  {
    id: 'mac-arm',
    label: 'Mac — Apple Silicon',
    sublabel: 'M1, M2, M3, M4',
    icon: <Apple className="h-5 w-5" />,
    available: true,
  },
  {
    id: 'mac-intel',
    label: 'Mac — Intel',
    sublabel: 'Intel-based Macs',
    icon: <Apple className="h-5 w-5" />,
    available: true,
  },
  {
    id: 'windows',
    label: 'Windows',
    sublabel: 'Coming soon',
    icon: <Monitor className="h-5 w-5" />,
    available: false,
  },
  {
    id: 'linux',
    label: 'Linux',
    sublabel: 'Coming soon',
    icon: <Monitor className="h-5 w-5" />,
    available: false,
  },
]

const plans = [
  {
    id: 'annual',
    label: 'Annual',
    price: `$${thadmConfig.pricing.annual.price}/year`,
    detail: `~$${thadmConfig.pricing.annual.perMonth}/month`,
    url: 'https://kalam-plus.lemonsqueezy.com/checkout/buy/aa50a097-5fab-40c4-b1a4-0dc89f6bc4c0',
    badge: null,
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    price: `$${thadmConfig.pricing.lifetime.price} once`,
    detail: 'Pay once, own forever',
    url: 'https://kalam-plus.lemonsqueezy.com/checkout/buy/a932ba42-c9b9-4913-bca0-825f785afb39',
    badge: 'BEST VALUE',
  },
]

interface ThadmBuyModalProps {
  open: boolean
  onClose: () => void
}

export function ThadmBuyModal({ open, onClose }: ThadmBuyModalProps) {
  const { macArmUrl, macIntelUrl } = useThadmRelease()
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  if (!open) return null

  const downloadUrls: Record<string, string> = {
    'mac-arm': macArmUrl,
    'mac-intel': macIntelUrl,
  }

  function handlePlanClick(checkoutUrl: string) {
    // Open LemonSqueezy checkout in new tab first (before any async operations)
    const checkoutWindow = window.open(checkoutUrl, '_blank')
    
    // Trigger download for the selected platform (in parallel)
    if (selectedPlatform && downloadUrls[selectedPlatform]) {
      const downloadUrl = downloadUrls[selectedPlatform]
      // Small delay to ensure checkout opens first
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = downloadUrl
        // Don't set download attribute for cross-origin URLs
        link.target = '_blank'
        link.rel = 'noopener'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, 100)
    }
    
    // Close modal
    handleClose()
    
    // Fallback: if popup was blocked, redirect current page
    if (!checkoutWindow || checkoutWindow.closed || typeof checkoutWindow.closed === 'undefined') {
      window.location.href = checkoutUrl
    }
  }

  function handleClose() {
    setSelectedPlatform(null)
    onClose()
  }

  function handleBack() {
    setSelectedPlatform(null)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-[#161B22] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-500 transition-colors hover:bg-white/10 hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>

        {!selectedPlatform ? (
          <>
            <h3 className="mb-1 text-xl font-bold text-white">Buy Thadm</h3>
            <p className="mb-6 text-sm text-gray-400">
              Choose your platform first.
            </p>

            <div className="space-y-3">
              {platformsMeta.map((p) =>
                p.available ? (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlatform(p.id)}
                    className="flex w-full items-center gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.08] px-5 py-4 text-left transition-all hover:border-indigo-500/40 hover:bg-indigo-500/[0.15]"
                  >
                    <div className="text-indigo-400">{p.icon}</div>
                    <div className="flex-1">
                      <span className="block text-sm font-semibold text-white">
                        {p.label}
                      </span>
                      <span className="text-xs text-gray-400">{p.sublabel}</span>
                    </div>
                  </button>
                ) : (
                  <div
                    key={p.id}
                    className="flex w-full cursor-not-allowed items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-left opacity-50"
                  >
                    <div className="text-gray-600">{p.icon}</div>
                    <div className="flex-1">
                      <span className="block text-sm font-semibold text-gray-500">
                        {p.label}
                      </span>
                      <span className="text-xs text-gray-600">{p.sublabel}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleBack}
              className="mb-4 text-xs text-gray-500 transition-colors hover:text-gray-300"
            >
              ← Back to platforms
            </button>
            <h3 className="mb-1 text-xl font-bold text-white">Choose your plan</h3>
            <p className="mb-6 text-sm text-gray-400">
              {platformsMeta.find((p) => p.id === selectedPlatform)?.label} selected. Pick a plan to continue.
            </p>

            <div className="space-y-3">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => handlePlanClick(plan.url)}
                  className="flex w-full items-center gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.08] px-5 py-4 text-left transition-all hover:border-indigo-500/40 hover:bg-indigo-500/[0.15]"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="block text-sm font-semibold text-white">
                        {plan.label}
                      </span>
                      {plan.badge && (
                        <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      {plan.price} · {plan.detail}
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-indigo-400" />
                </button>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-gray-600">
              Your download will start automatically
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export function useThadmBuyModal() {
  const [open, setOpen] = useState(false)
  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }
}
