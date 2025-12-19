export const complianceSections = [
  {
    title: "HIPAA Compliance Overview",
    description:
      "Administrative, technical, and physical safeguards are governed by a dedicated compliance committee. Annual risk analyses and third-party audits verify adherence to HIPAA Privacy, Security, and Breach Notification Rules.",
  },
  {
    title: "Business Associate Agreement (BAA)",
    description:
      "We execute BAAs with every client, outlining permitted uses of PHI, safeguards, breach notification timelines, and subcontractor management.",
  },
  {
    title: "PHI Handling & Confidentiality",
    description:
      "Access to PHI is limited to coders, QA, and support staff who require it for assigned workloads. Minimum necessary standards, NDAs, and device controls protect sensitive data.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "User privileges follow least-privilege principles with SSO, MFA, automated provisioning, and quarterly access reviews.",
  },
  {
    title: "Data Encryption & Secure Storage",
    description:
      "PHI remains encrypted with AES-256 at rest and TLS 1.2+ in transit, hosted in SOC 2 assessed environments with continuous patching.",
  },
  {
    title: "Workforce Training & Confidentiality",
    description:
      "Employees complete HIPAA, privacy, and security training during onboarding and every six months thereafter, with exams verifying comprehension.",
  },
  {
    title: "Audit Logs, Monitoring & Risk Management",
    description:
      "System events, access logs, and coding actions are monitored 24/7 with SIEM tooling, tabletop exercises, and documented incident response.",
  },
];

export const compliancePrinciples = [
  {
    title: "Compliance-First Operations",
    description:
      "Every operational workflow is structured around HIPAA requirements before any PHI enters our environment. Safeguards are verified continuously to keep patient privacy uncompromised.",
  },
  {
    title: "Regulatory Alignment",
    description:
      "Policies track HIPAA Privacy & Security Rules, HITECH Act provisions, and CMS guidance. We update procedures promptly as privacy laws evolve.",
  },
  {
    title: "Core Operational Principle",
    description:
      "Privacy protection is embedded in our culture. Leadership, QA, and coders align decisions to maintain secure systems and transparent auditability.",
  },
];

export const complianceRules = [
  {
    title: "HIPAA Privacy Rule",
    description: "Complete adherence to PHI use and disclosure standards.",
  },
  {
    title: "HIPAA Security Rule",
    description: "Technical, physical, and administrative safeguards.",
  },
  {
    title: "HITECH Act",
    description: "Enhanced breach notification and accountability measures.",
  },
];

export const baaSteps = [
  {
    title: "BAA Negotiation & Review",
    description: "Collaborative review of agreement terms tailored to your requirements.",
  },
  {
    title: "Legal Execution",
    description: "Formal signing by authorized representatives from both organizations.",
  },
  {
    title: "Compliance Verification",
    description: "Confirmation that all safeguards and protocols are operational.",
  },
  {
    title: "Secure Data Exchange",
    description: "PHI handling begins only after full BAA execution and verification.",
  },
];

export const phiPractices = [
  {
    title: "Minimum Necessary Access",
    description:
      "Coders access only the PHI needed for assigned tasks, enforced by system-level restrictions and monitoring.",
  },
  {
    title: "Controlled Environments",
    description:
      "All PHI processing happens in secure, access-controlled environments with layered physical and network safeguards.",
  },
  {
    title: "Secure Workflow Architecture",
    description:
      "Purpose-built workflows route PHI through encrypted channels with mandatory authentication and documented approvals.",
  },
  {
    title: "Hardened Systems",
    description:
      "Dedicated, secured workstations for PHI access; personal devices and unsecured channels are prohibited.",
  },
];

export const accessControls = [
  {
    title: "Role Definition",
    description: "Precisely scoped job functions tied to specific data access requirements.",
  },
  {
    title: "Permission Assignment",
    description: "Least-privilege access granted through documented approvals and reviews.",
  },
  {
    title: "Authentication Controls",
    description: "MFA, strong password policies, and biometric options where applicable.",
  },
  {
    title: "Continuous Monitoring",
    description: "Real-time tracking of access patterns with automated alerts for anomalies.",
  },
  {
    title: "Immediate Revocation",
    description: "Instant credential deactivation when access is no longer required.",
  },
];

export const encryptionLayers = [
  {
    title: "Transmission Security",
    description:
      "All PHI transfers use encrypted channels (TLS 1.2+). SFTP/HTTPS enforced with certificate validation; no plaintext transmission.",
  },
  {
    title: "Storage Encryption",
    description:
      "AES-256 encryption for databases, file systems, and backups with managed keys and restricted access.",
  },
  {
    title: "Secure Infrastructure",
    description:
      "Hosted in SOC 2 evaluated environments with redundant power, climate control, and strong physical security.",
  },
  {
    title: "Backup Protection",
    description:
      "Encrypted backups with secure offsite storage and tested restoration procedures.",
  },
];

export const trainingItems = [
  {
    title: "Confidentiality Agreements",
    description:
      "All team members sign comprehensive NDAs acknowledging PHI protection obligations.",
  },
  {
    title: "Ongoing Refresher Training",
    description:
      "Regular updates on emerging threats, regulatory changes, and secure handling procedures.",
  },
  {
    title: "Security Awareness",
    description:
      "Continuous communications covering phishing, social engineering, and incident reporting.",
  },
];

export const monitoringItems = [
  {
    title: "Automated Alerting",
    description:
      "Immediate alerts for suspicious patterns enable rapid investigation and response.",
  },
  {
    title: "Quarterly Reviews",
    description:
      "Comprehensive security reviews identify enhancements and validate control effectiveness.",
  },
  {
    title: "External Assessments",
    description:
      "Regular third-party reviews provide independent validation and surface opportunities to strengthen controls.",
  },
];
