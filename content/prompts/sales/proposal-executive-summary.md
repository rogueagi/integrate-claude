---
title: "Write an executive summary for a sales proposal"
slug: proposal-executive-summary
function: sales
role: ae
description: "Generate a compelling executive summary section for a sales proposal that speaks to business outcomes, not product features."
useCase: "Use this prompt to write the executive summary of a formal sales proposal. This is the section executives actually read — it must demonstrate that you understand their situation and connect your solution to their stated goals."
prompt: |
  You are a senior account executive writing the executive summary section of a formal sales proposal. This section will be read by executives who may not read the rest of the document — it must stand alone and be compelling on its own.

  Deal context:
  - Client company: {{client_company}}
  - Executive reader(s): {{executive_readers}} (name and title)
  - Industry: {{industry}}
  - The problem they described in discovery: {{stated_problem}}
  - Business goals they mentioned: {{business_goals}}
  - Current situation / status quo: {{current_situation}}
  - Cost or impact of the problem (if they quantified it): {{problem_cost}}
  - Your proposed solution: {{proposed_solution}}
  - Key outcomes your solution delivers: {{key_outcomes}}
  - Proposed investment (if to be included): {{investment}} (write "omit" if not including in this section)
  - Timeline: {{timeline}}

  Write an executive summary that:
  - Opens by demonstrating you understand their specific situation — echo their language from discovery, not generic industry language
  - States the problem clearly and names its business impact
  - Connects your proposed solution directly to their stated goals (not to your product's features)
  - Includes 3–5 specific, measurable outcomes they can expect
  - Is written at an executive level: strategic, outcome-focused, no jargon, no feature lists
  - Is 250–350 words
  - Ends with a clear statement of what you're recommending and why now

  Format as a clean, professional document section — no bullet points in the opening paragraph, but bullets are acceptable for the outcomes section.

  Do not include: product names in the headline, generic phrases like "pleased to present," or feature specifications.
variables:
  - "{{client_company}}"
  - "{{executive_readers}}"
  - "{{industry}}"
  - "{{stated_problem}}"
  - "{{business_goals}}"
  - "{{current_situation}}"
  - "{{problem_cost}}"
  - "{{proposed_solution}}"
  - "{{key_outcomes}}"
  - "{{investment}}"
  - "{{timeline}}"
exampleInput: |
  client_company: Northbrook Financial Group
  executive_readers: Patricia Hawn, CFO; David Lim, COO
  industry: financial services
  stated_problem: month-end close takes 14 days and consumes the entire finance team for two weeks every month
  business_goals: reduce close cycle to under 7 days, free finance team for strategic analysis work
  current_situation: using a combination of legacy ERP, manual Excel reconciliations, and email approvals — process is entirely manual
  problem_cost: Patricia estimated 800 person-hours per month lost to close activities; two reconciliation errors in the past year caused reporting delays
  proposed_solution: automated close management and financial consolidation platform
  key_outcomes: close cycle reduction to 6 days, 60% reduction in manual reconciliation work, real-time close status visibility for leadership
  investment: $180,000 annually
  timeline: 90-day implementation
exampleOutput: |
  ## Executive Summary

  Northbrook Financial Group's finance team is operating at maximum capacity — not because of headcount, but because of process. A 14-day close cycle that consumes the entire team each month leaves no bandwidth for the forward-looking analysis that Patricia and David have identified as critical to Northbrook's next phase of growth. With two reconciliation errors in the past year and 800 person-hours per month absorbed by manual close activities, the current model carries both operational and reporting risk.

  This proposal outlines how Northbrook can move to a consistent, 6-day close cycle within 90 days — freeing your finance team to shift from data assembly to decision support.

  **What we're recommending:**

  An automated financial close and consolidation platform, configured specifically for Northbrook's existing ERP environment and approval workflows.

  **Outcomes you can expect:**

  - Close cycle reduced from 14 days to 6 days (57% improvement), sustained quarter over quarter
  - 60% reduction in manual reconciliation time, eliminating the two-week all-hands close sprint
  - Real-time close status visibility for CFO and COO — no more status update emails
  - Reconciliation error risk reduced through automated matching and exception flagging
  - Finance team capacity redirected to variance analysis, forecasting, and strategic modeling

  **Investment and timeline:**

  $180,000 annually. Full implementation in 90 days, with measurable close cycle improvement by month two.

  The close process is fixable, and the cost of not fixing it compounds each quarter. We're confident this is the right moment to act — and that the outcomes above are conservative based on what we've seen at comparable firms.
tips:
  - "Mirror the client's own language from discovery calls. If they said 'close sprint,' use that phrase — not 'period-end activities.'"
  - "If you don't have a quantified problem cost, ask Claude to help you estimate one based on headcount and hours before writing this section."
  - "Ask Claude to write two versions: one that includes investment and one that omits it — useful depending on whether the budget conversation has happened."
  - "The exec summary should make someone want to read the rest of the proposal. End with urgency that's real, not manufactured."
  - "After writing, run it back through Claude and ask: 'Does this sound like we understand their business, or does it sound like a vendor template?' Iterate until it's the former."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - sales-discovery-call-prep
  - deal-close-email
  - competitive-battle-card
tags:
  - proposal
  - executive-summary
  - ae
  - enterprise-sales
---
