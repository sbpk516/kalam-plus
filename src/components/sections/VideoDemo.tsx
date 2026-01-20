import { Play } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function VideoDemo() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            See <span className="gradient-text">{siteConfig.name}</span> in action
          </h2>
          <p className="text-lg text-gray-400">
            Learn how to record, transcribe, and export in minutes
          </p>
          <p className="mt-2 text-sm text-gray-500">Watch the 2-minute demo</p>
        </div>

        {/* Video Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Decorative gradients */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />

          {/* Video wrapper */}
          <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-background-secondary">
            {/* Placeholder content */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-secondary to-background-tertiary" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/20">
                <Play className="h-8 w-8 text-white" fill="currentColor" />
              </div>

              {/* Glow effect on hover */}
              <div className="absolute h-32 w-32 rounded-full bg-cyan-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 rounded-lg bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
              2:00
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
