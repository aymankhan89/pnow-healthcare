type NavLink = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Specialties", href: "/specialties" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
  },
  { label: "HIPAA Compliance", href: "/compliance" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "E/M Coding (Office & Clinic Visits)", href: "/services/em-coding" },
      { label: "Emergency Department (ED) Coding", href: "/services/emergency-department-coding" },
      { label: "HCC & Risk Adjustment Coding", href: "/services/hcc-risk-adjustment-coding" },
      { label: "Radiology Coding", href: "/services/radiology-coding" },
    ],
  },
  // { label: "Process", href: "/process" },
  // { label: "Resources", href: "/why-choose-us#resources" },
  { label: "Contact", href: "/contact" },
] as const;
