const caseStudies = [
  {
    metric: "70%",
    metricLabel: "reduction in proposal drafting time",
    title: "Operations Automation",
    narrative:
      "A 60-person professional services firm cut proposal drafting time by 70% after we integrated Claude into their workflow — from intake to final doc.",
    tag: "Operations",
  },
  {
    metric: "5×",
    metricLabel: "increase in daily outbound volume",
    title: "Sales Enablement",
    narrative:
      "A SaaS sales team's SDRs went from 15 cold emails/day to 80+ after we built a Claude-powered outbound engine with their CRM data.",
    tag: "Sales",
  },
  {
    metric: "Seconds",
    metricLabel: "to answer any internal policy question",
    title: "Internal Knowledge Base",
    narrative:
      "A fast-growing startup built a Claude-powered internal ops assistant that answers policy, process, and vendor questions in seconds.",
    tag: "Internal Tools",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="results" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Results we&rsquo;ve delivered
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Representative engagements — the names are anonymized, the outcomes
            are real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="relative flex flex-col gap-4 rounded-xl border border-border bg-background p-6"
            >
              {/* Example label */}
              <span className="absolute top-4 right-4 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground font-medium">
                Example engagement
              </span>

              {/* Metric */}
              <div className="pt-2">
                <p className="text-4xl font-bold tracking-tight text-accent">
                  {cs.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cs.metricLabel}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground">
                {cs.title}
              </h3>

              {/* Narrative */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {cs.narrative}
              </p>

              {/* Tag */}
              <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {cs.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
