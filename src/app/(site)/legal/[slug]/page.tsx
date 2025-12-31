import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/pages/legal-page";
import { legalContent, type LegalSlug } from "@/data/legal";

export function generateStaticParams() {
  return (Object.keys(legalContent) as LegalSlug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = legalContent[slug as LegalSlug];
  if (!content) return {};

  return {
    title: content.title,
    description: content.intro,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = legalContent[slug as LegalSlug];

  if (!content) {
    notFound();
  }

  return <LegalPage content={content} />;
}
