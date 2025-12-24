"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { complianceSections } from "@/data/compliance";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProcessComplianceSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white" id="hipaa">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.08),transparent_40%)]" />
      </div>
      <div className="container relative space-y-8 py-16 lg:py-24">
        <div className="space-y-3">
          <Badge variant="secondary">HIPAA Compliance & Data Security</Badge>
          <h2 className="text-3xl font-semibold">Controls embedded in every step</h2>
          <p className="text-slate-600 lg:max-w-4xl">
            From BAA execution through continuous improvement, we document and audit the safeguards that protect PHI and sustain regulatory confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {complianceSections.map((section) => (
            <motion.div key={section.title} variants={fade} initial="hidden" whileInView="show">
              <Card className="border-slate-200 bg-white/90 shadow-lg">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {section.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
