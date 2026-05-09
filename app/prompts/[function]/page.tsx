import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FunctionPage } from "@/components/prompts/FunctionPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { getPromptsByFunction } from "@/lib/prompts";
import { FUNCTION_LABELS, FUNCTION_DESCRIPTIONS } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

interface Props {
  params: Promise<{ function: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { function: fn } = await params;
  const label = FUNCTION_LABELS[fn as PromptFunction];
  if (!label) return {};
  const count = getPromptsByFunction(fn as PromptFunction).length;
  const title = `Claude Prompts for ${label} — ${count} Production-Ready Prompts`;
  const description = `${count} free, copy-ready Claude prompts for ${label}. ${FUNCTION_DESCRIPTIONS[fn as PromptFunction]}`;
  return buildMetadata({
    title: `Claude Prompts for ${label} — ${count} Production-Ready Prompts`,
    description,
    keywords: [
      `Claude prompts ${label}`,
      `${label} prompts`,
      `${label} AI prompts`,
      `Claude AI for ${label}`,
      "Claude prompt library",
      "Anthropic Claude prompts",
    ],
    alternates: { canonical: `/prompts/${fn}` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/prompts/${fn}`,
      title,
      description,
    },
  });
}

export async function generateStaticParams() {
  return Object.keys(FUNCTION_LABELS).map((fn) => ({ function: fn }));
}

export default async function PromptFunctionPage({ params }: Props) {
  const { function: fn } = await params;
  const prompts = getPromptsByFunction(fn as PromptFunction);
  const label = FUNCTION_LABELS[fn as PromptFunction];
  if (!label) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prompt Library",
        item: `${BASE_URL}/prompts`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: label,
        item: `${BASE_URL}/prompts/${fn}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <FunctionPage fn={fn as PromptFunction} prompts={prompts} />
      </main>
      <SiteFooter />
    </>
  );
}
