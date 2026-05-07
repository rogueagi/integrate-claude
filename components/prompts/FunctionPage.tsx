"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Prompt, PromptFunction } from "@/types/prompt";
import {
  FUNCTION_LABELS,
  FUNCTION_DESCRIPTIONS,
  FUNCTION_EMOJI,
} from "@/types/prompt";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { JsonLd } from "@/components/shared/JsonLd";
import { PromptCard } from "./PromptCard";

interface Props {
  fn: PromptFunction;
  prompts: Prompt[];
}

export function FunctionPage({ fn, prompts }: Props) {
  const [activeRole, setActiveRole] = useState<string>("all");

  const roles = Array.from(new Set(prompts.map((p) => p.role)));

  const filtered =
    activeRole === "all"
      ? prompts
      : prompts.filter((p) => p.role === activeRole);

  function formatRole(role: string) {
    return role.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Prompt Library", href: "/prompts" },
    { label: FUNCTION_LABELS[fn] },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Claude Prompts for ${FUNCTION_LABELS[fn]}`,
    itemListElement: prompts.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.title,
      url: `https://integrateclaude.com/prompts/${fn}/${p.role}/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />

      {/* Page header */}
      <section className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex items-start gap-3">
            <span
              className="text-3xl"
              role="img"
              aria-label={FUNCTION_LABELS[fn]}
            >
              {FUNCTION_EMOJI[fn]}
            </span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Claude Prompts for {FUNCTION_LABELS[fn]}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {FUNCTION_DESCRIPTIONS[fn]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role filter tabs */}
      {roles.length > 1 && (
        <section className="border-b border-border bg-muted/30 px-4 py-3 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveRole("all")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeRole === "all"
                    ? "bg-foreground text-background"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                All roles
              </button>
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeRole === role
                      ? "bg-foreground text-background"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {formatRole(role)}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prompt grid */}
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No prompts found for this role.
            </p>
          ) : (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                {filtered.length} prompt{filtered.length !== 1 ? "s" : ""}
                {activeRole !== "all" && ` for ${formatRole(activeRole)}`}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((prompt) => (
                  <PromptCard key={prompt.slug} prompt={prompt} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Role sidebar links (desktop supplementary nav) */}
      {roles.length > 1 && (
        <section className="border-t border-border bg-muted/20 px-4 py-8 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Browse by role
            </h2>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <Link
                  key={role}
                  href={`/prompts/${fn}/${role}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {formatRole(role)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
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
