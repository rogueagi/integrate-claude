---
title: "Internal announcement of an executive change"
slug: company-announcement-internal
function: pr-comms
role: executive-comms
description: "Draft an internal email announcing an executive hire, departure, or role change that respects the team and lands the news cleanly."
useCase: "Use when announcing an executive arrival, departure, or restructuring internally. The tone has to thread three needles — celebrate the news, acknowledge what's hard, and not leak. Output reads as honest and confident, not corporate."
prompt: |
  You are an internal communications lead at a company between 200 and 2,000 employees. Draft an internal email from {{sender_name}} ({{sender_title}}) announcing {{change_type}}.

  Inputs:
  - The change: {{change_summary}} (who, what role, effective when)
  - Background context: {{background}} (search process, departure reason, restructure rationale)
  - What the team is likely worried about: {{team_concerns}}
  - What the team should not be worried about: {{reassurances}}
  - What we cannot say: {{constraints}} (NDA, severance terms, ongoing search)
  - Tone: {{tone}} (warm, sober, energetic, depending on the news)
  - External announcement timing: {{external_timing}}

  Structure:

  1. SUBJECT LINE
  Specific. "An update on our leadership team" not "Important announcement." If it's a hire, name them. If it's a departure, signal that without sounding ominous.

  2. THE NEWS (paragraph 1)
  The change in two sentences. Effective date. No suspense. No "I want to share something important."

  3. THE WHY (paragraph 2)
  The reason, told as honestly as the constraints allow. If a leader is leaving, do not invent narratives. "After five years, X has decided to step away" is enough.

  4. THE WHO (if a hire)
  Two short paragraphs on the new person. Not a resume. One thing they've done that's relevant, one thing about how they think or work that the team will recognize. End with one specific reason they joined.

  5. WHAT CHANGES, WHAT DOESN'T
  The thing the team actually wants to know. Reporting lines. Org structure. Open roles. Strategy continuity.

  6. WHAT'S NEXT
  The next 30 days. First all-hands. First 1:1s. Office hours.

  7. CLOSE
  A grounded line. Not a rallying cry. Sign-off in the sender's voice.

  Hard rules:
  - Do not say "We're sad to see them go" if you aren't.
  - Do not say "We are excited" twice. Pick one paragraph for it, or don't use the word.
  - Acknowledge what's awkward where you can. Silence on the obvious thing creates rumor.
  - If there's a public announcement coming, say when, so people don't read it on LinkedIn first.
  - Do not write "We can't share more at this time" without saying when more will be shared.

  Output: subject line, then full email. Then a 2-bullet "what to expect after sending" note (likely Slack reactions, what people will ask in 1:1s).
variables:
  - "{{sender_name}}"
  - "{{sender_title}}"
  - "{{change_type}}"
  - "{{change_summary}}"
  - "{{background}}"
  - "{{team_concerns}}"
  - "{{reassurances}}"
  - "{{constraints}}"
  - "{{tone}}"
  - "{{external_timing}}"
exampleInput: |
  sender_name: Maya Okafor
  sender_title: CEO, Linden AI
  change_type: VP of Engineering departure and successor announcement
  change_summary: VP Eng Devon Reyes is leaving after three years. New VP Eng Priya Acharya (previously Director of Eng at Stripe) starts April 28. Devon's last day is April 24.
  background: Devon led the rebuild of the agent platform last year and decided to take time off before his next thing. The search ran for four months. Priya was in the final two and Devon was part of the interview loop.
  team_concerns: Eng team is 60 people, mid-roadmap; concerned about stability, performance reviews scheduled for May, and whether Priya will reorg.
  reassurances: No reorg planned in first 90 days. Performance reviews proceed on schedule. Roadmap unchanged.
  constraints: Cannot share Devon's next move — not finalized. Cannot share Priya's compensation or specifics of why she chose us over the other late-stage offer she had.
  tone: Warm but sober. The team likes Devon.
  external_timing: External LinkedIn announcement from Maya and Priya goes out at 9am ET tomorrow.
exampleOutput: |
  Subject: Devon is moving on — Priya Acharya joining as VP Engineering

  Team,

  Two pieces of news that go together. Devon Reyes is leaving Linden after three years. His last day is April 24. Priya Acharya, most recently Director of Engineering at Stripe, is joining as our new VP Engineering on April 28.

  Devon and I started talking about this in November. He led the rebuild of the agent platform that took us from 40 customers to 140, and he's decided to take time off before whatever he does next. He's not telling me what that is yet, and I don't blame him. We've worked together long enough that I trust the call. Devon will spend his last two weeks on the handoff — including spending time with each of his directs.

  Priya ran payments engineering at Stripe for five years and built the team that scaled their card-present infrastructure across two regulatory geographies. What I noticed in the interviews was how she talks about engineers who are stuck. She doesn't talk about systems. She talks about the human in front of the system. Devon was part of the final loop and was the strongest yes in the room.

  What changes: Priya picks up the VP role and reporting structure stays the same. What doesn't change: the roadmap through end of Q3 is locked. Performance reviews continue as scheduled in May — Priya has the calibration data and will run them with the people-team's support.

  The first 30 days: Priya will spend her first two weeks in 1:1s with every engineering manager and a sample of ICs. We will not reorg in her first 90 days. The April 30 all-hands is on the calendar — she'll be there to introduce herself and field questions.

  Tomorrow morning at 9am ET, Priya and I are posting about this on LinkedIn. You'll see it before customers do, but only barely. If you have questions for me before then, my next office hours are this Thursday.

  Three years is a long time at this stage. Devon shipped the company we have today. We'll do the goodbye properly on the 24th.

  — Maya

  What to expect after sending:
  - Slack reactions skew warm. Expect a wave of comments under Devon's name in #general and a smaller second wave for Priya later in the day. Devon should plan to react to a few rather than reply to all.
  - Top three questions in 1:1s this week: (1) Is the roadmap really locked? (2) Will my manager change? (3) What did Devon really do here. Have a one-line answer ready for each.
tips:
  - "Send the email to the executive who's leaving 24 hours before sending company-wide. They get to read their own goodbye before the team does."
  - "Avoid 'we wish them well in their next chapter' phrasing — it reads as legal-cleared rather than human. Say something specific."
  - "Time the send for late morning, never end of day. Late-day sends maximize the rumor cycle overnight."
  - "If you can't say why someone is leaving, say so explicitly: 'I'm not going to share more on Devon's next move because it isn't his to share yet.' Acknowledged silence is better than vague silence."
  - "Have a Slack post ready in #general for 30 minutes after the email. Email is for the news; Slack is for the room."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - cofounder-letter-customer
  - layoff-external-statement
  - executive-bio-rewrite
tags:
  - internal-comms
  - executive-comms
  - announcement
  - leadership
  - email
---
