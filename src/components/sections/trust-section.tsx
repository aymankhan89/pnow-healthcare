import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/components/animations/motion-config";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { trustReasons } from "@/data/trust";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <AnimatedSection className="relative overflow-hidden border-t border-slate-200 bg-white py-16 lg:py-24">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/30 to-cyan-100/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-32 bottom-32 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative space-y-10">
        <motion.div
          className="space-y-4 text-center lg:text-left"
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-white shadow-lg"
            >
              <span>🤝</span>
              <span>Proven Partnership</span>
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Healthcare Leaders Trust{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 bg-clip-text text-transparent">
                Our Services
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
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-2" variants={fadeInUp}>
          {trustReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group relative h-full overflow-hidden border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-[1px] rounded-lg bg-white" />

                <CardHeader className="relative z-10 flex flex-row items-start gap-4 p-6">
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />

                    <reason.icon className="relative size-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-2.5 text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg" />
                  </motion.div>

                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent">
                      {reason.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {reason.description}
                    </CardDescription>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="flex-shrink-0 text-slate-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
