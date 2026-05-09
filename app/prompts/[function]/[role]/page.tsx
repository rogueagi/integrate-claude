import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RolePage } from "@/components/prompts/RolePage";
import { JsonLd } from "@/components/shared/JsonLd";
import { getPromptsByRole } from "@/lib/prompts";
import { FUNCTION_LABELS, ROLES_BY_FUNCTION } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

interface Props {
  params: Promise<{ function: string; role: string }>;
}

function formatRole(role: string): string {
  return role.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { function: fn, role } = await params;
  const fnLabel = FUNCTION_LABELS[fn as PromptFunction];
  if (!fnLabel) return {};
  const roleLabel = formatRole(role);
  const count = getPromptsByRole(fn as PromptFunction, role).length;
  const title = `${roleLabel} Prompts for Claude — ${fnLabel}`;
  const description = `${count} free Claude AI prompts for ${roleLabel} in ${fnLabel}. Copy-ready prompts with tips, examples, and recommended models.`;
  return buildMetadata({
    title,
    description,
    keywords: [
      `${roleLabel} Claude prompts`,
      `${roleLabel} AI prompts`,
      `Claude prompts for ${roleLabel}`,
      `${fnLabel} prompts`,
      "Claude prompt library",
    ],
    alternates: { canonical: `/prompts/${fn}/${role}` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/prompts/${fn}/${role}`,
      title: `${title} | Integrate Claude`,
      description,
    },
  });
}

export async function generateStaticParams() {
  const params: { function: string; role: string }[] = [];
  for (const [fn, roles] of Object.entries(ROLES_BY_FUNCTION)) {
    for (const role of roles) {
      params.push({ function: fn, role });
    }
  }
  return params;
}

export default async function PromptRolePage({ params }: Props) {
  const { function: fn, role } = await params;
  const prompts = getPromptsByRole(fn as PromptFunction, role);
  const fnLabel = FUNCTION_LABELS[fn as PromptFunction];
  if (!fnLabel) notFound();
  const roleLabel = formatRole(role);

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
        name: fnLabel,
        item: `${BASE_URL}/prompts/${fn}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: roleLabel,
        item: `${BASE_URL}/prompts/${fn}/${role}`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Claude Prompts for ${roleLabel} in ${fnLabel}`,
    itemListElement: prompts.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.title,
      url: `${BASE_URL}/prompts/${fn}/${role}/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <SiteHeader />
      <main>
        <RolePage fn={fn as PromptFunction} role={role} prompts={prompts} />
      </main>
      <SiteFooter />
    </>
  );
}
