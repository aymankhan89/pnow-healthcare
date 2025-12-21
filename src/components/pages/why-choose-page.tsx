"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/data/contact";
import { faqs, reasons, resources } from "@/data/why-choose-us";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function WhyChooseUsPage() {
  return (
    <main className="text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute -right-10 top-0 h-80 w-80 rounded-full bg-blue-500/30 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-[110px]" />
        </div>
        <div className="container relative space-y-6 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Why Choose Us</Badge>
          <motion.h1 className="text-4xl font-semibold md:text-5xl" initial={fade.hidden} animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}>
            A partner obsessed with accuracy, compliance, and long-term outcomes.
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100/80 lg:max-w-3xl"
            initial={fade.hidden}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.1 } }}
          >
            We combine certified coding teams, QA automation, and proactive client success to keep your revenue cycle confident and compliant.
          </motion.p>
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

      <section id="faqs" className="bg-slate-950 py-16 text-white lg:py-24">
        <div className="container space-y-8">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">FAQs</Badge>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                <Card className="border-slate-800 bg-slate-900/70 text-slate-100">
                  <CardHeader>
                    <p className="text-xs uppercase tracking-wide text-blue-400">{faq.category}</p>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription className="text-slate-200/80">{faq.answer}</CardDescription>
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
              <Button className="animate-pressable">Get a Free Consultation</Button>
              <Button variant="outline" className="animate-pressable">
                Book a Call
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
