"use client";

import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-width section-padding">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-semibold tracking-tight text-brand-charcoal leading-tight">
                The Right
              </span>
              <span className="text-lg md:text-xl font-semibold tracking-tight text-brand-charcoal leading-tight -mt-1">
                Painters
              </span>
            </div>
            <div className="w-1 h-8 bg-brand-copper rounded-full ml-1 group-hover:h-10 transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-graphite hover:text-brand-charcoal transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-copper after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phone.href}
              className="flex items-center gap-2 text-sm font-medium text-brand-graphite hover:text-brand-copper transition-colors"
            >
              <Phone className="size-4" />
              <span>{company.phone.display}</span>
            </a>
            <Button
              asChild
              className="bg-brand-copper text-white hover:bg-brand-copper-light h-10 px-5 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98]"
            >
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-graphite hover:text-brand-charcoal transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-brand-graphite hover:text-brand-charcoal py-2 border-b border-border/30 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={company.phone.href}
                className="flex items-center justify-center gap-2 h-12 rounded-lg border border-border text-brand-graphite font-medium transition-colors hover:bg-muted"
              >
                <Phone className="size-4" />
                <span>{company.phone.display}</span>
              </a>
              <Button
                asChild
                className="bg-brand-copper text-white hover:bg-brand-copper-light h-12 rounded-lg text-base font-medium"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
