"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { monitoringItems } from "@/data/compliance";
import { MonitoringGridCards } from "./compliance-monitoring-data";

export function ComplianceMonitoringSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>
      <div className="container relative space-y-8 py-16 lg:py-24">
        <h3 className="text-3xl font-semibold md:text-4xl">Audit Logs & Continuous Monitoring</h3>
        <p className="text-slate-200/80 md:max-w-4xl">
          Detailed audit logs capture PHI access, modifications, and system events—creating a tamper-evident record of all activity. Scheduled reviews
          and external assessments keep controls sharp.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <MonitoringGridCards />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {monitoringItems.map((item) => (
            <Card key={item.title} className="border-slate-800 bg-slate-900/60 text-slate-100 shadow">
              <CardHeader className="space-y-2">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription className="text-slate-200/80">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
