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
    tagline: "Know exactly where Claude creates leverage before you commit.",
    description:
      "A scoped, two-week diagnostic engagement that maps your highest-value AI integration opportunities. We interview your team, audit your workflows, and deliver a prioritised opportunity report with effort/impact estimates so you can sequence the work confidently. The natural starting point for organisations that want a clear answer before committing to a larger engagement.",
    icon: "Compass",
    whatWeDeliver: [
      "Stakeholder interviews across leadership, ops, and key functions",
      "Workflow audit identifying the top 10–15 AI integration candidates",
      "Effort/impact scoring and recommended sequencing",
      "Written opportunity report (15–25 pages) with executive summary",
      "Live readout session with leadership and Q&A",
    ],
    whoItsFor:
      "Leaders who know AI matters but want clarity on where to start. Ideal as a low-commitment first engagement that sets up the right next step, whether that's training, workflow integration, or custom software.",
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
        q: "What does the audit cost?",
        a: "A fixed fee in the $8K–$15K range, scoped at kickoff based on org size and number of functions covered. Fixed-fee, no scope creep. You know the number before we start.",
      },
      {
        q: "Who from our team needs to be involved?",
        a: "Roughly 1–2 hours from leadership for kickoff and readout, and 30–45 minute interviews with 5–10 function leads or operators. We do all the synthesis work.",
      },
      {
        q: "What if the audit shows we're not ready for AI?",
        a: "We'll tell you. Our job is honest assessment, not selling work. If the right answer is to fix data hygiene first, build foundational SOPs, or wait six months, that's what the report will say.",
      },
      {
        q: "Can we use the audit to evaluate other consultants?",
        a: "Yes. The opportunity report is yours, written so any qualified team could execute against it. Many clients use it that way.",
      },
      {
        q: "What happens after the audit? Do we have to keep working with you?",
        a: "No obligation. About 70% of audit clients move to a follow-on engagement (training, workflow integration, or custom build), but the audit stands on its own. We won't pressure you into more work.",
      },
    ],
  },
  {
    slug: "education-ai-fluency",
    title: "Education & AI Fluency",
    tagline: "From casual Claude users to a fluent AI-first organization.",
    description:
      "Most teams plateau at basic prompt use. We design and deliver training programs that build genuine AI fluency, not just awareness. Teams leave with the habits, skills, and judgment to use Claude effectively across their actual work.",
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
        q: "What does a fluency program cost?",
        a: "Pricing scales with team size and program depth. Intensive workshops for a small team start around $15K. Org-wide programs with measurement frameworks and manager enablement run $50K–$120K. We give you a fixed quote after a 30-minute scoping call.",
      },
      {
        q: "Who from our team needs to be involved?",
        a: "An executive sponsor (1 hour/week), a designated program owner who works with us closely (4–6 hours/week), and the participants themselves during workshop time. Outside of workshops, no extra hours required from learners.",
      },
      {
        q: "Do you train non-technical employees?",
        a: "That's our specialty. Most training is designed for operators, not engineers. We meet people where they are.",
      },
      {
        q: "How do you measure success?",
        a: "We assess prompting quality before, during, and after the program using a structured rubric. We also track usage frequency, output quality reviews from managers, and a self-reported fluency survey. You get a measurement report at program close.",
      },
      {
        q: "What happens after the program ends?",
        a: "You keep the curriculum, prompt playbooks, and measurement framework — they're yours. We offer optional refresher sessions and an ongoing-partnership retainer for orgs that want continuous coaching, but most teams run independently after program close.",
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
      {
        q: "What does a workflow integration engagement cost?",
        a: "Scoped engagements start around $25K for a single workflow redesign. Multi-workflow programs typically run $50K–$150K depending on complexity, number of integrations, and how much custom prompt engineering is involved. Always a fixed-fee quote — never hourly.",
      },
      {
        q: "What's the typical timeline?",
        a: "4–12 weeks depending on scope. A single workflow redesign runs 4 weeks. Multi-workflow programs with custom Claude Projects and SOPs typically run 8–12 weeks. We always agree on a delivery date upfront.",
      },
      {
        q: "Who from our team needs to be involved?",
        a: "An executive sponsor, the function owner whose workflow we're redesigning (3–5 hours/week during active design), and 1–2 operators who actually run the workflow today. We do the design, prompt engineering, integration, and documentation.",
      },
      {
        q: "What happens after the workflows are deployed?",
        a: "You own them — we hand off SOPs, prompt libraries, and training. Most clients run independently within 30 days of launch. About half retain us on a partnership for quarterly audits or to roll the same approach into new functions.",
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
      {
        q: "What does this engagement cost?",
        a: "Pricing depends on number of use cases and Projects we're building. Typical engagements run $10K–$35K. A focused engagement on 3–5 high-leverage prompts and one Claude Project is at the lower end; a full department-level prompt library is at the upper end.",
      },
      {
        q: "What's the timeline?",
        a: "3–6 weeks for most engagements. Week 1 is discovery and prioritization; weeks 2–4 are engineering and testing; final week is handoff, documentation, and team training.",
      },
      {
        q: "Who needs to be involved on our side?",
        a: "Subject-matter experts for the workflows we're prompting (a few hours total — we interview them and they review outputs). One designated owner who'll maintain the prompts after handoff. That's it — no engineering required from your side.",
      },
      {
        q: "What happens when prompts need to evolve?",
        a: "We document the design rationale and testing framework so your team can iterate confidently. For ongoing prompt evolution as Claude releases new capabilities, the Ongoing Partnership retainer is the natural follow-on.",
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
      {
        q: "What does a custom build cost?",
        a: "Builds typically run $40K–$200K+. An internal ops tool with one core Claude-powered workflow is at the lower end. A multi-feature customer-facing product with auth, billing, and managed cost controls is at the upper end. We give a fixed-scope, fixed-fee quote after a discovery call.",
      },
      {
        q: "Who needs to be involved on your side?",
        a: "A product owner from your team who can answer scope questions and review work weekly (3–5 hours/week). An engineering point of contact if you want them shadowing for handoff. End-users for usability testing in weeks 4 and 8 (1 hour each). That's it.",
      },
      {
        q: "How do you handle Anthropic API costs at scale?",
        a: "We design with cost in the architecture from day one — model selection per task (Haiku/Sonnet/Opus where each fits), prompt caching, output streaming, and per-customer or per-feature usage caps. You see projected costs before launch and ongoing cost dashboards after.",
      },
      {
        q: "What happens after launch?",
        a: "30 days of bug-fix support included. Most clients then either retain us monthly for ongoing iteration or hand off to their own engineering team — both paths are well-documented. We don't try to lock you in.",
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
      {
        q: "What does this engagement cost?",
        a: "Engagements typically run $20K–$60K. A single recurring report (e.g., monthly board narrative) automated end-to-end is at the lower end. Multiple reports across departments with self-serve dashboards run higher.",
      },
      {
        q: "What's the timeline?",
        a: "5–9 weeks. Week 1 is discovery on your reporting cadence and pain points. Weeks 2–6 are pipeline build and prompt engineering. Final 2–3 weeks are quality testing, handoff, and team training so you run it independently.",
      },
      {
        q: "Who needs to be involved on our side?",
        a: "A designated owner of the reporting process (4–6 hours/week during build), a data engineer or BI analyst who can grant access to data sources (a few hours total), and the executives who consume the reports for voice/format calibration (one 30-minute interview each).",
      },
      {
        q: "What happens when our data sources change?",
        a: "We architect the pipelines so swapping data sources or adding new ones is straightforward — your team can do most updates without us. For deeper changes (new BI platform, new metric definitions) we offer continuation work or it's covered by the Ongoing Partnership retainer.",
      },
    ],
  },
  {
    slug: "ai-security-governance",
    title: "AI Security & Governance",
    tagline: "Roll out Claude without legal, security, or compliance exposure.",
    description:
      "Most companies adopting Claude haven't thought through the security and governance layer. We bring a cybersecurity foundation (built on federal-scale fraud protection work) into the AI deployment process. Policy, vendor risk, employee training, and audit-ready documentation, scoped to where you actually are.",
    icon: "ShieldCheck",
    whatWeDeliver: [
      "AI usage policy tailored to your industry and risk profile",
      "Security review of existing Claude deployments and prompt patterns",
      "Vendor risk assessment for Claude and adjacent AI tools",
      "Employee training on safe, compliant AI use",
      "Audit-ready documentation aligned to NIST AI RMF and SOC 2 controls",
    ],
    whoItsFor:
      "Regulated industries, security-conscious organizations, and any company that wants to deploy AI without creating legal or compliance exposure. Particularly relevant for finance, healthcare, legal, and government-adjacent businesses.",
    outcomes: [
      "Defensible AI policy you can put in front of auditors and customers",
      "Reduced exposure on data handling, vendor risk, and employee misuse",
      "Clear escalation paths for AI incidents",
      "Confidence to expand AI usage without compounding risk",
    ],
    faq: [
      {
        q: "What does this engagement cost?",
        a: "Engagements typically run $15K to $45K. A focused AI policy and one-time security review of existing deployments is at the lower end. Full governance program with ongoing audit alignment runs higher.",
      },
      {
        q: "What's the timeline?",
        a: "3 to 6 weeks. Week 1 is discovery on your current AI usage, regulatory environment, and risk tolerance. Weeks 2 to 4 are policy drafting and security review. Final week is training rollout and documentation handoff.",
      },
      {
        q: "Who from our team needs to be involved?",
        a: "An executive sponsor, your legal or compliance lead (a few hours during policy drafting), your IT or security lead (interview plus review), and the operators using Claude today (brief interviews so policy reflects reality, not theory).",
      },
      {
        q: "Can this align with frameworks like NIST AI RMF or SOC 2?",
        a: "Yes. We map deliverables to NIST AI Risk Management Framework, SOC 2 Trust Services Criteria, and ISO 42001 where relevant. The documentation is built to feed directly into your existing audit work.",
      },
      {
        q: "Do you replace our existing legal counsel?",
        a: "No. We work alongside your counsel and produce documentation they can review and ratify. Our role is operational and technical risk; legal review of final policy stays with your counsel.",
      },
      {
        q: "What happens after the engagement?",
        a: "You own the policy and documentation. Most clients move to a quarterly review cadence under the Ongoing Partnership retainer to keep policy current as the AI landscape changes.",
      },
    ],
  },
  {
    slug: "marketing-content-ops",
    title: "Marketing & Content Operations",
    tagline: "10× your marketing output without losing brand voice.",
    description:
      "Marketing teams that adopt Claude well stop being a bottleneck. We build the prompt systems, brand voice training, and content production workflows that let a small team ship at the velocity of a large agency. Drawn from operator experience inside the Vaynerchuk media empire.",
    icon: "Sparkles",
    whatWeDeliver: [
      "Brand voice prompt system that captures your tone, register, and editorial standards",
      "Production workflows for blog, email, social, and ad content",
      "Lifecycle email automation with Claude-generated personalization",
      "Multi-channel content adaptation (one source, many surfaces)",
      "Quality review framework so output stays on-brand at volume",
    ],
    whoItsFor:
      "Marketing leaders, content teams, demand gen, and lifecycle operators who need to ship more content without expanding headcount or losing brand consistency.",
    outcomes: [
      "3 to 10× content output volume per marketer (typical)",
      "Brand voice consistency across surfaces and channels",
      "Faster turnaround on campaign content (days, not weeks)",
      "Marketing team capacity unlocked for strategy and analysis",
    ],
    faq: [
      {
        q: "Won't AI-generated marketing sound generic?",
        a: "Only if you do it lazily. Our brand voice prompt systems train Claude on your actual editorial voice, and we build review workflows so a human always sees output before publication. The bar is 'indistinguishable from your best in-house writer,' not 'good enough'.",
      },
      {
        q: "What does this cost?",
        a: "Engagements run $20K to $75K. A brand voice prompt system plus production workflow for one channel (e.g., blog) is at the lower end. A full content operations buildout across 4+ channels with lifecycle automation runs higher.",
      },
      {
        q: "What's the timeline?",
        a: "5 to 10 weeks. Week 1 is voice and editorial discovery. Weeks 2 to 5 are system build and prompt engineering. Final weeks are workflow rollout, training, and quality calibration.",
      },
      {
        q: "Who from our team needs to be involved?",
        a: "Marketing leadership for voice calibration, your best content writer for tone training (the prompt system learns from their work), and the operators who'll run the workflows day-to-day. Light touch from leadership; deeper involvement from content and ops.",
      },
      {
        q: "How do you handle SEO concerns about AI-generated content?",
        a: "Google has been clear: quality matters, source matters less. Our workflow produces content with a real human review layer, original perspective, and editorial standards. We've never seen quality content penalized regardless of how it was drafted.",
      },
      {
        q: "What happens after launch?",
        a: "You run the system. We hand off prompt libraries, workflow documentation, and the quality framework. Many marketing teams retain us quarterly to evolve the brand voice as Claude releases new capabilities and as the team's editorial standards shift.",
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
      {
        q: "What does the retainer cost?",
        a: "Tiered monthly retainers: advisory-only at $5K/month, advisory + light implementation at $10K/month, and a full embedded retainer with dedicated build hours at $15K–$25K/month. You can move between tiers at any quarter.",
      },
      {
        q: "What's the minimum commitment?",
        a: "Three months. After that, month-to-month with 30 days' notice to pause or cancel. We don't lock you into annual contracts — if we're not creating value, you should be able to leave.",
      },
      {
        q: "How quickly do you respond to async questions?",
        a: "Within one business day for Slack/email questions, with same-day responses on most inbound. Time-sensitive issues (a launch question, a vendor-comparison gut-check) are typically answered within a few hours during business hours.",
      },
      {
        q: "Can we scale up or pause when needs change?",
        a: "Yes. Tier-up by the next month, tier-down or pause with 30 days' notice. Many clients flex up around quarterly planning or major launches and back down during steadier periods. Unused build hours roll over within the same quarter.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
