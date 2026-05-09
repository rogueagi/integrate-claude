import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PromptLibraryHome } from "@/components/prompts/PromptLibraryHome";
import { JsonLd } from "@/components/shared/JsonLd";
import { getPromptCounts } from "@/lib/prompts";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

const PROMPTS_TITLE = "Claude Prompt Library — 350+ Free Business Prompts";
const PROMPTS_DESCRIPTION =
  "350+ free Claude prompts organized by business function and role. Sales, marketing, finance, HR, engineering, legal, more. Production-ready, copy-paste.";

export const metadata: Metadata = buildMetadata({
  title: "Claude Prompt Library — 350+ Free Business Prompts",
  description: PROMPTS_DESCRIPTION,
  keywords: [
    "Claude prompts",
    "Claude prompt library",
    "Claude AI prompts",
    "Anthropic Claude prompts",
    "free Claude prompts",
    "business AI prompts",
    "Claude Sonnet prompts",
    "ChatGPT alternative prompts",
  ],
  alternates: { canonical: "/prompts" },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/prompts`,
    title: PROMPTS_TITLE,
    description: PROMPTS_DESCRIPTION,
  },
});

const websiteSearchSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Integrate Claude",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/prompts?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/prompts#webpage`,
  url: `${BASE_URL}/prompts`,
  name: PROMPTS_TITLE,
  description: PROMPTS_DESCRIPTION,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  inLanguage: "en-US",
};

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
  ],
};

export default async function PromptsPage() {
  const promptCounts = getPromptCounts();
  return (
    <>
      <JsonLd data={websiteSearchSchema} />
      <JsonLd data={collectionPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <PromptLibraryHome promptCounts={promptCounts} />
      </main>
      <SiteFooter />
    </>
  );
}
