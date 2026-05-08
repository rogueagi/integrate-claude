---
title: "Cold outreach from a founder to a target hire"
slug: founder-led-recruiting-outreach
function: founder
role: early-hiring
description: "Write a warm, specific cold outreach message from a founder to a target hire — that doesn't sound templated and respects that the candidate already has a great job."
useCase: "Use this when you've identified someone you really want and need to send a cold message. Most founder recruiting outreach is bad — generic, transactional, or fake-warm. The best founders write outreach that signals 'I read your work, I know what's hard about your current job, here's what I'm offering that's actually different.' This prompt produces that kind of message."
prompt: |
  You are a thoughtful founder who has personally recruited 50+ early hires. You know that great candidates already have great jobs and that templated outreach fails. The best outreach reads like one specific person wrote one specific thing to one specific human.

  Candidate:
  Name: {{candidate_name}}
  Current role and company: {{current_role}}
  What I know about their work (specific): {{candidate_specifics}}
  Why I want this person specifically: {{why_this_person}}
  Mutual connections / context: {{connections}}
  How I found them: {{how_found}}

  My company:
  Name: {{company_name}}
  One-line description: {{description}}
  Stage: {{stage}}
  The role I want them for: {{role}}
  What's different about this role vs. their current job: {{differentiator}}
  Compensation range I can offer: {{comp_range}}

  Write a cold outreach message that:

  - Opens with something specific I know about their work (not "I came across your profile")
  - Names what I'm reaching out about in the second sentence — no mystery
  - Acknowledges they probably have a good job
  - Says specifically why I'm reaching out to them, not someone else like them
  - Names the role and what's interesting about it (not "this is a unique opportunity")
  - Is honest about stage and risk
  - Includes a low-friction, specific ask (15-min call to learn about their work and tell them about mine, no commitment)
  - Is under 180 words

  Avoid:
  - "Hope this finds you well"
  - "I came across your profile"
  - "This is a unique opportunity"
  - "We're a fast-paced startup"
  - Listing your investors as the lead with status signal
  - Asking them to "consider opportunities"

  After the message, give me:
  - The subject line (8 words or fewer, specific)
  - One alternative opener if my first specific reference doesn't land
  - A 2-line follow-up I should send 7 days later if they don't respond
variables:
  - "{{candidate_name}}"
  - "{{current_role}}"
  - "{{candidate_specifics}}"
  - "{{why_this_person}}"
  - "{{connections}}"
  - "{{how_found}}"
  - "{{company_name}}"
  - "{{description}}"
  - "{{stage}}"
  - "{{role}}"
  - "{{differentiator}}"
  - "{{comp_range}}"
exampleInput: |
  candidate_name: Priya Mehta
  current_role: Senior Product Manager at Notion, 4 years there, prior PM at a 30-person SaaS startup that was acquired
  candidate_specifics: She wrote a public essay on "designing for ops teams who don't read documentation" that I think is the best piece of writing on this problem I've read. Also led the rollout of Notion's mobile app for ops use cases.
  why_this_person: Most ops-tooling PMs default to dashboards. Priya's writing shows she gets that the ops manager experience is fundamentally a workflow + interruption problem, which is exactly how we think. She's also been the second PM at a smaller company, so she knows what zero-to-one feels like.
  connections: One mutual — Sarah at Stripe, who knows both of us
  how_found: Found her essay first, then her LinkedIn, then realized Sarah knows her
  company_name: Linework
  description: Mobile-first operating system for mid-market apparel/logistics ops teams — Patagonia is a customer
  stage: post-seed, 4 people, $48k MRR, growing 20%/mo
  role: Founding Product Manager — would own product strategy, eventually lead the function
  differentiator: She'd be the first PM, working directly with the founders, on a product where the customer is exactly the user she's been writing about
  comp_range: $160-200k base, real equity (0.5-1.0%)
exampleOutput: |
  Subject: Your essay on ops teams + Linework

  Hi Priya — your essay on "designing for ops teams who don't read documentation" is the best thing I've read on this problem. The line about how ops managers don't open new tabs has been quoted at our team standup three times.

  I'm reaching out because we're hiring a Founding PM at Linework. We build the operating system for mid-market apparel and logistics ops — Patagonia is a customer, we're $48k MRR and growing ~20%/mo, post-seed, 4 people. The user is exactly the person you've been writing about. Mobile-first, workflow-shaped, designed for someone who's interrupted every 90 seconds.

  Your background — Notion, the mobile rollout, the prior 30-person company — is a closer match than anyone I've found. And I know you have a good job, so I want to be specific: this is a Founding PM role, full ownership of product strategy, working directly with me and Maya. Real equity (0.5-1.0%), $160-200k base.

  Sarah at Stripe knows both of us. Worth 15 min to learn about what you're building at Notion and tell you about what we're building? No pressure either way.

  — Jordan, Linework

  ALTERNATIVE OPENER
  "Sarah at Stripe mentioned you a few weeks ago, and then I read your essay on ops teams not reading documentation, and now I have to reach out."

  FOLLOW-UP (send 7 days later if no response)
  Subject: re: Your essay on ops teams + Linework

  Hey Priya — circling back. Totally understand if the timing is wrong. If it's just "not now," I'd appreciate a one-line note so I stop bothering you. If it's "tell me more" — happy to send a 1-pager and find a 15-min slot. — Jordan
tips:
  - "Lead with their work, not yours. The first sentence should prove you actually read what they wrote or shipped — not just glanced at LinkedIn."
  - "If you have a mutual connection, mention them by first name, not 'a mutual connection.' Specificity is the trust signal."
  - "Post the comp range. Strong candidates filter out 'competitive comp' messages — they assume the worst. Posting it raises response rate."
  - "The 7-day follow-up is where you actually get most of your responses. The first message is a coin flip; the follow-up is a closer."
  - "Never recruit at someone with their current employer's email or during work hours from their work computer. Use personal channels — LinkedIn, personal email, mutual connection intro."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - first-hire-job-description
  - early-hire-trial-project
  - early-stage-comp-conversation
tags:
  - recruiting
  - cold-outreach
  - founder-led
  - hiring
  - early-stage
---
