import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServiceFAQAccordion } from "@/components/marketing/ServiceFAQAccordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://integrateclaude.com";

export const metadata = buildMetadata({
  title: "Claude AI for E-commerce Teams — Integrate Claude",
  description:
    "Claude AI integration for e-commerce operators. Product content at scale, performance marketing across multiple ICPs, attribution dashboards, and the internal tooling that turns a small team into a high-output engine.",
  keywords: [
    "Claude AI for ecommerce",
    "AI for e-commerce",
    "AI product descriptions",
    "AI for online retail",
    "Claude ecommerce",
    "AI marketing ecommerce",
    "AI for DTC brands",
  ],
  alternates: { canonical: "/for-ecommerce" },
});

const services = [
  {
    slug: "marketing-content-ops",
    title: "Marketing & Content Operations",
    description:
      "Brand voice prompt systems, product content at scale, lifecycle email automation, and multi-channel adaptation. One source narrative reshaped into every surface your team needs to ship, on the cadence your roadmap actually requires.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Custom dashboards, attribution layers, and internal tooling for catalog ops, content ops, and customer service teams. The internal product surface that lets a small team operate like a much larger one.",
  },
  {
    slug: "data-analytics-intelligence",
    title: "Data & Analytics Intelligence",
    description:
      "Claude-powered narrative on top of your BI tools so weekly metrics, cohort analysis, and exec summaries write themselves. Numbers stay deterministic from your source of truth; the prose becomes consistent and on-brand.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Claude built into how your team handles product launches, ad creative iteration, and customer ops. The handoffs between merchandising, marketing, and CX get tightened so launches actually ship on the date on the calendar.",
  },
];

const caseStudies = [
  {
    metric: "75%",
    metricLabel: "reduction in content production time",
    title: "Content at Scale",
    narrative:
      "A high-volume mobile gaming operator cut content production time by 75% after we built a Claude-powered content engine tuned to their voice and editorial standards. The same pattern, brand voice prompt system plus production workflow plus quality review, applies directly to e-commerce catalog content, lifecycle email, and ad creative variants.",
    tag: "Analogous high-volume content",
  },
  {
    metric: "12 ICPs",
    metricLabel: "from one source narrative",
    title: "Performance Marketing at Scale",
    narrative:
      "A performance marketing client needed to address twelve distinct ideal customer profiles from a single source narrative without the message getting diluted or the team burning out. We built a prompt system that adapts copy, hooks, and creative angle to each ICP while preserving the underlying positioning. Output volume went up substantially and approval cycles got faster.",
    tag: "E-commerce",
  },
  {
    metric: "$2M+",
    metricLabel: "monthly affiliate revenue tracked",
    title: "Affiliate Tracking Dashboard",
    narrative:
      "A direct-response operator needed real-time visibility into more than $2M of monthly affiliate revenue across multiple programs. We built a custom dashboard that consolidates the data, surfaces the partners and offers that are actually working, and writes the weekly summary in their voice. The same architecture pattern applies to attribution, catalog ops, and CX intelligence dashboards.",
    tag: "E-commerce",
  },
];

const faq = [
  {
    q: "Can Claude work with our PIM, catalog, and store backend?",
    a: "Yes. We build to API where one exists and to your data layer where it does not. Shopify, BigCommerce, custom platforms, and headless setups all integrate cleanly. The deployments we ship sit on top of your existing stack rather than asking you to migrate, and we document the integration so your engineering team can maintain it after handoff.",
  },
  {
    q: "Will AI-generated product descriptions hurt SEO?",
    a: "Only if the quality is bad. Google has been clear that quality matters and source matters less. Our workflow produces content with editorial standards, original perspective, and human review on every output. The bar is indistinguishable from your best in-house writer, not good enough for a long-tail SKU. Properly executed, AI-assisted catalog content performs the same as in-house writing.",
  },
  {
    q: "How do you maintain brand voice across thousands of SKUs?",
    a: "Voice prompt systems trained on your existing best-in-class copy, with quality controls baked into the workflow. The prompt captures tone, register, editorial conventions, and the specific rules your category uses. A reviewer still sees output before it ships, but they are reviewing on-brand drafts instead of writing from scratch.",
  },
  {
    q: "Can this help with customer service automation?",
    a: "Yes. We build draft-response and information-hub patterns tied to your help center and product data. Agents work from a Claude-generated draft and an answer panel pulled from your sources of truth, then send what is right for the customer. Volume per agent goes up, response time drops, and the brand voice stays consistent.",
  },
  {
    q: "What is the typical lift in content output?",
    a: "Historically three to ten times per content team member, depending on starting point and category breadth. A small in-house team going from manual catalog descriptions to a brand voice prompt system tends to see the larger end of that range. Teams that already have strong editorial discipline see the lower end but with much faster cycle times.",
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
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: `${BASE_URL}/#industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "E-commerce",
      item: `${BASE_URL}/for-ecommerce`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for E-commerce Teams",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: BASE_URL,
  },
  areaServed: "United States",
  description:
    "Claude AI integration for e-commerce operators. Product content at scale, performance marketing across multiple ICPs, attribution dashboards, and the internal tooling that turns a small team into a high-output engine.",
  audience: {
    "@type": "Audience",
    audienceType:
      "E-commerce operators, DTC brand leadership, marketing and content teams, and ecommerce ops",
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

export default function ForEcommercePage() {
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
                For e-commerce teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude AI for e-commerce teams running{" "}
                <span className="text-accent">
                  more SKUs than people can handle.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                E-commerce operations live in the gap between catalog growth and
                team size. Product content, ad creative, lifecycle messaging,
                and customer questions all scale faster than headcount. We build
                the systems that close that gap: prompt engines tuned to your
                brand voice, performance marketing variants at scale, and
                dashboards that show what is actually working.
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
                E-commerce work compounds in volume in a way other industries do
                not. Every new SKU is a description, a set of variants, an ad,
                an email, a help-center entry, and a return policy edge case.
                Every new ICP doubles the creative surface. Every new channel
                splits attention again. The teams that ship through this stage
                are not the ones with more headcount; they are the ones with the
                right systems.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Most operators have tried generic AI content tools and bounced
                off them. The output sounds like every other AI-written brand,
                the workflow does not fit the way merchandising and marketing
                actually hand off work, and there is no quality bar built in.
                The result is more bad content, faster, which is worse than the
                original problem. The fix is not a better tool. It is a tuned
                system: brand voice, editorial workflow, quality controls, and
                the integration into your stack so output does not stop at the
                draft.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to build that system. Brand voice prompt engines
                tuned to your existing best work, production workflows for
                catalog and lifecycle and ad surfaces, and the dashboards that
                show what is moving the number. Shipped on a fixed-fee scope
                with a documented handoff so your team owns the surface after we
                leave.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for e-commerce teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how e-commerce teams actually scale.
                Scoped, fixed-fee, with a documented handoff.
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
                Real outcomes from e-commerce engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with e-commerce and high-volume content
                operators. Names anonymized; outcomes verified.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                Questions e-commerce leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual founder, head of marketing, and ops
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
              Get the systems your catalog and channels need.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              content and ops surface is today, where it is breaking under
              volume, and which systems are worth building first. You will leave
              with a clear next step, whether or not we end up working together.
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
