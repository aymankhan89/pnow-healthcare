"use client";

import {
  ServicesHeroSection,
  ServicesMedicalCodingSection,
  ServicesAllServicesSection,
  ServicesDedicatedTeamSection,
} from "@/components/sections/services";

export function ServicesPage() {
  return (
    <main className="mt-[50px] text-slate-900">
      <ServicesHeroSection />
      <ServicesMedicalCodingSection />
      <ServicesAllServicesSection />
      <ServicesDedicatedTeamSection />
    </main>
  );
}
