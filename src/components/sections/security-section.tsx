"use client";

import { AnimatedSection } from "@/components/animations/animated-section";
import { useMotionPreference } from "@/components/animations/use-motion-preference";
import { fadeInUp } from "@/components/animations/motion-config";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { securityColumns } from "@/data/security";
import { motion } from "framer-motion";

export function SecuritySection() {
  const { allowContinuousMotion } = useMotionPreference();

  return (
    <AnimatedSection
      id="security"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute right-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/40 to-cyan-100/40 blur-3xl"
          animate={
            allowContinuousMotion
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : undefined
          }
          transition={
            allowContinuousMotion
              ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
        <motion.div
          className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 blur-3xl"
          animate={
            allowContinuousMotion
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : undefined
          }
          transition={
            allowContinuousMotion
              ? {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }
              : undefined
          }
        />
      </div>

      <div className="container relative z-10 space-y-10">
        <motion.div className="max-w-3xl space-y-4" variants={fadeInUp}>
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
              <span>✓</span>
              <span>Enterprise-grade safeguards</span>
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Enterprise-Grade Security & Compliance{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 bg-clip-text text-transparent">
                You Can Trust
              </span>
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
            className="text-base leading-relaxed text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Protecting patient health information is our highest priority. Our
            comprehensive security framework exceeds industry standards, giving
            you confidence that your data remains secure and compliant at all
            times.
          </motion.p>
        </motion.div>

        <motion.div className="grid gap-6 lg:grid-cols-3" variants={fadeInUp}>
          {securityColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="group relative h-full overflow-hidden border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-[1px] rounded-lg bg-white" />

                <CardHeader className="relative z-10 space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
                    <column.icon className="relative size-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-2.5 text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {column.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    {column.bullets.map((bullet, i) => (
                      <motion.li
                        key={bullet}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + i * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <span className="leading-relaxed">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="rounded-2xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 p-5 text-center transition-all duration-300 group-hover:border-blue-300 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-cyan-50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent">
                      {column.stat.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {column.stat.label}
                    </p>
                    <p className="text-xs text-slate-500">
                      {column.stat.sublabel}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
