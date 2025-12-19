"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { complianceRules } from "@/data/compliance";

export function ComplianceArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>
      <div className="container relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Enterprise-Grade Compliance Architecture</h2>
          <Card className="border-slate-800 bg-slate-900/70 text-slate-100 shadow-xl">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl">Built on HIPAA-First Principles</CardTitle>
              <CardDescription className="text-slate-200/80">
                Our compliance foundation meets the strict requirements of healthcare data protection. Every operational process, system decision, and
                workforce protocol aligns with federal privacy regulations.
              </CardDescription>
              <CardDescription className="text-slate-200/80">
                Compliance is not an add-on—it is the core. Technical safeguards, administrative controls, and physical security work together to
                protect PHI throughout the coding lifecycle.
              </CardDescription>
              <CardDescription className="text-slate-200/80">
                From first data receipt through claim submission, we maintain continuous adherence to HIPAA Privacy Rule, Security Rule, and HITECH Act
                provisions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="grid gap-4">
          {complianceRules.map((rule, index) => (
            <Card
              key={rule.title}
              className="border-slate-800 bg-slate-900/70 text-slate-100 shadow-lg shadow-blue-500/10 transition hover:-translate-y-1"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{rule.title}</CardTitle>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100">Rule {index + 1}</span>
                </div>
                <CardDescription className="text-slate-200/80">{rule.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
