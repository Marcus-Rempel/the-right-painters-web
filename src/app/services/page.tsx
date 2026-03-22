import {
  Home,
  Paintbrush,
  PanelTop,
  Fence,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Painting Services | The Right Painters — Chattanooga & TAG Corner",
  description:
    "Interior, exterior, cabinet, deck, and commercial painting services. Serving the TAG Corner tri-state area around Chattanooga, TN with premium craftsmanship.",
};

const serviceIcons = {
  home: Home,
  paintbrush: Paintbrush,
  panelTop: PanelTop,
  fence: Fence,
  building2: Building2,
} as const;

export default function ServicesPage() {
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
                  Our Services
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
                Painting done{" "}
                <span className="italic text-brand-copper">right</span>,
                <br className="hidden md:block" />
                every time
              </h1>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[60ch]">
                From interior refreshes to full exterior transformations, every
                project gets the same disciplined prep, premium materials, and
                careful execution. We serve homes and businesses across the TAG
                Corner tri-state area.
              </p>
            </div>
          </div>
        </section>

        {/* Services detail list */}
        <section className="py-16 md:py-24 bg-background">
          <div className="section-width section-padding">
            <div className="space-y-20 md:space-y-28">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.icon];

                return (
                  <div key={service.id} id={service.id} className="scroll-mt-24">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                        index % 2 === 1 ? "lg:direction-rtl" : ""
                      }`}
                    >
                      {/* Content */}
                      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center">
                            <Icon className="size-5 text-brand-copper" />
                          </div>
                          <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
                            {service.title}
                          </span>
                        </div>
                        <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-brand-charcoal mb-4">
                          {service.tagline}
                        </h2>
                        <p className="text-base text-brand-graphite leading-relaxed max-w-[55ch] mb-8">
                          {service.description}
                        </p>

                        <Button
                          asChild
                          className="bg-brand-copper text-white hover:bg-brand-copper-light h-11 px-6 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98]"
                        >
                          <Link href="/contact">
                            Get a {service.title} Estimate
                            <ArrowRight className="size-4 ml-2" />
                          </Link>
                        </Button>
                      </div>

                      {/* What's included */}
                      <div
                        className={`rounded-xl border border-border bg-white p-6 md:p-8 ${
                          index % 2 === 1 ? "lg:order-1" : ""
                        }`}
                      >
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-charcoal mb-5">
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-3.5">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-brand-graphite leading-relaxed"
                            >
                              <CheckCircle className="size-4 text-brand-sage shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-20 bg-brand-charcoal">
          <div className="section-width section-padding text-center">
            <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Not sure what you need?
            </h2>
            <p className="text-base text-white/60 max-w-[45ch] mx-auto mb-8">
              Tell us about your project and we&apos;ll recommend the right
              approach with an honest estimate.
            </p>
            <Button
              asChild
              className="bg-brand-copper text-white hover:bg-brand-copper-light h-12 px-8 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98]"
            >
              <Link href="/contact">Request a Free Estimate</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
