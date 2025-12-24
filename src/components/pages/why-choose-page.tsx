"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/data/contact";
import { faqs, reasons, resources } from "@/data/why-choose-us";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const highlights = [
  "Dedicated pods with specialty alignment",
  "QA automation plus clinical review",
  "Transparent reporting every day",
];

const stats = [
  { label: "Accuracy", value: "99.8%", helper: "QA verified" },
  { label: "Turnaround", value: "12 hrs", helper: "Priority cases" },
  { label: "Retention", value: "96%", helper: "Long-term partners" },
];

export function WhyChooseUsPage() {
  return (
    <main className="text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
          <motion.div
            className="absolute -right-10 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-[140px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/25 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute right-1/3 top-1/2 h-72 w-72 rounded-full bg-purple-500/25 blur-[110px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        <div className="container relative grid gap-12 pt-[70px] pb-20 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:pt-32 lg:pb-28">
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-blue-200" />
              Why choose PNOW
            </motion.div>

            <motion.h1
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              initial={fade.hidden}
              animate={fade.show}
              style={{
                background: "linear-gradient(to bottom right, #fff, #93c5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A partner obsessed with accuracy, compliance, and outcomes.
            </motion.h1>

            <motion.p
              className="text-lg text-blue-100/90 lg:max-w-3xl leading-relaxed"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.1 }}
            >
              The same detail you see on each service page lives here: certified coders, QA
              automation, and proactive client success built to protect revenue and compliance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.15 }}
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={fade.hidden}
            animate={fade.show}
            transition={{ delay: 0.2 }}
          >
            <Button className="group relative overflow-hidden px-7 py-4 text-base font-semibold shadow-2xl shadow-blue-500/40" asChild>
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white shadow-xl backdrop-blur transition hover:border-white/50 hover:bg-white/15 hover:text-white"
            >
              <Link href="/why-choose-us#faqs">Review our approach</Link>
            </Button>
          </motion.div>
        </div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-white/15 text-white border-white/20">
                  Why Us Snapshot
                </Badge>
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm transition-all hover:scale-[1.02] hover:border-white/25"
                  >
                    <p className="text-xs font-medium text-blue-100/80">{stat.label}</p>
                    <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-blue-100/70">{stat.helper}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-50">What partnering with us means</p>
                <ul className="space-y-2 text-sm text-blue-100/85">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    Dedicated pods calibrated to your specialties and systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    QA automation plus clinical review to defend denials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    Daily reporting with actionable insights, not just metrics
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-[-1px] left-0 right-0">
          <svg
            className="w-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 45C840 40 960 30 1080 28.3C1200 26.7 1320 33.3 1380 36.7L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                <Card className="border-slate-200 bg-white">
                  <CardHeader className="space-y-3">
                    <reason.icon className="h-10 w-10 text-primary" />
                    <CardTitle>{reason.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {reason.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faqs"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white lg:py-24"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-blue-500/25 blur-[120px]" />
          <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
        </div>
        <div className="container relative space-y-10">
          <div className="space-y-3">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              FAQs
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Everything you ask when evaluating a coding partner.
            </h2>
            <p className="max-w-2xl text-blue-100/85">
              The answers mirror the guarantees we give on our service pages—security, accuracy,
              and visibility into every claim.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Compliance first", "Specialty-aligned pods", "Daily reporting"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: idx * 0.05 } }}
              >
                <Card className="group relative overflow-hidden border border-white/10 bg-white/5 text-slate-100 shadow-2xl backdrop-blur">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{faq.category}</p>
                    <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                    <CardDescription className="text-blue-100/85">{faq.answer}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-white py-16 lg:py-24">
        <div className="container space-y-8">
          <div className="space-y-3">
            <Badge variant="secondary">Resources</Badge>
            <h2 className="text-3xl font-semibold">Stay ahead with curated updates</h2>
            <p className="text-slate-600 lg:max-w-3xl">
              Subscribe to insights covering coding accuracy, payer rules, and compliance so your team always knows what changed last week.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <motion.div key={resource.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                <Card className="border-slate-200 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 lg:py-24">
        <div className="container grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} className="space-y-6">
            <Badge variant="secondary">Ready to Partner?</Badge>
            <h2 className="text-3xl font-semibold">Let’s design your dedicated coding program.</h2>
            <p className="text-slate-600">
              Tell us about your current volumes, specialties, and systems. We’ll align the right pod, QA cadence, and reporting within 48 hours.
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>📞 {contactInfo.salesPhone}</p>
              <p>✉️ {contactInfo.salesEmail}</p>
              <p>{contactInfo.businessHours}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="animate-pressable" asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button variant="outline" className="animate-pressable" asChild>
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
                <CardDescription className="text-slate-600">
                  We respond to every inquiry within one business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <input
                    type="email"
                    placeholder="name@organization.com"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <Button className="w-full animate-pressable">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
