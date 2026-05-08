import Link from "next/link";
import {
  Compass,
  GraduationCap,
  GitBranch,
  MessageSquare,
  Code2,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Handshake,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const services: ServiceCard[] = [
  {
    icon: Compass,
    title: "AI Readiness Audit",
    description:
      "A two-week diagnostic that maps your highest-value AI opportunities. Stakeholder interviews, workflow audit, and a prioritized opportunity report. The right starting point if you want clarity before committing.",
    slug: "ai-readiness-audit",
  },
  {
    icon: GraduationCap,
    title: "Education & AI Fluency",
    description:
      "From one-off workshops to full org-wide fluency programs. Teams leave knowing how to prompt effectively, when to use Claude, and how to build habits that stick.",
    slug: "education-ai-fluency",
  },
  {
    icon: GitBranch,
    title: "Workflow Integration",
    description:
      "We audit your operations, identify the highest-leverage AI opportunities, and redesign workflows end-to-end with Claude built in, not bolted on.",
    slug: "workflow-integration",
  },
  {
    icon: MessageSquare,
    title: "Prompting & Projects",
    description:
      "Production-grade system prompts, Claude Projects setup, and role-specific prompt playbooks. The difference between a toy and a tool.",
    slug: "prompting-and-projects",
  },
  {
    icon: Code2,
    title: "Custom Web Apps & SaaS",
    description:
      "We build Claude-powered software: internal ops tools, customer-facing products, and new SaaS features. From prototype to deployed.",
    slug: "custom-web-apps",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Intelligence",
    description:
      "Claude-powered narrative layers over your existing BI tools, spreadsheets, and exports. Variance analysis, cohort commentary, exec summaries, generated reliably in your team's voice.",
    slug: "data-analytics-intelligence",
  },
  {
    icon: ShieldCheck,
    title: "AI Security & Governance",
    description:
      "Roll out Claude without legal, security, or compliance exposure. AI policy, vendor risk assessment, employee training, and audit-ready documentation. Built on a cybersecurity foundation.",
    slug: "ai-security-governance",
  },
  {
    icon: Sparkles,
    title: "Marketing & Content Operations",
    description:
      "10× your marketing output without losing brand voice. Voice prompt systems, content workflows, lifecycle automation. Drawn from operator experience inside the Vaynerchuk media empire.",
    slug: "marketing-content-ops",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnership",
    description:
      "Retained advisory and implementation support as your Claude usage scales. The AI landscape moves fast. We keep you ahead of it.",
    slug: "ongoing-partnership",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What we do
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            A coordinated system covering every stage, from diagnosis to custom
            build to retainer. Not a menu of one-off services.
          </p>
        </div>

        {/* Grid: 2-col tablet, 3-col desktop, last row centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            // Last card (idx 4) spans from col 2 on lg to center in a 3-col grid
            const isLast =
              idx === services.length - 1 && services.length % 3 !== 0;
            return (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className={[
                  "group relative flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Icon */}
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Learn more affordance — visual cue, whole card is the link */}
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors mt-auto"
                  aria-hidden="true"
                >
                  View details
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
