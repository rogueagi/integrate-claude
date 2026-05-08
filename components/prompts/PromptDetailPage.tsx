import { ArrowRight } from "lucide-react";
import type { Prompt, PromptFunction } from "@/types/prompt";
import { FUNCTION_LABELS } from "@/types/prompt";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { JsonLd } from "@/components/shared/JsonLd";
import { CopyButton } from "./CopyButton";
import { PromptCard } from "./PromptCard";

interface Props {
  prompt: Prompt;
  related: Prompt[];
}

function formatRole(role: string) {
  return role.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const complexityStyles: Record<string, string> = {
  beginner:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400",
  intermediate:
    "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400",
  advanced:
    "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20 dark:bg-rose-400/10 dark:text-rose-400",
};

const modelLabels: Record<string, string> = {
  "claude-opus-4-7": "Claude Opus",
  "claude-sonnet-4-6": "Claude Sonnet",
  "claude-haiku-4-5": "Claude Haiku",
};

/** Replaces {{variable}} with styled spans. Returns segments. */
function highlightVariables(text: string): React.ReactNode[] {
  const parts = text.split(/({{[^}]+}})/g);
  return parts.map((part, i) => {
    if (/^{{[^}]+}}$/.test(part)) {
      return (
        <code
          key={i}
          className="bg-[var(--accent)]/20 text-[var(--accent)] px-1 rounded text-sm font-mono"
        >
          {part}
        </code>
      );
    }
    return part;
  });
}

export function PromptDetailPage({ prompt, related }: Props) {
  const roleLabel = formatRole(prompt.role);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Prompt Library", href: "/prompts" },
    {
      label: FUNCTION_LABELS[prompt.function as PromptFunction],
      href: `/prompts/${prompt.function}`,
    },
    {
      label: roleLabel,
      href: `/prompts/${prompt.function}/${prompt.role}`,
    },
    { label: prompt.title },
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: prompt.title,
    description: prompt.description,
    step: prompt.tips.map((tip, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: tip,
    })),
  };

  return (
    <>
      <JsonLd data={howToSchema} />

      {/* Page header */}
      <section className="border-b border-border bg-background py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <h1 className="mb-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {prompt.title}
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${complexityStyles[prompt.complexity] ?? "bg-muted text-muted-foreground"}`}
            >
              {prompt.complexity}
            </span>
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {modelLabels[prompt.modelRecommendation] ??
                prompt.modelRecommendation}
            </span>
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {FUNCTION_LABELS[prompt.function as PromptFunction]}
            </span>
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {roleLabel}
            </span>
            {prompt.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="lg:flex lg:gap-12">
            {/* Left column — content */}
            <div className="min-w-0 flex-1 max-w-3xl">
              {/* Use case */}
              <div className="mb-10">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Use case
                </h2>
                <p className="text-base leading-relaxed text-foreground">
                  {prompt.useCase}
                </p>
              </div>

              {/* The prompt block */}
              <div className="mb-10">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    The prompt
                  </h2>
                  <CopyButton text={prompt.prompt} label="Copy prompt" />
                </div>
                <div className="prompt-block relative">
                  <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-foreground">
                    {highlightVariables(prompt.prompt)}
                  </pre>
                </div>
              </div>

              {/* Variables */}
              {prompt.variables?.length > 0 && (
                <div className="mb-10">
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Variables
                  </h2>
                  <ul className="space-y-2">
                    {prompt.variables.map((v) => (
                      <li key={v} className="flex items-start gap-2">
                        <code className="mt-0.5 shrink-0 rounded bg-[var(--accent)]/20 px-1.5 py-0.5 font-mono text-xs text-[var(--accent)]">
                          {`{{${v}}}`}
                        </code>
                        <span className="text-sm text-muted-foreground">
                          Replace with your {v.replace(/_/g, " ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Example */}
              {(prompt.exampleInput || prompt.exampleOutput) && (
                <div className="mb-10">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Example
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {prompt.exampleInput && (
                      <div>
                        <p className="mb-2 text-xs font-medium text-muted-foreground">
                          Input
                        </p>
                        <pre className="rounded-lg border border-border bg-muted p-4 font-mono text-xs leading-relaxed text-foreground whitespace-pre-wrap break-words">
                          {prompt.exampleInput}
                        </pre>
                      </div>
                    )}
                    {prompt.exampleOutput && (
                      <div>
                        <p className="mb-2 text-xs font-medium text-muted-foreground">
                          Output
                        </p>
                        <pre className="rounded-lg border border-border bg-muted p-4 font-mono text-xs leading-relaxed text-foreground whitespace-pre-wrap break-words">
                          {prompt.exampleOutput}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tips */}
              {prompt.tips?.length > 0 && (
                <div className="mb-10">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Tips for best results
                  </h2>
                  <ol className="space-y-3">
                    {prompt.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed text-foreground">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Right column — sticky sidebar */}
            <aside className="mt-10 lg:mt-0 lg:w-72 lg:shrink-0">
              <div className="lg:sticky lg:top-24 space-y-4">
                {/* Quick copy card */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <p className="mb-3 text-sm font-semibold text-foreground">
                    Ready to use this prompt?
                  </p>
                  <CopyButton text={prompt.prompt} label="Copy prompt" />
                  <p className="mt-3 text-xs text-muted-foreground">
                    Paste directly into Claude.ai or the API.
                  </p>
                </div>

                {/* Model recommendation */}
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Recommended model
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {modelLabels[prompt.modelRecommendation] ??
                      prompt.modelRecommendation}
                  </p>
                </div>

                {/* CTA card */}
                <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5 sm:p-6">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Need help implementing this?
                  </p>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                    We build custom Claude integrations for business teams.
                  </p>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                  >
                    Book a call
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related prompts */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/20 py-16 sm:py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-6 text-lg sm:text-xl font-semibold text-foreground">
              Related prompts
            </h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <PromptCard key={p.slug} prompt={p} showFunction />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <p className="mb-2 text-base font-medium text-foreground">
            Need help implementing this prompt in your workflow?
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
