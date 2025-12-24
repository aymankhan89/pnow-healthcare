"use client";

import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileCheck2, FileKey2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ComplianceCtaSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Card className="border-slate-200 bg-white shadow-lg">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl font-semibold">Ready to Discuss Your Compliance Requirements?</CardTitle>
            <CardDescription className="text-slate-600">
              Engage our team to execute your BAA, review your security questions, and align a dedicated coding pod that meets your compliance needs.
            </CardDescription>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <ClipboardCheck className="mr-2 inline h-4 w-4 text-blue-600" />
              Secure sample review available via encrypted portal after BAA execution.
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="shadow-md" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/compliance">Request BAA Template</Link>
              </Button>
            </div>
          </CardHeader>
        </Card>
        <div className="grid gap-4">
          {[
            { title: "Execute Your BAA", description: "Begin with a comprehensive BAA aligned to your organization’s requirements.", icon: FileKey2 },
            { title: "Compliance Consultation", description: "Discuss security and compliance needs with our experienced team.", icon: ShieldCheck },
            { title: "Secure Sample Submission", description: "Share sample charts through our encrypted portal for compliant evaluation.", icon: FileCheck2 },
          ].map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white shadow-md">
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
