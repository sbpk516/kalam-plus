import { Apple, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ctaText } from '@/data/site'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
            {ctaText.final.headline.split('your transcriptions')[0]}
            <span className="gradient-text">your transcriptions</span>?
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
            {ctaText.final.subheadline}
          </p>

          {/* CTA Button */}
          <Button size="lg" className="group">
            <Apple className="h-6 w-6" />
            <span>{ctaText.final.button}</span>
            <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
          </Button>

          {/* Note */}
          <p className="mt-6 text-sm text-gray-500">{ctaText.final.note}</p>
        </div>
      </div>
    </section>
  )
}
