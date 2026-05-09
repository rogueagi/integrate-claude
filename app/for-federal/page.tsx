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
  title:
    "Claude AI for Federal Contractors and Government-Adjacent Teams — Integrate Claude",
  description:
    "Claude AI integration for federal contractors and government-adjacent organizations. Cybersecurity-first deployment, NIST AI RMF alignment, vendor risk frameworks. Built on $950B+ in federal program protection experience.",
  keywords: [
    "Claude AI for federal",
    "AI for government contractors",
    "NIST AI RMF Claude",
    "FedRAMP AI",
    "federal AI consultant",
    "AI for federal agencies",
    "Claude government deployment",
  ],
  alternates: { canonical: "/for-federal" },
});

const services = [
  {
    slug: "ai-security-governance",
    title: "AI Security & Governance",
    description:
      "AI policy, vendor risk assessment, and audit-ready documentation aligned to NIST AI RMF, SOC 2 Trust Services Criteria, and ISO 42001. Built to map directly into your existing control environment and survive procurement review.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "Two-week diagnostic that maps your governance posture and identifies the highest-leverage AI integration opportunities. Prioritized roadmap with effort and impact scoring, scoped for organizations operating under federal compliance frameworks.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Claude built into existing workflows with the audit trail and access controls federal environments require. Drafting, review, and analysis work moved off senior plates without weakening the documentation or sign-off chain.",
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Custom internal tools and dashboards built to your security baseline, with documentation procurement teams will accept. Architecture decisions made with FISMA-Moderate patterns and CUI handling in mind from day one.",
  },
];

const caseStudies = [
  {
    metric: "70%",
    metricLabel: "reduction in regulated document drafting time",
    title: "Legal Workflow Automation",
    narrative:
      "A 210-attorney firm cut drafting time on routine regulated content by 70% after we embedded Claude into their workflow with the controls a malpractice and bar review can withstand. Engagement letters, standard motions, and matter-bound memos move faster while the documentation chain holds. The same pattern of governed deployment in a regulated environment translates directly to federal contractor work.",
    tag: "Analogous regulated environment",
  },
  {
    metric: "Audit-ready",
    metricLabel: "reporting infrastructure in regulated finance",
    title: "Custom CFO Reporting Dashboard",
    narrative:
      "A regulated finance operator needed reporting infrastructure that could be put in front of an auditor without explanation. We built a Claude-assisted dashboard with deterministic numbers, AI-assisted narrative, and a documented data lineage from source to summary. The same audit-trail discipline applies to government-adjacent reporting and oversight workflows.",
    tag: "Analogous regulated environment",
  },
];

const faq = [
  {
    q: "Are you familiar with FedRAMP, FISMA, and federal AI policy frameworks?",
    a: "Yes. We map deliverables to NIST AI Risk Management Framework, SOC 2 Trust Services Criteria, and ISO 42001 where relevant, and we can align documentation with FISMA-Moderate baseline patterns. We work alongside your compliance and security leads rather than replacing them; the artifacts we produce are designed to feed directly into your existing audit and ATO work.",
  },
  {
    q: "Can Claude be used in environments handling CUI or PII?",
    a: "It depends on the data classification, the specific Anthropic deployment option in play, and your organization's existing controls. We work through that question explicitly during the AI Readiness Audit, including data flow mapping, contract posture, and which workloads are appropriate for which deployment tier. The answer is rarely a flat yes or no; it is a workload-by-workload determination with documented reasoning.",
  },
  {
    q: "What about AUPs and employee training for government use?",
    a: "Included in our AI Security and Governance engagement. Acceptable use policy templates calibrated to your environment, a training framework for the operators who will actually use the tools, and a refresher cadence so the policy stays current as Claude capabilities and federal guidance evolve.",
  },
  {
    q: "Do you work with federal contractors or only end agencies?",
    a: "Primarily contractors and government-adjacent organizations. Defense industrial base, federal healthcare contractors, financial services firms with federal program exposure, and similar. Our background is built on federal-scale fraud protection work covering more than $950B in PPP loan programs during COVID, which gives us direct experience with the vendor risk and oversight bar these environments operate under.",
  },
  {
    q: "How do you handle Anthropic vendor risk for procurement?",
    a: "Full vendor risk assessment covering subprocessors, certifications, data handling, incident SLAs, and return or deletion procedures. Documentation packaged for procurement and security review, with the underlying Anthropic posture (DPA, no training on API inputs, deployment options) translated into the language your compliance team uses.",
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
      name: "Federal and Government-Adjacent",
      item: `${BASE_URL}/for-federal`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Federal Contractors and Government-Adjacent Teams",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: BASE_URL,
  },
  areaServed: "United States",
  description:
    "Claude AI integration for federal contractors and government-adjacent organizations. Cybersecurity-first deployment, NIST AI RMF alignment, and vendor risk frameworks built to procurement standards.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Federal contractors, defense industrial base, government-adjacent healthcare and finance, and federal program operators",
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

export default function ForFederalPage() {
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
                For federal contractors and government-adjacent teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude AI for federal-scale environments where{" "}
                <span className="text-accent">
                  governance is the gating factor.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Federal and government-adjacent organizations face a different
                bar for AI deployment: documented controls, demonstrable
                compliance, and vendor risk frameworks that withstand scrutiny.
                We come from this world. Our founder's background includes
                federal-scale fraud protection work covering $950B+ in PPP loans
                during the COVID program.
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
                Federal-adjacent AI adoption is not a tooling problem. It is a
                governance problem. The model can do the work; the question is
                whether your security officer, your contracting officer, and
                your auditor can sign off on how the work gets done. Most of the
                published AI guidance from federal bodies arrived faster than
                internal policy could absorb it, and procurement is catching up
                to vendor risk frameworks that did not exist eighteen months
                ago.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The other pressure is internal. Operators in your organization
                are already using AI somewhere. On personal accounts, on
                unsanctioned tools, in workflows that nobody has documented.
                Banning it does not work. Ignoring it is worse. The
                organizations that handle this well are the ones that get out in
                front with a real policy, a sanctioned deployment, and the
                training to back it up before an incident forces the
                conversation.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is to build that posture. AI usage policy mapped to
                NIST AI RMF, vendor risk file procurement will accept, training
                that meets your environment, and Claude deployments scoped to
                the workloads where your data classification and controls
                actually permit it. Documented, defensible, and designed for
                handoff to your internal compliance and security functions.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for federal-adjacent teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements built for environments where documentation is a
                deliverable, not an afterthought. Scoped, fixed-fee, with a
                documented handoff.
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
                Real outcomes from regulated environments
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work in regulated environments analogous to
                federal-adjacent contexts. Names anonymized; outcomes verified.
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
                Questions federal-adjacent leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual security, compliance, and contracting
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
              Get Claude into your environment without compounding risk.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              organization is today, what your security and contracting
              functions will need to see, and which workloads are worth
              governing first. You will leave with a clear next step, whether or
              not we end up working together.
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
