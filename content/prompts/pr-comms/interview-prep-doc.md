---
title: "Prep an executive for a print or podcast interview"
slug: interview-prep-doc
function: pr-comms
role: media-relations
description: "Build an interview prep doc that gives an executive the questions to expect, the messages to land, and the traps to avoid."
useCase: "Use before any media interview — print, broadcast, or podcast. Generates a tight prep doc with the journalist's profile, likely questions, three core messages with proof points, bridge phrases, and known landmines."
prompt: |
  You are a media trainer who has prepped Fortune 500 CEOs and Series-B founders for interviews with The Wall Street Journal, Bloomberg, Stratechery, Decoder, and 60 Minutes. Build an interview prep doc for {{principal_name}} ({{principal_title}}) ahead of an interview with {{journalist}} at {{outlet}}.

  Inputs:
  - Format: {{format}} (print Q&A, on-stage interview, podcast, broadcast)
  - Approximate length: {{length}}
  - Topic and angle as stated by journalist: {{topic}}
  - Three messages we want to land: {{key_messages}}
  - Off-limits or sensitive topics: {{landmines}}
  - Recent journalist work that hints at their style: {{journalist_style}}
  - Anything competitive or legally sensitive: {{sensitive_context}}

  Produce a single document with these sections:

  1. JOURNALIST PROFILE (4 to 6 lines)
  - Their beat, tone (skeptical, narrative, advocacy), and trademark question pattern.
  - Two recent pieces that signal what they care about right now.

  2. CORE MESSAGES (3, ranked)
  Each message:
  - The headline of the message (1 sentence)
  - The proof point or anecdote that earns it
  - The exact phrase the principal should say. Write in their voice; this is the quote we want to read in the published piece.

  3. LIKELY QUESTIONS (8 to 12)
  For each:
  - The question (phrased the way the journalist would ask it)
  - The trap, if any (what a bad answer sounds like)
  - The 2-3 sentence answer the principal should give, including a bridge to one of the core messages where natural.

  4. THE LANDMINES (3 to 5)
  Topics where the answer needs precision: legal exposure, layoffs, competitor mentions, customer names, projections, hiring freezes. Give the principal an exact phrase to redirect.

  5. BRIDGE PHRASES (5)
  Short transitions to use when a question pulls them off-message. E.g., "What's actually changed in the last six months is..." or "The bigger pattern I'd point to is..."

  6. RAPID-FIRE PREP (closing 5 minutes)
  - One line on what success looks like
  - One line on what the worst-case quote would be (so they hear it before the journalist does)
  - The single sentence to lead with if the first question is a softball

  Tone: respect the principal's intelligence. No condescension, no over-coaching. Assume they're sharp and short on time.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{journalist}}"
  - "{{outlet}}"
  - "{{format}}"
  - "{{length}}"
  - "{{topic}}"
  - "{{key_messages}}"
  - "{{landmines}}"
  - "{{journalist_style}}"
  - "{{sensitive_context}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: CEO, Linden AI
  journalist: Nilay Patel
  outlet: Decoder podcast
  format: podcast, recorded
  length: 60 minutes
  topic: How AI is reshaping the customer support function and why most companies are getting it wrong
  key_messages: (1) The shift is from copilot to agent, and the operating model has to change with it. (2) Headcount math is the real story; most leaders are still planning to hire as if AI doesn't exist. (3) The winners are companies that retrained their support orgs around quality review, not deflection rate.
  landmines: pending lawsuit from former employee (NDA in place); two customers churned in Q4 (don't name); Bessemer's portfolio overlaps with two competitors.
  journalist_style: Nilay loves to push on org-design and second-order consequences; he often opens with "explain the business" and gets impatient with abstraction.
  sensitive_context: Series B closes the day before recording but is under embargo until two weeks after the episode airs.
exampleOutput: |
  INTERVIEW PREP — Maya Okafor with Nilay Patel, Decoder

  JOURNALIST PROFILE
  Nilay is one of the most prepared interviewers in tech media. He runs business-model questions hard ("How does the company actually make money?") and pushes on org-design and downstream consequences. He gets impatient with abstraction and loves a concrete example. Recent episodes with Aaron Levie and Eric Yuan show he'll spend 15 minutes on operating mechanics before he touches the product. Expect at least one question about Linden's headcount plan and at least one about how the company decides what to build.

  CORE MESSAGES

  1) Copilot is over. The category is now agents that close tickets.
  Proof: 61% average deflection across 140 customers, no human in the loop on those resolutions.
  In her voice: "Two years ago, every support leader I talked to wanted AI to draft a reply. Now they want it to close the ticket. That's not a feature change, it's a different operating model."

  2) The headcount question is the real story.
  Proof: Three of our Q1 customers cut their hiring plan in half after rolling us out.
  In her voice: "Most VPs of Support are still building their 2026 plan as if AI doesn't exist. The ones who've used agents in production are rebuilding the org chart, not the budget line."

  3) Quality review is the new job.
  Proof: A customer's senior support team went from 40 hours a week resolving tickets to 35 hours a week reviewing what the agents resolved.
  In her voice: "The work didn't go away. It moved up the value chain. The senior people are doing senior work for the first time in years."

  LIKELY QUESTIONS

  Q: "Explain Linden — what does the company actually do?" → Open simply. Two sentences. Then bridge to message 1.
  Q: "Walk me through what happens when a ticket comes in." → Concrete example. Use the Brightpath case.
  Q: "What does the deflection rate actually mean? Are these the easy tickets?" → Acknowledge the question is fair; share the breakdown by ticket type. Avoid sounding defensive.
  Q: "What's the headcount story?" → Lead with message 2. Have the customer-name-redacted example ready.
  Q: "Are you killing support jobs?" → Trap. Don't say "we don't replace jobs"; that sounds rehearsed and is partly false. Say what's true: roles are reshaping, the senior tier is growing, the entry tier is shrinking.
  Q: "Who are your competitors?" → Trap. Don't list. "The category is bigger than the named players. The real competition is the legacy ticketing stack."
  Q: "What's a recent product mistake?" → Have one ready. Specificity earns trust.
  Q: "Where does this go in five years?" → Don't predict, describe the operating model shift. He'll cut a prediction quote into the cold open.
  Q: "How do you decide what to build?" → Walk through the weekly customer review process.
  Q: "What about hallucinations and accuracy?" → Numbers, not assurances. Cite the human-review escalation rate.
  Q: "Are customers worried about Anthropic / OpenAI building this themselves?" → Honest answer: model providers stay at the model layer; the workflow and the integrations are the moat.
  Q: "How do you make money?" → Pricing model in one sentence; expansion math in the second.

  LANDMINES
  - Pending lawsuit: "There's an active legal matter I can't comment on, and out of respect for the process I'm going to leave it there."
  - Q4 churn: don't volunteer; if pressed, "We've had customers leave. In every case we've learned from it. I'm not going to name them on a podcast."
  - Bessemer competitor portfolio: "Talia and the Bessemer team have been clear about how they handle category overlap. I'd point you to them on portfolio questions."
  - The unannounced Series B: under no circumstances reference the round, the lead, or the valuation. If a question gets close, redirect to the operating story.
  - Specific customer numbers beyond the published 140 / 61% / 92%.

  BRIDGE PHRASES
  - "What's actually changed in the last six months is..."
  - "The pattern I'd point you to is..."
  - "Here's the version of that question that I think is more interesting..."
  - "Let me give you a concrete example."
  - "I think the real story underneath that one is..."

  RAPID-FIRE PREP
  Success looks like: at least one of the three core messages becomes a pull-quote on social. Bonus if Nilay opens the episode with the headcount line.
  Worst-case quote: "We're really excited to be partnering with..." Don't ever say this on Decoder. He will roast it.
  Lead-with sentence if asked something soft to start: "The thing I'd want your listeners to hold in their head is that support went from a copilot category to an agent category in about 18 months, and most operating models haven't caught up."
tips:
  - "Run the prep doc by the principal at least 24 hours before the interview. Same-day reviews don't stick."
  - "The 'in their voice' quotes are the highest-leverage part of the doc — write them as the principal would speak, not as a press release would write."
  - "For podcasts, prep should focus on storytelling and operating detail. For print Q&A, prep should focus on quote-ready phrasing."
  - "Have the principal say the landmine answers out loud once before the interview. Saying them lands them."
  - "If the principal hates a message, kill it. A principal who is performing a message will sound like they're performing. The interview is worse than not landing the message at all."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - journalist-outreach-pitch
  - ceo-keynote-narrative
  - expert-quote-craft
  - crisis-holding-statement
tags:
  - interview
  - media-training
  - executive-prep
  - podcast
  - press
---
