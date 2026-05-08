export type PromptFunction =
  | "sales"
  | "marketing"
  | "customer-service"
  | "finance"
  | "hr"
  | "operations"
  | "product"
  | "engineering"
  | "design"
  | "data"
  | "it-security"
  | "legal"
  | "executive"
  | "founder"
  | "productivity"
  | "pr-comms";

export type PromptComplexity = "beginner" | "intermediate" | "advanced";

export type ModelRecommendation =
  | "claude-opus-4-7"
  | "claude-sonnet-4-6"
  | "claude-haiku-4-5";

export interface Prompt {
  title: string;
  slug: string;
  function: PromptFunction;
  role: string;
  description: string;
  useCase: string;
  prompt: string;
  variables: string[];
  exampleInput: string;
  exampleOutput: string;
  tips: string[];
  complexity: PromptComplexity;
  modelRecommendation: ModelRecommendation;
  relatedSlugs: string[];
  tags: string[];
}

export const FUNCTION_LABELS: Record<PromptFunction, string> = {
  sales: "Sales",
  marketing: "Marketing",
  "customer-service": "Customer Service",
  finance: "Finance",
  hr: "HR & People",
  operations: "Operations",
  product: "Product",
  engineering: "Engineering",
  design: "Design",
  data: "Data & Analytics",
  "it-security": "IT & Security",
  legal: "Legal",
  executive: "Executive",
  founder: "Founders & Startup",
  productivity: "Personal Productivity",
  "pr-comms": "PR & Communications",
};

export const FUNCTION_DESCRIPTIONS: Record<PromptFunction, string> = {
  sales:
    "Prompts for SDRs, AEs, sales enablement, sales ops, and customer success.",
  marketing:
    "Prompts for content, brand, performance, demand gen, lifecycle, and SEO.",
  "customer-service":
    "Prompts for support, CX research, and escalation handling.",
  finance: "Prompts for FP&A, accounting, treasury, and investor relations.",
  hr: "Prompts for recruiting, L&D, people ops, and internal communications.",
  operations:
    "Prompts for ops management, project management, and vendor management.",
  product: "Prompts for PMs, user researchers, and product designers.",
  engineering:
    "Prompts for coding, code review, documentation, and architecture.",
  design: "Prompts for UX, UI, brand, content design, and design operations.",
  data: "Prompts for analysts, analytics engineers, data scientists, and BI teams.",
  "it-security": "Prompts for DevOps, SRE, infosec, and internal IT teams.",
  legal: "Prompts for contracts, compliance, and IP work.",
  executive: "Prompts for strategy, communications, and board prep.",
  founder:
    "Prompts for solo founders, cofounders, fundraising, early hiring, and founder-led sales.",
  productivity:
    "Prompts for email triage, meeting prep, note synthesis, learning, and decision-making.",
  "pr-comms":
    "Prompts for media relations, executive communications, crisis response, and thought leadership.",
};

export const ROLES_BY_FUNCTION: Record<PromptFunction, string[]> = {
  sales: ["sdr", "ae", "sales-enablement", "sales-ops", "customer-success"],
  marketing: [
    "content",
    "brand",
    "performance",
    "demand-gen",
    "product-marketing",
    "lifecycle",
    "seo",
  ],
  "customer-service": ["support", "cx-research", "escalations"],
  finance: ["fpa", "accounting", "treasury", "investor-relations"],
  hr: ["recruiting", "ld", "people-ops", "internal-comms"],
  operations: ["ops-management", "project-management", "vendor-management"],
  product: ["product-management", "user-research", "product-design"],
  engineering: ["coding", "code-review", "documentation", "architecture"],
  design: [
    "ux-design",
    "ui-design",
    "brand-design",
    "content-design",
    "design-ops",
  ],
  data: [
    "data-analyst",
    "analytics-engineering",
    "data-science",
    "business-intelligence",
  ],
  "it-security": ["devops", "sre", "security", "it-support"],
  legal: ["contracts", "compliance", "ip"],
  executive: ["strategy", "comms", "board-prep"],
  founder: [
    "solo-founder",
    "cofounder",
    "fundraising",
    "early-hiring",
    "founder-sales",
  ],
  productivity: ["email", "calendar", "notes", "learning", "decision-making"],
  "pr-comms": [
    "media-relations",
    "executive-comms",
    "crisis-comms",
    "thought-leadership",
    "content-distribution",
  ],
};
