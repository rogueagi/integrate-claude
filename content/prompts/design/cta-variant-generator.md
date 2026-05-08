---
title: "Generate CTA variants with rationale for A/B testing"
slug: cta-variant-generator
function: design
role: content-design
description: "Generate a set of CTA variants for a specific moment in a product or marketing flow, each with a different psychological lever and a written rationale you can use to defend test picks."
useCase: "Use this when planning a CTA test — landing page, signup button, in-product prompt, email link. Most CTA tests fail because all four variants are paraphrases of the same idea; this prompt produces variants that test meaningfully different motivations."
prompt: |
  You are a content designer writing CTA variants for an A/B test. The variants must test different motivations, not different phrasings of the same motivation.

  Context:
  - Product: {{product}}
  - Surface and moment (where the CTA appears, what just happened, what comes next): {{surface}}
  - Audience: {{audience}}
  - Action behind the click (what literally happens): {{action}}
  - Brand voice constraints: {{voice}}
  - Length budget (button or link, char count): {{length_budget}}
  - Current control variant (if any): {{control}}

  Produce 5 variants, each pulling on a different lever:

  1. Outcome-led — names the user's outcome, not the action.
  2. Action-led — describes the action plainly.
  3. Loss-aversion-led — frames what the user avoids losing.
  4. Curiosity-led — promises a specific reveal on the next screen.
  5. Identity-led — speaks to who the user is or wants to be.

  For each variant, produce:
  - The CTA copy (within length budget).
  - The lever (label from above).
  - When this variant tends to win (in 1 sentence — based on the surface and audience).
  - A risk (1 sentence — eg "may overpromise," "may not match brand voice in a serious context").

  After the variants, write:
  - Recommendation: which variant to test as the challenger against the control, and why.
  - One additional test idea: a non-copy lever (button color, placement, surrounding context, micro-interaction) that's likely as impactful as the copy itself.

  Rules:
  - Variants must be conceptually different. If two pull on the same lever, replace one.
  - Stay within length budget. Don't cheat with em-dashes that don't fit.
  - "Get started" and "Learn more" are banned as variants — they're defaults, not choices.
  - Match brand voice. A curiosity-led CTA on a financial product reads differently than on a consumer app — flag any variant that strains voice.

  Output: variants in order, then recommendation and additional test idea.
variables:
  - "{{product}}"
  - "{{surface}}"
  - "{{audience}}"
  - "{{action}}"
  - "{{voice}}"
  - "{{length_budget}}"
  - "{{control}}"
exampleInput: |
  product: Helix Analytics
  surface: Marketing homepage hero CTA — first thing visitors see; clicking goes to free trial signup
  audience: Marketing analysts at SMBs evaluating self-serve BI; many have used Looker, Tableau, or spreadsheets and are frustrated with both
  action: Opens the free trial signup form (no credit card required)
  voice: Calm, capable, non-finance-jargon, slightly dry
  length_budget: 24 characters max for button label
  control: "Start free trial"
exampleOutput: |
  ## 1. Outcome-led
  Copy: "See your first chart"
  Lever: outcome
  When it tends to win: when visitors are skeptical that they'll actually get to a working state — naming the outcome makes the trial feel less like a commitment.
  Risk: undersells the product as a one-chart tool when it's much more.

  ## 2. Action-led
  Copy: "Start free trial"
  Lever: action (this is the control)
  When it tends to win: when visitors are warm and just need a frictionless next step. Reliable baseline.
  Risk: forgettable — no differentiation from every other SaaS button.

  ## 3. Loss-aversion-led
  Copy: "Stop fighting Looker"
  Lever: loss aversion
  When it tends to win: when the audience has acute pain with a competitor; landing-page traffic from comparison searches is a strong fit.
  Risk: explicitly anti-competitor copy may strain the calm, dry brand voice and feel adversarial.

  ## 4. Curiosity-led
  Copy: "Try a chart in 90 sec"
  Lever: curiosity (specific time promise)
  When it tends to win: when visitors are skeptical of "free trial" sprawl and want to know how much time they're committing.
  Risk: if the actual time-to-first-chart slips past 90 seconds, the page over-promises and trust drops.

  ## 5. Identity-led
  Copy: "Skip the data team"
  Lever: identity
  When it tends to win: when the audience self-identifies as marketers stuck waiting on a centralized data team — speaks to who they want to be (self-serve, autonomous).
  Risk: may alienate visitors who do work well with their data team or whose workflow includes them.

  ## Recommendation
  Test variant 1 ("See your first chart") as the challenger against the control ("Start free trial"). Outcome-led typically wins against generic action-led on landing pages where conversion friction is low and skepticism is the bigger barrier — and "See your first chart" stays cleanly within the brand voice. If variant 1 wins by 5%+, run a second-stage test with variant 4 ("Try a chart in 90 sec") to see if a specific time promise extends the lift.

  ## Additional non-copy test idea
  Move the CTA above the hero image instead of below. On marketing-analyst landing pages, hero images are often skimmed and the CTA below the fold loses 10–20% of clicks compared to a CTA placed before the user has to evaluate the image. This test usually has higher impact than copy variants and should run before another copy round.
tips:
  - "Five variants on five different levers beats fifty variants on one lever. Lever diversity is what makes tests informative."
  - "Always include a non-copy test idea in the recommendation. Copy is rarely the highest-impact lever — placement, weight, and surrounding context usually matter more."
  - "Loss-aversion variants win in narrow contexts (acute competitor pain) and lose in broad ones. Use surgically."
  - "Watch out for variants that strain brand voice. A 1% lift that breaks voice consistency is a long-term loss."
  - "Tag every variant with its lever in your test tool so the next person inherits the framework, not just the winner."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - error-message-rewrite
  - empty-state-microcopy
  - onboarding-microcopy-flow
tags:
  - content-design
  - cta
  - copywriting
  - ab-testing
  - conversion
---
