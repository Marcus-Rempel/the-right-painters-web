import { Shield, Clock, Star, Award } from "lucide-react";

import { company } from "@/data/company";

const trustItems = [
  {
    icon: Shield,
    label: "Fully Insured",
    detail: "Liability & workers' comp",
  },
  {
    icon: Clock,
    label: `${company.stats.yearsInBusiness.display} Years`,
    detail: company.stats.yearsInBusiness.detail,
  },
  {
    icon: Star,
    label: `${company.stats.rating.display} Rating`,
    detail: `Across ${company.stats.reviewCount.display} reviews`,
  },
  {
    icon: Award,
    label: "Satisfaction Guarantee",
    detail: "We stand behind every job",
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-brand-charcoal py-8 md:py-10">
      <div className="section-width section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center">
                <item.icon className="size-5 text-brand-copper-light" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  {item.label}
                </p>
                <p className="text-xs text-white/50 mt-0.5 leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
