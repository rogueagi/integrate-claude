---
title: "Write a conference talk proposal that gets accepted"
slug: conference-talk-proposal
function: pr-comms
role: thought-leadership
description: "Submit a talk proposal calibrated to a specific conference's program — the abstract, the takeaways, and the speaker bio that get past program committees."
useCase: "Use when submitting a speaking proposal to a conference (industry, technical, or leadership). Outputs a proposal tuned to the conference's audience and program criteria, with the abstract, learning outcomes, talk structure summary, and a speaker bio framed for the program committee — not just a marketing audience."
prompt: |
  You are a conference programming consultant who has helped speakers land slots at SaaStr, Web Summit, AWS re:Invent, NeurIPS, INBOUND, RSA, and Disrupt. Write a talk proposal for {{principal_name}} ({{principal_title}}) for {{conference}} on {{topic}}.

  Inputs:
  - Conference and audience: {{conference_audience}} (size, level, what they paid to learn)
  - Conference's stated program priorities or theme: {{program_priorities}}
  - Track being submitted to: {{track}}
  - Talk format: {{format}} (keynote, breakout, panel, workshop, lightning)
  - Allotted time: {{duration}}
  - Working title options: {{titles}} (we'll pick the strongest)
  - Argument or thesis: {{argument}}
  - Audience takeaways: {{takeaways}} (what the audience walks away knowing or doing)
  - Why this speaker, this topic, this year: {{relevance}}
  - Speaker's prior speaking record: {{prior_record}}
  - Sensitive: {{sensitivity}} (NDAs, customers, competitive)

  Produce the full proposal:

  1. TITLE
  Three options, ranked. The lead title should be specific, slightly contrarian, and pass the "would you scroll past it" test. Avoid colon-heavy titles ("AI: A New Frontier"). Avoid starting with "How."

  2. ABSTRACT (150-200 words)
  Reads as if it's already a great talk. The hook, the argument, the evidence, the takeaway. Program committees evaluate hundreds; the first sentence has to land.

  3. WHAT THE AUDIENCE WILL LEAVE WITH
  Three to four specific learnings or actions. Each should be concrete enough that an attendee could use it in a 1:1 conversation Monday morning. No "deep understanding of." No "perspectives on."

  4. TALK STRUCTURE SUMMARY (paragraph)
  How the talk unfolds. The opening, the turn, the payoff. The committee wants to see that the speaker has thought about narrative, not just content.

  5. WHY THIS, WHY NOW, WHY THIS SPEAKER
  Three short paragraphs that answer each question. Program committees look for fit before they look for celebrity.

  6. SPEAKER BIO (60-90 words, third person, calibrated for the program committee)
  This is not the marketing bio. The committee wants signal: prior credible speaking, operating credibility, and one line that distinguishes the speaker from the other 50 people who pitched on the same topic.

  7. ACCESSIBILITY AND ACCOMMODATIONS NOTE (1-2 lines)
  Speaker availability windows, AV requirements (slides, demo, customer panel), travel constraints. Practical to handle, signals professionalism.

  Voice rules:
  - Avoid "thought leader," "deep expertise," "passionate."
  - The proposal should be specific enough that the committee believes the talk exists already.
  - If a similar talk has been given recently at the same conference, name how this one is different.
  - The talk should not require the audience to already know the speaker. Most attendees don't.

  Output: the full proposal, then a 3-bullet "submission strategy" note covering: which track to lead with, what tracks to fall back to, and any program committee member to reference if known.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{conference}}"
  - "{{topic}}"
  - "{{conference_audience}}"
  - "{{program_priorities}}"
  - "{{track}}"
  - "{{format}}"
  - "{{duration}}"
  - "{{titles}}"
  - "{{argument}}"
  - "{{takeaways}}"
  - "{{relevance}}"
  - "{{prior_record}}"
  - "{{sensitivity}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: Co-founder and CEO, Linden AI
  conference: SaaStr Annual 2026
  topic: How AI agents are restructuring customer support and what every SaaS CFO is missing in their 2026 plan
  conference_audience: 12,000 SaaS founders, executives, and operators. Mostly $1M-$200M ARR. The audience values operating specificity over abstraction.
  program_priorities: SaaStr's stated priorities for 2026: AI in the SaaS stack, the new operating model, retention in a hard market.
  track: AI Operations track (new in 2026)
  format: 30-min main-stage breakout
  duration: 30 minutes including 5 minutes Q&A
  titles: ["The 2026 Headcount Mistake Every Support Leader Is Making", "Why Your CFO's AI Productivity Multiplier Is Wrong", "The Senior People on Your Team Already Know"]
  argument: AI agents are reshaping the support function up the org chart; the operating models being budgeted for 2026 don't reflect this, and the cost is talent.
  takeaways: (1) The three-question audit to apply before signing the 2026 budget. (2) The line-item changes a corrected finance model needs. (3) The retention risk that doesn't show up in any HR dashboard. (4) A clear pattern customers are using to restructure rather than reduce.
  relevance: SaaStr's audience is in budget cycle right now. The talk is timed to the moment they are deciding 2026 plans. Maya runs a platform that has seen this pattern across 140 deployments.
  prior_record: 2024 Decoder podcast guest; spoke at SupportWorld Live 2025; bylined in MIT Sloan; first-time SaaStr speaker.
  sensitivity: Cannot name two specific customers under MNDA. Cannot reference pending Series B during proposal review window (4 weeks).
exampleOutput: |
  TITLE OPTIONS (ranked)
  1. The 2026 Headcount Mistake Every Support Leader Is Making
  2. The Senior People on Your Team Already Know
  3. Why Your CFO's AI Productivity Multiplier Is Wrong

  ABSTRACT
  Most SaaS CFOs are modeling AI in customer support as a flat productivity multiplier — same team, more output, or smaller team, same output. Across 140 enterprise deployments, neither model holds. The agents absorb the entry-tier work; the senior tier shifts from resolution to review; the org chart compresses, then re-expands at the senior end. The 2026 budgets being drafted right now don't reflect this. The companies that get the operating model right will retain their senior support people through 2027. The companies that don't will start losing them in Q3, on top of mishitting their hiring plan. This talk walks through the cohort data, the three-question audit to run before signing the 2026 plan, the line-item changes a corrected finance model needs, and the retention pattern that doesn't show up on any HR dashboard. It's a blueprint, not a forecast.

  WHAT THE AUDIENCE WILL LEAVE WITH
  - A three-question audit to apply before signing the 2026 support headcount plan.
  - The three line-item changes a corrected finance model needs that most CFO templates don't include.
  - A way to identify which senior people on their team are at retention risk in the next 6 months.
  - The pattern (with two named customer examples) that distinguishes companies restructuring from companies retreating.

  TALK STRUCTURE SUMMARY
  The talk opens on the moment a head of support discovered the senior people on her team had been doing entry-tier work all along. From there it widens into the cohort data — the bimodal pattern across 140 deployments — and the operating-model implication. The turn comes when the talk shifts from "what's happening" to "what your finance team is missing," and gives the audience the corrected model. It closes with the three-question audit and a hard claim: the budget you write next month will decide whether your senior support people are still in the building two years from now.

  WHY THIS, WHY NOW, WHY THIS SPEAKER
  Why this: SaaStr's 2026 audience is in budget cycle as they sit in the room. Most are budgeting for AI in support without a model for what AI is actually doing inside the function. This is the talk the audience needs the week they walk in, not the year afterward.

  Why now: 2026 is the first budget cycle where most SaaS support functions have AI agents in production for at least one quarter. The patterns we observe are real, recent, and not yet absorbed by the operating-model literature. Saastr is the right room and this is the right month.

  Why this speaker: Maya runs the platform deployed across 140 customers. She has direct visibility into the bimodal pattern this talk describes, including the customer-named restructuring cases. She is not a researcher and she is not a futurist; she is the person on whose platform this is happening, and she is willing to bring data the audience hasn't seen.

  SPEAKER BIO
  Maya Okafor is the co-founder and CEO of Linden AI, an autonomous customer support platform deployed by 140 mid-market and enterprise SaaS companies. Before founding Linden, she was VP of Engineering at Looker, where she scaled the engineering team from 80 to 240 people through Looker's acquisition by Google. She has spoken at SupportWorld Live and on the Decoder podcast, and her byline on operating-model change in AI deployments appeared in MIT Sloan Management Review in 2025.

  ACCESSIBILITY AND ACCOMMODATIONS
  Maya is available for the conference's full schedule. Tech requirements: a single confidence monitor, no video clip playback, slides delivered in 16:9 PDF or Keynote. No customer panel needed. Available for press 1:1s and meet-and-greets adjacent to the slot.

  SUBMISSION STRATEGY
  - Lead with the AI Operations track. The talk is built for it and SaaStr's promotion of the new track suggests the program committee is looking for breakout-quality content there. Fall back to the Operating Model track if AI Ops fills.
  - The talk requires recent operating data; a video pitch with the cohort chart visible is worth the production cost. Program committees skim 600+ proposals; one image that earns a stop is high leverage.
  - If the program committee chair is unknown, make a 30-min outreach to the SaaStr content lead before submission. A 5-minute description of the cohort data over a call lets us calibrate the abstract to what they're trying to fill in 2026.
tips:
  - "The first sentence of the abstract is doing 80% of the work. Spend disproportionate effort on it."
  - "Program committees evaluate fit before fame. A specific, evidence-grounded talk from a relatively unknown speaker beats a generic talk from a well-known one."
  - "If a similar talk was given at the conference last year, your proposal must explicitly say how this is different. Committees remember."
  - "Submit to one track, hard, rather than spreading across three. A diluted submission reads as 'this could be anywhere.'"
  - "Recycle the abstract — but never the title. Conferences talk to each other; a title that lands at one is useful as a draft for the next, but identical titles look lazy."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - ceo-keynote-narrative
  - byline-article-outline
  - executive-bio-rewrite
  - industry-trends-pov-doc
tags:
  - conference
  - speaking
  - thought-leadership
  - cfp
  - executive-comms
---
