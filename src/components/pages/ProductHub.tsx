import { useState } from 'react'
import { Monitor, Mic, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AppRoute } from '@/hooks/useHashRoute'

interface ProductHubProps {
  navigate: (route: AppRoute) => void
}

interface ProductCardProps {
  id: string
  icon: React.ReactNode
  title: string
  badge: { text: string; className: string }
  description: string
  tags: string[]
  tagClassName: string
  pricing: { highlight: string; detail: string }
  accentColor: string
  borderHover: string
  glowColor: string
  shadowColor: string
  onClick: () => void
}

function ProductCard({
  icon,
  title,
  badge,
  description,
  tags,
  tagClassName,
  pricing,
  borderHover,
  glowColor,
  shadowColor,
  onClick,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-background-secondary p-10 text-left transition-all duration-300',
        hovered
          ? `${borderHover} -translate-y-1 shadow-2xl ${shadowColor}`
          : 'border-white/10'
      )}
    >
      {/* Corner glow */}
      <div
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-60 blur-3xl transition-opacity duration-500',
          glowColor,
          hovered ? 'opacity-100' : 'opacity-40'
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          'mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] border',
          tagClassName
        )}
      >
        {icon}
      </div>

      {/* Title + Badge */}
      <div className="mb-2 flex items-center gap-3">
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>
        <span className={cn('rounded-full px-3 py-0.5 text-[11px] font-semibold', badge.className)}>
          {badge.text}
        </span>
      </div>

      {/* Description */}
      <p className="mb-6 text-[15px] leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              'rounded-md border px-3 py-1 text-xs text-gray-500',
              tagClassName
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Pricing + Arrow */}
      <div className="flex items-center justify-between">
        <p className="text-sm">
          <span className="font-semibold text-green-400">{pricing.highlight}</span>
          <span className="text-gray-500"> · {pricing.detail}</span>
        </p>
        <ArrowRight
          className={cn(
            'h-5 w-5 transition-all duration-300',
            hovered ? 'translate-x-1 text-gray-300' : 'text-gray-600'
          )}
        />
      </div>
    </button>
  )
}

export function ProductHub({ navigate }: ProductHubProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24 text-center lg:px-8 lg:pt-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-[10%] h-96 w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(168,85,247,0.08)_0%,transparent_70%)]" />

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-gray-500">
          AI-Powered Productivity Tools
        </p>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl">
          Tools that{' '}
          <span className="gradient-text">respect</span>
          <br />
          your privacy
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
          Powerful AI tools that run locally on your machine. No cloud. No
          surveillance. Just intelligent software that works for you.
        </p>

        {/* Product Cards */}
        <div className="mx-auto mt-16 grid max-w-[900px] gap-6 px-4 md:grid-cols-2">
          <ProductCard
            id="thadm"
            icon={<Monitor className="h-6 w-6 text-indigo-400" />}
            title="Thadm"
            badge={{
              text: 'NEW',
              className: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
            }}
            description="AI-powered screen recording & memory. Capture everything on your screen, searchable by text, audio, and context. Your personal rewind."
            tags={['macOS', 'Windows', 'Local AI']}
            tagClassName="border-indigo-500/20 bg-indigo-500/[0.08]"
            pricing={{ highlight: 'Free 14-day trial', detail: 'from $29/yr' }}
            accentColor="indigo"
            borderHover="border-indigo-500/40"
            glowColor="bg-indigo-500/20"
            shadowColor="shadow-indigo-500/10"
            onClick={() => navigate('thadm')}
          />
          <ProductCard
            id="transcriptai"
            icon={<Mic className="h-6 w-6 text-cyan-400" />}
            title="TranscriptAI"
            badge={{
              text: 'BETA',
              className: 'border border-cyan-400/20 bg-cyan-400/10 text-cyan-400',
            }}
            description="Private AI transcription that never leaves your Mac. Record meetings, import audio, transcribe with Whisper AI — 100% offline."
            tags={['macOS', '100% Offline', 'Whisper AI']}
            tagClassName="border-cyan-400/15 bg-cyan-400/[0.06]"
            pricing={{ highlight: 'Free during beta', detail: 'one-time purchase' }}
            accentColor="cyan"
            borderHover="border-cyan-400/40"
            glowColor="bg-cyan-400/15"
            shadowColor="shadow-cyan-400/10"
            onClick={() => navigate('transcriptai')}
          />
        </div>

        <p className="mt-10 text-xs text-gray-600">
          More products coming soon ·{' '}
          <span className="gradient-text">Neural Notes</span> & others in
          development
        </p>
      </section>

      {/* Why Kalam Plus */}
      <section className="section-container section-padding">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Why <span className="gradient-text">Kalam Plus</span>?
        </h2>
        <p className="mb-12 text-center text-gray-400">
          Every tool we build shares the same principles
        </p>
        <div className="mx-auto grid max-w-[900px] gap-5 md:grid-cols-3">
          {[
            {
              icon: '🔒',
              title: 'Privacy First',
              desc: 'Your data stays on your device. Always.',
            },
            {
              icon: '⚡',
              title: 'Local AI Power',
              desc: 'No cloud dependency. Works offline, works fast.',
            },
            {
              icon: '💎',
              title: 'Own It Forever',
              desc: 'No subscription traps. Pay once or yearly, your choice.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-background-secondary p-7 text-center"
            >
              <p className="mb-4 text-3xl">{item.icon}</p>
              <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
