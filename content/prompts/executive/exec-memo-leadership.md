---
title: "Draft an executive memo to the leadership team"
slug: exec-memo-leadership
function: executive
role: comms
description: "Generate a tight, decision-oriented memo to the leadership team that surfaces the issue, the recommendation, and the decision asked — in the format leaders actually read."
useCase: "Use this when you have something important enough to put in writing for the executive team — a strategic shift, a hard call, a new direction — and you don't want it to die in a meeting. A good written memo gets the team aligned before the conversation. This prompt produces a memo that respects the reader's time and forces the writer to take a position."
prompt: |
  You are a former Bezos-school executive who learned to write narrative memos for leadership decisions. Draft a memo from {{author}} to the {{company_name}} leadership team.

  Inputs:
  - Author: {{author}} ({{author_role}})
  - Memo topic: {{topic}}
  - The decision being asked of leadership: {{decision_asked}}
  - The context — what's happened, what's at stake: {{context}}
  - The recommendation the author is making: {{recommendation}}
  - The two strongest objections to the recommendation: {{objections}}
  - The deadline by which the decision needs to be made: {{deadline}}
  - Length: {{length}} (one-pager, two-pager, or six-pager)

  Structure the memo:

  ## Subject Line
  A subject that names the decision, not the topic. "Decision: kill SMB self-serve by March 31" beats "Update on SMB self-serve."

  ## TL;DR (3 sentences)
  - The situation in one sentence.
  - The recommendation in one sentence.
  - The decision asked of the room in one sentence.

  ## Why This Now
  Two paragraphs. The trigger that makes this a now-decision, not a someday-decision. If there is no real now, the memo should not be written.

  ## What We Know
  The relevant facts. Numbers where possible. Sources where claims are not obvious. No padding.

  ## The Recommendation
  The specific recommendation, stated as a verb. What changes, who owns it, by when, with what budget or scope.

  ## The Two Strongest Counter-Arguments (and the Author's Response)
  Address {{objections}} on the page. The reader knows them; pretending they do not exist hurts credibility. Engage with them honestly, then explain why the recommendation still stands.

  ## What Could Go Wrong
  Two or three real failure modes and the early-warning signal we will track for each.

  ## The Decision Asked
  Restate exactly what is being asked of leadership: approve / amend / reject. With a deadline.

  Optional appendix:
  - Detail tables, models, or supporting data that did not belong in the body.

  Style:
  - Sentences. No bullet-point soup. The body of the memo is paragraphs.
  - No buzzwords (synergy, holistic, "leverage" as a verb).
  - Plain language. A new VP joining next week should be able to follow it.
  - Take a position.
  - Length: appropriate to {{length}}. A one-pager is the default; six-pagers are for irreversible decisions.
variables:
  - "{{author}}"
  - "{{author_role}}"
  - "{{company_name}}"
  - "{{topic}}"
  - "{{decision_asked}}"
  - "{{context}}"
  - "{{recommendation}}"
  - "{{objections}}"
  - "{{deadline}}"
  - "{{length}}"
exampleInput: |
  author: Maya Chen
  author_role: COO
  company_name: Vantage Systems
  topic: SMB self-serve project
  decision_asked: approval to wind down SMB self-serve by March 31 and reassign the team
  context: 18-month experiment to build a self-serve SMB motion; $4M invested; conversion stuck at 0.4%; carrying cost ~$400K/month; team of 12 across product, eng, and growth
  recommendation: end the project March 31, redirect 9 of 12 team members to healthcare and the AI compliance module, transition the remaining 3 with severance
  objections: "We're close — one more pricing test could unlock it"; "Killing it sends the wrong signal to the team about how we treat experiments"
  deadline: decision required by Friday March 7 to allow a March 31 wind-down with respectful comms
  length: two-pager
exampleOutput: |
  **Subject: Decision: wind down SMB self-serve by March 31**

  ## TL;DR
  SMB self-serve has not converted at the rate required to be a real motion, despite eighteen months of experimentation and $4M of investment. I recommend we wind it down by March 31, redirect nine of the twelve people to the healthcare and AI compliance work where their impact will be greater, and transition the remaining three with severance and active placement support. I am asking for approval by end of day Friday March 7.

  ## Why This Now
  Three things have changed in the last 60 days. First, the latest pricing-and-onboarding test moved conversion from 0.3% to 0.4% — a real improvement, but still 8x below the rate we'd need to make this motion economical. Second, our cash plan now requires breakeven by Q4, and the $400K monthly carrying cost is the largest single line of spend that has not produced ROI. Third, the AI compliance module is short-staffed and slipping; the team we have invested in self-serve has skills that map directly to that work.

  Continuing without changing direction is the most expensive option on the table. Each month we hold the team in place is $400K of cost and one month of compounding lag on the project that is genuinely going to determine 2027.

  ## What We Know
  - 18 months of experimentation, $4.0M cumulative spend.
  - Conversion: 0.4% from free to paid (latest test). Industry benchmark for products at our price point: 2–4%.
  - Average ACV in the SMB segment: $480 — well below the $1,200 floor the original business case required.
  - Team: 12 people. Six engineers, three product/design, two growth, one CSM.
  - Carrying cost: roughly $400K/month fully loaded.
  - Customer count: 340 paying SMB customers, mostly low-engagement, churn risk meaningful.

  ## The Recommendation
  Wind down SMB self-serve effective March 31, 2027.
  - Existing paying SMB customers receive 90 days of continued service and a path to either an Enterprise tier upgrade (with discount) or to an exit partner.
  - Nine team members reassigned by April 7: five engineers and two designers to the AI compliance module, two growth team members to healthcare go-to-market.
  - Three team members transitioned with severance and 60-day placement support; we honor the work they did.
  - Internal communication on March 17, two weeks before the wind-down date.

  ## The Two Strongest Counter-Arguments

  *"We're close — one more pricing test could unlock it."*
  We have run six pricing tests in 18 months. Each one moved the number meaningfully but never close to the threshold the business case required. The pattern is consistent enough that I am no longer confident a seventh test is the one that breaks the curve. The cost of being wrong about that is one more quarter of $400K/month, against an AI module that is bleeding for attention. Given the asymmetry, I would rather be wrong by stopping than wrong by continuing.

  *"Killing it sends the wrong signal to the team about how we treat experiments."*
  The opposite is true. The signal we send by carrying a project that is not working is that this company is afraid to make hard calls. Experiments deserve real attempts and clean endings — both. The way we run this wind-down — directly, with respect, with people offered real next jobs — is the part that protects the culture. Quietly starving the project is the option that does the cultural damage.

  ## What Could Go Wrong
  - **The 340 SMB customers churn loudly.** *Signal:* support volume in March. *Mitigation:* our top-50 SMB accounts get personal outreach with an Enterprise upgrade offer; the rest get a clean partner-handoff path.
  - **One of the three transitioned engineers is harder to place than expected.** *Signal:* placement check-ins at week 2 and week 6. *Mitigation:* extended severance window; external network outreach.
  - **The team reads this as the start of broader cuts.** *Signal:* eNPS dip in March pulse. *Mitigation:* clear all-hands message that this is a focused decision, not a budget-driven one.

  ## The Decision Asked
  Approve, amend, or reject the wind-down plan as described. Decision needed by end of day Friday March 7 so we can begin internal communications on March 17 and complete the wind-down on March 31.
tips:
  - "Read the subject line in isolation. If a leader could decide based only on the subject, you've named the decision well."
  - "The TL;DR is three sentences. If you can't compress to three sentences, the recommendation isn't sharp enough yet."
  - "Address objections by name. The reader is already thinking them — meeting them head-on is the difference between a memo that wins the room and one that gets re-litigated."
  - "Write the memo first, then have a meeting. Bezos-style memos work because they front-load the thinking."
  - "Length matches reversibility. A one-pager for routine calls; six pages only for decisions you cannot easily walk back."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - all-hands-narrative
  - capital-allocation-memo
  - layoff-communication
  - board-update-narrative
tags:
  - executive-memo
  - decision-memo
  - leadership
  - written-comms
  - narrative
---
