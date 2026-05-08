import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AuditPromo() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-5 sm:mb-6">
          Start with a fixed-fee, two-week diagnostic.
        </h2>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 sm:mb-6 max-w-3xl mx-auto">
          Most engagements start with our AI Readiness Audit: a two-week,
          fixed-fee diagnostic that maps your highest-leverage Claude
          opportunities, drafts initial governance language, and ends with a
          written go/no-go recommendation.
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
          If you don&rsquo;t continue with us, you keep the deliverables.
          That&rsquo;s the point. The audit is valuable on its own, and it makes
          the decision to continue (or not) a clear one.
        </p>

        <Link
          href="/services/ai-readiness-audit"
          className={cn(
            buttonVariants({ size: "lg" }),
            "gap-2 px-6 sm:px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 [a]:hover:bg-accent/90 border-0 w-full sm:w-auto",
          )}
        >
          Start with the AI Readiness Audit
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
