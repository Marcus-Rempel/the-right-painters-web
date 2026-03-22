import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-brand-copper text-brand-copper"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="section-width section-padding">
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-copper" />
            <span className="text-sm font-medium tracking-wide uppercase text-brand-copper-light">
              Testimonials
            </span>
          </div>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            What our clients{" "}
            <span className="italic text-brand-copper-light">say</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[55ch]">
            We let our work and our clients speak for us. Here are a few
            stories from homeowners across the TAG Corner area.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col p-6 md:p-8 rounded-xl bg-white/5 border border-white/8"
            >
              <StarRating count={testimonial.rating} />

              <blockquote className="mt-5 flex-1">
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/8">
                <p className="text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-white/40 mt-0.5">
                  {testimonial.location} &middot; {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
