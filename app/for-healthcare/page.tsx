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
  title: "Claude AI for Healthcare — Integrate Claude",
  description:
    "Claude AI integration for healthcare organizations. HIPAA-conscious deployment, vendor risk assessment, audit-ready governance. For health and life sciences teams that need AI without compliance exposure.",
  keywords: [
    "Claude AI for healthcare",
    "HIPAA AI",
    "healthcare AI consultant",
    "Claude healthcare",
    "AI for medical practices",
    "AI for health systems",
    "telehealth AI integration",
  ],
  alternates: { canonical: "/for-healthcare" },
});

const services = [
  {
    slug: "ai-security-governance",
    title: "AI Security & Governance",
    description:
      "HIPAA-conscious AI usage policy, BAA-aware vendor selection, and PHI handling controls. Audit-ready documentation mapped to NIST AI RMF, HIPAA Security Rule, and SOC 2 Trust Services Criteria.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Embed Claude into intake, documentation, and back-office workflows where PHI is properly contained. Cycle time on routine drafting and review drops; clinicians and operators stay accountable for every decision.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Internal tools built around your real operation: affiliate tracking dashboards, patient communication assistants, and custom reporting layers wired into your existing data stack and access controls.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "A two-week diagnostic that identifies the highest-leverage Claude opportunities across clinical operations, revenue cycle, marketing, and admin. Prioritized roadmap with effort and impact scoring, ready for compliance review.",
  },
];

const caseStudies = [
  {
    metric: "$2M+",
    metricLabel: "in monthly affiliate revenue tracked in real time",
    title: "Affiliate Tracking Dashboard",
    narrative:
      "A large U.S.-based peptide telehealth business had dozens of affiliate partner streams that were reconciled manually each month. We built them a custom Claude-powered tracking dashboard that pulls from their attribution data sources and surfaces affiliate performance, conversion patterns, and ROI by source in real time.",
    tag: "Healthcare",
  },
  {
    metric: "70%",
    metricLabel: "drop in customer questions reaching executives",
    title: "Healthcare Support Automation",
    narrative:
      "A growing healthcare operation had executives constantly interrupted by patient and customer questions their support team could not answer alone. We built a Claude-powered information hub trained on their product, policy, and operational data, plus an automated email follow-up sequence for routine post-visit touchpoints. Customer questions reaching executives dropped 70% in the first month.",
    tag: "Healthcare",
  },
];

const faq = [
  {
    q: "What about HIPAA?",
    a: "HIPAA does not prohibit AI usage. It requires controls. The deployments we build for covered entities and business associates run on surfaces that support a Business Associate Agreement, with a written AI usage policy that classifies PHI as a restricted input, names the workflows approved to handle it, and documents access, logging, and retention. Surfaces that do not support a BAA are explicitly excluded for PHI workflows. The artifacts feed directly into your existing HIPAA Security Rule documentation.",
  },
  {
    q: "How do you actually keep PHI out of the model?",
    a: "Three controls in combination. First, the policy classifies PHI and lists approved surfaces and workflows. Second, training and prompt-hygiene tooling teach operators how to redact and substitute identifiers when full PHI is not required for the task. Third, where PHI is required, the workflow runs on the API or an enterprise plan with a signed BAA and configured logging. Anthropic does not train its models on data submitted by API customers, which is the contractual posture most compliance teams need to see.",
  },
  {
    q: "Can Claude give medical advice?",
    a: "We do not deploy Claude in medical advice paths. Clinical judgment stays with licensed professionals. Claude handles drafting, summarization, intake processing, operational workflows, and patient-facing administrative communication, with explicit guardrails in the system prompt and a human review step before anything reaches a patient. The line between administrative and clinical is drawn deliberately and documented in the workflow.",
  },
  {
    q: "What about FDA and marketing claims for life sciences?",
    a: "For life sciences and health-adjacent commerce, marketing copy is regulated speech. Our deployments include claim-review workflows that constrain Claude to a pre-approved claims library, flag any output that introduces unapproved claims, and route everything through a human reviewer before publication. The system is built so a regulatory affairs team can audit exactly what was generated, by whom, and which claims were used.",
  },
  {
    q: "How do telehealth and digital health companies use this?",
    a: "Common patterns: affiliate and partner attribution dashboards (one of our reference engagements tracks $2M+ in monthly affiliate revenue), patient communication assistants that handle routine post-visit follow-up while keeping clinical questions routed to staff, and back-office automation across intake, scheduling, and billing review. The technology is the same; the controls and review steps are tuned to the workflow.",
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
      name: "Healthcare",
      item: "https://integrateclaude.com/for-healthcare",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Healthcare",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: "https://integrateclaude.com",
  },
  areaServed: "United States",
  description:
    "Claude AI integration for healthcare organizations. HIPAA-conscious deployment, vendor risk assessment, audit-ready governance. For health and life sciences teams that need AI without compliance exposure.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Healthcare providers, health systems, telehealth operators, life sciences teams",
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

export default function ForHealthcarePage() {
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
                For healthcare teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude for healthcare,{" "}
                <span className="text-accent">
                  with HIPAA controls built into the workflow.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Healthcare AI sits on the strictest data and liability
                constraints of any industry we work in. The teams that adopt
                well do not paste PHI into consumer chat and hope. They run on
                surfaces with a signed BAA, separate clinical judgment from
                administrative work, and document every control. We build that
                deployment, end to end, around how your operation actually runs.
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
                Healthcare adoption sits on three overlapping constraints. HIPAA
                defines what controls have to wrap any tool that touches PHI.
                State laws, telehealth regulations, and FDA expectations add
                layers on top, particularly for life sciences and digital
                health. And clinical liability sets a higher bar than almost any
                other industry for what can be automated and what stays with a
                licensed professional.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The temptation is to ban AI outright until the picture is clear,
                or to allow informal use and hope. Neither works. Staff will use
                AI either way. The deployments that survive compliance scrutiny
                separate the parts of the operation where Claude creates real
                leverage (intake, documentation, back-office, marketing review,
                partner reconciliation) from clinical judgment, then build the
                controls and review steps that match each workflow.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to draw those lines explicitly, build the deployment
                that respects them, and produce the documentation your
                compliance officer can put in front of an OCR auditor or a
                customer security review.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for healthcare teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how regulated healthcare work
                actually flows. Scoped, fixed-fee, with a documented handoff.
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
                Real outcomes from healthcare engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with telehealth operators and growing
                healthcare businesses. Names anonymized; outcomes verified.
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
                Questions healthcare leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual compliance officer, COO, and clinical
                leadership conversations.
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
              Deploy Claude in healthcare without compliance exposure.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              organization is today, what HIPAA and your customer contracts
              actually require, and which workflows are worth governing first.
              You will leave with a clear next step, whether or not we end up
              working together.
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
