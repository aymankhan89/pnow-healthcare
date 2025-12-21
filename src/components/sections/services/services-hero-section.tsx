"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-[110px]" />
        {/* Subtle background illustration */}
        <div className="absolute bottom-10 right-10 opacity-10">
          <Image
            src="/healthcare-team.svg"
            alt="Healthcare team background"
            width={256}
            height={256}
            className="h-64 w-auto"
          />
        </div>
      </div>
      <div className="container relative space-y-6 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Services</Badge>
        <motion.h1
          className="text-4xl font-semibold md:text-5xl"
          initial={fade.hidden}
          animate={fade.show}
        >
          Comprehensive medical coding solutions engineered for compliant,
          predictable revenue.
        </motion.h1>
        <motion.p
          className="text-lg text-blue-100/80 lg:max-w-4xl"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.1 }}
        >
          Every engagement includes credentialed coders, rigorous QA,
          payer-aware workflows, and dashboards that show exactly how our work
          elevates accuracy, compliance, and cash flow.
        </motion.p>
        <div className="flex flex-wrap gap-3">
          <Button className="animate-pressable bg-blue-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30">
            Discuss Your Coding Needs
          </Button>
          <Button variant="outline" className="animate-pressable border-2 border-blue-300/60 bg-white/5 px-7 py-4 text-base text-white backdrop-blur hover:bg-white/10">
            Download Service Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
