import Image from "next/image";
import { Shield, Layers, Users } from "lucide-react";

const trackRecord = [
  {
    metric: "$900B+",
    label: "in federal PPP loans protected against fraud",
    context: "as part of the cybersecurity team safeguarding the program",
  },
  {
    metric: "$24M+",
    label: "in revenue generated for a single client",
    context: "through systematic AI integration and operational redesign",
  },
  {
    metric: "VaynerSports",
    label: "equity holder",
    context: "operator experience inside the Vaynerchuk media empire",
  },
];

const capabilities = [
  {
    icon: Shield,
    label: "Cybersecurity-first by design",
    sub: "Security baked into every Claude integration we ship.",
  },
  {
    icon: Layers,
    label: "Full-stack: training + workflows + code",
    sub: "Strategy, prompts, and software under one roof.",
  },
  {
    icon: Users,
    label: "Built for operators, not just engineers",
    sub: "Most clients ship without a single line of code on their side.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Why Integrate Claude
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            A rare blend of cybersecurity rigor, marketing operator instincts,
            and a track record of generating real revenue with AI.
          </p>
        </div>

        {/* Founder card */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            {/* Photo */}
            <div className="relative w-full sm:w-40 sm:h-40 aspect-square sm:flex-shrink-0 overflow-hidden rounded-xl bg-muted">
              <Image
                src="/founder-ben-frost.jpg"
                alt="Ben Frost, Founder of Integrate Claude"
                fill
                sizes="(max-width: 640px) 100vw, 160px"
                className="object-cover"
                priority
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <p className="text-base font-semibold text-foreground">
                  Ben Frost
                </p>
                <p className="text-sm text-muted-foreground">
                  Founder &amp; AI Integration Lead
                </p>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Builder, operator, and AI specialist. Ben&rsquo;s background
                spans cybersecurity (including federal-scale fraud protection
                during COVID), marketing operations (equity in VaynerSports),
                and revenue generation ($24M+ delivered to a single client). He
                brings that operator&rsquo;s lens to Claude integration —
                translating complex AI implementations into systems that
                compound for non-technical teams.
              </p>
            </div>
          </div>
        </div>

        {/* Track-record stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
          {trackRecord.map(({ metric, label, context }) => (
            <div
              key={label}
              className="flex flex-col gap-1.5 rounded-xl border border-border bg-background p-6"
            >
              <p className="text-3xl font-bold tracking-tight text-accent">
                {metric}
              </p>
              <p className="text-sm font-medium text-foreground leading-snug">
                {label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                {context}
              </p>
            </div>
          ))}
        </div>

        {/* Capability signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {capabilities.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg border border-border bg-background p-5"
            >
              <div className="flex size-8 items-center justify-center rounded-md bg-accent/10 text-accent flex-shrink-0">
                <Icon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
