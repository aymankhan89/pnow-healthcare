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
      { label: "Medical Coding", href: "/services/medical-coding" },
      { label: "Coding Audits & QA", href: "/services/coding-audits-qa" },
      { label: "Dedicated Coding Teams", href: "/services/dedicated-coding-teams" },
      { label: "Revenue Cycle Support", href: "/services/revenue-cycle-support" },
    ],
  },
  // { label: "Process", href: "/process" },
  // { label: "Resources", href: "/why-choose-us#resources" },
  { label: "Contact", href: "/contact" },
] as const;
