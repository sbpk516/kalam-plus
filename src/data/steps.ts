import type { Step } from '@/types'

export const steps: Step[] = [
  {
    id: 'capture',
    number: 1,
    icon: 'Mic',
    title: 'Capture',
    description: 'Record live or import audio files',
    accent: 'cyan',
  },
  {
    id: 'transcribe',
    number: 2,
    icon: 'Cpu',
    title: 'Transcribe',
    description: 'AI processes locally on your Mac',
    accent: 'purple',
  },
  {
    id: 'use',
    number: 3,
    icon: 'FileText',
    title: 'Use',
    description: 'Search, export, or copy to any app',
    accent: 'red',
  },
]
