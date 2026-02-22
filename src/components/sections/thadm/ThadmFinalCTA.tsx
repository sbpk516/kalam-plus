import { thadmConfig } from '@/data/thadm'

export function ThadmFinalCTA() {
  return (
    <section className="section-container section-padding text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
        Ready to{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
          remember everything
        </span>
        ?
      </h2>
      <p className="mb-8 text-gray-400">
        Start your free {thadmConfig.trialDays}-day trial today. No credit card required.
      </p>
      <a
        href="#thadm-pricing"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-[0_8px_32px_rgba(99,102,241,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)]"
      >
        Download Thadm Free →
      </a>
      <p className="mt-3 text-sm text-gray-600">
        Works on macOS & Windows · Free {thadmConfig.trialDays}-day trial
      </p>
    </section>
  )
}
