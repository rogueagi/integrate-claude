---
title: "Write a LinkedIn thought leadership post in founder voice"
slug: linkedin-thought-leadership
function: marketing
role: content
description: "Generate an authentic, opinionated LinkedIn post in a founder or executive's voice that earns engagement through insight, not promotion."
useCase: "Use this prompt when ghostwriting LinkedIn content for a founder, CEO, or executive. The post should feel personal, opinionated, and human — not like polished marketing copy. Works best when the executive has a genuine perspective or experience to share."
prompt: |
  You are an expert ghostwriter who specializes in authentic LinkedIn content for founders and executives. Write a LinkedIn thought leadership post.

  Context:
  - Author name and title: {{author_name}}, {{author_title}}
  - Company: {{company}}
  - The core insight or observation to share: {{core_insight}}
  - A personal experience or story behind this insight: {{personal_story}}
  - Why this matters to the audience: {{audience_relevance}}
  - Target audience (who follows this person): {{target_audience}}
  - Tone: {{tone}} (e.g., candid and direct, reflective and humble, provocative, storytelling-driven)
  - Any phrases or words the author uses regularly that feel authentic to them: {{voice_notes}}

  Write a LinkedIn post that:
  - Opens with a hook that stops the scroll — a single bold statement, a surprising observation, or a counterintuitive claim. NOT a question opener.
  - Tells a brief, specific story or shares a concrete observation (not a generic observation)
  - Has a clear, singular point of view — not "it depends" or "there are many ways to think about this"
  - Uses short paragraphs (1–3 sentences max) and generous white space for LinkedIn's format
  - Ends with a reflection or implication — not a question asking readers to comment, not a CTA to visit a link
  - Is between 150–300 words
  - Sounds like a human wrote it, not a content team

  Produce 2 variants:
  - Variant A: Opens with the personal story
  - Variant B: Opens with the bold claim, then backs it with the story

  Mark which performs better for engagement and why.
variables:
  - "{{author_name}}"
  - "{{author_title}}"
  - "{{company}}"
  - "{{core_insight}}"
  - "{{personal_story}}"
  - "{{audience_relevance}}"
  - "{{target_audience}}"
  - "{{tone}}"
  - "{{voice_notes}}"
exampleInput: |
  author_name: Elena Vasquez
  author_title: CEO
  company: Anchor Analytics
  core_insight: the obsession with hiring "senior" people is the root cause of most early-stage startup culture failures — you bring in people whose instincts were built for a different company at a different stage
  personal_story: hired a "world-class" VP of Marketing from a public company at Series A; she built beautiful processes that created 6-week campaign cycles at a company that needed to move in 6 days; had to part ways after 9 months
  audience_relevance: founders and early-stage leaders making hiring decisions based on resumes instead of stage-fit
  target_audience: founders, startup operators, early-stage investors
  tone: candid, direct, a little self-deprecating — Elena shares mistakes openly
  voice_notes: Elena says "honestly," uses short declarative sentences, rarely uses jargon
exampleOutput: |
  **Variant A: Story first**

  We hired a "world-class" VP of Marketing at our Series A.

  She came from a public company. Incredible resume. Built beautiful systems. Established perfect processes.

  Those processes took 6 weeks to produce a campaign. We needed to move in 6 days.

  Nine months later, we parted ways. Neither of us did anything wrong — she built exactly what she knew how to build. It just wasn't what we needed.

  Honestly, that's on me.

  The instincts that make someone great at a 2,000-person company are different from the instincts that make someone great at a 20-person company. Resumes don't tell you which instincts someone has. The company they came from does.

  Stage-fit is underrated. We talk endlessly about culture fit, skill fit, functional fit.

  "Has this person operated successfully at this exact stage of chaos?" is the question I wish I'd asked first.

  ---

  **Variant B: Bold claim first**

  The obsession with "senior" hires is one of the most common early-stage founder mistakes.

  Not because senior people aren't good. Because the instincts built at a 2,000-person company are different from the instincts needed at 20.

  [Continues with the same story, compressed to 2 sentences]

  ---

  Recommended: **Variant A**. The story earns the insight. Readers invest emotionally in Elena's mistake before arriving at the lesson — which makes the lesson land harder. Variant B front-loads the claim, which works better for audiences who already trust the author. For building an audience, story-first is more effective.
tips:
  - "The best LinkedIn posts share something the author actually experienced or genuinely believes — not a list of best practices they found online. The personal story is what makes it worth reading."
  - "Ask the executive for 3–5 bullet points of what they actually want to say, then use this prompt to shape those points into a narrative. Don't invent the insight."
  - "Avoid the question-ending trap ('What do you think?'). It's overused and signals you're chasing engagement rather than sharing something worth engaging with."
  - "Short paragraphs are not a stylistic choice on LinkedIn — they're structural. Long blocks of text get skipped because the platform is consumed on mobile."
  - "Post at the same time 2–3 times per week for 8 weeks before evaluating performance. LinkedIn's algorithm rewards consistency more than individual post quality."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - twitter-thread
  - brand-voice-guide
  - email-newsletter
tags:
  - linkedin
  - thought-leadership
  - ghostwriting
  - social-media
  - founder
---
