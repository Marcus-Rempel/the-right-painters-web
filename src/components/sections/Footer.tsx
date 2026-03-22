import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { company } from "@/data/company";
import { serviceAreaFacts } from "@/data/service-area";
import { serviceLinks } from "@/data/services";

const footerNav = {
  services: serviceLinks,
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Service Area", href: "/service-area" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-16 pb-8">
      <div className="section-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight text-white leading-tight">
                  The Right
                </span>
                <span className="text-lg font-semibold tracking-tight text-white leading-tight -mt-1">
                  Painters
                </span>
              </div>
              <div className="w-1 h-7 bg-brand-copper rounded-full ml-1" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[30ch] mb-6">
              Premium painting services for homes and businesses across the
              TAG Corner tri-state area.
            </p>
            <div className="space-y-2.5">
              <a
                href={company.phone.href}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-copper-light transition-colors"
              >
                <Phone className="size-4 shrink-0" />
                {company.phone.display}
              </a>
              <a
                href={company.email.href}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-copper-light transition-colors"
              >
                <Mail className="size-4 shrink-0" />
                {company.email.address}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="size-4 shrink-0" />
                {serviceAreaFacts.hubCity} & surrounding area
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-copper-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-copper-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-4">
              Hours
            </h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                {company.hours.map((hours) => (
                  <li key={hours.label} className="flex justify-between gap-4">
                    <span>{hours.label}</span>
                    <span className="text-white/70">{hours.display}</span>
                  </li>
                ))}
              </ul>
            <p className="mt-4 text-xs text-white/30">
              Emergency & after-hours requests considered on a case-by-case basis.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} The Right Painters. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Licensed & insured in Tennessee, Georgia, and Alabama.
          </p>
        </div>
      </div>
    </footer>
  );
}
