---
title: "Write a weekly team update email from bullet points"
slug: team-update-email
function: operations
role: ops-management
description: "Transform a list of bullet-point updates into a polished, well-structured weekly team update email that informs, energizes, and drives action."
useCase: "Use this prompt every week to turn your rough notes into a team communication that people actually read. Provide your bullet points and context; get a concise, professional email with the right tone for your team culture."
prompt: |
  You are an experienced operations leader and clear business communicator. Write a weekly team update email based on the bullet points and context provided below.

  **Team name:** {{team_name}}
  **Your name and title:** {{sender_name_title}}
  **Audience:** {{audience}} (e.g., "direct team of 12 engineers", "entire 80-person department", "remote team across 3 time zones")
  **Week of:** {{week_of}}
  **Tone:** {{tone}} (e.g., "energetic and direct", "formal and precise", "casual and human", "balanced and professional")
  **This week's bullet-point updates:** {{bullet_points}}
  **One thing you want people to feel or do after reading this:** {{desired_outcome}}

  Write a team update email following these guidelines:

  **Structure:**
  1. **Subject line** — Specific and scannable. Include the week date. Never use "Weekly Update" alone.
  2. **Opening** (1–2 sentences) — Set the tone. Acknowledge something real about the week — a win, a challenge, a moment. Don't start with "I hope this finds you well."
  3. **This week's highlights** — 3–5 items, each written as a short paragraph or punchy bullet. Prioritize what matters most. Celebrate specific people or teams by name where credit is due.
  4. **In progress / Watch items** — 2–3 items that are actively running or need the team's attention. Be honest about where things are hard.
  5. **Looking ahead** — What's coming next week that the team should know about or prepare for.
  6. **Action items** (if any) — Numbered list with clear owners and deadlines. Only include if there are genuine actions needed from this email.
  7. **Closing** — One sentence. Human. Not a platitude.

  **Writing rules:**
  - Maximum 400 words in the email body
  - Write at a 10th-grade reading level — no corporate jargon
  - Be specific: use real numbers, names, and outcomes rather than vague language
  - If something went wrong this week, acknowledge it plainly — teams trust leaders who are honest
  - Vary sentence length — mix short punches with longer explanations
  - The email should feel like it was written by a person, not assembled by a committee
variables:
  - "{{team_name}}"
  - "{{sender_name_title}}"
  - "{{audience}}"
  - "{{week_of}}"
  - "{{tone}}"
  - "{{bullet_points}}"
  - "{{desired_outcome}}"
exampleInput: |
  team_name: Platform Engineering
  sender_name_title: Ravi Nair, VP Engineering
  audience: Platform Engineering team of 22 engineers + 3 EMs, fully remote
  week_of: November 4, 2024
  tone: direct, honest, with a little warmth
  bullet_points: |
    - Shipped the new data pipeline to prod Thursday — 6 weeks of work, team crushed it
    - Incident Tuesday: database failover took 47 minutes instead of our 15-min SLA. Root cause: stale config in the runbook. Postmortem is scheduled for Monday.
    - Hiring: 2 offers accepted this week (both senior SWEs)! Start dates in December.
    - Sprint velocity was down this week — 3 people out sick, expected
    - Reminder: all 2025 roadmap input due by EOD Friday Nov 8
    - Next week: all-hands on Tuesday, Q4 retrospective Thursday
  desired_outcome: Team feels proud of the pipeline ship but also takes the incident seriously. And actually submits their roadmap input by Friday.
exampleOutput: |
  **Subject: Platform Engineering — Week of Nov 4 | Pipeline shipped, incident debrief, 2 new hires**

  This was a week of highs and lows — and I want to be straight with you about both.

  **The highlight:** After six weeks of work, the new data pipeline is live in production. This is a big deal. The data foundation this team just built is going to unlock a lot of what comes next in 2025. Thank you to everyone who pushed through the final stretch — you know who you are.

  **The hard part:** We had an incident on Tuesday. Database failover took 47 minutes — more than 3x our SLA. The root cause was a stale configuration in our runbook. That's on us, and it's fixable. Postmortem is scheduled for Monday. I want every EM and on-call eng in the room. We'll come out of it with a cleaner runbook and a better process.

  **Good news on hiring:** Two senior SWE offers accepted this week. Both starting in December. We'll have more details on teams and onboarding soon — excited to grow the bench.

  **In progress:**
  - Sprint velocity dipped this week with three folks out sick — totally expected, no concern
  - Prepping for Q4 retro (Thursday next week) — start thinking about what worked and what didn't

  **Looking ahead:**
  - All-hands Tuesday — attendance expected, calendar invite has the Zoom link
  - Q4 retrospective Thursday — EMs are facilitating, format coming Monday
  - **Roadmap input due Friday Nov 8 EOD** — if you haven't filled out the 2025 input form, please do it this week. Every team's voice matters in this process.

  See you Tuesday.
  Ravi
tips:
  - "The subject line is the most important line — make it specific enough that someone could search their inbox for it in 6 months and find it."
  - "Never skip the 'hard part' — teams that only hear about wins stop trusting their leadership. Brief, honest acknowledgment of a challenge builds more credibility than any highlight."
  - "Keep it under 400 words. If it's longer, you're probably trying to communicate too many things at once. Cut the lowest-priority items."
  - "Naming specific people or teams for their contributions is the single highest-leverage thing you can do in a team update. Be specific: 'the data pipeline team' is less powerful than 'Marcus, Yuki, and the infra squad.'"
complexity: beginner
modelRecommendation: claude-haiku
relatedSlugs:
  - meeting-notes-summary
  - cross-functional-brief
  - internal-announcement
  - okr-draft
tags:
  - communication
  - email
  - team-management
  - leadership
  - operations
---
