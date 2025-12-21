"use client";

import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactFormFields, contactInfo } from "@/data/contact";
import type { ContactRequestPayload } from "@/lib/contact";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const initialContactForm: ContactRequestPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const autoCompleteByField: Partial<Record<keyof ContactRequestPayload, string>> = {
  firstName: "given-name",
  lastName: "family-name",
  email: "email",
  phone: "tel",
};

export function AboutContactSection() {
  const [formData, setFormData] = useState<ContactRequestPayload>(initialContactForm);
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
    <section className="bg-white py-16 text-slate-900 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-start">
        <motion.div
          className="space-y-5"
          initial={fadeIn.hidden}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
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
  );
}