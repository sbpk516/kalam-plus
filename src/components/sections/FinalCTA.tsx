import { Apple, Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { ctaText } from '@/data/site'
import { trackDownload } from '@/lib/analytics'
import { useGithubRelease } from '@/hooks/useGithubRelease'

export function FinalCTA() {
  const { downloadUrl } = useGithubRelease()
  const [lead, rest] = ctaText.final.headline.split('your transcriptions')

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-28 lg:py-40">
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14)_0%,rgba(168,85,247,0.05)_40%,transparent_70%)]" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Start transcribing
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[72px] lg:leading-[1.02]">
            <span>{lead}</span>
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              your transcriptions
            </span>
            <span>{rest ?? '?'}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            {ctaText.final.subheadline}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href={downloadUrl}
              onClick={() => trackDownload('final_cta')}
              className={buttonVariants({ size: 'lg', className: 'group' })}
            >
              <Apple className="h-6 w-6" />
              <span>{ctaText.final.button}</span>
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <p className="text-sm text-gray-500">{ctaText.final.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
