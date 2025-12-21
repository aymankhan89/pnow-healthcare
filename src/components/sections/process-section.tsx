"use client";

import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/components/animations/motion-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <AnimatedSection
      id="process"
      className="relative overflow-hidden border-y border-slate-700 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 lg:py-24"
    >
      {/* Animated background patterns */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute right-20 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container space-y-12">
        <motion.div
          className="space-y-6 text-center lg:text-left"
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-white shadow-lg"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Streamlined Onboarding</span>
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Our Streamlined Process:{" "}
            </span>
            <span className="relative inline-block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              From Onboarding to Excellence
              <motion.span
                className="absolute -bottom-2 left-0 h-3 w-full bg-gradient-to-r from-blue-500/50 to-cyan-500/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-slate-300 lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We&apos;ve refined our implementation process to ensure seamless
            integration with your existing workflows. Within weeks, you&apos;ll
            experience the benefits of accurate coding, reduced denials, and
            improved cash flow.
          </motion.p>
        </motion.div>

        {/* Mobile view */}
        <motion.div className="space-y-5 lg:hidden" variants={fadeInUp}>
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-lg font-bold text-white shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop view */}
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-5xl">
            {/* Center timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300" />

            {/* Steps */}
            <div className="relative space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex items-center gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {step.side === "left" ? (
                    <>
                      {/* Left side content */}
                      <motion.div
                        className="flex-1 text-right pr-8"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Center circle */}
                      <motion.div
                        className="group relative z-10 flex-shrink-0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white shadow-xl">
                          {step.number}
                        </div>

                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-blue-400"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>

                      {/* Right side empty */}
                      <div className="flex-1" />
                    </>
                  ) : (
                    <>
                      {/* Left side empty */}
                      <div className="flex-1" />

                      {/* Center circle */}
                      <motion.div
                        className="group relative z-10 flex-shrink-0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-xl font-bold text-white shadow-xl">
                          {step.number}
                        </div>

                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-blue-400"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>

                      {/* Right side content */}
                      <motion.div
                        className="flex-1 pl-8"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                          {step.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Schedule Your Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-slate-600 bg-slate-900/50 px-8 py-6 text-base font-semibold text-slate-200 shadow-md transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Request a Custom Proposal
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
