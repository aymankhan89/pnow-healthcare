"use client";

import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/components/animations/motion-config";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { specialties } from "@/data/specialties";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function SpecialtiesSection() {
  return (
    <AnimatedSection
      id="specialties"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 lg:py-32"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[10%] right-[10%] h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container relative z-10 space-y-12">
        <motion.div className="space-y-6 text-center" variants={fadeInUp}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="border-blue-400/50 bg-blue-500/20 text-blue-300 backdrop-blur-xl px-4 py-2 text-sm font-medium mb-6">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Specialty expertise
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Specialty Expertise Across the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Healthcare Spectrum
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our certified coders bring deep knowledge across multiple
            specialties, ensuring accurate documentation and optimal
            reimbursement regardless of your practice focus. We stay current
            with specialty-specific coding updates and payer requirements.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={fadeInUp}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative rounded-2xl border border-blue-400/30 bg-white/5 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {specialty.title}
                  </p>
                  <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-blue-100/70 leading-relaxed">
                  {specialty.description}
                </p>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 pt-8"
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="border-blue-400/30 bg-white/5 backdrop-blur-xl transition-all hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden group relative h-full">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="space-y-4 relative z-10 p-8">
                <motion.div
                  className="inline-flex items-center gap-2 text-cyan-400 mb-2"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Featured
                  </span>
                </motion.div>

                <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Primary Care Excellence
                </CardTitle>

                <CardDescription className="text-blue-100/80 text-base leading-relaxed">
                  We understand the unique challenges of family medicine,
                  internal medicine, and pediatrics, delivering accurate E/M
                  coding that captures the full complexity of patient
                  encounters.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="border-blue-400/30 bg-white/5 backdrop-blur-xl transition-all hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden group relative h-full">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="space-y-4 relative z-10 p-8">
                <motion.div
                  className="inline-flex items-center gap-2 text-blue-400 mb-2"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Featured
                  </span>
                </motion.div>

                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  Specialty Hospital Services
                </CardTitle>

                <CardDescription className="text-blue-100/80 text-base leading-relaxed">
                  From inpatient coding to outpatient procedures, our hospital
                  coding specialists ensure DRG optimization and compliance with
                  CMS guidelines for maximum reimbursement.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </AnimatedSection>
  );
}
