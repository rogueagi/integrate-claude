---
title: "Generate a brand voice and style guide from writing samples"
slug: brand-voice-style-guide
function: marketing
role: brand
description: "Reverse-engineer a usable brand voice and style guide from a set of existing writing samples, with do/don't examples and a voice fingerprint Claude can apply later."
useCase: "Use this prompt when your brand has voice in practice but not on paper. Feed Claude 3-10 of your best pieces and get back a guide a new writer or agency could follow on day one. The output is also designed to be re-fed to Claude as context for future generation tasks, so your AI-assisted writing stays on-brand."
prompt: |
  You are a senior brand strategist with a background in editorial. I will give you 3-10 writing samples that represent the brand at its best. Reverse-engineer a usable brand voice and style guide from them.

  Writing samples:
  {{samples}}

  Brand and audience context:
  - Brand: {{brand}}
  - Primary audience: {{audience}}
  - What the brand sells / does: {{offering}}
  - How the brand should differ from category norms: {{differentiation}}

  Output the guide in this structure:

  1. Voice fingerprint
     A 6-8 attribute description (e.g., direct, dry, anti-jargon, occasional first-person plural, no exclamation points). Each attribute paired with a one-line "what this means in practice" note.

  2. Tonal range
     Where the brand sits on each axis: formal <-> casual, serious <-> playful, expert <-> peer, restrained <-> expressive. Mark the range, not a point, because brand voice flexes by surface.

  3. Vocabulary
     - Words and phrases the brand uses (with examples from the samples)
     - Words and phrases the brand avoids (and why)
     - Category cliches to never use

  4. Sentence and paragraph patterns
     - Typical sentence length
     - Whether the brand uses fragments, parentheticals, em-dashes, etc.
     - Paragraph rhythm

  5. Do / don't examples
     5-7 pairs. Each one a real sentence (drawn or adapted from the samples) and its off-brand counterpart. Show, do not just tell.

  6. Voice in different surfaces
     - Landing page hero
     - Long-form blog
     - Sales email
     - Customer support reply
     - Social post
     For each, a 1-2 sentence example written in the voice.

  7. Voice prompt block
     A self-contained 150-250 word prompt that another writer or an AI assistant can paste in to write in this voice. This block should be standalone and not reference the rest of the guide.

  Constraints:
  - Do not invent voice attributes that the samples do not support. If samples are mixed or inconsistent, say so and ask for tighter samples.
  - The do/don't examples must be derived from real patterns in the samples, not imagined.
exampleInput: |
  samples: [3 blog posts, 5 customer emails, and 1 landing page from Linear, the project management tool]
  brand: Linear
  audience: senior engineering leaders and IC engineers at high-velocity startups
  offering: project management built for engineering teams
  differentiation: against Jira's bloat and Asana's marketing aesthetic. Linear earns trust by being quiet, fast, and respectful of the user's intelligence.
exampleOutput: |
  Voice fingerprint:
  - Restrained. We never sell harder than the product does.
  - Plainspoken. No metaphors when a concrete noun will do.
  - Confident without being loud. Periods, not exclamation points.
  - First-person plural when speaking as the company. First-person singular only in named-author posts.
  - Anti-jargon but technical when accuracy demands it.
  - Comfortable with white space and short sentences.
  - Never speaks down to engineers.

  Tonal range: formal-casual: lower casual; serious-playful: mostly serious with rare dry humor; expert-peer: peer; restrained-expressive: restrained.

  Vocabulary uses: "craft", "ship", "fast", "the basics, done right". Avoids: "revolutionize", "powerful", "seamless", "best-in-class", "leverage" as a verb.

  Do/don't examples (5 pairs drawn from samples).

  Voice prompt block: 200 words a writer can paste to generate Linear-voice copy without reading the rest of the guide.
variables:
  - "{{samples}}"
  - "{{brand}}"
  - "{{audience}}"
  - "{{offering}}"
  - "{{differentiation}}"
tips:
  - "Feed in 5-10 samples, not 1-2. The guide is only as defensible as the pattern recognition the samples support."
  - "If samples are inconsistent, Claude will tell you. Take that signal seriously instead of forcing the guide."
  - "The voice prompt block at the end is the most reusable output. Save it as a snippet and prepend to every AI-assisted writing task."
  - "Have two senior writers stress-test the do/don't examples. Off-brand examples that feel correct are the bug to catch."
  - "Re-run this every 12-18 months. Brand voice drifts, especially after leadership or agency changes."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - icp-tailored-landing-page
  - ad-creative-variant-set
  - content-pillar-outline
tags:
  - marketing
  - brand
  - voice
  - style-guide
  - editorial
---
