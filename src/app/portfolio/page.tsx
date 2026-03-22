import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio | The Right Painters — Chattanooga & TAG Corner",
  description:
    "Browse our recent painting projects across the TAG Corner tri-state area. Interior, exterior, cabinet, and commercial work showcasing premium craftsmanship.",
};

export default function PortfolioPage() {
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
                  Our Work
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
                Projects that{" "}
                <span className="italic text-brand-copper">speak</span>
                <br className="hidden md:block" />
                for themselves
              </h1>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[60ch]">
                A selection of recent work from homes and businesses across the
                TAG Corner region. Every project reflects our commitment to
                thorough prep and a lasting finish.
              </p>
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="section-width section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`group ${
                    project.size === "large" ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl bg-brand-cream ${
                      project.size === "large" ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      sizes={
                        project.size === "large"
                          ? "(max-width: 768px) 100vw, 90vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-brand-cream text-xs font-medium text-brand-graphite">
                        {project.type}
                      </span>
                      <span className="text-xs text-brand-stone">
                        {project.location}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-brand-charcoal mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-brand-graphite leading-relaxed max-w-[55ch]">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* More coming */}
            <div className="mt-16 text-center">
              <p className="text-sm text-brand-stone mb-6">
                We&apos;re building out our full portfolio. More projects coming soon.
              </p>
              <Button
                asChild
                className="bg-brand-copper text-white hover:bg-brand-copper-light h-11 px-6 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98]"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
