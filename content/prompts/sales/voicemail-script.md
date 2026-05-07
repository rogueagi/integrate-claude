---
title: "Write a 30-second cold voicemail script"
slug: voicemail-script
function: sales
role: sdr
description: "Generate a concise, curiosity-driven voicemail script that gets callbacks without sounding like a telemarketer."
useCase: "Use this prompt when leaving cold voicemails as part of a multi-channel outreach sequence. Most sales voicemails are deleted in the first three seconds — this prompt produces a script that hooks immediately, communicates value, and makes a callback feel worthwhile."
prompt: |
  You are a B2B sales coach who has analyzed thousands of cold voicemails. Write a 30-second voicemail script for a cold outreach call.

  Context:
  - Prospect name: {{prospect_name}}
  - Prospect title: {{prospect_title}}
  - Company: {{company_name}}
  - Key business problem or opportunity: {{pain_point}}
  - Your product/service: {{your_product}}
  - A specific outcome or result relevant to them: {{outcome}}
  - Your name: {{your_name}}
  - Your callback number: {{callback_number}}

  Write a voicemail script that:
  - Opens with your name and a one-phrase context setter — NOT "Hi this is [name] calling from [company] about [product]"
  - Hooks within the first 5 seconds with a question or observation about {{pain_point}} or {{outcome}}
  - Mentions the specific outcome ({{outcome}}) so they have a reason to call back
  - Gives your name and callback number twice — once in the middle, once at the end
  - Is under 30 seconds when spoken at a natural pace (roughly 70–80 words)
  - Sounds like a human leaving a message, not a script being read

  After the script:
  - Show approximate word count and estimated speaking time at 140 words/minute
  - Flag any phrases that sound scripted and suggest alternatives
  - Write a one-line note on what will make them call back

  Tone: confident, specific, slightly curious. Not urgent, not desperate, not overly polished.
variables:
  - "{{prospect_name}}"
  - "{{prospect_title}}"
  - "{{company_name}}"
  - "{{pain_point}}"
  - "{{your_product}}"
  - "{{outcome}}"
  - "{{your_name}}"
  - "{{callback_number}}"
exampleInput: |
  prospect_name: David
  prospect_title: VP of Engineering
  company_name: Halcyon Cloud
  pain_point: engineering teams spending 20-30% of sprint capacity on unplanned infra work
  your_product: automated infrastructure monitoring and remediation platform
  outcome: teams using this tool reclaim an average of 6 hours per engineer per week
  your_name: Alex Chen
  callback_number: 555-204-8811
exampleOutput: |
  "David — Alex Chen, 555-204-8811. Quick question for you: if your engineering team is losing 20 or 30 percent of sprint capacity to unplanned infra fires, I might have something worth 15 minutes of your time. We help teams like Halcyon reclaim about 6 hours per engineer per week — basically a free hire without the headcount. Alex Chen again, 555-204-8811. Hope to connect."

  Word count: 71 words | Estimated time: ~30 seconds at 140 wpm ✓

  Scripted phrase check: "hope to connect" — slightly generic but closes naturally. Alternative: "worth a quick call back" if you want more directness.

  Callback reason: The "6 hours per engineer" is a specific, calculable outcome. David can do the math (6 hrs × N engineers × salary rate) before he even calls back — that's a compelling reason to pick up the phone.
tips:
  - "Say your callback number twice — once mid-message and once at the end. Prospects rarely replay voicemails to get a number."
  - "The hook must come before you say your company name. Lead with the problem or outcome, not your brand."
  - "Record yourself reading the script. If it sounds like you're reading, it'll sound like that on their end too. Rewrite any part that feels unnatural to say aloud."
  - "Pair this voicemail with an email sent at the same time — reference the voicemail in the email subject line ('Just left you a message') to reinforce the outreach."
  - "If you have a mutual connection, lead with that instead of the pain point: 'David — [Mutual Name] suggested I reach out...'"
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - cold-outbound-cto-email
  - follow-up-email-sequence
  - linkedin-connection-request
tags:
  - voicemail
  - cold-calling
  - outbound
  - phone
---
