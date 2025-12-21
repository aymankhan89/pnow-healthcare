"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Shield, TrendingUp, Stethoscope, ClipboardCheck, Users2, LineChart } from "lucide-react";
import type { Service } from "@/data/services-data";

const fade = {
  hidden: { opacity: 0, y: 20 },
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

interface ServiceDetailPageProps {
  service: Service;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const IconComponent = iconMap[service.iconName as keyof typeof iconMap];

  return (
    <main className="mt-[50px] text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-[110px]" />
        </div>
        <div className="container relative space-y-6 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            {service.title}
          </Badge>
          <motion.h1
            className="text-4xl font-semibold md:text-5xl"
            initial={fade.hidden}
            animate={fade.show}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100/80 lg:max-w-4xl"
            initial={fade.hidden}
            animate={fade.show}
            transition={{ delay: 0.1 }}
          >
            {service.fullDescription}
          </motion.p>
          <div className="flex flex-wrap gap-3">
            <Button className="animate-pressable bg-blue-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30">
              {service.ctaText}
            </Button>
            <Button variant="outline" className="animate-pressable border-2 border-blue-300/60 bg-white/5 px-7 py-4 text-base text-white backdrop-blur hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">Key Benefits</Badge>
            <h2 className="mb-6 text-3xl font-semibold text-slate-900 lg:text-4xl">
              Why Choose Our {service.title} Services
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {service.benefits.map((benefit, index) => (
              <motion.div key={index} variants={fade}>
                <Card className="h-full border-0 bg-slate-50 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="mb-6 text-3xl font-semibold text-slate-900 lg:text-4xl">
              Comprehensive {service.title} Solutions
            </h2>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {service.features.map((feature, index) => (
              <motion.div key={index} variants={fade}>
                <Card className="border-0 bg-white shadow-lg">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-slate-600">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h2 className="mb-6 text-3xl font-semibold text-slate-900 lg:text-4xl">
              How We Deliver {service.title}
            </h2>
          </motion.div>

          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fade}
                  className="flex items-start space-x-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-slate-600">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16 text-white lg:py-24">
        <div className="container">
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fade} className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-2">24-48 Hours</div>
              <p className="text-slate-300">Average turnaround time</p>
            </motion.div>

            <motion.div variants={fade} className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-2">99.8%</div>
              <p className="text-slate-300">Accuracy rate</p>
            </motion.div>

            <motion.div variants={fade} className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-orange-400" />
              </div>
              <div className="text-3xl font-bold mb-2">25%</div>
              <p className="text-slate-300">Average revenue increase</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white lg:py-24">
        <div className="container text-center">
          <motion.div
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-6"
          >
            <h2 className="text-3xl font-semibold lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100">
              Contact us today to learn how our {service.title.toLowerCase()} services can benefit your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                {service.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
