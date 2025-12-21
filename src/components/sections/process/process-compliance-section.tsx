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
    <section className="border-t border-slate-200 bg-white/85" id="hipaa">
      <div className="container space-y-8 py-16 lg:py-24">
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
              <Card className="border-slate-200 bg-white">
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