"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useMotionPreference } from "@/components/animations/use-motion-preference";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const highlights = [
  "BAA executed before access",
  "Dedicated pod assigned in 48h",
  "QA + reporting from week one",
];

export function ProcessHeroSection() {
  const { allowContinuousMotion } = useMotionPreference();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
        <motion.div
          className="absolute -left-10 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[120px]"
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
          className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/25 blur-[140px]"
          animate={
            allowContinuousMotion
              ? { scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }
              : undefined
          }
          transition={
            allowContinuousMotion
              ? { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              : undefined
          }
        />
      </div>

      <div className="container relative grid gap-12 py-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:py-24">
        <div className="space-y-6">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            Our Process
          </Badge>
          <motion.h1 className="text-4xl font-semibold md:text-5xl" initial={fade.hidden} animate={fade.show}>
            A proven blueprint from onboarding to optimization.
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100/85 lg:max-w-3xl"
            initial={fade.hidden}
            animate={fade.show}
            transition={{ delay: 0.1 }}
          >
            We orchestrate every phase—BAA execution, access provisioning, pod assignment, QA,
            and reporting—so your organization ramps with confidence.
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
            <Button className="group relative overflow-hidden px-7 py-4 text-base font-semibold shadow-2xl shadow-blue-500/40" asChild>
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Start your onboarding
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white shadow-xl backdrop-blur transition hover:border-white/50 hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link href="/services">Review services</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-8 shadow-2xl shadow-blue-500/30 backdrop-blur"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex justify-center">
            <Image
              src="/medical-coding-workflow.svg"
              alt="Medical coding workflow process"
              width={480}
              height={320}
              className="w-full max-w-md rounded-lg bg-white/10 p-6 shadow-lg"
            />
          </div>
        </motion.div>
      </div>

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
  );
}
