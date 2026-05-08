---
title: "Explain a cap table in plain English"
slug: cap-table-explanation
function: finance
role: investor-relations
description: "Generate a plain-language explanation of a company's capitalization table for founders, employees, or non-finance stakeholders — covering ownership, dilution, and what the numbers mean."
useCase: "Use this prompt when explaining equity ownership to new employees receiving options, preparing employees for a fundraise that will cause dilution, onboarding new board members, or helping a founder understand their own cap table before a financing event."
prompt: |
  You are a CFO or corporate attorney explaining a company's capitalization table to a non-expert audience.

  Context:
  - Company: {{company_name}}
  - Audience: {{audience}} (e.g., new employee receiving options, founder preparing for fundraise, new board member, all-hands explanation)
  - Current cap table snapshot: {{cap_table_snapshot}} (founders, investors, option pool — shares and ownership %)
  - Financing history: {{financing_history}} (rounds, prices, amounts)
  - Current stage: {{current_stage}} (pre-seed, seed, Series A, etc.)
  - Specific questions to address: {{specific_questions}} (e.g., "what does my equity mean?", "how will Series A affect my ownership?", "what is the waterfall in an acquisition?")
  - Level of detail needed: {{detail_level}} (overview only vs. detailed mechanics)

  Write an explanation covering:

  ## What a Cap Table Is (1 paragraph)
  Plain-language explanation of what a capitalization table is and why it matters. No jargon.

  ## How Our Cap Table Works Right Now
  Walk through the current cap table:
  - Who owns what, and what type of security they hold (common vs. preferred)
  - What the option pool is and how it works
  - What "fully diluted" means vs. "outstanding shares"

  ## How Equity Works Over Time
  Explain:
  - How fundraising rounds affect existing shareholders (dilution — and why dilution isn't necessarily bad)
  - How vesting schedules work (if relevant to audience)
  - What happens to equity at an exit (acquisition or IPO)

  ## What Your Equity Is Worth (if relevant to audience)
  - How to think about current value vs. potential future value
  - The difference between strike price, fair market value, and exit value
  - Realistic framing: equity is not a guarantee, and the range of outcomes is wide

  ## The Liquidation Waterfall (if relevant)
  - What a liquidation preference is and why investors have it
  - How proceeds flow in an acquisition (who gets paid first)
  - Simple numeric example with the company's actual structure

  ## Common Questions (FAQ format)
  4–6 questions the audience is most likely to have, with honest answers.

  Tone: clear, honest, and appropriately humble about uncertainty. Equity explanations that oversell potential value create disillusionment later — be specific about what equity means and what it doesn't guarantee.
variables:
  - "{{company_name}}"
  - "{{audience}}"
  - "{{cap_table_snapshot}}"
  - "{{financing_history}}"
  - "{{current_stage}}"
  - "{{specific_questions}}"
  - "{{detail_level}}"
exampleInput: |
  company_name: Anchor Analytics
  audience: new employee receiving stock options (engineer, non-finance background)
  cap_table_snapshot: |
    Founders (Marcus Chen + Priya Patel): 58% combined (common stock)
    Seed investors (Founder Collective + angels): 22% (Series Seed Preferred)
    Option pool: 20% (reserved for employees; ~8% issued, ~12% remaining pool)
    Current employee: offered 0.25% (25,000 options out of ~10M fully diluted shares)
  financing_history: $2M seed round at $8M pre-money (2022); $500K angels at same terms
  current_stage: Pre-Series A; $1.82M ARR; planning Series A for Q3 2024
  specific_questions: What does my 0.25% actually mean? How does a Series A affect my equity? When would I make money on my options?
  detail_level: detailed enough to be honest about mechanics, but accessible to a non-finance person
exampleOutput: |
  ## What a Cap Table Is

  A cap table (short for capitalization table) is the ledger that tracks who owns what in a company. It lists every shareholder, how many shares they own, and what percentage of the company that represents. Think of it as the official ownership record for Anchor Analytics. When you receive stock options, your name gets added to this ledger — at first in small print, but it's real ownership in a real company.

  ## How Our Cap Table Works Right Now

  Right now, Anchor Analytics has approximately 10 million shares outstanding on a "fully diluted" basis (more on that term in a moment). Here's roughly how ownership breaks down:

  - **Founders (Marcus and Priya):** ~58% — they started the company and took significant early risk, so they own the majority
  - **Seed investors:** ~22% — Founder Collective and a group of angels invested $2.5M total in 2022 in exchange for this ownership
  - **Employee option pool:** ~20% — this is reserved for employees like you; about 8% has been issued to current employees, and 12% is available for future hires

  Your offer of 25,000 options represents approximately 0.25% of the company (25,000 ÷ 10,000,000). That might sound small, but it's meaningful — and it can grow in value significantly if the company does well.

  **A few important terms:**
  - *Shares outstanding* vs. *fully diluted*: "Outstanding" means shares that have actually been issued. "Fully diluted" includes everything that could become shares in the future — options (including yours), warrants, and convertible notes. Ownership percentages are almost always quoted on a fully diluted basis, because that's the more realistic picture.
  - *Common stock* vs. *preferred stock*: Founders hold common stock. Investors typically hold preferred stock, which gives them certain rights that common stockholders don't have (we'll cover this in the liquidation waterfall section).
  - *Options* vs. *shares*: Your offer is for options — the right to purchase shares at a set price (your "strike price") in the future. You don't own shares yet; you own the right to buy them.

  ## How Equity Works Over Time

  **Dilution:** When Anchor raises a Series A — which we're planning for Q3 2024 — new shares are issued to the new investors. This means everyone's ownership percentage goes down. If we raise $12M at a $24M pre-money valuation, the Series A investors will own roughly 33% of the company after the round. Your 0.25% might become approximately 0.17% — you weren't sold, your stake just got smaller relative to a larger total.

  Is this bad? Not necessarily. The point of raising money is to grow the company faster. If that $12M helps Anchor reach $4.5M ARR and a much higher valuation, your 0.17% of a more valuable company could be worth more than your 0.25% of a smaller one. Dilution is the cost of growth — and growth is the point.

  **Vesting:** Your 25,000 options don't all become yours at once. Standard vesting at Anchor is 4 years with a 1-year cliff:
  - Nothing vests until your 1-year work anniversary (the "cliff")
  - On that day, 25% of your options (6,250) vest immediately
  - After that, the remaining 75% vest monthly over the following 36 months (~521 options/month)
  - If you leave before 1 year: you keep nothing
  - If you leave after 2 years: you've vested 50% of your options

  **What happens when you can exercise:** Once options vest, you can exercise them by paying the strike price (the price set at your grant date). The strike price is set based on a 409A valuation — an independent appraisal of the company's common stock value. When Anchor is successful and has an exit, the difference between what you paid (strike price) and what the shares are worth (exit price) is your gain.

  ## What Your Equity Is Worth

  Honest answer: right now, your 25,000 options are worth whatever a buyer would pay for them — and there's no public buyer yet. The company is private.

  Here's how to think about potential future value:

  | Scenario | Company exit value | Your 0.25% (pre-dilution) | Your approximate proceeds (after dilution, after preference) |
  |---|---|---|---|
  | Modest exit — $30M | ~$0.5M (after investor preferences) | Likely minimal | $0–$15K |
  | Good exit — $100M | ~$60M available to common | ~$150K | ~$80–100K (after taxes) |
  | Great exit — $300M | ~$240M available to common | ~$600K | ~$300–400K (after taxes) |
  | Exceptional — $1B | ~$900M available to common | ~$2.25M | ~$1.1M+ (after taxes) |

  *These are illustrative, not projections. The range of outcomes is wide, and these numbers assume continued dilution from future rounds.*

  This math assumes a good exit. Many startups don't have large exits. The typical venture-backed startup outcome is either failure, a small acquisition (where common stockholders may get little), or the occasional large exit. Your equity has real potential — but it's not a guaranteed paycheck.

  ## The Liquidation Waterfall

  When a company is acquired (or shuts down), investors don't split the proceeds equally with common stockholders from dollar one. Preferred stockholders (your seed investors) have a "liquidation preference" — they get their money back first before common shareholders receive anything.

  At Anchor, the seed investors invested $2.5M with a 1x non-participating liquidation preference. This means in any acquisition:
  - First $2.5M goes to seed investors (getting their money back)
  - Everything above $2.5M is split based on ownership percentages

  In a small acquisition (say, $5M), the seed investors take $2.5M, and the remaining $2.5M is split among everyone. At 0.25%, you'd receive about $6,250 — minus taxes.

  In a large acquisition ($100M+), the liquidation preference becomes less meaningful — it's already been returned early in the waterfall, and the big proceeds flow through on a percentage basis.

  In a Series A, new preferred shares will have their own liquidation preference — adding to the waterfall ahead of common stock. This is normal and expected; it's part of how venture financing works.

  ## Common Questions

  **When do I actually get money from my options?**
  At a "liquidity event" — an acquisition, IPO, or tender offer. Until then, your options have no cash value. You can't sell them on the open market because there isn't one.

  **What if I leave the company? What happens to my options?**
  Vested options are yours to keep, but you typically have 90 days after leaving to exercise them (pay the strike price). If you don't exercise within that window, they expire. Exercising requires cash — if the strike price is $1/share and you've vested 10,000 options, that's $10,000 out of pocket. Many early employees who leave don't exercise because they don't have the cash or don't believe the company will succeed. This is a real consideration.

  **How will I know if the company is doing well enough to make my options valuable?**
  You'll have access to the same company metrics as any employee. We share ARR, growth, and milestone updates at all-hands meetings. We also send investor updates monthly — you can ask to be included in those.

  **What does 0.25% actually mean in practice?**
  At a $30M exit, 0.25% (of the portion available to common stock after preferences) is a modest amount. At a $200M exit, it's meaningful. Your equity is a lottery ticket with better odds than most — but it's not a guaranteed outcome.

  **Can my strike price change?**
  No. The strike price is set at your grant date and doesn't change. The company's value can change, but your right to buy at the grant-date price is locked in. If the company's fair market value rises to $5/share and your strike is $1/share, you have $4/share of "in the money" value.

  **What if the company raises money at a higher valuation — does my percentage change?**
  Your percentage will decrease (dilution), but your absolute number of shares stays the same. After a Series A, your 25,000 options are still 25,000 options — they just represent a smaller piece of a larger company.
tips:
  - "Use the liquidation waterfall example with real numbers — abstract explanations of preferred stock are confusing. Show the math on a $5M acquisition vs. a $50M acquisition and the preference becomes immediately intuitive."
  - "Be honest about the range of outcomes. Employees who are oversold on equity potential become resentful when the reality of venture math sets in. Honest framing builds trust."
  - "The 90-day exercise window after departure is one of the most important details for any employee to understand — and one of the least discussed. Many employees lose their vested options because they didn't have the cash to exercise. Name it explicitly."
  - "Update this document after each major financing event. The cap table after a Series A is materially different from pre-Series A — employees deserve to understand how the waterfall has changed."
  - "If the audience is non-finance, avoid the word 'dilution' in isolation — it sounds negative. Always pair it with the explanation of why dilution happens (growth funding) and why it can be value-accretive despite reducing percentage ownership."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - fundraising-narrative
  - board-meeting-agenda
  - investor-update-email
tags:
  - cap-table
  - equity
  - investor-relations
  - employee-education
  - founder
---
