"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { leadershipTeam } from "@/data/about";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutLeadershipSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 text-slate-900 lg:py-24">
      <div className="container space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <Badge className="border border-blue-200 bg-blue-50 text-blue-700">
              Leadership & Team
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Leaders who build accountable, transparent pods
            </h2>
            <p className="text-slate-600 lg:max-w-2xl">
              Each pod is anchored by a clinical lead, QA supervisor, and
              client success partner to keep SLAs, audits, and training
              aligned to payer changes.
            </p>
          </div>
          <div className="rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 text-sm font-medium text-blue-800">
            CCS, CPCO, RHIA credentialed leadership
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              transition={{ delay: index * 0.08 }}
            >
              <Card className="border-slate-200 bg-white text-slate-900 shadow-lg">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-blue-700">
                    {leader.role}
                  </CardDescription>
                  <p className="text-sm text-slate-600">{leader.bio}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}