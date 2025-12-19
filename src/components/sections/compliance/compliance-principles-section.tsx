"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { compliancePrinciples } from "@/data/compliance";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function CompliancePrinciplesSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 lg:py-24">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">HIPAA Compliance: Our Foundational Commitment</h2>
          <p className="text-slate-600 md:max-w-4xl md:mx-auto">
            Compliance-first operations, regulatory alignment, and privacy as a core operational principle—embedded in every workflow we run.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {compliancePrinciples.map((item, index) => (
            <motion.div key={item.title} variants={fade} initial="hidden" whileInView="show" transition={{ delay: index * 0.05 }}>
              <Card className="h-full border-slate-200 bg-white shadow-md">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
