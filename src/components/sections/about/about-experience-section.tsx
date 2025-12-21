"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experienceHighlights } from "@/data/about";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-14 text-slate-100 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-30" />
      </div>

      <div className="container relative space-y-8">
        <Badge className="border border-cyan-300/40 bg-cyan-500/15 px-4 py-1 text-cyan-100">
          Experience & Expertise
        </Badge>
        <div className="grid gap-6 md:grid-cols-3">
          {experienceHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/60 text-slate-100 shadow-xl shadow-blue-500/10 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative space-y-4">
                  <item.icon className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2.5 text-cyan-200" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-slate-200/80">
                    {item.description}
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