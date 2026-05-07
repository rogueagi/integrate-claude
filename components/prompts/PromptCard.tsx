import Link from "next/link";
import type { Prompt } from "@/types/prompt";
import { FUNCTION_LABELS, FUNCTION_EMOJI } from "@/types/prompt";
import { cn } from "@/lib/utils";

interface Props {
  prompt: Prompt;
  showFunction?: boolean;
}

const complexityStyles: Record<string, string> = {
  beginner:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400",
  intermediate:
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400",
  advanced:
    "bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-400/10 dark:text-rose-400",
};

export function PromptCard({ prompt, showFunction = false }: Props) {
  const href = `/prompts/${prompt.function}/${prompt.role}/${prompt.slug}`;
  const visibleTags = prompt.tags?.slice(0, 3) ?? [];

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Header row */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-[var(--accent)] transition-colors line-clamp-2">
          {prompt.title}
        </h3>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[0.65rem] font-medium ring-1 ring-inset",
            complexityStyles[prompt.complexity] ??
              "bg-muted text-muted-foreground ring-border",
          )}
        >
          {prompt.complexity}
        </span>
      </div>

      {/* Description */}
      <p className="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
        {prompt.description}
      </p>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-1.5">
        {showFunction && (
          <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground">
            {FUNCTION_EMOJI[prompt.function]} {FUNCTION_LABELS[prompt.function]}
          </span>
        )}
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
