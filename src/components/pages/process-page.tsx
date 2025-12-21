"use client";

import {
  ProcessHeroSection,
  ProcessStepsSection,
  ProcessComplianceSection,
} from "@/components/sections/process";

export function ProcessPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <ProcessHeroSection />
      <ProcessStepsSection />
      <ProcessComplianceSection />
    </main>
  );
}
