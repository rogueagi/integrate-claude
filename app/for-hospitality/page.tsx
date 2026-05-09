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
  title: "Claude AI for Hospitality and Food Service — Integrate Claude",
  description:
    "Claude AI integration for hospitality, catering, and food service operators. Custom order systems, content automation, and the operations tooling that handles game-day scale. NFL, NBA, MLB, and NHL catering experience.",
  keywords: [
    "Claude AI for hospitality",
    "AI for catering",
    "AI for restaurants",
    "AI for food service",
    "hospitality AI consultant",
    "catering operations software",
    "AI order management",
  ],
  alternates: { canonical: "/for-hospitality" },
});

const services = [
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    description:
      "Custom order management, dispatch systems, multi-location dashboards, and the internal tools that scale with you. Built for the volume your operation actually runs at, not the average week.",
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    description:
      "Claude built into how your team coordinates orders, kitchens, drivers, and customer comms. The handoffs that used to require five tools and three people get tightened into one workflow.",
  },
  {
    slug: "marketing-content-ops",
    title: "Marketing & Content Operations",
    description:
      "Menu copy, event marketing, social at scale, and the lifecycle systems that keep clients booking. Brand voice preserved across every surface, even when output volume goes up ten times.",
  },
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    description:
      "Two-week diagnostic to map where Claude removes the manual work choking your operation. Prioritized roadmap with effort and impact scoring so the first build is the right build.",
  },
];

const caseStudies = [
  {
    metric: "178%",
    metricLabel: "verified CAGR after custom order system shipped",
    title: "Custom Order Tracking System",
    narrative:
      "A pro sports catering operator running across NFL, NBA, MLB, and NHL venues hit a verified 178% CAGR after we shipped their custom order management system. Game-day volume, multi-venue logistics, and a kitchen and dispatch workflow that finally matched the pace of the business. The order system became the operational spine the growth was built on.",
    tag: "Hospitality",
  },
  {
    metric: "$2M+",
    metricLabel: "monthly tracked through real-time dashboard",
    title: "Affiliate Tracking Dashboard",
    narrative:
      "A different vertical, the same problem shape: high-volume, real-time event tracking with operational consequences if numbers lag. We built a dashboard that processes more than $2M of monthly activity and surfaces what matters in the moment, not after the close. The same architectural muscles apply directly to hospitality dispatch and event-day order tracking.",
    tag: "Analogous build",
  },
];

const faq = [
  {
    q: "Can Claude integrate with our existing POS and ordering systems?",
    a: "Yes. We build to API where one exists and to your data layer where it does not. Toast, Square, Olo, and most custom platforms all expose enough to integrate cleanly. The deployments we ship sit on top of your existing stack rather than asking you to rip out what already works.",
  },
  {
    q: "How do you handle peak and event scaling?",
    a: "System design accounts for spikes from day one. We size infrastructure, queue patterns, and database load to the volumes your operation actually sees on a championship game or a holiday push, not the average Tuesday. Load testing happens before launch, not after.",
  },
  {
    q: "What about kitchen and front-of-house staff who are not technical?",
    a: "Interfaces are designed for operators, not engineers. Large touch targets, clear states, minimal options on any one screen. Most teams are productive on the new tooling inside a single shift, with a short written reference and one walkthrough.",
  },
  {
    q: "Can this help with multi-location coordination?",
    a: "Yes. Central dashboards plus location-specific views are a common pattern. Ops leadership sees the whole footprint while individual venues only see what they need to act on. Permissions and routing get configured to your reporting structure, not a generic template.",
  },
  {
    q: "What is the typical timeline for a custom build?",
    a: "Six to fourteen weeks depending on scope. Phased rollout is common, especially for multi-location operators. We usually launch into one venue or one event first, validate behavior under real load, and then expand. You get a fixed-fee quote and a delivery date upfront.",
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
      name: "Hospitality and Food Service",
      item: `${BASE_URL}/for-hospitality`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude AI Integration for Hospitality and Food Service",
  serviceType: "AI Integration Consulting",
  provider: {
    "@type": "Organization",
    name: "Integrate Claude",
    url: BASE_URL,
  },
  areaServed: "United States",
  description:
    "Claude AI integration for hospitality, catering, and food service operators. Custom order systems, content automation, and the operations tooling that handles game-day scale.",
  audience: {
    "@type": "Audience",
    audienceType:
      "Hospitality operators, catering companies, multi-location restaurants, and food service leadership",
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

export default function ForHospitalityPage() {
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
                For hospitality and food service teams
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Claude AI for operators who run on{" "}
                <span className="text-accent">
                  game-day timing and precision.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Hospitality and food service businesses live and die on
                operational consistency, especially when volume spikes around
                events and seasonality. We build the custom systems that handle
                chaotic order flow, multi-site coordination, and customer
                touchpoints at scale. One client tracking pro sports catering
                hit a verified 178% CAGR after we shipped their custom order
                system.
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
                Hospitality runs on coordination under pressure. A normal week
                is twelve services, three menus, and a delivery window measured
                in minutes. A peak week is the same operation at four times the
                volume, with weather, traffic, and a championship crowd deciding
                when the spike actually lands. Most operators are holding the
                whole picture together with a stack of spreadsheets, a group
                chat, and one or two people whose heads contain all the tribal
                knowledge.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Off-the-shelf SaaS rarely fits. Generic order platforms assume a
                generic operation. Catering is not a restaurant. A pro sports
                concourse is not a wedding. Multi-location dispatch with kitchen
                production schedules and driver routing is not a Toast feature.
                The teams that grow through this stage are the ones that stop
                forcing their workflow into someone else's product and get
                custom tooling built around how they actually run.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our work is the build that gets you there. Custom order systems,
                dispatch and production dashboards, and Claude embedded in the
                content and customer touchpoints that scale faster than you can
                hire. Shipped on a fixed-fee scope with a documented handoff so
                your team owns it after we leave.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                What we do for hospitality teams
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Four engagements that match how operators actually scale.
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
                Real outcomes from hospitality engagements
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Representative work with hospitality and food service operators.
                Names anonymized; outcomes verified.
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
                Questions hospitality leadership asks
              </h2>
              <p className="mt-3 sm:mt-4 text-base text-muted-foreground">
                Drawn from actual operator, GM, and ownership conversations.
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
              Get the operations tooling your growth needs.
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Book a 30-minute discovery call. We will walk through where your
              operation is today, what is breaking under volume, and which
              systems are worth building first. You will leave with a clear next
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
