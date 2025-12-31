"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  TrendingUp,
  Activity,
  LineChart,
  Scan,
  Stethoscope,
  Sparkles,
  Star,
  Zap,
  Target,
} from "lucide-react";
import type { Service } from "@/data/services-data";
import { preloadCalendly, triggerCalendlyPopup } from "@/lib/calendly";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type IconKey = Service["iconName"];

const iconMap: Record<IconKey, LucideIcon> = {
  Activity,
  LineChart,
  Scan,
  Stethoscope,
};

const benefitIcons: LucideIcon[] = [
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  Activity,
  Star,
  Zap,
];
const featureIcons: LucideIcon[] = [
  Target,
  Sparkles,
  Shield,
  Zap,
  Activity,
  LineChart,
];

interface ServiceDetailPageProps {
  service: Service;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const IconComponent = iconMap[service.iconName as IconKey] ?? Activity;

  useEffect(() => {
    preloadCalendly();
  }, []);

  return (
    <main className=" text-slate-900 bg-slate-50">
      {/* Hero Section - Enhanced with animated gradient and particles */}
      <section className="relative pt-[50px] overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

          {/* Floating orbs */}
          <motion.div
            className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-blue-500/40 blur-[140px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-20 bottom-20 h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container relative pt-24 pb-20 lg:pt-36 lg:pb-28">
          <div className="grid items-start gap-12 lg:grid-cols-[1.3fr,1fr]">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-blue-300" />
                  <span className="text-sm font-medium text-blue-200">
                    {service.title}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
                initial={fade.hidden}
                animate={fade.show}
                style={{
                  background: "linear-gradient(to bottom right, #fff, #93c5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {service.title}
              </motion.h1>

              <motion.p
                className="text-xl text-blue-100/90 lg:max-w-2xl leading-relaxed"
                initial={fade.hidden}
                animate={fade.show}
                transition={{ delay: 0.1 }}
              >
                {service.fullDescription}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={fade.hidden}
                animate={fade.show}
                transition={{ delay: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => triggerCalendlyPopup()}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 hover:shadow-blue-500/60"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {service.ctaText}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
                <button
                  type="button"
                  onClick={() => triggerCalendlyPopup()}
                  className="rounded-xl border-2 border-blue-300/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:border-blue-300/60 hover:bg-white/20"
                >
                  Schedule Consultation
                </button>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial={fade.hidden}
                animate={fade.show}
                transition={{ delay: 0.3 }}
              >
                {service.features.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Stats Card - Enhanced with glassmorphism */}
            <motion.div
              className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-8 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent" />

              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-200/80">
                      Service focus
                    </p>
                    <p className="text-xl font-bold text-white">
                      {service.title}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30">
                    <Clock className="h-7 w-7 text-blue-300" />
                    <p className="mt-4 text-xs font-medium text-blue-200/80">
                      Turnaround
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">12h</p>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30">
                    <Shield className="h-7 w-7 text-green-300" />
                    <p className="mt-4 text-xs font-medium text-blue-200/80">
                      Accuracy
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">99.8%</p>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/30">
                    <TrendingUp className="h-7 w-7 text-orange-300" />
                    <p className="mt-4 text-xs font-medium text-blue-200/80">
                      ROI Lift
                    </p>
                    <p className="mt-1 text-xl font-bold text-white">+25%</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-white">
                    <Star className="h-5 w-5 text-yellow-300" />
                    <p className="text-lg font-semibold">What you will get</p>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {service.features.slice(0, 2).map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-blue-50"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-[-1px] left-0 right-0">
          <svg
            className="w-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 45C840 40 960 30 1080 28.3C1200 26.7 1320 33.3 1380 36.7L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </section>

      {/* Content Sections - Enhanced cards */}
      {service.contentSections?.length ? (
        <section className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
          <div className="container">
            <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <motion.div
                initial={fade.hidden}
                whileInView={fade.show}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">
                    Service Deep Dive
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                  Everything you need to know
                </h2>
              </motion.div>
              <motion.p
                className="max-w-xl text-lg text-slate-600"
                initial={fade.hidden}
                whileInView={fade.show}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                A structured overview that highlights why the service matters,
                common challenges, and how we deliver reliably.
              </motion.p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {service.contentSections.map((section, index) => (
                <motion.div
                  key={section.heading}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-100/50 to-transparent blur-3xl transition-all group-hover:scale-150" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {section.heading}
                    </h3>
                    {section.description ? (
                      <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        {section.description}
                      </p>
                    ) : null}
                    {section.bullets ? (
                      <ul className="mt-6 space-y-4">
                        {section.bullets.map((item, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                              <CheckCircle className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Key Benefits - Enhanced with gradient cards */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 text-white lg:py-32">
        <div className="container">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
              <Star className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">
                Key Benefits
              </span>
            </div>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Why Choose Our {service.title} Services
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fade}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30">
                    {(() => {
                      const BenefitIcon =
                        benefitIcons[index % benefitIcons.length];
                      return <BenefitIcon className="h-7 w-7 text-white" />;
                    })()}
                  </div>
                  <p className="text-lg leading-relaxed text-blue-50">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features - Bento grid style */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                Features
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Comprehensive {service.title} Solutions
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fade}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                    {(() => {
                      const FeatureIcon =
                        featureIcons[index % featureIcons.length];
                      return <FeatureIcon className="h-6 w-6 text-white" />;
                    })()}
                  </div>
                  <p className="pt-1 text-base font-medium text-slate-700">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process - Timeline style */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
              <Activity className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              How We Deliver {service.title}
            </h2>
          </motion.div>

          <motion.div
            className="relative mx-auto max-w-4xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full" />

            <div className="space-y-12">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fade}
                  className="relative flex items-start gap-8 pl-20"
                >
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl font-bold text-white shadow-2xl shadow-blue-500/40">
                    {index + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                    <p className="text-lg leading-relaxed text-slate-700">
                      {step}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Animated counters */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 text-white lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container relative">
          <motion.div
            className="grid gap-12 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fade} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-2xl shadow-blue-500/40">
                  <Clock className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="mb-3 text-5xl font-bold">12 Hours</div>
              <p className="text-lg text-slate-300">Average turnaround time</p>
            </motion.div>

            <motion.div variants={fade} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl shadow-green-500/40">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="mb-3 text-5xl font-bold">99.8%</div>
              <p className="text-lg text-slate-300">Accuracy rate</p>
            </motion.div>

            <motion.div variants={fade} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-2xl shadow-orange-500/40">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="mb-3 text-5xl font-bold">25%</div>
              <p className="text-lg text-slate-300">Average revenue increase</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Clean, high contrast on white */}
      <section className="relative overflow-hidden bg-white py-20 text-slate-900 lg:py-32">
        <div className="absolute inset-0 opacity-[0.35]">
          <motion.div
            className="absolute -left-16 top-10 h-80 w-80 rounded-full bg-blue-100 blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-cyan-100 blur-[110px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container relative text-center">
          <motion.div
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-8"
          >
            <h2 className="text-5xl font-bold text-slate-900 lg:text-6xl">
              Ready to Get Started?
            </h2>
            <p className="text-xl leading-relaxed text-slate-600">
              Contact us today to learn how our {service.title.toLowerCase()}{" "}
              services can benefit your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button
                type="button"
                onClick={() => triggerCalendlyPopup()}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {service.ctaText}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button
                type="button"
                onClick={() => triggerCalendlyPopup()}
                className="rounded-2xl border-2 border-blue-200 bg-white px-10 py-5 text-lg font-bold text-blue-700 shadow-sm transition-all hover:scale-105 hover:border-blue-400 hover:shadow-lg"
              >
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
