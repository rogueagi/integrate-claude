---
title: "Build a lifecycle email cadence across onboarding, activation, retention, expansion, and win-back"
slug: lifecycle-email-cadence
function: marketing
role: lifecycle
description: "Generate a full lifecycle email program spanning onboarding, activation, retention, expansion, and win-back, with triggers, timing, copy, and success metrics for each stage."
useCase: "Use this prompt when standing up or rebuilding lifecycle email for a SaaS or subscription product. Most lifecycle programs are stitched together email-by-email. This prompt designs the program as a whole: which stages connect to which, what behavior moves a user from one stage to the next, and what metric proves each email earns its keep."
prompt: |
  You are a senior lifecycle marketer at a B2B or B2C SaaS company. Build a complete lifecycle email program for the product below.

  Product and audience:
  - Product: {{product}}
  - Pricing model: {{pricing}}
  - Primary persona: {{persona}}
  - Core "aha" action (what activated users always do): {{aha_action}}
  - Typical reasons users churn: {{churn_reasons}}
  - Expansion levers available (seats, tiers, add-ons): {{expansion_levers}}

  Output the full program in 5 sections:

  1. Onboarding (Days 0-14)
  2. Activation (until the user hits {{aha_action}})
  3. Retention (post-activation through month 6)
  4. Expansion (in-product traction triggers expansion-eligible)
  5. Win-back (cancelled or dormant 30+ days)

  For each section, give me:
  - Goal of the section in one sentence (what behavior does success look like)
  - 3-5 emails per section
  - For each email: trigger (time-based or behavior-based), subject line, 60-100 word body, primary CTA, success metric (which one number tells you it worked)
  - Stage-exit criteria (what behavior promotes the user to the next section, or to a different track entirely)

  Then provide a Program Map: a one-screen ASCII or text diagram showing how users flow between sections, including the loops (e.g., expansion -> retention, win-back -> onboarding-lite).

  Constraints:
  - Behavior-based triggers always beat time-based triggers. Default to behavior; use time only when no behavior signal exists.
  - Do not write generic "Hi, how's it going" check-in emails. Every email earns its send by either advancing the user toward the aha action or surfacing a real signal.
  - No emojis unless brand voice explicitly calls for them. Assume not.
exampleInput: |
  product: Foundry, a no-code internal tools builder for ops teams
  pricing: $20/seat/mo, free trial 14 days, expansion tier at $50/seat/mo with admin and SSO
  persona: ops manager at a 50-500 person company, technical-adjacent but not an engineer
  aha_action: published their first internal tool and shared it with at least 2 teammates
  churn_reasons: never got past the blank canvas, only one user from the team adopted, integrations they needed weren't available
  expansion_levers: more seats, admin tier, premium integrations marketplace
exampleOutput: |
  Onboarding (Days 0-14)
  Goal: get the user from sign-up to first tool published.

  Email 1 (Trigger: sign-up complete)
  Subject: Three templates Foundry users start with
  Body: 80 words pointing to three pre-built templates that map to ops-team workflows...
  CTA: Open a template
  Success metric: first template opened within 48 hours.

  (Emails 2-4 follow with behavior-based triggers like "opened template but did not publish after 3 days")
  Stage-exit: user publishes a tool AND shares with 1+ teammate -> graduates to Activation completion track.

  Activation, Retention, Expansion, Win-back follow with the same shape.

  Program Map:
  Sign-up -> Onboarding -> Activation -> Retention -> Expansion -> (loops to Retention)
                              \-> stalls -> Win-back -> if returns, Onboarding-lite (skip steps 1-2)
variables:
  - "{{product}}"
  - "{{pricing}}"
  - "{{persona}}"
  - "{{aha_action}}"
  - "{{churn_reasons}}"
  - "{{expansion_levers}}"
tips:
  - "Define your aha action precisely before running this prompt. A vague aha produces a vague program."
  - "Always have your data team confirm the behavioral triggers are instrumentable before handing off to lifecycle build-out."
  - "Win-back is where most programs over-invest. If a user churned for a structural reason (integration missing), no email saves them. Be honest in the inputs."
  - "Run the program through legal review if you operate in regions with strict opt-in rules (EU, Canada, parts of LATAM)."
  - "Re-run this prompt after every pricing or packaging change. Expansion and win-back are the most price-sensitive sections."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - icp-tailored-landing-page
  - ad-creative-variant-set
  - content-pillar-outline
tags:
  - marketing
  - lifecycle
  - email
  - retention
  - expansion
---
