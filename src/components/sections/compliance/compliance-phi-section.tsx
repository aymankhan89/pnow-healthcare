"use client";

import { Shield } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { phiPractices } from "@/data/compliance";

export function CompliancePhiSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white lg:py-24">
      <div className="container space-y-8">
        <h3 className="text-3xl font-semibold md:text-4xl">Protected Health Information Handling Practices</h3>
        <p className="text-blue-100/85 md:max-w-4xl">
          Minimum necessary standards enforced across secure, controlled environments with hardened systems and encrypted workflows.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {phiPractices.map((item) => (
            <Card key={item.title} className="border-white/10 bg-white/5 text-slate-100 shadow-2xl shadow-blue-500/20 backdrop-blur">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Shield className="h-5 w-5 text-blue-100" />
                </div>
                <CardDescription className="text-blue-100/85">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-sm text-blue-100/80">
          Workforce members follow zero-tolerance policies for unauthorized PHI use or disclosure, with comprehensive monitoring and corrective action
          for any deviation.
        </p>
      </div>
    </section>
  );
}
