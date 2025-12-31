type ContentSection = {
  heading: string;
  description?: string;
  bullets?: string[];
};

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
  contentSections?: ContentSection[];
}

export const servicesData: Service[] = [
  {
    id: "hcc-risk-adjustment-coding",
    slug: "hcc-risk-adjustment-coding",
    title: "HCC & Risk Adjustment Coding",
    shortDescription: "Compliant risk adjustment coding that captures chronic conditions to protect RAF scores and reimbursement.",
    fullDescription: "Hierarchical Condition Category (HCC) coding translates documented diagnoses into risk scores that reflect patient complexity and drive Medicare Advantage reimbursement. We code strictly to documentation to protect revenue and audit readiness.",
    iconName: "LineChart",
    features: [
      "Accurate ICD-10-CM assignment aligned to current CMS HCC models",
      "Validation of diagnosis specificity and documentation support",
      "Identification of missed but documented chronic conditions",
      "Query support for clarification without assumption-based coding",
      "Independent QA review focused on compliance and audit readiness",
    ],
    benefits: [
      "Protects Risk Adjustment Factor (RAF) scores and reimbursement levels",
      "Supports compliance with CMS risk adjustment programs",
      "Strengthens audit readiness and regulatory confidence",
      "Reduces underpayment from missed chronic conditions",
      "Minimizes penalties tied to unsupported coding",
    ],
    process: [
      "Dedicated HCC-trained coders assigned to your populations",
      "Leadership oversight with structured QA and audit workflows",
      "Secure, HIPAA-compliant access to documentation and systems",
      "Clear reporting on captured, missed, and unsupported conditions",
      "Ongoing model update monitoring and documentation guidance",
    ],
    ctaText: "Improve RAF Accuracy",
    contentSections: [
      {
        heading: "Overview: What is HCC & Risk Adjustment Coding?",
        description:
          "HCC coding captures overall health status by translating documented diagnoses into risk scores. It is about accurately reflecting patient complexity in a compliant, auditable way.",
      },
      {
        heading: "Why HCC & Risk Adjustment Coding is Important",
        bullets: [
          "Risk Adjustment Factor (RAF) scores",
          "Appropriate reimbursement levels",
          "Compliance with CMS risk adjustment programs",
          "Financial stability for Medicare Advantage providers",
          "Audit readiness and regulatory confidence",
        ],
      },
      {
        heading: "Common Challenges in HCC Coding",
        bullets: [
          "Chronic conditions must be documented and recaptured annually",
          "Strict MEAT criteria must be met",
          "High audit scrutiny from CMS and RADV programs",
          "Frequent updates to HCC models and ICD-10 mappings",
          "Risk of overcoding or unsupported diagnosis selection",
          "Documentation gaps in provider notes",
        ],
      },
      {
        heading: "Our Approach to Understanding HCC Coding",
        description:
          "We code strictly to what is documented and supported—no assumption-based coding.",
        bullets: [
          "Comprehensive review of provider documentation across encounters",
          "Chronic condition history and prior-year diagnoses",
          "Current CMS HCC guidelines and model updates",
          "Diagnosis specificity and clinical relevance",
        ],
      },
      {
        heading: "How We Perform HCC Coding Efficiently",
        description: "Our methodology balances revenue integrity with regulatory safety.",
        bullets: [
          "Accurate ICD-10-CM code assignment aligned with CMS HCC models",
          "Validation of diagnosis specificity and documentation support",
          "Identification of missed but documented chronic conditions",
          "Query support where documentation clarification is required",
          "Independent QA review to ensure compliance and audit readiness",
        ],
      },
      {
        heading: "How We Deliver HCC Coding Services",
        description:
          "Our goal is to improve risk score accuracy while maintaining full compliance.",
        bullets: [
          "Dedicated HCC-trained coders",
          "Experienced leadership oversight",
          "Structured QA and audit workflows",
          "Secure access and HIPAA-compliant systems",
          "Clear reporting on captured, missed, and unsupported conditions",
        ],
      },
    ],
  },
  {
    id: "emergency-department-coding",
    slug: "emergency-department-coding",
    title: "Emergency Department (ED) Coding",
    shortDescription: "High-acuity ED encounters coded with accurate CPT, ICD-10-CM, and E/M levels for compliant, timely reimbursement.",
    fullDescription: "ED coding assigns accurate codes for emergency care that reflect medical necessity, complexity, and intensity. We keep pace with high-volume, time-sensitive environments without sacrificing quality.",
    iconName: "Activity",
    features: [
      "Accurate CPT, ICD-10-CM, and E/M code assignment for ED encounters",
      "Compliance-focused E/M level selection with payer alignment",
      "Documentation-driven review of tests, procedures, and treatments",
      "Facility versus professional component handling",
      "Rapid turnaround supported by QA checks",
    ],
    benefits: [
      "Appropriate reimbursement for complex emergency services",
      "Compliance with CMS and payer-specific requirements",
      "Reduced claim denials and rework",
      "Proper representation of acuity and resource utilization",
      "Predictable revenue even at high volumes",
    ],
    process: [
      "ED-experienced coding professionals assigned to your queues",
      "Same-day or next-day turnaround capability (volume-dependent)",
      "Structured QA and audit oversight for consistency",
      "Secure, HIPAA-compliant access and workflows",
      "Transparent communication and reporting",
    ],
    ctaText: "Stabilize ED Coding",
    contentSections: [
      {
        heading: "Overview: What is Emergency Department Coding?",
        description:
          "ED coding assigns accurate CPT, ICD-10-CM, and E/M codes for emergency care encounters to reflect medical necessity, complexity, and intensity.",
      },
      {
        heading: "Why ED Coding is Critical",
        description:
          "Given the volume and urgency of ED encounters, coding accuracy directly impacts revenue and compliance.",
        bullets: [
          "Appropriate reimbursement for complex emergency services",
          "Compliance with CMS and payer-specific requirements",
          "Reduced claim denials and rework",
          "Proper representation of acuity and resource utilization",
        ],
      },
      {
        heading: "Challenges in Emergency Department Coding",
        description: "Errors in ED coding can lead to lost revenue, audits, or compliance exposure.",
        bullets: [
          "High patient volumes and rapid throughput",
          "Incomplete or fragmented documentation",
          "Complex E/M leveling requirements",
          "Multiple diagnoses and procedures per encounter",
          "Payer scrutiny and denial risk",
          "Tight turnaround expectations",
        ],
      },
      {
        heading: "How We Understand ED Encounters",
        description: "We ensure coding is documentation-driven and guideline-compliant.",
        bullets: [
          "Provider documentation and clinical notes",
          "Medical Decision Making (MDM) components",
          "Diagnostic tests, procedures, and treatments performed",
          "Final diagnoses and clinical impressions",
          "Facility vs. professional coding requirements",
        ],
      },
      {
        heading: "How We Code ED Services Efficiently",
        description: "Every chart undergoes quality checks before delivery.",
        bullets: [
          "Accurate CPT, ICD-10-CM, and E/M code assignment",
          "Compliance-focused E/M level selection",
          "Alignment with CMS and payer-specific ED guidelines",
          "Rapid turnaround without sacrificing quality",
          "QA audits to ensure consistency and accuracy",
        ],
      },
      {
        heading: "How We Deliver ED Coding Support",
        description: "We help ED providers maintain accuracy even under high-pressure environments.",
        bullets: [
          "ED-experienced coding professionals",
          "Same-day or next-day turnaround capability (volume-dependent)",
          "Structured QA and audit oversight",
          "Secure, HIPAA-compliant access and workflows",
          "Transparent communication and reporting",
        ],
      },
    ],
  },
  {
    id: "em-coding",
    slug: "em-coding",
    title: "E/M Coding (Office & Clinic Visits)",
    shortDescription: "Office and clinic E/M coding with precise MDM or time-based level selection and specialty-specific expertise.",
    fullDescription: "Evaluation and Management coding represents provider services for office and clinic visits. It is highly audited, so we align documentation with current CMS rules to ensure accurate, compliant billing.",
    iconName: "Stethoscope",
    features: [
      "Correct level selection based on MDM or time",
      "Verification of documentation support for every element",
      "Specialty-specific interpretation for outpatient care",
      "QA audits for accuracy and consistency",
      "Feedback loops to improve documentation quality",
    ],
    benefits: [
      "Fair and accurate reimbursement",
      "Compliance with CMS and payer rules",
      "Reduced audit and repayment risk",
      "Clear documentation of provider effort and patient complexity",
      "Lower risk of overcoding or undercoding",
    ],
    process: [
      "E/M-specialized coding professionals",
      "Consistent quality assurance processes",
      "Clear productivity and quality reporting",
      "HIPAA-compliant systems and access controls",
      "Reliable turnaround times",
    ],
    ctaText: "Strengthen E/M Accuracy",
    contentSections: [
      {
        heading: "Overview: What is E/M Coding?",
        description:
          "E/M codes represent provider services for office and clinic encounters and reflect the complexity of medical decision making or time. E/M coding is one of the most frequently audited areas in medical coding.",
      },
      {
        heading: "Why Accurate E/M Coding Matters",
        description: "Even small E/M errors can lead to significant compliance issues.",
        bullets: [
          "Fair and accurate reimbursement",
          "Compliance with CMS and payer rules",
          "Reduced audit and repayment risk",
          "Clear documentation of provider effort and patient complexity",
        ],
      },
      {
        heading: "Common Challenges in E/M Coding",
        description: "Without expert review, E/M coding errors are common.",
        bullets: [
          "Frequent CMS guideline updates",
          "Complexity of MDM elements",
          "Time-based documentation requirements",
          "Specialty-specific interpretation differences",
          "Risk of overcoding or undercoding",
        ],
      },
      {
        heading: "How We Interpret E/M Documentation",
        description: "We strictly follow current CMS E/M guidelines to ensure accuracy.",
        bullets: [
          "Medical Decision Making (problems, data, risk)",
          "Time documentation when applicable",
          "Diagnosis complexity and management decisions",
          "Tests reviewed, referrals, and treatments ordered",
        ],
      },
      {
        heading: "How We Code E/M Services",
        description: "We focus on accurate representation, not aggressive coding.",
        bullets: [
          "Correct level selection based on MDM or time",
          "Verification of documentation support",
          "Specialty-specific coding knowledge",
          "QA audits for accuracy and consistency",
          "Feedback loops for documentation improvement",
        ],
      },
      {
        heading: "How We Deliver E/M Coding Services",
        bullets: [
          "E/M-specialized coding professionals",
          "Consistent quality assurance processes",
          "Clear productivity and quality reporting",
          "HIPAA-compliant systems and access controls",
          "Reliable turnaround times",
        ],
      },
    ],
  },
  {
    id: "radiology-coding",
    slug: "radiology-coding",
    title: "Radiology Coding",
    shortDescription: "Diagnostic and interventional radiology coding with precise modifier use and payer-specific compliance.",
    fullDescription: "Radiology coding assigns accurate CPT, ICD-10-CM, and HCPCS codes for imaging and interventional services, accounting for technical and professional components.",
    iconName: "Scan",
    features: [
      "Accurate CPT and ICD-10-CM assignment across imaging modalities",
      "Proper use of modifiers for professional vs. technical components",
      "Verification of bundling and unbundling rules",
      "Compliance with CMS and payer-specific imaging guidelines",
      "QA audits to ensure accuracy and consistency",
    ],
    benefits: [
      "Accurate reimbursement for imaging services",
      "Compliance with CMS and payer policies",
      "Proper reporting of technical and professional components",
      "Reduction of claim denials and rework",
      "Protection against audits and payment recoupments",
    ],
    process: [
      "Radiology-trained and experienced coders",
      "Dedicated QA and audit oversight",
      "Secure, HIPAA-compliant access",
      "Timely turnaround based on volume",
      "Transparent reporting and communication",
    ],
    ctaText: "Elevate Radiology Compliance",
    contentSections: [
      {
        heading: "Overview: What is Radiology Coding?",
        description:
          "Radiology coding assigns accurate CPT, ICD-10-CM, and HCPCS codes for diagnostic imaging and interventional radiology services, accounting for imaging techniques, contrast usage, supervision and interpretation rules, and payer requirements.",
      },
      {
        heading: "Why Accurate Radiology Coding is Important",
        description:
          "Radiology services are frequently scrutinized due to high costs and complex billing rules, making accuracy critical.",
        bullets: [
          "Accurate reimbursement for imaging services",
          "Compliance with CMS and payer policies",
          "Proper reporting of technical and professional components",
          "Reduction of claim denials and rework",
          "Protection against audits and payment recoupments",
        ],
      },
      {
        heading: "Challenges in Radiology Coding",
        description: "Even minor coding errors can result in denials or compliance issues.",
        bullets: [
          "Differentiating between technical and professional components",
          "Complex CPT coding guidelines and modifiers",
          "Bundling and unbundling rules",
          "Contrast vs. non-contrast documentation requirements",
          "Frequent payer policy changes",
          "Interventional radiology procedure complexity",
          "Medical necessity documentation requirements",
        ],
      },
      {
        heading: "How We Understand Radiology Documentation",
        description:
          "We ensure coding reflects what was performed and documented, not assumptions.",
        bullets: [
          "Radiology reports and provider interpretations",
          "Imaging modality and technique used",
          "Contrast administration details",
          "Laterality and anatomical specificity",
          "Supervision, interpretation, and report documentation",
          "Medical necessity and clinical indications",
        ],
      },
      {
        heading: "How We Code Radiology Services Efficiently",
        description: "Our approach ensures compliance, accuracy, and revenue integrity.",
        bullets: [
          "Accurate CPT and ICD-10-CM code assignment",
          "Proper use of modifiers for professional vs. technical components",
          "Compliance with CMS and payer-specific imaging guidelines",
          "Verification of bundling and unbundling rules",
          "QA audits for accuracy and consistency",
        ],
      },
      {
        heading: "Radiology Services We Support",
        bullets: [
          "Diagnostic Radiology (X-ray, CT, MRI, Ultrasound)",
          "Nuclear Medicine",
          "Interventional Radiology",
          "Fluoroscopy",
          "Contrast and non-contrast imaging",
          "Facility and professional component coding",
        ],
      },
      {
        heading: "How We Deliver Radiology Coding Services",
        description:
          "We help radiology providers maintain compliance while optimizing coding accuracy.",
        bullets: [
          "Radiology-trained and experienced coders",
          "Dedicated QA and audit oversight",
          "Secure, HIPAA-compliant access",
          "Timely turnaround based on volume",
          "Transparent reporting and communication",
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug);
};
