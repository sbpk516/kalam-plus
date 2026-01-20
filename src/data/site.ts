import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'TranscriptAI',
  company: 'Kalam Plus',
  description: 'AI-powered transcription that never leaves your Mac. No cloud. No subscriptions.',
  version: 'v0.1.5',
  platform: 'macOS 13+ • Apple Silicon optimized',
  price: {
    current: 0,
    original: 29,
    currency: '$',
    period: 'one-time',
  },
}

export const ctaText = {
  hero: {
    headline: 'Your meetings, transcribed locally.',
    headlineHighlight: 'Forever private.',
    subheadline:
      'AI-powered transcription that never leaves your Mac. No cloud. No subscriptions. Just fast, accurate text.',
    button: 'Download for macOS',
    betaNote: 'Free during beta',
  },
  final: {
    headline: 'Ready to own your transcriptions?',
    subheadline:
      'Join thousands of professionals who trust TranscriptAI for private, offline transcription.',
    button: 'Download for macOS',
    note: 'Works on macOS 13+ • Apple Silicon optimized • Free during beta',
  },
}
