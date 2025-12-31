"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { baaSteps } from "@/data/compliance";

export function ComplianceBaaSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-50 relative">
            <Image
              src="/medical-officecoding.png"
              alt="Business Associate Agreement execution"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
              priority
            />
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
