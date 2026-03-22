import { MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { serviceAreaFacts, serviceAreaRegions } from "@/data/service-area";

export const metadata: Metadata = {
  title: "Service Area | The Right Painters — Chattanooga & TAG Corner",
  description:
    `We serve homes and businesses within a ${serviceAreaFacts.radiusMiles}-mile radius of ${serviceAreaFacts.hubCity} - covering the ${serviceAreaFacts.regionLabel} across Tennessee, Georgia, and Alabama.`,
};

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Page hero */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="section-width section-padding">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-brand-copper" />
                <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
                  Service Area
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
                Serving the{" "}
                <span className="italic text-brand-copper">TAG Corner</span>
                <br className="hidden md:block" />
                tri-state region
              </h1>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[60ch]">
                 TAG stands for Tennessee, Alabama, and Georgia — the tri-state
                 area where the Cumberland Plateau meets the Tennessee Valley. We
                 paint homes and businesses within roughly {serviceAreaFacts.radiusMiles} miles of downtown
                 Chattanooga.
              </p>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-16 md:py-20 bg-background">
          <div className="section-width section-padding">
            <div className="relative w-full aspect-[21/9] rounded-xl bg-brand-cream border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center">
                 <MapPin className="size-12 text-brand-copper mx-auto mb-4" />
                 <p className="text-lg font-semibold text-brand-charcoal">
                   {serviceAreaFacts.hubCity}
                 </p>
                 <p className="text-sm text-brand-stone mt-1">
                   {serviceAreaFacts.radiusMiles}-mile service radius covering the {serviceAreaFacts.regionLabel}
                 </p>
                <p className="text-xs text-brand-stone/60 mt-2">
                  Interstate 24 &middot; Interstate 59 &middot; US 11
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Region breakdown */}
        <section className="py-16 md:py-24 bg-background">
          <div className="section-width section-padding">
            <div className="space-y-16 md:space-y-20">
               {serviceAreaRegions.map((region, index) => (
                <div
                  key={region.state}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
                >
                  {/* Description */}
                  <div
                    className={`lg:col-span-2 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <h2 className="heading-display text-2xl md:text-3xl text-brand-charcoal mb-4">
                      {region.state}
                    </h2>
                    <p className="text-base text-brand-graphite leading-relaxed max-w-[45ch]">
                      {region.description}
                    </p>
                  </div>

                  {/* Cities */}
                  <div
                    className={`lg:col-span-3 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                      {region.cities.map((city) => (
                        <div
                          key={city}
                          className="flex items-center gap-2 text-sm text-brand-graphite"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 shrink-0" />
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Not listed */}
            <div className="mt-16 md:mt-20 rounded-xl bg-brand-cream p-6 md:p-8 text-center">
              <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                Don&apos;t see your city?
              </h3>
              <p className="text-sm text-brand-graphite max-w-[45ch] mx-auto mb-6">
                 If you&apos;re within {serviceAreaFacts.radiusMiles} miles of {serviceAreaFacts.hubCity}, there&apos;s a
                 good chance we can serve you. Reach out and let us know where
                 you are.
              </p>
              <Button
                asChild
                className="bg-brand-copper text-white hover:bg-brand-copper-light h-11 px-6 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98]"
              >
                <Link href="/contact">
                  Check Availability
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About TAG Corner */}
        <section className="py-16 md:py-20 bg-brand-charcoal">
          <div className="section-width section-padding">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-display text-2xl md:text-3xl text-white mb-5">
                About the TAG Corner
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-4">
                The TAG Corner is the region where Tennessee, Alabama, and
                Georgia meet — a mountainous area dominated by the Cumberland
                Plateau and Lookout Mountain, with elevations reaching up to
                2,000 feet. The major travel routes through the region are
                Interstate 59 and US 11, connecting the area from southwest to
                northeast with Chattanooga at its hub.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                The abbreviation TAG has been used since at least the 1890s,
                originating with the TAG Line railroad that operated in the
                region. Today it&apos;s a close-knit tri-state community, and
                we&apos;re proud to serve it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
