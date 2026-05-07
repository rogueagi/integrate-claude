---
title: "Write a personalized LinkedIn connection request"
slug: linkedin-connection-request
function: sales
role: sdr
description: "Generate a short, personalized LinkedIn connection request message that gets accepted and opens a real conversation."
useCase: "Use this prompt when reaching out to prospects on LinkedIn. The 300-character limit and personal nature of LinkedIn demands a different approach than email — this prompt generates a message that feels human and gives the prospect a reason to accept."
prompt: |
  You are a B2B sales expert who knows that LinkedIn connection requests live or die on authenticity. Write a personalized LinkedIn connection request message for the following prospect.

  Context:
  - Prospect name (first name only): {{first_name}}
  - Prospect title: {{prospect_title}}
  - Prospect company: {{company_name}}
  - Something specific about them: {{specific_detail}} (e.g., a post they wrote, a shared connection, a talk they gave, a company milestone, a job change)
  - Your role: {{your_role}}
  - Your company: {{your_company}}
  - Why you want to connect (honest reason): {{connection_reason}}

  Write a LinkedIn connection request message that:
  - Is under 300 characters (LinkedIn's limit) — count carefully
  - Starts with the specific detail about them, not with "I'd love to connect" or your own name/company
  - References {{specific_detail}} in a way that shows you actually read/watched/know it
  - Makes it clear why connecting would be valuable to THEM, not just to you
  - Does NOT include a pitch or product mention — this is a connection request, not a cold email
  - Ends naturally — no "looking forward to connecting!" filler

  After the message, show the character count and a one-line note on why this approach works.

  If 300 characters is too tight to include all elements, prioritize: specific observation > natural tone > reason to connect. Cut everything else.
variables:
  - "{{first_name}}"
  - "{{prospect_title}}"
  - "{{company_name}}"
  - "{{specific_detail}}"
  - "{{your_role}}"
  - "{{your_company}}"
  - "{{connection_reason}}"
exampleInput: |
  first_name: Priya
  prospect_title: Head of Revenue Operations
  company_name: Driftline Technologies
  specific_detail: She wrote a LinkedIn post last week about why most sales dashboards lie — really sharp take on vanity metrics
  your_role: Account Executive
  your_company: PipelineIQ
  connection_reason: We work with RevOps leaders on exactly this problem — dashboard data that actually predicts outcomes
exampleOutput: |
  "Priya — your post on dashboard vanity metrics was the most honest RevOps take I've read in months. The point about 'activity tracking theater' is something we hear constantly. Would love to follow your thinking here."

  Character count: 231 ✓

  Why it works: References the specific post with a direct quote from it — proves she actually read it. No pitch, no ask. Just a genuine reason to be in each other's network.
tips:
  - "The best connection requests reference something so specific that the prospect thinks 'there's no way they sent this to 100 people.' That's the goal."
  - "If you don't have a specific detail, ask Claude: 'What would be a good reason to connect with a Head of RevOps at a 200-person SaaS company?' and use that to do real research first."
  - "After they accept, wait 2–3 days before sending a follow-up message. Let the connection breathe."
  - "Never mention your product in the connection request. That's what the follow-up message is for — and even then, go slow."
  - "Ask Claude to generate 3 variants at different character counts (200, 250, 280) so you have options depending on how much you can personalize."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - cold-outbound-cto-email
  - follow-up-email-sequence
tags:
  - linkedin
  - social-selling
  - outbound
  - connection-request
---
