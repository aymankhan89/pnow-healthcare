"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/contact";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(
          error?.error ?? "We couldn't send your request. Please try again."
        );
      }

      form.reset();
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
    <section className="container grid gap-10 pb-16 lg:grid-cols-[1.1fr,0.9fr] lg:pb-24">
      <motion.div variants={fade} initial="hidden" whileInView="show">
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle>Request a Consultation</CardTitle>
            <CardDescription className="text-slate-600">
              We respond to every inquiry within one business day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            autoComplete="given-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            autoComplete="family-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@hospital.com"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your coding needs, timeline, or current pain points."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {feedback && (
                  <div
                    role={feedback.type === "error" ? "alert" : "status"}
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      feedback.type === "error"
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-green-200 bg-green-50 text-green-800"
                    }`}
                  >
                    {feedback.message}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Schedule a Free Consultation"}
                </Button>
              </form>
            </Form>
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
  );
}