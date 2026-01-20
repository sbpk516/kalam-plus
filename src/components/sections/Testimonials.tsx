import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white/[0.02] to-transparent">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Loved by <span className="gradient-text">professionals</span>
          </h2>
          <p className="text-lg text-gray-400">
            See what our users are saying about TranscriptAI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Quote icon */}
              <Quote className="relative mb-4 h-8 w-8 text-cyan-400/20" />

              {/* Quote */}
              <p className="relative mb-6 text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Author */}
              <div className="relative flex items-center gap-4">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="h-12 w-12 rounded-full border-2 border-white/10 object-cover"
                />
                <div>
                  <p className="font-medium text-white">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
