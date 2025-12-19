"use client";

import { CtaSection } from "@/components/sections/cta-section";
import { SecuritySection } from "@/components/sections/security-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SpecialtiesSection } from "@/components/sections/specialties-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ProcessSection } from "@/components/sections/process-section";
import HeroSection from "../sections/hero-section";

export function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SecuritySection />
      <TrustSection />
      <SpecialtiesSection />
      <CtaSection />
    </main>
  );
}
