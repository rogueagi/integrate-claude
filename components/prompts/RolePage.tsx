import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Prompt, PromptFunction } from "@/types/prompt";
import { FUNCTION_LABELS } from "@/types/prompt";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PromptCard } from "./PromptCard";

interface Props {
  fn: PromptFunction;
  role: string;
  prompts: Prompt[];
}

function formatRole(role: string) {
  return role.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function RolePage({ fn, role, prompts }: Props) {
  const roleLabel = formatRole(role);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Prompt Library", href: "/prompts" },
    { label: FUNCTION_LABELS[fn], href: `/prompts/${fn}` },
    { label: roleLabel },
  ];

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-background py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Claude Prompts for {roleLabel} in {FUNCTION_LABELS[fn]}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {prompts.length} copy-ready prompt
            {prompts.length !== 1 ? "s" : ""} for {roleLabel} professionals.
          </p>
        </div>
      </section>

      {/* Prompt grid */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {prompts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="mb-4 text-lg font-medium text-foreground">
                No prompts here yet
              </p>
              <p className="mb-6 text-muted-foreground">
                We&apos;re adding prompts for {roleLabel} soon.
              </p>
              <Link
                href={`/prompts/${fn}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View all {FUNCTION_LABELS[fn]} prompts
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {prompts.map((prompt) => (
                <PromptCard key={prompt.slug} prompt={prompt} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            Need help building these into your workflow?
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-[var(--accent)] hover:underline"
          >
            Book a call
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
