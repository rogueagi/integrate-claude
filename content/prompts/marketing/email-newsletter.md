---
title: "Write a weekly email newsletter from bullet points"
slug: email-newsletter
function: marketing
role: content
description: "Transform a list of raw bullet points into a polished, readable weekly email newsletter with a consistent voice and structure."
useCase: "Use this prompt every week to convert your content team's raw notes, updates, and ideas into a finished newsletter. Works for company newsletters, founder newsletters, and industry digests — just adjust the tone and structure."
prompt: |
  You are an expert newsletter writer who understands that the best newsletters feel like a letter from a knowledgeable friend, not a content dump. Write a weekly email newsletter.

  Newsletter details:
  - Newsletter name: {{newsletter_name}}
  - Author/sender name: {{author_name}}
  - Audience: {{audience}}
  - Tone: {{tone}}
  - Raw bullet points (the content to work with): {{raw_bullets}}
  - One "main story" or featured piece: {{main_story}}
  - Optional: a question or prompt to invite reply: {{reply_prompt}}

  Write a newsletter with this structure:

  **Subject line:** (write 3 options — one direct, one curiosity-driven, one personal)

  **Preview text:** (40–90 characters — the line that appears after the subject in the inbox)

  **Opening (50–80 words):**
  A brief, personal note that sets the tone for this week. Not "Welcome to this week's edition of..." — something that reflects on the week, an observation, or a one-sentence hook that connects to the main theme.

  **Main Story (200–300 words):**
  Expand the {{main_story}} bullet into a fully-written featured section with a clear headline. This is the article/insight/story that earns the open. Write it as a mini essay — a clear argument, supporting evidence, and a conclusion.

  **Quick Hits (3–5 items):**
  Shorter items from {{raw_bullets}} — each 2–4 sentences. Give each a bolded label (e.g., "Worth reading:", "Something I noticed:", "Tool of the week:").

  **Closing (30–50 words):**
  A brief, human sign-off. Not "Thanks for reading!" — something that sounds like the author actually wrote it.

  **Reply CTA (optional):**
  If {{reply_prompt}} is provided, end with an invitation to reply. Frame it as a genuine question, not "let me know your thoughts."

  Total length: 500–700 words.
variables:
  - "{{newsletter_name}}"
  - "{{author_name}}"
  - "{{audience}}"
  - "{{tone}}"
  - "{{raw_bullets}}"
  - "{{main_story}}"
  - "{{reply_prompt}}"
exampleInput: |
  newsletter_name: The Pipeline
  author_name: Marcus Chen
  audience: B2B sales leaders and revenue operators
  tone: direct, slightly irreverent, data-informed — like a very smart colleague who tells you things straight
  raw_bullets: |
    - Gartner report says 72% of B2B buyers prefer self-serve research before talking to a rep
    - New tool: Grain just released auto-highlight reels for Zoom calls — might replace Gong for small teams
    - LinkedIn added a "verified" flag for company emails — open rate impact unclear but it's worth setting up
    - Interesting take from a RevOps Slack group: someone said pipeline reviews should ban the word "interested" — not a stage, it's a feeling
    - Quota relief season: 3 companies I know just restructured Q2 quotas down by 10-15%
  main_story: the Gartner self-serve stat and what it means for how reps should think about their role
  reply_prompt: what's one thing your buyers consistently want to figure out on their own before talking to you?
exampleOutput: |
  Subject options:
  1. "72% of buyers don't want to talk to you yet" (direct)
  2. "The stat that should change how you think about outbound" (curiosity)
  3. "What I told my team after reading this Gartner report" (personal) ← Recommended

  Preview text: "And 4 other things worth knowing this week."

  ---

  Opening:
  This was a short week for me but a dense one for the industry. One stat I saw this week stopped me mid-scroll. I've been thinking about it since. More on that below — but first, a few quick items that are worth your time.

  ---

  **The Self-Serve Shift Is Real (And Your Reps Aren't Ready For It)**

  A new Gartner report found that 72% of B2B buyers prefer to complete their own research before speaking with a sales rep. Not 40%. Not 55%. Seventy-two.

  This isn't new behavior — it's been trending for years. What's new is the magnitude. The majority of your prospects have already decided what they think about your category before your SDR sends the first email.

  What does this mean in practice? It means the rep's job is changing. The outbound email that says "let me tell you about our product" is interrupting a research process the buyer is already 60% through. The rep who wins is the one who adds to that research — with insight the buyer can't get from a G2 review.

  Practically: audit your outreach sequences. If your first touch is "here's what we do," rewrite it as "here's what most buyers in your situation get wrong." The second one meets them where they are. The first one doesn't.

  Self-serve buying means the rep's value is in the nuance, not the information. The buyers who want to talk to a rep are the ones who've hit the limits of what they can learn alone. Be worth reaching when they get there.

  ---

  **Quick Hits**

  **"Interested" is not a pipeline stage.** Caught a great point in a RevOps Slack thread this week: someone banned the word "interested" from their pipeline reviews. Not a stage — it's a feeling. A deal needs buyer evidence, not buyer sentiment. Stealing this.

  **Grain added auto-highlight reels.** If you're a smaller team that can't justify Gong pricing, Grain just added auto-generated call highlights. Worth a look.

  **LinkedIn verified email badge.** LinkedIn rolled out a verified company email badge. Set it up — it costs nothing and open rate impact is unclear but the trust signal seems real.

  **Quiet quota relief.** Three organizations I'm aware of quietly cut Q2 quotas 10–15%. If your team is under pressure, you're not alone — and if you're not recalibrating, you might be setting people up to fail.

  ---

  Closing:
  See you next week. Until then, go slow on the pipeline reviews and fast on everything else.

  — Marcus

  ---

  P.S. Genuine question — reply back: what's one thing your buyers consistently want to figure out on their own before they're willing to talk to a rep? I'm compiling these for something I'm working on.
tips:
  - "The opening sets the tone for the whole newsletter. Read the opening of your last 5 issues — if they all start the same way, you've stopped being a person and started being a publication."
  - "The main story is what gets forwarded. If it's just a summary of something someone else wrote, it won't earn forwards. Add your specific take or an implication the original didn't surface."
  - "Ask Claude to write a 3-word 'theme label' for each issue after you run this prompt. Helps you track whether your newsletter has a coherent point of view over time."
  - "The reply CTA works best when it's genuinely curious — not a lead capture. If Marcus actually wants to know what buyers research on their own, the P.S. feels authentic."
  - "For consistency: save your preferred structure as a system prompt addendum so Claude applies it automatically each week."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - linkedin-thought-leadership
  - twitter-thread
  - feature-announcement-email
tags:
  - newsletter
  - email
  - content
  - weekly
---
