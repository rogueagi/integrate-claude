---
title: "Generate macro responses for common support questions"
slug: macro-response-set
function: customer-service
role: support
description: "Generate a set of 5 ready-to-use macro responses for your most common support questions, balancing consistency with a human tone."
useCase: "Use this prompt to build or refresh your support team's macro library. Well-crafted macros reduce handle time and ensure consistency — but poorly written ones feel robotic and damage the customer relationship. This prompt finds the balance."
prompt: |
  You are a customer support manager building a macro response library. Generate 5 macro responses for common support questions.

  Context:
  - Product/service: {{product_name}}
  - Company tone: {{company_tone}} (e.g., warm and friendly, professional, casual)
  - Common questions to address:
    1. {{question_1}}
    2. {{question_2}}
    3. {{question_3}}
    4. {{question_4}}
    5. {{question_5}}
  - For each question, the correct answer or resolution path: {{answers}}

  For each macro, write:

  **Macro title:** (internal name for the macro library — descriptive)

  **When to use:** (1–2 sentence description of the exact scenario this macro applies to)

  **Macro text:**
  - Opens with a dynamic greeting: [Customer Name] (leave as a variable field)
  - Addresses the question directly — no filler preamble
  - Includes any links, steps, or specific information needed to fully answer the question
  - Leaves room for a support rep to add 1–2 personalized sentences before sending (mark with [PERSONALIZE: add context about their specific situation here])
  - Closes with a specific invitation for follow-up — not "let me know if you have any questions"
  - Is under 150 words per macro

  **Tone note:** (one line on how to adapt this macro for frustrated customers vs. routine inquiries)

  Macros should feel like they were written by a human who genuinely cares, not by a committee trying to avoid liability.
variables:
  - "{{product_name}}"
  - "{{company_tone}}"
  - "{{question_1}}"
  - "{{question_2}}"
  - "{{question_3}}"
  - "{{question_4}}"
  - "{{question_5}}"
  - "{{answers}}"
exampleInput: |
  product_name: Anchor Analytics
  company_tone: warm, direct, knowledgeable
  question_1: How do I connect a new data source?
  question_2: Why is my data not updating in real time?
  question_3: Can I export my dashboard data to Excel?
  question_4: How do I add a new team member to my account?
  question_5: What's the difference between Professional and Enterprise plans?
  answers: |
    1. Settings > Integrations > click Connect next to the desired tool > follow the OAuth flow
    2. Most sources update every 15 minutes; some (like spreadsheets) require manual refresh; real-time is only available on Enterprise with direct database connections
    3. Yes — click Export button on any widget or the full dashboard; exports as .csv or .xlsx
    4. Settings > Team > Invite Member > enter email > assign role (Admin, Editor, Viewer)
    5. Professional: up to 10 users, 50 integrations, standard support. Enterprise: unlimited users, all integrations, SSO, dedicated CSM, SLA-backed support
exampleOutput: |
  **Macro 1: Connecting a New Data Source**
  When to use: Customer asks how to connect a new tool, integration, or data source.

  Hi [Customer Name],

  [PERSONALIZE: add one sentence acknowledging which tool they're connecting if known]

  Here's how to connect a new data source:
  1. Go to **Settings** > **Integrations**
  2. Click **Connect** next to the tool you'd like to add
  3. Follow the authorization steps (usually just a login prompt from the tool)

  It typically takes a few minutes for the first data pull to complete after connecting. If you run into any errors during the authorization step, let me know which tool and what the error message says — I can help troubleshoot from there.

  — [Rep Name]

  Tone note: This macro works for routine inquiries as-is. For frustrated customers, add one sentence of empathy after the greeting before jumping to steps.

  ---

  **Macro 2: Data Not Updating in Real Time**
  When to use: Customer says data looks stale, isn't refreshing, or is asking about update frequency.

  Hi [Customer Name],

  [PERSONALIZE: mention which integration or metric they're looking at if you know]

  A quick note on how data refresh works in Anchor: most integrations update every 15 minutes automatically. A few sources — like uploaded spreadsheets — need a manual refresh (click the **Refresh** button on the source card in Settings > Integrations).

  If you're on our Enterprise plan and have a direct database connection, real-time sync is available and may need to be enabled — happy to check that for you.

  Is there a specific integration or metric that seems behind? That'll help me pinpoint if something needs adjusting on your account.

  — [Rep Name]

  Tone note: Keep factual and helpful. If the customer expected real-time data on a plan that doesn't include it, lead with empathy and explain the plan difference clearly.
tips:
  - "The [PERSONALIZE] marker is the most important part of a macro — it's what prevents a macro from feeling like a macro. Make it easy for reps to customize with one specific observation."
  - "Audit your macros quarterly: if the UI or process has changed, an outdated macro sends customers to steps that no longer exist — worse than no macro at all."
  - "Build macros for the top 80% of your ticket volume, not 100%. Edge cases deserve custom responses; over-macroing creates robotic support interactions."
  - "Test each macro by having a new support hire send it to a simulated scenario. If they can send it without reading it, it's too templated — add friction that forces personalization."
  - "Include a 'Tone note' for each macro in your internal library. Reps who are new to support often use the same tone for frustrated customers as for routine ones."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - ticket-response-draft
  - knowledge-base-article
  - chat-response-refinement
tags:
  - macros
  - support-templates
  - efficiency
  - customer-service
---
