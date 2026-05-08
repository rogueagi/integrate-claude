"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FUNCTION_LABELS, FUNCTION_DESCRIPTIONS } from "@/types/prompt";
import type { PromptFunction, PromptComplexity } from "@/types/prompt";
import { JsonLd } from "@/components/shared/JsonLd";
import { SearchBar } from "./SearchBar";
import { FunctionIcon } from "./FunctionIcon";

interface Props {
  promptCounts: Record<PromptFunction, number>;
}

const ALL_FUNCTIONS = Object.keys(FUNCTION_LABELS) as PromptFunction[];

const COMPLEXITY_FILTERS: Array<{
  label: string;
  value: PromptComplexity | "all";
}> = [
  { label: "All", value: "all" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Integrate Claude — Prompt Library",
  url: "https://integrateclaude.com/prompts",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Claude Prompt Library by Function",
  itemListElement: ALL_FUNCTIONS.map((fn, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: FUNCTION_LABELS[fn],
    url: `https://integrateclaude.com/prompts/${fn}`,
  })),
};

export function PromptLibraryHome({ promptCounts }: Props) {
  const [query, setQuery] = useState("");
  const [complexity, setComplexity] = useState<PromptComplexity | "all">("all");

  const filteredFunctions = ALL_FUNCTIONS.filter((fn) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      FUNCTION_LABELS[fn].toLowerCase().includes(q) ||
      FUNCTION_DESCRIPTIONS[fn].toLowerCase().includes(q)
    );
  });

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={itemListSchema} />

      {/* Hero header */}
      <section className="border-b border-border bg-background px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Claude Prompt Library
          </h1>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            350+ copy-ready Claude prompts organized by business function, role,
            and complexity, so you can ship AI into your workflow today.
          </p>
          <div className="mx-auto max-w-xl">
            <SearchBar
              onSearch={setQuery}
              placeholder="Search prompts by function or topic…"
            />
          </div>
        </div>
      </section>

      {/* Complexity filter pills */}
      <section className="border-b border-border bg-muted/30 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground mr-1">
            Complexity:
          </span>
          {COMPLEXITY_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setComplexity(f.value)}
              className={`rounded-full px-3.5 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1.5 ${
                complexity === f.value
                  ? "bg-foreground text-background"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Function grid */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {filteredFunctions.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No functions match &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredFunctions.map((fn) => (
                <Link
                  key={fn}
                  href={`/prompts/${fn}${complexity !== "all" ? `?complexity=${complexity}` : ""}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <FunctionIcon function={fn} size="md" />
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {promptCounts[fn] ?? 0} prompts
                    </span>
                  </div>
                  <h2 className="mb-1.5 text-sm font-semibold text-foreground group-hover:text-[var(--accent)] transition-colors">
                    {FUNCTION_LABELS[fn]}
                  </h2>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {FUNCTION_DESCRIPTIONS[fn]}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            Can&apos;t find what you need?
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-[var(--accent)] hover:underline"
          >
            Book a call with our team
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
