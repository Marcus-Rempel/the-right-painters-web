import BeforeAfter from "@/components/sections/BeforeAfter";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServiceArea from "@/components/sections/ServiceArea";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import TrustBar from "@/components/sections/TrustBar";
import { company } from "@/data/company";
import { serviceAreaFacts } from "@/data/service-area";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": company.websiteUrl,
  name: company.name,
  description:
    "Premium interior and exterior painting services for homes and businesses across the TAG Corner tri-state area around Chattanooga, TN.",
  url: company.websiteUrl,
  telephone: company.phone.international,
  email: company.email.address,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattanooga",
    addressRegion: "TN",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.0456,
    longitude: -85.3097,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 35.0456,
      longitude: -85.3097,
    },
    geoRadius: String(serviceAreaFacts.radiusMeters),
  },
  openingHoursSpecification: company.hours
    .filter((hours) => hours.opens !== null && hours.closes !== null)
    .map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek.length === 1 ? hours.dayOfWeek[0] : hours.dayOfWeek,
      opens: hours.opens!,
      closes: hours.closes!,
    })),
  priceRange: "$$",
  image: "https://therightpainters.com/og-image.jpg",
};

// TODO: Add aggregateRating back once it is sourced from real Google review data.

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesOverview />
        <ProcessSteps />
        <BeforeAfter />
        <Testimonials />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
