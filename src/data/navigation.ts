export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "HIPAA Compliance", href: "/compliance" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Medical Coding", href: "/services#medical-coding" },
      { label: "Dedicated Team Model", href: "/services#dedicated-team" },
    ],
  },
  { label: "Specialties", href: "/specialties" },
  // { label: "Process", href: "/process" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  // { label: "Resources", href: "/why-choose-us#resources" },
  { label: "Contact", href: "/contact" },
] as const;
