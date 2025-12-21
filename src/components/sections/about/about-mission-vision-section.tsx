"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { missionVision } from "@/data/about";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutMissionVisionSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-16 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
      </div>
      <div className="container relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="space-y-4"
          initial={fadeIn.hidden}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <Badge className="w-fit bg-blue-50 text-blue-700">
            Mission & Vision
          </Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Built for compliance, accuracy, and partnership.
          </h2>
          <p className="text-lg text-slate-600 lg:max-w-2xl">
            We blend credentialed specialists, structured QA, and automation
            to keep revenue capture accurate, transparent, and audit-ready for
            health systems nationwide.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="h-full border-slate-200 bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Mission</CardTitle>
                <CardDescription className="text-slate-600">
                  {missionVision.mission}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full border-slate-200 bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Vision</CardTitle>
                <CardDescription className="text-slate-600">
                  {missionVision.vision}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-4 text-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900">
              Company Overview
            </h3>
            <p>
              We employ 300+ credentialed professionals (CCS, CCS-P, RHIA,
              CPC, CIC, CRC, CDIP) across the United States and provide 24/7
              coverage for inpatient, outpatient, ED, and professional coding.
              Our operations, security, and quality programs are SOC 2
              evaluated, HIPAA-audited, and continuously optimized with payer
              feedback loops.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Dedicated client pods with team leads and QA supervisors</li>
              <li>• Structured onboarding blueprint to reach go-live inside 30 days</li>
              <li>• Native integration with leading EHRs and analytics tools</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}