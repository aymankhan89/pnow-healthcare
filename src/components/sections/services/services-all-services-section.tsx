"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, ClipboardCheck, Users2, LineChart } from "lucide-react";
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
  Stethoscope,
  ClipboardCheck,
  Users2,
  LineChart,
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
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={fade.hidden}
          whileInView={fade.show}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">All Services</Badge>
          <h2 className="mb-6 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Complete coding solutions tailored to your practice needs.
          </h2>
          <p className="text-lg text-slate-600">
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
              <Card className="h-full border-0 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    {(() => {
                      const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
                      return <IconComponent className="h-6 w-6 text-blue-600" />;
                    })()}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="block">
                    <Button variant="outline" className="w-full justify-between">
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