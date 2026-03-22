import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { serviceAreaFacts } from "@/data/service-area";

export const metadata: Metadata = {
  title: "About Us | The Right Painters — Chattanooga & TAG Corner",
  description:
    "Learn about The Right Painters — a locally owned painting company serving the TAG Corner tri-state area with over 15 years of experience in residential and commercial painting.",
};

const values = [
  {
    title: "Prep Is Everything",
    description:
      "Most paint failures are prep failures. We spend the time to clean, sand, fill, caulk, and prime properly — because that's where a lasting finish starts.",
  },
  {
    title: "Honest Communication",
    description:
      "Clear written estimates, realistic timelines, and no surprises. If something changes, you hear about it before it becomes a problem.",
  },
  {
    title: "Clean Jobsites",
    description:
      "Your home is your home, not our warehouse. We protect floors, cover furniture, and clean up every day. When we leave, the only thing new is the paint.",
  },
  {
    title: "Locally Invested",
    description:
      "We live and work in the TAG Corner area. Our reputation is built on repeat clients and word-of-mouth referrals from Signal Mountain to Fort Oglethorpe and everywhere in between.",
  },
];

export default function AboutPage() {
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
                  About Us
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
                The people behind{" "}
                <span className="italic text-brand-copper">the brush</span>
              </h1>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[60ch]">
                We&apos;re a small, focused team of painters who believe that
                craft matters more than volume. Every job gets our full
                attention, not a rotating roster of subcontractors.
              </p>
            </div>
          </div>
        </section>

        {/* Story section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="section-width section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Story */}
              <div className="lg:col-span-3">
                <h2 className="heading-display text-2xl md:text-3xl text-brand-charcoal mb-6">
                  How we got here
                </h2>
                <div className="space-y-5 text-base text-brand-graphite leading-relaxed max-w-[60ch]">
                  <p>
                    The Right Painters started with a simple frustration: it was
                    hard to find a painting crew that actually cared about the
                    details. Too many contractors rush through prep, cut corners
                    on materials, and leave homeowners wondering what they paid
                    for.
                  </p>
                  <p>
                    We set out to do things differently. Over the past {company.stats.yearsInBusiness.display} years,
                    we&apos;ve built a reputation across the Chattanooga area for
                    thorough preparation, clean workmanship, and clear
                    communication from the first estimate to the final
                    walkthrough.
                  </p>
                  <p>
                    Today we serve homeowners and businesses throughout the TAG
                    Corner tri-state region — Tennessee, Alabama, and Georgia —
                    within about {serviceAreaFacts.radiusMiles} miles of downtown Chattanooga. We&apos;re
                    proud to be locally owned, locally operated, and built
                    entirely on referrals from people who&apos;ve seen our work
                    firsthand.
                  </p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-white p-6 md:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-charcoal mb-6">
                    At a Glance
                  </h3>
                  <dl className="space-y-5">
                    <div className="flex justify-between items-baseline border-b border-border/50 pb-4">
                      <dt className="text-sm text-brand-graphite">
                        Years in business
                      </dt>
                      <dd className="text-2xl font-semibold text-brand-charcoal font-mono">
                          {company.stats.yearsInBusiness.display}
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-border/50 pb-4">
                      <dt className="text-sm text-brand-graphite">
                        Homes painted
                      </dt>
                      <dd className="text-2xl font-semibold text-brand-charcoal font-mono">
                          {company.stats.homesPainted.display}
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-border/50 pb-4">
                      <dt className="text-sm text-brand-graphite">
                        Average review score
                      </dt>
                      <dd className="text-2xl font-semibold text-brand-charcoal font-mono">
                          {company.stats.rating.display}
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <dt className="text-sm text-brand-graphite">
                        Service radius
                      </dt>
                      <dd className="text-2xl font-semibold text-brand-charcoal font-mono">
                          {serviceAreaFacts.radiusMiles} mi
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="section-width section-padding">
            <div className="max-w-2xl mb-12 md:mb-16">
              <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-brand-charcoal mb-5">
                What drives every project
              </h2>
              <p className="text-base text-brand-graphite leading-relaxed max-w-[55ch]">
                These aren&apos;t corporate values on a wall. They&apos;re the
                standards we hold ourselves to on every job.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-4">
                  <span className="shrink-0 text-sm font-mono font-bold text-brand-copper/40 mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-brand-graphite leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-20 bg-brand-charcoal">
          <div className="section-width section-padding text-center">
            <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Let&apos;s talk about your project
            </h2>
            <p className="text-base text-white/60 max-w-[45ch] mx-auto mb-8">
              We&apos;d love to walk your property and put together a clear plan
              with honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-brand-copper text-white hover:bg-brand-copper-light h-12 px-8 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98]"
              >
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
              <a
                href={company.phone.href}
                className="text-sm font-medium text-white/60 hover:text-brand-copper-light transition-colors"
              >
                or call {company.phone.display}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
