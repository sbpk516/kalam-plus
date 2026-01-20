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
    <section id="products" className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            A beautiful app, <span className="gradient-text">built for macOS</span>
          </h2>
          <p className="text-lg text-gray-400">
            Native design that feels right at home on your Mac
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl bg-white/5 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'rounded-lg px-6 py-2 text-sm font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-white/10 text-white'
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
          {/* Glow effect */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />

          {/* Screenshot */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10">
            <img
              src={activeImage}
              alt={`TranscriptAI ${activeTab} screen`}
              className="w-full transition-opacity duration-300"
            />
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </div>
      </div>
    </section>
  )
}
