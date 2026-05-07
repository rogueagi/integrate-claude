import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PromptLibraryHome } from "@/components/prompts/PromptLibraryHome";
import { getPromptCounts } from "@/lib/prompts";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Claude Prompt Library — 200+ Business Prompts",
  description:
    "Browse 200+ free Claude prompts organized by business function: sales, marketing, finance, HR, engineering, and more. Copy-ready prompts for every role.",
  alternates: { canonical: "/prompts" },
});

export default async function PromptsPage() {
  const promptCounts = getPromptCounts();
  return (
    <>
      <SiteHeader />
      <main>
        <PromptLibraryHome promptCounts={promptCounts} />
      </main>
      <SiteFooter />
    </>
  );
}
