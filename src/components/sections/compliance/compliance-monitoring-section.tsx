"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { monitoringItems } from "@/data/compliance";
import { MonitoringGridCards } from "./compliance-monitoring-data";

export function ComplianceMonitoringSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>
      <div className="container relative space-y-8 py-16 lg:py-24">
        <h3 className="text-3xl font-semibold md:text-4xl">Audit Logs & Continuous Monitoring</h3>
        <p className="text-blue-100/85 md:max-w-4xl">
          Detailed audit logs capture PHI access, modifications, and system events—creating a tamper-evident record of all activity. Scheduled reviews
          and external assessments keep controls sharp.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <MonitoringGridCards />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {monitoringItems.map((item) => (
            <Card key={item.title} className="border-white/10 bg-white/5 text-slate-100 shadow-2xl shadow-blue-500/20 backdrop-blur">
              <CardHeader className="space-y-2">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription className="text-blue-100/85">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
