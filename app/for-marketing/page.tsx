import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServiceFAQAccordion } from "@/components/marketing/ServiceFAQAccordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Claude AI for Marketing Teams — Integrate Claude",
  description:
    "Claude AI integration for marketing teams. 10× content output without losing brand voice. Voice prompt systems, lifecycle automation, multi-ICP campaign scaling. Drawn from VaynerSports operator experience.",
  keywords: [
    "Claude AI for marketing",
    "AI marketing operations",
    "Claude content marketing",
    "AI brand voice",
    "marketing AI consultant",
    "AI for marketing teams",
    "AI content production at scale",
  ],
  alternates: { canonical: "/for-marketing" },
});

const services = [
  {
    slug: "marketing-content-ops",
    title: "Marketing & Content Operations",
    description:
      "Brand voice prompt systems, production workflows for blog, email, social, and ad content, and lifecycle email automation. Drawn from operator experience inside the Vaynerchuk media empire.",
  },
  {
    slug: "prompting-and-projects",
    title: "Prompting & Projects",
    description:
      "Production-grade Claude Projects for content, lifecycle, and demand gen teams. Role-specific prompt libraries, voice training, and a quality framework so output stays on-brand at volume.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Custom internal tools and customer-facing apps. ICP-tailored landing page generators, multi-channel content adapters, and campaign portals wired into your existing stack.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "A two-week diagnostic that identifies the highest-leverage Claude opportunities across content, lifecycle, demand gen, and creative. Prioritized roadmap with effort and impact scoring.",
  },
];

const caseStudies = [
  {
    metric: "75%",
    metricLabel: "reduction in per-asset production time",
    title: "Content at Scale",
    narrative:
      "A mobile gaming app company shipping content across in-app messaging, store listings, ad creative, blog, and social cut per-asset production time by 75% while maintaining brand voice and tone consistency. Tone guides embedded directly in the workflow.",
    tag: "Marketing",
  },
  {
    metric: "12 ICPs",
    metricLabel: "served from one source brand narrative",
    title: "Performance Marketing at Scale",
    narrative:
      "A growth team needed to test Facebook ad creative across 12 distinct ICPs without losing narrative consistency. We built a Claude-powered system that generates ICP-tailored landing pages and ad copy variants from a single source brand brief. Variant production dropped from days per ICP to under an hour, enabling rapid iteration across the entire portfolio.",
    tag: "Marketing",
  },
];

const faq = [
  {
    q: "Will AI-generated content kill our brand voice?",
    a: "Only if you do it lazily. The work that actually moves brand voice consistency forward is the prompt system: a Claude Project trained on your editorial standards, your best in-house writer's actual output, and the tone register that distinguishes you. We build that system, calibrate it on real samples, and put a human review layer in front of publication. The bar is indistinguishable from your best in-house writer, not good enough.",
  },
  {
    q: "What about Google penalizing AI-generated content for SEO?",
    a: "Google has been explicit on this. Quality matters, source matters less. The March 2024 spam update targeted scaled, low-effort content abuse, not AI assistance in the production process. Content with original perspective, real editorial standards, and a human review layer is not at risk. We have never seen quality content penalized regardless of how it was drafted, and we build workflows on that basis.",
  },
  {
    q: "How do we handle attribution and disclosure?",
    a: "Disclosure is a brand and legal call, not a technical one. Most clients we work with do not disclose AI assistance the same way they do not disclose using Grammarly or working with an external editor. Where regulated speech, sponsored content, or platform-specific rules require disclosure (FTC endorsement guidelines, certain financial product copy, some platform AI labels), we build that into the workflow. The position is documented either way.",
  },
  {
    q: "Can copy quality really hold up at 10× volume?",
    a: "Yes, with the right system. A mobile gaming client cut per-asset production time by 75% across in-app messaging, store listings, ad creative, blog, and social, with tone guides embedded directly in the workflow. A growth client produces ICP-tailored landing pages and ad variants for 12 distinct audiences from a single source brief. The volume is real. The quality control is in the prompt design and the review layer, not in restraint.",
  },
  {
    q: "Who on our team needs to be involved?",
    a: "Marketing leadership for voice calibration, your strongest content writer for tone training (the prompt system learns from their actual output), and the operators who will run the workflows day to day. Light touch from leadership, deeper involvement from content and ops during the build. After handoff, the system runs on your team without us.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://integrateclaude.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: "https://integrateclaude.com/#industries",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Marketing",
      item: "https://integrateclaude.com/for-marketing",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Marketing Teams",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: "https://integrateclaude.com",
  },
  areaServed: "United States",
  description:
    "Claude AI integration for marketing teams. 10× content output without losing brand voice. Voice prompt systems, lifecycle automation, multi-ICP campaign scaling. Drawn from VaynerSports operator experience.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Marketing leaders, content teams, demand gen, lifecycle operators",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function ForMarketingPage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-6">
                <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
                For marketing teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude for marketing teams.{" "}
                <span className="text-accent">
                  10× the output. Same brand voice.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Most marketing teams adopting Claude end up with three things:
                content that sounds generic, a quality drift no one is tracking,
                and one or two power users producing most of the output. We
                replace that with a real system. A brand voice prompt system
                trained on your best work, production workflows across blog,
                email, social, and ad, and a quality framework so output stays
                on-brand at volume. Drawn from operator experience inside the
                Vaynerchuk media empire.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#book"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 [a]:hover:bg-accent/90 border-0",
                  )}
                >
                  Book a 30-min discovery call
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/prompts/marketing"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 px-8 h-12 text-base",
                  )}
                >
                  Browse marketing prompts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why this is hard */}
        <section className="py-16 sm:py-20 md:py-28 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-10 sm:mb-12 md:mb-14">
                Why this is hard right now
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Marketing AI adoption looks easy from the outside and is
                deceptively hard inside the team. The model can produce
                competent copy on demand. It cannot, on its own, sound like you.
                Brand voice consistency, editorial judgment, and the taste that
                separates the best work from the average is exactly what gets
                compressed when teams try to scale with raw prompting and no
                system.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The other compounding problem is uneven adoption. One copywriter
                on the team is producing six pieces of work an hour with Claude,
                two are using it sporadically, and the rest are writing the way
                they always did. Output volume goes up unevenly, voice drifts,
                and there is no shared system to point new hires at. The org
                gets faster in spots and more inconsistent overall.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to build the system that lets a small team ship at
                the velocity of a large agency without losing the brand. Voice
                training, production workflows, lifecycle automation, and a
                quality framework that survives a handoff to your next hire.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for marketing teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how content and growth work actually
                flows. Scoped, fixed-fee, with a documented handoff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-3 sm:gap-4 rounded-2xl border border-border bg-background p-6 sm:p-8 transition-all hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
                >
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:translate-x-0.5 transition-transform mt-auto">
                    See the engagement
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16 sm:py-20 md:py-28 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Real outcomes from marketing engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with content and growth teams. Names
                anonymized; outcomes verified.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {caseStudies.map((cs) => (
                <div
                  key={cs.title}
                  className="relative flex flex-col gap-3 sm:gap-4 rounded-xl border border-border bg-background p-5 sm:p-6"
                >
                  <span className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-muted px-2 py-0.5 text-[10px] sm:text-xs text-muted-foreground font-medium">
                    Example engagement
                  </span>
                  <div className="pt-2 pr-28 sm:pr-32">
                    <p className="text-3xl sm:text-4xl font-bold tracking-tight text-accent">
                      {cs.metric}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cs.metricLabel}
                    </p>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {cs.narrative}
                  </p>
                  <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {cs.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Questions marketing leaders ask
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual CMO, content lead, and growth team
                conversations.
              </p>
            </div>

            <div className="max-w-3xl">
              <ServiceFAQAccordion faq={faq} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 sm:mb-5">
              Ship at agency velocity. Keep your brand.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              team is today, where the voice and quality drift is happening, and
              which workflows are worth systematizing first. You will leave with
              a clear next step, whether or not we end up working together.
            </p>
            <Link
              href="/#book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 px-8 h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90 border-0",
              )}
            >
              Book a discovery call
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
