"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { complianceSections } from "@/data/compliance";
import { onboardingJourney } from "@/data/process-detail";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProcessPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <section className="container space-y-6 py-16 lg:py-24">
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
      </section>

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
          <Button className="animate-pressable">Schedule a Discovery Call</Button>
          <Button variant="outline" className="animate-pressable">
            Download Process Blueprint
          </Button>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/85" id="hipaa">
        <div className="container space-y-8 py-16 lg:py-24">
          <div className="space-y-3">
            <Badge variant="secondary">HIPAA Compliance & Data Security</Badge>
            <h2 className="text-3xl font-semibold">Controls embedded in every step</h2>
            <p className="text-slate-600 lg:max-w-4xl">
              From BAA execution through continuous improvement, we document and audit the safeguards that protect PHI and sustain regulatory confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complianceSections.map((section) => (
              <motion.div key={section.title} variants={fade} initial="hidden" whileInView="show">
                <Card className="border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
