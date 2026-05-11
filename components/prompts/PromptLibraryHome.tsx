"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import MiniSearch from "minisearch";
import { FUNCTION_LABELS, FUNCTION_DESCRIPTIONS } from "@/types/prompt";
import type {
  PromptFunction,
  PromptComplexity,
  ModelRecommendation,
} from "@/types/prompt";
import { JsonLd } from "@/components/shared/JsonLd";
import { SearchBar } from "./SearchBar";
import { FunctionIcon } from "./FunctionIcon";
import type { PromptSummary } from "@/lib/prompts";
import { cn } from "@/lib/utils";

interface Props {
  promptCounts: Record<PromptFunction, number>;
  prompts: PromptSummary[];
}

const ALL_FUNCTIONS = Object.keys(FUNCTION_LABELS) as PromptFunction[];

const COMPLEXITY_OPTIONS: Array<{
  label: string;
  value: PromptComplexity;
}> = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

const MODEL_OPTIONS: Array<{
  label: string;
  value: ModelRecommendation;
}> = [
  { label: "Haiku", value: "claude-haiku-4-5" },
  { label: "Sonnet", value: "claude-sonnet-4-6" },
  { label: "Opus", value: "claude-opus-4-7" },
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

export function PromptLibraryHome({ promptCounts, prompts }: Props) {
  const [query, setQuery] = useState("");
  const [complexity, setComplexity] = useState<PromptComplexity | null>(null);
  const [model, setModel] = useState<ModelRecommendation | null>(null);
  const [activeFunction, setActiveFunction] = useState<PromptFunction | null>(
    null,
  );

  // Build the MiniSearch index once per prompts payload.
  // Use a composite id (function/role/slug) since some slugs are reused
  // across different function/role combinations (e.g. board-meeting-agenda).
  const searchIndex = useMemo(() => {
    const indexable = prompts.map((p) => ({
      ...p,
      id: `${p.function}/${p.role}/${p.slug}`,
    }));
    const idx = new MiniSearch<PromptSummary & { id: string }>({
      idField: "id",
      fields: ["title", "description", "tags"],
      storeFields: [
        "slug",
        "title",
        "description",
        "function",
        "role",
        "complexity",
        "modelRecommendation",
        "tags",
      ],
      searchOptions: {
        prefix: true,
        fuzzy: 0.2,
        boost: { title: 3, tags: 2 },
      },
    });
    idx.addAll(indexable);
    return idx;
  }, [prompts]);

  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;
  const hasFilters =
    complexity !== null || model !== null || activeFunction !== null;
  const isSearchMode = hasQuery || hasFilters;

  // Compute results when in search mode.
  const results = useMemo<PromptSummary[]>(() => {
    if (!isSearchMode) return [];

    let candidates: PromptSummary[];
    if (hasQuery) {
      // MiniSearch results inherit storeFields at runtime; cast through unknown.
      const searchResults = searchIndex.search(
        trimmedQuery,
      ) as unknown as PromptSummary[];
      candidates = searchResults;
    } else {
      candidates = prompts;
    }

    return candidates.filter((p) => {
      if (complexity && p.complexity !== complexity) return false;
      if (model && p.modelRecommendation !== model) return false;
      if (activeFunction && p.function !== activeFunction) return false;
      return true;
    });
  }, [
    isSearchMode,
    hasQuery,
    trimmedQuery,
    searchIndex,
    prompts,
    complexity,
    model,
    activeFunction,
  ]);

  function clearFilters() {
    setComplexity(null);
    setModel(null);
    setActiveFunction(null);
  }

  function clearAll() {
    setQuery("");
    clearFilters();
  }

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={itemListSchema} />

      {/* Hero header */}
      <section className="border-b border-border bg-background py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Claude Prompt Library
          </h1>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            {prompts.length}+ copy-ready Claude prompts organized by business
            function, role, and complexity. Search, filter, and ship into your
            workflow today.
          </p>
          <div className="mx-auto max-w-xl">
            <SearchBar
              onSearch={setQuery}
              placeholder="Search 400+ prompts by topic, task, or tag…"
            />
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section className="border-b border-border bg-muted/30 py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col gap-3">
          {/* Complexity */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-medium text-muted-foreground mr-1 min-w-[5rem]">
              Complexity:
            </span>
            <FilterPill
              active={complexity === null}
              onClick={() => setComplexity(null)}
            >
              All
            </FilterPill>
            {COMPLEXITY_OPTIONS.map((f) => (
              <FilterPill
                key={f.value}
                active={complexity === f.value}
                onClick={() =>
                  setComplexity(complexity === f.value ? null : f.value)
                }
              >
                {f.label}
              </FilterPill>
            ))}
          </div>

          {/* Model */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-medium text-muted-foreground mr-1 min-w-[5rem]">
              Model:
            </span>
            <FilterPill active={model === null} onClick={() => setModel(null)}>
              All
            </FilterPill>
            {MODEL_OPTIONS.map((f) => (
              <FilterPill
                key={f.value}
                active={model === f.value}
                onClick={() => setModel(model === f.value ? null : f.value)}
              >
                {f.label}
              </FilterPill>
            ))}
          </div>

          {/* Active function chip + clear */}
          {(activeFunction || hasFilters || hasQuery) && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <span className="text-xs font-medium text-muted-foreground mr-1 min-w-[5rem]">
                {results.length > 0
                  ? `${results.length} result${results.length === 1 ? "" : "s"}`
                  : isSearchMode
                    ? "No results"
                    : ""}
              </span>
              {activeFunction && (
                <button
                  type="button"
                  onClick={() => setActiveFunction(null)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 text-xs font-medium hover:bg-accent/15 transition-colors"
                >
                  Function: {FUNCTION_LABELS[activeFunction]}
                  <X className="size-3" />
                </button>
              )}
              <button
                type="button"
                onClick={clearAll}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Content area: search results OR function browse grid */}
      {isSearchMode ? (
        <section className="py-16 sm:py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {results.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-base text-muted-foreground mb-4">
                  No prompts match the current filters.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-sm font-medium text-accent hover:underline underline-offset-4"
                >
                  Clear all and browse
                </button>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.slice(0, 60).map((p) => (
                  <PromptResultCard key={p.slug} prompt={p} />
                ))}
                {results.length > 60 && (
                  <p className="sm:col-span-2 lg:col-span-3 text-center text-sm text-muted-foreground py-4">
                    Showing first 60 of {results.length} results. Refine your
                    search to narrow further.
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ALL_FUNCTIONS.map((fn) => (
                <Link
                  key={fn}
                  href={`/prompts/${fn}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <FunctionIcon function={fn} size="md" />
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {promptCounts[fn] ?? 0} prompts
                    </span>
                  </div>
                  <h2 className="mb-1.5 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {FUNCTION_LABELS[fn]}
                  </h2>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {FUNCTION_DESCRIPTIONS[fn]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            Can&apos;t find what you need?
          </p>
          <a
            href="/#book"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-accent hover:underline"
          >
            Book a call with our team
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1.5",
        active
          ? "bg-foreground text-background"
          : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
      )}
    >
      {children}
    </button>
  );
}

const COMPLEXITY_BADGE_STYLES: Record<PromptComplexity, string> = {
  beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  advanced: "bg-rose-50 text-rose-700 border-rose-200",
};

function PromptResultCard({ prompt }: { prompt: PromptSummary }) {
  const href = `/prompts/${prompt.function}/${prompt.role}/${prompt.slug}`;
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <FunctionIcon function={prompt.function} size="sm" />
          {FUNCTION_LABELS[prompt.function]}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium",
            COMPLEXITY_BADGE_STYLES[prompt.complexity],
          )}
        >
          {prompt.complexity}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-2">
        {prompt.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
        {prompt.description}
      </p>
    </Link>
  );
}
