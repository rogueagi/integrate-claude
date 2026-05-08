---
title: "Draft a personal-voice exec newsletter"
slug: exec-newsletter-draft
function: pr-comms
role: content-distribution
description: "Write a personal-voice newsletter from an executive to investors, customers, or operators that reads like a letter, not like marketing copy."
useCase: "Use when an executive wants to send a recurring or one-off newsletter to a specific audience (investors, top customers, operator network, alumni). Outputs a letter-format draft with the recurring sections, the personal voice, and the calibrated transparency that makes these newsletters durable rather than promotional."
prompt: |
  You are a writer who has helped founders and executives build durable personal newsletters — the kind that get forwarded with a "you should subscribe to this" note. Draft a newsletter from {{principal_name}} ({{principal_title}}) to {{audience}}.

  Inputs:
  - Audience: {{audience}} (investors, top 100 customers, operator network, board, etc.)
  - Cadence: {{cadence}} (monthly, quarterly, ad-hoc)
  - The "this issue" focus: {{issue_focus}} (a milestone, a hard quarter, a product update, a market reflection, a thank-you)
  - What's actually been happening: {{actual_updates}} (the news the audience cares about)
  - What the principal wants to share but the comms team would prefer they didn't: {{candor_zone}}
  - Voice notes: {{voice_notes}}
  - Constraints: {{constraints}} (NDAs, embargoed news, sensitive numbers, regulatory)
  - Recurring sections that have worked before: {{recurring_sections}}
  - Goal of this issue: {{goal}}

  Structure (loose — the best of these are letters, not templates):

  1. SUBJECT LINE + PREHEADER
  Subject is the principal's voice, not a marketing email. "What I've been thinking about" is fine if that's how they talk. "Q1 Update" is not.

  2. OPENING
  A specific moment from the past month or quarter. Not "It's been a busy time." A real scene or a real number that orients the reader.

  3. THE CORE OF THE LETTER
  Two to four sections. Each is its own beat — a milestone, a worry, a question the principal is sitting with, a piece of work they want feedback on. The letter should advance an actual relationship with the reader, not summarize the company.

  4. THE CANDOR MOMENT
  One line or paragraph that says something the comms team would prefer they didn't. Not gossip; not negligence. A real admission, a hard call, a thing they got wrong, or a question they don't have an answer to. This is what makes the newsletter forwardable.

  5. WHAT I'M ASKING OF YOU
  If this is a customer or operator audience: a specific, low-friction ask. Intros, candidates, feedback on a specific question. If this is investors: an update on what they should pay attention to. Avoid generic "let me know if I can help" closings.

  6. WHAT I'M READING / WATCHING / BUILDING
  Optional recurring section. Three to five items. The principal's voice. Mix of internal-to-the-company and external-to-the-industry. This is the section that makes the newsletter habitual.

  7. SIGN-OFF
  First name. Personal email signature, not the company's. Reply-to is the principal's actual address (or one they monitor).

  Voice rules:
  - Read aloud test: every paragraph should pass it.
  - Avoid "growing," "scaling," "doubling down," "incredible," "humbled."
  - Specificity over generalization. "Three of our customers" beats "many customers."
  - The candor moment is the entire test of the letter. If it could have been written by anyone in marketing, it isn't a personal newsletter.

  Output: full newsletter draft, then a 2-bullet "candor calibration" note flagging which lines will draw internal pushback and the recommendation to hold or revise.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{audience}}"
  - "{{cadence}}"
  - "{{issue_focus}}"
  - "{{actual_updates}}"
  - "{{candor_zone}}"
  - "{{voice_notes}}"
  - "{{constraints}}"
  - "{{recurring_sections}}"
  - "{{goal}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: Co-founder and CEO, Linden AI
  audience: Top 100 customers + investors + a small operator network (around 220 readers total)
  cadence: Quarterly
  issue_focus: Q1 2026 wrap. The HBR byline drops next week, Series B is announced in 14 days (under embargo for this newsletter), and we just made the layoff in early Q1 that the public didn't see.
  actual_updates: 140 customers (up from 110), 92% gross retention, three named customer wins from competitor churn, the layoff (12% RIF) and what we learned, the HBR byline dropping next week, the agent platform v2 launching in 30 days.
  candor_zone: Maya wants to address the layoff honestly with this audience — investors and customers heard about it. She wants to say what she got wrong (overhired sales, two infra teams) without the corporate frame. Comms team is uncomfortable with the candor on the record.
  voice_notes: Plainspoken. Short sentences. Often opens with a number. Will admit what she got wrong specifically.
  constraints: Cannot reference Series B (announced in 14 days). Cannot name two customers under MNDA.
  recurring_sections: A "what I'm reading" section that has run for three issues. Readers reply about it more than about anything else.
  goal: Reinforce trust with this small audience ahead of the Series B announcement, where these readers will be the first ring of advocates.
exampleOutput: |
  Subject: A note from Maya — Q1 2026
  Preheader: A hard quarter, what I learned, and what I'm reading.

  Hello —

  I'm writing this from the same desk where in February I wrote the email letting twenty-two people go.

  Q1 was the quarter where we grew to 140 customers, where three of our biggest wins this year were companies cutting from four AI vendors to two, and where I made a planning mistake that cost twenty-two of our colleagues their jobs. Those things happened in the same quarter, and I want to write to you about both because I think you've earned the longer version.

  WHAT WORKED
  The customer growth was real. We went from 110 to 140 customers, gross retention held at 92 percent, and the cohort that has been live for two or more quarters is now expanding faster than the cohort just deploying. Three of the wins this quarter were companies who churned off larger competitors, and two of those are willing to be named — Brightpath you've heard before, and another I'll be able to share publicly in a few weeks. The Information is publishing a piece this week on consolidation in AI support that has us prominently in it, and an HBR byline I wrote on the operating-model question goes live next Tuesday.

  WHAT I GOT WRONG
  We laid off twelve percent of the team in February. Two specific mistakes drove it. First, I hired against an enterprise sales plan in 2025 that assumed deals would close on a faster cycle than they did, and I kept hiring for several months after the data said to slow down. Second, the engineering team was building toward two infrastructure architectures during the agent platform rebuild, and only one of them shipped. We carried both teams longer than we should have. Both of those decisions were mine. I tell you this because if you're an investor, you're entitled to know what calls I'm getting wrong; if you're a customer, you're entitled to know whether the company you're writing checks to has its operating discipline tight; and if you're in the operator group, you may be making a version of the same call this year and I'd rather you make it with more data than I had.

  WHAT I'M ASKING OF YOU
  Two things. First, the agent platform v2 launches in 30 days. I'd value early feedback from any of you who want to be in the beta — reply to this email and we'll set you up. Second, we are hiring two senior support engineers and a head of revenue operations. If you know someone exceptional, send them my way directly.

  WHAT I'M READING
  - Tobi Lütke's letter on agent latency in software. Worth the 20 minutes.
  - "The Manager's Path" by Camille Fournier — re-reading it as we re-stack the engineering org.
  - Stratechery's recent piece on enterprise AI consolidation — a rare instance where Ben Thompson's framing matches what I'm seeing on the ground.
  - The Decoder podcast on the operating-model shift — I'll be on the show in two weeks; happy to take questions in advance if you have them.
  - Internally: the post-mortem from the February layoff, which I won't share, but which our exec team has read three times and which is shaping how we plan 2026.

  That's the letter. The next one will be in July. If you want to argue with me about anything in this one — particularly the layoff section — reply directly. I read every reply.

  — Maya
  maya@linden.ai

  CANDOR CALIBRATION
  - The "WHAT I GOT WRONG" section will draw the strongest internal pushback. Comms and legal would prefer "Q1 was a quarter where we right-sized the team in light of changing market conditions." Hold the candor version. The audience for this newsletter is small (~220), trusted, and will respond to honesty in a way the public won't. The corporate version of this paragraph would actively damage the trust the newsletter exists to build.
  - The "agent platform v2 launches in 30 days" line is a public commitment that requires confirmation from Eng before sending. If the date slips, this becomes a credibility problem at exactly the wrong moment. Confirm the launch window before issue goes out, or soften to "the next 30-60 days."
tips:
  - "The candor moment is the test. If the newsletter could have been sent by anyone in marketing, it isn't a personal newsletter."
  - "Read the draft out loud once. The sections you stumble on are the ones written in someone else's voice."
  - "Smaller, qualified audiences outperform broader ones. A 200-person letter to top customers and investors is worth more than a 20,000-person company newsletter."
  - "Reply-to should be the principal's real address. The 'do not reply' newsletter is the death of the personal voice."
  - "When the comms team objects to a paragraph, ask whether the objection is reputational (legitimate) or aesthetic (corporate-grain). Defend the candor; revise the rest."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - linkedin-post-executive
  - cofounder-letter-customer
  - content-syndication-plan
  - social-post-multi-channel-rewrite
tags:
  - newsletter
  - executive-comms
  - personal-voice
  - distribution
  - relationships
---
