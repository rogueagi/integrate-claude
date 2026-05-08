---
title: "Plan content syndication across owned, earned, and paid"
slug: content-syndication-plan
function: pr-comms
role: content-distribution
description: "Build a syndication plan for one piece of content that maximizes the trips it earns across owned, earned, and paid channels — without diluting the original."
useCase: "Use when a single piece of content (a byline, a research report, a podcast, a keynote) is worth more than one publication. Outputs a structured plan that sequences channels, repurposes deliberately, and avoids the 'post once and forget' pattern that kills most content ROI."
prompt: |
  You are a content distribution strategist who has run syndication for B2B brands, consultancies, and category-leading SaaS companies. Build a syndication plan for {{content_asset}}.

  Inputs:
  - Original asset: {{asset_summary}} (format, length, channel of origin)
  - The argument or value the asset delivers: {{core_value}}
  - Audiences who should encounter it: {{target_audiences}}
  - Owned channels available: {{owned_channels}}
  - Earned channels we can pursue: {{earned_channels}}
  - Paid budget and channels: {{paid_budget}}
  - Spokesperson or author: {{spokesperson}}
  - Goals (in priority order): {{goals}}
  - Timeline: {{timeline}}
  - Constraints: {{constraints}} (NDA, embargo, exclusivity windows)

  Build the plan with these sections:

  1. THE CORE FRANCHISE
  In one paragraph, name what makes this asset valuable enough to syndicate. If you can't articulate why this piece deserves more than one channel, the plan is wasted effort.

  2. THE FORMAT MATRIX (table or list)
  For each channel, specify the format the asset should take. The byline becomes a LinkedIn post and a podcast topic and a sales enablement one-pager — but each version is purpose-built, not a copy-paste.

  Channels to plan for:
  - The original full-length channel (if applicable)
  - LinkedIn (executive personal + company page)
  - X (executive + company)
  - The company blog (full repost or extract)
  - Newsletter (company + executive personal if exists)
  - Sales enablement (one-pager, talk track, email template)
  - Customer success outreach (relationship-driven share)
  - Podcast pitch (we appear, talking about the topic)
  - Trade press (excerpt placement or pitch)
  - Paid (LinkedIn boost, Twitter promotion, sponsorship newsletter)

  3. SEQUENCING (timeline)
  Day-by-day or week-by-week. Don't post everywhere on day one. Stagger so each channel amplifies the previous.

  4. THE REPURPOSING DON'TS
  Three things the team should not do with this asset, even if it would generate more impressions. Examples: don't excerpt the contrarian line out of context; don't use the data point on a sales slide without the surrounding caveat; don't let the executive's voice get rewritten into marketing copy in any version.

  5. METRICS AND THE STOP RULE
  What we track per channel — and the threshold at which we stop pushing the asset and move to the next.

  6. THE FOLLOW-UP HOOK
  The next piece this opens up. Syndication should set up the next franchise, not just mine the current one.

  Voice and structure rules:
  - The plan must be specific. Names of channels, names of partners, names of newsletters, dates.
  - Each channel format should have a one-line success criterion.
  - Avoid "leverage cross-channel synergies." The plan reads as serious or it gets ignored.
  - If a channel doesn't add a unique audience or framing, leave it out. Bloat is the syndication anti-pattern.

  Output: the full plan, then a 2-bullet "where the plan is most likely to break down" risk note covering operational dependencies and message drift.
variables:
  - "{{content_asset}}"
  - "{{asset_summary}}"
  - "{{core_value}}"
  - "{{target_audiences}}"
  - "{{owned_channels}}"
  - "{{earned_channels}}"
  - "{{paid_budget}}"
  - "{{spokesperson}}"
  - "{{goals}}"
  - "{{timeline}}"
  - "{{constraints}}"
exampleInput: |
  content_asset: HBR byline by Maya Okafor titled "The Headcount Question No One on Your Finance Team Has Modeled"
  asset_summary: 2,400-word byline scheduled to publish on HBR.org on May 12, 2026, in the Strategy section.
  core_value: A defensible, evidence-backed POV on how AI agents are restructuring the support function up the org chart, with a three-question audit and a corrected finance model.
  target_audiences: VPs of Customer Experience, CFOs, sales leaders evaluating AI vendors, and a category-watching layer of VC and operator audiences.
  owned_channels: Linden blog (35K monthly visitors), Linden newsletter (12K subscribers), Maya's LinkedIn (38K followers), Maya's X (11K), company LinkedIn (6K).
  earned_channels: Decoder podcast appearance already booked for May 14. Possible Stratechery mention. Possible re-share by Lenny Rachitsky. Trade press pickup likely (CX Today, Saastr).
  paid_budget: $25K total — $15K LinkedIn boost, $10K newsletter sponsorship.
  spokesperson: Maya Okafor (primary), Linden head of marketing (secondary for distribution coordination).
  goals: (1) Drive enterprise inbound. (2) Establish the operating-model POV before competitors do. (3) Recruiting signal for senior support engineers.
  timeline: 4 weeks from publish (May 12 - June 9).
  constraints: HBR's exclusivity window is 30 days for the full piece. We can excerpt up to 250 words and link back. Cannot reference Series B (under embargo).
exampleOutput: |
  THE CORE FRANCHISE
  This byline is the canonical version of Linden's operating-model POV. It exists because no one else in our category has the cohort data, the named customer examples, and the willingness to defend the contrarian "restructure up the chart" framing. The franchise is not the headcount-modeling argument; it's the position that the support function is reshaping rather than shrinking. Every derivative version should reinforce that, not blur it.

  FORMAT MATRIX

  HBR.org (May 12) — full byline. Success: 50K+ reads in 30 days, 200+ LinkedIn mentions, fact-checked sentence about Linden cohort data appears verbatim.

  Maya's LinkedIn (May 12, 8am ET) — 220-word personal-voice post linking to HBR with one specific data point pulled forward. Not the abstract. Success: 800+ reactions, 60+ comments from operating leaders, 5+ inbound messages.

  Linden company LinkedIn (May 12, midday) — short post amplifying Maya's, no commentary added. Success: secondary signal; primary engagement should still be on Maya's.

  Maya's X (May 12-13) — three-tweet thread excerpting the call-out box (the three audit questions). One reply with a chart from the cohort data. Success: 20+ reposts from operator audience.

  Linden newsletter (May 14) — full-issue dedicated to the POV. Maya's note up front, link to HBR, and a 350-word "what's not in the byline" addendum exclusive to subscribers. Success: 28%+ open, 8%+ click to HBR, 50+ replies.

  Decoder podcast (May 14, recording; release date editor's call) — Maya brings the cohort data. Pre-brief Nilay so the talk extends rather than restates the byline. Success: episode is the second-most-shared Decoder of the month.

  Linden blog (June 13, after HBR exclusivity ends) — companion post titled "What we left out of the HBR piece" with the data and stories that didn't fit the 2,400 words. Includes the longer customer narrative. Success: 3K+ reads in first week, blog becomes a referenced piece in 3+ external mentions.

  Sales enablement one-pager (May 15, internal) — three-question audit pulled out for AEs. Used in late-stage enterprise calls. Success: 5+ deals reference the framework in a CRM note within 30 days.

  Customer success outreach (May 12-19) — top 50 customers receive a personal note from Maya with a one-line "I wrote this with you in mind" framing and the link. Not a marketing send. Success: 35+ replies; 5+ customer reposts on LinkedIn.

  Trade press pickup (May 12-19) — comms team sends excerpt + link to CX Today, Saastr (Lemkin), Lenny's newsletter, AIM Group analyst contact. Success: 3 of 5 cover or cite.

  Paid LinkedIn ($15K boost, May 13-23) — boost Maya's post to senior CX/CFO/Eng leaders at target accounts. Targeting: Director+ at SaaS companies $50M-$1B ARR. Success: 4K+ qualified impressions per $1K, CTR > 1.4%.

  Newsletter sponsorship ($10K, May 19-26) — single sponsorship of [target newsletter — TBD between Lenny's and Saastr]. Single line: link, one-sentence pull-quote, and a "from Maya's HBR piece" credit. Success: 1.2K+ clicks.

  SEQUENCING
  May 12 (Tuesday): HBR drops 8am ET. Maya's LinkedIn 8:30am. Maya's X 9am. Company LinkedIn 11am. Personal customer outreach starts in afternoon.
  May 13: Paid LinkedIn boost begins. Comms outreach to trade press.
  May 14: Newsletter goes out. Decoder records.
  May 15: Sales enablement one-pager in AE hands.
  May 19: Newsletter sponsorship goes live. Customer success outreach completes.
  June 9-13: Stop paid. Begin transition to companion blog post.
  June 13: Companion blog drops with extended material.

  THE REPURPOSING DON'TS
  - Do not reduce the argument to a "5 things every CFO should know" listicle on social. The franchise is the nuanced POV; the listicle version contradicts the very thing that makes it credible.
  - Do not let the sales enablement one-pager strip out the steelman counter-argument. The audit-questions framework relies on the principal being honest about uncertainty; cutting that to fit on one page produces a brittle pitch.
  - Do not excerpt the contrarian "stop hiring at the entry tier" line in any social post without the surrounding context. Headlines lift it as anti-worker.

  METRICS AND STOP RULE
  - Lead metrics: HBR reads, LinkedIn engagement on Maya's post, inbound to enterprise pipeline tagged "HBR / operating model."
  - Stop rule: if the LinkedIn boost cost-per-engaged-action exceeds $4.50 by day 5, pause and reallocate to newsletter sponsorship. If trade press pickup is fewer than 1 of 5 outlets by day 7, kill the trade-press push and don't burn relationships chasing it.

  THE FOLLOW-UP HOOK
  This piece earns the right to publish a more contrarian follow-up in 90 days: "Why your CFO's AI productivity multiplier is wrong." The HBR readers who agree with this piece will accept a sharper claim from the same author. Plan that piece's outline at week 3 of this syndication.

  WHERE THE PLAN IS MOST LIKELY TO BREAK DOWN
  - Operational dependency: the sales enablement one-pager is the single point of failure. If marketing doesn't ship it by May 15, the AE-driven amplification (which we expect to convert to pipeline) doesn't happen. Confirm ownership and deadline now.
  - Message drift: the paid LinkedIn boost copy will get rewritten by the social team unless reviewed by Maya before launch. Reserve 30 minutes on her calendar May 13 for ad-copy approval; otherwise the contrarian framing softens into corporate marketing tone and the franchise erodes.
tips:
  - "Sequence so each channel amplifies the previous. Same-day everywhere is a dilution; staggered drops compound."
  - "The metric to watch isn't impressions. It's whether the piece becomes referenced — by other writers, in customer calls, in analyst notes. Referenced beats viewed."
  - "Each version of the asset must do something the original doesn't. If a derivative is a copy-paste, kill it."
  - "Customer success outreach is the highest-conversion channel in syndication and the most often forgotten. Ten well-timed personal notes outperform a $5K paid spend."
  - "Don't measure success only at 30 days. The pieces that become category references show up in analyst reports six months later. Track the long tail."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - press-mention-amplification-plan
  - social-post-multi-channel-rewrite
  - exec-newsletter-draft
  - byline-article-outline
tags:
  - syndication
  - distribution
  - content-strategy
  - amplification
  - planning
---
