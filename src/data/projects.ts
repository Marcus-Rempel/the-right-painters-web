import type { StaticImageData } from "next/image";

import heroEnd1 from "@/assets/hero-image-end-1.png";
import heroEnd2 from "@/assets/hero-image-end-2.png";
import heroStarter from "@/assets/hero-image-starter.png";

export type ProjectSize = "large" | "medium";

export type Project = {
  id: string;
  image: StaticImageData;
  title: string;
  featuredTitle?: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  featuredDescription?: string;
  size: ProjectSize;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "signal-mountain-restoration",
    image: heroEnd1,
    title: "Signal Mountain Interior & Exterior Restoration",
    featuredTitle: "Full Interior & Exterior Restoration",
    location: "Signal Mountain, TN",
    type: "Interior & Exterior",
    tags: ["Interior", "Exterior", "Cabinet Refinish"],
    description:
      "Complete repaint of a 3,200 sq ft home — every surface from kitchen cabinetry to exterior siding. Two weeks from start to final walkthrough.",
    featuredDescription:
      "Complete repaint of a 3,200 sq ft home — every surface from kitchen cabinetry to exterior siding. Cross-section shows the level of detail we bring to each room.",
    size: "large",
    featured: true,
  },
  {
    id: "lookout-mountain-farmhouse",
    image: heroEnd2,
    title: "Lookout Mountain Modern Farmhouse",
    featuredTitle: "Modern Farmhouse Transformation",
    location: "Lookout Mountain, GA",
    type: "Exterior & Deck",
    tags: ["Exterior", "Deck Stain", "Trim Work"],
    description:
      "Exterior refresh with a crisp white and charcoal palette. Full deck stain and trim detail package brought this home back to life.",
    featuredDescription:
      "Exterior refresh with a crisp white and charcoal palette. New stain on all decking and a full trim detail package brought this home back to life.",
    size: "medium",
    featured: true,
  },
  {
    id: "red-bank-refresh",
    image: heroStarter,
    title: "Red Bank Whole-Home Refresh",
    location: "Red Bank, TN",
    type: "Interior & Cabinets",
    tags: ["Interior", "Cabinets", "Trim"],
    description:
      "Interior walls, ceiling, all trim, plus a full kitchen cabinet refinish in a warm white to match the home's classic farmhouse style.",
    size: "medium",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
