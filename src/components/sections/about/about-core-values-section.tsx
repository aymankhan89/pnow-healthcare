"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { coreValues } from "@/data/about";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutCoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute right-10 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20" />
      </div>

      <div className="container relative space-y-8">
        <Badge className="border border-white/20 bg-white/10 px-4 py-1 text-white">
          Core Values
        </Badge>
        <div className="grid gap-6 md:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group h-full border-white/10 bg-white/5 text-slate-100 shadow-2xl shadow-blue-500/20 backdrop-blur">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription className="text-blue-100/85">
                    {value.description}
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
