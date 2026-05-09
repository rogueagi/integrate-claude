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
  title: "Claude AI for Finance Teams — Integrate Claude",
  description:
    "Claude AI integration for finance and CFO teams. Custom reporting dashboards, narrative automation over BI tools, audit-ready governance. Designed for regulated finance environments.",
  keywords: [
    "Claude AI for finance",
    "AI for CFO",
    "AI financial reporting",
    "Claude finance",
    "AI for finance teams",
    "financial services AI consultant",
    "AI for FP&A",
  ],
  alternates: { canonical: "/for-finance" },
});

const services = [
  {
    slug: "data-analytics-intelligence",
    title: "Data & Analytics Intelligence",
    description:
      "A Claude-powered narrative layer over your existing BI stack. Variance analysis, cohort commentary, and exec summaries generated from your real source-of-truth numbers, in your team's voice, on the cadence you already report.",
  },
  {
    slug: "ai-security-governance",
    title: "AI Security & Governance",
    description:
      "AI usage policy mapped to NIST AI RMF and SOC 2 Trust Services Criteria. Vendor risk file, MNPI handling controls, and audit-ready documentation that survives regulator scrutiny and customer security questionnaires.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Embed Claude into close, FP&A, and BD workflows where it actually compounds. Memo drafting from variance data, deal-team briefings from CRM context, and routine review work moved off senior analyst plates.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "A two-week diagnostic that maps the highest-leverage AI integration opportunities across finance, accounting, and FP&A. Prioritized roadmap with effort and impact scoring, ready for board and audit committee review.",
  },
];

const caseStudies = [
  {
    metric: "83%",
    metricLabel: "reduction in monthly financial reporting prep",
    title: "Custom CFO Reporting Dashboard",
    narrative:
      "A CFO who spent days each month assembling financial reports got a custom Claude-powered dashboard built around every metric he actually reviews. Variance analysis, trend commentary, and exec-summary narrative now generate in a single pass against his existing data sources, cutting monthly reporting prep by 83%.",
    tag: "Finance",
  },
  {
    metric: "10×",
    metricLabel: "increase in daily BD outreach",
    title: "Automated BD Outreach (Tax Advisory)",
    narrative:
      "A nationwide tax advisory firm's business development team needed to scale outreach without scaling headcount. We built a fully automated outreach engine that pulls from their CRM and recent tax legislation updates to generate personalized prospect messages. Daily volume grew more than 10×, with messaging calibrated to each prospect's industry and recent regulatory exposure.",
    tag: "Finance",
  },
];

const faq = [
  {
    q: "What about SEC, FINRA, and other regulator exposure?",
    a: "Regulated finance environments require AI usage to be described, logged, and supervised the same way other tooling is. Our governance work produces an AI usage policy that aligns with SEC Rule 17a-4 record retention principles, FINRA supervision expectations, and SOC 2 Trust Services Criteria. The artifacts are built so your compliance team can map them to whichever regulator framework applies to your firm.",
  },
  {
    q: "How does this fit with model risk management?",
    a: "Claude is treated as a vendor model under your existing MRM framework, not a black box. We document inputs, intended use, validation approach, performance monitoring, and human review requirements per workflow. Banks subject to SR 11-7 use that documentation to fit Claude into their existing model inventory and tiering process. We do not replace MRM, we feed it.",
  },
  {
    q: "What does the audit trail look like?",
    a: "API deployments log every request and response with user attribution, timestamp, workflow tag, and cost. Retention is configured to match your existing record retention policy. Anthropic maintains SOC 2 Type II and ISO 27001, and by contract does not train its models on data submitted by API customers. That stack of artifacts is what auditors and customer security questionnaires actually want to see.",
  },
  {
    q: "How do you keep the model from making numbers up?",
    a: "We do not let Claude generate numbers. Numbers come from your source of truth, whether that is the GL, a Looker query, a Snowflake view, or a board pack export. Claude generates the narrative around those numbers and is constrained by the prompt to cite the underlying source for every figure. Reviewers verify the figures against source before anything goes external. That control is in the workflow itself, not just in policy.",
  },
  {
    q: "Can we use this for material non-public information?",
    a: "Only with documented controls. The AI usage policy explicitly classifies MNPI as a restricted input, names the surfaces approved for it (typically the API on an enterprise plan, never consumer chat), and requires sign-off before any new MNPI workflow goes into production. Most firms route MNPI work through a smaller approved-user list with additional logging. We document the controls so an examiner can see exactly how it works.",
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
      name: "Finance",
      item: "https://integrateclaude.com/for-finance",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Finance Teams",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: "https://integrateclaude.com",
  },
  areaServed: "United States",
  description:
    "Claude AI integration for finance and CFO teams. Custom reporting dashboards, narrative automation over BI tools, audit-ready governance. Designed for regulated finance environments.",
  audience: {
    "@type": "Audience",
    audienceType:
      "CFOs, finance leadership, FP&A teams, financial services firms",
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

export default function ForFinancePage() {
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
                For finance teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude for finance teams,{" "}
                <span className="text-accent">
                  built around the audit trail.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Most finance teams already use AI for variance commentary, deck
                drafting, and one-off analysis, often outside any policy. We
                replace that with governed deployment: Claude wired into your BI
                stack with a deterministic numbers layer and an AI narrative
                layer, model risk documentation that fits your existing MRM
                framework, and reporting workflows that hold up to SEC, FINRA,
                or SOC 2 scrutiny.
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
                Finance leaders sit between two pressures. Boards and operators
                want the speed gains AI is producing in every other function,
                and the team itself is already using it. At the same time,
                regulators, auditors, and customers expect a level of evidence
                and supervision that most ad-hoc AI usage cannot produce.
                Material non-public information, customer financial data, and
                forward-looking statements are exactly the inputs that should
                not be flowing through unmanaged accounts.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The other complication is that finance work has a hallucination
                problem the model cannot solve on its own. A single wrong figure
                in a board pack or 10-K narrative is a different kind of failure
                than a typo. The deployments that work treat the numbers as
                deterministic and only the narrative as AI-assisted, with
                sign-off built into the workflow.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to make those constraints explicit, build them into
                the deployment, and document the result so it survives the next
                examination, audit, or board-level question.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for finance teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how regulated finance work actually
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
                Real outcomes from finance engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with CFO offices, FP&amp;A teams, and tax
                advisory firms. Names anonymized; outcomes verified.
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
                Questions finance leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual CFO, controller, and audit-committee
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
              Get the speed gains, keep the audit trail.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              finance team is today, what auditors and regulators will ask for,
              and which workflows are worth governing first. You will leave with
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
