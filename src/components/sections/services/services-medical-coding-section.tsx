"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  initial: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ServicesMedicalCodingSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={fade.hidden}
          whileInView={fade.show}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">Medical Coding</Badge>
          <h2 className="mb-6 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Precision coding that maximizes reimbursement and minimizes risk.
          </h2>
          <p className="text-lg text-slate-600">
            Our certified coders combine deep clinical knowledge with payer-specific
            expertise to ensure every claim is coded correctly the first time.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fade}>
            <Card className="h-full border-0 bg-slate-50 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">99.8% Accuracy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Industry-leading accuracy through dual-coder verification and
                  automated validation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fade}>
            <Card className="h-full border-0 bg-slate-50 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">24-48 Hour Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Rapid processing without compromising quality, keeping your
                  revenue cycle moving.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fade}>
            <Card className="h-full border-0 bg-slate-50 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">HIPAA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  End-to-end encryption and secure workflows protect patient data
                  at every step.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fade}>
            <Card className="h-full border-0 bg-slate-50 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Revenue Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Strategic coding maximizes reimbursement while ensuring
                  compliance with payer rules.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}