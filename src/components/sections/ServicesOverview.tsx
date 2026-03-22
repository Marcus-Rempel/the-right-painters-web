import {
  Paintbrush,
  Home,
  PanelTop,
  Fence,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { services } from "@/data/services";

const serviceIcons = {
  home: Home,
  paintbrush: Paintbrush,
  panelTop: PanelTop,
  fence: Fence,
  building2: Building2,
} as const;

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-width section-padding">
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-copper" />
            <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
              What We Do
            </span>
          </div>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mb-5">
            Painting services built
            <br className="hidden md:block" />
            around <span className="italic text-brand-copper">your home</span>
          </h2>
          <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[55ch]">
            From a single accent wall to a full exterior transformation, we bring
            the same level of care and precision to every project.
          </p>
        </div>

        {/* Services — asymmetric 2-column zig-zag layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className={`group flex gap-5 p-6 md:p-8 rounded-xl border border-transparent hover:border-border hover:bg-white/60 transition-all duration-300 ${
                  index % 2 === 1 ? "md:translate-y-6" : ""
                }`}
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-cream flex items-center justify-center group-hover:bg-brand-copper/10 transition-colors duration-300">
                  <Icon className="size-5 text-brand-graphite group-hover:text-brand-copper transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-brand-charcoal group-hover:text-brand-copper transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowRight className="size-4 text-brand-stone opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-brand-graphite leading-relaxed">
                    {service.summary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Link to full services page */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-copper hover:text-brand-copper-light transition-colors group"
          >
            View all services
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
