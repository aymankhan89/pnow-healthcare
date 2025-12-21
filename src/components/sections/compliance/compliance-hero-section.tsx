"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { complianceSections } from "@/data/compliance";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function ComplianceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-[110px]" />
      </div>

      <div className="container relative grid gap-12 pt-20 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-32 lg:pb-24">
        <motion.div
          className="space-y-7"
          initial={fade.hidden}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
        >
          <Badge className="w-fit border border-blue-400/40 bg-white/10 text-blue-100">
            HIPAA Compliance & Data Security
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            HIPAA Compliance &{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Data Security
            </span>
          </h1>
          <p className="text-lg text-blue-100/80 md:max-w-3xl">
            Your trusted partner in compliant medical coding services. We
            prioritize PHI protection through disciplined adherence to HIPAA,
            HITECH, and CMS guidelines so your patient data remains secure at
            every step.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-2xl bg-blue-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30">
              Request BAA Execution
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl border-2 border-blue-300/60 bg-white/5 px-7 py-4 text-base text-white backdrop-blur hover:bg-white/10"
            >
              Review Our Security Practices
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 shadow-2xl shadow-blue-500/30"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-80" />
          <div className="relative flex h-full flex-col justify-center gap-4">
            {/* Security Shield Image */}
            <div className="flex justify-center mb-4">
              <img
                src="/security-shield.svg"
                alt="HIPAA compliance and data security illustration"
                className="h-32 w-auto"
              />
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="rounded-2xl bg-blue-500/30 p-3">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-100/80">
                  Secure environment
                </p>
                <p className="text-lg font-semibold">Protected PHI handling</p>
              </div>
            </div>
            <p className="text-sm text-blue-100/85">
              Controlled workspace, strict device policies, and encrypted
              channels for every transmission. Zero tolerance for unsecured
              communication.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "BAA executed before access",
                "MFA enforced for all systems",
                "24/7 monitoring & alerting",
                "Quarterly control reviews",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-blue-100/90"
                >
                  <ShieldCheck className="h-4 w-4 text-cyan-200" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
