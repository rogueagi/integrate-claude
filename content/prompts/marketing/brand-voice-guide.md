---
title: "Extract and codify brand voice from example content"
slug: brand-voice-guide
function: marketing
role: brand
description: "Analyze existing brand content to extract, name, and codify a brand voice guide that any writer can use to produce on-brand content."
useCase: "Use this prompt when you need to document your brand voice — for onboarding new writers, briefing agencies, or creating a style standard. The prompt analyzes real content samples to extract the voice patterns already present, rather than inventing a voice from scratch."
prompt: |
  You are a brand strategist and editorial director. Analyze the following content samples and extract a practical brand voice guide.

  Brand context:
  - Company name: {{company_name}}
  - Product/service: {{product}}
  - Target audience: {{target_audience}}
  - Brand positioning (how you want to be seen): {{positioning}}
  - Content samples (paste 3–5 examples of your best existing content): {{content_samples}}

  Analyze the samples and produce a brand voice guide with these sections:

  ## 1. Voice Summary (2–3 sentences)
  Describe the brand voice in plain English — the way you'd describe a person's personality. Not buzzwords.

  ## 2. Voice Dimensions (4 attributes)
  For each attribute:
  - Name it (one or two words)
  - Describe what it means in practice (2–3 sentences)
  - Give an example: what this sounds like ("we say this") vs. what it doesn't ("we don't say this")
  - Rate it on a spectrum (e.g., Formal ←——→ Casual: we are at 3/5)

  ## 3. Vocabulary: Words We Use / Words We Avoid
  Two lists:
  - Words and phrases that appear in the samples and feel on-brand
  - Words and phrases that would feel off-brand (and why)

  ## 4. Grammar and Formatting Patterns
  Specific rules observed in the samples: sentence length, use of contractions, Oxford comma, active vs. passive voice, em dashes, bullet formatting, etc.

  ## 5. The "Gut Check" Test
  Three questions a writer can ask themselves to check if a piece of content is on-brand. Make these specific, not generic ("Does it sound like us?" is too vague).

  ## 6. The Voice in Action: Before/After Examples
  Take 2 generic sentences and rewrite them in the brand voice. Show the contrast clearly.
variables:
  - "{{company_name}}"
  - "{{product}}"
  - "{{target_audience}}"
  - "{{positioning}}"
  - "{{content_samples}}"
exampleInput: |
  company_name: Anchor Analytics
  product: business intelligence platform for operations teams
  target_audience: operations directors and VPs at mid-market companies
  positioning: the BI tool for people who don't have data teams — powerful but doesn't require a data scientist
  content_samples: |
    Sample 1 (homepage hero): "Your data shouldn't need a translator. Anchor connects to your existing tools and surfaces the insights your ops team actually needs — without a SQL query in sight."
    Sample 2 (blog intro): "Most dashboards show you what happened. Anchor shows you what to do about it. There's a difference, and it matters more than most vendors will admit."
    Sample 3 (product email): "We noticed you haven't connected your CRM yet. That's where most of the good stuff lives — customer acquisition costs, pipeline velocity, retention signals. Five minutes to connect, permanent improvement to your weekly review."
    Sample 4 (social post): "The fastest path to bad decisions is a beautiful dashboard with the wrong metrics. Anchor helps you find the right ones. No data team required."
exampleOutput: |
  ## 1. Voice Summary
  Anchor speaks like a trusted operations expert who's done the hard work so you don't have to — confident, direct, and a little impatient with unnecessary complexity. The brand respects its audience's intelligence without overwhelming them with technical detail. It says hard things simply.

  ## 2. Voice Dimensions

  **Confident, not arrogant**
  Anchor makes direct claims without hedging. It doesn't say "may help improve" — it says "improves." But it earns that confidence by making the claim specific and relevant. It never punches at competitors by name.
  We say: "Most dashboards show you what happened. Anchor shows you what to do about it."
  We don't say: "Anchor is the industry-leading solution for modern data teams."
  Spectrum: Humble ←—●——→ Arrogant (2.5/5)

  **Plain over clever**
  Anchor avoids jargon, buzzwords, and metaphors that obscure meaning. When it makes a point, it makes it directly. Wit is welcome when it serves the idea, not when it replaces it.
  We say: "No data team required."
  We don't say: "Democratizing data-driven decision-making for the modern enterprise."
  Spectrum: Jargon-heavy ←——●——→ Plain language (4/5)

  [Remaining dimensions and sections follow same format]

  ## 3. Vocabulary
  We use: "actually," "matters," "without [painful thing]," "five minutes," "your team," "the right metrics," "surfaces," "connects"
  We avoid: "synergy," "robust," "leverage," "best-in-class," "holistic," "empower," "solutions," "seamlessly"

  ## 5. The Gut Check Test
  1. "Would an ops director read this and think 'yes, they get it' — or would they roll their eyes?"
  2. "Is there a word or phrase in here that we'd never say out loud in a meeting? If yes, cut it."
  3. "Does this make a claim that someone could push back on? If it's impossible to disagree with, it's probably not saying anything."
tips:
  - "Run this prompt with your 5 best-performing pieces of content, not your most polished brand materials. Best performers reflect what your audience actually responds to."
  - "After generating the guide, test it: give a writer the voice guide and a brief, then have a different person rate the output against the guide. The gap reveals where the guide needs more specificity."
  - "The 'we say / we don't say' pairs in section 2 are the most useful for day-to-day writers — make sure these are concrete examples, not abstract descriptions."
  - "Update this guide annually or after a major rebrand. Voice evolves; a guide that's 3 years old can become a constraint rather than a tool."
  - "Ask Claude to apply the voice guide to a draft you've already written and suggest specific line edits. This is where the guide proves its value."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - tagline-variations
  - press-release
  - linkedin-thought-leadership
tags:
  - brand
  - voice
  - style-guide
  - copywriting
---
