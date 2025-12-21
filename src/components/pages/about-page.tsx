"use client";

import { AboutHeroSection } from "@/components/sections/about-hero-section";
import {
  AboutMissionVisionSection,
  AboutExperienceSection,
  AboutLeadershipSection,
  AboutCoreValuesSection,
  AboutContactSection,
} from "@/components/sections/about";

export function AboutPage() {
  return (
    <main className="bg-background text-slate-900">
      <AboutHeroSection />
      <AboutMissionVisionSection />
      <AboutExperienceSection />
      <AboutLeadershipSection />
      <AboutCoreValuesSection />
      <AboutContactSection />
    </main>
  );
}
