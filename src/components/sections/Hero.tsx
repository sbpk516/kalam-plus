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
    <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0D1117] to-[#161B22]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-purple-900/10 to-transparent" />

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt={siteConfig.name}
              className="h-24 w-24 rounded-3xl shadow-2xl shadow-cyan-500/30"
            />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl tracking-tight lg:text-7xl">
            {ctaText.hero.headline}{' '}
            <span className="gradient-text">{ctaText.hero.headlineHighlight}</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400 lg:text-xl">
            {ctaText.hero.subheadline}
          </p>

          {/* Primary CTA */}
          <div className="mb-12 flex flex-col items-center gap-4">
            <a href={downloadUrl} onClick={() => trackDownload('hero')} className={buttonVariants({ size: 'lg', className: 'group' })}>
              <Apple className="h-6 w-6" />
              <span>{ctaText.hero.button}</span>
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {version}
              </span>
              <span>{ctaText.hero.betaNote}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <kbd className="rounded border border-white/20 bg-white/10 px-2 py-1 font-mono text-xs">
                ⌘
              </kbd>
              <span>+</span>
              <kbd className="rounded border border-white/20 bg-white/10 px-2 py-1 font-mono text-xs">
                Space
              </kbd>
              <span className="ml-1">to launch</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span>100% Offline</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>Whisper AI</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Cpu className="h-4 w-4 text-gray-400" />
              <span>macOS Native</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-20">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/20">
            <img
              src={heroScreenshot}
              alt="TranscriptAI Interface"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
