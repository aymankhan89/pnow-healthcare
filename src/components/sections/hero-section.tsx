"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const heroStats = [
  { label: "Healthcare Providers", value: "1,200+" },
  { label: "Coding Accuracy", value: "99.8%" },
  { label: "Average TAT", value: "24hrs" },
  { label: "Years Experience", value: "15+" },
] as const;

const heroMetrics = [
  {
    label: "Accuracy Rate",
    value: "99.8%",
    helper: "Industry-leading precision",
  },
  { label: "Avg. Turnaround", value: "24h", helper: "Fast processing times" },
  { label: "Compliance Score", value: "100%", helper: "Full HIPAA adherence" },
] as const;

const floatingIcons = [
  { Icon: Shield, delay: 0, x: "8%", y: "25%" },
  { Icon: Zap, delay: 0.15, x: "80%", y: "15%" },
  { Icon: BarChart3, delay: 0.3, x: "12%", y: "70%" },
  { Icon: CheckCircle2, delay: 0.45, x: "86%", y: "65%" },
] as const;

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br pt-[50px] from-slate-950 via-blue-950 to-slate-900 min-h-screen">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[10%] h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[5%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[40%] h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute hidden lg:block z-10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.15, 1],
            x: mousePosition.x * (index % 2 === 0 ? 0.5 : -0.5),
            y: mousePosition.y * (index % 2 === 0 ? 0.5 : -0.5),
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay },
            scale: { duration: 3, repeat: Infinity, delay },
            rotate: { duration: 5, repeat: Infinity, delay },
            x: { duration: 0.3 },
            y: { duration: 0.3 },
          }}
        >
          <div className="rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl p-4 shadow-2xl shadow-blue-500/20">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center gap-12 px-6 py-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <Badge className="border-blue-400/50 bg-blue-500/20 text-blue-300 backdrop-blur-xl px-4 py-2 text-sm font-medium">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              100% Certified Medical Coders
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <motion.p
              className="text-xs uppercase tracking-[0.5em] text-blue-300/80 font-semibold"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Compliance-first coding partner
            </motion.p>
            <h1 className="text-5xl font-bold text-white md:text-7xl leading-tight">
              Trusted medical coding{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                excellence
              </motion.span>{" "}
              for US healthcare
            </h1>
            <p className="text-lg text-blue-100/80 md:text-xl max-w-2xl">
              Embedded teams of CCS/CPC-certified coders, QA leads, and
              analytics that keep your revenue cycle accurate, responsive, and
              audit-ready.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] px-8 py-6 text-base text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 border border-blue-400/30 font-semibold group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative">Get a Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="rounded-2xl border-2 border-blue-400/50 bg-white/5 backdrop-blur-xl px-8 py-6 text-base text-white shadow-xl hover:bg-white/10 hover:border-blue-400 transition-all font-semibold"
              >
                Book a Call
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 rounded-3xl border border-blue-400/30 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl md:grid-cols-4"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.p
                  className="text-3xl font-bold bg-gradient-to-br from-blue-300 to-cyan-300 bg-clip-text text-transparent md:text-4xl"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs text-blue-300/70 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="flex-1 rounded-[32px] border border-blue-400/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 shadow-2xl relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
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

          <div className="flex items-start gap-4 relative z-10">
            <motion.div
              className="rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-4 text-blue-300 backdrop-blur-xl border border-blue-400/30"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <BarChart3 className="h-7 w-7" />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80 font-semibold">
                Live command center
              </p>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                Nationwide coverage & real-time transparency
              </h3>
              <p className="text-blue-100/70">
                Dashboards surface accuracy, audits, and turnaround times as
                they happen so leaders stay in control.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 relative z-10">
            {heroMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="rounded-2xl border border-blue-400/30 bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all group/card relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-widest text-cyan-300/70 font-semibold">
                    {metric.label}
                  </div>
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mt-2"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-sm text-blue-200/70 mt-1">
                    {metric.helper}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}
