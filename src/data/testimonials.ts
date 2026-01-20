import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 'sarah',
    quote:
      'TranscriptAI has transformed how I document meetings. The privacy aspect is exactly what I needed.',
    author: {
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    },
  },
  {
    id: 'michael',
    quote:
      'Finally, a transcription tool that works offline. Perfect for sensitive client calls.',
    author: {
      name: 'Michael Rodriguez',
      role: 'Legal Consultant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    },
  },
  {
    id: 'emma',
    quote:
      'The YouTube import feature is brilliant. I can transcribe lectures and study materials instantly.',
    author: {
      name: 'Emma Thompson',
      role: 'Graduate Student',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    },
  },
]
