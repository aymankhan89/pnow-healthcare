import { Activity, LineChart, Scan, Stethoscope } from "lucide-react";

export const coreServices = [
  {
    title: "E/M Coding (Office & Clinic Visits)",
    description:
      "Precise MDM or time-based E/M level selection for office and clinic visits with specialty-specific expertise.",
    icon: Stethoscope,
  },
  {
    title: "Emergency Department (ED) Coding",
    description:
      "High-acuity ED encounters coded with accurate CPT, ICD-10-CM, and compliant E/M levels at rapid turnaround.",
    icon: Activity,
  },
  {
    title: "HCC & Risk Adjustment Coding",
    description:
      "Compliant HCC capture that protects RAF scores, ensures audit readiness, and reflects true patient complexity.",
    icon: LineChart,
  },
  {
    title: "Radiology Coding",
    description:
      "Diagnostic and interventional radiology coding with precise modifier use, bundling checks, and payer-specific compliance.",
    icon: Scan,
  },
] as const;
