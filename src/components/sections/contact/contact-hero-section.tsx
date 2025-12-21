"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ContactHeroSection() {
  return (
    <section className="container space-y-8 py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge variant="secondary">Contact Us</Badge>
          <motion.h1
            className="text-4xl font-semibold md:text-5xl"
            initial={fade.hidden}
            animate={fade.show}
          >
            Let’s discuss your coding goals and compliance requirements.
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 lg:max-w-3xl"
            initial={fade.hidden}
            animate={fade.show}
            transition={{ delay: 0.1 }}
          >
            Share a few details and our team will arrange a consultation, walk
            through our dedicated coder model, and design a plan that meets your
            quality, turnaround, and compliance targets.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/contact-office.svg"
            alt="Professional contact and support illustration"
            width={480}
            height={320}
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
