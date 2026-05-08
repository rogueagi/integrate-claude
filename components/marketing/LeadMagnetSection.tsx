import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export function LeadMagnetSection() {
  return (
    <section className="py-20 md:py-32 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Two ways to get started.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Operators want prompts. Decision-makers want governance. Both live
            here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left card: Prompt Library */}
          <Link
            href="/prompts"
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8 transition-all hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="size-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <BookOpen className="size-5" />
            </div>

            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              For operators
            </span>

            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              The Claude Prompt Library
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed flex-1">
              350+ copy-ready Claude prompts organized by business function and
              role. Free, production-tested, and refreshed as new Claude
              capabilities ship.
            </p>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:translate-x-0.5 transition-transform mt-auto">
              Browse the library
              <ArrowRight className="size-4" />
            </span>
          </Link>

          {/* Right card: Deployment Playbook */}
          <Link
            href="/deployment-playbook"
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-8 transition-all hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="size-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <ShieldCheck className="size-5" />
            </div>

            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              For decision-makers
            </span>

            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              Claude Deployment Playbook for Regulated Industries
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed flex-1">
              A 30-page reference on rolling out Claude in legal, financial,
              healthcare, and federal environments. Sample AI use policies,
              vendor risk language, DPA clauses, and the adoption checklist we
              use in our own engagements.
            </p>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:translate-x-0.5 transition-transform mt-auto">
              Download the Playbook
              <ArrowRight className="size-4" />
            </span>

            <p className="text-xs text-muted-foreground italic mt-1">
              Email-gated. Sent instantly.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
