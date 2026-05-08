export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  whatWeDeliver: string[];
  whoItsFor: string;
  outcomes: string[];
  faq: Array<{ q: string; a: string }>;
}

export const services: Service[] = [
  {
    slug: "ai-readiness-audit",
    title: "AI Readiness Audit",
    tagline: "Know exactly where Claude creates leverage — before you commit.",
    description:
      "A scoped, two-week diagnostic engagement that maps your highest-value AI integration opportunities. We interview your team, audit your workflows, and deliver a prioritised opportunity report — with effort/impact estimates so you can sequence the work confidently. The natural starting point for organisations that want a clear answer before committing to a larger engagement.",
    icon: "Compass",
    whatWeDeliver: [
      "Stakeholder interviews across leadership, ops, and key functions",
      "Workflow audit identifying the top 10–15 AI integration candidates",
      "Effort/impact scoring and recommended sequencing",
      "Written opportunity report (15–25 pages) with executive summary",
      "Live readout session with leadership and Q&A",
    ],
    whoItsFor:
      "Leaders who know AI matters but want clarity on where to start. Ideal as a low-commitment first engagement that sets up the right next step — whether that's training, workflow integration, or custom software.",
    outcomes: [
      "A defensible, board-ready answer to 'where should we invest in AI?'",
      "A prioritised roadmap your team can execute against",
      "Honest assessment of which workflows don't actually benefit from AI",
      "Clear scope and ROI assumptions for any subsequent engagement",
    ],
    faq: [
      {
        q: "How long does the audit take?",
        a: "Two weeks from kickoff to readout. Week one is interviews and audit; week two is analysis, writing, and the readout session.",
      },
      {
        q: "What if the audit shows we're not ready for AI?",
        a: "We'll tell you. Our job is honest assessment, not selling work. If the right answer is to fix data hygiene first, build foundational SOPs, or wait six months — that's what the report will say.",
      },
      {
        q: "Can we use the audit to evaluate other consultants?",
        a: "Yes. The opportunity report is yours, written so any qualified team could execute against it. Many clients use it that way.",
      },
    ],
  },
  {
    slug: "education-ai-fluency",
    title: "Education & AI Fluency",
    tagline: "From casual Claude users to a fluent AI-first organization.",
    description:
      "Most teams plateau at basic prompt use. We design and deliver training programs that build genuine AI fluency — not just awareness. Teams leave with the habits, skills, and judgment to use Claude effectively across their actual work.",
    icon: "GraduationCap",
    whatWeDeliver: [
      "Custom training curriculum mapped to your team's roles and workflows",
      "Live workshops and async learning materials",
      "Role-specific prompt playbooks your team keeps after we leave",
      "Manager enablement so leaders can coach AI habits going forward",
      "Measurement framework to track fluency progress over time",
    ],
    whoItsFor:
      "Any organization that wants AI to become part of how work actually gets done — not just how one person works. From solo operators and small firms to enterprise teams. Ideal for ops leads, people ops, and founders who are done with ad-hoc AI use and want something systematic.",
    outcomes: [
      "Average prompting quality improves measurably within 30 days",
      "Teams develop shared vocabulary and norms around AI use",
      "Reduction in ad-hoc, inconsistent Claude usage across the org",
      "Leaders can identify new automation opportunities independently",
    ],
    faq: [
      {
        q: "How long does a fluency program take?",
        a: "Intensive programs run 2–4 weeks. Ongoing coaching engagements run 3–6 months. We scope based on team size and depth of change needed.",
      },
      {
        q: "Do you train non-technical employees?",
        a: "That's our specialty. Most training is designed for operators, not engineers. We meet people where they are.",
      },
    ],
  },
  {
    slug: "workflow-integration",
    title: "Workflow Integration",
    tagline: "Claude built into how your business actually operates.",
    description:
      "The highest-leverage AI wins aren't about the model — they're about the workflow. We audit your operations, identify where Claude creates compounding value, and redesign processes end-to-end with AI built in, not bolted on.",
    icon: "GitBranch",
    whatWeDeliver: [
      "Operations audit identifying your top 5–10 AI integration opportunities",
      "Priority-ranked integration roadmap with effort/impact estimates",
      "Redesigned workflows with Claude embedded at the right decision points",
      "SOPs and documentation for every new AI-assisted process",
      "Handoff training so your team runs the new workflows independently",
    ],
    whoItsFor:
      "Ops leads, COOs, and founders who want to scale without proportionally scaling headcount — whether that's a 5-person firm or a 500-person organization. Works across sales, marketing, finance, HR, and customer service.",
    outcomes: [
      "Quantified time savings per workflow (we measure before and after)",
      "Reduction in human error on repeatable, structured tasks",
      "Faster cycle times on key business processes",
      "Clear ROI documentation for leadership or board reporting",
    ],
    faq: [
      {
        q: "Do we need to change our existing software stack?",
        a: "Usually not. We design integrations around your existing tools — Notion, Slack, HubSpot, Salesforce, whatever you use — rather than requiring a platform switch.",
      },
      {
        q: "What if a workflow doesn't need AI?",
        a: "We'll tell you. We're not here to force AI into places it doesn't fit. Our audit is honest about where the real leverage is.",
      },
    ],
  },
  {
    slug: "prompting-and-projects",
    title: "Prompting & Projects",
    tagline: "The difference between a toy and a production-grade tool.",
    description:
      "Casual prompting produces inconsistent results. We engineer production-grade system prompts, build Claude Projects configured for your specific use cases, and create role-specific prompt playbooks that produce reliable, high-quality outputs at scale.",
    icon: "MessageSquare",
    whatWeDeliver: [
      "System prompt engineering for your key Claude use cases",
      "Claude Projects setup and configuration (knowledge, tools, instructions)",
      "Role-specific prompt libraries (sales, marketing, ops, etc.)",
      "Prompt testing and iteration framework",
      "Documentation so your team can maintain and extend prompts over time",
    ],
    whoItsFor:
      "Teams already using Claude who want to move from inconsistent, ad-hoc prompting to structured, repeatable AI outputs. Also ideal as a precursor to building custom Claude-powered software.",
    outcomes: [
      "Outputs become consistent enough to trust and share externally",
      "Time-to-useful-output drops significantly per use case",
      "Prompt knowledge is documented and owned by the team, not individuals",
      "Foundation for scaling Claude usage across more roles and functions",
    ],
    faq: [
      {
        q: "What makes a 'production-grade' prompt?",
        a: "It produces reliable outputs across varied inputs, handles edge cases gracefully, includes the right context and constraints, and is maintained and versioned like code.",
      },
      {
        q: "Do you only work with Claude, or other models too?",
        a: "We specialize in Claude because it's the best model for most business use cases. We're not model-agnostic — that's a feature, not a limitation.",
      },
    ],
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Apps & SaaS",
    tagline: "Claude-powered software built for your specific operation.",
    description:
      "Sometimes a prompt isn't enough — you need software. We design and build Claude-powered web applications: internal ops tools, customer-facing products, and new SaaS features powered by the Anthropic API. From prototype to deployed.",
    icon: "Code2",
    whatWeDeliver: [
      "Product scoping and technical architecture for Claude-powered applications",
      "Full-stack development (Next.js, React, TypeScript, Anthropic API)",
      "Prompt engineering and system design embedded in the application layer",
      "Deployment, monitoring, and cost management setup",
      "Handoff documentation and team onboarding",
    ],
    whoItsFor:
      "Founders and CTOs who want to build Claude into their product but lack specialized AI engineering capacity. Also fits operators who need an internal tool that goes beyond what a prompt or Project can do.",
    outcomes: [
      "Deployed, production-ready Claude-powered application",
      "Anthropic API costs managed within defined parameters",
      "Internal team able to maintain and extend the application",
      "Clear path to scaling the application as usage grows",
    ],
    faq: [
      {
        q: "How long does a custom build take?",
        a: "Typical build cycles run 6–14 weeks depending on scope. We move fast but we don't ship brittle software.",
      },
      {
        q: "What if we want to hire engineers to maintain it after?",
        a: "We build with that in mind. Standard tech stack, clean architecture, full documentation. We can also recruit or train the right engineering hire as part of the engagement.",
      },
    ],
  },
  {
    slug: "data-analytics-intelligence",
    title: "Data & Analytics Intelligence",
    tagline: "Turn dashboards and exports into plain-English narrative.",
    description:
      "Most companies have the data — they just can't turn it into the story leadership needs. We build Claude-powered narrative layers over your existing BI tools, spreadsheets, and database exports. Variance analysis, cohort commentary, exec summaries — generated reliably, on demand, in your team's voice.",
    icon: "BarChart3",
    whatWeDeliver: [
      "Discovery of your reporting cadence, audiences, and pain points",
      "Claude-powered narrative pipelines over your existing data sources",
      "Templated commentary for recurring reports (monthly, weekly, board)",
      "Quality controls so every output is grounded and auditable",
      "Handoff training for the team that owns the reporting process",
    ],
    whoItsFor:
      "Finance, RevOps, Marketing Ops, and BI teams that ship recurring reports — and want to stop spending days on the narrative section. Also fits leaders who want self-service insight on demand without hiring more analysts.",
    outcomes: [
      "Recurring report prep time drops by 60–85% (measured)",
      "Variance and cohort commentary becomes consistent and on-brand",
      "Self-service narrative on top of any dashboard or export",
      "Analysts redirect time toward investigation, not write-up",
    ],
    faq: [
      {
        q: "Does this require us to migrate our BI stack?",
        a: "No. We build on top of what you already have — Looker, Tableau, Power BI, Sheets, Snowflake exports, anything queryable. We don't replace your data layer; we add a narrative layer.",
      },
      {
        q: "How do we trust the numbers Claude generates?",
        a: "We don't have Claude generate numbers. We pull numbers from your existing source of truth, then have Claude generate the narrative around them. The numbers are deterministic; only the prose is AI-assisted.",
      },
    ],
  },
  {
    slug: "ongoing-partnership",
    title: "Ongoing Partnership",
    tagline: "Retained AI leadership as your Claude usage scales.",
    description:
      "The AI landscape moves fast. What works in Q1 is outdated by Q3. Our retained partnership keeps you ahead — ongoing advisory, implementation support, and access to expertise as new Claude capabilities, models, and best practices emerge.",
    icon: "Handshake",
    whatWeDeliver: [
      "Monthly advisory calls with strategic recommendations",
      "Access to implementation support as new use cases arise",
      "Quarterly workflow audits to identify new AI opportunities",
      "Priority access to new Claude capabilities as they release",
      "Slack/async access for time-sensitive questions",
    ],
    whoItsFor:
      "Companies that have already completed an initial integration project and want ongoing expertise to continue compounding. Also fits fast-moving orgs that want an external AI advisor without hiring a full-time AI lead.",
    outcomes: [
      "Consistent identification of new AI leverage points before competitors",
      "Rapid implementation of new Claude capabilities as they release",
      "Senior AI expertise available without full-time hiring overhead",
      "Accountability and momentum for ongoing AI adoption goals",
    ],
    faq: [
      {
        q: "How is this different from just having a consultant on retainer?",
        a: "We specialize entirely in Claude and Anthropic's ecosystem. Our advice is current, specific, and actionable — not generic AI strategy consulting.",
      },
      {
        q: "Can we start with a project and move to a retainer?",
        a: "Yes. Most clients do exactly that. We scope the initial project with an eye toward a longer relationship.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
