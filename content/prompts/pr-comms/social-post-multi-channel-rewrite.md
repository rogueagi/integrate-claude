---
title: "Rewrite one message for X, LinkedIn, and email"
slug: social-post-multi-channel-rewrite
function: pr-comms
role: content-distribution
description: "Take one core message and rewrite it for the rhythms of X, LinkedIn, and email — same argument, three native voices."
useCase: "Use when one message needs to land across three channels with different conventions. Output is three versions purpose-built for each channel — not a copy-paste — calibrated to length, tone, and what each platform's audience expects."
prompt: |
  You are a senior comms director who manages multi-channel publishing for executives and brands. Take a single core message and rewrite it three ways: an X (Twitter) post or thread, a LinkedIn post, and an email newsletter blurb.

  Inputs:
  - Core message: {{core_message}} (the argument or news, in one sentence)
  - The supporting evidence: {{evidence}}
  - The intended takeaway: {{takeaway}}
  - The publisher: {{publisher}} (executive personal account, company brand account)
  - Voice notes: {{voice_notes}}
  - Where this fits in a broader campaign: {{campaign_context}}
  - Constraints: {{constraints}}
  - The link to drive to (if any): {{cta_link}}

  Produce three versions, each with channel-specific considerations:

  1. X / TWITTER VERSION
  - Decide: single post or short thread (max 4 tweets). Default to single unless the argument requires sequencing.
  - First tweet must work standalone — most readers won't see the rest.
  - Avoid hashtags unless they meaningfully add audience.
  - No "thread 🧵" emoji bait.
  - Specificity wins on X. Numbers, names, surprising claims.
  - 280 character cap per tweet.

  2. LINKEDIN VERSION
  - 100 to 220 words. Longer than X, shorter than a blog post.
  - Hook (one line, specific). Body (the argument with one piece of evidence). Close (one sharp line, no CTA emoji).
  - First-person but restrained. The post is about the idea, not the publisher.
  - No "Here's what I learned" framing. No emojis. No hashtag stacks.
  - LinkedIn rewards specificity and rewards comments — write the close to invite a thoughtful reply, not "Thoughts?"

  3. EMAIL NEWSLETTER VERSION
  - 150 to 300 words.
  - Subject line + preheader specified separately.
  - Friendly opening (not "Hi friends"), direct argument, link to the longer asset, signoff.
  - Email gets read attentively — it can carry more nuance than social. Use that.
  - Reply-to should feel personal; the close should make replying easy.

  Across all three:
  - Same argument. Different rhythm.
  - The voice should be recognizably the same person.
  - Cut anything that reads as marketing-team. The publisher's friend should recognize their voice.
  - Avoid: "thrilled," "passionate," "lessons learned," "drop your thoughts below."

  Output: each version with a 1-line note on what makes that version channel-native, then a closing 2-bullet note on which channel will likely outperform and why.
variables:
  - "{{core_message}}"
  - "{{evidence}}"
  - "{{takeaway}}"
  - "{{publisher}}"
  - "{{voice_notes}}"
  - "{{campaign_context}}"
  - "{{constraints}}"
  - "{{cta_link}}"
exampleInput: |
  core_message: Three of our customers cut their 2026 support hiring plans by half this quarter — the operating model changed, not just the budget.
  evidence: 140 deployments, three named cases (one publicly), a clear pattern of senior tier growing while entry tier shrinks. We have a longer HBR byline going live next week with the full data.
  takeaway: Most VPs of Support and CFOs are still budgeting 2026 support headcount as if the operating model hasn't shifted. The piece is a heads-up to anyone in the budget cycle.
  publisher: Maya Okafor's personal accounts (X and LinkedIn); Linden's company newsletter for the email version.
  voice_notes: Maya is plainspoken, short sentences, never uses "thrilled" or "passionate." Tends to lead with a number.
  campaign_context: The HBR byline drops May 12. These social and email versions go up at the same time as part of the syndication plan.
  constraints: Cannot reference Series B (under embargo). Cannot name two of the three customers (MNDA).
  cta_link: hbr.org/2026/05/the-headcount-question (placeholder URL)
exampleOutput: |
  X / TWITTER VERSION (single post)

  Three of our customers cut their 2026 support hiring plans by half this quarter. None of them did it because they had to. They did it because the senior people on their teams told them the work had moved.

  The 2026 budget being written right now is the wrong shape: hbr.org/2026/05/the-headcount-question

  Channel note: leads with a number, no hashtags, the link sits at the end where X's algo doesn't penalize it. Single post outperforms a thread for this argument because the thread version dilutes the punch.

  LINKEDIN VERSION

  Three of our customers cut their 2026 support hiring plans by half this quarter. One cut it by seventy percent.

  None of them did it because they were forced to. They did it because the senior person on the team came to them in week three and said the work had moved up.

  The 2026 budgets being written right now don't reflect this. Most CFOs are modeling AI in support as a productivity multiplier. What's actually happening is that the operating model is restructuring up the org chart — entry-tier work absorbed by agents, senior-tier work shifting from resolution to review.

  We've watched this across 140 deployments. The companies that get it right will retain their senior support people through 2027. The companies that don't will start losing them in Q3.

  I wrote about it for HBR this week — the cohort data, the line items most finance models are missing, and the audit to run before signing the plan. Linked in the comments.

  Channel note: 215 words, opens with the same number as the X version but builds out the argument; closes with a comment-prompt that invites operators to react with their own experience rather than asking "Thoughts?"

  EMAIL NEWSLETTER VERSION

  Subject: The headcount question your CFO hasn't modeled
  Preheader: New piece in HBR — the operating model shift most 2026 plans are missing.

  Hello —

  A short note this month, because the piece does the talking.

  Three of our customers cut their 2026 support hiring plans by half this quarter. One by seventy percent. None of them did it because they were forced to.

  What happened in each case is the same pattern: they deployed AI agents, the entry-tier work got absorbed, and within three weeks the senior people on the team came to them and said the work had moved up the chart. The 2026 budgets being written right now mostly don't reflect this. CFO models treat AI as a productivity multiplier; the actual change is an org-design event.

  I wrote about it for HBR this week. The cohort data across 140 deployments, the three line items most finance models are missing, and a three-question audit to run before signing the 2026 plan are all in the piece.

  Read it: hbr.org/2026/05/the-headcount-question

  If you've seen this pattern in your own org — or you've seen it not happen and you'd like to argue with me about it — reply to this email. I'll read every one.

  — Maya

  Channel note: more nuance than social allows, including the steelman invitation in the close ("argue with me about it"), which converts well in email and would be too inviting-of-trolls on X.

  WHICH CHANNEL WILL OUTPERFORM
  - LinkedIn likely outperforms on absolute reach and is the right channel for the recruiting signal embedded in the campaign — operators in the budget cycle live there.
  - Email outperforms on conversion to action (replies, customer conversations, demo requests). The 12K-subscriber list is qualified; the X reach is broader but shallower. Track replies and inbound conversations as the success metric, not impressions.
tips:
  - "Each channel has a rhythm. X rewards punch, LinkedIn rewards specificity at length, email rewards nuance and reply-friendliness. Match the rhythm or get ignored."
  - "Don't repurpose by deleting characters. Each version should be drafted from the argument, not derived from the longest version."
  - "The opening sentence is doing 70% of the work in every channel. Spend disproportionate effort there."
  - "Email is the most under-respected channel in B2B. A 12K list of qualified operators outperforms most paid spend."
  - "Cross-promote sparingly. Driving X readers to the LinkedIn version reads as desperate. Each channel's audience should get a complete experience."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - linkedin-post-executive
  - content-syndication-plan
  - press-mention-amplification-plan
  - exec-newsletter-draft
tags:
  - social
  - linkedin
  - twitter
  - email
  - distribution
---
