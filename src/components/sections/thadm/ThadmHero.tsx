import { ArrowRight, Play } from 'lucide-react'
import { thadmConfig } from '@/data/thadm'
import thadmIcon from '@/assets/images/thadm-icon.png'

interface ThadmHeroProps {
  onDownloadClick: () => void
}

export function ThadmHero({ onDownloadClick }: ThadmHeroProps) {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 text-center lg:pb-32 lg:pt-48">
      {/* Cinematic aurora */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[820px] w-[1200px] -translate-x-1/2 -translate-y-[25%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.20)_0%,rgba(168,85,247,0.04)_35%,transparent_65%)]" />
        <div className="absolute left-[28%] top-[4%] h-[520px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.14)_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background-primary" />
      </div>

      <div className="section-container relative">
        {/* App Icon */}
        <div className="mx-auto mb-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 -m-3 rounded-[28px] bg-indigo-400/40 opacity-70 blur-2xl" />
            <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/25 to-purple-500/25 shadow-[0_20px_50px_-10px_rgba(99,102,241,0.5)]">
              <img
                src={thadmIcon}
                alt="Thadm"
                className="h-14 w-14 object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </div>
          </div>
        </div>

        {/* Eyebrow */}
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500">
          Thadm
          <span className="mx-2 text-gray-700">·</span>A memory for your Mac
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-[18ch] text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[96px]">
          <span className="block">Your screen, your memory.</span>
          <span className="block bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Always searchable.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-400 lg:text-xl">
          {thadmConfig.description}
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onDownloadClick}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-base font-medium text-white shadow-[0_12px_40px_-10px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_rgba(99,102,241,0.7)]"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
          <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-base font-medium text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
            <Play className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
            <span>Watch Demo</span>
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Free {thadmConfig.trialDays}-day trial
          <span className="mx-3 text-gray-700">·</span>
          No credit card required
          <span className="mx-3 text-gray-700">·</span>
          macOS &amp; Windows
        </p>
      </div>
    </section>
  )
}
