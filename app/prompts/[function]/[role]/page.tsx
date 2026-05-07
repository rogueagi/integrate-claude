import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RolePage } from "@/components/prompts/RolePage";
import { getPromptsByRole } from "@/lib/prompts";
import { FUNCTION_LABELS, ROLES_BY_FUNCTION } from "@/types/prompt";
import type { PromptFunction } from "@/types/prompt";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ function: string; role: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { function: fn, role } = await params;
  const fnLabel = FUNCTION_LABELS[fn as PromptFunction];
  if (!fnLabel) return {};
  const roleLabel = role
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return buildMetadata({
    title: `Claude Prompts for ${roleLabel} (${fnLabel})`,
    description: `Free Claude AI prompts for ${roleLabel} in ${fnLabel}. Copy-ready, with tips and examples.`,
    alternates: { canonical: `/prompts/${fn}/${role}` },
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

  return (
    <>
      <SiteHeader />
      <main>
        <RolePage fn={fn as PromptFunction} role={role} prompts={prompts} />
      </main>
      <SiteFooter />
    </>
  );
}
