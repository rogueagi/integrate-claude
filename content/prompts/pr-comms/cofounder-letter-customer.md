---
title: "Cofounder letter to customers about a major shift"
slug: cofounder-letter-customer
function: pr-comms
role: executive-comms
description: "Draft a personal letter from a cofounder to customers about a strategic shift, pivot, pricing change, or hard decision."
useCase: "Use when a founder needs to write directly to customers about something material — a pivot, a pricing change, a sunset, an acquisition, a controversial product decision. The letter is personal-voice, accountable, and avoids the corporate hedging that breaks trust."
prompt: |
  You are a writer who has helped founders communicate hard decisions to customers in a way that built trust rather than eroded it. Draft a letter from {{cofounder_name}} ({{cofounder_title}}) at {{company_name}} about {{shift_summary}}.

  Inputs:
  - The decision: {{decision}} (what is changing, when, for whom)
  - The why, in their own words: {{rationale}}
  - What customers are losing or risking: {{customer_impact}}
  - What we are committing to: {{commitments}}
  - Who this letter is for: {{audience}} (all customers, top 50 by ARR, free tier, specific segment)
  - Constraints: {{constraints}} (legal review pending, board not aligned, embargo)
  - Voice notes: {{voice_notes}}

  Structure:

  1. SUBJECT / OPENING ADDRESS
  Personal, not corporate. "From Maya, on the changes coming to Linden" not "Important update from Linden AI." Address them by their relationship to the product if possible (customers, partners, builders).

  2. THE NEWS — first 100 words
  Lead with what is changing. Do not bury it. Customers who scan the first paragraph should know exactly what's happening.

  3. THE WHY — second section
  The honest version. If this is about money, say it's about money. If it's about a strategic refocus, say what we're refocusing on and what we're walking away from. No "we're streamlining our offerings."

  4. WHAT CHANGES FOR YOU
  Concrete impact. Pricing, timeline, migration path, what to expect in their inbox next. If there's a thing they need to do, name it and give them the date.

  5. WHAT WE'RE DOING TO MAKE THIS RIGHT
  Specifics, not platitudes. Credits, transition windows, dedicated support, executive office hours, refunds where applicable. "We will make this right" alone is a non-statement.

  6. WHAT WE GOT WRONG (if applicable)
  If the company made a mistake that led here, name it. Customers can tell when a letter dodges the obvious. Be honest where you can be.

  7. CLOSE
  Sign off with the cofounder's first name and a way for customers to reach them directly — a real email address, not "support@."

  Hard rules:
  - No "We are committed to your success."
  - No "Our customers are at the heart of everything we do."
  - Do not blame the market, partners, or unnamed circumstances.
  - Do not promise things you can't operationally deliver.
  - The cofounder's voice should sound like a founder writing late at night, not a marketing team performing humility.
  - If the letter has a legal review touchpoint, mark in brackets the lines counsel will want to see.

  Output: full letter (subject + body), then a 3-bullet "letter notes" section flagging the riskiest paragraphs and what legal/board will want to push back on.
variables:
  - "{{cofounder_name}}"
  - "{{cofounder_title}}"
  - "{{company_name}}"
  - "{{shift_summary}}"
  - "{{decision}}"
  - "{{rationale}}"
  - "{{customer_impact}}"
  - "{{commitments}}"
  - "{{audience}}"
  - "{{constraints}}"
  - "{{voice_notes}}"
exampleInput: |
  cofounder_name: Maya Okafor
  cofounder_title: Co-founder and CEO
  company_name: Linden AI
  shift_summary: Sunsetting our SMB self-serve tier to focus exclusively on mid-market and enterprise.
  decision: Self-serve plans (Starter at $99/mo, Growth at $499/mo) are being sunset on August 1, 2026. New self-serve signups close June 1. Existing self-serve customers can stay on their current pricing through August 1, then migrate to a 6-month transition tier or to a new partner platform we're recommending.
  rationale: Self-serve is 8% of revenue and 60% of support load. The product we're building for mid-market and enterprise has diverged from what self-serve needs. We tried to serve both for two years and were doing both poorly.
  customer_impact: 1,400 self-serve customers will need to migrate or churn. About 200 are heavy users for whom this will be disruptive. Roughly 60 customer relationships predate the company's pivot to enterprise.
  commitments: Six months of price-locked transition. Free migration help to a recommended partner. A $300 credit on the partner platform. Founder-direct email for any heavy user who needs help.
  audience: All 1,400 self-serve customers; will be tailored slightly for the top 200 by usage.
  constraints: Legal wants to review the migration commitments and the partner endorsement language. Board has signed off but wants the rationale phrasing softened — Maya is pushing back.
  voice_notes: Maya writes plainspoken, short sentences, doesn't use the word "passionate." Will sometimes admit a mistake explicitly.
exampleOutput: |
  Subject: A note from Maya — we're sunsetting self-serve at Linden

  To the people who built things on Linden self-serve,

  I'm writing to tell you something that affects you directly. On August 1, 2026, we are sunsetting our self-serve plans — the Starter and Growth tiers. New signups close June 1. Your account will continue at your current pricing through August 1, after which you'll need to either migrate to our 6-month transition tier, move to a partner platform we're recommending, or churn off.

  This is the part where most letters say "we're streamlining our offerings." That isn't what's happening, so I won't say it. Self-serve is 8% of our revenue and 60% of our support load. The product we are building for mid-market and enterprise customers has diverged from what self-serve needed, and for the last year we have been doing both poorly. The decision is to do one thing well rather than two things badly. I owe you a clearer answer than "strategic focus," and that's it: we cannot serve you the way you deserve while building what we are building.

  Here is what changes for you:
  - June 1: new self-serve signups close.
  - Now through August 1: your plan and pricing stay exactly as they are.
  - August 1: self-serve plans turn off. By that date you'll need to be on one of three paths.

  Your three options:
  1) The 6-month transition tier: same features, same price as your current plan, runs through January 31, 2027. This is for customers who need time to migrate. It is not a permanent home — we will not extend it again.
  2) Migrate to [partner platform]. We've reviewed three SMB-focused alternatives and are recommending one. Customers on Starter or Growth will get a $300 credit on the partner. We'll cover migration tooling. [Legal review: confirm partner endorsement language is contractually approved.]
  3) Cancel. If neither path fits, you can cancel any time before August 1 and you'll be refunded for any unused prepaid time.

  What we got wrong: we should have made this decision a year ago. We didn't because we wanted to keep the surface area of customers we could serve, and that wasn't fair to you. You bought a product on the assumption we'd keep building it for you, and we are not going to. I'm sorry about that, and I want to acknowledge it before describing the help we can offer.

  About 200 of you are heavy daily users. If you're one of them and you want to talk to me directly, my email is maya@linden.ai. I will read every message. The team is working through the migration help in the meantime, and the migration playbook will land in your inbox by Friday.

  Three years ago some of you signed up when this was a different company. Thank you for that. I owe you the truth about where we ended up.

  — Maya

  Letter notes:
  - The "what we got wrong" paragraph is the line legal will push hardest on. Hold it. The letter without that paragraph reads like every other sunset letter and will be remembered as one.
  - The board's request to soften "doing both poorly" should be declined. The bluntness is the trust-builder; the soft version reads as PR.
  - The $300 partner credit number requires confirmation from the partner contract before this letter sends. Mark as TBD if not signed by Wednesday.
tips:
  - "The most credible cofounder letters say one thing the legal team would prefer they didn't. Identify what that line is and protect it through review."
  - "Read it out loud once before sending. If it sounds like a marketing team, it isn't ready. If it sounds like the cofounder texting an old friend, it's close."
  - "Personal email signoffs (maya@) outperform aliases (founders@). The cost is real inbox load; the trust gain is bigger."
  - "Do not call sunsets 'evolutions' or 'next chapters.' Customers know what's happening. Naming it accurately is the entire trust transaction."
  - "If the cofounder is uncomfortable with a sentence, that's usually the most important sentence. Defend it before you cut it."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - apology-statement-public
  - company-announcement-internal
  - data-incident-customer-comms
  - exec-newsletter-draft
tags:
  - founder-letter
  - executive-comms
  - customer-comms
  - announcement
  - hard-decisions
---
