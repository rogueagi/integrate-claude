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
  title: "Claude AI for Real Estate Teams — Integrate Claude",
  description:
    "Claude AI integration for real estate operators, brokerages, and prop-tech teams. Lead engines, content systems, and custom tooling. Drawn from $24M+ delivered to a real estate client.",
  keywords: [
    "Claude AI for real estate",
    "AI for real estate",
    "real estate AI consultant",
    "AI for brokerages",
    "Claude prop tech",
    "AI lead generation real estate",
    "AI for realtors",
  ],
  alternates: { canonical: "/for-real-estate" },
});

const services = [
  {
    slug: "marketing-content-ops",
    title: "Marketing & Content Operations",
    description:
      "Listing copy, neighborhood content, lifecycle email, and social at scale, on-brand. Voice prompt systems trained on your top performers, with quality review built into every workflow.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Claude built into your lead intake, follow-up cadences, and CRM hygiene so nothing falls through. The model drafts and prepares; your agents decide and send.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Custom dashboards, lead-routing tools, and internal command centers tailored to your operation. Operator-grade software built around how your team actually works, not a generic template.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "Two-week diagnostic to identify where Claude creates the most impact on your specific operation. Prioritized roadmap with effort and impact scoring across lead, content, and ops surfaces.",
  },
];

const caseStudies = [
  {
    metric: "Custom",
    metricLabel: "operator-grade order tracking system",
    title: "Custom Order Tracking System",
    narrative:
      "Built for a high-volume catering operation serving NFL, NBA, MLB, and NHL clients, this Claude-powered system replaced a tangle of spreadsheets and email threads with a single source of truth. Built for a different vertical, but the pattern carries directly: a small operations team running enterprise-scale volume with software designed around how they actually work.",
    tag: "Custom Build",
  },
  {
    metric: "Real-time",
    metricLabel: "attribution across a high-volume operation",
    title: "Affiliate Tracking Dashboard",
    narrative:
      "Built for a peptide telehealth operator scaling fast, this dashboard gave real-time attribution and partner visibility across a network that was previously impossible to measure cleanly. Built for a different vertical, but the pattern is the one real estate operators ask for most: attribution discipline, partner accountability, and a single screen that tells you where the next deal is coming from.",
    tag: "Custom Build",
  },
];

const faq = [
  {
    q: "Can Claude work with our MLS, transaction management, and CRM tools?",
    a: "Yes. We integrate with the systems real estate teams actually use: Follow Up Boss, kvCORE, Lofty, Sierra Interactive, BoomTown, and the major transaction management platforms via their APIs and standard data exports. Where MLS data is needed we work with the IDX feed or RETS connection your brokerage already has. The pattern is to design around your existing stack, not ask you to rip and replace.",
  },
  {
    q: "What about real estate compliance — disclosures, fair housing, professional standards?",
    a: "Compliance is built into the workflow, not bolted on at review time. Prompt systems are trained to flag risk language (steering, fair housing red flags, unsupported claims, missing disclosures) before content reaches the agent. Human review is mandatory on all client-facing copy. We document the controls so your broker, your E&O carrier, and your state association have a clear answer to how AI is being used in the practice.",
  },
  {
    q: "We've tried generic AI — why is this different?",
    a: "Generic AI gives every team in your market the same outputs. The systems we build are specific to your operation: your voice, your ICP, your follow-up cadences, your CRM, your conversion patterns. They are integrated into the tools your agents already work in instead of living in a side browser tab. And they are owned by your team after handoff, not rented from a vendor that quietly raises prices once you depend on it.",
  },
  {
    q: "How do agents adopt this without losing their personal touch?",
    a: "Claude amplifies the agent's voice, it does not replace it. The pattern is co-pilot: the model drafts the listing description, the follow-up email, the neighborhood guide, the open-house recap. The agent reviews, edits, and sends in their own name. The output reads like the agent on their best day, not like a chatbot. Adoption work includes voice training so the system learns each agent's actual tone, not a generic real-estate-bot register.",
  },
  {
    q: "What's the typical timeline?",
    a: "An AI Readiness Audit runs two weeks from kickoff to readout. A workflow integration engagement runs 4 to 12 weeks depending on scope (single workflow at the lower end, multi-workflow program at the upper end). A custom build runs 6 to 14 weeks depending on what we are shipping. We give a fixed-fee quote and a delivery date upfront, not an hourly estimate.",
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
      name: "Real Estate",
      item: `${BASE_URL}/for-real-estate`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Real Estate Teams",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: BASE_URL,
  },
  areaServed: "United States",
  description:
    "Claude AI integration for real estate operators, brokerages, and prop-tech teams. Lead engines, content systems, and custom tooling drawn from $24M+ delivered to a real estate client.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Real estate brokerages, team leaders, individual top-producing agents, and prop-tech operators",
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

export default function ForRealEstatePage() {
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
                For real estate teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude AI for real estate operators who treat their business{" "}
                <span className="text-accent">like an operating engine.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Real estate runs on lead flow, content output, follow-up
                discipline, and operational consistency. We have built the
                systems that turn a small team into a high-volume,
                high-conversion machine. The result for one client: $24M+ in
                revenue generated through systematic AI integration.
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
                Real estate is the industry where every agent has tried ChatGPT,
                every brokerage has heard a vendor pitch, and almost no one has
                actually built AI into how the business runs. Lead flow comes in
                faster than agents can follow up. Listing copy gets written
                twice or not at all. Lifecycle email is theory. The CRM is
                half-clean. Meanwhile a small number of teams have quietly built
                a real engine, and the gap between them and everyone else is
                widening every quarter.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The compliance picture is real and frequently ignored. Fair
                housing language, steering risk, unsupported claims, and
                disclosure requirements all apply whether the words came from an
                agent or a model. Generic AI tools do not know your state rules,
                your brokerage policy, or your professional standards. The teams
                that adopt without governance create exposure they cannot see
                until something goes wrong.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to build the operating engine and the controls that
                go with it. Lead intake and follow-up that runs on Claude under
                the hood, content systems that keep voice and compliance in
                line, and custom tooling for the teams whose operation has
                outgrown off-the-shelf software. Documented and handed off so
                your team owns it, not us.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for real estate teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how real estate operations actually
                run. Scoped, fixed-fee, with a documented handoff.
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
                Analogous custom builds
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                The real estate engagement that produced $24M+ in revenue is
                under NDA. These two builds are from different verticals, but
                the operator pattern carries directly: high-volume teams that
                outgrew off-the-shelf software and needed something built around
                their actual operation.
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
                Questions real estate leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual broker, team leader, and top-producing agent
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
              Build the engine your competitors will not.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              operation is today, where the leverage actually sits, and which
              workflows are worth building first. You will leave with a clear
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
