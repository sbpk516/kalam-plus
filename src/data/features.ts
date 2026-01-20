import type { Feature } from '@/types'

export const features: Feature[] = [
  {
    id: 'live-recording',
    icon: 'Mic',
    title: 'Live Recording',
    description:
      'Record any audio source directly from your Mac. Perfect for meetings, interviews, and lectures.',
    accent: 'cyan',
  },
  {
    id: 'import-audio',
    icon: 'Upload',
    title: 'Import Any Audio',
    description:
      'Drag and drop audio files for instant transcription. Supports WAV, MP3, M4A, FLAC, and more.',
    accent: 'purple',
  },
  {
    id: 'youtube-import',
    icon: 'Youtube',
    title: 'YouTube Import',
    description:
      'Paste any YouTube URL to automatically download and transcribe the audio content.',
    accent: 'red',
  },
  {
    id: 'private',
    icon: 'Shield',
    title: '100% Private',
    description:
      'All processing happens locally on your Mac. Your audio and transcripts never leave your device.',
    accent: 'cyan',
  },
  {
    id: 'whisper-ai',
    icon: 'Zap',
    title: 'Whisper AI',
    description:
      "Powered by OpenAI's Whisper model, optimized for Apple Silicon. Fast, accurate, and reliable.",
    accent: 'purple',
  },
  {
    id: 'dictation',
    icon: 'Keyboard',
    title: 'Press-and-Hold Dictation',
    description:
      'Hold a key to dictate text anywhere on your Mac. Release to get instant transcription.',
    accent: 'red',
  },
]
