---
title: "Write an outbound candidate sourcing message"
slug: outbound-sourcing-message
function: hr
role: recruiting
description: "Generate a compelling, personalized outbound recruiting message for LinkedIn or email that gets responses from passive candidates."
useCase: "Use this prompt to write outbound messages for sourcing passive candidates — people who aren't actively job searching but might be the right fit. Most sourcing messages get ignored because they're generic. This prompt produces messages that stand out by being specific about the role, company, and why this particular candidate was chosen."
prompt: |
  You are a recruiter or hiring manager writing an outbound message to a passive candidate.

  Context:
  - Role: {{role_title}}
  - Company: {{company_name}}
  - What makes this role compelling: {{role_differentiation}} (specific reasons this is a good opportunity — not generic)
  - Candidate background: {{candidate_background}} (what you know about them from their profile — be specific)
  - Channel: {{channel}} (LinkedIn InMail, email, Twitter/X DM)
  - Message length target: {{length_target}} (short: 3–4 sentences; medium: 5–7 sentences; never long)
  - Tone: {{tone}} (professional, casual, or technical peer)
  - Call to action: {{cta}} (brief call, coffee chat, send them a job description — pick one, not multiple)

  Write an outbound message that:

  1. **Opens with something specific to them** — not "I came across your profile" (everyone uses this). Reference something real: a project they wrote about, a company they worked at, a skill stack that's relevant.

  2. **States the role concisely** — one sentence. What the role is and what they'd be building or owning.

  3. **Says one specific thing about why you reached out to them** — not "your background is impressive" but "your experience building real-time data pipelines at [company] is directly relevant to what we're scaling."

  4. **Includes one reason this opportunity is interesting** — something they can't get from a JD: the stage, the tech challenge, the team, the equity at this inflection point.

  5. **One clear call to action** — a specific, low-commitment ask. Not "let me know if you're interested" but "would a 20-minute call Thursday or Friday work?"

  Write 3 variations: short (LinkedIn InMail), medium (email), and a follow-up for 7 days later if no response.
variables:
  - "{{role_title}}"
  - "{{company_name}}"
  - "{{role_differentiation}}"
  - "{{candidate_background}}"
  - "{{channel}}"
  - "{{length_target}}"
  - "{{tone}}"
  - "{{cta}}"
exampleInput: |
  role_title: Senior Data Engineer
  company_name: Anchor Analytics
  role_differentiation: Pre-Series A; small data platform team (4 people) with real architecture ownership; Signal product growing fast and needs serious infrastructure; CTO came from Palantir ML team; equity at this stage is meaningful
  candidate_background: Currently a senior data engineer at Amplitude (4 years); has written publicly about Spark optimization; LinkedIn shows experience with Airflow and Kafka
  channel: LinkedIn InMail
  length_target: short (LinkedIn InMail — 3–4 sentences max)
  tone: technical peer (not corporate recruiter)
  cta: 20-minute call
exampleOutput: |
  **Variation 1 — Short LinkedIn InMail (Primary):**

  Subject: Data platform role — small team, real architecture ownership

  Hi [Name] — I came across your Spark optimization writeup from last year and thought it was one of the cleaner takes on shuffle handling I've read. We're building the data infrastructure for Anchor Analytics (Series A-track analytics for SaaS companies), and the data platform team is 4 people with genuine architecture ownership — not ticket implementation. Our CTO came from Palantir's ML team, and we're scaling Signal, our AI insights layer, faster than expected. Would a 20-minute call this week make sense?

  ---

  **Variation 2 — Medium Email:**

  Subject: Data platform opportunity — Anchor Analytics

  Hi [Name],

  I came across your Spark optimization post and your 4 years at Amplitude caught my attention — you've built serious data infrastructure at scale and in a SaaS context that's directly relevant to what we're doing.

  I'm recruiting for a Senior Data Engineer role at Anchor Analytics. We're pre-Series A — 28 people, $1.82M ARR growing fast — and the data platform team owns everything from ingestion through serving for our Signal product (our AI-driven analytics layer). It's a 4-person team with real architecture authority: you'd be setting direction, not implementing tickets.

  The CTO is Priya Patel, who built ML infrastructure at Palantir. The tech stack is Python/Spark/Airflow, and we're moving toward a streaming architecture as Signal scales. Equity at this stage reflects where we are — meaningfully more than you'd get post-Series A.

  Worth a 20-minute call to see if it's interesting? I'm flexible Thursday or Friday.

  [Your name]

  ---

  **Variation 3 — Follow-up (7 days later, if no response):**

  Subject: Re: Data platform opportunity — Anchor Analytics

  Hi [Name] — following up briefly in case this got buried. Still hiring for the data platform role, still think your background is a strong fit. Happy to send more context about the role and team if that would make the decision easier, or to connect on a different timeline if now isn't right.

  One line on why I keep thinking about your profile: we're specifically building the serving layer for a real-time AI insights product, and your work at Amplitude on the data serving side is exactly the experience we're looking for. Worth 15 minutes?

  [Your name]
tips:
  - "The follow-up message is as important as the first. Most passive candidates who respond, respond to the second message. The follow-up should add new information rather than just bumping the thread."
  - "Reference something real and specific in the opening line — a post they wrote, a company they worked at, a specific project. 'Your background is impressive' is not a reason to respond; 'your work on Spark shuffle handling is directly relevant to what we're scaling' is."
  - "Keep LinkedIn InMails under 100 words. The most effective InMails I've analyzed are 3–4 sentences: why you reached out, what the role is, why it's interesting, and the ask."
  - "One call to action per message. 'Let me know if you're interested or feel free to send me your resume or we could hop on a call' is three asks. Pick the lowest-commitment one."
  - "Don't apologize for reaching out. 'I hope this isn't too forward' signals lack of confidence. If the role is good and the candidate is relevant, the message is welcome."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - job-description-engineering
  - job-description-sales
  - candidate-rejection-email
  - interview-scorecard
tags:
  - recruiting
  - sourcing
  - outbound
  - hiring
  - hr
---
