"use client";

import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";

export function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 mt-[50px]">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}
