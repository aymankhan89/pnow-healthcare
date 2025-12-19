"use client";

import { Shield } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { phiPractices } from "@/data/compliance";

export function CompliancePhiSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-24">
      <div className="container space-y-8">
        <h3 className="text-3xl font-semibold md:text-4xl">Protected Health Information Handling Practices</h3>
        <p className="text-slate-600 md:max-w-4xl">
          Minimum necessary standards enforced across secure, controlled environments with hardened systems and encrypted workflows.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {phiPractices.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white shadow-md">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Shield className="h-5 w-5 text-slate-500" />
                </div>
                <CardDescription className="text-slate-600">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-sm text-slate-600">
          Workforce members follow zero-tolerance policies for unauthorized PHI use or disclosure, with comprehensive monitoring and corrective action
          for any deviation.
        </p>
      </div>
    </section>
  );
}
