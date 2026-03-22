import { processSteps as steps } from "@/data/process-steps";

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="section-width section-padding">
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-copper" />
            <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
              Our Process
            </span>
          </div>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mb-5">
            Clear steps,{" "}
            <span className="italic text-brand-copper">no guesswork</span>
          </h2>
          <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[55ch]">
            Every project follows the same disciplined process so you know
            exactly what to expect from start to finish.
          </p>
        </div>

        {/* Steps — horizontal timeline on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0" />
              )}

              {/* Step number */}
              <div className="relative z-10 mb-5">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-copper font-mono text-sm font-bold border border-border shadow-sm">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-brand-graphite leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
