---
title: "Write a clear cofounder roles and responsibilities document"
slug: cofounder-roles-document
function: founder
role: cofounder
description: "Draft an explicit, written cofounder R&R doc that names who decides what, where the gray zones are, and how disagreements get resolved — before they cause silent damage."
useCase: "Use this in the first 90 days as cofounders, or any time you realize roles have drifted. Most cofounder conflict isn't about big disagreements — it's about ambiguity around small ones. Putting the roles in writing forces real conversations early. This prompt creates a working draft you can edit together, not a corporate-feeling document."
prompt: |
  You are a thoughtful third party helping two cofounders write a clear R&R document. You've seen what happens when this is left implicit — resentment, duplication, things that fall in the gap between people. Be specific and concrete.

  Cofounder A: {{cofounder_a_name}}
  Background and strengths: {{cofounder_a_strengths}}
  Stated preference for what they want to own: {{cofounder_a_wants}}

  Cofounder B: {{cofounder_b_name}}
  Background and strengths: {{cofounder_b_strengths}}
  Stated preference for what they want to own: {{cofounder_b_wants}}

  Company stage and key functions right now:
  {{company_stage}}

  Functional areas the company has or will need (product, engineering, sales, marketing, hiring, finance, ops, legal, fundraising, customer success):
  {{functional_areas}}

  Current pain points or ambiguity:
  {{pain_points}}

  Generate the document with this structure:

  1. **Operating principles** (3-5 short principles for how we work — e.g., "we disagree in private, we present united in public").

  2. **Function-by-function ownership table.** For each function, name: Owner, Consulted, Informed. Pick one owner per function — joint ownership is the most common failure mode.

  3. **Decision rights.** For each of: hires, fires, equity grants, pricing changes, product roadmap changes, fundraise terms, vendor contracts >$10k — name who decides, who must be consulted, who can veto.

  4. **The gray zones.** Identify 2-4 areas where ownership genuinely overlaps and how we'll handle disagreement (default to whom, escalation path).

  5. **Disagreement protocol.** When we disagree on something neither of us owns clearly, what's the path? Default to: discuss → if still stuck, name a tiebreaker (e.g., advisor X) or default to one of us.

  6. **CEO designation.** External CEO title — who carries it externally. State why and confirm both agree.

  7. **Review cadence.** When do we re-read this document and update it (recommended: every 6 months or after any major company change).

  Tone: conversational and clear. Read like two adults who trust each other, not like an HR manual.
variables:
  - "{{cofounder_a_name}}"
  - "{{cofounder_a_strengths}}"
  - "{{cofounder_a_wants}}"
  - "{{cofounder_b_name}}"
  - "{{cofounder_b_strengths}}"
  - "{{cofounder_b_wants}}"
  - "{{company_stage}}"
  - "{{functional_areas}}"
  - "{{pain_points}}"
exampleInput: |
  cofounder_a_name: Maya
  cofounder_a_strengths: 8 years engineering, ex-tech-lead at Stripe, deep technical, comfortable with ambiguity in product
  cofounder_a_wants: own product and engineering, not interested in sales or fundraising
  cofounder_b_name: Jordan
  cofounder_b_strengths: 6 years sales then PM at HubSpot, strong on customers and storytelling, prior fundraising experience
  cofounder_b_wants: own GTM, fundraising, and external story; happy to be CEO
  company_stage: pre-seed, 6 months in, 4 paying customers, prepping to raise
  functional_areas: product, engineering, sales, marketing, hiring, finance, ops, fundraising, legal, customer success
  pain_points:
    - We've both been in customer calls and Maya finds it draining; unclear when she should join
    - Hiring decisions: we both interview but the actual decision keeps drifting
    - We don't have a clear answer for who decides on pricing changes
exampleOutput: |
  COFOUNDER ROLES & RESPONSIBILITIES — Maya & Jordan

  Last updated: [date]. Review every 6 months or after any major company change.

  OPERATING PRINCIPLES
  1. We disagree in private. We present united in public.
  2. The owner of an area decides. The non-owner can object loudly, once. Then we move.
  3. We trade context, not decisions. The owner of a function does not need consensus to act.
  4. We tell each other things early, especially the awkward ones.
  5. The roles in this doc are real. If we're regularly working outside them, we change the doc, not work around it.

  FUNCTION OWNERSHIP

  | Function | Owner | Consulted | Informed |
  |---|---|---|---|
  | Product | Maya | Jordan | team |
  | Engineering | Maya | — | Jordan |
  | Sales | Jordan | Maya (technical) | team |
  | Marketing | Jordan | Maya | team |
  | Customer Success | Jordan | Maya (technical) | team |
  | Fundraising | Jordan | Maya | team |
  | Hiring | Hiring manager (function owner) | Other cofounder | — |
  | Finance | Jordan | Maya (monthly review) | — |
  | Ops | Jordan | Maya | — |
  | Legal | Jordan | Maya (IP/tech matters) | — |

  Note: "Hiring" lists hiring manager as owner — meaning Maya owns engineering hires, Jordan owns GTM hires. Both interview, the manager decides.

  DECISION RIGHTS

  | Decision | Decides | Must consult | Veto |
  |---|---|---|---|
  | Eng hires | Maya | Jordan | Jordan can veto on culture |
  | GTM hires | Jordan | Maya | Maya can veto on culture |
  | Fires | Manager of person | Other cofounder | Other cofounder can veto firing |
  | Equity grants | Both (joint) | — | Both must agree |
  | Pricing changes | Jordan | Maya | None |
  | Product roadmap | Maya | Jordan (GTM impact) | Jordan can veto if it breaks an active customer commitment |
  | Fundraise terms | Jordan | Maya | Maya must agree on dilution and board terms |
  | Vendors >$10k | Function owner | Other cofounder | Other cofounder can veto |

  THE GRAY ZONES

  1. Pricing & packaging.
  Owned by Jordan, but Maya needs to understand pricing because it shapes product positioning. Default: Jordan decides, Maya is consulted before any change >10%. If we disagree, Jordan decides — pricing is GTM.

  2. Customer calls.
  Maya joins customer calls only when (a) Jordan asks for technical depth, (b) the customer is >$50k ACV, or (c) there's an open product question. Default: Maya doesn't join. This solves the "Maya finds calls draining" issue by making Jordan's ask explicit.

  3. Roadmap vs. customer commitments.
  When sales has promised a feature, the roadmap conversation is a real one — not unilateral. Default: if Jordan has put a commitment in writing, Maya respects it; otherwise, Maya prioritizes.

  4. Hiring debates.
  Both interview, hiring manager decides. The non-manager has one veto on culture grounds. After that, the manager is the manager.

  DISAGREEMENT PROTOCOL

  Step 1: 30-minute structured conversation. Each person presents their view uninterrupted (5 min), then we discuss.
  Step 2: If still stuck, sleep on it. Re-discuss next day.
  Step 3: If still stuck, name an advisor as tiebreaker — default tiebreaker is [advisor name to be agreed].
  Step 4: For decisions where one of us owns it, the owner decides after step 2. The other supports the decision externally even if they disagreed internally.

  CEO DESIGNATION

  Jordan carries the external CEO title. Reasoning: Jordan owns external — fundraising, sales, narrative — and the title removes ambiguity for investors and customers. Internally, decisions follow this document; CEO is not a tiebreaker by default.

  Both agreed: yes / yes.

  REVIEW CADENCE

  - Every 6 months, formal re-read together (calendar block 2 hours).
  - After any of: a hire >5 FTEs, a fundraise close, a major pivot, or any cofounder conflict that lasts >7 days.
  - Either of us can call a re-read at any time, no justification needed.
tips:
  - "Joint ownership is the most common failure mode. Pick one owner per function. Joint ownership creates ambiguity, ambiguity creates resentment."
  - "Write this doc together but draft separately first. Each of you write your own version, then merge. The diff is where the real conversations are."
  - "The CEO title is more emotional than people admit. Talk about it directly, name why, and don't pretend it doesn't matter."
  - "Re-read every 6 months. Founders change, companies change, what worked at 2 people doesn't work at 8."
  - "If you're avoiding writing this doc because the conversation feels hard, that's the strongest possible signal you need to write it now."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cofounder-conflict-conversation-prep
  - equity-split-rationale-memo
  - cofounder-weekly-1-1-agenda
tags:
  - cofounder
  - roles-and-responsibilities
  - governance
  - early-stage
  - alignment
---
