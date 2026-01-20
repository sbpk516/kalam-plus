import { Check, Apple, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site'
import { pricingFeatures } from '@/data/pricing'

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Simple pricing. <span className="gradient-text">Own it forever.</span>
          </h2>
          <p className="text-lg text-gray-400">
            No subscription. No cloud fees. Pay once, own forever.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative mx-auto max-w-md">
          {/* Glow effect */}
          <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-10">
            {/* Beta Badge */}
            <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-1 text-sm font-medium">
              Free During Beta
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white lg:text-6xl">
                  {siteConfig.price.currency}
                  {siteConfig.price.current}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {siteConfig.price.currency}
                  {siteConfig.price.original}
                </span>
              </div>
              <p className="mt-2 text-gray-400">{siteConfig.price.period}</p>
            </div>

            {/* Features */}
            <ul className="mb-8 space-y-4">
              {pricingFeatures.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                    <Check className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-gray-300">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button size="lg" className="w-full">
              <Apple className="h-5 w-5" />
              <span>Download for macOS</span>
              <Download className="h-5 w-5" />
            </Button>

            {/* Note */}
            <p className="mt-4 text-center text-xs text-gray-500">
              Get it free during our beta period
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <p className="mt-8 text-center text-sm text-gray-500">{siteConfig.platform}</p>
      </div>
    </section>
  )
}
