---
title: "Prep talking points for an executive podcast appearance"
slug: exec-podcast-talking-points
function: executive
role: comms
description: "Generate sharp, repeatable talking points and stories for an upcoming podcast appearance — the kind that get clipped and quoted later."
useCase: "Use this in the days before a podcast recording, when you have the topics list from the host and need to walk in with crisp answers, signature stories, and a small set of points you want to land. Most executives over-prepare slides and under-prepare stories. This prompt fixes that."
prompt: |
  You are a media trainer who has prepped CEOs for podcast appearances ranging from founder-pod-of-the-week to top-100-business shows. Build a talking-points doc for {{exec_name}}'s appearance on {{podcast_name}}.

  Inputs:
  - Executive: {{exec_name}}, {{exec_role}} at {{company_name}}
  - Podcast: {{podcast_name}}, hosted by {{host_name}}
  - Audience profile: {{audience}}
  - Episode topic / framing: {{episode_topic}}
  - Host's likely questions (from outline or pattern): {{likely_questions}}
  - Three things the executive wants the audience to remember: {{three_takeaways}}
  - Stories from the executive's career or company that could illustrate the takeaways: {{available_stories}}
  - Topics the executive wants to avoid or handle carefully: {{topics_to_handle}}
  - The single clip-worthy line the executive would love to hear quoted: {{aspirational_clip}}

  Produce a prep doc:

  ## The Three Takeaways (Repeatable Versions)
  For each of {{three_takeaways}}, write three different versions of how the executive could say it:
  - **The short version** (15 words or fewer)
  - **The story version** (a 90-second anecdote that lands the same point)
  - **The data version** (a number-backed phrasing for analytical hosts)

  Repetition is fine — when the host returns to the topic, the executive can lean on the version that best fits the moment.

  ## Signature Stories (3–5)
  For each story:
  - **Title:** so the executive can mentally cue it up
  - **The setup:** 2 sentences
  - **The turn:** the moment of insight or change
  - **The lesson:** the point it lands
  - **Best used when:** the kind of question that invites this story

  ## Likely Questions With Drafted Answers
  For each question in {{likely_questions}}, draft an answer that:
  - Opens with a specific moment or number, not a generic frame
  - Lands one of the three takeaways
  - Is 60–90 seconds spoken
  - Ends with a hook the host will want to follow up on

  ## Sensitive Topics — Pivot Lines
  For each topic in {{topics_to_handle}}, write a pivot line that acknowledges the topic without ducking it, then redirects to ground the executive owns. No "I can't comment on that" — that lands worse than the question.

  ## Three Quotable Lines
  Three short, sharp formulations of {{aspirational_clip}} or the takeaways, written to be quotable. Test: would a podcast clip account turn this into a 30-second video?

  ## Pre-Recording Checklist
  - The opening 60 seconds the executive is going to use to seed a story
  - The story they will fall back on if a question lands flat
  - The three things they will not say
  - The single phrase they want to walk out remembering they said

  Style:
  - The drafted answers sound like {{exec_name}} talking, not a press release. First-person, conversational.
  - No buzzwords. No "frankly" as a verbal tic.
  - Stories are the spine. Concepts without stories don't get clipped.
variables:
  - "{{exec_name}}"
  - "{{exec_role}}"
  - "{{company_name}}"
  - "{{podcast_name}}"
  - "{{host_name}}"
  - "{{audience}}"
  - "{{episode_topic}}"
  - "{{likely_questions}}"
  - "{{three_takeaways}}"
  - "{{available_stories}}"
  - "{{topics_to_handle}}"
  - "{{aspirational_clip}}"
exampleInput: |
  exec_name: Lila Hassan
  exec_role: CEO
  company_name: Vantage Systems
  podcast_name: The Operators
  host_name: Jordan Park
  audience: founders and operators of Series A–C SaaS companies
  episode_topic: building a vertical-focused company in a horizontal market
  likely_questions: how did you choose healthcare; what almost killed Vantage; what's your relationship with the board; what did you get wrong; what's the next 18 months
  three_takeaways: 1) vertical focus beats horizontal ambition at our stage; 2) the SMB experiment we ran for 18 months was the most expensive lesson we paid for; 3) compliance is a moat that horizontal players can't catch
  available_stories: closing Brookline Health on a Friday afternoon; the day we decided to kill SMB self-serve; the board meeting where we decided not to chase Helio; hiring Sandeep three days before he had three other offers
  topics_to_handle: specifics of the next round (not announced); competitor names (don't punch down); the layoff we just did
  aspirational_clip: "horizontal companies serve everyone fine and nobody well; vertical companies are the ones a buyer actually loves"
exampleOutput: |
  ## The Three Takeaways (Repeatable Versions)

  **Takeaway 1: Vertical focus beats horizontal ambition at our stage.**
  - *Short:* "Horizontal serves everyone fine and nobody well."
  - *Story:* The day we passed on the financial-services pilot and committed full to healthcare. (See Story #2.)
  - *Data:* "When we narrowed to healthcare, our average ACV went from $48K to $400K in 18 months. That's not a marketing line — that's the math telling us where the value lived."

  **Takeaway 2: SMB self-serve was the most expensive lesson we paid for.**
  - *Short:* "We spent $4 million proving where we shouldn't be."
  - *Story:* The board meeting where I admitted six tests in, the curve wasn't bending. (See Story #3.)
  - *Data:* "Free-to-paid stuck at 0.4% — eight times below where it had to land. That gap doesn't close with one more A/B test."

  **Takeaway 3: Compliance is a moat horizontal players can't catch.**
  - *Short:* "Compliance work isn't a feature, it's a year-long head start."
  - *Story:* Brookline's CIO telling us we won because we took compliance seriously. (See Story #1.)
  - *Data:* "The HIPAA AI work took us 14 months. A horizontal competitor would have to choose to do that and choose to slow their core roadmap to do it. Most won't."

  ## Signature Stories

  **Story #1: Brookline Friday**
  - *Setup:* Friday afternoon, late March. Largest deal in our history sitting in escrow for two weeks.
  - *Turn:* Their CIO emails the contract back signed and writes one sentence: "You were the only company that took the compliance question seriously."
  - *Lesson:* The hard work that nobody can see is what wins the deal you can.
  - *Best used when:* host asks about wins, about strategy paying off, about why focus matters.

  **Story #2: The financial-services pivot we didn't take**
  - *Setup:* Last summer, two financial-services prospects came in cold. Both ready to buy. Sales team excited.
  - *Turn:* The morning of the third meeting I told the team to walk away. Same product, different vertical, would have eaten our roadmap and our identity.
  - *Lesson:* The deals you turn down define your strategy more than the ones you take.
  - *Best used when:* host asks about discipline, about saying no, about how vertical focus actually works in practice.

  **Story #3: The SMB board meeting**
  - *Setup:* November board meeting, six pricing tests deep, conversion still at 0.4%.
  - *Turn:* I walked in with a slide titled "What I Got Wrong." I owned it. The board's reaction told me they'd been waiting for us to make the call.
  - *Lesson:* The expensive thing isn't the failed experiment. It's the months you spend pretending it might work.
  - *Best used when:* host asks about mistakes, about hard calls, about what nearly killed the company.

  **Story #4: Hiring Sandeep**
  - *Setup:* Sandeep was three days from accepting an offer somewhere else when we got into the picture.
  - *Turn:* I flew out, met him at a coffee shop on a Sunday, and pitched him for two hours on a job description that didn't exist yet. He joined a week later.
  - *Lesson:* The best hires are the ones where you build the role around the person, not the other way around.
  - *Best used when:* host asks about hiring, about leadership, about how a CEO actually spends time.

  ## Likely Questions With Drafted Answers

  **Q: How did you decide to focus on healthcare?**
  "We didn't decide all at once. Eighteen months ago, our top three logos by ACV all happened to be healthcare. I noticed one quarter, dismissed it as a coincidence. The next quarter the same thing was true and the deals were closing 40% faster than our average. By Q3 of that year I had to admit the data was telling us something we hadn't planned. We rewrote the company strategy in two weeks. The thing I'd recommend to any founder is — pay attention to the customers who buy fastest. They are showing you where you actually live."

  **Q: What almost killed Vantage?**
  "The thing that almost killed us isn't the thing people would guess. It wasn't a competitor or a missed quarter. It was an experiment we couldn't let go of. We spent $4 million on an SMB self-serve motion for 18 months. Six pricing tests, three repositioning attempts. The conversion never came. The expensive thing wasn't the experiment — experiments are fine. The expensive thing was the months I spent telling myself one more test would unlock it. We lost a quarter of velocity on what is now our actual business because of that conviction. The lesson I'd pay $4 million for: a failing experiment looks identical to a working one if you only let yourself see one more test."

  **Q: What's your relationship with the board?**
  "Honest. Sometimes uncomfortable. They've never told me what to do. They've told me what they're worried about and waited to see if I'd reach the same place. The best thing I do for them is walk into board meetings with the most pessimistic version of the company first. The worst thing I could do is surprise them. The relationship we have today is built on three years of not surprising them."

  *(Continue similar structure for remaining likely questions.)*

  ## Sensitive Topics — Pivot Lines

  - **Next round specifics:** "I'm not going to talk about the round timing — what I'll say is the cash position is the strongest it's been, and we're choosing on our timeline, not on the market's."
  - **Competitor names:** "I won't punch down on a specific name. I'll tell you what we watch — capital intensity at the low end of the market is the dynamic shaping the next 18 months for everyone, including us."
  - **The recent layoff:** "We closed the SMB product line two weeks ago. Fourteen people were affected. The decision was about a product bet, not the people, and we sent every one of them off with three months of severance, healthcare, and active references. I won't talk about specific people because that's their story to tell, not mine."

  ## Three Quotable Lines
  - "Horizontal companies serve everyone fine and nobody well."
  - "The expensive part of a failing experiment isn't the experiment — it's the months you spend telling yourself one more test will fix it."
  - "Compliance work isn't a feature. It's a year-long head start."

  ## Pre-Recording Checklist
  - **Open with:** the Brookline Friday story if Jordan opens with "tell me about Vantage today."
  - **Fallback story:** if a question lands flat, pivot to Story #3 (SMB board meeting). It works on almost any topic.
  - **Will not say:** specifics of the round; specific competitor names; details of any individual affected by the layoff.
  - **Walk out remembering:** "Horizontal companies serve everyone fine and nobody well." That's the line.
tips:
  - "Stories beat concepts every time. A podcast clip account is going to clip a story, not a thesis."
  - "Three versions of each takeaway lets the executive deliver the same point fresh when the host loops back."
  - "Pivot lines on sensitive topics should engage, not duck. 'I can't comment on that' is the worst possible answer."
  - "Practice the opening 60 seconds out loud. Most podcast appearances are made or broken in the first minute."
  - "After the recording, capture the lines the executive said that landed best — they become the talking points for the next appearance."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - press-statement
  - all-hands-narrative
  - company-update-email
  - fundraising-narrative
tags:
  - podcast
  - media
  - executive-comms
  - prep
  - storytelling
---
