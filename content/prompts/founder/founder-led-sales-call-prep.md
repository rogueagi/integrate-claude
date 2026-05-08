---
title: "Prep for a founder-led sales call with a target account"
slug: founder-led-sales-call-prep
function: founder
role: founder-sales
description: "Build a tight prep doc for a founder-led sales call — research on the account, hypothesis on their pain, opening, three discovery questions, and the specific outcome you want from the call."
useCase: "Use this 24 hours before any founder-led sales call that matters. Founder-led sales is high-leverage but easy to wing — and winging it is what loses deals. This prompt forces you to land on a hypothesis about the prospect's pain, prepare three discovery questions that test it, and define what 'good' looks like by the end of the call."
prompt: |
  You are an experienced B2B founder-AE hybrid. You know that founder-led sales wins through specificity — knowing the account, having a real point of view, and asking better questions than the competition. Build me a prep doc.

  The account: {{account_name}}
  Industry / segment: {{industry}}
  Company size: {{company_size}}
  Person on the call: {{person}} — {{title}}
  How they came in (inbound, intro, outbound): {{source}}
  What I know about them and the company so far: {{known_context}}
  My company and product: {{my_company}}
  My ICP and what tells me this account fits: {{icp_fit}}
  Where this prospect is in the buying journey: {{buying_journey}}
  Pricing model and likely deal size: {{pricing}}
  My specific outcome goal for this call: {{outcome_goal}}
  Time available for the call: {{time}}

  Build the prep doc with these sections:

  1. **Account snapshot.** A 4-5 sentence read of the account: what they do, what's likely going on internally, recent signals (hiring, news, product launches), why I think they're in market.

  2. **Hypothesis on their pain.** Three sentences naming the specific pain I think they're feeling. Be specific — not "they need better ops" but "their morning shift handoff probably takes 30+ minutes because they're at 3 sites with 50+ employees each."

  3. **The opening.** A specific 2-3 sentence opening that I'll say in the first 60 seconds — not "tell me about your business" but a direct statement of why I'm on the call and what I think might be true for them.

  4. **Three discovery questions.** Specific, sharp, tied to the hypothesis. Each question should test something I'm uncertain about. Not "what's your biggest challenge?" — that's lazy.

  5. **Anticipated objections.** The 2-3 things they'll likely push back on, and my one-sentence response to each.

  6. **The bridge to next step.** Specific language for proposing the next step (demo, pilot, intro to a colleague), tied to what I'd expect to hear by minute 25 of the call.

  7. **The outcome I want.** Restate what success looks like. Define a "good" outcome and a "great" outcome. Define what would tell me they're not a fit and I should disqualify.

  8. **What NOT to do on this call.** 2-3 specific things to avoid (e.g., "don't demo before they tell me what they're using today," "don't quote price unprompted").

  Be specific to the inputs. A founder-led call to a 200-person logistics ops manager is a different conversation than one with a 2000-person CFO.
variables:
  - "{{account_name}}"
  - "{{industry}}"
  - "{{company_size}}"
  - "{{person}}"
  - "{{title}}"
  - "{{source}}"
  - "{{known_context}}"
  - "{{my_company}}"
  - "{{icp_fit}}"
  - "{{buying_journey}}"
  - "{{pricing}}"
  - "{{outcome_goal}}"
  - "{{time}}"
exampleInput: |
  account_name: Brookfield Logistics
  industry: third-party logistics (3PL), apparel-focused
  company_size: 850 employees, 4 distribution centers
  person: Sarah Lin
  title: Director of Operations
  source: Inbound — she signed up for a free trial 2 weeks ago, used the product 3 times, and booked a demo
  known_context: She's been at Brookfield 6 years, was promoted to Director 8 months ago, has posted on LinkedIn about modernizing their stack. Brookfield grew 30% in 2025 and is opening a 5th DC in Q3.
  my_company: Linework — mobile-first ops platform for shift handoffs, incident logs, and floor visibility
  icp_fit: Brookfield is exactly our ICP — multi-site, 200-1000 employees per site, apparel-adjacent, Director-level buyer
  buying_journey: She's done research, used the product, booked a demo. She's medium-warm — not "I need to buy this month" but "I'm seriously evaluating."
  pricing: $24k average ACV, per-site, monthly. Brookfield at 4-5 sites = $96k-$120k ACV, our second-largest deal if it lands.
  outcome_goal: Get her to commit to a 30-day paid pilot at one DC, with a defined success criterion and an executive sponsor introduced
  time: 30 minutes
exampleOutput: |
  ACCOUNT PREP — Brookfield Logistics, Sarah Lin call

  ACCOUNT SNAPSHOT
  Brookfield is a 850-person 3PL focused on apparel. Four DCs today, fifth opening Q3 — they're growing fast (30% in 2025). Sarah is 8 months into the Director of Operations role, was promoted internally, has been public on LinkedIn about modernizing the stack. The pattern is classic: a growing operator just got the keys to a function and is shopping for the tools she wished they'd had before. The fact that she signed up for free trial AND used the product 3 times AND booked a demo means she's already past "curious" — she's evaluating.

  HYPOTHESIS ON HER PAIN
  My read: at 4 DCs of ~200 people each, the morning shift handoff is probably taking 30-60 minutes per site because it's running on a mix of clipboards, Slack, and whatever each DC manager improvised. With the 5th DC coming, she's looking at multiplying that pain unless she fixes the stack now. Specifically, she's probably worried about: (1) onboarding a new DC manager into chaos, (2) lacking real-time visibility across 4-5 sites from her seat, and (3) inconsistent incident reporting that makes performance comparison impossible.

  THE OPENING (first 60 seconds)
  "Hi Sarah — thanks for the time. Before we get into the demo, I want to skip ahead. Looking at where Brookfield is — 4 DCs, 5th coming, you in the role 8 months — my best guess is that what you're really evaluating right now isn't shift handoff software. It's how you keep the next 12 months from being chaos as you scale to a 5th site. Tell me if I'm wrong, and tell me what's actually on your mind."

  This works because it (a) signals I read the situation, (b) invites her to redirect if I'm off, (c) escapes the "tell me about your business" trap.

  THREE DISCOVERY QUESTIONS

  1. "When something goes wrong at 7am at the Memphis DC, walk me through how you find out and how long it takes." (Tests: severity of the visibility problem and whether she's the one who finds out.)

  2. "What's stopping you from rolling out one tool across all 4 DCs today? Is it the tool, internal politics, IT, or something else?" (Tests: who else needs to be involved, what the actual blocker is. Sometimes the answer is "my IT team won't let me," which changes the whole conversation.)

  3. "If we did a 30-day pilot at one DC and at the end of it the DC manager said 'I never want to go back to the old way,' what would happen? Would you roll it out company-wide, or is there a procurement process I should know about?" (Tests: real buying process, who else is involved, whether she has authority. This is the most important question.)

  ANTICIPATED OBJECTIONS

  "I've seen 5 of these before, what makes you different?"
  → "We don't try to be a platform. We solve the morning shift handoff workflow specifically — mobile, no training needed, ops manager owns it without IT involvement. Most of our competitors require IT to touch them. We're the one Sarah-sized teams can deploy alone."

  "I'm not sure my DC managers will adopt a new tool."
  → "Adoption is the only metric that matters and it's why we do paid pilots. If after 30 days the DC manager doesn't want to keep it, you don't pay for the rollout. We'd rather lose a $24k pilot than sign you to a $120k contract you never roll out."

  "What about pricing?"
  → "Per-site, $24k/year per DC. At 4-5 DCs, $96-120k. I'd recommend a 30-day pilot at one DC first at a fraction of that — let's get the data before you commit."

  THE BRIDGE TO NEXT STEP
  By minute 25, I'm aiming to have her say something like "this could work for the new DC opening in Q3." That's my opening. The proposal: "Let's do this — pick one DC, ideally the one whose manager is most pissed off about the current setup, and run a 30-day paid pilot. $4k for the month. We define 3 success criteria together — let's say handoff time under 10 min, daily incident log compliance, and manager NPS at end. If all three hit, we roll out to all sites including the new one. Can I send a 1-page pilot agreement tomorrow?"

  THE OUTCOME I WANT

  Good: she agrees verbally to a paid pilot at one DC, gives me the executive sponsor name, and we schedule the kickoff.

  Great: same as good, plus she names the specific DC manager who's the right pilot site (signals her conviction is high), and she opens the door to looping in her boss for the rollout conversation.

  Disqualify: she reveals there's a procurement process I didn't know about that would take 6+ months, OR she can't articulate what would make the pilot a success, OR she's just doing research and isn't actually evaluating to buy this year. If any of these, slow down — don't push the pilot now; get the right next step instead.

  WHAT NOT TO DO

  - Don't demo features before she tells me what she's using today. The demo without context is the most common founder-sales mistake.
  - Don't quote the $96-120k full ACV in the first 15 minutes. Anchor on the pilot price first.
  - Don't fill silence. After question 3, she'll need to think. Let her.
tips:
  - "Always send a recap email within 2 hours of the call with the agreed-upon next steps. The deal that you 'feel great about' but never document is the deal you'll lose."
  - "The biggest founder-led sales mistake is talking too much. Aim for 30/70 split — you talking 30%, prospect talking 70%. If it's flipped, you're doing it wrong."
  - "Pre-commit to one disqualifying answer before the call. Knowing what would make you slow down or walk keeps you honest in the moment."
  - "Founders often skip the 'what's your buying process' question because it feels rude. Ask it. The answer determines whether you're 30 days from close or 6 months."
  - "If a prospect can't articulate what success would look like, the deal isn't real yet. Don't push the contract; spend more time defining the problem."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - founder-sales-discovery-script
  - lost-deal-postmortem-founder
  - design-partner-pitch
tags:
  - sales
  - founder-led-sales
  - call-prep
  - discovery
  - early-stage
---
