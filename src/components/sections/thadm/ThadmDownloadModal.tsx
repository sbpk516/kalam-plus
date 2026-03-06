import { useState } from 'react'
import { X, Apple, Monitor, Download } from 'lucide-react'
import { useThadmRelease } from '@/hooks/useThadmRelease'

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

interface ThadmDownloadModalProps {
  open: boolean
  onClose: () => void
}

export function ThadmDownloadModal({ open, onClose }: ThadmDownloadModalProps) {
  const { macArmUrl, macIntelUrl } = useThadmRelease()

  if (!open) return null

  const downloadUrls: Record<string, string> = {
    'mac-arm': macArmUrl,
    'mac-intel': macIntelUrl,
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-[#161B22] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-500 transition-colors hover:bg-white/10 hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="mb-1 text-xl font-bold text-white">Download Thadm</h3>
        <p className="mb-6 text-sm text-gray-400">
          Choose your platform to get started with the free trial.
        </p>

        <div className="space-y-3">
          {platformsMeta.map((p) =>
            p.available ? (
              <a
                key={p.id}
                href={downloadUrls[p.id]}
                className="flex w-full items-center gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.08] px-5 py-4 text-left transition-all hover:border-indigo-500/40 hover:bg-indigo-500/[0.15]"
              >
                <div className="text-indigo-400">{p.icon}</div>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-white">
                    {p.label}
                  </span>
                  <span className="text-xs text-gray-400">{p.sublabel}</span>
                </div>
                <Download className="h-4 w-4 text-indigo-400" />
              </a>
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

        <p className="mt-5 text-center text-xs text-gray-600">
          Free 14-day trial · No credit card required
        </p>
      </div>
    </div>
  )
}

export function useThadmDownloadModal() {
  const [open, setOpen] = useState(false)
  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }
}
