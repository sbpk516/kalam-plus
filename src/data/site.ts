import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'TranscriptAI',
  company: 'Kalam Plus',
  description: 'AI-powered transcription that never leaves your Mac. No cloud. No subscriptions.',
  version: 'v0.1.7',
  platform: 'macOS 13+ • Apple Silicon optimized',
  downloadUrl: 'https://github.com/sbpk516/transcriptai/releases/latest/download/TranscriptAI-0.1.7-arm64.dmg',
  // Windows installer (NSIS). The live URL is resolved dynamically from the latest
  // GitHub release (.exe asset); this is the fallback.
  windowsUrl: 'https://github.com/sbpk516/transcriptai/releases/download/v0.5.0/TranscriptAI.Setup.0.5.0.exe',
  // TODO: paste the LemonSqueezy/Stripe checkout link for the $18.83 TranscriptAI
  // license. While empty, the page shows the free-trial download as the primary CTA.
  checkoutUrl: '',
  price: {
    current: 18.83,
    original: 100.83,
    currency: '$',
    period: 'one-time · lifetime',
    promoLabel: 'Launch offer for early users',
  },
}

export const ctaText = {
  hero: {
    headline: 'Your meetings, transcribed locally.',
    headlineHighlight: 'Forever private.',
    subheadline:
      'AI-powered transcription that never leaves your Mac. No cloud. No subscriptions. Just fast, accurate text.',
    button: 'Download for macOS',
    betaNote: 'Free 15-day trial',
  },
  final: {
    headline: 'Ready to own your transcriptions?',
    subheadline:
      'Join thousands of professionals who trust TranscriptAI for private, offline transcription.',
    button: 'Download for macOS',
    note: 'Works on macOS 13+ • Apple Silicon optimized • Free 15-day trial, then $18.83 once',
  },
}
