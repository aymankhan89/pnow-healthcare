import { BadgeCheck, Lock, ShieldCheck } from "lucide-react";

export const securityColumns = [
  {
    title: "HIPAA Compliance",
    bullets: [
      "Business Associate Agreements",
      "Regular compliance audits",
      "Staff training and certification",
      "Incident response protocols",
    ],
    stat: {
      value: "98%",
      label: "Coding Accuracy",
      sublabel: "Consistently exceeding industry benchmarks",
    },
    icon: ShieldCheck,
  },
  {
    title: "Data Security",
    bullets: [
      "256-bit encryption at rest and in transit",
      "Multi-factor authentication",
      "Secure VPN access only",
      "Regular penetration testing",
    ],
    stat: {
      value: "100%",
      label: "HIPAA Compliant",
      sublabel: "Zero security breaches since inception",
    },
    icon: Lock,
  },
  {
    title: "Quality Assurance",
    bullets: [
      "Dual-coding verification process",
      "Random sample auditing",
      "Continuous coder education",
      "Performance scorecards",
    ],
    stat: {
      value: "24–48h",
      label: "Turnaround Time",
      sublabel: "Fast processing without compromise",
    },
    icon: BadgeCheck,
  },
] as const;
