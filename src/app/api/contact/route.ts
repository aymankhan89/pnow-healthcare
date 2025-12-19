import { NextResponse } from "next/server";
import type { ContactRequestPayload } from "@/lib/contact";
import { requiredContactFields } from "@/lib/contact";

const airtableBaseId = process.env.AIRTABLE_BASE_ID;
const airtableTableId = process.env.AIRTABLE_CONTACT_TABLE;
const airtableToken = process.env.AIRTABLE_ACCESS_TOKEN;

const airtableEndpoint =
  airtableBaseId && airtableTableId
    ? `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(
        airtableTableId
      )}`
    : null;

function sanitizePayload(payload: Partial<ContactRequestPayload>) {
  return {
    firstName: payload.firstName?.trim() ?? "",
    lastName: payload.lastName?.trim() ?? "",
    email: payload.email?.trim() ?? "",
    phone: payload.phone?.trim() ?? "",
    message: payload.message?.trim() ?? "",
  } satisfies ContactRequestPayload;
}

export async function POST(request: Request) {
  if (!airtableEndpoint || !airtableToken) {
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable." },
      { status: 500 }
    );
  }

  let incoming: Partial<ContactRequestPayload>;
  try {
    incoming = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const payload = sanitizePayload(incoming);

  const missing = requiredContactFields.filter(
    (key) => !payload[key as keyof ContactRequestPayload]
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const airtableFields: Record<string, string> = {
    "First Name": payload.firstName,
    "Last Name": payload.lastName,
    Email: payload.email,
    Message: payload.message,
    "Submitted At": new Date().toISOString(),
  };

  if (payload.phone) {
    airtableFields.Phone = payload.phone;
  }

  try {
    const airtableResponse = await fetch(airtableEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: airtableFields,
          },
        ],
        typecast: true,
      }),
    });

    if (!airtableResponse.ok) {
      const details = await airtableResponse.text();
      console.error("Airtable error", details);
      return NextResponse.json(
        { error: "Unable to submit request right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to submit contact form", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
