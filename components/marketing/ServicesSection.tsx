import {
  GraduationCap,
  GitBranch,
  MessageSquare,
  Code2,
  Handshake,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: GraduationCap,
    title: "Education & AI Fluency",
    description:
      "From one-off workshops to full org-wide fluency programs. Teams leave knowing how to prompt effectively, when to use Claude, and how to build habits that stick.",
  },
  {
    icon: GitBranch,
    title: "Workflow Integration",
    description:
      "We audit your operations, identify the highest-leverage AI opportunities, and redesign workflows end-to-end — with Claude built in, not bolted on.",
  },
  {
    icon: MessageSquare,
    title: "Prompting & Projects",
    description:
      "Production-grade system prompts, Claude Projects setup, and role-specific prompt playbooks. The difference between a toy and a tool.",
  },
  {
    icon: Code2,
    title: "Custom Web Apps & SaaS",
    description:
      "We build Claude-powered software: internal ops tools, customer-facing products, and new SaaS features. From prototype to deployed.",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnership",
    description:
      "Retained advisory and implementation support as your Claude usage scales. The AI landscape moves fast — we keep you ahead of it.",
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
            A coordinated system of training, workflow design, prompting, and
            software — not a menu of one-off services.
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
              <div
                key={service.title}
                className={[
                  "group relative flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-sm",
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
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Learn more */}
                <a
                  href="#book"
                  className="inline-flex items-center gap-1 text-xs font-medium text-accent-foreground/70 hover:text-accent-foreground transition-colors mt-auto"
                >
                  Learn more
                  <ArrowRight className="size-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
