---
title: "Draft a legal risk memo for a business decision"
slug: legal-risk-memo
function: legal
role: contracts
description: "Write a structured legal risk memo analyzing the legal risks of a proposed business decision — identifying applicable laws, potential liability, risk mitigation options, and a recommendation for decision-makers."
useCase: "Use this prompt when a business team needs a clear-eyed legal risk assessment before making a significant decision — launching a new product feature, entering a new market, changing a business model, or proceeding with a partnership. The memo format is designed to be actionable, not academic."
prompt: |
  You are a senior in-house attorney writing a legal risk memo for business leadership. The memo should help decision-makers understand legal risks clearly, not overwhelm them with legal complexity.

  **Proposed action:** {{proposed_action}} (what the business wants to do)
  **Business rationale:** {{business_rationale}} (why the business wants to do it)
  **Relevant facts:** {{relevant_facts}} (key context that affects the legal analysis)
  **Applicable jurisdictions:** {{jurisdictions}} (where this will operate, or where the company is based)
  **Industry/sector:** {{industry}}
  **Timeline:** {{timeline}} (when does the business want to proceed?)
  **Key stakeholder:** {{stakeholder}} (who the memo is written for — CEO, board, VP Product, etc.)

  Write a legal risk memo with this structure:

  # LEGAL RISK MEMO

  **To:** {{stakeholder}}
  **From:** Legal
  **Date:** [Date]
  **Re:** [Short description of the proposed action]
  **Privilege:** Attorney-Client Privileged and Confidential

  ## Executive Summary
  3–4 sentences: What is being proposed, what is the overall risk level (Low / Medium / High / Very High), and what is legal's recommendation (proceed / proceed with modifications / do not proceed / seek additional guidance)?

  ## Background
  Brief factual summary of the proposed action and business context. Legal conclusion should flow from facts, so state them clearly.

  ## Legal Issues Identified
  For each legal issue:
  - **Issue:** Clear statement of the legal question
  - **Applicable law:** Which laws, regulations, or cases govern this issue
  - **Analysis:** How the law applies to the facts here — what's the likely outcome?
  - **Risk level:** Low / Medium / High / Very High
  - **Risk description:** In plain English, what could actually happen if this risk materializes?

  ## Risk Summary Table
  | Issue | Risk Level | Probability | Potential Consequence |
  |---|---|---|---|

  ## Mitigation Options
  For each significant risk, what can the business do to reduce it?
  - **Mitigation:** [Specific action]
  - **Residual risk after mitigation:** [What risk remains]
  - **Cost/feasibility of mitigation:** [Practical assessment]

  ## Recommendation
  Legal's recommendation with reasoning. Be direct — legal's job is to inform the decision, not make it. But legal should take a position.

  If recommending "proceed with modifications," specify exactly what changes are required before proceeding.

  ## Next Steps
  If proceeding: specific actions legal needs to take, and what legal needs from the business.
  If not proceeding: what additional analysis would be needed to reconsider.

  ---
  *This memorandum is protected by attorney-client privilege. Do not forward without legal's approval.*
variables:
  - "{{proposed_action}}"
  - "{{business_rationale}}"
  - "{{relevant_facts}}"
  - "{{jurisdictions}}"
  - "{{industry}}"
  - "{{timeline}}"
  - "{{stakeholder}}"
exampleInput: |
  proposed_action: |
    Launch an "AI Insights" feature that analyzes employee survey responses using an LLM to generate plain-English summaries of engagement trends, with recommendations for managers. The LLM will process identified employee response data (responses are not anonymous — managers can see which employees responded and how).
  business_rationale: Differentiation against competitors, reduce time HR managers spend analyzing data, increase platform value and retention
  relevant_facts: |
    - We are an HR SaaS company (Beacon) operating in the US and serving customers in the US, EU, and Canada
    - Employees' survey responses will be sent to a third-party LLM API (OpenAI) for processing
    - Employees were told in our Terms of Service that their responses are "visible to their managers"
    - We have not specifically disclosed that their responses would be processed by AI or sent to a third-party AI vendor
    - Some customers are in regulated industries (healthcare, financial services)
    - Our current DPA with EU customers was written before this feature existed
  jurisdictions: US (all states), EU (GDPR), Canada (PIPEDA)
  industry: HR technology / SaaS
  timeline: Product team wants to launch in 6 weeks
  stakeholder: CEO and VP Product
exampleOutput: |
  # LEGAL RISK MEMO

  **To:** CEO, VP Product
  **From:** Legal
  **Date:** 2025-03-15
  **Re:** Legal Risk Assessment — AI Insights Feature (LLM Processing of Employee Survey Data)
  **Privilege:** Attorney-Client Privileged and Confidential

  ---

  ## Executive Summary

  The proposed AI Insights feature carries **High** legal risk in its current design due to three issues: employees and customers have not been informed that response data will be processed by a third-party AI vendor; this processing likely constitutes a "new purpose" under GDPR that requires fresh legal basis and employee consent; and our existing DPA with EU customers does not cover this data processing activity. **Legal recommends proceeding, but with mandatory modifications that will require 8–12 weeks to implement properly, not 6 weeks.** The feature is viable with the right disclosures, DPA updates, and vendor agreements in place — but launching in 6 weeks without these would create material regulatory and contractual risk.

  ---

  ## Background

  Beacon proposes to add "AI Insights," a feature that processes employee survey responses through OpenAI's API to generate plain-English summaries of engagement trends for HR managers. Unlike current analytics (which aggregate responses within Beacon's own systems), this feature would transmit identified employee response data to a third-party (OpenAI) for processing.

  Employee responses are not anonymous — managers can see which employees said what. Employees were informed that responses are "visible to their managers" in Beacon's ToS, but were not informed of AI processing or third-party data transfers.

  Beacon serves customers in the US, EU, and Canada, including healthcare and financial services customers in regulated industries.

  ---

  ## Legal Issues Identified

  ### Issue 1: Inadequate Disclosure to Employees (US)

  **Applicable law:** California Consumer Privacy Act (CCPA) for California residents; various state privacy laws for other states; FTC Act Section 5 (unfair or deceptive practices)

  **Analysis:** Sending employee data to a third-party AI vendor is a "sale" or "sharing" of personal information under CCPA if OpenAI uses the data to train its models or improve its services. Even if it isn't a "sale," processing by a third party requires disclosure in a privacy policy. Employees were told their responses are "visible to managers" — a reasonable employee would not understand this to include processing by OpenAI. This is a material gap between what was disclosed and what is happening.

  **Risk level:** High

  **Risk description:** FTC enforcement action for deceptive practices; CCPA complaints and AG enforcement for California employees; potential class action from employees claiming their data was shared without adequate disclosure. Reputational harm with enterprise customers who represent their employees' data is handled with specific constraints.

  ---

  ### Issue 2: GDPR Legal Basis and Data Processor Requirements

  **Applicable law:** GDPR Articles 6, 28, and 44 (EU); UK GDPR (similar); potential fines up to 4% of global annual revenue

  **Analysis:** Under GDPR, processing employee data requires a lawful basis and must be disclosed to data subjects. Using an LLM to analyze responses is a new purpose for which the original legal basis (likely "performance of contract" or "legitimate interests") may not extend. More critically, sending EU employee data to OpenAI requires: (1) a Data Processing Agreement with OpenAI per Article 28; (2) appropriate data transfer mechanisms (Standard Contractual Clauses) since OpenAI is a US company; and (3) customer DPA updates, since Beacon is a data processor for its enterprise customers and must document sub-processors.

  Our current DPA with EU customers was drafted before this feature — OpenAI is not listed as a sub-processor. Using OpenAI without updating the DPA violates our contractual commitments to EU customers.

  **Risk level:** Very High

  **Risk description:** GDPR enforcement by EU data protection authorities — fines up to 4% of global annual revenue; contractual breach claims from EU customers whose DPAs don't permit this processing; injunctions requiring us to stop the feature in the EU. Several EU DPAs have provisions requiring 30-day notice before adding new sub-processors, meaning EU customers must be notified before launch.

  ---

  ### Issue 3: Regulated Industry Customers (Healthcare, Financial Services)

  **Applicable law:** HIPAA (healthcare — if any employee data constitutes PHI); various state-level financial services regulations

  **Analysis:** If healthcare customers' employees use Beacon, their survey responses may contain information that constitutes Protected Health Information (PHI) if connected to employment and benefits data. HIPAA requires a Business Associate Agreement (BAA) before PHI can be shared with third parties. OpenAI's standard terms do not include a BAA, and most LLM providers don't offer BAAs. This would prohibit the feature for healthcare customers entirely without a HIPAA-compliant processing arrangement.

  **Risk level:** High (for healthcare segment); Medium (financial services)

  **Risk description:** HIPAA violation — OCR enforcement; potential fines per violation; breach notification obligations if PHI is transmitted without authorization.

  ---

  ### Issue 4: OpenAI Data Use Terms

  **Applicable law:** Contract law; potential GDPR implications if OpenAI uses data for training

  **Analysis:** OpenAI's API terms (as of March 2025) provide that OpenAI will not use API-submitted data to train its models by default for API customers. However, this should be verified and documented. If OpenAI changes its terms or the current version is misread, employee data could be used for AI training — which violates our obligations to employees (Issue 1) and potentially our contractual commitments to customers.

  **Risk level:** Medium

  **Risk description:** Contractual breach with customers if their data is used for training; regulatory risk if AI training violates applicable privacy laws.

  ---

  ## Risk Summary Table

  | Issue | Risk Level | Probability of Harm | Potential Consequence |
  |---|---|---|---|
  | Inadequate disclosure to employees | High | High (if we don't fix it) | FTC/CCPA enforcement, class action |
  | GDPR — new purpose, sub-processor | Very High | Very High (if we launch in EU without DPA update) | Regulatory fine up to 4% global revenue, customer contract breach |
  | Regulated industry (healthcare) | High | High for healthcare customers | HIPAA violation, breach notification |
  | OpenAI data use terms | Medium | Low (if documented) | Contractual breach with customers |

  ---

  ## Mitigation Options

  **For Issues 1 and 2 (Disclosure):**
  - Update employee-facing privacy disclosures to describe AI processing of survey responses
  - Add in-app disclosure at the point employees submit responses: "Your responses may be processed by AI to generate insights for your manager."
  - **Residual risk:** Disclosure does not fix the GDPR legal basis issue — additional analysis needed
  - **Feasibility:** 2–3 weeks for product implementation

  **For Issue 2 (GDPR — DPA/Sub-Processor):**
  - Update all EU customer DPAs to list OpenAI as a sub-processor (requires 30-day notice per most DPAs)
  - Execute Standard Contractual Clauses with OpenAI for EU data transfers
  - Update sub-processor list on privacy policy
  - **Residual risk:** Even with updates, the new processing purpose may require fresh lawful basis analysis
  - **Feasibility:** 6–10 weeks (30-day notice period is mandatory)

  **For Issue 3 (Healthcare):**
  - Exclude healthcare customers from AI Insights feature at launch pending HIPAA analysis
  - Seek OpenAI BAA (unlikely to be available; explore alternatives like Azure OpenAI which offers HIPAA BAAs)
  - **Residual risk:** Feature unavailable to a segment of customers
  - **Feasibility:** 12+ weeks to implement a HIPAA-compliant alternative

  **For Issue 4 (OpenAI Terms):**
  - Obtain and document OpenAI's current API data use terms (API, not consumer ChatGPT — these differ)
  - Add contractual representation in customer agreements that we will not permit vendor AI training on their data
  - **Feasibility:** 1 week

  ---

  ## Recommendation

  **Proceed — but with a 10–12 week timeline, not 6 weeks, and with the following mandatory modifications:**

  1. **Before launch (any market):** Execute DPA with OpenAI; document OpenAI's data-use restrictions; update internal privacy policy to describe AI processing; update employee-facing disclosures.

  2. **Before launch in EU:** Notify all EU customers of OpenAI as a new sub-processor (30-day notice — this clock must start within 2 weeks); update EU customer DPAs; confirm SCCs with OpenAI.

  3. **Before launch to healthcare customers:** Either obtain a HIPAA-compliant arrangement (explore Azure OpenAI) or explicitly exclude healthcare customers from the feature at launch.

  4. **At launch:** Implement in-app disclosure at response submission.

  **The feature should not launch in 6 weeks.** The EU sub-processor notification alone requires 30 days, and drafting and updating DPAs requires additional time before that notice period begins.

  ---

  ## Next Steps

  **Legal will:**
  - Review OpenAI API terms and DPA template (Week 1)
  - Draft updated sub-processor notification for EU customers (Week 1)
  - Draft updated customer DPA addendum (Weeks 1–2)
  - Conduct GDPR legal basis analysis for new processing purpose (Week 2)
  - Advise on HIPAA compliance options for healthcare segment (Weeks 2–3)

  **Legal needs from Product/Business:**
  - Confirm the exact data fields that will be sent to OpenAI
  - Confirm whether OpenAI processes or stores the data, and for how long
  - List of EU customers and their DPA contract dates
  - List of healthcare customers for HIPAA analysis

  ---

  *This memorandum is protected by attorney-client privilege and was prepared in anticipation of litigation. Do not forward, copy, or discuss outside of the leadership team without legal's approval.*
tips:
  - "A legal risk memo is most valuable when it takes a clear position — 'proceed with modifications' is more useful than 'there are risks on both sides.' Leaders need to make decisions; legal's job is to inform that decision with a recommendation."
  - "Quantify the worst case where possible. '4% of global annual revenue' is more actionable than 'significant regulatory fines.' Decision-makers need to weigh risk against business value."
  - "Separate what must be done before launch (mandatory) from what would be nice to have (risk reduction). This helps the business prioritize under timeline pressure."
  - "This prompt generates a structured framework for a risk memo — the legal analysis must be conducted by a licensed attorney with knowledge of current law in the applicable jurisdictions."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - contract-summary
  - compliance-gap-analysis
  - privacy-policy-review
  - vendor-contract-playbook
tags:
  - legal
  - risk
  - compliance
  - memo
  - gdpr
---
