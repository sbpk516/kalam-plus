import type { Feature, FAQItem, PricingFeature } from '@/types'

export const thadmConfig = {
  name: 'Thadm',
  tagline: 'Your screen, your memory. Always searchable.',
  description:
    'Thadm continuously captures your screen and audio, making everything searchable by text, speech, and context — all processed locally on your machine.',
  trialDays: 14,
  platforms: ['macOS', 'Windows'],
  pricing: {
    annual: {
      price: 29,
      period: 'year',
      perMonth: '2.42',
    },
    lifetime: {
      price: 49,
      period: 'once',
    },
  },
}

export const thadmFeatures: Feature[] = [
  {
    id: 'screen-capture',
    icon: 'Camera',
    title: 'Screen Capture',
    description:
      'Continuous screenshots with smart OCR text extraction from every app.',
    accent: 'purple',
  },
  {
    id: 'audio-recording',
    icon: 'Mic',
    title: 'Audio Recording',
    description:
      'Capture system audio and microphone. Transcribed locally with AI.',
    accent: 'purple',
  },
  {
    id: 'instant-search',
    icon: 'Search',
    title: 'Instant Search',
    description:
      "Find anything you've seen or heard. Full-text search across all captures.",
    accent: 'cyan',
  },
  {
    id: 'app-awareness',
    icon: 'Monitor',
    title: 'App Awareness',
    description:
      'Knows which app, window, and tab you were using. Filter by context.',
    accent: 'purple',
  },
  {
    id: 'privacy',
    icon: 'Lock',
    title: '100% Private',
    description:
      'Everything stored and processed locally. Your data never leaves your device.',
    accent: 'cyan',
  },
  {
    id: 'lightweight',
    icon: 'Zap',
    title: 'Lightweight',
    description:
      'Runs silently in the background. Minimal CPU and memory footprint.',
    accent: 'purple',
  },
]

export const thadmAnnualFeatures: PricingFeature[] = [
  { id: 'a1', text: 'All features included' },
  { id: 'a2', text: '1 year of updates' },
  { id: 'a3', text: 'Email support' },
  { id: 'a4', text: 'macOS & Windows' },
]

export const thadmLifetimeFeatures: PricingFeature[] = [
  { id: 'l1', text: 'All features included' },
  { id: 'l2', text: 'Lifetime updates' },
  { id: 'l3', text: 'Priority support' },
  { id: 'l4', text: 'macOS & Windows' },
  { id: 'l5', text: 'Future features included' },
]

export const thadmFAQ: FAQItem[] = [
  {
    id: 'trial',
    question: 'What happens after my 14-day trial?',
    answer:
      "Your trial will end and you'll be prompted to purchase. No data is lost — just pick a plan to continue.",
  },
  {
    id: 'privacy',
    question: 'Is my data really private?',
    answer:
      'Yes. Everything is processed and stored locally on your machine. Nothing is ever sent to the cloud.',
  },
  {
    id: 'platforms',
    question: 'Which platforms are supported?',
    answer:
      'Thadm works on macOS and Windows. Linux support is planned for the future.',
  },
  {
    id: 'switch-plan',
    question: 'Can I switch from Annual to Lifetime?',
    answer:
      "Yes! Contact support and we'll apply your remaining annual balance toward the lifetime purchase.",
  },
  {
    id: 'refund',
    question: 'Do you offer refunds?',
    answer:
      'Absolutely. We offer a 30-day money-back guarantee on all purchases, no questions asked.',
  },
]

export const thadmAppPreviewEntries = [
  {
    time: '2:34 PM',
    app: 'Chrome',
    text: 'Reviewed Q3 sales dashboard...',
    type: 'ocr' as const,
  },
  {
    time: '2:21 PM',
    app: 'Zoom',
    text: '"Let\'s finalize the proposal by Friday"',
    type: 'audio' as const,
  },
  {
    time: '1:58 PM',
    app: 'VS Code',
    text: 'Debugging authentication flow in auth.ts',
    type: 'ocr' as const,
  },
]
