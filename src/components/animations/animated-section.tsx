"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "./motion-config";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
};

export function AnimatedSection({
  id,
  className,
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
