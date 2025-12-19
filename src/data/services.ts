import {
  ClipboardCheck,
  LineChart,
  Stethoscope,
  Users2,
} from "lucide-react";

export const coreServices = [
  {
    title: "Medical Coding",
    description:
      "Accurate ICD-10, CPT, and HCPCS coding by AAPC and AHIMA-certified professionals ensuring maximum reimbursement and minimal denials.",
    icon: Stethoscope,
  },
  {
    title: "Coding Audits & QA",
    description:
      "Comprehensive audit services that identify gaps, reduce compliance risk, and optimize coding accuracy across all specialties.",
    icon: ClipboardCheck,
  },
  {
    title: "Dedicated Coding Teams",
    description:
      "Scalable teams fully integrated into your workflow, providing consistent quality, proactive communication, and fast turnaround times.",
    icon: Users2,
  },
  {
    title: "Revenue Cycle Support",
    description:
      "End-to-end RCM support including charge capture, claims submission, denial management, and AR follow-up for improved cash flow.",
    icon: LineChart,
  },
] as const;
