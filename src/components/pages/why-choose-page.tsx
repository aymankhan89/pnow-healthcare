"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/data/contact";
import { faqs, reasons, resources } from "@/data/why-choose-us";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function WhyChooseUsPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <section className="container space-y-6 py-16 lg:py-24">
        <Badge variant="secondary">Why Choose Us</Badge>
        <motion.h1 className="text-4xl font-semibold md:text-5xl" initial={fade.hidden} animate={fade.show}>
          A partner obsessed with accuracy, compliance, and long-term outcomes.
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 lg:max-w-3xl"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.1 }}
        >
          We combine certified coding teams, QA automation, and proactive client success to keep your revenue cycle confident and compliant.
        </motion.p>
      </section>

      <section className="container space-y-8 pb-16 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={fade} initial="hidden" whileInView="show">
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
      </section>

      <section id="faqs" className="border-y border-slate-200 bg-white/85">
        <div className="container space-y-8 py-16 lg:py-24">
          <Badge variant="secondary">FAQs</Badge>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <motion.div key={faq.question} variants={fade} initial="hidden" whileInView="show">
                <Card className="border-slate-200 bg-white">
                  <CardHeader>
                    <p className="text-xs uppercase tracking-wide text-blue-600">{faq.category}</p>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription className="text-slate-600">{faq.answer}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="container space-y-8 py-16 lg:py-24">
        <div className="space-y-3">
          <Badge variant="secondary">Resources</Badge>
          <h2 className="text-3xl font-semibold">Stay ahead with curated updates</h2>
          <p className="text-slate-600 lg:max-w-3xl">
            Subscribe to insights covering coding accuracy, payer rules, and compliance so your team always knows what changed last week.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <motion.div key={resource.title} variants={fade} initial="hidden" whileInView="show">
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
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white/85">
        <div className="container grid gap-8 py-16 lg:grid-cols-2 lg:py-24">
          <motion.div variants={fade} initial="hidden" whileInView="show" className="space-y-6">
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
          <motion.div variants={fade} initial="hidden" whileInView="show">
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
