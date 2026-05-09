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
  title: "Claude AI for Law Firms — Integrate Claude",
  description:
    "Claude AI integration for legal teams. Document drafting automation, secure client data handling, audit-ready governance. Built for law firms that need AI without privilege risk.",
  keywords: [
    "Claude AI for law firms",
    "legal AI implementation",
    "AI for lawyers",
    "Claude legal",
    "law firm AI consultancy",
    "AI legal document drafting",
    "AI for legal teams",
  ],
  alternates: { canonical: "/for-legal" },
});

const services = [
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Embed Claude into intake, drafting, and matter review so engagement letters, standard motions, and routine memos move from input to first draft in a fraction of the time, with the firm's voice preserved.",
  },
  {
    slug: "ai-security-governance",
    title: "AI Security & Governance",
    description:
      "Privilege-aware AI usage policy, vendor risk file, and partner-ratified controls. Audit-ready documentation that holds up in front of malpractice carriers, clients, and bar counsel.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Internal tools that go beyond what a prompt can do. Matter dashboards, conflict-aware research assistants, and document-assembly engines wired into your DMS.",
  },
  {
    slug: "prompting-and-projects",
    title: "Prompting & Projects",
    description:
      "Production-grade Claude Projects for litigation, transactional, and regulatory practice groups. Reliable outputs at scale, with prompt libraries documented and owned by the firm.",
  },
];

const caseStudies = [
  {
    metric: "70%",
    metricLabel: "reduction in legal document drafting time",
    title: "Legal Workflow Automation",
    narrative:
      "A 210-attorney law firm cut drafting time on routine legal documents by 70% after we embedded Claude into their workflow. Client intake forms, engagement letters, and standard motions now move from inputs to first draft in a fraction of the time, with the firm's voice and formatting preserved throughout.",
    tag: "Legal",
  },
  {
    metric: "15+ hrs",
    metricLabel: "saved per professional per week on review",
    title: "Document Review Intelligence",
    narrative:
      "Senior associates and partners gave back 15+ hours per week per attorney once a Claude-powered review layer was embedded into their existing matter management. The model surfaces material clauses, flags inconsistencies across drafts, and recommends next steps. Reviewers still sign off, but they spend their time on judgment, not on first-pass reading.",
    tag: "Legal",
  },
];

const faq = [
  {
    q: "How do you handle client confidentiality and privilege?",
    a: "Claude usage runs on the Anthropic API or an enterprise plan with a signed DPA, not on consumer accounts. By contract, Anthropic does not train its models on data submitted by API customers. We pair that posture with a written AI usage policy that names which matters and data classifications can touch the model, which require redaction, and which require General Counsel sign-off before use.",
  },
  {
    q: "Could using Claude waive attorney-client privilege?",
    a: "Privilege waiver depends on whether disclosure is reasonably necessary to legal services and whether confidentiality is preserved. Treating Claude like a properly contracted vendor (signed DPA, no training on inputs, controlled access) puts it in the same posture as other vendors firms already use without waiver. The risk is not the tool, it is uncontrolled use. Our governance work documents the controls so the firm has a defensible answer.",
  },
  {
    q: "What does this mean for the billable hour?",
    a: "Most firms we work with do not change rates, they shift the mix. Tasks that used to take three associate hours now take one, and that hour is more substantive. Some firms move specific deliverables to fixed fees once cycle time is predictable. We do not advise on rate strategy. We make sure the underlying speed and quality gains are real and measurable.",
  },
  {
    q: "What about court-filed documents and citations?",
    a: "Hallucinated citations have already produced sanctions in published opinions. Our deployments treat Claude as a drafting partner, never a system of record. Workflows that produce filed documents include mandatory citation verification against a real research source (Westlaw, Lexis, or Bloomberg), and the reviewing attorney signs off as if they had drafted it. That control is in the AUP and in the workflow itself.",
  },
  {
    q: "Will this work with our DMS, conflicts system, and time entry?",
    a: "Yes. We design around your existing stack rather than asking you to rip and replace. Integrations with iManage, NetDocuments, Clio, and similar systems are common. We document the integration so your IT team can maintain it after handoff.",
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
      name: "Legal",
      item: "https://integrateclaude.com/for-legal",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Law Firms",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: "https://integrateclaude.com",
  },
  areaServed: "United States",
  description:
    "Claude AI integration for legal teams. Document drafting automation, secure client data handling, audit-ready governance. Built for law firms that need AI without privilege risk.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Law firms, in-house legal teams, and legal operations leaders",
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

export default function ForLegalPage() {
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
                For legal teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude for law firms,{" "}
                <span className="text-accent">
                  without privilege risk or sanctioned citations.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Most firms have associates and partners using Claude already,
                without policy, without training, and often on personal
                accounts. We replace that with a governed deployment: hardened
                workflows for drafting and review, an AI usage policy that
                survives a malpractice review, and audit-ready documentation
                your General Counsel can put in front of clients. Built around
                your DMS, conflicts system, and the way your firm actually
                practices.
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
                Legal AI adoption sits on a different risk profile than almost
                any other industry. The same tool that drafts an engagement
                letter in ninety seconds can, in the wrong workflow, paste
                privileged material into a consumer chat product, hallucinate a
                citation that ends up in a filed brief, or produce work product
                a client can later argue was never the firm's. Each of those is
                already a published failure mode. None are exotic.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The pressure cuts the other direction too. Clients are running
                AI inside their own legal departments and asking why outside
                counsel is not. Newer associates expect it. Practice management
                vendors are bolting AI features into the DMS faster than firms
                can write policy around them. The question is no longer whether
                Claude is in the firm. It is whether the firm can describe how,
                where, by whom, and under what controls.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to bring that picture into focus and ship the
                deployment that goes with it. Workflows where the speed gains
                are real and measurable, governance that holds up in a
                malpractice review, and a documented handoff so the firm runs
                independently after we leave.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for law firms
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how legal work actually flows.
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
                Real outcomes from legal engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with U.S. law firms. Names anonymized;
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
                Questions law firm leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual partner, GC, and risk-committee conversations.
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
              Get Claude into your practice without the risk.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              firm is today, what your malpractice carrier and clients will ask
              for, and which workflows are worth governing first. You will leave
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
