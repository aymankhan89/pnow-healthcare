"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";

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

export function ServicesDedicatedTeamSection() {
  const teamFeatures = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All team members hold current coding certifications (CPC, CCS, etc.) and undergo continuous training.",
    },
    {
      icon: Users,
      title: "Dedicated Account Management",
      description: "Each client gets a dedicated account manager who understands your practice and coding needs.",
    },
    {
      icon: Clock,
      title: "Consistent Team",
      description: "Same coders work on your accounts consistently, ensuring familiarity with your documentation style.",
    },
    {
      icon: Target,
      title: "Performance Tracking",
      description: "Detailed dashboards show coding accuracy, turnaround times, and revenue impact for your practice.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={fade.hidden}
          whileInView={fade.show}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">Dedicated Team</Badge>
          <h2 className="mb-6 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Your dedicated coding team, focused exclusively on your success.
          </h2>
          <p className="text-lg text-slate-600">
            We don&apos;t outsource or rotate coders. Your dedicated team builds
            deep expertise in your specialty and documentation patterns.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {teamFeatures.map((feature, index) => (
            <motion.div key={index} variants={fade}>
              <Card className="h-full border-0 bg-slate-50 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={fade.hidden}
          whileInView={fade.show}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button className="px-8 py-4 text-lg font-semibold shadow-lg" asChild>
            <Link href="/contact">Schedule Team Introduction</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
