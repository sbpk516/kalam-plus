import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Loved by professionals
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Words from people
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              who use it daily.
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <blockquote className="relative mb-8 text-[17px] leading-relaxed text-gray-200">
                <span className="absolute -left-1 -top-2 text-4xl leading-none text-white/10">
                  &ldquo;
                </span>
                <span className="relative pl-5">{testimonial.quote}</span>
              </blockquote>

              <figcaption className="relative flex items-center gap-4">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="h-10 w-10 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.author.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.author.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
