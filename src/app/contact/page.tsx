"use client";

import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { company, weekdayHours, saturdayHours, sundayHours } from "@/data/company";
import { serviceAreaFacts } from "@/data/service-area";
import { serviceSelectOptions } from "@/data/services";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
                  Contact Us
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
                Let&apos;s get{" "}
                <span className="italic text-brand-copper">started</span>
              </h1>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[60ch]">
                Whether you have a clear project in mind or just want to explore
                options, we&apos;re happy to talk. Reach out by phone, email, or
                the form below and we&apos;ll respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="section-width section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-lg font-semibold text-brand-charcoal mb-6">
                    Get in touch
                  </h2>
                  <div className="space-y-5">
                    <a
                      href={company.phone.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center shrink-0 group-hover:bg-brand-copper/10 transition-colors">
                        <Phone className="size-4 text-brand-graphite group-hover:text-brand-copper transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-charcoal">
                          Phone
                        </p>
                        <p className="text-sm text-brand-graphite">
                          {company.phone.display}
                        </p>
                      </div>
                    </a>

                    <a
                      href={company.email.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center shrink-0 group-hover:bg-brand-copper/10 transition-colors">
                        <Mail className="size-4 text-brand-graphite group-hover:text-brand-copper transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-charcoal">
                          Email
                        </p>
                        <p className="text-sm text-brand-graphite">
                          {company.email.address}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center shrink-0">
                        <MapPin className="size-4 text-brand-graphite" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-charcoal">
                          Service Area
                        </p>
                        <p className="text-sm text-brand-graphite">
                          {serviceAreaFacts.hubCity} & {serviceAreaFacts.regionLabel}
                          <br />
                          ~{serviceAreaFacts.radiusMiles} mile radius
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center shrink-0">
                        <Clock className="size-4 text-brand-graphite" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-charcoal">
                          Hours
                        </p>
                        <p className="text-sm text-brand-graphite">
                          {weekdayHours.shortLabel}: {weekdayHours.display}
                          <br />
                          {saturdayHours.shortLabel}: {saturdayHours.display}
                          <br />
                          {sundayHours.shortLabel}: {sundayHours.display}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust signals */}
                <div className="rounded-xl bg-brand-cream p-6">
                  <h3 className="text-sm font-semibold text-brand-charcoal mb-3">
                    What to expect
                  </h3>
                  <ul className="space-y-2.5 text-sm text-brand-graphite">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 shrink-0" />
                      Response {company.responseTime.label}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 shrink-0" />
                      Free on-site estimate for most projects
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 shrink-0" />
                      Detailed written proposal with clear pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 shrink-0" />
                      No pressure, no obligation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="rounded-xl border border-border bg-white p-6 md:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-14 h-14 rounded-full bg-brand-sage/20 flex items-center justify-center mb-5">
                        <CheckCircle className="size-7 text-brand-sage" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-charcoal mb-2">
                        Message received
                      </h3>
                      <p className="text-sm text-brand-graphite max-w-[35ch]">
                        We&apos;ll review your details and reach out within 24
                        hours with next steps.
                      </p>
                      <Link
                        href="/"
                        className="mt-6 text-sm font-medium text-brand-copper hover:text-brand-copper-light transition-colors"
                      >
                        Back to home
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-brand-charcoal mb-1">
                        Send us a message
                      </h3>
                      <p className="text-sm text-brand-stone mb-6">
                        Fill out the form and we&apos;ll follow up quickly.
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
                            Service interested in
                          </label>
                          <select
                            id="service"
                            className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all appearance-none"
                          >
                            <option value="">Select a service (optional)</option>
                            {serviceSelectOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="address"
                            className="text-sm font-medium text-brand-charcoal"
                          >
                            Property address{" "}
                            <span className="text-brand-stone font-normal">
                              (optional)
                            </span>
                          </label>
                          <input
                            id="address"
                            type="text"
                            placeholder="Street address, city, state"
                            className="w-full h-11 px-3.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-brand-charcoal"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            required
                            placeholder="Tell us about your project, timeline, questions, or anything else..."
                            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-brand-stone/60 focus:outline-none focus:ring-2 focus:ring-brand-copper/20 focus:border-brand-copper transition-all resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-brand-copper text-white hover:bg-brand-copper-light h-12 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98] shadow-[0_4px_20px_-4px_rgba(180,83,9,0.3)] mt-2"
                        >
                          <Send className="size-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
