import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/components/pages/blog-detail-page";
import { blogs } from "@/data/blogs";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.id }));
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const exists = blogs.some((blog) => blog.id === slug);
  if (!exists) return notFound();

  return <BlogDetailPage id={slug} />;
}
