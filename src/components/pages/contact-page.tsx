"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactFormFields, contactInfo } from "@/data/contact";
import type { ContactRequestPayload } from "@/lib/contact";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const initialFormState: ContactRequestPayload = {
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

export function ContactPage() {
  const [formData, setFormData] =
    useState<ContactRequestPayload>(initialFormState);
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

      setFormData({ ...initialFormState });
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
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 mt-[50px]">
      <section className="container space-y-6 py-16 lg:py-24">
        <Badge variant="secondary">Contact Us</Badge>
        <motion.h1
          className="text-4xl font-semibold md:text-5xl"
          initial={fade.hidden}
          animate={fade.show}
        >
          Let’s discuss your coding goals and compliance requirements.
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 lg:max-w-3xl"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.1 }}
        >
          Share a few details and our team will arrange a consultation, walk
          through our dedicated coder model, and design a plan that meets your
          quality, turnaround, and compliance targets.
        </motion.p>
      </section>

      <section className="container grid gap-10 pb-16 lg:grid-cols-[1.1fr,0.9fr] lg:pb-24 ">
        <motion.div variants={fade} initial="hidden" whileInView="show">
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>Request a Consultation</CardTitle>
              <CardDescription className="text-slate-600">
                We respond to every inquiry within one business day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {contactFormFields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-1">
                    <label
                      className="text-sm font-medium text-slate-600"
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
                    className="text-sm font-medium text-slate-600"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your coding needs, timeline, or current pain points."
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
                  className="w-full animate-pressable bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Schedule a Free Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={fade}
          initial="hidden"
          whileInView="show"
        >
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>Sales & General Inquiry</CardTitle>
              <CardDescription className="text-slate-600">
                We help hospitals, health systems, and physician groups scale
                coding programs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>📞 {contactInfo.salesPhone}</p>
              <p>✉️ {contactInfo.salesEmail}</p>
              <p>{contactInfo.businessHours}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>{contactInfo.office.name}</CardTitle>
              <CardDescription className="text-slate-600">
                Office (by appointment)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              {contactInfo.office.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
              <CardTitle>Free Consultation</CardTitle>
              <CardDescription className="text-slate-600">
                Tell us about your volumes, specialties, and technology stack.
                We’ll send a tailored ramp plan within 48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full animate-pressable">
                Book Time with Sales
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
