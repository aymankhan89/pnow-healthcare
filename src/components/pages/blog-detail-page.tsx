import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";

type Props = {
  id: string;
};

const ABOUT_HEADING_TEXT = "About ProficientNow Health Care";
const ABOUT_PARAGRAPH_TEXT =
  "ProficientNow Health Care provides professional medical coding services focused on high accuracy, fast turnaround, competitive pricing, and strict HIPAA compliance. We support healthcare providers, hospitals, and billing organizations across the United States with reliable, specialty-aligned coding solutions.";

export function BlogDetailPage({ id }: Props) {
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return null;

  const renderFullContent = (content: string) => {
    const lines = content.split("\n").map((line) => line.trim());

    type Item =
      | { type: "heading"; text: string }
      | { type: "paragraph"; text: string }
      | { type: "bullets"; items: string[] };

    const parsed: Item[] = [];
    let bulletBuffer: string[] = [];
    let paragraphBuffer: string[] = [];

    const flushBullets = () => {
      if (bulletBuffer.length) {
        parsed.push({ type: "bullets", items: bulletBuffer });
        bulletBuffer = [];
      }
    };

    const flushParagraph = () => {
      if (paragraphBuffer.length) {
        parsed.push({ type: "paragraph", text: paragraphBuffer.join(" ") });
        paragraphBuffer = [];
      }
    };

    lines.forEach((line) => {
      if (!line) {
        flushBullets();
        flushParagraph();
        return;
      }

      const normalized = line
        .replace(/[^a-z0-9]+/gi, " ")
        .trim()
        .toLowerCase();
      const forceHeading = normalized.startsWith("about proficientnow health care");

      const isLikelyBullet =
        /^(\d+\.\s+|[-•]\s+)/.test(line) ||
        (!/[.!?]"?$/.test(line) && line.length <= 90 && line.split(/\s+/).length <= 12);
      const isLikelyHeading =
        !isLikelyBullet && (!/[.!?]"?$/.test(line) || forceHeading) && line.length <= 180;

      if (isLikelyBullet) {
        flushParagraph();
        bulletBuffer.push(line.replace(/^(\d+\.\s+|[-•]\s+)/, ""));
        return;
      }

      if (isLikelyHeading) {
        flushBullets();
        flushParagraph();
        parsed.push({ type: "heading", text: line });
        return;
      }

      paragraphBuffer.push(line);
    });

    flushBullets();
    flushParagraph();

    const cleaned: Item[] = [];
    parsed.forEach((item, index) => {
      const prev = parsed[index - 1];
      const isAboutHeading =
        item.type === "heading" &&
        item.text.trim().toLowerCase().startsWith("about proficientnow health care");
      const isAboutParagraph =
        item.type === "paragraph" &&
        prev?.type === "heading" &&
        prev.text.trim().toLowerCase().startsWith("about proficientnow health care") &&
        item.text.trim().startsWith("ProficientNow Health Care provides professional medical coding services");

      if (isAboutHeading || isAboutParagraph) {
        return;
      }

      cleaned.push(item);
    });

    cleaned.push(
      { type: "heading", text: ABOUT_HEADING_TEXT },
      { type: "paragraph", text: ABOUT_PARAGRAPH_TEXT }
    );

    return cleaned.map((item, index) => {
      if (item.type === "heading") {
        return (
          <p
            key={`${index}-${item.text}`}
            className="text-xl font-semibold text-slate-900"
          >
            {item.text}
          </p>
        );
      }

      if (item.type === "bullets") {
        return (
          <ul key={`${index}-bullets`} className="space-y-2 text-base text-slate-800 pl-5 list-disc marker:text-blue-600">
            {item.items.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={`${index}-${item.text}`} className="text-base leading-relaxed text-slate-800">
          {item.text}
        </p>
      );
    });
  };

  return (
    <main className="bg-white mt-[50px] text-slate-900 min-h-screen">
      <section className="relative">
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20 space-y-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
          >
            ← Back to insights
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1">
              {blog.category}
            </Badge>
            <span className="text-slate-500 text-sm">{blog.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            {blog.title}
          </h1>
          <p className="text-lg text-slate-600 md:text-xl max-w-3xl">
            {blog.summary}
          </p>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/60">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={800}
              className="relative h-full w-full object-contain bg-gradient-to-br from-white via-slate-50 to-blue-50"
              priority
            />
          </div>
          <ul className="flex flex-wrap gap-2">
            {blog.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="relative mx-auto max-w-5xl px-6 space-y-10">
          {blog.fullContent ? (
            <article className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-100/50 p-6 md:p-8 space-y-4">
              {renderFullContent(blog.fullContent)}
            </article>
      ) : (
        <>
          {blog.sections.map((section) => (
            <article
              key={section.heading ?? section.body?.[0]}
              className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-100/50 p-6 md:p-8 space-y-4"
            >
              {section.heading && (
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
              )}
              {section.body?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-slate-800"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 text-base text-slate-800">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-100/50 p-6 md:p-8 space-y-3">
            <p className="text-xl font-semibold text-slate-900">
              {ABOUT_HEADING_TEXT}
            </p>
            <p className="text-base leading-relaxed text-slate-800">
              {ABOUT_PARAGRAPH_TEXT}
            </p>
          </article>
        </>
      )}
        </div>
      </section>
    </main>
  );
}
