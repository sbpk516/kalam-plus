import { Play, Clock, Mic, Monitor } from 'lucide-react'

export function ThadmRecordingsGallery() {
  return (
    <section className="section-container section-padding bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <Mic className="h-4 w-4" />
            Audio Intelligence
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Never miss a{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
              word
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Record meetings, calls, and conversations. Get searchable transcripts with speaker detection.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Screenshot */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="flex-1 text-center text-xs text-gray-500">Recordings</span>
              </div>
              <img
                src="/thadm/Recordings_Page.png"
                alt="Thadm Recordings"
                className="w-full"
              />
            </div>
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -bottom-10 -left-10 -right-10 -top-10 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]" />
          </div>

          {/* Features */}
          <div className="order-1 space-y-6 lg:order-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10">
                <Mic className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">System & Mic Audio</h3>
                <p className="text-sm text-gray-400">
                  Capture both sides of video calls — your microphone and system audio simultaneously
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
                <Play className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Sync Playback</h3>
                <p className="text-sm text-gray-400">
                  Click any transcript word to jump to that exact moment in the recording
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Smart Timestamps</h3>
                <p className="text-sm text-gray-400">
                  Every word is timestamped. Know exactly when something was said
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10">
                <Monitor className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Screen Context</h3>
                <p className="text-sm text-gray-400">
                  See what was on your screen when each thing was said
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
