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
  title: "Claude AI for SaaS Teams — Integrate Claude",
  description:
    "Claude AI integration for B2B SaaS companies. Internal ops tooling, customer-facing AI features, and the security and governance work that lets you ship Claude inside a regulated product.",
  keywords: [
    "Claude AI for SaaS",
    "AI for B2B SaaS",
    "Claude API integration",
    "AI SaaS features",
    "Anthropic API SaaS",
    "AI for B2B teams",
    "Claude for product teams",
  ],
  alternates: { canonical: "/for-saas" },
});

const services = [
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Customer-facing AI features and internal tools, designed and built end-to-end. Anthropic API architecture, prompt design, cost controls, and a deployment your engineering team can own after handoff.",
  },
  {
    slug: "ai-security-governance",
    title: "AI Security & Governance",
    description:
      "Security review, vendor risk language, and audit-ready policy your customers' security teams will accept. Aligned to NIST AI RMF and SOC 2, designed to clear procurement instead of stalling deals.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Claude built into how your internal teams operate (RevOps, support, finance, eng), not just into your product. The internal leverage compounds while the customer-facing build matures.",
  },
  {
    slug: "prompting-and-projects",
    title: "Prompting & Projects",
    description:
      "Production-grade system prompts and Claude Projects for the use cases that touch real customer data. Versioned, tested, and documented like code, owned by the team after we leave.",
  },
];

const caseStudies = [
  {
    metric: "15+ hrs",
    metricLabel: "saved per AE per week on CRM and email",
    title: "RevOps: CRM + Gmail Intelligence",
    narrative:
      "A 20+ person B2B SaaS sales org gave back 15+ hours per AE per week after we embedded Claude into their CRM and Gmail. Call notes summarized into next steps, account research auto-prepped before discovery calls, and follow-ups drafted in the rep's voice. Internal ops leverage that paid for itself in the first quarter.",
    tag: "B2B SaaS",
  },
  {
    metric: "70%",
    metricLabel: "drop in customer questions reaching execs",
    title: "Customer Support Automation",
    narrative:
      "A growing SaaS company eliminated 70% of customer questions that previously escalated to the executive team. Claude was embedded into the support layer with grounded knowledge from the product, runbooks, and historical tickets. Tier-one volume dropped, response time improved, and execs got their inbox back.",
    tag: "Customer Support",
  },
];

const faq = [
  {
    q: "How do you handle Anthropic API costs at scale?",
    a: "We design with cost in the architecture from day one. Model selection per task (Haiku, Sonnet, and Opus where each fits), prompt caching to amortize large system prompts, output streaming for UX without paying for unused tokens, and per-customer or per-feature usage caps wired in before launch. You get projected costs before we ship and ongoing cost dashboards after. Most cost overruns we see in the wild come from skipping these decisions, not from the API itself.",
  },
  {
    q: "What about customer data and SOC 2?",
    a: "Claude usage runs on the Anthropic API or an enterprise plan with a signed DPA. By contract, Anthropic does not train its models on data submitted by API customers. We pair that posture with explicit data flow design (what crosses the boundary, where it is logged, how long it is retained), audit logging on AI calls, and policy language that maps cleanly into your existing SOC 2 controls. The output is documentation your auditor and your customers' security reviewers can both consume.",
  },
  {
    q: "Should we build Claude into our product or use it internally first?",
    a: "Internal first, almost always. Internal ops gives you a faster feedback loop, lower stakes if a prompt regresses, and a real understanding of where Claude is reliable enough to put in front of customers. Once governance, prompt patterns, and cost controls are proven inside, graduating to a customer-facing feature is a smaller jump. Companies that go the other direction tend to ship a chat widget that nobody trusts and learn nothing from it.",
  },
  {
    q: "Can we own the prompts and integration logic after?",
    a: "Yes. Full handoff is the default, not an upsell. You get a documented prompt library versioned like code, the integration architecture diagrammed, a runbook for common operational issues, and onboarding for the engineer or PM who will own it. About half our clients retain us for ongoing iteration; the other half run independently. Both paths work, and we make sure either is viable on day one.",
  },
  {
    q: "How fast can we ship a customer-facing AI feature?",
    a: "Typical build cycles run 6 to 14 weeks depending on scope and the maturity of your existing infrastructure. A focused feature on top of clean APIs and a stable data model is at the lower end. A multi-surface feature with new data plumbing, billing integration, and managed cost controls is at the upper end. We move fast, but we do not ship brittle software, and we are honest at scoping about what is realistic.",
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
      name: "SaaS",
      item: `${BASE_URL}/for-saas`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for SaaS Companies",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: BASE_URL,
  },
  areaServed: "United States",
  description:
    "Claude AI integration for B2B SaaS companies. Internal ops tooling, customer-facing AI features, and the security and governance work that lets you ship Claude inside a regulated product.",
  audience: {
    "@type": "Audience",
    audienceType:
      "B2B SaaS founders, CTOs, VPs of Engineering, and product leaders building AI into shipping products",
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

export default function ForSaaSPage() {
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
                For SaaS and B2B tech teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude AI for SaaS teams shipping{" "}
                <span className="text-accent">
                  real product, not chatbot demos.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                B2B SaaS companies that win with AI do not just bolt on a chat
                widget. They build Claude into the surfaces that already drive
                their business: internal ops tools, customer workflows, support,
                and the data layer underneath. We design and ship that work.
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
                  href="/deployment-playbook"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 px-8 h-12 text-base",
                  )}
                >
                  Read the deployment playbook
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
                B2B SaaS has a specific AI problem. The board wants an AI story.
                Sales is hearing it on every deal. The product team knows that a
                generic chat widget on top of the dashboard will not move the
                needle and will create new support load and security questions.
                Meanwhile every team inside the company (RevOps, support,
                finance, engineering) is already using Claude on their own,
                often without policy and almost always without measurement.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Then the customer security review arrives. Procurement asks
                about the model provider, the data flow, retention, training
                use, audit logs, and how this maps to SOC 2 and the customer's
                own AI policy. A team that built an AI feature on a Friday and a
                vendor questionnaire on Monday loses a quarter answering it. The
                deal stalls. The feature gets pulled until governance catches
                up.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our job is to ship the actual work and the documentation that
                travels with it. Internal ops tooling that creates real leverage
                now, customer-facing features designed with cost and governance
                built in, and the security artifacts your buyers' security teams
                already know how to read. Owned by your team after handoff, not
                a black box you have to keep paying us to run.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for SaaS teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how SaaS companies actually ship.
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
                Real outcomes from SaaS engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with B2B SaaS teams. Names anonymized;
                outcomes verified.
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
                Questions SaaS leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual founder, CTO, and product leadership
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
              Ship Claude into your product without the chaos.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through your current
              stack, the AI use cases you are weighing, and what your customers'
              security teams will ask for. You will leave with a clear next
              step, whether or not we end up working together.
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
