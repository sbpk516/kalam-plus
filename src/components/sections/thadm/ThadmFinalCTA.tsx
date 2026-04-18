import { ArrowRight } from 'lucide-react'
import { thadmConfig } from '@/data/thadm'

interface ThadmFinalCTAProps {
  onDownloadClick: () => void
}

export function ThadmFinalCTA({ onDownloadClick }: ThadmFinalCTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-28 lg:py-40">
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.16)_0%,rgba(99,102,241,0.06)_40%,transparent_70%)]" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Start remembering
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[72px] lg:leading-[1.02]">
            Ready to remember
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              everything?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Start your free {thadmConfig.trialDays}-day trial today. No credit card required.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <button
              onClick={onDownloadClick}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-4 text-base font-medium text-white shadow-[0_12px_40px_-10px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_rgba(99,102,241,0.7)]"
            >
              <span>Download Thadm</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <p className="text-sm text-gray-500">
              Works on macOS &amp; Windows
              <span className="mx-3 text-gray-700">·</span>
              Free {thadmConfig.trialDays}-day trial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
