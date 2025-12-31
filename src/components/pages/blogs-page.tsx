import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";

export function BlogsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative pt-[50px]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-6">
          <Badge className="bg-blue-50 text-blue-700 border border-blue-200 w-fit px-4 py-2">
            Insights
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Medical Coding Insights for 2025–2026
          </h1>
          <p className="text-lg text-slate-600 md:text-xl max-w-3xl">
            Six perspectives on accuracy, compliance, and operational readiness
            as healthcare enters 2026—curated for leaders who need structured,
            documentation-driven coding.
          </p>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-6xl px-6 space-y-10 md:space-y-14">
          {blogs.map((post, index) => (
            <article
              key={post.id}
              className="grid gap-8 md:grid-cols-2 rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/60 p-6 md:p-10"
            >
              <div className="order-2 md:order-1 space-y-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
                    {post.category}
                  </Badge>
                  <span className="text-slate-500">{post.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="hover:text-blue-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-700">{post.summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {post.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4 pt-2">
                  {post.sections.slice(0, 3).map((section) => {
                    const numbered = section.bullets?.some((b) =>
                      /^\d+\.\s*/.test(b)
                    );
                    return (
                      <div
                        key={section.heading ?? section.body?.[0]}
                        className="space-y-2"
                      >
                        {section.heading && (
                          <h3 className="text-base font-semibold text-slate-900">
                            {section.heading}
                          </h3>
                        )}
                        {section.body &&
                          section.body.slice(0, 2).map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-sm leading-relaxed text-slate-700"
                            >
                              {paragraph}
                            </p>
                          ))}
                        {section.bullets && section.bullets.length > 0 && (
                          <ul
                            className={`space-y-1 text-sm text-slate-700 pl-5 ${
                              numbered
                                ? "list-decimal marker:text-blue-600"
                                : "list-disc marker:text-blue-600"
                            }`}
                          >
                            {section.bullets.slice(0, 5).map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Link
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 hover:bg-blue-100 transition-colors"
                    aria-label={`Read ${post.title}`}
                  >
                    Read full article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-50 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={540}
                    className="h-64 w-full object-cover bg-gradient-to-br from-white via-slate-50 to-blue-50 md:h-72"
                    priority={index < 2}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
