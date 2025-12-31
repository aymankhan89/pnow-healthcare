import type { SVGProps } from "react";
import { Linkedin, Mail } from "lucide-react";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="X logo"
    {...props}
  >
    <path d="M3 3h4.61L12 8.23 16.39 3H21l-7 8.04L21 21h-4.61L12 15.77 7.61 21H3l7-8.04L3 3z" />
  </svg>
);

export const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Medical Coding Services", href: "/services#medical-coding" },
      { label: "Dedicated Team Model", href: "/services#dedicated-team" },
      { label: "HIPAA Compliance", href: "/compliance" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
  {
    heading: "Expertise",
    links: [
      { label: "E/M Coding (Office & Clinic Visits)", href: "/services" },
      { label: "Emergency Department (ED) Coding", href: "/services" },
      { label: "HCC & Risk Adjustment Coding", href: "/services" },
      { label: "Radiology Coding", href: "/services" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "HIPAA Privacy Policy", href: "/legal/hipaa-privacy-policy" },
      { label: "Data Security Policy", href: "/legal/data-security-policy" },
      { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
    ],
  },
] as const;

export const contactItems = [
  {
    label: "info@pnowhealtcare.com",
    icon: Mail,
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    label: "X",
    icon: XIcon,
  },
] as const;
