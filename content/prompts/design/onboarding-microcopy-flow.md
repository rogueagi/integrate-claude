---
title: "Write microcopy for a multi-step onboarding flow"
slug: onboarding-microcopy-flow
function: design
role: content-design
description: "Generate every line of copy in a multi-step onboarding — step titles, body, button labels, error states, success states — written as a coherent voice across the whole flow."
useCase: "Use this when designing or rewriting an onboarding flow. Most onboarding copy is written one step at a time and reads like five different products. This prompt writes the whole flow as a single piece, with the rhythm and momentum that separates good onboarding from drop-off."
prompt: |
  You are a senior content designer writing microcopy for a complete multi-step onboarding flow. The whole flow should read as one coherent voice; each step should advance the user without making them feel slow.

  Context:
  - Product: {{product}}
  - Brand voice notes: {{voice}}
  - Audience: {{audience}}
  - Flow goal (the activation moment we're driving toward): {{flow_goal}}
  - Steps (with one line on what each step asks for and why): {{steps}}
  - Total step count: {{step_count}}
  - Constraints (eg character limits, accessibility): {{constraints}}

  For each step, produce:

  1. Progress label (eg "Step 2 of 5: Connect your data").
  2. Title (one line, action or benefit framed).
  3. Body (1–2 sentences max — what we're asking, why it matters now).
  4. Primary CTA (verb-led).
  5. Secondary CTA if applicable (eg "Skip for now," "Do this later").
  6. Inline help / placeholder copy if the step has fields.
  7. Error state copy for the most likely error.
  8. Success / confirmation copy that bridges to the next step.

  After the steps, produce:

  - Final success screen copy (title, body, CTA to first real action in the product).
  - "Resume later" copy — the email or in-app message a user gets if they drop off mid-flow.
  - 3-line voice consistency note: how rhythm, sentence length, and warmth move across the flow.

  Rules:
  - No "Welcome to {{product}}!" on step 1 unless we have a stronger opener (we usually do).
  - "Step X of Y" only if Y is short. If Y is 8+, drop the count and use a progress bar with named milestones.
  - Body copy answers "why am I doing this right now?" not "why does this product exist?"
  - Skip CTAs are explicit when allowed; don't bury the option in fine print.
  - Success bridges should reference what just happened and what's next ("Connected — now let's build your first chart").

  Output: structured as above, in step order, then the post-flow content.
variables:
  - "{{product}}"
  - "{{voice}}"
  - "{{audience}}"
  - "{{flow_goal}}"
  - "{{steps}}"
  - "{{step_count}}"
  - "{{constraints}}"
exampleInput: |
  product: Helix Analytics — self-serve BI tool
  voice: Calm, capable, non-finance-jargon, slightly dry
  audience: Marketing analysts at SMBs (10–200 employees), evaluating self-serve BI
  flow_goal: User has built and saved their first chart
  steps: |
    1. Account creation (email + password) — required to save anything
    2. Tell us about you (role, company size) — used to recommend templates
    3. Connect a data source (or skip with sample data) — required to chart real data
    4. Pick a starter template (or start from scratch) — accelerates first chart
    5. Build chart from template — the activation moment
  step_count: 5
  constraints: Titles max 50 chars, body max 140 chars; one secondary CTA per step max
exampleOutput: |
  ## Step 1 of 5: Create your account
  Title: Save your work
  Body: An email and password is all we need. You can connect data and start charting in the next 90 seconds.
  Primary CTA: Continue
  Secondary: (none — required step)
  Inline help: Email field placeholder: "you@company.com"; Password field hint: "8+ characters"
  Error: "That email is already on an account. Sign in instead?" (with sign-in link)
  Success bridge: Goes directly to step 2 (no interstitial — keeps momentum)

  ## Step 2 of 5: Tell us a little
  Title: We'll tailor your starter templates
  Body: This takes 10 seconds and means we won't show you charts you don't care about.
  Primary CTA: Continue
  Secondary: Skip
  Inline help: Role field placeholder: "Marketing analyst"; Company size: "10–50 / 50–200 / 200+"
  Error: "Pick a role to continue, or skip this step." (only if user submits empty)
  Success bridge: "Got it — you'll see templates marketing analysts use most."

  ## Step 3 of 5: Connect your data
  Title: Connect a data source — or use sample data
  Body: Stripe, HubSpot, Postgres, Google Sheets, and 60+ more. Don't have one ready? Use our sample dataset and connect later.
  Primary CTA: Connect a source
  Secondary: Use sample data
  Inline help: (in connector picker) Search field placeholder: "Search 60+ sources"; per-source rows show: "Stripe — payments and subscriptions"
  Error (sample of one): "We can't reach Stripe right now. Check your API key, or try again in a minute."
  Success bridge: "Connected to Stripe. Pulling your last 30 days of data — takes ~20 seconds."

  ## Step 4 of 5: Pick a starter template
  Title: Start with a template
  Body: We picked these for marketing analysts at your company size. Each one builds in two clicks.
  Primary CTA: Use this template (per template card)
  Secondary: Start from scratch
  Inline help: Each template card has a one-line description, eg "Weekly revenue and refunds — 4 charts."
  Error: (no error state likely)
  Success bridge: "Templates loading — your first chart is almost there."

  ## Step 5 of 5: Build your first chart
  Title: Pick what to chart
  Body: Drop a metric on the Y-axis and a date on the X-axis. We'll handle the rest.
  Primary CTA: Save chart
  Secondary: Edit later
  Inline help: Metric dropdown placeholder: "Choose a metric (Revenue, Signups, MRR...)"; Axis hint: "Drag a column to the canvas, or pick from the list."
  Error: "This metric needs a date column. Pick one to continue."
  Success bridge: "Saved. That's your first chart."

  ---

  ## Final success screen
  Title: That's it — you're in
  Body: Your dashboard has one chart. Add a few more, set an alert, or invite a teammate.
  CTA: Add another chart
  Secondary: Invite teammates · Set an alert

  ## Resume later (email if user drops off mid-flow)
  Subject: Your Helix setup is 60% done
  Body:
  Hi [name],
  You got as far as connecting Stripe — nice. Two steps left, takes about a minute.
  [Resume setup]
  If you got stuck, hit reply. We read every one.
  — The Helix team

  ## Voice consistency note
  Rhythm gets shorter as the user gets closer to activation: step 1 has full sentences, step 5 has a 6-word title. Warmth concentrates at the success screen and the resume email — every other step is calm and informational. Sentence length never exceeds 18 words anywhere in the flow; humor (one beat) lives only on the final success screen ("That's your first chart") to avoid distracting from progress.
tips:
  - "Write the whole flow before you write any individual screen. The rhythm across steps is the part that breaks when you write step-by-step."
  - "Skip CTAs increase completion when used right. Bury them and users get stuck; surface them and they make it through and come back later."
  - "Success bridges between steps are the most underused copy in onboarding. They give the user momentum and reduce drop-off at every transition."
  - "Resume emails recover 5–15% of drop-offs in most products. Always write them as part of the flow, not as an afterthought."
  - "If a step's body answers 'why does this product exist?' instead of 'why am I doing this right now?', rewrite it. Onboarding isn't a sales page."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - empty-state-microcopy
  - error-message-rewrite
  - cta-variant-generator
tags:
  - content-design
  - microcopy
  - onboarding
  - activation
  - ux-writing
---
