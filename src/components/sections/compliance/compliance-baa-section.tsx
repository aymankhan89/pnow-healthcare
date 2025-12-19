"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { baaSteps } from "@/data/compliance";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ComplianceBaaSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
          variants={fade}
          initial="hidden"
          whileInView="show"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-blue-500/10 p-6">
              <svg viewBox="0 0 24 24" className="h-14 w-14 text-blue-700" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 12v6" />
                <path d="M9 12V9a3 3 0 1 1 6 0v3" />
                <rect x="5" y="12" width="14" height="8" rx="2" />
              </svg>
            </div>
          </div>
        </motion.div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">Business Associate Agreement Execution</Badge>
            <h3 className="text-3xl font-semibold md:text-4xl">Contractual Accountability Before Data Access</h3>
          </div>
          <p className="text-lg text-slate-700">
            We execute comprehensive BAAs with every provider client before any PHI access. Agreements define permitted uses, outline security
            obligations, and include breach notification and subcontractor controls.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {baaSteps.map((step, index) => (
              <Card key={step.title} className="border-slate-200 bg-white shadow-sm">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{step.title}</CardTitle>
                    <span className="text-xs font-semibold text-blue-700">0{index + 1}</span>
                  </div>
                  <CardDescription className="text-slate-600">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
