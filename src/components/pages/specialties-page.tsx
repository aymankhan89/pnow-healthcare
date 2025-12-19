"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  specialtiesFullList,
  specialtyHighlights,
} from "@/data/specialties-page";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function SpecialtiesPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white mt-[50px] text-slate-900">
      <section className="container space-y-6 py-16 lg:py-24">
        <Badge variant="secondary">Specialties We Serve</Badge>
        <motion.h1
          className="text-4xl font-semibold md:text-5xl"
          initial={fade.hidden}
          animate={fade.show}
        >
          Specialty expertise across the healthcare spectrum.
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 lg:max-w-3xl"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.1 }}
        >
          Certified coders bring deep knowledge across multiple specialties,
          ensuring accurate documentation and optimal reimbursement regardless
          of your practice focus.
        </motion.p>
      </section>

      <section className="container space-y-10 pb-16 lg:pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {specialtiesFullList.map((specialty) => (
            <motion.div
              key={specialty.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
            >
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle>{specialty.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {specialty.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/80">
        <div className="container grid gap-6 py-16 lg:grid-cols-2 lg:py-24">
          {specialtyHighlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
            >
              <Card className="border-slate-200 bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle>{highlight.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
