"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trainingItems } from "@/data/compliance";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function ComplianceTrainingSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
          variants={fade}
          initial="hidden"
          whileInView="show"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-cyan-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-blue-500/10 p-6">
              <GraduationCap className="h-14 w-14 text-blue-700" />
            </div>
          </div>
        </motion.div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold md:text-4xl">Workforce Training & Confidentiality</h3>
            <p className="text-lg text-slate-700">
              Mandatory HIPAA and privacy education for every workforce member before PHI access, with ongoing refreshers as threats and regulations
              evolve.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trainingItems.map((item) => (
              <Card key={item.title} className="border-slate-200 bg-white shadow-md">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Our training program builds a security-conscious workforce that understands both the technical requirements and ethical obligations of PHI
            protection.
          </p>
        </div>
      </div>
    </section>
  );
}
