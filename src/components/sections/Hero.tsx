import { Apple, Download, Shield, Zap, Cpu } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig, ctaText } from '@/data/site'
import { trackDownload } from '@/lib/analytics'
import { useGithubRelease } from '@/hooks/useGithubRelease'
import logo from '@/assets/images/logo.jpg'
import heroScreenshot from '@/assets/images/Capture_Page.png'

export function Hero() {
  const { version, downloadUrl } = useGithubRelease()

  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-48">
      {/* Cinematic aurora */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[820px] w-[1200px] -translate-x-1/2 -translate-y-[25%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18)_0%,rgba(34,211,238,0.04)_35%,transparent_65%)]" />
        <div className="absolute right-[22%] top-[6%] h-[520px] w-[700px] translate-x-1/3 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background-primary" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* App Icon */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-3 rounded-[28px] bg-cyan-400/30 opacity-70 blur-2xl" />
              <img
                src={logo}
                alt={siteConfig.name}
                className="relative h-24 w-24 rounded-3xl shadow-[0_20px_50px_-10px_rgba(34,211,238,0.4)]"
              />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500">
            {siteConfig.name}
            <span className="mx-2 text-gray-700">·</span>
            Local-first transcription
          </p>

          {/* Headline */}
          <h1 className="mx-auto max-w-[18ch] text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[96px]">
            <span className="block">{ctaText.hero.headline}</span>
            <span className="block bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              {ctaText.hero.headlineHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 lg:text-xl">
            {ctaText.hero.subheadline}
          </p>

          {/* Primary CTA */}
          <div className="mt-12 flex flex-col items-center gap-5">
            <a
              href={downloadUrl}
              onClick={() => trackDownload('hero')}
              className={buttonVariants({ size: 'lg', className: 'group' })}
            >
              <Apple className="h-6 w-6" />
              <span>{ctaText.hero.button}</span>
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs tracking-wide">
                {version}
              </span>
              <span>{ctaText.hero.betaNote}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <kbd className="rounded border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-xs">
                ⌘
              </kbd>
              <span className="text-gray-600">+</span>
              <kbd className="rounded border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-xs">
                Space
              </kbd>
              <span className="ml-1">to launch</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyan-300" strokeWidth={1.6} />
              <span>100% Offline</span>
            </div>
            <div className="h-3 w-px bg-white/10" aria-hidden />
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-300" strokeWidth={1.6} />
              <span>Whisper AI</span>
            </div>
            <div className="h-3 w-px bg-white/10" aria-hidden />
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-gray-300" strokeWidth={1.6} />
              <span>macOS Native</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-24">
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18)_0%,transparent_60%)] blur-2xl" />
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-background-secondary shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            <img src={heroScreenshot} alt="TranscriptAI Interface" className="w-full" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary via-background-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
