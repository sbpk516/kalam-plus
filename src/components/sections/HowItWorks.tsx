import { Mic, Cpu, FileText, ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { steps } from '@/data/steps'

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Cpu,
  FileText,
}

const accentColors = {
  cyan: 'from-cyan-500 to-cyan-700',
  purple: 'from-purple-500 to-purple-700',
  red: 'from-red-500 to-red-700',
}

export function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-gray-400">Three simple steps to transcription freedom</p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon]
            const gradientColor = accentColors[step.accent]

            return (
              <div key={step.id} className="flex items-center">
                {/* Step Card */}
                <div className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-8 text-center">
                  {/* Step Number */}
                  <div
                    className={cn(
                      'mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white',
                      gradientColor
                    )}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 rounded-xl bg-white/5 p-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="max-w-[200px] text-sm text-gray-400">{step.description}</p>
                </div>

                {/* Arrow (between steps, desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden px-4 md:block">
                    <ArrowRight className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
