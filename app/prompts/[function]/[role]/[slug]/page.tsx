import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PromptDetailPage } from "@/components/prompts/PromptDetailPage";
import {
  getAllPrompts,
  getPromptBySlug,
  getRelatedPrompts,
} from "@/lib/prompts";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ function: string; role: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return {};
  return buildMetadata({
    title: prompt.title,
    description: prompt.description,
    alternates: {
      canonical: `/prompts/${prompt.function}/${prompt.role}/${slug}`,
    },
  });
}

export async function generateStaticParams() {
  const prompts = getAllPrompts();
  return prompts.map((p) => ({
    function: p.function,
    role: p.role,
    slug: p.slug,
  }));
}

export default async function PromptSlugPage({ params }: Props) {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) notFound();
  const related = getRelatedPrompts(prompt);

  return (
    <>
      <SiteHeader />
      <main>
        <PromptDetailPage prompt={prompt} related={related} />
      </main>
      <SiteFooter />
    </>
  );
}
