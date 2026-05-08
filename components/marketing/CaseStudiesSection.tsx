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
    metric: "10×",
    metricLabel: "increase in daily BD outreach",
    title: "Automated BD Outreach System",
    narrative:
      "A nationwide tax advisory firm's business development team needed to scale outreach without scaling headcount. We built them a fully automated outreach engine that pulls from their CRM and recent tax legislation updates to generate personalized prospect messages. Daily outreach volume grew more than 10×, with messaging calibrated to each prospect's industry and recent regulatory exposure.",
    tag: "Sales",
  },
  {
    metric: "15+ hrs",
    metricLabel: "saved per AE per week on deal review",
    title: "RevOps: CRM + Gmail Intelligence",
    narrative:
      "A 20+ person B2B company gave their RevOps team a Claude-powered deal intelligence layer. It surfaces Gmail threads, CRM notes, and deal history into a single interface that flags risk and recommends next steps automatically. AEs reclaim 15+ hours per week previously lost to manual deal review.",
    tag: "Revenue Operations",
  },
  {
    metric: "83%",
    metricLabel: "reduction in monthly financial reporting prep",
    title: "Custom CFO Reporting Dashboard",
    narrative:
      "A CFO who spent days each month assembling financial reports got a custom Claude-powered dashboard built around every metric he actually reviews. Variance analysis, trend commentary, and exec-summary narrative now generate in a single pass against his existing data sources, cutting monthly reporting prep by 83%.",
    tag: "Finance",
  },
  {
    metric: "$2M+",
    metricLabel: "in monthly affiliate revenue tracked in real time",
    title: "Affiliate Tracking Dashboard",
    narrative:
      "A large U.S.-based peptide telehealth business had dozens of affiliate partner streams that were reconciled manually each month. We built them a custom Claude-powered tracking dashboard that pulls from their attribution data sources and surfaces affiliate performance, conversion patterns, and ROI by source in real time.",
    tag: "Healthcare",
  },
  {
    metric: "70%",
    metricLabel: "drop in customer questions reaching executives",
    title: "Customer Support Automation",
    narrative:
      "A growing operation had their executives constantly interrupted by customer questions their support team couldn't answer on its own. We built a Claude-powered information hub trained on their product, policy, and operations data, plus an automated email follow-up sequence that handles routine post-purchase touchpoints. Customer questions reaching executives dropped 70% in the first month.",
    tag: "Customer Service",
  },
  {
    metric: "75%",
    metricLabel: "reduction in per-asset production time",
    title: "Content at Scale",
    narrative:
      "A mobile gaming app company shipping content across in-app messaging, store listings, ad creative, blog, and social cut per-asset production time by 75% while maintaining brand voice and tone consistency. Tone guides embedded directly in the workflow.",
    tag: "Marketing",
  },
  {
    metric: "12 ICPs",
    metricLabel: "served from one source brand narrative",
    title: "Performance Marketing at Scale",
    narrative:
      "A growth team needed to test Facebook ad creative across 12 distinct ICPs without losing narrative consistency. We built a Claude-powered system that generates ICP-tailored landing pages and ad copy variants from a single source brand brief. Variant production dropped from days per ICP to under an hour, enabling rapid iteration across the entire portfolio.",
    tag: "Marketing",
  },
  {
    metric: "178%",
    metricLabel: "Compound Annual Growth Rate (CAGR)",
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
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Representative engagements. The names are anonymized; the outcomes
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
