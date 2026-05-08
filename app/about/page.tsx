import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";
import { founder, extendedTrackRecord } from "@/lib/founder";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Integrate Claude is an independent consultancy founded by Ben Frost. Cybersecurity, marketing operations, and revenue-generation track record applied to Claude integration.",
  alternates: { canonical: "/about" },
});

const principles = [
  {
    title: "Specialists, not generalists",
    body: "We work exclusively with Claude. Our advice is current, specific, and actionable, not generic AI strategy.",
  },
  {
    title: "Built for operators",
    body: "Most of our work is designed for non-technical decision-makers. We bring the technical depth so they don't have to.",
  },
  {
    title: "Cybersecurity-first",
    body: "We come from a cyber background. Security and governance are baked into every Claude integration we build, not bolted on.",
  },
  {
    title: "Honest assessments",
    body: "If AI doesn't fit a workflow, we'll tell you. We're not here to force AI into places it doesn't belong.",
  },
  {
    title: "Fixed-fee, no scope creep",
    body: "Every engagement is scoped at kickoff with a fixed fee. You know the number before we start, and we don't bill by the hour.",
  },
  {
    title: "Built for handoff, not lock-in",
    body: "We document everything and train your team to maintain it. When the engagement ends, you own the system. No annual contracts, no vendor dependency.",
  },
];

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://cal.com/integrateclaude/discovery-call-integrate-claude";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero / Mission */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              About Integrate Claude
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Integrate Claude is an independent consultancy that helps
              businesses move from casual Claude usage to deeply integrated,
              compounding AI workflows. We bring training, prompt engineering,
              custom software, and ongoing partnership under one roof. The goal
              is straightforward: make AI part of how work actually gets done,
              not a side experiment that fades after the first few weeks.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
              The founder
            </h2>
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
              <div className="relative w-full sm:w-72 sm:h-72 aspect-square sm:flex-shrink-0 overflow-hidden rounded-xl bg-muted">
                <Image
                  src={founder.photo}
                  alt="Ben Frost, Founder of Integrate Claude"
                  fill
                  sizes="(max-width: 640px) 100vw, 288px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-5 flex-1">
                <div>
                  <p className="text-xl font-semibold text-foreground">
                    {founder.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {founder.role}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {founder.longBio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base text-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track record */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Track record
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extendedTrackRecord.map(({ metric, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 rounded-xl border border-border bg-background p-6"
                >
                  <p className="text-3xl font-bold tracking-tight text-accent leading-none">
                    {metric}
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work / Principles */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                How we work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map(({ title, body }) => (
                <div
                  key={title}
                  className="flex flex-col gap-2 rounded-xl border border-border bg-background p-6"
                >
                  <p className="text-base font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Independence / disclaimer */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Integrate Claude is an independent consultancy. We are not
              affiliated with, endorsed by, or sponsored by Anthropic, PBC.
              &ldquo;Claude&rdquo; and the Claude logo are trademarks of
              Anthropic, PBC.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
              Ready to talk?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10">
              30-minute discovery call. We&rsquo;ll learn about your business
              and tell you exactly where we&rsquo;d start, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 [a]:hover:bg-accent/90 border-0",
                )}
              >
                Book a discovery call
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
