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
      "Companies with 20–500 employees that want to move beyond individual AI adoption to team-wide AI fluency. Ideal for ops leads, people ops, and founders who want AI to become part of how work gets done.",
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
      "Ops leads, COOs, and founders at growth-stage companies who want to scale without proportionally scaling headcount. Works across sales, marketing, finance, HR, and customer service.",
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
