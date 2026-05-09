import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PromptDetailPage } from "@/components/prompts/PromptDetailPage";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  getAllPrompts,
  getPromptBySlug,
  getRelatedPrompts,
} from "@/lib/prompts";
import { FUNCTION_LABELS } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

interface Props {
  params: Promise<{ function: string; role: string; slug: string }>;
}

function formatRole(role: string): string {
  return role.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return {};
  const fnLabel = FUNCTION_LABELS[prompt.function as PromptFunction];
  const roleLabel = formatRole(prompt.role);
  const url = `${BASE_URL}/prompts/${prompt.function}/${prompt.role}/${slug}`;
  return buildMetadata({
    title: prompt.title,
    description: prompt.description,
    keywords: [
      prompt.title,
      `${prompt.title} Claude prompt`,
      `Claude prompt for ${roleLabel}`,
      `${fnLabel} Claude prompt`,
      ...(prompt.tags ?? []),
    ],
    category: fnLabel,
    authors: [{ name: "Ben Frost", url: `${BASE_URL}/about` }],
    creator: "Ben Frost",
    alternates: {
      canonical: `/prompts/${prompt.function}/${prompt.role}/${slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: `${prompt.title} | Integrate Claude`,
      description: prompt.description,
      authors: [`${BASE_URL}/about`],
      section: fnLabel,
      tags: prompt.tags,
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
  const fnLabel = FUNCTION_LABELS[prompt.function as PromptFunction];
  const url = `${BASE_URL}/prompts/${prompt.function}/${prompt.role}/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: prompt.title,
    description: prompt.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: fnLabel,
    keywords: (prompt.tags ?? []).join(", "),
    author: {
      "@type": "Person",
      name: "Ben Frost",
      url: `${BASE_URL}/about`,
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <SiteHeader />
      <main>
        <PromptDetailPage prompt={prompt} related={related} />
      </main>
      <SiteFooter />
    </>
  );
}
