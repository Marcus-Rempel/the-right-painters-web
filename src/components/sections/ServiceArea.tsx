import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

import { serviceAreaFacts, serviceAreaRegions } from "@/data/service-area";

export default function ServiceArea() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="section-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column — messaging */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-copper" />
              <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
                Service Area
              </span>
            </div>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mb-5">
              Proudly serving the{" "}
              <span className="italic text-brand-copper">TAG Corner</span>
            </h2>
            <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[50ch] mb-6">
               TAG stands for Tennessee, Alabama, and Georgia — the tri-state
               region where the Cumberland Plateau meets the Tennessee Valley.
               We paint homes and businesses within roughly {serviceAreaFacts.radiusMiles} miles of
               Chattanooga.
            </p>

            {/* Map placeholder — clean SVG marker */}
            <div className="relative w-full aspect-[4/3] rounded-xl bg-white border border-border overflow-hidden mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="size-10 text-brand-copper mx-auto mb-3" />
                 <p className="text-sm font-medium text-brand-charcoal">
                   {serviceAreaFacts.hubCity}
                 </p>
                 <p className="text-xs text-brand-stone mt-1">
                   {serviceAreaFacts.radiusMiles}-mile service radius
                 </p>
                 <p className="text-xs text-brand-stone">
                   {serviceAreaFacts.regionLabel}
                 </p>
              </div>
            </div>

            <Link
              href="/service-area"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-copper hover:text-brand-copper-light transition-colors group"
            >
              Full service area details
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right column — city lists by state */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               {serviceAreaRegions.map((region) => (
                <div key={region.state}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-charcoal mb-4 pb-2 border-b border-border">
                    {region.state}
                  </h3>
                  <ul className="space-y-2.5">
                    {region.cities.map((city) => (
                      <li
                        key={city}
                        className="flex items-center gap-2 text-sm text-brand-graphite"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-brand-stone leading-relaxed">
              Don&apos;t see your city listed? If you&apos;re within {serviceAreaFacts.radiusMiles} miles of
              Chattanooga, there&apos;s a good chance we serve your area.{" "}
              <Link
                href="/contact"
                className="text-brand-copper hover:text-brand-copper-light underline underline-offset-2 transition-colors"
              >
                Reach out and ask
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
