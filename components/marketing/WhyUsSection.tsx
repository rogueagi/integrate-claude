import { Zap, Users, Layers } from "lucide-react";

const credibilitySignals = [
  {
    icon: Zap,
    label: "Deep Anthropic API expertise",
  },
  {
    icon: Users,
    label: "Built for operators, not just engineers",
  },
  {
    icon: Layers,
    label: "Full-stack: training + workflows + code",
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
        </div>

        {/* Founder bio cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-14">
          {/* Ben Frost */}
          <div className="flex-1 max-w-sm mx-auto sm:mx-0 rounded-xl border border-border bg-background p-6 flex flex-col gap-4">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent font-bold text-lg flex-shrink-0">
                BF
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Ben Frost
                </p>
                <p className="text-xs text-muted-foreground">Founder</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              Builder, operator, and AI specialist. Ben has spent years at the
              intersection of software and business operations, adopting Claude
              early and developing a systematic approach to enterprise
              integration. He makes complex AI implementations legible to
              non-technical teams — and makes sure they actually stick.
            </p>
          </div>
        </div>

        {/* Credibility signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {credibilitySignals.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-5 py-4"
            >
              <div className="flex size-8 items-center justify-center rounded-md bg-accent/10 text-accent flex-shrink-0">
                <Icon className="size-4" />
              </div>
              <p className="text-sm font-medium text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
