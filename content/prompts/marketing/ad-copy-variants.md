---
title: "Generate 5 ad copy variants for paid campaigns"
slug: ad-copy-variants
function: marketing
role: performance
description: "Generate 5 distinct paid ad copy variants (headline + description) across different creative angles for A/B testing."
useCase: "Use this prompt when launching or refreshing a paid search or paid social campaign. Each variant should test a distinct creative angle — problem-led, outcome-led, social proof, urgency, or contrast — so your testing produces learning, not just data."
prompt: |
  You are a performance marketing copywriter who understands that great ad copy tests hypotheses, not just words. Write 5 distinct ad copy variants for the following campaign.

  Campaign details:
  - Product/service: {{product}}
  - Target audience: {{target_audience}}
  - Platform: {{platform}} (e.g., Google Search, LinkedIn, Meta/Facebook)
  - Campaign goal: {{campaign_goal}} (e.g., demo requests, free trial signups, lead form fills)
  - Headline character limit: {{headline_limit}} characters
  - Description character limit: {{description_limit}} characters
  - Core benefit or outcome: {{core_benefit}}
  - Key proof point or credibility signal: {{proof_point}} (e.g., customer count, case study result, industry recognition)
  - Landing page CTA: {{cta}}
  - Any keywords to include (for search campaigns): {{keywords}}

  Write 5 ad copy variants, each testing a distinct creative angle:

  **Variant 1: Problem-Led**
  Leads with the pain or frustration the audience recognizes. Headline names the problem; description offers the solution.

  **Variant 2: Outcome-Led**
  Leads with the specific result the audience wants. Headline states the desired outcome; description explains how.

  **Variant 3: Social Proof**
  Leads with credibility — a number, a customer reference, or an outcome achieved by others. Description reinforces with specifics.

  **Variant 4: Contrast / Challenger**
  Positions against the status quo or the "wrong" way of doing things. Implies there's a better way without naming competitors.

  **Variant 5: Simplicity / Direct Ask**
  The most direct possible version — minimal framing, maximum clarity. Best for high-intent audiences.

  For each variant:
  - Write the headline (within character limit)
  - Write the description (within character limit)
  - Show character counts
  - Name the creative hypothesis being tested (one sentence: "This variant tests whether [audience] responds better to [angle] than [default]")

  After all 5: recommend which 2 to launch first based on the campaign goal and audience, with brief reasoning.
variables:
  - "{{product}}"
  - "{{target_audience}}"
  - "{{platform}}"
  - "{{campaign_goal}}"
  - "{{headline_limit}}"
  - "{{description_limit}}"
  - "{{core_benefit}}"
  - "{{proof_point}}"
  - "{{cta}}"
  - "{{keywords}}"
exampleInput: |
  product: Anchor Analytics (BI platform for ops teams)
  target_audience: operations directors and VPs at mid-market companies
  platform: LinkedIn
  campaign_goal: demo requests
  headline_limit: 70
  description_limit: 150
  core_benefit: operational visibility without needing a data team
  proof_point: 400+ customers, beta customers cut alert-to-action time from 48 hours to 2 hours
  cta: Book a demo
  keywords: business intelligence, operations analytics, BI tools
exampleOutput: |
  **Variant 1: Problem-Led**
  Headline: "Still Waiting on Your Data Team for Answers?" (49 chars)
  Description: "Operations leaders shouldn't need a data scientist to answer basic business questions. Anchor gives you the visibility you need, without the dependency." (152 chars — trim by 2)
  Creative hypothesis: Tests whether the audience responds to the pain of data team dependency as a primary trigger.

  **Variant 2: Outcome-Led**
  Headline: "Operational Clarity in Days, Not Quarters" (42 chars)
  Description: "Anchor Analytics connects your tools and surfaces the KPIs that matter — so you can run your ops review with confidence, not guesswork. Book a demo." (149 chars)
  Creative hypothesis: Tests whether outcome language (clarity, confidence) outperforms problem language for this audience.

  **Variant 3: Social Proof**
  Headline: "400+ Ops Teams Have Replaced Their Data Backlog" (48 chars)
  Description: "Beta teams cut alert-to-action time from 48 hours to under 2. See how Anchor helps operations leaders act on data faster. Book a demo today." (141 chars)
  Creative hypothesis: Tests whether a specific customer outcome metric earns more clicks than aspirational or problem-led framing.

  **Variant 4: Contrast / Challenger**
  Headline: "BI Tools Are Built for Data Teams. Anchor Isn't." (49 chars)
  Description: "Most BI platforms require engineers to run. Anchor is built for operators — connect your data, monitor your KPIs, and make faster decisions without waiting." (155 chars — trim by 5)
  Creative hypothesis: Tests whether challenger positioning (we're different because we're built for you) resonates with an audience frustrated with complex tools.

  **Variant 5: Direct Ask**
  Headline: "See Your Operations Clearly — Book a Demo" (42 chars)
  Description: "Anchor Analytics surfaces the metrics that drive your business, without a data team. 30-minute demo. Real data, no pressure." (124 chars)
  Creative hypothesis: Tests whether a low-friction, clear value prop outperforms more creative angles for high-intent LinkedIn audiences.

  **Recommended launch pair:** Variants 1 and 4. Both address the core frustration (dependency on data teams) from different angles — one names the pain, one names the problem with existing tools. This pairing will tell you whether the audience is more motivated by "I have a problem" language or "current solutions are wrong" language. Run for 2 weeks minimum with equal budget split before drawing conclusions.
tips:
  - "Each variant must test a different creative hypothesis — not just different words for the same idea. If your 5 variants all lead with the same angle, you're not learning anything from the test."
  - "For LinkedIn specifically: lead with the audience identity ('Operations Leaders') or their pain in the first 5 words — LinkedIn ads get scrolled past fast."
  - "Set minimum impression thresholds before declaring a winner. On LinkedIn, 500+ impressions per variant; on Google, 100+ clicks. Statistical noise at lower volumes leads to wrong conclusions."
  - "After running this prompt, ask Claude to write 5 landing page headlines that match each ad variant — message match between ad and landing page is one of the highest-impact conversion levers."
  - "Save winning creative angles as 'proven territories' — they often apply to future campaigns in different formats."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - landing-page-copy
  - competitive-positioning
  - persona-profile
tags:
  - paid-ads
  - performance-marketing
  - copywriting
  - a-b-testing
---
