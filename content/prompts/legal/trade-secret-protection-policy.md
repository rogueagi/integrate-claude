---
title: "Draft a trade secret protection policy"
slug: trade-secret-protection-policy
function: legal
role: ip
description: "Generate a trade secret protection policy that documents the reasonable measures required to maintain trade secret status — not a binder of theory, but a working policy tied to actual practice."
useCase: "Use this when standing up an IP program, after a high-stakes departure has exposed gaps, or when preparing for due diligence in a financing or acquisition. Trade secret protection requires documented 'reasonable measures' under DTSA and state law — without them, you may not have a trade secret to enforce."
prompt: |
  You are an IP and employment counsel with experience defending trade secret claims under DTSA and state UTSA. Draft a trade secret protection policy.

  Context:
  - Company: {{company}}
  - Industry and competitive context: {{industry_competitive}}
  - Categories of trade secrets the company holds: {{trade_secret_categories}} (e.g., source code, customer data, pricing models, manufacturing processes, ML models)
  - Existing IP and security infrastructure: {{existing_infrastructure}}
  - Headcount and growth rate: {{headcount}}
  - Specific recent triggers (if any): {{triggers}} (e.g., recent departure to competitor, leak suspicion, due diligence prep)

  Draft a policy with:

  1. **Purpose and scope**

  2. **What qualifies as a trade secret** — Plain definition aligned to DTSA / UTSA, with specific examples from {{trade_secret_categories}}.

  3. **Identification and classification system** — How trade secrets are identified, marked, and inventoried. Include a 3-tier classification (e.g., Highly Confidential / Confidential / Internal).

  4. **Reasonable measures** — Concrete physical, technical, and administrative safeguards. Tie each to the classification level.
     - Physical: access controls, visitor logs, clean desk
     - Technical: access controls, encryption, audit logs, DLP, restricted environments for highest tier
     - Administrative: NDAs, training, exit procedures, vendor diligence
     - Marking: how documents are labeled

  5. **Onboarding and offboarding obligations** — What happens at new hire and departure to maintain trade secret status. Include the departing-employee interview script and equipment return checklist.

  6. **Third-party disclosures** — Rules for disclosing trade secrets to vendors, contractors, customers, partners. NDA requirements.

  7. **Incident response** — What happens when a suspected trade secret violation occurs (theft, leak, unauthorized disclosure).

  8. **Training and acknowledgment** — Training cadence, who trains whom, written acknowledgment.

  9. **Roles and responsibilities** — IP Counsel, Security Lead, People Ops, Engineering Leadership.

  10. **Review and update cadence** — Annual review, trigger events.

  Tone: practical, enforceable, and tied to operational reality. Avoid bare incantation of legal phrases without action backing them.

  End with a disclaimer that this policy supports but does not replace specific legal review of trade secret matters.
variables:
  - "{{company}}"
  - "{{industry_competitive}}"
  - "{{trade_secret_categories}}"
  - "{{existing_infrastructure}}"
  - "{{headcount}}"
  - "{{triggers}}"
exampleInput: |
  company: Northstar Robotics, Inc., a Delaware C-corp
  industry_competitive: Industrial robotics; small and competitive market with ~6 direct competitors; common cross-hiring; significant patent and trade secret litigation in the segment over the last decade
  trade_secret_categories: (1) Proprietary motion-control algorithms (source code); (2) Manufacturing process specifications and tolerance data; (3) Customer pricing models and deal terms database; (4) Supplier relationships and unit cost data; (5) ML models and training data for vision systems
  existing_infrastructure: SSO via Okta; GitHub Enterprise for source code; AWS for production; Notion for general docs; G Suite; physical office with badge access; security-cam covered manufacturing floor
  headcount: 280 employees; growing 35% YoY; significant senior hiring from competitors
  triggers: Two senior engineers departed to a competitor in the last quarter. One was on the motion-control team; one had access to the pricing model. We are not certain anything was taken, but we want to harden the policy and procedures going forward and document reasonable measures for the record.
exampleOutput: |
  # NORTHSTAR ROBOTICS, INC.
  ## Trade Secret Protection Policy

  **Effective:** [Date]
  **Owner:** General Counsel
  **Review cadence:** Annually, or on trigger events

  ## 1. Purpose and scope

  Northstar's competitive position depends on protecting information that gives the company an economic advantage by virtue of being secret. This policy defines (a) what qualifies as a trade secret, (b) the reasonable measures Northstar uses to maintain trade secret status, and (c) the obligations of employees, contractors, and the company itself in protecting that status.

  This policy applies to all employees, contractors, interns, board members, and any other personnel with access to Northstar information.

  ## 2. What qualifies as a trade secret

  A "Trade Secret" is information that:
  (a) derives independent economic value, actual or potential, from not being generally known and not being readily ascertainable through proper means by another person who can obtain economic value from its disclosure or use; and
  (b) is the subject of reasonable measures to maintain its secrecy.

  This definition aligns with the federal Defend Trade Secrets Act (DTSA) and the Uniform Trade Secrets Act as adopted in most US states.

  Northstar's trade secrets include, without limitation:

  - **Motion-control source code, algorithms, and design notes.** This is Northstar's most economically valuable category and is treated at the highest classification.
  - **Manufacturing process specifications, tolerance data, and yield optimization data.**
  - **Vision-system ML models, training datasets, model weights, and labeling methodologies.**
  - **Customer pricing models, deal-specific terms, customer-by-customer profitability analyses, and negotiation playbooks.**
  - **Supplier identities, supplier-specific unit costs, supplier negotiation history, and supply chain diversification strategies.**
  - **Internal product roadmaps and unreleased product specifications.**

  General industry knowledge, publicly disclosed information, and information derived independently by another party through proper means are NOT trade secrets, even if they relate to the categories above.

  ## 3. Identification and classification

  All Northstar information is classified into one of three tiers. Classification governs handling, access, and protection.

  | Tier | Definition | Examples | Marking |
  |---|---|---|---|
  | **Highly Confidential** | Trade secrets whose disclosure would cause significant competitive harm | Motion-control source code; manufacturing process; ML model weights and training data | "NORTHSTAR HIGHLY CONFIDENTIAL — TRADE SECRET" header; red banner in code/docs |
  | **Confidential** | Sensitive business information including most trade secret categories | Pricing models; supplier costs; customer lists | "NORTHSTAR CONFIDENTIAL" header |
  | **Internal** | Information meant for internal use but lower sensitivity | Org charts; standard policies; generic tooling docs | "NORTHSTAR INTERNAL" header |

  **Inventory.** General Counsel maintains a Trade Secret Inventory listing each Highly Confidential category, its owner, where it resides, and the access list. Updated quarterly.

  ## 4. Reasonable measures

  ### 4.1 Physical safeguards

  - Badge access required for all office space; visitor log maintained; visitors escorted in production areas
  - Manufacturing floor restricted to badge-cleared employees; visitor access requires signed visitor NDA and escort
  - Security cameras cover production areas with 90-day footage retention
  - Clean-desk requirement for areas where Highly Confidential materials are reviewed
  - Secure shredding of physical Confidential and Highly Confidential materials

  ### 4.2 Technical safeguards

  - All employee access to Northstar systems requires SSO (Okta) with MFA
  - **Source code (Highly Confidential):**
    - GitHub Enterprise with branch protection
    - Access to motion-control repositories restricted to engineers on need-to-know list, reviewed quarterly
    - Code clone events logged; bulk-clone alerting
    - No personal device access to source code repositories
  - **ML models and training data (Highly Confidential):**
    - Stored in restricted AWS S3 buckets with separate IAM roles
    - Download events logged and reviewed monthly
    - Encryption at rest (AES-256, KMS); encryption in transit (TLS 1.2+)
  - **Pricing model and customer/supplier data (Confidential to Highly Confidential):**
    - Restricted access in CRM; field-level access controls
    - Bulk export logged; alerts on >X record exports
    - Quarterly access review
  - **Endpoints:**
    - Managed device requirement for access to Highly Confidential information
    - DLP controls on managed endpoints
    - Disk encryption required
  - **Logging and audit:**
    - Centralized audit log retention for all access to Highly Confidential systems
    - Quarterly access reviews; immediate review on departure

  ### 4.3 Administrative safeguards

  - All employees sign a Proprietary Information and Inventions Assignment Agreement (PIIA) at hire
  - All contractors sign an NDA and IP assignment before engagement
  - All vendors receiving Northstar Confidential or Highly Confidential information sign an NDA with appropriate scope
  - Annual trade secret training (see Section 8)
  - Departing-employee process (see Section 5)
  - Documented incident response (see Section 7)

  ### 4.4 Marking

  - Documents and code containing Confidential or Highly Confidential information must be marked with the appropriate header
  - Source code repositories carry a top-level NOTICE file identifying classification
  - Email containing Confidential or Highly Confidential attachments must include the classification in the subject line

  Failure to mark does not remove trade secret protection if the information otherwise qualifies, but consistent marking is one of the strongest pieces of evidence of "reasonable measures."

  ## 5. Onboarding and offboarding

  ### 5.1 Onboarding

  Within first 5 business days, every new hire:
  - Signs the PIIA, NDA, and equipment policy
  - Completes trade secret protection training
  - Acknowledges (in writing) Northstar's classification system and the prohibition on bringing trade secrets from prior employers
  - Confirms (in writing) any prior obligations (existing NDAs, non-competes, IP assignments) and identifies any prior inventions

  Hiring manager confirms a "no improper use" attestation: the new hire is hired for general skills, not for any specific trade secret of a former employer.

  ### 5.2 Offboarding

  Triggered the moment a resignation is announced or a termination is decided. Owned by People Ops with IP Counsel and Security Lead in the loop for any Highly Confidential access holder.

  Offboarding checklist:
  1. Same-day access disable for accounts holding Highly Confidential access (motion-control engineers, pricing model holders, ML team)
  2. **Departing employee interview** (script in Appendix A) conducted by People Ops with IP Counsel attending for any Highly Confidential access holder
  3. Written reminder of post-employment obligations: continued confidentiality, return of property, IP assignment, applicable restrictive covenants (where enforceable)
  4. Equipment return checklist: laptop, badge, hardware tokens, any physical materials. Confirm in writing.
  5. Forensic image of laptop retained for 12 months for any Highly Confidential access holder
  6. Post-departure access log review for the 90 days preceding departure: bulk downloads, unusual access patterns, repository clones
  7. Receiving-company conflict-of-interest notice (where appropriate): if the departing employee discloses they are joining a direct competitor, IP Counsel evaluates whether to send a courtesy notification to the receiving company reminding them of the employee's obligations to Northstar (without making accusations)

  ### Appendix A — Departing employee interview script (high-access employees)

  > "Thanks for the time. We're not making accusations or asking you to repeat anything you've already said. We have four things to confirm.
  >
  > 1. You've returned all Northstar property — laptop, badge, any hardware. Anything else?
  > 2. You confirm you have not retained any Northstar information on personal devices, personal email, personal cloud accounts, or in any physical form. If anything was on a personal device for any reason, we'd like to image and clear it now.
  > 3. You understand your post-employment obligations: ongoing confidentiality, IP assignment for inventions made during employment, and any specific restrictive covenants in your PIIA.
  > 4. You will not, in your next role, use or disclose any Northstar Confidential or Highly Confidential information.
  >
  > Where are you going? (No commentary, just for our records.)
  >
  > Are there any questions you'd like answered before you go?"

  ### 5.3 Triggered procedures (recent departures)

  After the recent departures of two senior engineers to a competitor (motion-control and pricing-model access), the following triggered procedures are now standard for all departures of Highly Confidential access holders:

  - 90-day pre-departure access log audit (lookback)
  - Forensic laptop image with 12-month retention
  - Documented departing employee interview as in 5.2
  - IP Counsel review of restrictive covenant enforceability in receiving jurisdiction

  These procedures document the company's reasonable measures and create the evidentiary foundation for any future enforcement action without prejudging whether action is warranted.

  ## 6. Third-party disclosures

  No Confidential or Highly Confidential information may be disclosed to a third party without a signed NDA appropriate to the data category. NDA must include:

  - Defined scope of permitted use
  - Specific reference to trade secret protection (not just confidentiality)
  - Return/destruction obligation on termination
  - Survival period appropriate to category (5 years general; perpetual for trade secrets)

  Vendors with persistent access to Highly Confidential information undergo annual security review and must hold SOC 2 Type II or equivalent.

  ## 7. Incident response

  Suspected trade secret incidents include: unauthorized access, unauthorized disclosure, suspected theft, vendor breach, departing employee with anomalous access patterns.

  ### 7.1 Escalation

  Any employee who suspects an incident must report to General Counsel and Security Lead immediately. No external communication or independent investigation.

  ### 7.2 Initial response (within 24 hours)

  - GC and Security Lead convene
  - Document what is known: who, what, when, evidence
  - Preserve evidence (logs, devices, communications). No deletion or modification
  - Determine whether external counsel and forensics need to be engaged

  ### 7.3 Decisions in first 7 days

  - Whether to send a preservation/cease-and-desist letter to suspected actor or receiving company
  - Whether to file a temporary restraining order or injunction (under DTSA, state UTSA, or other claims)
  - Whether to involve law enforcement
  - Whether to notify customers, board, or insurance carrier

  All decisions documented and made in consultation with external IP litigation counsel.

  ## 8. Training and acknowledgment

  - All employees: annual 30-minute training on classification, marking, handling, and reporting
  - Engineering and ML teams: additional 30-minute training on source code and model handling
  - Sales and pricing team: additional 30-minute training on customer and pricing data handling
  - All new hires: training within first 5 business days
  - Written acknowledgment recorded in HRIS

  ## 9. Roles and responsibilities

  | Role | Responsibility |
  |---|---|
  | General Counsel | Policy ownership, trade secret inventory, incident response, vendor NDA review |
  | Security Lead | Technical safeguards, access reviews, audit log management, departing employee log audits |
  | People Ops | Onboarding/offboarding execution, training tracking, PIIA execution |
  | Engineering Leadership | Repository access reviews, source code marking, ML data handling |
  | All employees | Compliance with policy, reporting suspected incidents |

  ## 10. Review and update cadence

  This policy is reviewed annually by General Counsel. Trigger events for off-cycle review include: departures of Highly Confidential access holders to competitors, suspected incidents, due diligence engagements, material organizational change.

  ## Disclaimer

  This policy describes Northstar's reasonable measures to protect trade secrets. It is not a substitute for legal advice on specific trade secret matters. Suspected violations require real-time consultation with IP litigation counsel familiar with applicable jurisdictions. The enforceability of specific restrictive covenants and the available remedies for misappropriation vary by state and country.
tips:
  - "Reasonable measures must be operational, not theoretical. A policy that says 'access is restricted' but logs no accesses and runs no reviews is not a reasonable measure under DTSA litigation scrutiny."
  - "Document the reasonable measures contemporaneously. In litigation, the company that can show training records, access reviews, and exit interviews from before the incident wins on the 'reasonable measures' element. The company reconstructing them afterward does not."
  - "Tier classification matters. Treating everything as 'Highly Confidential' dilutes the credibility of the highest tier; not classifying important things at all undermines protection of those things specifically."
  - "Not legal advice. Trade secret enforcement is fact-specific and jurisdictional. Suspected misappropriation should be escalated to IP litigation counsel within 24 hours."
  - "Update the policy after any actual departure-to-competitor event. The triggered procedures section should grow over time based on what actually happened — that's what 'reasonable measures' looks like in practice."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - ip-assignment-review
  - employment-agreement-review
  - cease-and-desist-draft
tags:
  - trade-secret
  - ip-protection
  - dtsa
  - policy
  - departing-employees
---
