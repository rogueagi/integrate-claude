import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Prompt, PromptFunction } from "@/types/prompt";
import { FUNCTION_LABELS } from "@/types/prompt";

interface Props {
  featuredPrompts: Prompt[];
  promptCounts: Record<PromptFunction, number>;
}

const FUNCTION_ORDER: PromptFunction[] = [
  "sales",
  "marketing",
  "customer-service",
  "finance",
  "hr",
  "operations",
  "product",
  "engineering",
  "legal",
  "executive",
];

const FUNCTION_COLORS: Record<PromptFunction, string> = {
  sales: "bg-blue-50 text-blue-700 border-blue-200",
  marketing: "bg-violet-50 text-violet-700 border-violet-200",
  "customer-service": "bg-teal-50 text-teal-700 border-teal-200",
  finance: "bg-green-50 text-green-700 border-green-200",
  hr: "bg-pink-50 text-pink-700 border-pink-200",
  operations: "bg-orange-50 text-orange-700 border-orange-200",
  product: "bg-indigo-50 text-indigo-700 border-indigo-200",
  engineering: "bg-slate-50 text-slate-700 border-slate-200",
  legal: "bg-amber-50 text-amber-700 border-amber-200",
  executive: "bg-rose-50 text-rose-700 border-rose-200",
};

export function PromptLibraryPreview({ featuredPrompts, promptCounts }: Props) {
  const hasFeatured = featuredPrompts.length > 0;
  const displayedPrompts = featuredPrompts.slice(0, 4);

  return (
    <section id="prompts" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The largest free Claude prompt library for business
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Production-ready prompts across every business function, written by
            practitioners — not copied from Reddit.
          </p>
        </div>

        {/* Function category chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {FUNCTION_ORDER.map((fn) => {
            const count = promptCounts[fn] ?? 0;
            if (count === 0) return null;
            return (
              <Link
                key={fn}
                href={`/prompts?function=${fn}`}
                className={[
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-opacity hover:opacity-80",
                  FUNCTION_COLORS[fn],
                ].join(" ")}
              >
                {FUNCTION_LABELS[fn]}
                <span className="opacity-60">&middot; {count}</span>
              </Link>
            );
          })}
        </div>

        {/* Featured prompt cards */}
        {hasFeatured && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {displayedPrompts.map((prompt) => (
              <Link
                key={prompt.slug}
                href={`/prompts/${prompt.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/40 hover:shadow-sm"
              >
                {/* Function badge */}
                <span
                  className={[
                    "inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                    FUNCTION_COLORS[prompt.function],
                  ].join(" ")}
                >
                  {FUNCTION_LABELS[prompt.function]}
                </span>

                {/* Title */}
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-accent-foreground transition-colors line-clamp-2">
                  {prompt.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {prompt.description}
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors mt-auto">
                  View prompt <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Big CTA */}
        <div className="flex justify-center">
          <Link
            href="/prompts"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 px-8",
            )}
          >
            Explore the full library
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
