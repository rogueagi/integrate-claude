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
            Ready to make Claude work for your business?
          </h2>

          <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Pick a 30-minute slot below. We&rsquo;ll learn about your business
            and tell you exactly where we&rsquo;d start, no obligation.
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
