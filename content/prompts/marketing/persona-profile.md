---
title: "Build a detailed buyer persona profile from interview notes"
slug: persona-profile
function: marketing
role: product-marketing
description: "Transform raw customer interview notes into a structured, actionable buyer persona that goes beyond demographics to capture mindset, triggers, and language."
useCase: "Use this prompt after conducting customer interviews to synthesize insights into a usable persona. Unlike template-driven personas built from assumptions, this prompt extracts patterns from what customers actually said — producing a profile that improves messaging, targeting, and product decisions."
prompt: |
  You are a product marketer and qualitative researcher. Build a buyer persona from the following customer interview notes.

  Input:
  - Number of interviews conducted: {{interview_count}}
  - Role/title of interviewees: {{interviewee_roles}}
  - Company types interviewed: {{company_types}}
  - Raw interview notes or key quotes: {{interview_notes}}
  - Product/service being evaluated: {{your_product}}
  - Any patterns you noticed while conducting interviews: {{your_observations}}

  Build a buyer persona with these sections:

  ## Persona Name and Title
  A realistic name and the most common title in the interview set (not fictional, not demographic caricature).

  ## Role Summary
  - Typical job responsibilities (3–5 bullets)
  - Who they report to
  - Who reports to them (if anyone)
  - How their success is measured

  ## The Day in Their Life
  A brief, realistic narrative (100–150 words) of what their work day looks like — the rhythms, the friction points, the meetings, the decisions they make. Written in present tense, second person.

  ## Goals and Motivations
  - Professional goals (what they're trying to achieve in the next 12 months)
  - Personal motivations (what makes work feel meaningful or successful to them)

  ## Pain Points and Frustrations
  - The top 3 specific frustrations (in their own words where possible, drawn from interview quotes)
  - Root causes behind each frustration (what makes this hard to fix?)

  ## Buying Triggers
  What specific events or moments cause them to start looking for a solution? List 3–5 triggers with brief explanations.

  ## Evaluation Criteria
  How do they evaluate solutions? What questions do they ask? What are the dealbreakers?

  ## Their Own Words (Key Quotes)
  3–5 direct quotes from the interviews that most powerfully represent this persona's mindset. These should be the quotes you'd want to put on a website or in a sales deck.

  ## What NOT to Say to This Persona
  3 messages, framings, or words that would land wrong for this persona — and why.
variables:
  - "{{interview_count}}"
  - "{{interviewee_roles}}"
  - "{{company_types}}"
  - "{{interview_notes}}"
  - "{{your_product}}"
  - "{{your_observations}}"
exampleInput: |
  interview_count: 8
  interviewee_roles: VP of Operations, Director of Operations, Operations Manager
  company_types: mid-market logistics (2), retail (3), professional services (3); 100–400 employees
  interview_notes: |
    Key themes from 8 interviews:
    - All 8 mentioned "waiting for IT" as a major frustration when they need data
    - 6 of 8 run a weekly ops review; most described the prep as "painful" or "time-consuming"
    - 5 of 8 have tried a BI tool before (Tableau, Power BI); 4 of those said implementation was never completed or was abandoned
    - Top frustrations: (1) data is siloed across multiple tools, (2) reports are always a few days old by the time they're ready, (3) when something goes wrong they find out from customers, not from their own data
    - Triggers for evaluation: company growth creating more complexity, a specific operational failure that embarrassed them, a new executive asking for better visibility
    - Common quotes: "I feel like I'm always flying blind," "By the time the report is ready, the moment has passed," "I know the data is there, I just can't get to it," "I don't want to be a data scientist, I just want to see what's happening"
    - Evaluation criteria: ease of setup, time to first insight, whether IT needs to be involved, cost, how it integrates with existing tools
    - Dealbreakers: requires SQL, requires a 6-month implementation, doesn't connect to their specific tools
  your_product: Anchor Analytics
  your_observations: All interviewees were intelligent, process-oriented people who felt let down by technology, not by their own capability. Strong pride in their operational expertise; frustration that "the tools always seem to be built for someone else."
exampleOutput: |
  ## Persona: The Ops Leader Flying Blind

  **Name:** Dana (Director of Operations)

  ## Role Summary
  - Owns operational performance metrics across the business: fulfillment rates, team throughput, customer SLA adherence, cost-per-unit
  - Reports to COO or CEO in most cases
  - Manages 1–3 team leads and an ops coordinator
  - Measured on: on-time delivery, operational cost efficiency, team utilization, and quality metrics (error rates, rework)

  ## The Day in Their Life
  You start Monday reviewing a spreadsheet your coordinator built Friday afternoon — already 72 hours out of date. Your 9am ops standup runs on gut feel and status updates from team leads, not live data. You spend 2 hours each week pulling reports from 3 different tools, formatting them in Excel, and sending them to leadership before Thursday's review. When something goes wrong — a fulfillment bottleneck, a customer escalation, a spike in errors — you usually find out from a customer complaint or a panicked Slack message, not from your own data. You know the numbers that would tell you something's broken. You just can't get to them fast enough.

  ## Goals and Motivations
  Professional: Build a reporting system that runs without them personally assembling it every week; reduce time to problem detection from days to hours; have data-backed answers ready when the CEO asks questions.
  Personal: Be seen as a strategic partner to leadership, not just an operational workhorse. Feel in control of what's happening, not reactive to it.

  ## Pain Points and Frustrations
  1. **"By the time the report is ready, the moment has passed."** Their data is always stale — by 2–3 days minimum. Root cause: reports are manually assembled and require pulling from multiple disconnected tools.
  2. **"I know the data is there — I just can't get to it."** They're aware their tools contain the information they need. Root cause: no integration layer connects those tools into a coherent view they can access without technical help.
  3. **"When something goes wrong, I find out from customers."** No alerting or anomaly detection exists in their current stack. Root cause: no one is watching the metrics in real time; there's no system to flag when something deviates.

  ## Buying Triggers
  1. **An operational failure that embarrassed them publicly** — a major SLA miss, a customer escalation that reached the CEO
  2. **Company growth making current reporting untenable** — they've grown to a point where the spreadsheet process breaks down
  3. **A new executive asking for better visibility** — a new COO or CEO who expects real-time data they can't currently provide
  4. **A previous BI tool implementation that failed** — they've already tried Tableau or Power BI and know something easier must exist

  ## Evaluation Criteria
  Key questions: Does this require IT involvement to set up? How long until we see real data? Does it connect to [specific tools — usually Salesforce, their ERP, and a few others]? How much does it cost, and is there a per-seat model?
  Dealbreakers: Requires SQL. Requires a 6-month implementation. Doesn't connect to their core tools.

  ## Their Own Words
  - "I feel like I'm always flying blind."
  - "I don't want to be a data scientist. I just want to see what's happening."
  - "I know the data is there — I just can't get to it."
  - "By the time the report is ready, the moment has passed."
  - "The tools always seem to be built for someone else."

  ## What NOT to Say
  1. **"Democratizing data"** — they find this phrase condescending and overused. They don't feel excluded from data; they feel let down by tools.
  2. **"Powerful analytics capabilities"** — they're skeptical of power they can't use. "Capability" implies they need skill they don't have.
  3. **"Enterprise-grade"** — they're not enterprise; they're mid-market. This phrase signals the product wasn't built for them.
tips:
  - "The 'Their Own Words' section is the most valuable output. These quotes belong in your website copy, your sales decks, and your ad creative — they outperform any copy your team could write."
  - "If your interview notes are messy or partial, paste them as-is and ask Claude to identify the most-repeated themes first, then build the persona from those patterns."
  - "Run this prompt separately for each distinct persona segment — don't try to average 3 different personas into one. Average personas produce average messaging."
  - "Validate the persona with 1–2 people from the interview set before using it internally. Ask them: 'Does this sound like you?' If they say yes, you've done the job."
  - "The 'What NOT to Say' section is gold for reviewing existing website copy and sales materials. Run your current messaging through this filter."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - competitive-positioning
  - product-launch-brief
  - customer-interview-guide
tags:
  - persona
  - product-marketing
  - research
  - messaging
---
