import {
  Mic,
  Upload,
  Youtube,
  Shield,
  Zap,
  Keyboard,
  type LucideIcon,
} from 'lucide-react'
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

const accentColors = {
  cyan: {
    gradient: 'from-cyan-400 to-cyan-600',
    glow: 'from-cyan-500/10 to-transparent',
  },
  purple: {
    gradient: 'from-purple-400 to-purple-600',
    glow: 'from-purple-500/10 to-transparent',
  },
  red: {
    gradient: 'from-red-400 to-red-600',
    glow: 'from-red-500/10 to-transparent',
  },
}

export function FeatureGrid() {
  return (
    <section id="features" className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Everything you need to <span className="gradient-text">transcribe</span>
          </h2>
          <p className="text-lg text-gray-400">
            Powerful features designed for privacy-conscious professionals
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            const colors = accentColors[feature.accent]

            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                {/* Hover glow effect */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                    colors.glow
                  )}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-3">
                    <Icon
                      className={cn('h-6 w-6 bg-gradient-to-r bg-clip-text', colors.gradient)}
                      style={{
                        color:
                          feature.accent === 'cyan'
                            ? '#22d3ee'
                            : feature.accent === 'purple'
                              ? '#a855f7'
                              : '#f87171',
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="relative text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
