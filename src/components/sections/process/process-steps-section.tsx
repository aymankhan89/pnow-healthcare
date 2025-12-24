"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { onboardingJourney } from "@/data/process-detail";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProcessStepsSection() {
  return (
    <section className="container space-y-10 pb-16 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-10 text-right">
          {onboardingJourney.filter((_, idx) => idx % 2 === 0).map((step) => (
            <motion.div key={step.title} variants={fade} initial="hidden" whileInView="show">
              <p className="text-lg font-semibold">{step.title}</p>
              <p className="text-sm text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8">
          {onboardingJourney.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex size-12 items-center justify-center rounded-full border-2 border-primary bg-white text-base font-semibold text-primary shadow"
              variants={fade}
              initial="hidden"
              whileInView="show"
            >
              {index + 1}
            </motion.div>
          ))}
        </div>
        <div className="space-y-10">
          {onboardingJourney.filter((_, idx) => idx % 2 === 1).map((step) => (
            <motion.div key={step.title} variants={fade} initial="hidden" whileInView="show">
              <p className="text-lg font-semibold">{step.title}</p>
              <p className="text-sm text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <Button className="animate-pressable" asChild>
          <Link href="/contact">Schedule a Discovery Call</Link>
        </Button>
        <Button variant="outline" className="animate-pressable" asChild>
          <Link href="/process">Download Process Blueprint</Link>
        </Button>
      </div>
    </section>
  );
}
