---
title: "Create a discussion guide for an unmoderated UX research session"
slug: ux-research-discussion-guide
function: design
role: ux-design
description: "Generate a tight, bias-aware discussion guide for an unmoderated study (UserTesting, Maze, Lyssna) with screener questions, tasks, and follow-ups that work without a moderator in the room."
useCase: "Use this when running unmoderated remote tests where you can't probe in real time. Bad guides produce useless videos; good ones produce findings you can act on. Best for prototype validation, onboarding tests, and IA tree tests where you have 15–30 minutes of a participant's time and one shot to learn what you need."
prompt: |
  You are a senior UX researcher writing a discussion guide for an unmoderated study. The guide must work without a human moderator — every question and task must be self-explanatory and bias-resistant.

  Context:
  - Product / prototype: {{product}}
  - Research goal (one sentence): {{goal}}
  - Specific questions you want answered: {{questions}}
  - Target participant: {{target_participant}}
  - Platform: {{platform}}
  - Session length budget (minutes): {{session_length}}

  Produce the guide in this exact structure:

  1. Screener (3–5 questions). Multiple choice where possible. Include at least one "trap" question that filters out participants who don't actually match the target.
  2. Warm-up (2 questions, ~3 min). Get the participant talking and oriented — their context, not your product yet.
  3. Tasks (2–4 tasks, scoped to fit the session length). For each task: a realistic scenario, the task instruction (action-oriented, no leading language), success criteria for the participant, and a "post-task probe" — 1–2 follow-up questions that work even when no one's listening.
  4. Wrap-up (2–3 questions). Capture overall impressions, comparisons to current tools, and willingness to use.
  5. Bias check. List 2–3 specific phrases or framings you avoided in this guide and why.

  Rules:
  - Never ask "Did you find that easy?" — ask "What did you do to figure that out?"
  - Never describe what something is supposed to do before the task. Let the participant discover it.
  - Avoid "How would you feel if..." — ask about past behavior, not hypothetical reactions.
  - Tasks should describe outcomes ("Find a robot that needs maintenance"), not UI paths ("Click on Maintenance").

  Output: the guide, structured exactly as above.
variables:
  - "{{product}}"
  - "{{goal}}"
  - "{{questions}}"
  - "{{target_participant}}"
  - "{{platform}}"
  - "{{session_length}}"
exampleInput: |
  product: Cresta Health patient intake prototype (Figma) — replaces a paper form for new-patient appointments
  goal: Validate that patients can complete intake on their own phone in the waiting room without staff help
  questions: Can they finish in <8 minutes? Do they understand consent language? Do they trust giving insurance info on a phone they were handed?
  target_participant: US adults 25–65 who've seen a new doctor in the past 12 months and are not in healthcare professionally
  platform: UserTesting (mobile only)
  session_length: 20
exampleOutput: |
  1. Screener
  - In the past 12 months, have you started seeing a new doctor or specialist? (Yes / No — exclude No)
  - Do you or anyone in your immediate household work in healthcare, health tech, or medical insurance? (Yes / No — exclude Yes)
  - When you last visited a new doctor's office, what did you fill out before being seen? (paper forms / a tablet they handed me / nothing / I don't remember — exclude "I don't remember")
  - Which of these have you used on your phone in the past month? (banking app / health insurance app / DMV / food delivery — multi-select; trap: must select at least one)
  - On a scale of 1–5, how comfortable are you entering personal information on a phone someone hands you in a waiting room? (any answer ok; we want a spread)

  2. Warm-up (~3 min)
  - Walk me through what happened the last time you visited a new doctor's office, from arriving to being called back. What was that like?
  - When you've been handed forms or a tablet at a doctor's office, what's gone well? What's been frustrating?

  3. Tasks (~14 min)

  Task 1 — Start intake
  Scenario: "You've just arrived at a new doctor's office. The receptionist hands you this phone and asks you to complete intake before you're seen. Begin."
  Success: Participant reaches the first form field.
  Probes: What did you expect to happen when you started? Anything surprise you on this first screen?

  Task 2 — Add insurance
  Scenario: "Continue through the intake. When you reach insurance, use this card." (Show participant a generated insurance card image with name, ID, group.)
  Success: Insurance fields populated correctly.
  Probes: Was there anything you weren't sure how to enter? Anything you felt unsure about sharing?

  Task 3 — Consent
  Scenario: "Keep going until you reach the consent step. Decide whether you'd sign and continue, or stop. Do whatever you'd actually do."
  Success: Participant makes an explicit choice to sign or decline.
  Probes: In your own words, what were you agreeing to? Was anything in that section unclear or concerning?

  4. Wrap-up
  - How did this compare to filling out forms at doctors' offices you've been to recently?
  - If your own doctor's office switched to this tomorrow, what would you want changed first?
  - Was there a moment in this you wanted to stop or hand the phone back? When?

  5. Bias check
  - Avoided "Was that easy?" throughout — replaced with "What did you do to figure that out?" which captures behavior even when participants are being polite.
  - Avoided describing the prototype as "new" or "improved" — participants praise novelty by default.
  - Avoided "Would you use this?" in wrap-up — replaced with a behavioral comparison to their actual recent experiences, which is far more predictive.
tips:
  - "Read every task instruction out loud. If you can hear yourself leading the participant, rewrite it."
  - "Trap screener questions catch 10–20% of unqualified participants on most platforms. Always include one."
  - "Post-task probes work because participants narrate while completing them. You'll hear what was hard even if they say it was easy."
  - "Cap unmoderated sessions at 20 minutes. Quality drops sharply after that even with engaged participants."
  - "After fielding, watch the first 3 sessions before launching to all 15. You'll catch a broken task or unclear instruction before it ruins the dataset."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - usability-test-rewrite
  - ia-card-sort-summary
  - heuristic-evaluation
tags:
  - ux-research
  - discussion-guide
  - unmoderated-testing
  - usability-testing
  - research-ops
---
