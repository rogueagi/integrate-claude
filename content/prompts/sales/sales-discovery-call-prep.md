---
title: "Prepare a discovery call research and hypothesis doc"
slug: sales-discovery-call-prep
function: sales
role: ae
description: "Generate a structured pre-call research document with account context, hypothesis, and targeted discovery questions for a first sales call."
useCase: "Use this prompt the evening before or morning of a discovery call. It synthesizes what you know about the account into a crisp prep doc — so you walk in with a point of view, not just a list of generic questions."
prompt: |
  You are a senior account executive who never goes into a discovery call without a clear hypothesis. Build a pre-call prep document for an upcoming discovery call.

  Account details:
  - Company name: {{company_name}}
  - Industry: {{industry}}
  - Company size: {{company_size}} employees
  - Prospect name and title: {{prospect_name}}, {{prospect_title}}
  - What I know about them so far: {{known_context}} (e.g., came from an inbound trial, replied to a cold email, mutual connection referral, attended a webinar)
  - Our product/service: {{your_product}}
  - Top 2–3 problems we solve: {{problems_we_solve}}
  - Any signals or triggers observed: {{signals}} (e.g., job postings, funding, tech stack info, news)

  Build a prep document with these sections:

  ## Account Snapshot (3–5 bullets)
  Quick facts about the company and the buying context — what do we know, what can we infer?

  ## Discovery Hypothesis
  One clear sentence: "I believe [company] is struggling with [problem] because [evidence/signal], which means they likely need [solution type]." This is your going-in theory — you're testing it, not proving it.

  ## Key Questions to Ask (8–10 questions)
  Organized into three categories:
  - Situation questions (2–3): understand their current state without asking things you should already know
  - Problem questions (3–4): uncover the pain, its impact, and whether they've tried to fix it
  - Implication questions (2–3): help them articulate the cost of NOT solving this

  ## Landmines to Avoid
  2–3 things NOT to ask or say on this call based on the context (e.g., don't ask about their tech stack if you already know it from their job postings).

  ## Success Criteria for This Call
  What does a good outcome look like? Define the 2–3 things you need to learn or accomplish to move this deal forward.

  ## Suggested Next Step to Propose
  One specific next step to close the call with: what you'll propose and why it's the right next step for this stage.
variables:
  - "{{company_name}}"
  - "{{industry}}"
  - "{{company_size}}"
  - "{{prospect_name}}"
  - "{{prospect_title}}"
  - "{{known_context}}"
  - "{{your_product}}"
  - "{{problems_we_solve}}"
  - "{{signals}}"
exampleInput: |
  company_name: Orbis Health Tech
  industry: healthcare technology
  company_size: 300
  prospect_name: Nadia Okafor
  prospect_title: Chief Operating Officer
  known_context: replied to a cold email about operational efficiency; mentioned they're rolling out a new EHR system next quarter
  your_product: workflow automation platform for healthcare operations
  problems_we_solve: manual patient intake processes, staff time spent on repetitive admin tasks, compliance reporting overhead
  signals: 4 open job postings for "operations analyst" roles; recent press release about a new hospital partnership
exampleOutput: |
  ## Account Snapshot
  - 300-person health tech company in active EHR implementation — highest-risk operational moment for any healthcare org
  - COO is the buyer, which means she owns outcomes, not technology — frame everything around operational impact
  - 4 open ops analyst postings suggest they're scaling manually; likely feeling the cost of that now
  - New hospital partnership = more volume coming; current processes may not handle it
  - Inbound signal: she replied to an email about operational efficiency — problem is real and top of mind

  ## Discovery Hypothesis
  I believe Orbis is struggling with manual, fragmented operational workflows that weren't built for their current scale because they're hiring analysts to fill process gaps rather than fixing the process — which means they need automation that can handle healthcare compliance requirements without adding IT overhead.

  ## Key Questions to Ask

  Situation:
  1. "You mentioned an EHR rollout next quarter — how are you thinking about the operational change management side of that?"
  2. "Walk me through how a typical patient intake or care coordination request flows through your ops team today."

  Problem:
  3. "Where does that process break down most often, and what's the downstream effect?"
  4. "The four ops analyst roles you're hiring — is that to handle current volume, or to build capacity for the partnership growth?"
  5. "How much of your team's time right now is genuinely high-value work versus keeping up with admin?"
  6. "Have you tried to address this before? What worked, what didn't?"

  Implication:
  7. "If the EHR launches and the intake process is still mostly manual — what happens to your team?"
  8. "What's the cost of an ops error in a compliance-sensitive environment like yours?"
  9. "If nothing changes in the next six months, how does that affect your ability to absorb the new partnership volume?"

  ## Landmines to Avoid
  - Don't ask about their EHR vendor choice — she mentioned it, not the vendor. Don't make her feel evaluated.
  - Don't lead with features or integrations — she's a COO, not a technical buyer.
  - Don't ask "what's your budget?" on a first discovery call.

  ## Success Criteria for This Call
  1. Confirm or invalidate the hypothesis: is manual workflow overhead the actual blocker?
  2. Understand the EHR timeline and what operational readiness means to her
  3. Get Nadia to articulate the cost of the problem in her own words — ideally with a number attached

  ## Suggested Next Step
  Propose a 30-minute working session with Nadia + one of her ops leads to map the current intake workflow — position it as a free process audit, not a demo. This moves the deal from "interesting conversation" to "we're evaluating."
tips:
  - "The hypothesis is the most important part of this doc. If you can't write a clear hypothesis, you haven't done enough research yet."
  - "Run this prompt the night before, then skim it on your way to the call. Don't bring the full doc into the call — internalize the key questions and let the conversation flow."
  - "After the call, paste your notes back into Claude and ask it to update the hypothesis and suggest next steps based on what you learned."
  - "If you only have 5 minutes to prep, ask Claude to just generate the hypothesis and the top 5 questions — skip the full doc."
  - "Use the 'landmines' section seriously. The worst discovery calls happen when an AE asks something they should already know."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - discovery-call-agenda
  - proposal-executive-summary
  - crm-note-summary
tags:
  - discovery
  - sales-prep
  - account-research
  - ae
---
