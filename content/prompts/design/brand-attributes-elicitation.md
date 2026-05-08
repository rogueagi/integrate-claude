---
title: "Elicit brand attributes from a founder via structured interview"
slug: brand-attributes-elicitation
function: design
role: brand-design
description: "Generate a structured interview script that pulls real brand attributes from a founder — past the rehearsed answers, into the specifics a designer can actually work from."
useCase: "Use this at the start of a brand engagement when you need to extract substance from a founder who'll otherwise default to 'modern, clean, professional.' Best for new logos, rebrands, naming work, and brand voice projects where you have 60–90 minutes of founder time and need to leave with usable inputs."
prompt: |
  You are a senior brand strategist running a founder interview to elicit brand attributes. Generate the interview script as a guide for the strategist (you may be running it yourself or handing it to a colleague).

  Context:
  - Company: {{company}}
  - Founder name and role: {{founder}}
  - What they do (one sentence): {{what_they_do}}
  - Stage (idea / pre-seed / seed / series A+): {{stage}}
  - Engagement type (new brand / rebrand / refresh / naming): {{engagement_type}}
  - Time budget for interview (minutes): {{time_budget}}

  Produce a script in this structure:

  1. Pre-interview prep. 3 things the strategist should research before walking in (founder's prior companies, public statements, competitor brands they've referenced).
  2. Opening (5 min). Two warm-up questions that get the founder talking about origin, not positioning.
  3. Substance section (60% of the time). 8–10 questions ordered to move from concrete to abstract. Each question should resist the rehearsed answer — phrased to surface specifics.
  4. Forced-choice section (~15 min). 5 either/or questions where you make the founder pick. These are the most useful inputs for designers.
  5. Visual elicitation (~10 min). 3 prompts asking them to react to references — competitors, brands they admire, brands they explicitly don't want to look like.
  6. Wrap-up (5 min). Two questions to capture what the founder didn't bring up but probably matters.
  7. Red flags. 4 founder responses that signal you don't have enough to brief a designer yet, and what to ask next.

  Rules:
  - No question may be answered with "modern, clean, professional." If yours can, rewrite it.
  - Forced-choice questions force a choice. "Both" is not allowed; you redirect.
  - Surface origin and decisions, not aspirations. ("Tell me about a customer who hated us" beats "What's your vision?")
  - Include time estimates per section.

  Output: the full script.
variables:
  - "{{company}}"
  - "{{founder}}"
  - "{{what_they_do}}"
  - "{{stage}}"
  - "{{engagement_type}}"
  - "{{time_budget}}"
exampleInput: |
  company: Greenfield Grain
  founder: Priya Shah, CEO and co-founder
  what_they_do: Direct-to-restaurant heritage grain distribution from regenerative farms in the upper Midwest
  stage: Seed (just closed)
  engagement_type: New brand (logo, identity, voice, packaging)
  time_budget: 90
exampleOutput: |
  # Greenfield Grain — Founder Interview Script (Priya Shah, 90 min)

  ## 1. Pre-interview prep (before the meeting)
  - Pull Priya's LinkedIn and Twitter — she ran ops at a meal-kit company before this; that DNA will leak into how she thinks about logistics.
  - Look up the three farm partners listed on the website. Read each farm's About page. The brand is downstream of these growers.
  - Gather visual refs from comparable categories Priya might mention: Bob's Red Mill (legacy), Anson Mills (heritage), Hayden Flour Mills (modern). Have these on hand for the visual elicitation section.

  ## 2. Opening (5 min)
  - Walk me through the day you decided this should be a company. Not the idea — the day.
  - When you tell a non-customer (your sister, an Uber driver) what Greenfield Grain does, what do you actually say?

  ## 3. Substance (55 min)
  - Tell me about your best customer this month. Not the biggest — the one whose business you'd be sad to lose first. What kind of restaurant are they, and why did they choose you?
  - Tell me about a customer who churned or hated something. What happened?
  - What do your farmers want chefs to know about their grain that chefs currently don't?
  - When a chef switches from commodity flour to your grain, what do they say first? What surprises them?
  - If a competitor copied everything visible about Greenfield in 30 days, what's the thing they couldn't copy?
  - What's the most expensive decision you've made that a more cynical company would have skipped?
  - When you imagine Greenfield in five years, what's the thing about it that would make 30-year-old Priya proud — that has nothing to do with revenue?
  - In your category, what's a sacred cow you secretly think is dumb?
  - Describe a moment in the last six months when you almost compromised a value, and what made you not.
  - If we ran a billboard tomorrow with five words, which five? (Don't workshop. First instinct.)

  ## 4. Forced-choice (15 min)
  - Heritage or future? Pick one.
  - Quiet authority or loud charisma? Pick one.
  - We'd rather lose to: a corporate giant or a craft competitor? Pick one.
  - Greenfield is more like: a wood-fired bakery or a Michelin-starred restaurant? Pick one.
  - In a year, would you rather be on the cover of: Bon Appétit or Modern Farmer? Pick one. (Then: why?)

  ## 5. Visual elicitation (10 min)
  - Show three references. For each, ask: "What does this brand promise the customer that we'd be lying if we promised?"
  - Show Bob's Red Mill, Anson Mills, Hayden Flour Mills (or Priya-named alternatives). For each: "Closer or farther from us, and why?"
  - "Show me one brand from any category that, if Greenfield could borrow one thing from them, you'd take it. What thing?"

  ## 6. Wrap-up (5 min)
  - What would you say to a designer who shipped Greenfield as a green-and-tan logo with a wheat sheaf? (Tests received-wisdom defaults.)
  - What's the question I should have asked but didn't?

  ## 7. Red flags
  - "We're like X, but better." — Push: "If they did one thing better than you, what would that be?" If she can't answer, the differentiation isn't real yet.
  - All forced-choice answers go to the prestige side ("Michelin," "Bon Appétit"). — Push: "When does Greenfield get to be unpretentious?" Brands that can't be casual become museum pieces.
  - Heavy reliance on category vocabulary ("artisan," "regenerative," "heritage") without specifics. — Push: "Tell me about one farmer's specific practice that would lose us a customer if we stopped."
  - Cannot name a customer who churned or hated something. — She's either too early to have one (ok at idea stage) or hasn't talked to enough customers (problem).
tips:
  - "Forced-choice questions are the single most useful technique. Founders default to 'both' for everything in interviews; making them pick reveals the real preference."
  - "Always ask about a customer who churned. The answer is more diagnostic than any positive testimonial."
  - "If you find yourself nodding through a brand interview, you're not pushing hard enough. Healthy interviews have at least one moment of friction."
  - "Record audio (with permission) and transcribe. The verbatim language goes straight into voice and tagline work."
  - "Send the founder a 1-page recap within 24 hours and ask 'what did I get wrong?' That's where the real attributes show up."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - visual-identity-direction-brief
  - brand-voice-tone-spectrum
  - logo-concept-rationale
tags:
  - brand
  - strategy
  - founder-interview
  - elicitation
  - discovery
---
