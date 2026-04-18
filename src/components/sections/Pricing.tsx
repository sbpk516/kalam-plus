import { Check, Apple, Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/data/site'
import { pricingFeatures } from '@/data/pricing'
import { useGithubRelease } from '@/hooks/useGithubRelease'

export function Pricing() {
  const { downloadUrl } = useGithubRelease()

  return (
    <section id="pricing" className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Pricing
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Simple pricing.
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              Own it forever.
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            No subscription. No cloud fees. Pay once, own forever.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative mx-auto max-w-md">
          <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18)_0%,transparent_65%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-10 backdrop-blur-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            {/* Top accent hairline */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {/* Beta Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Free During Beta
            </div>

            {/* Price */}
            <div className="mb-10">
              <div className="flex items-baseline gap-3">
                <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-6xl font-semibold tracking-tight text-transparent lg:text-7xl">
                  {siteConfig.price.currency}
                  {siteConfig.price.current}
                </span>
                <span className="text-xl text-gray-600 line-through">
                  {siteConfig.price.currency}
                  {siteConfig.price.original}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">{siteConfig.price.period}</p>
            </div>

            {/* Features */}
            <ul className="mb-10 space-y-3.5">
              {pricingFeatures.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10">
                    <Check className="h-3 w-3 text-cyan-200" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-gray-300">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href={downloadUrl} className={buttonVariants({ size: 'lg', className: 'w-full' })}>
              <Apple className="h-5 w-5" />
              <span>Download for macOS</span>
              <Download className="h-5 w-5" />
            </a>

            <p className="mt-4 text-center text-xs text-gray-500">
              Get it free during our beta period.
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <p className="mt-10 text-center text-sm text-gray-500">{siteConfig.platform}</p>
      </div>
    </section>
  )
}
