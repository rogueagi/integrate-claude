---
title: "Craft a quotable expert quote for a journalist's piece"
slug: expert-quote-craft
function: pr-comms
role: thought-leadership
description: "Write three quote options for an executive responding to a journalist's request — sharp, specific, and impossible to paraphrase out."
useCase: "Use when an executive has been invited to provide an expert quote in a journalist's piece (often via email with a 24-hour deadline). Outputs three quote variants of different lengths and stances, calibrated to the publication, with notes on which to lead with and what to avoid."
prompt: |
  You are a senior communications director who has helped place quotes in TechCrunch, Bloomberg, The New York Times, Stratechery, and trade press. Craft quote options for {{principal_name}} ({{principal_title}}) responding to a journalist's request.

  Inputs:
  - Journalist and outlet: {{journalist}} at {{publication}}
  - The piece they are writing: {{piece_summary}}
  - The specific question they asked: {{question}}
  - The angle they appear to be taking: {{apparent_angle}}
  - What we want to be quoted saying: {{desired_message}}
  - What we cannot say: {{constraints}} (NDAs, regulatory, competitive)
  - Existing positions or POVs we should be consistent with: {{existing_positions}}
  - Deadline: {{deadline}}

  Provide three quote options:

  OPTION A — THE LEAD QUOTE
  The quote we'd most want to see published. Two to three sentences. Specific, slightly contrarian, advances the journalist's piece while landing our message. Built to be quoted in full rather than paraphrased.

  OPTION B — THE SAFER VARIANT
  A version that lands the same message with less risk. Useful if the lead version pushes too hard or if the principal isn't comfortable with the strongest framing. Same length, softer edge.

  OPTION C — THE ONE-LINER
  A single sentence under 20 words. For pieces where the journalist will only have room for a clip, or for being pulled into headline cards, social, or aggregator pickup.

  For each option:
  - The quote, exactly as it should be sent.
  - 2-line note on what this quote does well in the journalist's piece.
  - 1-line risk note: how it could be used against us or paraphrased badly.

  Then a closing strategy section:

  RECOMMENDED PRIMARY
  Which to lead with and why.

  HOW TO SEND
  The email reply structure: brief greeting, the quote(s), a one-line context note (only if it adds something the journalist needs), attribution preference (name, title, company).

  WHAT TO AVOID IN ANY QUOTE
  - Buzzwords (synergy, robust, holistic, leverage as a verb, ecosystem).
  - Hedges that defang the point (some, perhaps, in many cases).
  - "We are excited to" or "We are thrilled to."
  - Claims requiring footnotes the journalist can't include.
  - Statements that contradict prior public positioning.
  - Anything that sounds like it was workshopped by committee.

  Voice rules:
  - The quote should sound like the principal speaking, not like a release.
  - Specificity beats authority. "Three of our customers cut their hiring plan by half" beats "many companies are rethinking headcount."
  - If the principal hesitates on a quote, that hesitation is data. Soften it or replace it before sending.

  Output: three options with notes, then the strategy section.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{journalist}}"
  - "{{publication}}"
  - "{{piece_summary}}"
  - "{{question}}"
  - "{{apparent_angle}}"
  - "{{desired_message}}"
  - "{{constraints}}"
  - "{{existing_positions}}"
  - "{{deadline}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: Co-founder and CEO, Linden AI
  journalist: Aisha Counts
  publication: Bloomberg
  piece_summary: Aisha is writing a piece on how enterprise CIOs are cutting their AI vendor count and consolidating around fewer platforms.
  question: "I'm hearing that mid-market and enterprise buyers are cutting from 6 or 7 AI vendors down to 2 or 3. Are you seeing the same in customer support? And what does this mean for the long tail of AI startups in your category?"
  apparent_angle: Consolidation as a maturing market signal. Bloomberg readers are CFO-adjacent and read this as an enterprise procurement story.
  desired_message: We are seeing the consolidation. We are on the winning side of it. The category will narrow to two or three platforms in autonomous support over the next 18 months. The long tail thins, but it is not because of feature gaps — it's because operating models concentrate around proven deployments.
  constraints: Cannot name competitors directly. Series B announcement is in 14 days; cannot reference the round.
  existing_positions: We have a public POV that the support category is restructuring orgs up the chart, not eliminating roles. The consolidation message must not contradict that.
  deadline: Tomorrow 2pm ET — Aisha is filing Friday morning.
exampleOutput: |
  OPTION A — THE LEAD QUOTE

  "We're seeing the same pattern. In our space, three of our Q1 customer wins were companies cutting from four AI vendors to two. The consolidation isn't a feature war — buyers are consolidating around the platforms whose deployments their senior people will actually defend in a budget meeting. The long tail thins because operating models concentrate, not because the products do."

  - What this does in Aisha's piece: lands a specific number (3 of 5 wins, 4-to-2 vendor cuts) that earns a place in a Bloomberg piece. Reframes "consolidation" from a procurement story to an operating-model story, which differentiates the quote from what other vendors will say.
  - Risk: a bad-faith reader could pull "long tail thins" out of context and frame it as a "winners and losers" prediction. Acceptable risk.

  OPTION B — THE SAFER VARIANT

  "We are seeing buyers cut their AI vendor count, including in customer support. The pattern we observe is that consolidation tracks where deployments are mature enough that operators can defend them in a budget cycle. That favors a small number of platforms in any given category."

  - What this does: the same argument with the personal numbers removed. Useful if the principal is uncomfortable being on the record about specific Q1 wins, or if the comms team wants the framing without the proof point.
  - Risk: less likely to be quoted in full; Bloomberg may paraphrase rather than block-quote, which loses our framing.

  OPTION C — THE ONE-LINER

  "Buyers are consolidating around the platforms their senior people will actually defend in a budget meeting."

  - What this does: built for the sub-headline, the social card, or the line Bloomberg lifts into a Twitter promo. Strong on its own.
  - Risk: standalone, it can be misread as a generic enterprise procurement observation. Pair with a longer quote in the email so the journalist has both.

  RECOMMENDED PRIMARY
  Lead with Option A. The "3 of our Q1 customer wins were companies cutting from 4 to 2 vendors" specificity is exactly the kind of evidence Bloomberg wants and other vendors won't bring. Include Option C as a secondary so Aisha can lift either depending on the layout. Hold Option B as a fallback only if the principal pulls the specific number from Option A.

  HOW TO SEND

  Aisha,

  Thanks for the question. Quoting Maya Okafor, CEO and co-founder of Linden AI:

  "We're seeing the same pattern. In our space, three of our Q1 customer wins were companies cutting from four AI vendors to two. The consolidation isn't a feature war — buyers are consolidating around the platforms whose deployments their senior people will actually defend in a budget meeting. The long tail thins because operating models concentrate, not because the products do."

  If a shorter version is easier to fit: "Buyers are consolidating around the platforms their senior people will actually defend in a budget meeting."

  Happy to clarify anything by tomorrow 2pm. Maya is also available for a 15-minute call if useful for the piece.

  — Sara, Linden AI

  Attribution: Maya Okafor, CEO and co-founder, Linden AI.
tips:
  - "The journalist's deadline is the inviolable constraint. A perfect quote sent late doesn't get used. Send something solid by deadline; don't optimize past it."
  - "Specificity is what gets a quote pulled out of paraphrase. 'Three of our Q1 wins were 4-to-2 vendor cuts' beats 'we see consolidation' every time."
  - "Always offer the journalist both a long and a short version in the same email. Reduces friction; increases your placement odds."
  - "Don't send a quote that needs a corrective follow-up. If you read it and feel the urge to add 'just to clarify...,' rewrite it."
  - "Track which quotes get used and which get cut. Patterns emerge. Some principals quote better in the third sentence; some never get quoted in the first. Adjust quote-craft accordingly."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - journalist-outreach-pitch
  - interview-prep-doc
  - industry-trends-pov-doc
  - linkedin-post-executive
tags:
  - quote
  - press
  - media-relations
  - thought-leadership
  - executive-comms
---
