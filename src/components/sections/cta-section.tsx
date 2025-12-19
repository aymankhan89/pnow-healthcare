import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/components/animations/motion-config";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <AnimatedSection
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-white via-blue-50 to-white py-16"
    >
      <motion.div
        className="container relative z-10 flex flex-col gap-6 text-center lg:text-left"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Ready to Transform Your Revenue Cycle?
        </h2>
        <p className="text-base text-slate-600 lg:max-w-3xl">
          Experience the difference certified coding expertise, unwavering compliance, and dedicated
          support can make for your healthcare organization. Schedule a consultation to discuss your
          specific needs and discover how our services can optimize your revenue cycle.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <Button size="lg" className="gap-2 animate-pressable bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            Schedule Your Free Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button size="lg" variant="outline" className="animate-pressable border-slate-300 text-slate-700">
            Request a Custom Proposal
          </Button>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
