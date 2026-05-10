---
title: "Generate an ICP-tailored landing page from a single brand brief"
slug: icp-tailored-landing-page
function: marketing
role: demand-gen
description: "Turn one source brand brief into a landing page rewritten for a specific ICP segment, with headline, subhead, social proof, and CTA tuned to that buyer."
useCase: "Use this prompt when running ABM or segmented paid campaigns and you need landing pages that match the ad and audience. One brand brief in, one ICP-tuned page out. Run it once per segment to ship 5-10 variant pages from a single source of truth without losing brand consistency."
prompt: |
  You are a senior demand gen marketer who builds high-converting landing pages. I will give you a single source brand brief and a target ICP segment. Generate a landing page rewritten for that ICP.

  Source brand brief:
  {{brand_brief}}

  Target ICP segment:
  - Role / title: {{icp_role}}
  - Company size: {{icp_company_size}}
  - Industry: {{icp_industry}}
  - Top pain point: {{icp_pain}}
  - Where they are in buying cycle: {{buying_stage}}
  - Campaign source they are arriving from: {{traffic_source}}

  Output a landing page with:
  1. Hero headline (under 10 words, names the outcome, uses the ICP's vocabulary not yours)
  2. Subhead (1 sentence, names the pain and the mechanism of relief)
  3. Three benefit blocks (heading + 1 sentence each), each tied to a real workflow this ICP runs
  4. Social proof block: pick the most relevant 2 customer logos / quotes from the brief, with a note on why those over the others
  5. CTA above the fold (button copy + 1 line of micro-copy under it)
  6. Objection-handling FAQ: 4 questions this exact ICP would ask before converting, with short answers grounded in the brief

  Constraints:
  - Do not invent claims, customer names, or numbers not present in the source brief
  - Match the traffic source intent: cold paid traffic gets a softer CTA than warm retargeting
  - Use the ICP's language, not generic SaaS speak
exampleInput: |
  brand_brief: Northwind Logistics offers a TMS for mid-market shippers. Customers include Patagonia, REI, Sweetgreen, and Yeti. Average customer cuts freight spend 12% in year one and onboards in 6 weeks. Brand voice is direct, operator-friendly, anti-jargon.
  icp_role: VP of Supply Chain
  icp_company_size: 500 to 2000 employees
  icp_industry: consumer goods and apparel
  icp_pain: freight costs spiking in 2026 while volume is flat or declining
  buying_stage: actively evaluating TMS replacements, comparing 3 vendors
  traffic_source: LinkedIn retargeting from a webinar on freight cost benchmarks
exampleOutput: |
  Hero: Cut freight spend 12% in your first year.
  Subhead: Northwind is the TMS mid-market apparel and consumer brands use to claw back margin when volume is flat and carrier rates aren't.

  Benefits:
  - Rate shop every load, not every quarter. Stop accepting carrier renewals at face value.
  - Onboard in 6 weeks, not 6 months. Built for teams of 3 supply chain analysts, not 30.
  - Cost per shipment dashboards your CFO will actually read. Defend your budget with numbers, not narrative.

  Social proof: Patagonia and Yeti quotes. Chosen because they match the apparel and consumer goods ICP exactly; REI and Sweetgreen would dilute the segment fit.

  CTA: "See your freight benchmark" (because they just attended a benchmark webinar, this matches intent better than "Book a demo")
  Micro-copy: 20-minute call. We come with your category's data.

  FAQ:
  1. How does this compare to MercuryGate or e2open? Honest one-paragraph answer grounded in the brief.
  2. What does the 6-week onboarding actually include?
  3. Will my carrier contracts need to be renegotiated?
  4. What does year two look like after the initial 12% savings?
variables:
  - "{{brand_brief}}"
  - "{{icp_role}}"
  - "{{icp_company_size}}"
  - "{{icp_industry}}"
  - "{{icp_pain}}"
  - "{{buying_stage}}"
  - "{{traffic_source}}"
tips:
  - "Feed Claude the actual source brand brief, not a summary. The page is only as good as the input claims it can ground on."
  - "Run the same brief through 5-8 ICP segments in one session and compare. The variants will surface which segments your brand brief is too generic to serve."
  - "Match CTA softness to traffic temperature. Cold LinkedIn traffic does not convert on 'Book a demo'; warm retargeting does."
  - "Have your most senior PMM review the FAQ section before shipping. That's where invented claims most often slip in."
  - "Pair this with an ad creative variant prompt so the ad-to-page narrative stays consistent."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ad-creative-variant-set
  - content-pillar-outline
  - brand-voice-style-guide
tags:
  - marketing
  - landing-page
  - demand-gen
  - icp
  - conversion
---
