import {
  BadgeCheck,
  Clock4,
  PiggyBank,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const reasons = [
  {
    title: "Certified Coding Professionals",
    description:
      "100% AAPC and AHIMA-certified coders with specialty credentials deliver precision you can measure.",
    icon: BadgeCheck,
  },
  {
    title: "Accuracy & Quality Standards",
    description:
      "Dual-coding, peer review, and QA automation keep accuracy at 98.5%+ across all modalities.",
    icon: ShieldCheck,
  },
  {
    title: "Compliance-First Approach",
    description:
      "Policies align to HIPAA, CMS, HCC, and payer-specific directives with documented controls and BAAs.",
    icon: Scale,
  },
  {
    title: "Turnaround Time",
    description:
      "Standard 12h turnaround with stat coverage for urgent encounters and weekend work queues.",
    icon: Clock4,
  },
  {
    title: "Scalability & Flexibility",
    description:
      "Dedicated pods scale with new sites, seasonal surges, or acquisitions without sacrificing oversight.",
    icon: UsersRound,
  },
  {
    title: "Cost Efficiency",
    description:
      "Predictable, outcome-based pricing eliminates overtime, recruiting expense, and attrition risk.",
    icon: PiggyBank,
  },
];

export const faqs = [
  {
    category: "Services & Specialties",
    question: "Which specialties do you cover?",
    answer:
      "We support 30+ specialties including hospital medicine, cardiology, orthopedics, oncology, ED, urgent care, and telehealth programs.",
  },
  {
    category: "Compliance & Security",
    question: "How do you handle HIPAA compliance?",
    answer:
      "We execute BAAs with every partner, enforce role-based access with MFA, encrypt all data, and audit activity with SIEM monitoring.",
  },
  {
    category: "Turnaround Time",
    question: "What turnaround can we expect?",
    answer:
      "Standard production queues are completed within 24–48 hours with stat same-day coverage for priority cases.",
  },
  {
    category: "Software & Access",
    question: "Do you work inside our EHR?",
    answer:
      "Yes. We integrate directly with Epic, Cerner, Meditech, Athenahealth, eClinicalWorks, and specialty systems using secure VPN access.",
  },
  {
    category: "Onboarding & Support",
    question: "What does onboarding look like?",
    answer:
      "A structured blueprint covers discovery, credentialing, workflow documentation, pilot validation, and weekly steering meetings.",
  },
];

export const resources = [
  {
    title: "Medical Coding Insights",
    description:
      "Quarterly benchmarks on denial trends, specialty accuracy, and payer updates.",
  },
  {
    title: "Compliance Updates",
    description:
      "HIPAA, CMS, and commercial payer rule changes summarized for revenue cycle teams.",
  },
  {
    title: "Industry Guidelines",
    description:
      "Best practices for documentation improvement, audit readiness, and coder education.",
  },
  {
    title: "Blogs & Articles",
    description:
      "Actionable tips for scaling coding programs, automation, and analytics adoption.",
  },
];
