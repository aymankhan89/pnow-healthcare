export type LegalSection = {
  title: string;
  items: string[];
};

export type LegalPageContent = {
  badge: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export const legalContent: Record<string, LegalPageContent> = {
  hipaa: {
    badge: "HIPAA Privacy Policy",
    title: "HIPAA Privacy Policy",
    description:
      "This policy explains how PracticeNOW Healthcare (\"PNOW\") safeguards Protected Health Information (PHI) as a Business Associate under HIPAA. We only access, use, and disclose PHI in accordance with these terms and the executed Business Associate Agreement.",
    sections: [
      {
        title: "Use of Protected Health Information (PHI)",
        items: [
          "PHI is used strictly to perform medical coding, quality assurance, auditing, analytics, and reporting functions outlined in the Business Associate Agreement.",
          "De-identified or aggregated information may be leveraged to improve workflows and benchmarks; no patient identifiers are shared without written authorization.",
          "We do not sell, rent, or market PHI. Access is restricted to workforce members with a documented business need.",
        ],
      },
      {
        title: "Safeguards & Patient Rights",
        items: [
          "Administrative safeguards include HIPAA training, confidentiality agreements, sanctions policies, and incident response playbooks.",
          "Technical safeguards include SSO + MFA, role-based privileges, encryption, and continuous monitoring.",
          "Physical safeguards include secured facilities, clean desk policies, and hardware asset controls.",
          "Patients retain the right to request access, amendments, and accounting of disclosures through our clients. We support those requests promptly.",
        ],
      },
      {
        title: "Compliance & Breach Notification",
        items: [
          "We conduct annual HIPAA risk analyses, policy reviews, and workforce training refreshers.",
          "Any suspected privacy breach triggers investigation, containment, documentation, and notification in alignment with HIPAA Breach Notification Rule timelines.",
        ],
      },
    ],
  },
  security: {
    badge: "Data Security Policy",
    title: "Data Security Policy",
    description:
      "PNOW maintains layered security controls to preserve the confidentiality, integrity, and availability of client information across our platforms and services.",
    sections: [
      {
        title: "Data Protection Measures",
        items: [
          "Infrastructure is hosted in SOC 2 assessed environments with dedicated network segmentation and endpoint protection.",
          "All PHI and confidential data is encrypted at rest (AES-256) and in transit (TLS 1.2+).",
          "Backups are immutable, geo-redundant, and tested quarterly for restoration fidelity.",
        ],
      },
      {
        title: "Access Control",
        items: [
          "Role-based access, SSO, and MFA are enforced for every internal and client-facing system.",
          "Automated provisioning/de-provisioning maintains least-privilege access with quarterly reviews.",
        ],
      },
      {
        title: "Monitoring & Incident Response",
        items: [
          "Security information and event management (SIEM) tooling monitors logs 24/7 for anomalies.",
          "Documented playbooks guide containment, forensic investigation, notification, and lessons learned after any event.",
        ],
      },
    ],
  },
  terms: {
    badge: "Terms & Conditions",
    title: "Terms & Conditions",
    description:
      "These terms govern the access and use of PNOW services. By engaging PNOW, clients agree to comply with these terms in addition to any executed service order or Business Associate Agreement.",
    sections: [
      {
        title: "Service Usage",
        items: [
          "Services must be used solely for lawful medical coding, auditing, and revenue cycle functions.",
          "Clients remain responsible for providing accurate source documentation, timely access, and required approvals.",
        ],
      },
      {
        title: "Intellectual Property",
        items: [
          "All methodologies, software, training content, and deliverables authored by PNOW remain our intellectual property unless otherwise agreed in writing.",
        ],
      },
      {
        title: "Limitation of Liability",
        items: [
          "Except for willful misconduct, each party's liability is limited to the fees paid in the preceding twelve (12) months.",
        ],
      },
      {
        title: "Governing Law",
        items: [
          "The agreement is governed by the laws of the State of Illinois, without regard to conflict-of-law principles.",
        ],
      },
    ],
  },
  disclaimer: {
    badge: "Disclaimer",
    title: "Disclaimer",
    description:
      "PNOW provides medical coding and advisory services; we do not furnish medical, legal, or financial advice. Information shared through our website and reports is for general educational purposes only.",
    sections: [
      {
        title: "No Medical or Legal Advice",
        items: [
          "Recommendations are informational and should be validated with qualified medical and legal professionals.",
        ],
      },
      {
        title: "Information Accuracy",
        items: [
          "We strive for accuracy, yet coding guidance and payer rules change frequently; clients should confirm current requirements.",
        ],
      },
      {
        title: "Service Limitations",
        items: [
          "Engagement scope, SLAs, and responsibilities are defined within executed statements of work and BAAs.",
        ],
      },
    ],
  },
};
