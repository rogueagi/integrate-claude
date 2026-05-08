---
title: "Draft a press release for a launch, funding, or hire"
slug: press-release-draft
function: pr-comms
role: media-relations
description: "Draft a wire-ready press release that journalists can quote from without rewriting — strong lede, real news, named sources."
useCase: "Use when you need to issue a press release for a product launch, funding round, executive hire, partnership, or acquisition. Generates a release that follows AP style, leads with the news (not the company boilerplate), and includes pull-quotes journalists can drop straight into a story."
prompt: |
  You are a senior PR director who has placed releases in TechCrunch, WSJ, and Bloomberg. Draft a press release for {{company_name}} announcing {{news_type}}.

  Inputs:
  - News: {{news_summary}}
  - Why this matters now: {{market_context}}
  - Named sources for quotes: {{quote_sources}} (name, title, and the angle each should speak to)
  - Hard numbers/proof points: {{proof_points}}
  - Embargo or release date: {{release_date}}
  - Boilerplate company description: {{company_boilerplate}}

  Structure:
  1. Headline — the news in plain English, under 12 words. No adjectives like "leading" or "innovative."
  2. Subhead — one line that adds the "why now" angle.
  3. Dateline — CITY, State — Month Day, YYYY —
  4. Lede — the news in one sentence, then a second sentence with the most important number or context. Inverted pyramid.
  5. Body — 3 to 4 short paragraphs. Each new paragraph adds one new fact. No marketing language.
  6. Quotes — 2 quotes from {{quote_sources}}. Each quote must say something a real human would say out loud. Avoid "We are thrilled" and "We are excited." Quotes should advance the story, not decorate it.
  7. Boilerplate — the standard "About {{company_name}}" block.
  8. Media contact — name, email, phone placeholder.

  Constraints:
  - Maximum 450 words excluding boilerplate.
  - No buzzwords: synergy, holistic, leverage, best-in-class, world-class, revolutionary.
  - Every claim that uses a number must be sourced or attributed.
  - If a fact is missing, flag it in brackets like [NEEDED: customer logo count] rather than making it up.

  Output: the full release, then a 3-bullet "release notes" section flagging anything I should pressure-test before sending.
variables:
  - "{{company_name}}"
  - "{{news_type}}"
  - "{{news_summary}}"
  - "{{market_context}}"
  - "{{quote_sources}}"
  - "{{proof_points}}"
  - "{{release_date}}"
  - "{{company_boilerplate}}"
exampleInput: |
  company_name: Linden AI
  news_type: Series B funding
  news_summary: $42M Series B led by Bessemer, with participation from existing investors Index Ventures and Conviction.
  market_context: AI-native customer support is now consolidating around two or three platforms; we tripled ARR in 12 months serving mid-market SaaS.
  quote_sources: Maya Okafor (CEO, vision/why-now), Talia Roth (Bessemer partner, investor thesis), Renu Patel (Head of Support at customer Brightpath, customer proof)
  proof_points: 3x ARR YoY, 140 customers, 92% gross retention, deflection rates averaging 61% across deployed accounts
  release_date: April 14, 2026
  company_boilerplate: Linden AI builds autonomous support agents for B2B SaaS companies. Founded in 2023, Linden is headquartered in San Francisco.
exampleOutput: |
  FOR IMMEDIATE RELEASE

  Linden AI raises $42M Series B to scale autonomous customer support
  Bessemer leads round as the company triples ARR and crosses 140 customers

  SAN FRANCISCO — April 14, 2026 — Linden AI today announced a $42 million Series B round led by Bessemer Venture Partners, with participation from existing investors Index Ventures and Conviction. The funding follows a year in which Linden tripled annual recurring revenue and grew its customer base to 140 mid-market SaaS companies.

  Linden's autonomous support agents resolve customer issues without human intervention, deflecting an average of 61 percent of incoming tickets across deployed accounts. The company maintains 92 percent gross revenue retention, a metric usually reserved for established infrastructure software.

  "Two years ago, support leaders wanted AI to draft suggested replies. Now they want AI to close the ticket," said Maya Okafor, CEO and co-founder of Linden AI. "The shift from copilot to agent is the entire game, and most teams haven't rebuilt their support stack for it yet. This round funds that rebuild."

  Bessemer led the round after a six-month evaluation that included reference calls with active customers.

  "We've watched a dozen AI support companies. Linden is the only one where customers told us, unprompted, that their headcount plans had changed," said Talia Roth, partner at Bessemer. "That's the signal."

  Renu Patel, Head of Support at Brightpath, has used Linden for 11 months. "We deflect over half of tier-one tickets without a human reading them. My team spends their time on the hard problems now, which is the job they wanted in the first place."

  Linden will use the funding to expand engineering, open a New York office, and ship a voice-channel product later this year.

  About Linden AI
  Linden AI builds autonomous support agents for B2B SaaS companies. Founded in 2023, Linden is headquartered in San Francisco.

  Media contact: press@linden.ai

  Release notes:
  - Confirm Brightpath approved the use of Renu's quote and the deflection number before sending.
  - Bessemer's "six-month evaluation" detail is paraphrased — confirm with Talia's team that they're comfortable with that framing.
  - The voice product timing ("later this year") is vague on purpose; tighten only if product committed to a quarter.
tips:
  - "Write the headline last. The lede usually contains the real headline once you've drafted the body."
  - "Every quote must pass the 'would they actually say this out loud' test. If a CEO wouldn't say it at a dinner party, it doesn't belong in a release."
  - "Reporters scan releases for two things: the news and the number. Put both in the first 40 words."
  - "If you're announcing a customer, get their quote approved in writing before the release goes out. The PR cleanup if a logo backs out is brutal."
  - "Keep boilerplate to 50 words. Long boilerplate is a tell that the company doesn't know what it actually does."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - journalist-outreach-pitch
  - embargo-request-email
  - press-mention-amplification-plan
tags:
  - press-release
  - media-relations
  - launch
  - funding
  - announcement
---
