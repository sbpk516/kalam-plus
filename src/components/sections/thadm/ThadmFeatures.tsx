import { Camera, Mic, Search, Monitor, Lock, Zap } from 'lucide-react'
import { thadmFeatures } from '@/data/thadm'

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Mic,
  Search,
  Monitor,
  Lock,
  Zap,
}

export function ThadmFeatures() {
  return (
    <section className="section-container section-padding">
      <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-white lg:text-4xl">
        Everything you need to{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
          remember
        </span>
      </h2>
      <p className="mb-12 text-center text-gray-400">
        Powerful features that keep your digital life searchable
      </p>

      <div className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {thadmFeatures.map((feature) => {
          const Icon = iconMap[feature.icon]
          return (
            <div
              key={feature.id}
              className="group rounded-xl border border-white/10 bg-background-secondary p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:bg-background-tertiary"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-indigo-500/[0.08]">
                <Icon className="h-5 w-5 text-indigo-400" />
              </div>
              <h4 className="mb-2 font-semibold text-white">{feature.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
