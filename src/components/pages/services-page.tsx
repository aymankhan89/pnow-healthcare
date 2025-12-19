"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  dedicatedTeamModel,
  medicalCodingServices,
} from "@/data/services-detail";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesPage() {
  const primaryServices = medicalCodingServices.slice(0, 2);
  const expandedServices = medicalCodingServices.slice(2);

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white mt-[50px] text-slate-900">
      <section className="container space-y-6 py-16 lg:py-24">
        <Badge variant="secondary">Services</Badge>
        <motion.h1
          className="text-4xl font-semibold md:text-5xl"
          initial={fade.hidden}
          animate={fade.show}
        >
          Comprehensive medical coding solutions engineered for compliant,
          predictable revenue.
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 lg:max-w-4xl"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.1 }}
        >
          Every engagement includes credentialed coders, rigorous QA,
          payer-aware workflows, and dashboards that show exactly how our work
          elevates accuracy, compliance, and cash flow.
        </motion.p>
        <div className="flex flex-wrap gap-3">
          <Button className="animate-pressable">
            Discuss Your Coding Needs
          </Button>
          <Button variant="outline" className="animate-pressable">
            Download Service Overview
          </Button>
        </div>
      </section>

      <section
        id="medical-coding"
        className="border-y border-slate-200 bg-white/80"
      >
        <div className="container space-y-10 py-16 lg:py-24">
          <div className="space-y-4">
            <Badge variant="secondary">Medical Coding Services</Badge>
            <p className="text-slate-600 lg:max-w-3xl">
              Our coders hold CCS, CCS-P, CPC, and RHIA credentials and stay
              current on payer bulletins, NCCI changes, and specialty
              documentation guidelines. We align to your EHR, edits, and SLAs so
              turnaround times and audit scores remain predictable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {primaryServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
              >
                <Card className="border-slate-200 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-16 lg:py-24">
        <div className="space-y-3">
          <Badge variant="secondary">All Services</Badge>
          <h2 className="text-3xl font-semibold">
            Depth across every care setting
          </h2>
          <p className="text-slate-600 lg:max-w-3xl">
            From inpatient cases to ambulatory clinics and risk adjustment
            programs, we deliver specialty-aligned expertise that protects
            revenue integrity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {expandedServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fade}
              initial="hidden"
              whileInView="show"
            >
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="dedicated-team"
        className="border-y border-slate-200 bg-white/85"
      >
        <div className="container space-y-8 py-16 lg:py-24">
          <Badge variant="secondary">Dedicated Coding Team Model</Badge>
          <p className="text-slate-600 lg:max-w-3xl">
            Build an onsite-quality partnership without adding FTEs. We tailor
            staffing levels, shift coverage, and QA benchmarks while your
            leaders retain control of policies and dashboards.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {dedicatedTeamModel.map((item) => (
              <motion.div
                key={item.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
              >
                <Card className="border-slate-200 bg-gradient-to-br from-white to-blue-50/60">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {item.description}
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
