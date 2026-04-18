import { Play, Clock, Mic, Monitor } from 'lucide-react'

const features = [
  {
    icon: Mic,
    label: 'System & mic audio',
    body: 'Capture both sides of every call — your microphone and system audio simultaneously.',
    tone: 'text-indigo-200',
  },
  {
    icon: Play,
    label: 'Sync playback',
    body: 'Click any transcript word to jump to that exact moment in the recording.',
    tone: 'text-purple-200',
  },
  {
    icon: Clock,
    label: 'Smart timestamps',
    body: 'Every word is timestamped. Know exactly when something was said.',
    tone: 'text-cyan-200',
  },
  {
    icon: Monitor,
    label: 'Screen context',
    body: 'See what was on your screen at the moment each thing was said.',
    tone: 'text-pink-200',
  },
] as const

export function ThadmRecordingsGallery() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Audio intelligence
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Never miss
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              a single word.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Record meetings, calls, and conversations — with searchable transcripts and speaker
            detection.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Screenshot */}
          <div className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18)_0%,transparent_65%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background-secondary shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="flex-1 text-center text-[11px] font-medium tracking-wide text-gray-500">
                  Recordings
                </span>
                <div className="w-14" />
              </div>
              <img src="/thadm/Recordings_Page.png" alt="Thadm Recordings" className="w-full" />
            </div>
          </div>

          {/* Features */}
          <div className="order-1 space-y-10 lg:order-2">
            {features.map(({ icon: Icon, label, body, tone }) => (
              <div key={label} className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Icon className={`h-5 w-5 ${tone}`} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-medium text-white">{label}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-400">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
