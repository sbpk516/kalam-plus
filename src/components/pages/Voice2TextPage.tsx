import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  FileText,
  Languages,
  Lock,
  Mic,
  Shield,
  WifiOff,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useVoice2TextRelease } from '@/hooks/useVoice2TextRelease'
import {
  voice2textConfig as cfg,
  voice2textFAQ,
  voice2textFeatures,
  voice2textHowItWorks,
} from '@/data/voice2text'
import icon from '@/assets/images/voice2text-icon.png'

// Optional hosted checkout. Empty for now — the in-app 15-day trial drives the
// purchase, mirroring TranscriptAI. Set this to a checkout URL when available.
const CHECKOUT_URL = ''

const ICONS: Record<string, typeof Mic> = {
  Mic,
  Languages,
  WifiOff,
  FileText,
  Download,
  Lock,
}

export function Voice2TextPage() {
  const { windowsUrl, version } = useVoice2TextRelease()

  const onBuy = () => {
    if (CHECKOUT_URL) window.open(CHECKOUT_URL, '_blank')
    else document.getElementById('v2t-pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="overflow-hidden">
      <Hero windowsUrl={windowsUrl} version={version} onBuy={onBuy} />
      <Features />
      <HowItWorks />
      <LanguageStrip />
      <Pricing windowsUrl={windowsUrl} />
      <FAQ />
      <FinalCTA windowsUrl={windowsUrl} />
    </div>
  )
}

/* ------------------------------- Hero ------------------------------------ */

function Hero({
  windowsUrl,
  version,
  onBuy,
}: {
  windowsUrl: string
  version: string
  onBuy: () => void
}) {
  return (
    <section className="relative pb-20 pt-36 lg:pt-48">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-[25%] bg-[radial-gradient(ellipse_at_center,rgba(224,36,94,0.16)_0%,rgba(255,71,87,0.05)_38%,transparent_68%)]" />
      </div>

      <div className="section-container relative text-center">
        <img
          src={icon}
          alt="Voice2Text"
          className="mx-auto mb-8 h-24 w-24 rounded-[26px] shadow-[0_20px_60px_-15px_rgba(224,36,94,0.6)] [animation:float-gentle_8s_ease-in-out_infinite]"
        />

        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500">
          Voice2Text · by Kalam Plus
        </p>

        <h1 className="mx-auto max-w-[18ch] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block">Record. Transcribe.</span>
          <span className="block bg-gradient-to-r from-[#ff6b81] to-[#e0245e] bg-clip-text text-transparent">
            Stays on your PC.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-gray-400">
          {cfg.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={windowsUrl}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e0245e] to-[#ff4757] px-8 py-3.5 text-base font-medium text-white shadow-[0_12px_40px_-10px_rgba(224,36,94,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_rgba(224,36,94,0.7)]"
          >
            <Download className="h-5 w-5" />
            <span>Download for Windows</span>
          </a>
          <button
            onClick={onBuy}
            className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Buy — {cfg.price.currency}
            {cfg.price.current}
          </button>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Free {cfg.trialDays}-day trial · {version} · no account required
        </p>
      </div>
    </section>
  )
}

/* ----------------------------- Features ---------------------------------- */

function Features() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-32">
      <div className="section-container">
        <div className="mb-14 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Everything you need to turn speech into text.
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {voice2textFeatures.map((f) => {
            const Icon = ICONS[f.icon] ?? Mic
            const tone =
              f.accent === 'pink'
                ? 'text-[#ff6b81] border-[#e0245e]/30 bg-[#e0245e]/10'
                : 'text-[#ff8a95] border-[#ff4757]/30 bg-[#ff4757]/10'
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/15"
              >
                <div
                  className={cn(
                    'mb-4 flex h-11 w-11 items-center justify-center rounded-xl border',
                    tone
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-gray-400">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* --------------------------- How it works -------------------------------- */

function HowItWorks() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-32">
      <div className="section-container">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            How it works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Three steps. No cloud.
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-3">
          {voice2textHowItWorks.map((s) => (
            <div key={s.step} className="text-center md:text-left">
              <div className="mb-4 text-3xl font-semibold text-[#e0245e]">{s.step}</div>
              <h3 className="mb-2 text-lg font-medium text-white">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------- Language strip ------------------------------ */

function LanguageStrip() {
  return (
    <section className="relative border-t border-white/[0.06] py-20">
      <div className="section-container text-center">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
          Speaks your language
        </p>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {cfg.languages.map((l) => (
            <span
              key={l}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-gray-300"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Pricing ---------------------------------- */

function Pricing({ windowsUrl }: { windowsUrl: string }) {
  const features = [
    'All features included',
    'Lifetime updates',
    `${cfg.trialDays}-day free trial`,
    'English + 7 Indian languages',
    '100% offline · private',
    'Windows 10 & 11',
  ]
  return (
    <section id="v2t-pricing" className="relative border-t border-white/[0.06] py-24 lg:py-32">
      <div className="section-container">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            One price. Yours forever.
          </h2>
          <p className="mt-3 text-gray-400">No subscription. Pay once, use it as long as you like.</p>
        </div>

        <div className="mx-auto max-w-md rounded-3xl border border-[#e0245e]/30 bg-white/[0.02] p-8 shadow-[0_30px_80px_-30px_rgba(224,36,94,0.4)]">
          <div className="mb-1 inline-flex rounded-full border border-[#e0245e]/30 bg-[#e0245e]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff6b81]">
            {cfg.price.promoLabel}
          </div>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-5xl font-semibold text-white">
              {cfg.price.currency}
              {cfg.price.current}
            </span>
            <span className="text-xl text-gray-500 line-through">
              {cfg.price.currency}
              {cfg.price.original}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">{cfg.price.period}</p>

          <ul className="mt-7 space-y-3">
            {features.map((t) => (
              <li key={t} className="flex items-center gap-3 text-[15px] text-gray-300">
                <Check className="h-4 w-4 text-[#ff6b81]" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>

          <a
            href={windowsUrl}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e0245e] to-[#ff4757] px-6 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="h-5 w-5" />
            Download & start free trial
          </a>
          <div className="mt-5 flex items-center justify-center gap-6 text-[11px] text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" /> Private & offline
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" /> One-time payment
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- FAQ ------------------------------------ */

function FAQ() {
  const [open, setOpen] = useState<string | null>(voice2textFAQ[0]?.id ?? null)
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-32">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-semibold tracking-tight text-white lg:text-5xl">
          Questions, answered.
        </h2>
        <div className="mx-auto max-w-2xl divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.07]">
          {voice2textFAQ.map((item) => {
            const isOpen = open === item.id
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
                >
                  {item.question}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-gray-400">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- Final CTA --------------------------------- */

function FinalCTA({ windowsUrl }: { windowsUrl: string }) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(224,36,94,0.12)_0%,transparent_65%)]" />
      <div className="section-container relative text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white lg:text-6xl lg:leading-[1.05]">
          Your voice, turned to text — privately.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-400">
          Try Voice2Text free for {cfg.trialDays} days. Everything runs on your PC.
        </p>
        <a
          href={windowsUrl}
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e0245e] to-[#ff4757] px-8 py-3.5 text-base font-medium text-white shadow-[0_12px_40px_-10px_rgba(224,36,94,0.6)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Download className="h-5 w-5" />
          <span>Download for Windows</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
