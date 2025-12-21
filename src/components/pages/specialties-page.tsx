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
  show: { opacity: 1, y: 0 },
};

export function SpecialtiesPage() {
  return (
    <main className="mt-[50px] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-[110px]" />
        </div>
        <div className="container relative space-y-6 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Specialties We Serve</Badge>
          <motion.h1
            className="text-4xl font-semibold md:text-5xl"
            initial={fade.hidden}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
          >
            Specialty expertise across the healthcare spectrum.
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100/80 lg:max-w-3xl"
            initial={fade.hidden}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1 } }}
          >
            Certified coders bring deep knowledge across multiple specialties,
            ensuring accurate documentation and optimal reimbursement regardless
            of your practice focus.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container space-y-10">
          <div className="grid gap-5 md:grid-cols-2">
            {specialtiesFullList.map((specialty) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
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
        </div>
      </section>

      <section className="bg-slate-950 py-16 lg:py-24">
        <div className="container grid gap-6 lg:grid-cols-2">
          {specialtyHighlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
              <Card className="border-slate-800 bg-slate-900/70 text-slate-100">
                <CardHeader>
                  <CardTitle className="text-white">{highlight.title}</CardTitle>
                  <CardDescription className="text-slate-200/80">
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
