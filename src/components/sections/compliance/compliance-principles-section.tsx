"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { compliancePrinciples } from "@/data/compliance";

export function CompliancePrinciplesSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white lg:py-24">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">HIPAA Compliance: Our Foundational Commitment</h2>
          <p className="text-blue-100/85 md:mx-auto md:max-w-4xl">
            Compliance-first operations, regulatory alignment, and privacy as a core operational principle—embedded in every workflow we run.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {compliancePrinciples.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.05 } }}>
              <Card className="h-full border-white/10 bg-white/5 text-slate-100 shadow-2xl shadow-blue-500/20 backdrop-blur">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-blue-100/85">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
