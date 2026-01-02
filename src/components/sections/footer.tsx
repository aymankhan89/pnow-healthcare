"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { useMotionPreference } from "@/components/animations/use-motion-preference";
import { footerColumns, contactItems, socialLinks } from "@/data/footer";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const footerParticles = [
  { left: "8%", top: "18%", duration: 3.6, delay: 0.1 },
  { left: "22%", top: "30%", duration: 4.0, delay: 0.25 },
  { left: "36%", top: "16%", duration: 3.8, delay: 0.4 },
  { left: "52%", top: "26%", duration: 4.2, delay: 0.55 },
  { left: "68%", top: "18%", duration: 3.9, delay: 0.7 },
  { left: "82%", top: "28%", duration: 4.1, delay: 0.85 },
  { left: "14%", top: "52%", duration: 3.7, delay: 0.2 },
  { left: "32%", top: "60%", duration: 4.3, delay: 0.35 },
  { left: "50%", top: "56%", duration: 3.9, delay: 0.5 },
  { left: "66%", top: "64%", duration: 4.4, delay: 0.65 },
  { left: "82%", top: "58%", duration: 3.8, delay: 0.8 },
  { left: "18%", top: "78%", duration: 4.2, delay: 0.3 },
  { left: "38%", top: "84%", duration: 3.9, delay: 0.45 },
  { left: "58%", top: "80%", duration: 4.1, delay: 0.6 },
  { left: "78%", top: "86%", duration: 3.7, delay: 0.75 },
];

export function SiteFooter() {
  const { allowContinuousMotion } = useMotionPreference();

  return (
    <footer className="relative overflow-hidden border-t border-blue-400/30 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[20%] left-[5%] h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
          animate={
            allowContinuousMotion
              ? {
                  scale: [1, 1.3, 1],
                  x: [0, 30, 0],
                  opacity: [0.3, 0.5, 0.3],
                }
              : undefined
          }
          transition={
            allowContinuousMotion
              ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"
          animate={
            allowContinuousMotion
              ? {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }
              : undefined
          }
          transition={
            allowContinuousMotion
              ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        />
      </div>

      {/* Floating Particles */}
      {allowContinuousMotion &&
        footerParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/30"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

      <div className="relative z-10">
        <div className="container grid gap-12 py-16 lg:grid-cols-[1fr_1.5fr]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Logo variant="word" tone="light" className="h-12 w-auto" />
              </motion.div>
            </div>

            <p className="max-w-md text-base text-blue-100/80 leading-relaxed">
              Certified medical coding partners delivering accuracy, compliance,
              and agility for health systems, hospitals, and specialty providers
              across the United States.
            </p>

            <div className="flex flex-wrap gap-3">
              {contactItems.map((item, i) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-xl px-4 py-2 text-sm text-blue-200 shadow-lg"
                >
                  <item.icon className="size-4 text-cyan-400" />
                  {item.label}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.button
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl text-blue-300 transition-all shadow-lg hover:border-blue-400/50 relative overflow-hidden group"
                  aria-label={social.label}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <social.icon className="size-5 relative z-10" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-10 text-sm sm:grid-cols-3"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            {footerColumns.map((column, colIndex) => (
              <div key={column.heading}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + colIndex * 0.1 }}
                >
                  <p className="text-base font-bold text-white mb-1 inline-flex items-center gap-2">
                    {column.heading}
                    {colIndex === 0 && (
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    )}
                  </p>
                  <motion.div
                    className="h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + colIndex * 0.1, duration: 0.6 }}
                  />
                </motion.div>

                <ul className="space-y-3 text-blue-100/70">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + colIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="inline-flex items-center transition-all hover:text-cyan-300 hover:translate-x-1 group"
                      >
                        <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
          <motion.div
            className="container flex flex-col gap-4 py-6 text-sm text-blue-200/60 sm:flex-row sm:items-center sm:justify-between relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2"
            >
              © {new Date().getFullYear()} PNOW Healthcare. All rights reserved.
              <span className="text-blue-100/60">•</span>
              <span className="flex items-center gap-1">
                Developed and designed by
                <Link
                  href="https://aymank-dev.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200 hover:text-cyan-100 underline decoration-cyan-400/60 decoration-dashed underline-offset-4 transition-colors"
                >
                  Ayman Khan
                </Link>
              </span>
              <motion.span
                animate={
                  allowContinuousMotion ? { opacity: [0.5, 1, 0.5] } : undefined
                }
                transition={
                  allowContinuousMotion
                    ? { duration: 2, repeat: Infinity }
                    : undefined
                }
                className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </motion.p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { label: "Disclaimer", href: "/legal/disclaimer" },
                {
                  label: "Terms & Conditions",
                  href: "/legal/terms-and-conditions",
                },
                {
                  label: "Data Security Policy",
                  href: "/legal/data-security-policy",
                },
              ].map((link, i) => (
                <motion.span
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    color: "#67e8f9",
                    textShadow: "0 0 8px rgba(103, 232, 249, 0.5)",
                  }}
                  className="cursor-pointer transition-all"
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </footer>
  );
}
