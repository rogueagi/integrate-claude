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
  title: "Claude AI for Sales Teams — Integrate Claude",
  description:
    "Claude AI integration for sales and RevOps teams. Automated outreach engines, deal intelligence layers, and the prompt systems that scale rep productivity without scaling headcount.",
  keywords: [
    "Claude AI for sales",
    "AI for sales teams",
    "Claude RevOps",
    "AI sales automation",
    "AI for SDR",
    "AI for AE",
    "Claude sales prompts",
    "AI BD outreach",
  ],
  alternates: { canonical: "/for-sales" },
});

const services = [
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Claude built into your CRM and outreach stack so reps stop copy-pasting between tools. Lead enrichment, sequence drafting, and pipeline hygiene running where the work already happens.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Custom deal intelligence dashboards, prospect enrichment layers, and internal tools your AEs actually use. Built around the specifics of your sales motion, not a generic template.",
  },
  {
    slug: "prompting-and-projects",
    title: "Prompting & Projects",
    description:
      "Production-grade prompt systems for cold outreach, follow-ups, discovery prep, and proposal drafting. Trained on your top performers, owned by your team after handoff.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "Two-week diagnostic to map where Claude creates real revenue impact on your sales motion. Prioritized roadmap with effort and impact scoring across SDR, AE, and RevOps surfaces.",
  },
];

const caseStudies = [
  {
    metric: "10×",
    metricLabel: "increase in qualified outbound volume",
    title: "Automated BD Outreach System",
    narrative:
      "A nationwide tax advisory firm scaled qualified outbound by an order of magnitude after we built a Claude-powered prospecting and sequencing engine on top of their existing CRM. Reps stopped writing one-off emails and started reviewing pre-drafted, account-specific outreach. The pipeline grew without adding headcount.",
    tag: "Sales",
  },
  {
    metric: "15+ hrs",
    metricLabel: "saved per AE per week on CRM and email",
    title: "RevOps: CRM + Gmail Intelligence",
    narrative:
      "A 20+ person B2B sales org gave back 15+ hours per AE per week after we embedded Claude into their CRM and Gmail. Call notes summarized into next steps, account research auto-prepped before discovery calls, and follow-ups drafted in the rep's voice. Reviewers still send, but they spend their time selling, not typing.",
    tag: "RevOps",
  },
];

const faq = [
  {
    q: "How does Claude integrate with our CRM?",
    a: "We integrate with HubSpot, Salesforce, Pipedrive, and Attio out of the gate, and with anything else that has a usable API. The pattern is the same: Claude sits behind your CRM as an intelligence layer, reading account and activity context and writing back drafts, summaries, and next steps. Reps interact with the CRM they already use; the AI work happens underneath. We document the integration so your RevOps or IT team can maintain it after handoff.",
  },
  {
    q: "Will the outreach feel generic at scale?",
    a: "Only if it is generic. Our prompt systems are trained on your top performers' actual outreach, your ICP definitions, and the specific trigger events worth reaching out about. Drafts arrive account-specific and ready for human review, not blasted directly. The bar is 'indistinguishable from your best AE on a good day,' not 'good enough to send'. Volume comes from removing the blank-page tax, not from automating the send button.",
  },
  {
    q: "What about deliverability — won't AI-written emails land in spam?",
    a: "Deliverability is a function of sender reputation, list hygiene, content quality, and warm-up discipline, not whether a human or a model drafted the words. Our workflows produce email that reads like a real person wrote it, paired with the standard sending hygiene every modern outbound program needs (warmed inboxes, sane volume ramps, list quality controls). When teams burn their domain it is almost never the AI that did it.",
  },
  {
    q: "How do AEs adopt this without it feeling like surveillance?",
    a: "We frame and deploy these systems as co-pilots, not replacements or trackers. The model drafts, summarizes, and prepares; the rep reviews, decides, and sends. Adoption work includes role clarity (here is what the system does for you, here is what stays yours), in-flow training inside the tools they already use, and a feedback loop so reps can flag when a draft misses the voice. The reps that get time back become the loudest internal advocates.",
  },
  {
    q: "Can we measure the lift?",
    a: "Yes, and we build the measurement in from day one. Every workflow we ship has a before/after benchmark on the metric that matters (sequence reply rate, hours per rep on admin, pipeline created per AE, cycle time from MQL to opportunity). We are honest when a workflow does not move the number, and we recommend cutting or reworking it. Attribution discipline is part of the deliverable, not an afterthought.",
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
      name: "Sales",
      item: `${BASE_URL}/for-sales`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Sales Teams",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: BASE_URL,
  },
  areaServed: "United States",
  description:
    "Claude AI integration for sales and RevOps teams. Automated outreach engines, deal intelligence layers, and prompt systems that scale rep productivity without scaling headcount.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Sales leaders, RevOps leaders, VP Sales, CROs, and B2B founders running outbound and AE motions",
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

export default function ForSalesPage() {
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
                For sales and RevOps teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude AI for sales teams that need to{" "}
                <span className="text-accent">
                  scale without scaling headcount.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Most sales orgs that try Claude end up with a few reps using it
                for emails. The teams that pull ahead build it into the engine:
                outreach, deal review, CRM hygiene, all running on Claude under
                the hood. We design and ship that engine.
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
                  href="/prompts/sales"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 px-8 h-12 text-base",
                  )}
                >
                  Browse sales prompts
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
                Sales is the function where AI looks easiest and is actually
                hardest to do well. Every rep can write a passable email with
                Claude in thirty seconds. That is not the bar. The bar is a
                team-wide system where outreach is account-specific at volume,
                discovery prep happens before the rep opens the call, CRM
                hygiene is automatic, and forecasting is grounded in the
                conversations that actually took place. None of that comes from
                a prompt library shared in Slack.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The pressure is not subtle. Boards want pipeline efficiency, not
                more AEs. Buyers are getting AI-drafted outreach from every
                competitor in the inbox, and the generic stuff has stopped
                working. Newer reps already use Claude on the side for
                everything from research to objection handling, often outside
                any policy. Leadership is left guessing what is actually driving
                results and what is theater.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to replace ad-hoc rep usage with a designed system.
                Outreach engines that get reviewed before they send, deal
                intelligence layers that read your CRM and write back next
                steps, and a prompt library owned by RevOps. Measured against
                the metrics that actually move the number, with a documented
                handoff so your team runs it after we leave.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for sales teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how a real revenue org operates.
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
                Real outcomes from sales engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with U.S. revenue teams. Names anonymized;
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
                Questions sales leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual CRO, VP Sales, and RevOps conversations.
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
              Get Claude into your revenue engine.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              sales motion is today, where the leverage actually sits, and which
              workflows are worth integrating first. You will leave with a clear
              next step, whether or not we end up working together.
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
