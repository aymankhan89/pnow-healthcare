export type ContactRequestPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

export const requiredContactFields: Array<keyof ContactRequestPayload> = [
  "firstName",
  "lastName",
  "email",
  "message",
];
