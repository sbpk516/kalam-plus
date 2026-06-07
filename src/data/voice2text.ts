// Content/config for the Voice2Text product page. Kept self-contained so the
// page does not depend on TranscriptAI/Thadm-specific shared section data.

export const voice2textConfig = {
  name: 'Voice2Text',
  tagline: 'Record. Transcribe. Stays on your PC.',
  description:
    'A lightweight, fully-offline voice recorder and transcriber for Windows — built for English and Indian languages. Record or import audio and get an editable transcript, with nothing ever leaving your device.',
  trialDays: 15,
  platforms: ['Windows 10 / 11', '100% Offline', 'Whisper AI'],
  languages: [
    'English',
    'Hindi',
    'Tamil',
    'Telugu',
    'Malayalam',
    'Gujarati',
    'Bengali',
    'Odia',
  ],
  price: {
    current: 18.85,
    original: 100.85,
    currency: '$',
    period: 'one-time · lifetime',
    promoLabel: 'Launch offer for early users',
  },
}

export interface V2TFeature {
  icon: string // lucide-react icon name
  title: string
  description: string
  accent: 'pink' | 'red'
}

export const voice2textFeatures: V2TFeature[] = [
  {
    icon: 'Mic',
    title: 'Record anything',
    description:
      'Capture your microphone or system/meeting audio, or import existing files (MP3, WAV, M4A, FLAC, OGG).',
    accent: 'pink',
  },
  {
    icon: 'Languages',
    title: 'English + Indian languages',
    description:
      'Auto-detect or pick from English, Hindi, Tamil, Telugu, Malayalam, Gujarati, Bengali and Odia.',
    accent: 'red',
  },
  {
    icon: 'WifiOff',
    title: '100% offline',
    description:
      'Powered by Whisper AI running locally. After the one-time model download, no internet is ever needed.',
    accent: 'pink',
  },
  {
    icon: 'FileText',
    title: 'Editable transcripts',
    description:
      'Review and edit text with synced audio playback — click any segment to jump straight to it.',
    accent: 'red',
  },
  {
    icon: 'Download',
    title: 'Export anywhere',
    description:
      'Save as TXT, SRT, VTT or JSON, or copy the whole transcript with one click.',
    accent: 'pink',
  },
  {
    icon: 'Lock',
    title: 'Private by design',
    description:
      'Your audio and transcripts stay on disk. No accounts, no cloud, no telemetry.',
    accent: 'red',
  },
]

export const voice2textHowItWorks = [
  {
    step: '01',
    title: 'Record or import',
    description: 'Hit record, or drop in an existing audio file.',
  },
  {
    step: '02',
    title: 'Transcribe offline',
    description: 'Whisper AI turns speech into text right on your machine.',
  },
  {
    step: '03',
    title: 'Edit & export',
    description: 'Tidy up the transcript and export it however you need.',
  },
]

export const voice2textFAQ = [
  {
    id: 'trial',
    question: 'What happens after my 15-day free trial?',
    answer:
      "You'll be prompted to buy a one-time license. Nothing is lost — just paste your license key to keep going. It's a single payment, yours forever.",
  },
  {
    id: 'offline',
    question: 'Does it really work offline?',
    answer:
      'Yes. The first time you transcribe, the chosen Whisper model downloads once. After that everything runs locally with no internet connection required.',
  },
  {
    id: 'languages',
    question: 'Which Indian languages are supported?',
    answer:
      'English plus Hindi, Tamil, Telugu, Malayalam, Gujarati, Bengali and Odia. For best Indian-language accuracy, use the medium or large model in Settings.',
  },
  {
    id: 'platforms',
    question: 'Which platforms are supported?',
    answer:
      'Windows 10 (1909+) and Windows 11, 64-bit. A CUDA GPU is used automatically if present, otherwise it runs on the CPU.',
  },
  {
    id: 'license',
    question: 'How do I activate my license?',
    answer:
      "After purchase you'll receive a license token. Open Settings → License in the app (or the trial banner), paste the token, and click Activate. Activation is offline.",
  },
]
