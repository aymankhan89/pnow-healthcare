"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { complianceRules } from "@/data/compliance";

export function ComplianceArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      <div className="container relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Enterprise-Grade Compliance Architecture</h2>
          <Card className="border-slate-200 bg-white text-slate-900 shadow-xl">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl">Built on HIPAA-First Principles</CardTitle>
              <CardDescription className="text-slate-600">
                Our compliance foundation meets the strict requirements of healthcare data protection. Every operational process, system decision, and
                workforce protocol aligns with federal privacy regulations.
              </CardDescription>
              <CardDescription className="text-slate-600">
                Compliance is not an add-on—it is the core. Technical safeguards, administrative controls, and physical security work together to
                protect PHI throughout the coding lifecycle.
              </CardDescription>
              <CardDescription className="text-slate-600">
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
              className="border-slate-200 bg-white text-slate-900 shadow-lg shadow-blue-500/10 transition hover:-translate-y-1"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{rule.title}</CardTitle>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Rule {index + 1}</span>
                </div>
                <CardDescription className="text-slate-600">{rule.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
