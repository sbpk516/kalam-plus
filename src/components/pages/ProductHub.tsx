import { ArrowUpRight, Cpu, Infinity as InfinityIcon, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AppRoute } from '@/hooks/useHashRoute'
import transcriptAICapture from '@/assets/images/Capture_Page.png'

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

function ThadmVisual() {
  return (
    <div className="group relative aspect-[3/2] w-full [animation:float-gentle_8s_ease-in-out_infinite]">
      {/* Ambient breathing glow */}
      <div className="pointer-events-none absolute inset-0 -m-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.32)_0%,rgba(99,102,241,0.12)_40%,transparent_70%)] blur-2xl [animation:glow-pulse_6s_ease-in-out_infinite]" />

      {/* Screenshot frame */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_100px_-20px_rgba(99,102,241,0.35),0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_50px_120px_-20px_rgba(99,102,241,0.45),0_25px_70px_-20px_rgba(0,0,0,0.9)]">
        <img
          src="/thadm/Thadm_Home_Page.png"
          alt="Thadm — your screen memory"
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />

        {/* Sheen sweep on first view */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent [animation:sheen_2.8s_ease-out_0.8s_both]"
        />

        {/* Inner rim highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
        />
      </div>
    </div>
  )
}

function TranscriptAIVisual() {
  return (
    <div className="group relative aspect-[3/2] w-full [animation:float-gentle_8s_ease-in-out_infinite_-4s]">
      {/* Ambient breathing glow */}
      <div className="pointer-events-none absolute inset-0 -m-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.32)_0%,rgba(168,85,247,0.12)_40%,transparent_70%)] blur-2xl [animation:glow-pulse_6s_ease-in-out_infinite_-3s]" />

      {/* Screenshot frame */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-background-secondary shadow-[0_40px_100px_-20px_rgba(34,211,238,0.32),0_20px_60px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_50px_120px_-20px_rgba(34,211,238,0.42),0_25px_70px_-20px_rgba(0,0,0,0.9)]">
        <img
          src={transcriptAICapture}
          alt="TranscriptAI — audio capture"
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />

        {/* Sheen sweep on first view */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent [animation:sheen_2.8s_ease-out_1.2s_both]"
        />

        {/* Inner rim highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
        />
      </div>
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
