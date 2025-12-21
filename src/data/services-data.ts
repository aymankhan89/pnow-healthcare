export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  benefits: string[];
  process: string[];
  ctaText: string;
}

export const servicesData: Service[] = [
  {
    id: "medical-coding",
    slug: "medical-coding",
    title: "Medical Coding",
    shortDescription: "Accurate ICD-10, CPT, and HCPCS coding by AAPC and AHIMA-certified professionals ensuring maximum reimbursement and minimal denials.",
    fullDescription: "Our comprehensive medical coding services cover all specialties and care settings. We employ certified coders who stay current with the latest coding guidelines, payer policies, and regulatory changes to ensure your claims are coded correctly the first time.",
    iconName: "Stethoscope",
    features: [
      "CPT, ICD-10-CM, ICD-10-PCS, and HCPCS coding",
      "Multi-specialty coding expertise",
      "Payer-specific coding guidelines",
      "Regular coding updates and training",
      "Quality assurance and audit support"
    ],
    benefits: [
      "99.8% accuracy rate",
      "Reduced claim denials",
      "Maximized reimbursement",
      "Compliance with coding standards",
      "Faster claims processing"
    ],
    process: [
      "Initial assessment and workflow analysis",
      "Coder assignment and training",
      "Quality assurance implementation",
      "Regular performance monitoring",
      "Continuous improvement and optimization"
    ],
    ctaText: "Get Started with Medical Coding"
  },
  {
    id: "coding-audits-qa",
    slug: "coding-audits-qa",
    title: "Coding Audits & QA",
    shortDescription: "Comprehensive audit services that identify gaps, reduce compliance risk, and optimize coding accuracy across all specialties.",
    fullDescription: "Our coding audit and quality assurance services help healthcare organizations identify coding errors, compliance issues, and revenue opportunities. We provide detailed analysis and actionable recommendations to improve coding accuracy and financial performance.",
    iconName: "ClipboardCheck",
    features: [
      "Comprehensive coding audits",
      "Quality assurance reviews",
      "Compliance risk assessments",
      "Revenue opportunity identification",
      "Detailed reporting and recommendations"
    ],
    benefits: [
      "Improved coding accuracy",
      "Reduced compliance risk",
      "Increased revenue capture",
      "Better documentation practices",
      "Enhanced audit readiness"
    ],
    process: [
      "Audit scope and methodology planning",
      "Sample selection and review",
      "Error identification and analysis",
      "Report generation and recommendations",
      "Implementation support and follow-up"
    ],
    ctaText: "Schedule a Coding Audit"
  },
  {
    id: "dedicated-coding-teams",
    slug: "dedicated-coding-teams",
    title: "Dedicated Coding Teams",
    shortDescription: "Scalable teams fully integrated into your workflow, providing consistent quality, proactive communication, and fast turnaround times.",
    iconName: "Users2",
    fullDescription: "Our dedicated coding teams become an extension of your staff, providing consistent, high-quality coding services that integrate seamlessly with your existing workflows. Each team is customized to meet your specific needs and requirements.",
    features: [
      "Dedicated certified coders",
      "Customized team composition",
      "Integrated workflow management",
      "Regular performance reporting",
      "Flexible scaling options"
    ],
    benefits: [
      "Consistent coding quality",
      "Faster turnaround times",
      "Reduced training costs",
      "Scalable capacity",
      "Proactive communication"
    ],
    process: [
      "Requirements assessment",
      "Team composition and training",
      "Workflow integration",
      "Performance monitoring",
      "Continuous optimization"
    ],
    ctaText: "Build Your Dedicated Team"
  },
  {
    id: "revenue-cycle-support",
    slug: "revenue-cycle-support",
    title: "Revenue Cycle Support",
    shortDescription: "End-to-end RCM support including charge capture, claims submission, denial management, and AR follow-up for improved cash flow.",
    iconName: "LineChart",
    fullDescription: "Complete revenue cycle management support to optimize your financial performance. From charge capture to payment collection, we provide comprehensive services to ensure maximum reimbursement and efficient cash flow.",
    features: [
      "Charge capture and entry",
      "Claims submission and follow-up",
      "Denial management and appeals",
      "Accounts receivable management",
      "Financial reporting and analytics"
    ],
    benefits: [
      "Improved cash flow",
      "Reduced days in accounts receivable",
      "Higher collection rates",
      "Better financial visibility",
      "Optimized reimbursement"
    ],
    process: [
      "Process assessment and optimization",
      "Workflow implementation",
      "Performance monitoring",
      "Issue resolution and improvement",
      "Regular reporting and analysis"
    ],
    ctaText: "Optimize Your Revenue Cycle"
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug);
};
