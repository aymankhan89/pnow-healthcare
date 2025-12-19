"use client";

import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import {
  coreValues,
  experienceHighlights,
  leadershipTeam,
  missionVision,
} from "@/data/about";
import { contactFormFields, contactInfo } from "@/data/contact";
import type { ContactRequestPayload } from "@/lib/contact";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const initialContactForm: ContactRequestPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const autoCompleteByField: Partial<
  Record<keyof ContactRequestPayload, string>
> = {
  firstName: "given-name",
  lastName: "family-name",
  email: "email",
  phone: "tel",
};

export function AboutPage() {
  const [formData, setFormData] =
    useState<ContactRequestPayload>(initialContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(
          error?.error ?? "We couldn't send your request. Please try again."
        );
      }

      setFormData(initialContactForm);
      setFeedback({
        type: "success",
        message:
          "Thanks for reaching out. Our team will reply within one business day.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again shortly.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background text-slate-900">
      <AboutHeroSection />

      <section className="relative overflow-hidden border-y border-slate-200 bg-white py-16 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-4"
            initial={fadeIn.hidden}
            whileInView={fadeIn.show}
          >
            <Badge className="w-fit bg-blue-50 text-blue-700">
              Mission & Vision
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Built for compliance, accuracy, and partnership.
            </h2>
            <p className="text-lg text-slate-600 lg:max-w-2xl">
              We blend credentialed specialists, structured QA, and automation
              to keep revenue capture accurate, transparent, and audit-ready for
              health systems nationwide.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="h-full border-slate-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Mission</CardTitle>
                  <CardDescription className="text-slate-600">
                    {missionVision.mission}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full border-slate-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">Vision</CardTitle>
                  <CardDescription className="text-slate-600">
                    {missionVision.vision}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900">
                Company Overview
              </h3>
              <p>
                We employ 300+ credentialed professionals (CCS, CCS-P, RHIA,
                CPC, CIC, CRC, CDIP) across the United States and provide 24/7
                coverage for inpatient, outpatient, ED, and professional coding.
                Our operations, security, and quality programs are SOC 2
                evaluated, HIPAA-audited, and continuously optimized with payer
                feedback loops.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Dedicated client pods with team leads and QA supervisors</li>
                <li>• Structured onboarding blueprint to reach go-live inside 30 days</li>
                <li>• Native integration with leading EHRs and analytics tools</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-14 text-slate-100 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-30" />
        </div>

        <div className="container relative space-y-8">
          <Badge className="border border-cyan-300/40 bg-cyan-500/15 px-4 py-1 text-cyan-100">
            Experience & Expertise
          </Badge>
          <div className="grid gap-6 md:grid-cols-3">
            {experienceHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-slate-800 bg-slate-900/60 text-slate-100 shadow-xl shadow-blue-500/10 backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative space-y-4">
                    <item.icon className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-2.5 text-cyan-200" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-slate-200/80">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 text-slate-100 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute right-10 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
          <div className="absolute left-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-30" />
        </div>

        <div className="container relative space-y-8">
          <Badge className="border border-indigo-300/40 bg-indigo-500/15 px-4 py-1 text-indigo-100">
            Core Values
          </Badge>
          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                transition={{ delay: index * 0.08 }}
              >
                <Card className="group h-full border-slate-800 bg-slate-900/70 text-slate-100 shadow-xl shadow-blue-500/10 transition-all">
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                    <CardDescription className="text-slate-200/80">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-900 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-start">
          <motion.div
            className="space-y-5"
            initial={fadeIn.hidden}
            whileInView={fadeIn.show}
          >
            <Badge className="border border-blue-200 bg-blue-50 text-blue-700">
              Contact Us
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Ready to build a dedicated coding pod?
            </h2>
            <p className="text-lg text-slate-600">
              Tell us about your volumes, specialties, and go-live goals. We’ll
              design a plan with credentialed coders, QA oversight, and
              transparent reporting.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">
                Prefer to talk now?
              </h3>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p>📞 {contactInfo.salesPhone}</p>
                <p>✉️ {contactInfo.salesEmail}</p>
                <p>{contactInfo.businessHours}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                  Consultation request
                </p>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Share a few details
                </h3>
                <p className="text-sm text-slate-600">
                  We respond to every inquiry within one business day.
                </p>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {contactFormFields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-1">
                    <label
                      className="text-sm font-medium text-slate-700"
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      autoComplete={autoCompleteByField[field.name]}
                      value={formData[field.name] ?? ""}
                      onChange={handleInputChange}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm font-medium text-slate-700"
                    htmlFor="message"
                  >
                    What do you need help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="E.g., coding backlog, specialty coverage, compliance audit, or go-live timeline."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                {feedback && (
                  <p
                    role={feedback.type === "error" ? "alert" : "status"}
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      feedback.type === "error"
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-green-200 bg-green-50 text-green-800"
                    }`}
                  >
                    {feedback.message}
                  </p>
                )}
                <Button
                  className="w-full bg-blue-600 text-white shadow-md hover:bg-blue-700"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Schedule a call"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
