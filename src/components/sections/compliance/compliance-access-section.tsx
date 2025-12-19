"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accessControls } from "@/data/compliance";
import { FileCheck2, KeyRound, MonitorCheck, ShieldPlus, UserCheck2 } from "lucide-react";

export function ComplianceAccessSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>
      <div className="container relative grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-24">
        <Card className="border-slate-800 bg-slate-900/70 text-slate-100 shadow-xl">
          <CardHeader className="space-y-3">
            <CardTitle className="text-3xl">Access Control & User Management</CardTitle>
            <CardDescription className="text-slate-200/80">
              Role-based permissions aligned to least-privilege principles, enforced by MFA, session timeouts, and automatic lockouts. Accounts undergo
              regular review to verify access appropriateness.
            </CardDescription>
            <CardDescription className="text-slate-200/80">
              When personnel changes occur, revocation is immediate and comprehensive—ensuring former workforce members cannot access PHI under any
              circumstances.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="grid gap-4">
          {accessControls.map((item, index) => (
            <Card key={item.title} className="border-slate-800 bg-slate-900/70 text-slate-100 shadow-lg shadow-blue-500/10">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3 text-slate-100">
                  {index === 0 && <UserCheck2 className="h-5 w-5" />}
                  {index === 1 && <ShieldPlus className="h-5 w-5" />}
                  {index === 2 && <KeyRound className="h-5 w-5" />}
                  {index === 3 && <MonitorCheck className="h-5 w-5" />}
                  {index === 4 && <FileCheck2 className="h-5 w-5" />}
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-slate-200/80">{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
