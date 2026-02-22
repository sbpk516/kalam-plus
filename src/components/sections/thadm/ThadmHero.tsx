import { thadmConfig } from '@/data/thadm'

export function ThadmHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-8 pt-24 text-center lg:px-8 lg:pt-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(99,102,241,0.08)_0%,rgba(139,92,246,0.04)_40%,transparent_70%)]" />

      {/* App Icon */}
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[20px] border border-indigo-500/25 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-4xl">
        👁️
      </div>

      <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl">
        Your screen, your{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
          memory.
        </span>
        <br />
        Always searchable.
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
        {thadmConfig.description}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="#thadm-pricing"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_32px_rgba(99,102,241,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)]"
        >
          Start Free Trial
          <span className="text-sm">→</span>
        </a>
        <button className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.08] px-8 py-3.5 text-base font-medium text-indigo-300 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/[0.12]">
          Watch Demo
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Free {thadmConfig.trialDays}-day trial · No credit card required · macOS & Windows
      </p>
    </section>
  )
}
