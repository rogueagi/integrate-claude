---
title: "Generate 10 ad creative variants for multi-platform A/B testing"
slug: ad-creative-variant-set
function: marketing
role: performance
description: "Produce 10 ad creative variants across platforms (LinkedIn, Meta, Google, YouTube pre-roll) from one creative brief, with a hypothesis attached to each variant."
useCase: "Use this prompt when launching or refreshing a paid campaign. Performance marketers need variant volume to find a winner, but most variant sets are random. This prompt builds variants around explicit hypotheses (pain-led vs outcome-led, social proof vs urgency, etc.) so you learn something from every test, not just which one won."
prompt: |
  You are a senior performance marketer who runs paid acquisition on LinkedIn, Meta, Google, and YouTube. Generate 10 ad creative variants for the campaign below. Each variant must have an explicit hypothesis.

  Campaign brief:
  - Product: {{product}}
  - Audience: {{audience}}
  - Funnel stage: {{funnel_stage}}
  - Offer: {{offer}}
  - Brand voice notes: {{brand_voice}}
  - Forbidden claims or compliance constraints: {{constraints}}

  Output 10 variants. Distribute them across the following hypothesis axes (do not do 10 of the same kind):
  - Pain-led vs outcome-led
  - Social proof vs urgency vs curiosity
  - Specific customer story vs aggregate stat
  - Question-led vs declarative

  For each variant produce:
  - Variant number and platform best suited (LinkedIn single image, Meta carousel, Google RSA, YouTube pre-roll 15s)
  - Headline (under platform character limit)
  - Primary text or VO script (under 90 words for static, under 30 seconds spoken for video)
  - CTA button text
  - Hypothesis being tested in one sentence: "If this wins, we learn that [audience] responds more to [X] than [Y]"
  - Creative direction notes for the designer (1-2 lines)

  After the 10 variants, output a Test Plan section:
  - Which 3 variants to launch first and why
  - Minimum spend / impressions before you call a winner
  - Which result would change your media mix decision
exampleInput: |
  product: Aperture, an AI assistant for outside legal counsel that drafts and redlines contracts
  audience: managing partners and practice group leaders at AmLaw 100 firms
  funnel_stage: cold awareness on LinkedIn, retargeting on Meta
  offer: free 30-day pilot for 5 attorneys
  brand_voice: confident, peer-to-peer, never patronizing toward lawyers, no "revolutionize" or "disrupt"
  constraints: no claims of legal accuracy, no comparative claims against Harvey or Ironclad by name
exampleOutput: |
  Variant 1 (LinkedIn single image, outcome-led, aggregate stat)
  Headline: Cut first-draft contract time by 60% at AmLaw firms.
  Primary text: Aperture drafts and redlines on your firm's templates, supervised by your associates. AmLaw 50 firms using it are billing the same hours on higher-leverage work. Try it with 5 attorneys for 30 days.
  CTA: Start pilot
  Hypothesis: If this wins, partners respond more to billable leverage framing than to time savings framing.
  Creative direction: Clean type-only treatment, firm brand neutral, no stock lawyers.

  Variant 2 (Meta retargeting, pain-led, question-led)
  Headline: Still redlining at 11pm?
  ...
  (8 more variants follow, distributed across the hypothesis axes)

  Test Plan:
  - Launch first: variants 1, 4, 7. They span the widest hypothesis spread.
  - Minimum: 50k impressions or 7 days per variant, whichever comes first.
  - Decision rule: if pain-led variants outperform outcome-led at 2x CTR, shift 70% of next quarter's budget to pain-led creative.
variables:
  - "{{product}}"
  - "{{audience}}"
  - "{{funnel_stage}}"
  - "{{offer}}"
  - "{{brand_voice}}"
  - "{{constraints}}"
tips:
  - "Variant volume without hypothesis is noise. The hypothesis-per-variant rule is what makes this useful."
  - "Run the test plan section past your media buyer before launch. Their spend reality may differ from the plan."
  - "For regulated categories (legal, financial, healthcare), have compliance review every variant before launch."
  - "Re-run this prompt with the same brief every quarter. Winning hypotheses fatigue, and the axes that worked last quarter may not work this quarter."
  - "Pair with the ICP landing page prompt to keep ad-to-page narrative consistent."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - icp-tailored-landing-page
  - lifecycle-email-cadence
  - brand-voice-style-guide
tags:
  - marketing
  - performance
  - paid-ads
  - ab-testing
  - creative
---
