"use client";

import {
  ComplianceHeroSection,
  ComplianceArchitectureSection,
  CompliancePrinciplesSection,
  ComplianceBaaSection,
  CompliancePhiSection,
  ComplianceAccessSection,
  ComplianceEncryptionSection,
  ComplianceTrainingSection,
  ComplianceMonitoringSection,
  ComplianceCtaSection,
} from "@/components/sections/compliance";

export function CompliancePage() {
  return (
    <main className="bg-background text-slate-900">
      <ComplianceHeroSection />
      <ComplianceArchitectureSection />
      <CompliancePrinciplesSection />
      <ComplianceBaaSection />
      <CompliancePhiSection />
      <ComplianceAccessSection />
      <ComplianceEncryptionSection />
      <ComplianceTrainingSection />
      <ComplianceMonitoringSection />
      <ComplianceCtaSection />
    </main>
  );
}
