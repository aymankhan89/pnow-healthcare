"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProcessHeroSection() {
  return (
    <section className="container space-y-8 py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge variant="secondary">Our Process</Badge>
          <motion.h1 className="text-4xl font-semibold md:text-5xl" initial={fade.hidden} animate={fade.show}>
            A proven blueprint from onboarding to optimization.
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 lg:max-w-3xl"
            initial={fade.hidden}
            animate={fade.show}
            transition={{ delay: 0.1 }}
          >
            We orchestrate every phase—BAA execution, access provisioning, team allocation, QA, and reporting—so your organization ramps with confidence.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/medical-coding-workflow.svg"
            alt="Medical coding workflow process"
            width={480}
            height={320}
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
