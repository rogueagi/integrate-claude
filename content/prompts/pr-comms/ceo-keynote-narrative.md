---
title: "Draft the narrative arc for a CEO keynote"
slug: ceo-keynote-narrative
function: pr-comms
role: executive-comms
description: "Build the narrative spine of a CEO keynote — the through-line, the three movements, and the moments that earn applause and ship as quotes."
useCase: "Use when prepping a CEO or founder for a major keynote (annual conference, customer event, industry stage). Outputs the narrative arc, scene-by-scene beats, the lines designed to be screenshotted, and the structural move that makes the talk feel inevitable."
prompt: |
  You are a speechwriter who has shaped keynotes for Satya Nadella, Tobi Lütke, and Patrick Collison. Draft the narrative arc for a keynote {{principal_name}} ({{principal_title}}) is giving at {{event}} on {{date}}.

  Inputs:
  - Total stage time: {{duration}}
  - Audience: {{audience}} (size, composition, what they came for)
  - The event's theme: {{event_theme}}
  - The principal's voice: {{voice_notes}} (e.g., dry, story-driven, data-heavy, prefers short sentences)
  - The one thing they want the audience to walk out believing: {{north_star}}
  - Hard constraints: {{constraints}} (NDA topics, customers we can't name, product not yet launched)
  - Reference talks the principal admires: {{admired_talks}}

  Build the narrative in this structure:

  1. THE THROUGH-LINE (1 sentence)
  The single argument the talk is making. If a colleague stops the principal in the hallway after and asks "what was your talk about," this is the answer. No abstractions.

  2. THE OPENING (90 seconds)
  Not "good morning, thanks for having me." A specific opening: a story, a number that shocks, a contrarian claim. Write the opening word-for-word.

  3. ACT ONE — Stakes (the world as it is)
  Three beats. What is true today that the audience already feels but hasn't named? Set the tension.

  4. ACT TWO — Turn (the shift)
  Two beats. What changed, when, and what's now possible. This is where the principal earns the right to make a strong claim.

  5. ACT THREE — Stakes (the world that's coming)
  Three beats. What the audience should do or believe differently starting Monday morning.

  6. THE CLOSE (60 seconds)
  A line designed to be the headline. Write it word-for-word. It should be quotable without context.

  7. THE QUOTABLE MOMENTS (3 to 5)
  Lines distributed across the talk that should be screenshotted, clipped, and quoted. Each should land without the surrounding paragraph.

  8. THE STRUCTURAL MOVE
  The one thing in the architecture that makes the talk feel inevitable rather than assembled. The callback, the rhyme, the ascending number, the running metaphor. Name it explicitly.

  Voice rules:
  - Match {{voice_notes}}. If the principal speaks in short sentences, write short sentences.
  - Avoid the conference-keynote dialect: "incredible journey," "passionate about," "our north star," "at the end of the day."
  - No bullet points on slides; this is the spoken arc, not a deck outline.
  - Every claim that could be challenged needs a proof point.

  Output: the full arc, then a 3-bullet "rehearsal note" flagging the riskiest parts.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{event}}"
  - "{{date}}"
  - "{{duration}}"
  - "{{audience}}"
  - "{{event_theme}}"
  - "{{voice_notes}}"
  - "{{north_star}}"
  - "{{constraints}}"
  - "{{admired_talks}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: CEO, Linden AI
  event: SupportWorld Live, opening keynote
  date: June 3, 2026
  duration: 25 minutes
  audience: 3,000 customer support leaders, mostly VPs and directors at $50M-$2B ARR companies
  event_theme: "The Operating Model"
  voice_notes: Maya speaks in short, declarative sentences. Hates jargon. Uses one extended customer story per public talk. Reads as plainspoken, not folksy.
  north_star: Most support orgs are budgeting for 2026 as if AI doesn't exist; the ones that aren't are quietly winning the talent war.
  constraints: Cannot name two specific customers (under MNDA). Series B unannounced. Cannot reference any competitor by name.
  admired_talks: Tobi Lütke at Shopify Unite 2019; Andy Grove's "only the paranoid survive" speech.
exampleOutput: |
  THROUGH-LINE
  The companies winning the AI-support shift aren't the ones spending the most on tools. They're the ones who rebuilt their operating model before the budget cycle.

  OPENING (90 seconds)
  "I want to start with a number. Forty hours. That's how long the senior support team at one of our customers spent last year resolving the same category of ticket — every week. They had thirty engineers who outranked them in pay and prestige writing the software that produced those tickets, and they were the cleanup crew. This year, they spend zero hours on those tickets. They spend thirty-five hours reviewing what the agents did. The job didn't go away. It moved up. And no one in their finance team knows yet."

  ACT ONE — STAKES
  Beat 1: The category shifted in 18 months and most operating models haven't moved. Show the deflection-rate chart, but say the chart misses the point.
  Beat 2: The 2026 budget cycle is happening right now in this room. Most of you are budgeting for headcount as if the last 18 months didn't happen. (Pause. Let it land.)
  Beat 3: The companies that aren't doing that are quietly poaching your senior people. Name the pattern without naming the customers.

  ACT TWO — TURN
  Beat 1: What changed isn't the model. It's that the model can now close the ticket. Show the shift from copilot to agent in plain English.
  Beat 2: The data from 140 deployments. 61% deflection. 92% gross retention. Then: "These numbers are not the story. The story is what those 140 teams reorganized."

  ACT THREE — STAKES
  Beat 1: Three things to do Monday. Audit which tickets a senior person should never see. Decide what review work is worth keeping a human in. Stop hiring for the bottom of the org chart.
  Beat 2: One thing to stop doing. Stop measuring deflection rate as if it were the goal. It's a side effect.
  Beat 3: The talent question. Your senior support people will leave if they spend another year doing entry-level work. Most of them already know.

  CLOSE (60 seconds)
  "Two years from now, half the rooms like this one will be empty because the function got cut. The other half will be standing room only, because the people in this work will be the most valuable operators in their companies. Which room you're in is being decided in the budget you write next month. Thank you."

  QUOTABLE MOMENTS
  - "The job didn't go away. It moved up. And no one in their finance team knows yet."
  - "Most of you are budgeting for headcount as if the last 18 months didn't happen."
  - "Deflection rate is not the goal. It's a side effect."
  - "Stop hiring for the bottom of the org chart."
  - "Two years from now, half the rooms like this one will be empty."

  STRUCTURAL MOVE
  The "forty hours" number from the opening returns three times: once at the turn (when it becomes "thirty-five hours of review"), once in Act Three (when it becomes "the work your senior people actually want"), and once in the close (implied — the rooms that will be full are the rooms full of those people). The number anchors the talk and gives the close its lift.

  REHEARSAL NOTES
  - The "no one in their finance team knows yet" line is the riskiest. It will land or fall flat depending on delivery — Maya should say it conversationally, almost as an aside, not as an applause line.
  - The Act Three "stop hiring for the bottom of the org chart" sentence will be quoted out of context as anti-worker. Have a clean follow-up planned for press.
  - The 25-minute runtime is tight. Cut Beat 3 of Act One first if running long; the talk works without it.
tips:
  - "The through-line test: can the principal say it in one sentence? If not, the talk has two talks fighting each other."
  - "Write the opening and the close first. Then build the middle to earn them."
  - "The 'quotable moments' should be distributed, not stacked. Three lines in a row that beg to be tweeted ruin the rhythm."
  - "Match the principal's spoken voice, not their email voice. Have them read a section out loud — what they trip over needs rewriting."
  - "Cut at least 20% before rehearsal. Talks always run long, and edits in the wings are worse than edits at the desk."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - linkedin-post-executive
  - byline-article-outline
  - conference-talk-proposal
  - interview-prep-doc
tags:
  - keynote
  - executive-comms
  - speechwriting
  - narrative
  - public-speaking
---
