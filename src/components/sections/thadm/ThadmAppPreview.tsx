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
    description: 'Browse your complete screen history with instant search and filtering',
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: ListTodo,
    image: '/thadm/Thadm_Tasks_Page.png',
    description: 'AI automatically extracts action items from your screen activity',
  },
  {
    id: 'ai',
    label: 'AI Models',
    icon: Brain,
    image: '/thadm/AI_models_Page.png',
    description: 'Local AI models for OCR, transcription, and context understanding',
  },
  {
    id: 'audio',
    label: 'Audio',
    icon: Mic,
    image: '/thadm/Audio_Section.png',
    description: 'Record and transcribe system audio and microphone input',
  },
  {
    id: 'privacy',
    label: 'Privacy',
    icon: Shield,
    image: '/thadm/Privacy_Page.png',
    description: 'Full control over what gets captured and how long it\'s stored',
  },
  {
    id: 'connections',
    label: 'Connections',
    icon: Plug,
    image: '/thadm/Connections_Page.png',
    description: 'Integrate with your favorite apps and services',
  },
]

export function ThadmAppPreview() {
  const [activeTab, setActiveTab] = useState(screenshotTabs[0])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="section-container section-padding">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Your digital memory,{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
            visualized
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-gray-400">
          Every screen, every conversation, every moment — captured and made searchable
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
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
                'flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Screenshot Container */}
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_0_60px_rgba(99,102,241,0.15)]">
          {/* Window Header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-gray-500">Thadm — {activeTab.label}</span>
            </div>
            <div className="w-14" /> {/* Spacer for centering */}
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1117]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
                  Loading...
                </div>
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

        {/* Description */}
        <p className="mt-6 text-center text-gray-400">
          {activeTab.description}
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
            <Search className="h-5 w-5 text-indigo-400" />
          </div>
          <h3 className="mb-1 font-semibold text-white">Instant Search</h3>
          <p className="text-sm text-gray-500">
            Find anything you've seen or heard in seconds
          </p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
            <Brain className="h-5 w-5 text-purple-400" />
          </div>
          <h3 className="mb-1 font-semibold text-white">Local AI</h3>
          <p className="text-sm text-gray-500">
            On-device processing, zero cloud dependency
          </p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
            <Shield className="h-5 w-5 text-cyan-400" />
          </div>
          <h3 className="mb-1 font-semibold text-white">100% Private</h3>
          <p className="text-sm text-gray-500">
            Your data never leaves your machine
          </p>
        </div>
      </div>
    </section>
  )
}
