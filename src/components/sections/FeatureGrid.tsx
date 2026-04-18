import { Mic, Upload, Youtube, Shield, Zap, Keyboard, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { features } from '@/data/features'

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Upload,
  Youtube,
  Shield,
  Zap,
  Keyboard,
}

const accentText: Record<string, string> = {
  cyan: 'text-cyan-300',
  purple: 'text-purple-300',
  red: 'text-rose-300',
}

const accentGlow: Record<string, string> = {
  cyan: 'from-cyan-500/[0.08] to-transparent',
  purple: 'from-purple-500/[0.08] to-transparent',
  red: 'from-rose-500/[0.08] to-transparent',
}

export function FeatureGrid() {
  return (
    <section id="features" className="relative border-t border-white/[0.06] py-24 lg:py-32">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Capabilities
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Everything you need
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              to transcribe.
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Powerful features, designed for privacy-conscious professionals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    accentGlow[feature.accent]
                  )}
                />
                <div
                  className={cn(
                    'pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60',
                    feature.accent === 'cyan'
                      ? 'bg-cyan-400/20'
                      : feature.accent === 'purple'
                        ? 'bg-purple-400/20'
                        : 'bg-rose-400/20'
                  )}
                />

                <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Icon className={cn('h-5 w-5', accentText[feature.accent])} strokeWidth={1.6} />
                </div>

                <h3 className="relative mb-2 text-lg font-medium text-white">{feature.title}</h3>
                <p className="relative text-[15px] leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
