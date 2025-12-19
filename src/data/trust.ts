import {
  GraduationCap,
  Headset,
  Layers3,
  Shield,
  Target,
  TimerReset,
} from "lucide-react";

export const trustReasons = [
  {
    title: "Certified Coding Professionals",
    description:
      "100% AAPC and AHIMA-certified coders with ongoing education and specialty certifications ensuring expertise you can rely on.",
    icon: GraduationCap,
  },
  {
    title: "Industry-Leading Accuracy",
    description:
      "We maintain 98%+ accuracy through rigorous QA, dual-coding protocols, and continuous performance monitoring.",
    icon: Target,
  },
  {
    title: "HIPAA-Compliant Operations",
    description:
      "Enterprise-grade security, encrypted communication, and strict access controls protect patient health information at every touchpoint.",
    icon: Shield,
  },
  {
    title: "Rapid Turnaround Time",
    description:
      "24–48 hour standard turnaround with flexible scaling to meet surge demands and maintain consistent cash flow.",
    icon: TimerReset,
  },
  {
    title: "US Regulatory Expertise",
    description:
      "Deep knowledge of CMS guidelines, payer-specific requirements, and state regulations ensures compliant coding nationwide.",
    icon: Layers3,
  },
  {
    title: "Dedicated Support Teams",
    description:
      "Account managers and coding supervisors provide personalized attention, regular reporting, and proactive communication.",
    icon: Headset,
  },
] as const;
