"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { LegalPageContent } from "@/data/legal";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <main className="bg-white mt-[50px] text-slate-900">
      <section className="container max-w-5xl space-y-6 py-16 lg:py-24">
        <Badge variant="secondary">{content.badge}</Badge>
        <motion.h1
          className="text-4xl font-semibold md:text-5xl"
          initial={fade.hidden}
          animate={fade.show}
        >
          {content.title}
        </motion.h1>
        <div className="space-y-1 text-sm text-slate-600">
          <p>Effective Date: {content.effectiveDate}</p>
          <p>Last Updated: {content.updatedDate}</p>
        </div>
        <div className="space-y-3">
          <motion.p
            className="text-lg text-slate-700"
            initial={fade.hidden}
            animate={fade.show}
            transition={{ delay: 0.1 }}
          >
            {content.intro}
          </motion.p>
          {content.preamble?.map((paragraph) => (
            <motion.p
              key={paragraph}
              className="text-base text-slate-700"
              initial={fade.hidden}
              animate={fade.show}
              transition={{ delay: 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="container max-w-5xl space-y-10 pb-16 lg:pb-24">
        {content.sections.map((section) => (
          <motion.article
            key={section.title}
            variants={fade}
            initial="hidden"
            whileInView="show"
            className="space-y-4"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
