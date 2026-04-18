import { ArrowUpRight, Cpu, Infinity as InfinityIcon, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AppRoute } from '@/hooks/useHashRoute'

interface ProductHubProps {
  navigate: (route: AppRoute) => void
}

export function ProductHub({ navigate }: ProductHubProps) {
  return (
    <div>
      <HeroCinematic />
      <ProductScene
        index="01"
        name="Thadm"
        status="New"
        statusTone="violet"
        tagline="A photographic memory for your Mac."
        description="AI-powered screen recording and recall. Capture everything that happens on your screen — searchable by text, audio, and context. Your personal rewind button for anything you've seen."
        platforms={['macOS', 'Windows', 'Local AI']}
        pricing="Free 14-day trial · from $29/yr"
        onOpen={() => navigate('thadm')}
        visual={<ThadmVisual />}
      />
      <ProductScene
        index="02"
        name="TranscriptAI"
        status="Beta"
        statusTone="cyan"
        tagline="Transcription that never leaves your device."
        description="Record meetings, import audio, capture YouTube — and transcribe with Whisper AI, entirely offline. Private by design, accurate by default."
        platforms={['macOS', '100% Offline', 'Whisper AI']}
        pricing="Free during beta · one-time purchase"
        onOpen={() => navigate('transcriptai')}
        visual={<TranscriptAIVisual />}
        reverse
      />
      <Principles />
      <Teaser />
    </div>
  )
}

/* ---------------------------- Hero --------------------------------------- */

function HeroCinematic() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-40 lg:pt-52">
      <Aurora />

      <div className="section-container relative text-center">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500">
          Kalam Plus
          <span className="mx-2 text-gray-700">·</span>
          AI for the thoughtful
        </p>

        <h1 className="mx-auto max-w-[16ch] text-5xl font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-[112px]">
          <span className="block">Intelligent tools,</span>
          <span className="block bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            built to stay local.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
          Powerful AI that runs on your Mac. No cloud. No surveillance. Just software that works —
          and stays yours.
        </p>

        <div className="mt-14 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gray-600">
          <span className="h-px w-10 bg-white/10" />
          <span>Scroll to meet the products</span>
          <span className="h-px w-10 bg-white/10" />
        </div>
      </div>
    </section>
  )
}

function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute left-1/2 top-0 h-[820px] w-[1200px] -translate-x-1/2 -translate-y-[30%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18)_0%,rgba(168,85,247,0.04)_35%,transparent_65%)]" />
      <div className="absolute left-[30%] top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12)_0%,transparent_60%)]" />
      <div className="absolute right-[20%] top-[8%] h-[500px] w-[700px] translate-x-1/3 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background-primary" />
    </div>
  )
}

/* ---------------------------- Product Scene ------------------------------ */

interface ProductSceneProps {
  index: string
  name: string
  status: string
  statusTone: 'violet' | 'cyan'
  tagline: string
  description: string
  platforms: string[]
  pricing: string
  onOpen: () => void
  visual: React.ReactNode
  reverse?: boolean
}

function ProductScene({
  index,
  name,
  status,
  statusTone,
  tagline,
  description,
  platforms,
  pricing,
  onOpen,
  visual,
  reverse = false,
}: ProductSceneProps) {
  const statusClass =
    statusTone === 'violet'
      ? 'text-indigo-200 border-indigo-400/30 bg-indigo-500/10'
      : 'text-cyan-200 border-cyan-400/30 bg-cyan-500/10'

  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div className={cn(reverse && 'lg:order-2')}>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
              <span>{index}</span>
              <span className="h-px w-6 bg-white/15" />
              <span
                className={cn(
                  'rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.18em]',
                  statusClass
                )}
              >
                {status}
              </span>
            </div>

            <h2 className="mb-5 text-5xl font-semibold tracking-tight text-white lg:text-7xl">
              {name}
            </h2>

            <p className="mb-5 max-w-xl text-2xl leading-snug tracking-tight text-gray-200 lg:text-[32px] lg:leading-[1.15]">
              {tagline}
            </p>

            <p className="mb-8 max-w-lg text-[17px] leading-relaxed text-gray-400">{description}</p>

            <div className="mb-10 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-gray-400"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <button
                onClick={onOpen}
                className="group inline-flex items-center gap-2 self-start text-base font-medium text-white"
              >
                <span className="border-b border-white/30 pb-0.5 transition-colors duration-300 group-hover:border-white">
                  Learn more
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </button>
              <p className="text-sm text-gray-500">{pricing}</p>
            </div>
          </div>

          {/* Visual */}
          <div className={cn('relative', reverse && 'lg:order-1')}>{visual}</div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------- Visuals ------------------------------------ */

function WindowChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      {children}
    </div>
  )
}

function ThadmVisual() {
  return (
    <div className="relative aspect-[5/4] w-full">
      <div className="pointer-events-none absolute inset-0 -m-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.28)_0%,transparent_65%)] blur-2xl" />
      <WindowChrome>
        <div className="space-y-5 p-6">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-indigo-400" />
              <div className="h-2.5 w-28 rounded bg-white/15" />
            </div>
            <div className="h-2.5 w-20 rounded bg-indigo-400/40" />
          </div>

          {/* Memory grid */}
          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: 12 }).map((_, i) => {
              const highlight = i === 5 || i === 9
              return (
                <div
                  key={i}
                  className={cn(
                    'aspect-square overflow-hidden rounded-lg border',
                    highlight
                      ? 'border-indigo-400/40 bg-gradient-to-br from-indigo-500/35 to-purple-500/20 shadow-[0_0_25px_-5px_rgba(139,92,246,0.6)]'
                      : 'border-white/5 bg-gradient-to-br from-white/[0.05] to-white/[0.01]'
                  )}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      background: `linear-gradient(135deg, rgba(139,92,246,${
                        0.04 + (i % 3) * 0.05
                      }) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* Bottom pill */}
          <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
            <div className="h-2 w-24 rounded bg-white/10" />
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <div className="h-2 w-10 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </WindowChrome>
    </div>
  )
}

function TranscriptAIVisual() {
  return (
    <div className="relative aspect-[5/4] w-full">
      <div className="pointer-events-none absolute inset-0 -m-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25)_0%,transparent_65%)] blur-2xl" />
      <WindowChrome>
        <div className="space-y-6 p-6">
          {/* Waveform */}
          <div className="flex h-20 items-center justify-center gap-[3px] px-2">
            {Array.from({ length: 48 }).map((_, i) => {
              const h = 18 + Math.abs(Math.sin(i * 0.55) * 45) + Math.abs(Math.cos(i * 0.23) * 18)
              return (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-500/20"
                  style={{ height: `${Math.min(h, 90)}%` }}
                />
              )
            })}
          </div>

          {/* Transcript lines */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="h-2 w-12 shrink-0 rounded bg-cyan-400/40" />
              <div className="h-2 w-full rounded bg-white/10" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-12 shrink-0 rounded bg-white/10" />
              <div className="h-2 w-5/6 rounded bg-white/10" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-12 shrink-0 rounded bg-white/10" />
              <div className="h-2 w-4/6 rounded bg-white/10" />
            </div>
          </div>

          {/* Status row */}
          <div className="flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <div className="h-2 w-20 rounded bg-white/10" />
            </div>
            <div className="h-2 w-16 rounded bg-white/10" />
          </div>
        </div>
      </WindowChrome>
    </div>
  )
}

/* ---------------------------- Principles --------------------------------- */

function Principles() {
  const items = [
    {
      icon: Shield,
      label: 'Privacy by default',
      body: 'Your data never leaves your device. No telemetry, no accounts, no cloud sync unless you ask for it.',
    },
    {
      icon: Cpu,
      label: 'On-device intelligence',
      body: 'Apple Silicon and Whisper-class models run natively. Instant response, zero latency, zero API bills.',
    },
    {
      icon: InfinityIcon,
      label: 'Yours to keep',
      body: 'No subscription lock-in. Pay once or yearly — the software stays with you, forever.',
    },
  ]

  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-32">
      <div className="section-container">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            The Kalam Plus principles
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Every tool, the same promise.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
          {items.map(({ icon: Icon, label, body }) => (
            <div key={label} className="text-center md:text-left">
              <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white md:mx-0">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mb-2 text-lg font-medium text-white">{label}</h3>
              <p className="text-[15px] leading-relaxed text-gray-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------- Teaser ------------------------------------- */

function Teaser() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_65%)]" />
      <div className="section-container relative text-center">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
          In the workshop
        </p>
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight lg:text-[72px] lg:leading-[1.02]">
          <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Neural Notes,
            <br className="hidden sm:inline" /> and more to come.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-400">
          We're building the next generation of quiet, private AI tools. Stay close.
        </p>
      </div>
    </section>
  )
}
