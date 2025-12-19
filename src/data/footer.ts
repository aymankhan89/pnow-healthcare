import { Linkedin, Mail, PhoneCall, Twitter } from "lucide-react";

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
      { label: "Hospital Systems", href: "/about" },
      { label: "Ambulatory & Clinics", href: "/services#medical-coding" },
      { label: "Specialty Partners", href: "/about" },
      { label: "Telehealth Coding", href: "/services#medical-coding" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "HIPAA Privacy Policy", href: "/hipaa-privacy" },
      { label: "Data Security Policy", href: "/data-security-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
] as const;

export const contactItems = [
  {
    label: "(800) 555-9082",
    icon: PhoneCall,
  },
  {
    label: "hello@pnowhealth.com",
    icon: Mail,
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    icon: Twitter,
  },
] as const;
