---
title: "Write a Twitter/X thread on a B2B topic"
slug: twitter-thread
function: marketing
role: content
description: "Generate an engaging Twitter/X thread that educates, builds authority, and earns retweets without feeling like a content dump."
useCase: "Use this prompt to turn a B2B insight, framework, or lesson into a Twitter/X thread. Threads are the highest-reach format on the platform — this prompt structures them to hook at tweet 1 and deliver compounding value through the final tweet."
prompt: |
  You are a B2B content expert who understands that Twitter/X threads succeed through specificity and rhythm, not volume. Write a Twitter/X thread.

  Thread details:
  - Topic: {{thread_topic}}
  - Core insight or argument: {{core_argument}}
  - Target audience: {{target_audience}}
  - Number of tweets (including hook): {{tweet_count}} (recommended: 8–12)
  - Author's voice/persona: {{voice}} (e.g., practitioner sharing what they've learned, analyst presenting data, founder sharing mistakes)
  - One concrete example, story, or data point to anchor the thread: {{anchor_example}}

  Write a thread where:

  **Tweet 1 (Hook):**
  - Makes a specific, bold claim or promises specific value
  - Does not start with "Thread:" or "🧵"
  - Under 240 characters
  - Strong enough to earn a click-to-expand from a stranger scrolling past

  **Tweets 2–[N-2] (Body):**
  - Each tweet delivers one standalone idea — readable even without the context of other tweets
  - Each tweet is under 240 characters
  - Use numbers sparingly but effectively (e.g., "Most teams do X. Here's why that's wrong:")
  - No tweet should end with "More in the next tweet" or similar filler transitions
  - At least one tweet should contain a concrete example, data point, or story from {{anchor_example}}

  **Second-to-last tweet (Summary or Framework):**
  - Synthesizes the key takeaway in a memorable, quotable way
  - Often the most retweetable tweet in the thread

  **Final tweet (CTA, optional):**
  - If applicable: a soft CTA (follow for more, link to a resource, or a question to prompt replies)
  - Never: "RT if you found this useful"

  Format: number each tweet (1/, 2/, etc.) and mark character count under each.
variables:
  - "{{thread_topic}}"
  - "{{core_argument}}"
  - "{{target_audience}}"
  - "{{tweet_count}}"
  - "{{voice}}"
  - "{{anchor_example}}"
exampleInput: |
  thread_topic: why most sales forecasts are wrong
  core_argument: forecasting fails because pipeline stages are activity-based, not evidence-based — reps advance deals when they do something, not when the buyer commits to something
  target_audience: sales leaders and revenue operations teams
  tweet_count: 9
  voice: experienced sales leader sharing a framework they've learned the hard way
  anchor_example: at a previous company, we had $4.2M in "late stage" pipeline that closed at $1.8M — the problem was our stage 4 required "proposal sent" not "proposal reviewed and questions received"
exampleOutput: |
  1/
  Most sales forecasts are wrong for the same reason.
  It's not bad reps, bad leads, or bad luck.
  It's that your pipeline stages measure what REPS do — not what BUYERS do.
  (240 chars)

  2/
  Activity-based stages look like:
  - Stage 3: Demo completed
  - Stage 4: Proposal sent
  - Stage 5: Contract sent

  The rep controls all of these. The buyer controls none of them.
  (182 chars)

  3/
  Evidence-based stages look like:
  - Stage 3: Buyer confirmed problem + impact
  - Stage 4: Buyer reviewed proposal + asked questions
  - Stage 5: Buyer completed legal/IT review

  Now you're tracking buyer commitment, not rep activity.
  (238 chars)

  4/
  Here's what this looks like in practice.

  We had $4.2M in "late stage" pipeline one quarter. Closed $1.8M.

  Our Stage 4 required "proposal sent."
  Not "proposal reviewed."
  Not "buyer asked questions."

  Just sent.
  (215 chars)

  5/
  A sent proposal is not evidence of buyer interest.
  It's evidence that a rep clicked send.

  We were forecasting rep activity, not deal momentum.
  (148 chars)

  6/
  The fix: add exit criteria to every stage.

  Exit criteria = what the BUYER must do before a deal advances.

  Not: "Rep scheduled next call."
  Yes: "Buyer confirmed timeline and named the decision-maker."
  (209 chars)

  7/
  Bonus: when you add exit criteria, deals that were "late stage" suddenly drop back to stage 2.

  That's not bad news. That's your CRM becoming honest for the first time.
  (172 chars)

  8/
  The rule I use now:

  If a rep can advance a deal without the buyer doing anything, the stage definition is wrong.

  Full stop.
  (131 chars)

  9/
  If you run pipeline reviews, try this: for your top 10 deals, ask "what did the BUYER do in the last 14 days?"

  If the answer is "nothing," that deal belongs in a different stage.
  (179 chars)
tips:
  - "Tweet 1 is the only tweet most people see. If it doesn't earn a 'show more' click, the rest of the thread doesn't exist. Write it last, after you know what the thread actually argues."
  - "Read every tweet as a standalone. If it doesn't make sense without the tweets before it, rewrite it. Threads get shared as individual tweets."
  - "Threads perform best when they teach something the audience can use today. 'Here's a framework' threads outperform 'here's my opinion' threads for B2B audiences."
  - "Post the thread in the morning, then reply to the first tweet with the most retweetable line from the thread 3 hours later to refresh it in the algorithm."
  - "If a thread doesn't get traction in the first 2 hours, it probably won't. Analyze what hook would have worked better and test it next time."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - linkedin-thought-leadership
  - email-newsletter
  - brand-voice-guide
tags:
  - twitter
  - thread
  - social-media
  - content
  - b2b
---
