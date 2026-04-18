import { useState } from 'react'
import { cn } from '@/lib/utils'
import capturePage from '@/assets/images/Capture_Page.png'
import transcriptsPage from '@/assets/images/Transcripts_Page.png'
import settingsPage from '@/assets/images/Settings_Page.png'

const tabs = [
  { id: 'capture', label: 'Capture', image: capturePage },
  { id: 'transcripts', label: 'Transcripts', image: transcriptsPage },
  { id: 'settings', label: 'Settings', image: settingsPage },
] as const

type TabId = (typeof tabs)[number]['id']

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>('capture')
  const activeImage = tabs.find((tab) => tab.id === activeTab)?.image

  return (
    <section id="products" className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            The interface
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            A beautiful app,
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              built for macOS.
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Native design that feels right at home on your Mac.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-medium transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-white text-background-primary'
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot Container */}
        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14)_0%,transparent_65%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background-secondary shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            <img
              src={activeImage}
              alt={`TranscriptAI ${activeTab} screen`}
              className="w-full transition-opacity duration-300"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 rounded-b-2xl bg-gradient-to-t from-background-primary/80 to-transparent" />
        </div>
      </div>
    </section>
  )
}
