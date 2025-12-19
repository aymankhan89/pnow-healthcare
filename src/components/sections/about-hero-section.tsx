"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Certified Coders", value: "300+" },
  { label: "Avg. Accuracy", value: "99.8%" },
  { label: "US Coverage", value: "24/7" },
  { label: "Years Serving", value: "15+" },
] as const;

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-[80px] text-slate-50">
      {/* Grid + glow background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="absolute -left-10 top-0 h-80 w-80 rounded-full bg-blue-500/25 blur-[120px]" />
        <div className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[120px]" />
      </div>

      <div className="container relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="space-y-8">
          <Badge className="border border-blue-400/40 bg-blue-500/20 px-4 py-1.5 text-blue-100 backdrop-blur">
            About Our Team
          </Badge>
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-blue-200/80">
              Compliance-first partner
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Credentialed coding leaders powering{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                provable accuracy
              </span>{" "}
              and revenue integrity.
            </h1>
            <p className="text-lg text-blue-100/80 md:text-xl">
              We embed certified coders, QA leads, and client success partners
              into pods that mirror your workflows, ensuring compliant,
              responsive revenue capture for every specialty.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 px-7 py-5 text-base font-semibold shadow-2xl shadow-blue-500/50">
              Meet the leaders
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl border-2 border-blue-400/50 bg-white/5 px-7 py-5 text-base text-white backdrop-blur-xl hover:bg-white/10"
            >
              View certifications
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-blue-500/30 bg-white/5 px-4 py-5 shadow-lg shadow-blue-500/15 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="text-sm text-blue-100/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-blue-400/30 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 shadow-2xl shadow-blue-500/20 backdrop-blur"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/10 to-purple-500/5 opacity-70" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/20 p-3 text-blue-100 backdrop-blur">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">
                  Mission
                </p>
                <p className="text-sm text-blue-100/80">
                  Compliance without compromise across every claim.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/25 bg-slate-950/40 p-5">
              <p className="text-sm text-blue-100/80">
                Dedicated pods staffed with CCS/CPC credentialed coders, QA
                supervisors, and client success partners keep SLAs aligned to
                payer changes and clinical priorities.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-slate-950/30 p-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 p-2">
                  <UsersRound className="h-4 w-4 text-cyan-200" />
                </span>
                <p className="text-sm text-blue-50">Embedded pod model</p>
              </div>
              <p className="mt-3 text-sm text-blue-100/80">
                24/7 coverage with transparent QA dashboards, turnaround times,
                and audit readiness built in.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100/80">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              SOC 2 evaluated operations • HIPAA-audited workflows
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
