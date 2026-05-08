---
title: "Announce an HR policy change without triggering panic"
slug: hr-policy-update-comms
function: hr
role: internal-comms
description: "Draft a clear, calm internal announcement for a policy change that explains the what, why, and what-it-means-for-you in plain English."
useCase: "Use this when rolling out a change to PTO, remote work, benefits, performance, or any policy that affects how people work day-to-day. The wrong announcement creates Slack-storms and Glassdoor reviews. This prompt produces a version that gets ahead of the obvious questions and treats employees like adults."
prompt: |
  You are a senior internal communications partner who specializes in HR change comms. Write the announcement for a policy change.

  Context:
  - Policy area: {{policy_area}} (e.g., PTO, remote work, performance review cadence, parental leave)
  - What's changing: {{what_changes}}
  - Effective date: {{effective_date}}
  - Why now (the real reason, even if you'll soften it): {{rationale}}
  - Who's affected: {{audience}}
  - Likely emotional reaction: {{anticipated_reaction}} (e.g., positive, mixed, negative)
  - Sender: {{sender}} (e.g., CPO, CEO, Head of People)

  Output four artifacts:

  1. **Email announcement (250–400 words)**
     - Subject line that doesn't bury the lede or sound corporate
     - Open with what's changing in one sentence
     - Then: why, when, what to do, where to ask questions
     - End with a real human signoff

  2. **Slack version (under 150 words)**
     - Punchier, with a link to the full email or FAQ
     - Acknowledge the change visibly — don't sneak it in

  3. **Anticipated FAQ (8–12 questions)**
     - The questions people will actually ask, including the uncomfortable ones
     - Plainspoken answers, not legalese
     - Mark any "we don't know yet" honestly

  4. **Manager talking points (5–7 bullets)**
     - What managers should be ready to say in their next 1:1s
     - Including how to handle the most likely objection

  Tone rules:
  - No "we are excited to announce" if the news isn't actually exciting
  - No corporate euphemism — if it's a cut, say it's a cut
  - Acknowledge tradeoffs explicitly. People can tell when you're hiding the cost
  - Match the emotional register of the change. Big changes get big acknowledgment
variables:
  - "{{policy_area}}"
  - "{{what_changes}}"
  - "{{effective_date}}"
  - "{{rationale}}"
  - "{{audience}}"
  - "{{anticipated_reaction}}"
  - "{{sender}}"
exampleInput: |
  policy_area: Remote work / RTO
  what_changes: Moving from fully remote to 3 days/week in-office (Tue/Wed/Thu) for all employees within 50 miles of an office. Fully remote employees outside that radius unaffected.
  effective_date: September 8 (about 10 weeks notice)
  rationale: Leadership believes collaboration and onboarding have suffered — new hire ramp time up 40%, cross-team projects stalling. Real driver also includes a real estate commitment and exec preference, but the productivity data is genuine.
  audience: All 850 employees
  anticipated_reaction: Negative. Company hired aggressively as remote-first in 2021–2023. Many people moved within 50 miles but expected to stay remote.
  sender: Maya Chen, Chief People Officer
exampleOutput: |
  # 1. Email announcement

  **Subject:** Returning to the office 3 days a week, starting September 8

  Team,

  Starting September 8, employees living within 50 miles of an office will be in the office Tuesday, Wednesday, and Thursday. If you live outside that radius, your work setup doesn't change.

  I want to be straight with you: this is a real change from how we've operated since 2021, and I know many of you took roles, signed leases, and made life decisions on the assumption things would stay the way they were. That trust matters to us, and I'm not going to pretend otherwise.

  Here's the why. Over the last 18 months we've watched two things slow down: how quickly new hires get productive (ramp time is up about 40%), and how cross-team projects move when no one is ever in the same room. We've tried to fix this with more offsites and more Zoom; it hasn't worked. Bringing people together three days a week is the change we believe will fix it.

  We also have an honest tradeoff to name. We have office leases, and exec leadership has a strong belief that the next stage of the company runs better in person. Both of those are real inputs to this decision, alongside the productivity data.

  **What you need to do:**
  - Mark Tue/Wed/Thu in-office on your calendar starting Sept 8
  - If you have a hardship case (medical, caregiving, or a recent move you made under different expectations), submit an exception request via the form linked in the FAQ by August 1. We will review every one.
  - Talk to your manager in your next 1:1 — they have detailed talking points

  **Where to ask questions:**
  - FAQ: [link]
  - Open Q&A with me and the exec team: Thursday, 11am PT
  - Anonymous question form: [link]

  I'll be honest — I expect some of you will decide this isn't the company for you anymore, and I respect that. For those of you who stay, I'm grateful, and I'll work to make the in-office days worth the commute.

  — Maya

  # 2. Slack version

  > Big policy change today: starting **Sept 8**, employees within 50 miles of an office will be in **Tue/Wed/Thu**. Folks outside 50 miles, no change.
  >
  > I know this isn't the news a lot of you wanted. The full email is in your inbox — it includes the why, the exception process, and an open Q&A on Thursday at 11am PT.
  >
  > I'll be in #ask-people most of today. — Maya

  # 3. Anticipated FAQ

  **Q: I moved within 50 miles assuming we'd stay remote. Is there an exception process?**
  Yes. Submit by Aug 1 via the form. We'll review every case. Recent moves made under different expectations are explicitly in scope.

  **Q: What counts as "within 50 miles"?**
  Driving distance from your registered home address to your assigned office, per Google Maps. Edge cases get reviewed individually.

  **Q: What if I have a medical or caregiving need?**
  Same exception form. These will be handled by People Ops in confidence and processed within 2 weeks.

  **Q: Will this expand to 4 or 5 days later?**
  No current plan to. If that ever changes, you'll hear it directly from leadership with notice — not as a surprise.

  **Q: Are there layoffs coming?**
  No. This is not a stealth layoff. We are not using attrition from this policy to hit a headcount target.

  **Q: What about employees we hired explicitly as remote-first?**
  If your offer letter says "remote" without an office assignment, you're unaffected regardless of distance. Check with your manager if unclear.

  **Q: Will compensation change for people who relocate to stay remote?**
  No retroactive comp changes. Future moves follow our standard geo-comp policy.

  **Q: Will the offices actually have desks for everyone?**
  Yes. We've audited capacity. Each affected employee will have a permanent or hot-desk assignment by Aug 25.

  **Q: What if my team is fully remote even though we're within 50 miles?**
  You're still expected in-office Tue/Wed/Thu. The point is cross-team and onboarding interaction, not just team interaction.

  **Q: Is exec leadership in 3 days too?**
  Yes, including the CEO. Same policy applies.

  **Q: Can I appeal a denied exception?**
  Yes, to the CPO directly. Decisions will be in writing.

  # 4. Manager talking points

  - Lead by acknowledging this is a real change, not by defending it. Say "I know this isn't what a lot of you wanted to hear."
  - Be honest about the rationale, including the real estate and exec-preference piece. People will respect honesty more than spin.
  - Don't promise exceptions you can't grant. Point them to the form.
  - If someone says they'll quit: take it seriously, don't talk them out of it in the moment, and loop in your HRBP within 24 hours.
  - For the team member who moved recently — flag them to People Ops proactively. Don't wait for them to file.
  - The most likely objection is "you told us we were remote-first." The honest answer: "That was true then. The business needs are different now, and we're giving 10 weeks of notice and a real exception process because we know the impact." Don't try to argue the original promise away.
tips:
  - "Match emotional register to the change. A small policy tweak gets a 4-paragraph email. A return-to-office mandate gets honesty, an exception process, and a live Q&A."
  - "Always include the real reason, not just the polished one. Employees can smell sanitized comms from a mile away, and the cynicism it creates costs more than the unflattering truth."
  - "Pre-brief skip-levels and managers 24 hours before the all-hands announcement. They get blindsided in 1:1s, and that's where Glassdoor reviews are born."
  - "The FAQ should include the question you don't want to answer. Skip it and someone will post it in #all-hands during the Q&A anyway."
  - "After the announcement, track sentiment in the first 72 hours via your existing engagement tool or a quick pulse. Course-correct in week 2, not month 3."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - employee-handbook-section
  - salary-band-communication
  - manager-feedback-summary
tags:
  - internal-comms
  - policy-change
  - change-management
  - announcement
  - employee-relations
---
