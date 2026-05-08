const caseStudies = [
  {
    metric: "70%",
    metricLabel: "reduction in proposal drafting time",
    title: "Legal Workflow Automation",
    narrative:
      "A 45-attorney boutique litigation firm reduced client proposal and engagement letter drafting time by 70% after we embedded Claude into their intake workflow — from client questionnaire to final document, with the firm's voice and formatting preserved throughout.",
    tag: "Legal",
  },
  {
    metric: "5×",
    metricLabel: "increase in daily BD outreach",
    title: "Sales Enablement",
    narrative:
      "A regional tax advisory firm's business development team went from 8 personalized outreach emails per day to 50+ after we built a Claude-powered prospecting engine that pulls from their CRM and recent tax legislation updates.",
    tag: "Sales",
  },
  {
    metric: "3 hrs",
    metricLabel: "saved per AE per week on deal review",
    title: "RevOps: CRM + Gmail Intelligence",
    narrative:
      "A 120-person B2B company gave their RevOps team a Claude-powered deal intelligence layer — surfacing Gmail threads, CRM notes, and deal history into a single interface that flags risk and surfaces recommended next steps automatically.",
    tag: "Revenue Operations",
  },
  {
    metric: "83%",
    metricLabel: "reduction in board report prep time",
    title: "Finance & FP&A",
    narrative:
      "A Series B SaaS company's finance team cut their monthly board package preparation from 3 days to 4 hours after we built a Claude-powered narrative layer over their FP&A data — variance analysis, commentary, and exec summary, generated in one pass.",
    tag: "Finance",
  },
  {
    metric: "40%",
    metricLabel: "reduction in time-to-hire",
    title: "Recruiting Operations",
    narrative:
      "A 200-person PE-backed services company hired 40% faster after we integrated Claude into their recruiting workflow — from role-specific job description drafts to structured interview scorecards generated from competency frameworks.",
    tag: "HR & People",
  },
  {
    metric: "55%",
    metricLabel: "reduction in ticket resolution time",
    title: "Customer Support Automation",
    narrative:
      "A logistics software company's support team cut average ticket resolution time by 55% after we trained Claude on their product documentation and built a draft-response layer directly into their helpdesk — reviewed, not replaced.",
    tag: "Customer Service",
  },
  {
    metric: "65%",
    metricLabel: "reduction in per-asset production time",
    title: "Content at Scale",
    narrative:
      "A marketing agency producing content for 12 clients built a Claude-powered content engine that cut per-asset production time by 65% while maintaining each client's distinct brand voice — tone guides embedded directly in the workflow.",
    tag: "Marketing",
  },
  {
    metric: "3 weeks",
    metricLabel: "to ship complete API docs from scratch",
    title: "Engineering Documentation",
    narrative:
      "An 80-engineer product team that had deferred documentation for two years shipped a complete API reference and developer guide in 3 weeks after we built a Claude-powered doc generation pipeline from their existing codebase and internal Notion.",
    tag: "Engineering",
  },
  {
    metric: "178%",
    metricLabel: "verified CAGR",
    title: "Custom Order Tracking System",
    narrative:
      "A professional team catering company serving NFL, NBA, and MLB organizations needed a custom internal order management system to handle complex, high-volume game-day and event orders at scale. We built it. Their CAGR has since been independently verified at 178%.",
    tag: "Custom Software",
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
