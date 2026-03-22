import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/assets/hero-image-starter.png";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { serviceAreaFacts } from "@/data/service-area";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-[#f8f6f3] overflow-hidden">
      {/* Full-viewport hero image — the house IS the hero */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Beautifully painted white farmhouse with dark charcoal roof and shutters"
          fill
          priority
          quality={95}
          placeholder="blur"
          className="object-contain object-center scale-[1.4] md:scale-[1.25] lg:scale-[1.1]"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f3] via-transparent to-[#f8f6f3]/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f3]/80 via-transparent to-[#f8f6f3]/80 z-10 hidden md:block" />

      {/* Top content — eyebrow + headline floating above the house */}
      <div className="relative z-20 section-width section-padding pt-28 md:pt-32 lg:pt-36">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-copper" />
            <span className="text-sm font-medium tracking-widest uppercase text-brand-copper">
              Chattanooga & TAG Corner Area
            </span>
            <div className="w-8 h-px bg-brand-copper" />
          </div>

          {/* Headline — large, centered, serif */}
          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-charcoal mb-4">
            The finish your home
            <br />
            <span className="italic text-brand-copper">deserves</span>
          </h1>
        </div>
      </div>

      {/* Bottom content — CTA bar pinned to the bottom of the viewport */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="section-width section-padding pb-10 md:pb-14">
          <div className="flex flex-col items-center text-center rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)] px-6 py-8 md:px-10 md:py-10 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[50ch] mb-8">
              Premium interior and exterior painting for homes and businesses
              across the tri-state region. Careful prep, clean execution,
              and a finish that lasts.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <Button
                asChild
                className="bg-brand-copper text-white hover:bg-brand-copper-light h-13 px-8 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98] shadow-[0_4px_24px_-4px_rgba(180,83,9,0.35)]"
              >
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
              <a
                href={company.phone.href}
                className="flex items-center gap-2.5 h-13 px-6 rounded-lg border border-brand-charcoal/10 bg-white/70 backdrop-blur-sm text-brand-graphite hover:text-brand-charcoal hover:border-brand-stone transition-all duration-200 text-base font-medium"
              >
                <Phone className="size-4" />
                <span>{company.phone.display}</span>
              </a>
            </div>

            {/* Trust micro-line */}
            <p className="text-sm text-brand-stone">
              Licensed & insured &middot; Free estimates {company.responseTime.label} &middot; Serving a {serviceAreaFacts.radiusMiles}-mile radius
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
