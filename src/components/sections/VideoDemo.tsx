import { Play } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function VideoDemo() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Watch the 2-minute demo
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            See {siteConfig.name}
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              in motion.
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Learn how to record, transcribe, and export in minutes.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative mx-auto max-w-4xl">
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14)_0%,transparent_65%)] blur-2xl" />

          <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-background-secondary to-background-tertiary shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.14]">
                  <Play className="ml-1 h-7 w-7 text-white" fill="currentColor" strokeWidth={0} />
                </div>
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              2:00
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
