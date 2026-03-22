export type ServiceId =
  | "interior"
  | "exterior"
  | "cabinets"
  | "deck"
  | "commercial";

export type ServiceIconKey =
  | "home"
  | "paintbrush"
  | "panelTop"
  | "fence"
  | "building2";

export type Service = {
  id: ServiceId;
  icon: ServiceIconKey;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "interior",
    icon: "home",
    title: "Interior Painting",
    tagline: "Refresh every room with precision and care",
    summary:
      "Walls, ceilings, trim, and accent features. We prep thoroughly and protect your home throughout the process.",
    description:
      "Whether it's a single accent wall or a full-home repaint, we treat every interior project with the same meticulous prep and clean execution. Walls, ceilings, trim, doors, and detail work — all handled with care for your home and your schedule.",
    includes: [
      "Color consultation and sampling",
      "Full surface preparation — filling, sanding, caulking",
      "Furniture and floor protection throughout",
      "Premium paint application (brush, roll, or spray as needed)",
      "Multi-coat systems for durability and even coverage",
      "Final walkthrough and touch-ups before handoff",
    ],
  },
  {
    id: "exterior",
    icon: "paintbrush",
    title: "Exterior Painting",
    tagline: "Protect and transform the face of your home",
    summary:
      "Full exterior prep, priming, and coating systems designed for Tennessee valley weather and humidity.",
    description:
      "Tennessee Valley weather is tough on exteriors. Our exterior painting process starts with thorough prep — power washing, scraping, priming — followed by premium coating systems designed to hold up against humidity, UV, and seasonal swings.",
    includes: [
      "Power washing and surface cleaning",
      "Scraping, sanding, and spot-priming",
      "Caulking and gap sealing",
      "Two-coat exterior paint systems",
      "Trim, shutters, and accent detail work",
      "Gutter and soffit painting",
    ],
  },
  {
    id: "cabinets",
    icon: "panelTop",
    title: "Cabinet Refinishing",
    tagline: "Factory-smooth finishes without the factory price",
    summary:
      "Factory-smooth finishes on kitchen and bathroom cabinetry. Spray-applied for a flawless result.",
    description:
      "A cabinet refinish transforms a kitchen or bathroom at a fraction of the cost of new cabinetry. We spray-apply coatings for a smooth, durable, factory-quality finish that's built to handle daily use.",
    includes: [
      "Door and hardware removal",
      "Degreasing, sanding, and priming",
      "Spray-applied finish coats for smoothness",
      "Color matching to countertops and hardware",
      "Careful reassembly and hardware reinstall",
      "Curing guidance for maximum durability",
    ],
  },
  {
    id: "deck",
    icon: "fence",
    title: "Deck & Fence Staining",
    tagline: "Restore and protect your outdoor wood",
    summary:
      "Pressure washing, sanding, and premium stain application to protect and restore outdoor wood.",
    description:
      "Outdoor wood takes a beating from rain, sun, and humidity. We pressure wash, sand, and apply premium stain or sealant to bring decks, fences, and pergolas back to life — and keep them protected for years.",
    includes: [
      "Pressure washing and cleaning",
      "Sanding and surface prep",
      "Premium stain or sealant application",
      "Fence, pergola, and railing staining",
      "Maintenance scheduling recommendations",
      "Multiple finish options (solid, semi-transparent, clear)",
    ],
  },
  {
    id: "commercial",
    icon: "building2",
    title: "Commercial Painting",
    tagline: "Minimal disruption, maximum professionalism",
    summary:
      "Offices, retail, and multi-unit properties. We work around your schedule to minimize disruption.",
    description:
      "From offices and retail spaces to multi-unit properties and HOA common areas, we work around your schedule to deliver clean, professional results with minimal impact on your operations.",
    includes: [
      "Flexible scheduling including evenings and weekends",
      "Offices, retail, restaurants, and common areas",
      "Multi-unit and property management partnerships",
      "Tenant-ready unit turnovers",
      "Epoxy and specialty coatings available",
      "Detailed project proposals and timelines",
    ],
  },
];

export const serviceLinks = services.map((service) => ({
  label: service.title,
  href: `/services#${service.id}`,
}));

export const serviceSelectOptions = [
  ...services.map((service) => ({ value: service.id, label: service.title })),
  { value: "other", label: "Other / Not Sure" },
] as const;
