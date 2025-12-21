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
import { coreServices } from "@/data/services";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export function ServicesSection() {
  return (
    <AnimatedSection
      id="services"
      className="container relative overflow-hidden py-16 lg:py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <motion.div className="space-y-6" variants={fadeInUp}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-white shadow-lg"
            >
              <span className="mr-1.5">✨</span>
              Comprehensive Programs
            </Badge>
          </motion.div>

          <motion.h2
            className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive Healthcare Services Built for{" "}
            <span className="relative inline-block">
              Precision
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our specialized solutions optimize your revenue cycle while
            maintaining the highest standards of accuracy and compliance. Every
            service is delivered by certified professionals with deep expertise
            in US healthcare regulations.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {["HIPAA Compliant", "99.9% Accuracy", "24/7 Support"].map(
              (item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 shadow-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div className="grid gap-5" variants={fadeInUp}>
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="group relative overflow-hidden border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-transparent hover:shadow-2xl">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-[1px] rounded-lg bg-white" />

                {/* Card content */}
                <CardHeader className="relative z-10 flex flex-row items-start gap-4 p-6">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
                    <service.icon className="relative size-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-2.5 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-lg" />
                  </motion.div>

                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {service.description}
                    </CardDescription>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="text-slate-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
