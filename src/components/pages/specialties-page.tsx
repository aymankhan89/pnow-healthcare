"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { specialtiesFullList } from "@/data/specialties-page";
import { useMotionPreference } from "@/components/animations/use-motion-preference";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const highlights = [
  "Board-certified coders by specialty",
  "Payer-specific edits baked in",
  "Clinical QA on every batch",
];

const stats = [
  { label: "Specialties", value: "30+", helper: "Deep playbooks" },
  { label: "Accuracy", value: "99.8%", helper: "QA verified" },
  { label: "Turnaround", value: "12 hrs", helper: "Priority queues" },
];

export function SpecialtiesPage() {
  const { allowContinuousMotion } = useMotionPreference();

  return (
    <main className="pt-[50px] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
          <motion.div
            className="absolute -right-10 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-[140px]"
            animate={
              allowContinuousMotion
                ? { scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }
                : undefined
            }
            transition={
              allowContinuousMotion
                ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
                : undefined
            }
          />
          <motion.div
            className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/25 blur-[120px]"
            animate={
              allowContinuousMotion
                ? { scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }
                : undefined
            }
            transition={
              allowContinuousMotion
                ? {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }
                : undefined
            }
          />
          <motion.div
            className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-purple-500/25 blur-[110px]"
            animate={
              allowContinuousMotion
                ? { scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }
                : undefined
            }
            transition={
              allowContinuousMotion
                ? {
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }
                : undefined
            }
          />
        </div>

        <div className="container relative grid gap-12 pt-[70px] pb-20 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:pt-32 lg:pb-28">
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-blue-200" />
              Specialties we serve
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              initial={fade.hidden}
              animate={fade.show}
              style={{
                background: "linear-gradient(to bottom right, #fff, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Specialty expertise across the healthcare spectrum.
            </motion.h1>

            <motion.p
              className="text-lg text-blue-100/90 lg:max-w-3xl leading-relaxed"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.1 }}
            >
              Each specialty page gets deep, payer-aware coding guidance; now
              your overview mirrors that same rigor so you know we can cover
              your mix without compromise.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.15 }}
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.2 }}
            >
              <Button
                className="group relative overflow-hidden px-7 py-4 text-base font-semibold shadow-2xl shadow-blue-500/40"
                asChild
              >
                <Link href="/specialties">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore specialties
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white shadow-xl backdrop-blur transition hover:border-white/50 hover:bg-white/15 hover:text-white"
              >
                <Link href="/specialties">Download specialty matrix</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/15 text-white border-white/20"
                >
                  Specialty Snapshot
                </Badge>
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm transition-all hover:scale-[1.02] hover:border-white/25"
                  >
                    <p className="text-xs font-medium text-blue-100/80">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-blue-100/70">{stat.helper}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-50">
                  How we keep specialty depth consistent
                </p>
                <ul className="space-y-2 text-sm text-blue-100/85">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    Coders assigned by specialty playbooks and payer mix
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    QA checklists mirroring subpage details for each specialty
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    Reporting that flags denials and documentation gaps early
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container space-y-10">
          <div className="grid gap-5 md:grid-cols-2">
            {specialtiesFullList.map((specialty) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                }}
              >
                <Card className="border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle>{specialty.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {specialty.description}
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
