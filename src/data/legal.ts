export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  badge: string;
  title: string;
  effectiveDate: string;
  updatedDate: string;
  intro: string;
  preamble?: string[];
  sections: LegalSection[];
};

export type LegalSlug =
  | "hipaa-privacy-policy"
  | "data-security-policy"
  | "disclaimer"
  | "terms-and-conditions";

export const legalContent: Record<LegalSlug, LegalPageContent> = {
  "hipaa-privacy-policy": {
    badge: "HIPAA Privacy Policy",
    title: "HIPAA Privacy Policy",
    effectiveDate: "01/01/2026",
    updatedDate: "01/01/2026",
    intro:
      "ProficientNow Health Care (“Company,” “we,” “our,” or “us”) is committed to protecting the privacy, confidentiality, and security of Protected Health Information (“PHI”) in compliance with HIPAA, the HITECH Act, and all applicable federal and state healthcare privacy laws. This policy explains how PHI is accessed, used, disclosed, protected, and safeguarded in the course of providing medical coding and related healthcare support services.",
    sections: [
      {
        title: "1. Our Role and Responsibilities Under HIPAA",
        paragraphs: [
          "ProficientNow Health Care functions as a Business Associate to healthcare providers, hospitals, clinics, physician groups, billing companies, and other Covered Entities as defined under HIPAA. We do not act as a Covered Entity and do not provide direct patient care.",
          "We access PHI only to perform services on behalf of our clients and only after a valid Business Associate Agreement (BAA) is in place.",
        ],
        bullets: [
          "Access occurs only when authorized by a Covered Entity.",
          "A signed BAA is required before PHI is created, received, maintained, or transmitted.",
          "PHI is accessed solely for purposes permitted under HIPAA and applicable law.",
        ],
      },
      {
        title: "2. Types of Information We Handle",
        paragraphs: [
          "In the course of delivering services, ProficientNow Health Care may handle the following categories of information:",
        ],
        bullets: [
          "Protected Health Information (PHI) and patient demographics",
          "Clinical and encounter documentation",
          "Diagnosis, procedure, treatment, and medical history details",
          "Coding and billing-related data",
          "Provider, facility, and operational data",
          "We do not intentionally collect PHI directly from patients through this website.",
        ],
      },
      {
        title: "3. Permitted Uses and Disclosures of PHI",
        bullets: [
          "Performing medical coding services and related quality assurance and audit functions",
          "Reviewing documentation for accuracy and compliance",
          "Supporting administrative and operational functions requested by the Covered Entity",
          "Complying with legal, regulatory, or governmental requirements",
          "Responding to lawful requests from Covered Entities",
          "PHI is never sold, rented, or used for marketing purposes.",
        ],
      },
      {
        title: "4. Minimum Necessary Standard",
        paragraphs: [
          "We apply the Minimum Necessary Standard to every PHI interaction. Access is limited to what is required for assigned duties.",
        ],
        bullets: [
          "Role-based access permissions define who can view specific PHI.",
          "PHI is not accessed, used, or disclosed beyond the defined scope of services.",
        ],
      },
      {
        title: "5. Administrative Safeguards",
        bullets: [
          "Documented HIPAA Privacy and Security policies and procedures",
          "Designated compliance oversight and governance",
          "Workforce training on HIPAA, privacy, and data security",
          "Confidentiality and non-disclosure agreements",
          "Incident response and breach management processes",
          "Ongoing compliance reviews and internal audits",
        ],
      },
      {
        title: "6. Technical Safeguards",
        bullets: [
          "Secure authentication mechanisms with unique user identification",
          "Role-based access controls and least-privilege permissions",
          "Encryption of data in transit and at rest",
          "Secure system configurations and access restrictions",
          "Logging, monitoring, and audit trails for system activity",
          "Regular system updates and security maintenance",
        ],
      },
      {
        title: "7. Physical Safeguards",
        bullets: [
          "Restricted access to office premises and controlled workstations",
          "Secure work environments with clean desk practices",
          "Protection against unauthorized access to systems and records",
          "Secure handling, storage, and disposal of physical documents",
        ],
      },
      {
        title: "8. Workforce Privacy and Confidentiality",
        bullets: [
          "Mandatory HIPAA and privacy training for employees, contractors, and authorized personnel",
          "Signed confidentiality and non-disclosure agreements",
          "PHI access granted strictly based on job role",
          "Disciplinary action for privacy or security violations",
        ],
      },
      {
        title: "9. Business Associate Agreement (BAA)",
        paragraphs: [
          "A HIPAA-compliant BAA is executed with each client before PHI is accessed or processed. The BAA defines permitted uses, safeguards, breach notification responsibilities, subcontractor requirements, and PHI return or destruction upon termination.",
        ],
      },
      {
        title: "10. Subcontractors and Third Parties",
        bullets: [
          "Vendors are evaluated for appropriate security practices.",
          "Access to PHI is limited and controlled based on necessity.",
          "Contractual safeguards are applied where required.",
          "Compliance obligations are enforced in accordance with HIPAA.",
        ],
      },
      {
        title: "11. Data Retention and Secure Disposal",
        bullets: [
          "PHI is retained only as long as necessary to fulfill contractual, legal, or regulatory obligations.",
          "Upon termination or completion of services, PHI is returned to the Covered Entity or securely destroyed.",
          "Secure deletion and disposal methods align with the BAA and applicable laws.",
        ],
      },
      {
        title: "12. Breach Detection and Notification",
        bullets: [
          "Suspected or confirmed breaches of unsecured PHI are investigated immediately.",
          "Containment and mitigation measures are applied without delay.",
          "Covered Entities are notified without unreasonable delay.",
          "We support breach assessment, reporting, and compliance with HIPAA breach notification requirements.",
        ],
      },
      {
        title: "13. Website Privacy and Online Interactions",
        paragraphs: [
          "Our website may collect limited non-PHI information such as IP addresses, browser and device details, pages visited, and contact form submissions. Visitors should not submit PHI through website forms, email, or other unsecured channels.",
        ],
      },
      {
        title: "14. Changes to This HIPAA Privacy Policy",
        paragraphs: [
          "We may update this HIPAA Privacy Policy to reflect changes in laws, regulations, or internal practices. Revised versions will be posted on this page with an updated effective date.",
        ],
      },
      {
        title: "15. Contact Information",
        paragraphs: [
          "For questions about this HIPAA Privacy Policy or our privacy practices, contact:",
          "ProficientNow Health Care",
          "Email: privacy@proficientnow.com",
          "Address: Sanali Info Park, 1st Floor, A Block, 8-2-120/113, Road No. 2, Banjara Hills, Hyderabad - 500034",
        ],
      },
    ],
  },
  "data-security-policy": {
    badge: "Data Security Policy",
    title: "Data Security Policy",
    effectiveDate: "01/01/2026",
    updatedDate: "01/01/2026",
    intro:
      'ProficientNow Health Care ("Company," "we," "our," or "us") is committed to protecting the confidentiality, integrity, and availability of all information entrusted to us, including Protected Health Information ("PHI"), confidential client data, and business information.',
    preamble: [
      "This Data Security Policy outlines the administrative, technical, and physical safeguards implemented by ProficientNow Health Care in compliance with the Health Insurance Portability and Accountability Act (HIPAA), the Health Information Technology for Economic and Clinical Health Act (HITECH), and applicable U.S. healthcare data protection regulations.",
    ],
    sections: [
      {
        title: "1. Purpose of This Policy",
        bullets: [
          "Protect PHI and sensitive information from unauthorized access, use, or disclosure",
          "Ensure secure handling of healthcare data throughout its lifecycle",
          "Maintain compliance with HIPAA, HITECH, and contractual obligations",
          "Establish clear security responsibilities and controls",
          "Reduce the risk of data breaches, loss, or misuse",
        ],
      },
      {
        title: "2. Scope",
        bullets: [
          "All employees, contractors, and authorized personnel",
          "All systems, networks, applications, and infrastructure",
          "All data processed, stored, or transmitted during service delivery",
          "All physical and electronic environments used by the Company",
        ],
      },
      {
        title: "3. Data Classification",
        bullets: [
          "Protected Health Information (PHI): Individually identifiable health information received from Covered Entities and handled under a Business Associate Agreement.",
          "Confidential Client Data: Business, operational, and contractual information belonging to clients.",
          "Internal Business Information: Company operational, financial, and administrative data.",
        ],
        paragraphs: ["Each category is protected according to its sensitivity and regulatory requirements."],
      },
      {
        title: "4. Administrative Safeguards",
        bullets: [
          "Documented security and privacy policies",
          "Defined access authorization procedures",
          "Workforce background verification where applicable",
          "Mandatory HIPAA and data security training",
          "Confidentiality and non-disclosure agreements",
          "Defined roles and responsibilities for data protection",
          "Incident response and escalation procedures",
          "Periodic security risk assessments",
        ],
      },
      {
        title: "5. Access Control & User Management",
        bullets: [
          "Role-based access control (RBAC)",
          "Minimum necessary access principle",
          "Unique user IDs and credentials",
          "Secure authentication mechanisms",
          "Immediate access modification or revocation upon role change or termination",
          "Restricted administrative and privileged access",
          "Only authorized personnel may access sensitive data required for their job function.",
        ],
      },
      {
        title: "6. Technical Safeguards",
        bullets: [
          "Encryption of data in transit and at rest",
          "Secure system configurations and hardened environments",
          "Firewalls and intrusion prevention mechanisms",
          "System monitoring and activity logging",
          "Audit trails for access and system usage",
          "Regular patching and system updates",
          "Secure backup and disaster recovery processes",
        ],
        paragraphs: ["These safeguards help prevent unauthorized access and data compromise."],
      },
      {
        title: "7. Physical Safeguards",
        bullets: [
          "Restricted access to office premises",
          "Controlled workstation access",
          "Secure server and network environments",
          "Visitor access controls where applicable",
          "Protection of physical records and devices",
        ],
      },
      {
        title: "8. Data Transmission & Communication Security",
        bullets: [
          "PHI is transmitted only through authorized, secure channels",
          "Encrypted file transfer methods are used",
          "Unsecured communication platforms are prohibited for PHI",
          "Email usage is restricted and monitored where applicable",
          "Visitors and clients are advised not to transmit PHI through unsecured channels.",
        ],
      },
      {
        title: "9. Endpoint & Device Security",
        bullets: [
          "Personal devices are not permitted for PHI handling unless explicitly authorized",
          "Workstations are secured with authentication controls",
          "Storage devices are restricted and monitored",
          "Device usage follows internal security policies",
        ],
      },
      {
        title: "10. Monitoring, Logging & Auditing",
        bullets: [
          "System access and activity logs are maintained",
          "Regular internal security audits are performed",
          "Anomalies and unauthorized access attempts are investigated",
          "Audit results are used for corrective actions and improvements",
        ],
      },
      {
        title: "11. Incident Response & Breach Management",
        bullets: [
          "Immediate investigation and containment actions are initiated",
          "Affected systems and data are secured",
          "Clients are notified as required by contract and regulation",
          "Breach assessment and mitigation are conducted",
          "Corrective measures are implemented to prevent recurrence",
          "Breach notification obligations follow HIPAA and applicable laws.",
        ],
      },
      {
        title: "12. Data Retention & Secure Disposal",
        bullets: [
          "Data is retained only as long as necessary to fulfill contractual, legal, and regulatory obligations.",
          "Upon completion or termination of services, PHI is returned to the Covered Entity or securely destroyed.",
          "Secure deletion and disposal methods are applied.",
          "Retention and disposal follow the Business Associate Agreement and applicable law",
        ],
      },
      {
        title: "13. Third-Party & Vendor Security",
        bullets: [
          "Vendors are assessed for appropriate security controls",
          "Access to sensitive data is restricted",
          "Contractual data protection obligations are enforced",
          "Compliance with HIPAA requirements is ensured where applicable",
        ],
      },
      {
        title: "14. Workforce Responsibility & Awareness",
        bullets: [
          "Following security policies and procedures",
          "Protecting access credentials",
          "Reporting suspected security incidents",
          "Completing required training and awareness programs",
          "Failure to comply may result in disciplinary action.",
        ],
      },
      {
        title: "15. Policy Review & Updates",
        paragraphs: [
          "This Data Security Policy is reviewed periodically and updated as necessary to reflect:",
          "Changes in regulations",
          "Evolving security risks",
          "Operational or technology updates",
          "Updated versions will be published with a revised effective date.",
        ],
      },
    ],
  },
  disclaimer: {
    badge: "Disclaimer",
    title: "Disclaimer",
    effectiveDate: "01/01/2026",
    updatedDate: "01/01/2026",
    intro:
      'The information provided on this website by ProficientNow Health Care ("Company," "we," "our," or "us") is for general informational purposes only. By accessing or using this website, you acknowledge and agree to the terms of this Disclaimer.',
    sections: [
      {
        title: "1. No Medical, Legal, or Financial Advice",
        bullets: [
          "The content on this website does not constitute:",
          "Medical advice",
          "Legal advice",
          "Financial, billing, or reimbursement advice",
        ],
        paragraphs: [
          "All services provided by ProficientNow Health Care are support services intended to assist healthcare providers and related entities. Final clinical documentation, coding decisions, billing submissions, and compliance determinations remain the responsibility of the healthcare provider or covered entity unless otherwise specified in a written agreement.",
        ],
      },
      {
        title: "2. No Guarantee of Outcomes",
        bullets: [
          "We do not guarantee reimbursement amounts",
          "We do not guarantee claim acceptance by payers",
          "We do not guarantee denial prevention or revenue outcomes",
        ],
        paragraphs: ["Results may vary based on documentation quality, payer policies, and regulatory requirements."],
      },
      {
        title: "3. HIPAA & Protected Health Information (PHI)",
        bullets: [
          "A Business Associate Agreement (BAA) must be executed before any PHI is accessed or processed",
          "Visitors should not submit PHI through website contact forms or unsecured communication channels",
          "Any handling of PHI is governed by executed agreements and applicable law",
        ],
        paragraphs: [
          "ProficientNow Health Care complies with applicable HIPAA and HITECH requirements when acting as a Business Associate.",
        ],
      },
      {
        title: "4. Website Content Accuracy",
        bullets: [
          "Information may be updated, changed, or removed without notice",
          "We do not warrant that all content is complete, current, or error-free",
        ],
      },
      {
        title: "5. Third-Party Links & Content",
        bullets: [
          "ProficientNow Health Care does not control or endorse third-party content",
          "We are not responsible for the accuracy, privacy practices, or security of third-party websites",
          "Accessing third-party sites is at your own risk",
        ],
      },
      {
        title: "6. Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law:",
          "ProficientNow Health Care shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of this website",
          "We are not responsible for loss or damages resulting from reliance on website content",
        ],
      },
      {
        title: "7. Confidentiality Disclaimer",
        paragraphs: [
          "Transmission of information through this website does not establish a contractual, business, or confidential relationship unless explicitly agreed in writing.",
          "Confidentiality obligations are governed solely by executed agreements such as NDAs or BAAs.",
        ],
      },
      {
        title: "8. Changes to This Disclaimer",
        paragraphs: [
          "We reserve the right to update or modify this Disclaimer at any time. Changes will be posted on this page with an updated effective date.",
          "Continued use of the website constitutes acceptance of the revised Disclaimer.",
        ],
      },
      {
        title: "9. Contact Information",
        paragraphs: [
          "For questions regarding this Disclaimer, please contact:",
          "ProficientNow Health Care",
          "Email: info@pnowhealtcare.com",
          "Address: Sanali Info Park, 1st Floor, A Block, 8-2-120/113, Road No. 2, Banjara Hills, Hyderabad - 500034",
        ],
      },
    ],
  },
  "terms-and-conditions": {
    badge: "Terms & Conditions",
    title: "Terms & Conditions",
    effectiveDate: "01/01/2026",
    updatedDate: "01/01/2026",
    intro:
      'These Terms & Conditions ("Terms") govern the access to and use of the website and services provided by ProficientNow Health Care ("Company," "we," "our," or "us"). By accessing this website, submitting inquiries, or engaging our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with these Terms, you should discontinue use of the website and refrain from engaging our services.',
    sections: [
      {
        title: "1. Company Overview and Scope of Services",
        paragraphs: [
          "ProficientNow Health Care is a professional medical coding services provider offering coding and related healthcare support services to healthcare providers, hospitals, physician groups, specialty practices, and billing organizations operating within the United States. Our services are designed to support healthcare operations through accurate, compliant, and timely medical coding.",
          "The information presented on this website is intended solely for general informational purposes and does not constitute a binding offer. Specific services, deliverables, turnaround times, pricing, and obligations are defined only through executed written agreements, Statements of Work (SOWs), or Business Associate Agreements (BAAs) entered into between the Company and the client.",
        ],
      },
      {
        title: "2. Acceptance and Use of the Website",
        paragraphs: [
          "By using this website, you represent that you are authorized to access the site for lawful business purposes. You agree to use the website in a manner consistent with all applicable laws, regulations, and these Terms. Unauthorized use, misuse, or attempts to interfere with the website's operation, security, or content are strictly prohibited.",
          "We reserve the right to modify, suspend, or discontinue any part of the website at any time without prior notice. Continued use of the website following updates to these Terms constitutes acceptance of the revised Terms.",
        ],
      },
      {
        title: "3. No Medical, Legal, or Billing Advice",
        paragraphs: [
          "All content provided on this website, including service descriptions and informational materials, is provided for general informational purposes only. Nothing on this website constitutes medical advice, legal advice, billing advice, or reimbursement guarantees.",
          "Healthcare providers remain solely responsible for clinical documentation, medical decision-making, compliance with applicable laws, and final billing and claim submission decisions unless otherwise agreed in writing. ProficientNow Health Care does not assume responsibility for clinical outcomes, payer determinations, or reimbursement results.",
        ],
      },
      {
        title: "4. HIPAA Compliance and Protected Health Information (PHI)",
        paragraphs: [
          "ProficientNow Health Care operates in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and related regulations when acting as a Business Associate. We do not access, receive, store, or process Protected Health Information (PHI) unless a valid Business Associate Agreement has been executed with the client.",
          "Users are strictly prohibited from submitting PHI through website contact forms, email inquiries, or other unsecured communication channels. Any PHI exchanged during service delivery is governed exclusively by the terms of the executed BAA and applicable healthcare laws.",
        ],
      },
      {
        title: "5. Confidentiality Obligations",
        paragraphs: [
          "Any non-public, proprietary, or confidential information disclosed between the Company and a client during discussions, evaluations, or service delivery must be treated as confidential. Confidentiality obligations apply regardless of whether a formal agreement has been executed and may be further governed by non-disclosure agreements or service contracts.",
          "The Company will take reasonable measures to protect confidential information in accordance with its internal policies and applicable legal requirements.",
        ],
      },
      {
        title: "6. Intellectual Property Rights",
        paragraphs: [
          "All content available on this website, including text, graphics, logos, designs, layout, and branding, is the intellectual property of ProficientNow Health Care or its licensors. Such content is protected under applicable copyright, trademark, and intellectual property laws.",
          "No content may be copied, reproduced, modified, distributed, or used for commercial purposes without prior written consent from the Company. Unauthorized use may result in legal action.",
        ],
      },
      {
        title: "7. Pricing, Trials, and Proposals",
        paragraphs: [
          "Any pricing information referenced on the website is indicative only and subject to change. Final pricing, engagement terms, and service scope are determined based on client requirements and confirmed through written proposals or agreements.",
          "Free trials or sample coding services, if offered, are provided solely for evaluation purposes and do not create an obligation for continued service. The Company reserves the right to limit, modify, or discontinue trial offerings at its discretion.",
        ],
      },
      {
        title: "8. Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted by law, ProficientNow Health Care shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of this website or services, including but not limited to loss of revenue, data, or business opportunities.",
          "The Company does not guarantee coding outcomes, payer acceptance, audit results, or reimbursement levels. Any liability, if applicable, shall be limited as defined in the governing service agreement executed with the client.",
        ],
      },
      {
        title: "9. Disclaimer of Warranties",
        paragraphs: [
          "The website and services are provided on an \"as is\" and \"as available\" basis. ProficientNow Health Care makes no warranties, express or implied, regarding the accuracy, reliability, or completeness of website content or services, including implied warranties of merchantability or fitness for a particular purpose.",
        ],
      },
      {
        title: "10. Third-Party Websites and Services",
        paragraphs: [
          "This website may include links to third-party websites for convenience or informational purposes. ProficientNow Health Care does not control, endorse, or assume responsibility for third-party content, security practices, or privacy policies. Access to third-party websites is at your own risk.",
        ],
      },
      {
        title: "11. Termination of Access",
        paragraphs: [
          "ProficientNow Health Care reserves the right to restrict, suspend, or terminate access to the website or services at any time, with or without notice, for violations of these Terms, legal requirements, or security concerns.",
        ],
      },
      {
        title: "12. Governing Law and Jurisdiction",
        paragraphs: [
          "These Terms shall be governed by and construed in accordance with the applicable laws as specified in the governing service agreement between the Company and the client. Jurisdiction and venue for disputes shall be determined in accordance with such agreement or applicable law.",
        ],
      },
      {
        title: "13. Changes to These Terms",
        paragraphs: [
          "The Company may revise these Terms & Conditions periodically to reflect changes in law, services, or operational practices. Updated versions will be posted on this page with a revised effective date. Continued use of the website constitutes acceptance of the revised Terms.",
        ],
      },
    ],
  },
};
