import { Mic, Cpu, FileText, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { steps } from '@/data/steps'

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Cpu,
  FileText,
}

const accentGlow: Record<string, string> = {
  cyan: 'bg-cyan-400/20',
  purple: 'bg-purple-400/20',
  red: 'bg-rose-400/20',
}

export function HowItWorks() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            The workflow
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            How it{' '}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              works.
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">Three quiet steps to transcription freedom.</p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting hairline, desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-[64px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block"
          />

          {steps.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <div key={step.id} className="relative text-center">
                <div className="relative mx-auto mb-8 h-32 w-32">
                  <div
                    className={cn(
                      'absolute inset-0 -m-2 rounded-full opacity-60 blur-2xl',
                      accentGlow[step.accent]
                    )}
                  />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-background-secondary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]">
                    <Icon className="h-9 w-9 text-white" strokeWidth={1.4} />
                  </div>
                  <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-background-primary text-[11px] font-medium tracking-[0.18em] text-gray-300">
                    {step.number}
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-medium text-white">{step.title}</h3>
                <p className="mx-auto max-w-[240px] text-[15px] leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
