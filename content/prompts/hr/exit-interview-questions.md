---
title: "Design exit interview questions that surface real attrition drivers"
slug: exit-interview-questions
function: hr
role: people-ops
description: "Generate a tailored exit interview question set that gets past polite answers and uncovers the actual reasons people leave."
useCase: "Use this when an employee resigns and you want exit data you can actually act on. Generic exit interviews produce generic answers — 'better opportunity' tells you nothing. This prompt builds a question set tuned to the role, tenure, and signals you've already picked up, so you walk out with a clear root cause."
prompt: |
  You are an experienced People Ops leader who has run hundreds of exit interviews. Build a tailored exit interview question set for a departing employee.

  Context:
  - Role and level: {{role_level}}
  - Tenure: {{tenure}}
  - Manager: {{manager}}
  - Stated reason for leaving: {{stated_reason}}
  - Known signals or context: {{known_signals}} (e.g., recent reorg, manager change, missed promotion, team conflict)
  - Destination (if known): {{destination}}

  Build a 25–35 minute interview structured in four parts:

  1. **Opening (2–3 questions)** — Lower defenses, set the tone that this is for the company to learn, not a referendum on them.
  2. **Decision narrative (4–6 questions)** — Walk through the timeline. When did they first start considering leaving? What changed? What would have caused them to stay?
  3. **Specific probes (5–8 questions)** — Targeted at the known signals and stated reason. Use behavioral interview techniques: ask for specific examples, not opinions.
  4. **Closing and net promoter (3–4 questions)** — Would they refer a friend? What should we tell their replacement? What's one thing we should change?

  For each question:
  - State the question as you'd ask it
  - Add a one-line note on what you're listening for
  - Flag any follow-up probes if the answer is short or evasive

  Avoid: leading questions, yes/no questions, HR jargon, anything that sounds like a survey.

  Also output:
  - 3 questions to AVOID with this specific person and why
  - A short note on whether the manager should be informed of any answers, or kept aggregated
variables:
  - "{{role_level}}"
  - "{{tenure}}"
  - "{{manager}}"
  - "{{stated_reason}}"
  - "{{known_signals}}"
  - "{{destination}}"
exampleInput: |
  role_level: Senior Software Engineer (L5)
  tenure: 2 years 4 months
  manager: Priya Shah (became their manager 5 months ago after reorg)
  stated_reason: "Better opportunity — more senior role at a smaller company"
  known_signals: Was passed over for L6 promotion in last cycle. Two of their close peers left in the last 6 months. Engagement survey scores for their team dropped 18 points after the reorg.
  destination: Series B startup, Staff Engineer title
exampleOutput: |
  ## Exit Interview — Senior Engineer (L5), 2.4 yr tenure

  **Format:** 30 minutes, video, recorded with consent. Frame at the top: "This is for us to learn — your answers won't go to Priya unless you want them to."

  ### Part 1 — Opening

  1. "Walk me through how the new role came about — did you go looking, or did it find you?"
     *Listening for:* Active vs. passive search. Active = something pushed them out. Passive = something pulled them away (or both).

  2. "What's the new team most excited about you bringing?"
     *Listening for:* What they think they couldn't do here. This is often the real gap.

  ### Part 2 — Decision narrative

  3. "When was the first moment you remember thinking 'I might not be here in a year'?"
     *Probe if short:* "What was happening at work that week?"

  4. "Between then and now, was there a specific moment the decision felt made?"
     *Listening for:* Promotion cycle, peer departure, 1:1 with Priya, comp conversation.

  5. "If I could rewind to that moment and change one thing, what would have kept you?"
     *Listening for:* The actual lever. Most people give you the truth here if Q3 and Q4 went well.

  6. "Did you talk to anyone here about leaving before you made the decision? Why or why not?"
     *Listening for:* Whether they felt safe raising concerns. With Priya only 5 months in, this is critical.

  ### Part 3 — Specific probes (tuned to signals)

  7. "Tell me about the L6 promotion conversation. Walk me through it from your side."
     *Probe:* "What did you take away from how it was communicated?"

  8. "When [peers] left, what did the team conversation sound like? Did anything change after?"

  9. "How was the transition from your previous manager to Priya? Be specific — what's an example of something that worked, and one that didn't?"
     *Listening for:* Whether the reorg broke a working relationship or context they relied on.

  10. "Engagement scores on your team dropped after the reorg. Does that match your experience? What do you think drove it?"

  11. "The new role is Staff. Was the title itself a factor, or is it about the work?"
      *Listening for:* If it's the title, we have a leveling problem. If it's the work, we have a scope problem.

  ### Part 4 — Closing

  12. "Would you refer a strong engineer friend to us today? Why or why not?"
  13. "If we hire your replacement, what's the one thing we should tell them on day one?"
  14. "What's one thing this company should start doing, and one thing it should stop?"
  15. "Is there anything you wish I'd asked that I didn't?"

  ### Avoid with this person:

  - "Was your compensation competitive?" — The destination title jump tells us comp is downstream of scope. Asking puts them on the defensive about negotiating.
  - "Did Priya support your growth?" — Too direct, and they'll either soften it or unload. Q9 gets there indirectly.
  - "Would you ever come back?" — Don't open the boomerang door at the exit; do it at the 6-month mark.

  ### Manager debrief note:

  Aggregate Q9, Q10, Q14 with other recent departures from Priya's team before sharing anything specific. With three departures in six months, a pattern read is more useful — and safer for this person — than a single-thread feedback loop to Priya.
tips:
  - "Run exit interviews at least 1 week after the resignation, not on the last day. Emotional distance produces honest answers; nostalgia on the last day produces polite ones."
  - "Always offer the choice: 'Do you want any of this attributed back to your manager?' Honor it. Trust here pays back across the org through alumni."
  - "Aggregate exit data quarterly and share the themes with leadership. One exit is an anecdote; five with the same theme is a system problem."
  - "Have someone other than the direct manager and skip-level run the interview. People Ops or a peer from another team gets more honest answers."
  - "End every interview with: 'Can I check in with you in 6 months?' Boomerang hires and referrals come from people who left well."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - manager-feedback-summary
  - performance-review-self-assessment
  - termination-talking-points
tags:
  - exit-interview
  - retention
  - people-ops
  - attrition
  - employee-experience
---
