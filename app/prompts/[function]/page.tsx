import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FunctionPage } from "@/components/prompts/FunctionPage";
import { getPromptsByFunction } from "@/lib/prompts";
import { FUNCTION_LABELS, FUNCTION_DESCRIPTIONS } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ function: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { function: fn } = await params;
  const label = FUNCTION_LABELS[fn as PromptFunction];
  if (!label) return {};
  return buildMetadata({
    title: `Claude Prompts for ${label}`,
    description: FUNCTION_DESCRIPTIONS[fn as PromptFunction],
    alternates: { canonical: `/prompts/${fn}` },
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

  return (
    <>
      <SiteHeader />
      <main>
        <FunctionPage fn={fn as PromptFunction} prompts={prompts} />
      </main>
      <SiteFooter />
    </>
  );
}
