"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const monitoringGrid = [
  { title: "System Logging", description: "Automated capture of user activities and system events with secure log storage." },
  { title: "Regular Audits", description: "Internal audits review access patterns, security controls, and compliance adherence." },
  { title: "Active Monitoring", description: "Real-time analysis detects anomalous behavior and potential incidents." },
  { title: "Compliance Verification", description: "Ongoing validation ensures sustained adherence to HIPAA requirements." },
  { title: "Continuous Improvement", description: "Audit findings drive security enhancements and process refinements." },
] as const;

export function MonitoringGridCards() {
  return (
    <>
      {monitoringGrid.map((item) => (
        <Card key={item.title} className="border-slate-800 bg-slate-900/70 text-slate-100 shadow-lg shadow-blue-500/10">
          <CardHeader className="space-y-2">
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription className="text-slate-200/80">{item.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
