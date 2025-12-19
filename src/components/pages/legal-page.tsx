"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { LegalPageContent } from "@/data/legal";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <section className="container space-y-6 py-16 lg:py-24">
        <Badge variant="secondary">{content.badge}</Badge>
        <motion.h1 className="text-4xl font-semibold md:text-5xl" initial={fade.hidden} animate={fade.show}>
          {content.title}
        </motion.h1>
        <motion.p
          className="text-lg text-slate-600 lg:max-w-4xl"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ delay: 0.1 }}
        >
          {content.description}
        </motion.p>
      </section>

      <section className="container space-y-8 pb-16 lg:pb-24">
        {content.sections.map((section) => (
          <motion.article
            key={section.title}
            variants={fade}
            initial="hidden"
            whileInView="show"
            className="space-y-3"
          >
            <Card className="border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
