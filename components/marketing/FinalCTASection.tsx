import { Mail } from "lucide-react";
import { BookingEmbed } from "./BookingEmbed";

export function FinalCTASection() {
  return (
    <section
      id="book"
      className="py-20 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
            Ready to find out what one rebuilt workflow is worth?
          </h2>

          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-6">
            Book a 30-minute scoping call. You&rsquo;ll leave with one workflow
            worth fixing, whether or not we end up working together.
          </p>

          <p className="text-sm italic text-primary-foreground/55 leading-relaxed max-w-2xl mx-auto">
            We take on a limited number of engagements per quarter. Discovery
            calls are best used by teams already paying for Claude (or about to)
            with leadership commitment to roll out across at least one function.
          </p>
        </div>

        {/* Embedded Cal.com calendar */}
        <BookingEmbed />

        {/* Email fallback */}
        <div className="mt-8 flex items-center justify-center">
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
