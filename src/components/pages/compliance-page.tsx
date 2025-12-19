"use client";

import { ComplianceHeroSection } from "@/components/sections/compliance/compliance-hero-section";
import { ComplianceArchitectureSection } from "@/components/sections/compliance/compliance-architecture-section";
import { CompliancePrinciplesSection } from "@/components/sections/compliance/compliance-principles-section";
import { ComplianceBaaSection } from "@/components/sections/compliance/compliance-baa-section";
import { CompliancePhiSection } from "@/components/sections/compliance/compliance-phi-section";
import { ComplianceAccessSection } from "@/components/sections/compliance/compliance-access-section";
import { ComplianceEncryptionSection } from "@/components/sections/compliance/compliance-encryption-section";
import { ComplianceTrainingSection } from "@/components/sections/compliance/compliance-training-section";
import { ComplianceMonitoringSection } from "@/components/sections/compliance/compliance-monitoring-section";
import { ComplianceCtaSection } from "@/components/sections/compliance/compliance-cta-section";

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
