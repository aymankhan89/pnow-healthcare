import type { ContactRequestPayload } from "@/lib/contact";

type ContactFieldConfig = {
  label: string;
  name: keyof ContactRequestPayload;
  type: string;
  placeholder: string;
  required?: boolean;
};

export const contactInfo = {
  salesPhone: "(800) 555-9082",
  salesEmail: "hello@pnowhealth.com",
  businessHours: "Monday–Friday, 8am–7pm CT",
  office: {
    name: "Headquarters",
    address: ["500 Market Street", "Suite 1800", "Chicago, IL 60601"],
  },
};

export const contactFormFields: ContactFieldConfig[] = [
  { label: "First Name", name: "firstName", type: "text", placeholder: "Jane", required: true },
  { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe", required: true },
  { label: "Email", name: "email", type: "email", placeholder: "jane@pnowhealth.com", required: true },
  { label: "Phone", name: "phone", type: "tel", placeholder: "+1 (555) 123-4567" },
];
