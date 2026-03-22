"use client";

import { Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { company, hoursSummary } from "@/data/company";
import { serviceSelectOptions } from "@/data/services";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — messaging */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-copper" />
              <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
                Get Started
              </span>
            </div>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mb-5">
              Ready for a{" "}
              <span className="italic text-brand-copper">premium finish?</span>
            </h2>
            <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[50ch] mb-8">
              Get a detailed, no-obligation estimate within 24 hours. We&apos;ll walk
              your property, discuss your goals, and give you a clear plan
              with honest pricing.
            </p>

            {/* Quick contact options */}
            <div className="space-y-4">
              <a
                href={company.phone.href}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white hover:border-brand-stone transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-cream flex items-center justify-center group-hover:bg-brand-copper/10 transition-colors">
                  <Phone className="size-5 text-brand-graphite group-hover:text-brand-copper transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    Call us directly
                  </p>
                  <p className="text-sm text-brand-stone">
                    {company.phone.display} &middot; {hoursSummary}
                  </p>
                </div>
              </a>
            </div>

            {/* Trust signals near form */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-stone">
              <span>Response {company.responseTime.label}</span>
              <span>No-obligation estimate</span>
              <span>Licensed & fully insured</span>
            </div>
          </div>

          {/* Right — estimate form */}
          <div className="rounded-xl border border-border bg-white p-6 md:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-sage/20 flex items-center justify-center mb-5">
                  <CheckCircle className="size-7 text-brand-sage" />
                </div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-2">
                  Request received
                </h3>
                <p className="text-sm text-brand-graphite max-w-[35ch]">
                  We&apos;ll review your details and reach out within 24 hours
                  with a plan and estimate.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-brand-charcoal mb-1">
                  Request a Free Estimate
                </h3>
                <p className="text-sm text-brand-stone mb-6">
                  Tell us about your project and we&apos;ll follow up quickly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-brand-charcoal"
                      >
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        placeholder="Your first name"
                        className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-brand-charcoal"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Your last name"
                        className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-brand-charcoal"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-brand-charcoal"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(423) 555-0000"
                        className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-brand-charcoal"
                    >
                      Service needed
                    </label>
                    <select
                      id="service"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      {serviceSelectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="details"
                      className="text-sm font-medium text-brand-charcoal"
                    >
                      Project details{" "}
                      <span className="text-brand-stone font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="details"
                      rows={3}
                      placeholder="Tell us about the scope, timeline, or any questions you have..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-copper text-white hover:bg-brand-copper-light h-12 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98] shadow-[0_4px_20px_-4px_rgba(180,83,9,0.3)] mt-2"
                  >
                    <Send className="size-4 mr-2" />
                    Send Estimate Request
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
