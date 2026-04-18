import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Search, Mic, Brain, Shield, ListTodo, Plug, Camera } from 'lucide-react'

interface ScreenshotTab {
  id: string
  label: string
  icon: React.ElementType
  image: string
  description: string
}

const screenshotTabs: ScreenshotTab[] = [
  {
    id: 'home',
    label: 'Timeline',
    icon: Camera,
    image: '/thadm/Thadm_Home_Page.png',
    description: 'Browse your complete screen history with instant search and filtering.',
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: ListTodo,
    image: '/thadm/Thadm_Tasks_Page.png',
    description: 'AI automatically extracts action items from your screen activity.',
  },
  {
    id: 'ai',
    label: 'AI Models',
    icon: Brain,
    image: '/thadm/AI_models_Page.png',
    description: 'Local AI models for OCR, transcription, and context understanding.',
  },
  {
    id: 'audio',
    label: 'Audio',
    icon: Mic,
    image: '/thadm/Audio_Section.png',
    description: 'Record and transcribe system audio and microphone input.',
  },
  {
    id: 'privacy',
    label: 'Privacy',
    icon: Shield,
    image: '/thadm/Privacy_Page.png',
    description: "Full control over what gets captured and how long it's stored.",
  },
  {
    id: 'connections',
    label: 'Connections',
    icon: Plug,
    image: '/thadm/Connections_Page.png',
    description: 'Integrate with your favorite apps and services.',
  },
]

export function ThadmAppPreview() {
  const [activeTab, setActiveTab] = useState(screenshotTabs[0])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Inside the app
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Your digital memory,
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              visualized.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Every screen, every conversation, every moment — captured and made searchable.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm">
            {screenshotTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab.id === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab)
                    setIsLoading(true)
                  }}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                    isActive ? 'bg-white text-background-primary' : 'text-gray-400 hover:text-white'
                  )}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Screenshot Container */}
        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.16)_0%,transparent_65%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background-secondary shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            {/* Window Header */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] font-medium tracking-wide text-gray-500">
                  Thadm — {activeTab.label}
                </span>
              </div>
              <div className="w-14" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden bg-background-primary">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-400/30 border-t-indigo-300" />
                </div>
              )}
              <img
                src={activeTab.image}
                alt={`Thadm ${activeTab.label}`}
                className={cn(
                  'h-full w-full object-cover transition-opacity duration-300',
                  isLoading ? 'opacity-0' : 'opacity-100'
                )}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          <p className="mt-6 text-center text-[15px] text-gray-400">{activeTab.description}</p>
        </div>

        {/* Highlights */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-12 md:grid-cols-3 md:gap-8">
          {[
            {
              icon: Search,
              label: 'Instant Search',
              body: "Find anything you've seen or heard in seconds.",
            },
            {
              icon: Brain,
              label: 'Local AI',
              body: 'On-device processing, zero cloud dependency.',
            },
            { icon: Shield, label: '100% Private', body: 'Your data never leaves your machine.' },
          ].map(({ icon: Icon, label, body }) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="mb-1.5 text-base font-medium text-white">{label}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
