import type { FAQItem } from '@/types'

export const faqItems: FAQItem[] = [
  {
    id: 'different',
    question: 'What makes TranscriptAI different from Otter.ai?',
    answer:
      'Unlike cloud-based services like Otter.ai, TranscriptAI processes everything locally on your Mac. Your audio never leaves your device, ensuring complete privacy. Plus, there are no subscriptions—pay once, own forever.',
  },
  {
    id: 'offline',
    question: 'Does it work offline?',
    answer:
      "Yes, 100% offline. TranscriptAI doesn't require an internet connection to transcribe audio. The AI model runs entirely on your Mac, so you can use it anywhere.",
  },
  {
    id: 'formats',
    question: 'What audio formats are supported?',
    answer:
      'TranscriptAI supports all major audio formats including WAV, MP3, M4A, FLAC, AAC, OGG, and more. Files up to 10GB are supported.',
  },
  {
    id: 'accuracy',
    question: 'How accurate is the transcription?',
    answer:
      "TranscriptAI achieves 95%+ accuracy using OpenAI's Whisper model, one of the most advanced speech recognition systems available. Accuracy may vary based on audio quality and background noise.",
  },
  {
    id: 'windows',
    question: 'Will you add Windows support?',
    answer:
      "Windows support is on our roadmap, but we don't have a specific timeline yet. Sign up for our newsletter to be notified when it becomes available.",
  },
  {
    id: 'beta',
    question: 'What happens after the beta period?',
    answer:
      "After the beta period ends, TranscriptAI will be available for a one-time purchase of $29. If you download during the beta, you'll receive a significant discount or possibly free access as a thank you for early support.",
  },
]
