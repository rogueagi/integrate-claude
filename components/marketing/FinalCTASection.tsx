import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCTASection() {
  return (
    <section
      id="book"
      className="py-20 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
          Ready to make Claude work for your business?
        </h2>

        <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10">
          Book a 30-minute discovery call. We&rsquo;ll identify your
          highest-leverage AI opportunities and tell you exactly what we&rsquo;d
          recommend — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 [a]:hover:bg-accent/90 border-0",
            )}
          >
            Book a discovery call
            <ArrowRight className="size-4" />
          </a>

          <a
            href="mailto:hello@integrateclaude.com"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Mail className="size-4" />
            Or email us at hello@integrateclaude.com
          </a>
        </div>
      </div>
    </section>
  );
}
