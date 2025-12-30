"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, LineChart, Scan, Stethoscope } from "lucide-react";
import { servicesData } from "@/data/services-data";

const fade = {
  hidden: { opacity: 0, y: 20 },
  initial: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconMap = {
  Activity,
  LineChart,
  Scan,
  Stethoscope,
};

export function ServicesAllServicesSection() {
  const services = servicesData.map(service => ({
    iconName: service.iconName,
    title: service.title,
    description: service.shortDescription,
    slug: service.slug,
    features: service.features.slice(0, 3), // Show first 3 features
  }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
        <div className="absolute -right-16 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -left-16 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      </div>
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={fade.hidden}
          whileInView={fade.show}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 border-white/20 bg-white/10 text-white">All Services</Badge>
          <h2 className="mb-6 text-3xl font-semibold lg:text-4xl">
            Complete coding solutions built for your practice needs.
          </h2>
          <p className="text-lg text-blue-100/85">
            From initial coding to final reimbursement, we handle every aspect
            of your medical billing process with precision and compliance.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fade}>
              <Card className="h-full border border-white/10 bg-white/5 text-slate-100 shadow-2xl shadow-blue-500/20 transition-transform hover:-translate-y-1 hover:shadow-blue-500/30 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                    {(() => {
                      const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
                      return <IconComponent className="h-6 w-6 text-cyan-200" />;
                    })()}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-100/85">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-blue-100/80">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="block">
                    <Button variant="outline" className="w-full justify-between border-white/30 text-white hover:border-white/60">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
