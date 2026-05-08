---
title: "Plan amplification for a press mention"
slug: press-mention-amplification-plan
function: pr-comms
role: content-distribution
description: "Turn a press mention into a fully amplified moment — owned channels, employee shares, customer outreach, and follow-on assets."
useCase: "Use after a press hit lands (a feature in TechCrunch, a quote in Bloomberg, a podcast appearance, an analyst note). Outputs the day-one playbook to amplify it across owned channels and the seven-day plan to extract maximum value before the news cycle moves."
prompt: |
  You are a brand and PR amplification director who has run launch-day playbooks for funded startups and category-leading brands. Build an amplification plan for a press mention of {{company_name}}.

  Inputs:
  - The press hit: {{press_hit}} (publication, journalist, headline, type — feature, quote, mention, podcast, analyst note)
  - Hit URL or direct quote: {{hit_details}}
  - The narrative the piece advances for us: {{narrative}}
  - Spokesperson(s) named in the piece: {{named_spokespeople}}
  - Customer or partner mentions (if any): {{partner_mentions}}
  - Owned channels available: {{owned_channels}}
  - Internal team and capacity: {{team_capacity}}
  - Goals (in priority order): {{goals}}
  - Constraints: {{constraints}} (embargo expirations, partner approvals, sensitive context)

  Build the plan in this structure:

  1. WHAT MAKES THIS WORTH AMPLIFYING (1 paragraph)
  Be honest. Not every press hit deserves a full amplification plan. A back-of-the-piece quote in Bloomberg may not. A feature in The Information probably does. State the calculus.

  2. HOUR-ZERO ACTIONS (first 60 minutes after the piece goes live)
  - Internal Slack post in the channel where the company sees news. Keep it factual.
  - Spokesperson posts on LinkedIn (drafted within an hour of the hit going live).
  - Partner/customer thanks (if a customer is named, send the journalist's piece to their CSM with a thank-you note ready for the customer to forward internally).
  - Press list update — flag the hit for downstream pitches today.

  3. DAY-ONE OWNED-CHANNEL PUSH
  Sequence and copy for:
  - Spokesperson LinkedIn post (specific framing — gratitude is fine, but the post must add a sentence the journalist's piece doesn't)
  - Spokesperson X post or thread
  - Company LinkedIn share
  - Company X share
  - Email signature update (link to the piece for two weeks)
  - Homepage logo bar / press strip update if relevant

  4. EMPLOYEE AMPLIFICATION
  Internal note to the team with three things: (1) factual context they may not have, (2) approved language for sharing on their own channels, (3) the specific people they should amplify (the spokesperson's post, the company post). Avoid mandatory share requests; provide easy share with the option to opt out.

  5. CUSTOMER AND PROSPECT OUTREACH
  - Top-tier customer note (drafted, sent within 24 hours from the CEO or relevant executive)
  - Sales enablement update (talk track, slide, email template that incorporates the hit)
  - Active opportunity outreach (which deals get the piece sent in a personalized note?)

  6. SECONDARY PRESS PUSH (3-7 days)
  The hit creates a permission structure for trade and analyst pickup. Identify which trade outlets, analysts, or newsletters this enables a follow-on pitch to. Each follow-on pitch needs a different angle — not a copy of the same release.

  7. FOLLOW-ON ASSET (1-2 weeks)
  The piece earns the right to publish a deeper version on owned channels. A blog post, a longer-form piece, or a webinar that takes the press piece's argument further than the journalist had room for. Date it.

  8. METRICS AND HONEST POST-MORTEM
  What we'll track and what would make this a "we should have done less" outcome.

  Voice rules:
  - Gratitude is fine; gushing is unprofessional. "Thanks to {{journalist}} for a sharp piece" not "incredible coverage."
  - Don't pretend the journalist's piece is more flattering than it is. If the piece has a critical paragraph, do not amplify it without addressing the critique.
  - Avoid the press-release voice in social. The hit lets us speak in a personal voice — use it.

  Output: full plan, then a 2-bullet "what would change the plan" risk note covering scenarios where amplification could backfire.
variables:
  - "{{company_name}}"
  - "{{press_hit}}"
  - "{{hit_details}}"
  - "{{narrative}}"
  - "{{named_spokespeople}}"
  - "{{partner_mentions}}"
  - "{{owned_channels}}"
  - "{{team_capacity}}"
  - "{{goals}}"
  - "{{constraints}}"
exampleInput: |
  company_name: Linden AI
  press_hit: The Information feature on the consolidation in AI customer support; Linden is the named winner with a substantial section of the piece.
  hit_details: Headline "AI Customer Support Consolidates Around Two Platforms — and Linden AI Is One of Them." Author Kate Clark. URL theinformation.com/articles/linden-consolidation. Major piece (1,800 words), Linden gets 600 of those words.
  narrative: We are positioned as a category leader. The piece references our customer-churn data, includes quotes from Maya Okafor and from Bessemer's Talia Roth, and names two of our customers (Brightpath and one other with permission).
  named_spokespeople: Maya Okafor (CEO), Talia Roth (Bessemer), Renu Patel (Brightpath head of support).
  partner_mentions: Brightpath named on the record. Bessemer named.
  owned_channels: Maya's LinkedIn (38K), Maya's X (11K), company LinkedIn (6K), company newsletter (12K), Linden blog (35K monthly), all-hands Slack, AE Slack channels.
  team_capacity: 1 marketing lead, 1 designer (limited), CEO Maya available for 30 minutes today.
  goals: (1) Drive enterprise inbound. (2) Reinforce category-leader narrative ahead of the upcoming Series B announcement. (3) Recruiting signal.
  constraints: Series B is under embargo for 14 more days. Cannot reference funding in any amplification. Brightpath's quote pre-approved; second customer name pre-approved.
exampleOutput: |
  WHAT MAKES THIS WORTH AMPLIFYING
  This is the rare press hit where the piece does the work for us. The Information is read by enterprise buyers and category-watching investors. Linden gets a third of the piece, named customer proof, and a category-leader frame. Amplification cost is justified — but the goal is not to manufacture more impressions; it is to convert this moment into pipeline and into the permission structure for the Series B announcement two weeks from now.

  HOUR-ZERO ACTIONS (first 60 minutes)
  - Slack #general: 3-line post from Maya. "The Information published a piece this morning on AI customer support consolidation. We're prominent in it. The link is here. I'll post my own thoughts publicly in 30 minutes." Tone: factual.
  - Maya's LinkedIn post drafted before the piece goes live; published 30 minutes after.
  - Send Brightpath (Renu Patel) a personal note from Maya within 30 minutes — "Kate's piece is live, your quote is included as agreed, thank you for being on the record. Forward to your team if useful." Loop CSM.
  - Forward to the second on-record customer with a similar note.
  - Press list update — Sara on comms team flags the hit for the Decoder pre-brief next week and for any in-flight trade press pitches.

  DAY-ONE OWNED-CHANNEL PUSH

  Maya's LinkedIn (publishes within 60 min of hit):
  "Kate Clark's piece in The Information today on consolidation in AI customer support is the sharpest framing of the category I've read this year. We are prominent in it because the data she cites is real — three of our Q1 wins were customers cutting from four AI vendors to two — and because Renu Patel at Brightpath was willing to be on the record about why. The story underneath the consolidation is operating model, not procurement. I wrote a longer piece on that for HBR coming out next week. For today, the piece itself is the thing to read." [link]

  Channel note: this adds the next-piece tease (HBR byline) which Kate's piece doesn't preview. Adds value, isn't a brag.

  Maya's X (within 90 min): a 2-tweet sequence — first tweet is the headline + the customer-churn data, second tweet is the link with one specific pull-quote.

  Company LinkedIn (publish 2 hours after Maya's): a more brand-voiced amplification of Maya's post. No new text added — just signal-boost.

  Company X (publish 2 hours after): same.

  Email signature update: link to the piece in everyone's signature for two weeks. Marketing handles the deploy.

  Homepage press strip: add The Information logo to "as featured in." Designer can ship in two hours.

  EMPLOYEE AMPLIFICATION
  Internal note from Maya in #general within hour two:
  - The piece is real recognition. Not every press hit is. This one matters because [Brightpath's on-the-record quote, the cohort data Kate validated, the category framing].
  - If you want to share, here are three approved framings — pick what feels honest: "the work the team has done since 2023 is in this piece," "our customers' voices in here," or "the consolidation is real and we're prepared for it."
  - The single most useful thing employees can do today is engage with Maya's LinkedIn post — not reshare. Reach matters less than depth of engagement.
  - Opt-out is fine. No pressure to post.

  CUSTOMER AND PROSPECT OUTREACH
  - Top 50 customer note (sent EOD by CEO): "Kate's piece in The Information today references the work we've done together. Wanted you to see it before it filters through your team. Two of our customers were on the record; if you'd ever like to be among them on something I'd love to talk."
  - Sales enablement: AE talk track shipped by EOD. Slide for the standard demo deck. Email template for in-flight enterprise opportunities — sent to AE Slack channel with a note.
  - Active opportunity outreach: the marketing lead pulls the top 20 enterprise opportunities and sends each AE a one-line message: "this is the piece to send to [contact]." AE personalizes; sends within 48 hours.

  SECONDARY PRESS PUSH (Days 3-7)
  - Trade press follow-on: pitch Saastr (Lemkin), CX Today, and AIM Group with a different angle: "The Information identified the consolidation. Here's what's behind it from an operating perspective." Ride the permission structure but don't recycle the angle.
  - Analyst follow-up: send to Liz Miller at Constellation Research and the Forrester analyst covering CX. Their notes feed enterprise procurement.
  - Decoder podcast: bring The Information piece into the pre-brief with Nilay so the podcast extends rather than restates it.

  FOLLOW-ON ASSET (Day 14, May 26)
  Linden blog post titled "What The Information piece left out about consolidation." 1,200 words. Goes deeper on the cohort data and the operating-model thesis. Targeted at readers who came from Kate's piece and want more. Designer creates a chart that isn't in The Information piece.

  METRICS AND POST-MORTEM
  - Lead metrics: pipeline-tagged inbound from "AI consolidation," LinkedIn engaged-actions on Maya's post, press strip CTR, email reply rate to top-50 customer note.
  - Honest post-mortem trigger: if 14 days from now this hit produced fewer than 5 enterprise meetings booked, we over-amplified relative to the conversion. Adjust the amplification weighting on the next major press moment.

  WHAT WOULD CHANGE THE PLAN
  - If Kate's piece contains a critical paragraph we missed in pre-read (e.g., a question about deflection methodology), do NOT amplify across owned channels until we have a calibrated response. Comms team to do a full read by hour two and flag.
  - If a competitor named in the piece responds publicly with a counter-claim, do not engage. Linden's posture is the category-leader who doesn't need to respond. Address only via the next earned-press cycle, not via reactive social.
tips:
  - "The first 60 minutes set the trajectory. A delayed amplification post reads as marketing-team rather than principal."
  - "Customers named in the piece deserve a personal note before the company posts. Always."
  - "Don't amplify a critical piece. The reflex to spin negative coverage as positive is what burns trust with journalists. Read the piece in full before any share."
  - "Employee amplification works best as opt-in with approved language. Mandates produce identical posts that look coordinated and embarrass everyone."
  - "Track conversion to pipeline, not impressions. The amplification plan that wins on impressions and loses on revenue is a plan worth changing."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - content-syndication-plan
  - social-post-multi-channel-rewrite
  - linkedin-post-executive
  - press-release-draft
tags:
  - press
  - amplification
  - distribution
  - earned-media
  - playbook
---
