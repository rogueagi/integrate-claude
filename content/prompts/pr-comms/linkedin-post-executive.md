---
title: "Ghostwrite a LinkedIn post in a CEO's voice"
slug: linkedin-post-executive
function: pr-comms
role: executive-comms
description: "Write a LinkedIn post that sounds like the executive actually wrote it — not like a comms team performing thought leadership."
useCase: "Use when ghostwriting LinkedIn posts for a founder, CEO, or other executive. Captures the principal's voice, makes a real point (not a vague observation), and avoids the LinkedIn-influencer cadence that signals 'this was outsourced.'"
prompt: |
  You are a speechwriter who has ghostwritten for founders and CEOs whose audiences include venture investors, enterprise buyers, and operators. Draft a LinkedIn post for {{principal_name}} ({{principal_title}}) on the topic of {{topic}}.

  Inputs:
  - Voice notes: {{voice_notes}} (sentence length, vocabulary, recurring phrasings, what they refuse to say)
  - The point of view: {{pov}} — the actual claim. Not a topic. A position.
  - The proof: {{proof}} — the story, number, or example that earns the POV.
  - The audience to reach: {{audience}}
  - What "success" means for this post: {{goal}} (e.g., recruiting signal, customer signal, investor signal)
  - Recent posts they've written that landed: {{reference_posts}}

  Constraints — what makes a post sound ghostwritten and what to avoid:
  - No "I'm thrilled to announce."
  - No "lessons learned" lists with emojis as bullets.
  - No "Here's what nobody tells you about..." opener.
  - No corporate hashtags packed at the end.
  - No "Thoughts?" sign-off.
  - No invented internal monologue ("I asked myself...").

  Voice rules:
  - Mirror sentence length to the principal's actual posts. If they write short, write short.
  - If the principal uses a specific recurring word, use it — but only once, naturally.
  - First person, but restrained. The post is about the idea, not the principal.
  - The reader should learn something specific they didn't know before they read it.

  Structure (loose, not strict):
  - Hook: a concrete observation, number, or moment. Not a question.
  - Middle: the proof or story.
  - Close: a single sharp line. No CTA, no hashtag dump, no "DM me."

  Length: 120 to 220 words.

  Output: the post, then a 2-bullet voice-check note explaining which sentences will pass the principal's "would I actually say this" test and which to revisit.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{topic}}"
  - "{{voice_notes}}"
  - "{{pov}}"
  - "{{proof}}"
  - "{{audience}}"
  - "{{goal}}"
  - "{{reference_posts}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: CEO, Linden AI
  topic: Why most companies' 2026 support headcount plans are wrong
  voice_notes: Short declarative sentences. Hates the word "thrilled." Often opens with a number. Uses "the work" and "the operating model" recurringly. Refuses to use exclamation points.
  pov: If your 2026 plan still adds headcount at the bottom of the support org chart, you're not budgeting; you're admitting you haven't deployed the technology yet.
  proof: Three of our Q1 customers cut planned 2026 hiring by half after their first quarter live. One cut it by 70%.
  audience: VPs of Support, CFOs, and a small but loud audience of category-watching VCs.
  goal: Recruiting signal — we're trying to hire two senior support engineers and want this post to land in their feed.
  reference_posts: Her January post on "the senior person on your support team is doing entry-level work" got 800 reactions and is the tone we want to match.
exampleOutput: |
  Three of our customers cut their 2026 support hiring plans by half this quarter. One cut it by seventy percent.

  None of them did it because they were forced to. They did it because the third week after going live, the senior person on the team came to them and said the work had moved.

  If your 2026 headcount plan still adds people at the bottom of the support org chart, that plan was written before you deployed the technology. It's not a budget. It's a postponement.

  The companies I'm watching this year aren't cutting support. They're growing the senior tier and shrinking the entry tier. The work didn't go away. The work moved up.

  The talent question is whether the senior people on your team will still be there in twelve months to do that work. Most of them already know what's happening. The ones who don't will figure it out by Q3.

  We're hiring two senior support engineers at Linden. If you've been doing the senior work in an org that doesn't recognize it yet, my DMs are open.

  Voice check:
  - Lines that pass the "would Maya say this" test: the three opening sentences and the close. They're declarative, no adjectives, and use her recurring "the work moved up" framing.
  - Revisit: "the companies I'm watching" reads slightly more pundit-toned than her usual. If she pushes back, swap to "the companies I'm talking to" — closer to how she speaks.
tips:
  - "The 'would they actually say this' test: read the post out loud in the principal's voice. If you have to soften your delivery to make it sound like them, it's not their voice yet."
  - "The hook should not be a question. Questions are the LinkedIn-influencer signature."
  - "If the principal would not type the word 'thrilled' in a private text, do not write it on their LinkedIn."
  - "Match the cadence of their best-performing past posts, not the average of their feed. The signal is in the 90th percentile."
  - "Save the 'I'm hiring' line for the very end. Leading with it kills the credibility of the rest of the argument."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - ceo-keynote-narrative
  - exec-newsletter-draft
  - byline-article-outline
  - executive-bio-rewrite
tags:
  - linkedin
  - ghostwriting
  - executive-comms
  - thought-leadership
  - social
---
