import type { NextRequest } from "next/server";
import { servicesData } from "@/data/services-data";
import { reasons, faqs } from "@/data/why-choose-us";
import { coreServices } from "@/data/services";

const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-4o-mini";

const buildSiteContext = () => {
  const services = servicesData
    .map(
      (s) =>
        `- ${s.title}: ${s.shortDescription}\n  Features: ${s.features.slice(0, 3).join("; ")}\n  Benefits: ${s.benefits.slice(0, 3).join("; ")}`
    )
    .join("\n");

  const programs = coreServices
    .map((s) => `- ${s.title}: ${s.description}`)
    .join("\n");

  const valueProps = reasons.map((r) => `- ${r.title}: ${r.description}`).join("\n");

  const commonFaqs = faqs
    .slice(0, 5)
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n");

  return `
SERVICES
${services}

HOME PROGRAMS
${programs}

WHY CHOOSE US
${valueProps}

FAQ
${commonFaqs}

CONTACT
- Direct users to /contact to schedule calls, pricing, or demos.
`;
};

const systemPrompt = `
You are a concise, polite assistant for PNOW Healthcare's website chat. You MUST ground every response strictly in the provided site context. If the answer is not present, say you don't know and recommend using the contact page. Keep replies tight (2-4 sentences), avoid speculation, and do not fabricate details.
`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const prompt: string = body?.prompt ?? "";
    const history: ChatMessage[] = Array.isArray(body?.history) ? body.history : [];

    if (!prompt.trim()) {
      return new Response(JSON.stringify({ reply: "Please share a bit more about what you need help with." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          reply: "Live chat is offline. Please use the contact form and we'll respond quickly.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const context = buildSiteContext();

    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: systemPrompt.trim() },
      { role: "system", content: `Site context:\n${context.trim()}` },
      ...history.map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content: prompt },
    ];

    const response = await fetch(OPENAI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.2,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      throw new Error("OpenAI request failed");
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    return new Response(JSON.stringify({ reply: reply ?? "Thanks for reaching out! A specialist will reply shortly." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({
        reply: "We couldn't reach our assistant right now. Please use the contact form and we'll follow up.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}
