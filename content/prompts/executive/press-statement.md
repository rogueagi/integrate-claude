---
title: "Draft a press statement on a company event"
slug: press-statement
function: executive
role: comms
description: "Generate a short, on-the-record press statement on a company event — funding, leadership change, incident, or announcement — that lands the message without spin."
useCase: "Use this when you need a press-ready statement quickly, with the right balance of clarity and care. Most company press statements read identical and say nothing. This prompt produces one that holds up to a journalist's read and survives being quoted in full."
prompt: |
  You are a corporate communications partner who has placed statements at WSJ, TechCrunch, and trade publications. Draft a press statement for {{company_name}} on the following event.

  Inputs:
  - Company: {{company_name}}
  - Event type — pick one: funding, executive change, product launch, incident, regulatory, M&A, response to external event: {{event_type}}
  - The factual news: {{news}}
  - Spokesperson and title: {{spokesperson}}
  - The single message we want to land: {{key_message}}
  - Sensitivities — what we cannot say or must say carefully: {{sensitivities}}
  - Audience priority — pick one: customers, employees, prospective hires, investors, regulators, general public: {{primary_audience}}
  - Embargo or release timing: {{timing}}

  Produce three artifacts:

  ## 1. The Statement (For Public Release)
  - 80–150 words.
  - Opens with the factual news in one sentence.
  - One spokesperson quote — the only emotional or directional sentence in the statement, attributed to {{spokesperson}}. Sounds like a person, not a press release.
  - Closes with one forward-looking sentence that does not over-promise.
  - No "we are excited," "we are thrilled," "industry-leading."
  - No filler. Every sentence earns its place.

  ## 2. The Internal-Only Briefing
  Sent to employees ahead of public release. 100–200 words. Confirms what the public statement says, adds the context employees need that the public version doesn't include, and tells them what to do if asked by press, customers, or candidates.

  ## 3. The Q&A For The Spokesperson
  Eight questions a journalist is most likely to ask, with drafted answers. Include at least:
  - The hardest question (the one the spokesperson does not want to be asked)
  - The "what's the catch" question
  - The forward-looking question

  Each answer:
  - 2–4 sentences spoken
  - Stays inside what {{key_message}} authorizes
  - Includes a pivot line if the question is unsafe

  Constraints:
  - Statements must be defensible if quoted in full out of context.
  - If a fact is contested or in motion, frame it as "as of [date]" rather than asserting permanence.
  - Sensitivities in {{sensitivities}} must be respected — flag any line that would benefit from legal review.
variables:
  - "{{company_name}}"
  - "{{event_type}}"
  - "{{news}}"
  - "{{spokesperson}}"
  - "{{key_message}}"
  - "{{sensitivities}}"
  - "{{primary_audience}}"
  - "{{timing}}"
exampleInput: |
  company_name: Vantage Systems
  event_type: funding
  news: closed $40M Series C led by Northgate Capital with participation from existing investors; valuation undisclosed; capital used to scale healthcare go-to-market and AI compliance roadmap
  spokesperson: Lila Hassan, CEO
  key_message: this round is a focused capital decision — not a growth-at-all-costs round — to extend our lead in healthcare analytics
  sensitivities: do not disclose valuation; do not name customers without their permission; cannot reference layoff conducted six weeks earlier on the record
  primary_audience: prospective hires and customers in the healthcare segment
  timing: embargoed Tuesday May 12, 9am ET
exampleOutput: |
  ## 1. The Statement

  **Vantage Systems Closes $40M Series C to Extend Lead in Healthcare Analytics**

  *San Francisco — May 12, 2027* — Vantage Systems, the analytics platform for mid-market healthcare providers and payers, has closed a $40 million Series C round led by Northgate Capital, with participation from existing investors. The capital will fund continued investment in the company's healthcare go-to-market and the expansion of its AI compliance roadmap.

  "This round is about depth, not breadth," said Lila Hassan, CEO. "We made the call eighteen months ago to focus on healthcare, and the customers we serve in this space are the reason that bet has worked. Northgate believes in the same thing we do — that the next decade in analytics is going to be won by the platforms that take the hard problems in regulated industries seriously."

  Vantage now serves more than 90 mid-market healthcare organizations and is hiring across product, engineering, and customer success.

  ## 2. The Internal-Only Briefing

  **Subject: Series C — what's public Tuesday and what's just for us**

  Team,

  Tuesday at 9am ET we'll announce the $40M Series C, led by Northgate, with our existing investors participating. The public statement and FAQ are in the attached doc.

  Two pieces of context that aren't in the public version:

  This round was raised on a healthy multiple but the valuation is intentionally undisclosed — we'd rather have the press write about the strategy than the price. The cash position now extends our default-alive runway by about 24 months, even if we never burn at the planned rate.

  The capital is going to two places: scaling healthcare go-to-market and accelerating the AI compliance module. We're hiring meaningfully in both — open roles will be live on the careers page Tuesday morning.

  If you get questions from press, candidates, or customers: please point them to me, or to the public statement. The press strategy works best when we speak with one voice this week. If a customer or candidate asks for context beyond the statement, you can confirm what's in it and direct them to my email — I'll handle the rest.

  All-hands Wednesday afternoon. We'll walk through the year ahead and what this round actually changes day-to-day for the company.

  — Lila

  ## 3. Q&A For The Spokesperson

  **Q1: Why did you raise now?**
  "We didn't have to. The cash position was strong. We raised because the healthcare opportunity moves on its own clock and we wanted to be the company hiring and shipping into that window, not the one watching it. The window is open now and the alternative was to be marginally more careful and meaningfully less ambitious."

  **Q2: What's the valuation?**
  "We're not disclosing it. The honest reason is the strategy is more interesting than the price. We can talk about what the capital is for, where it's going, and what we're committing to deliver — those are the things that actually matter."

  **Q3: How are you using the capital?**
  "Two places. Healthcare go-to-market — sales, customer success, partnerships in the segment we focus on. And the AI compliance roadmap — engineering, product, and the ongoing work of staying ahead of the regulatory landscape in a category where most players don't want to do that work."

  **Q4: A few of your competitors raised much larger rounds in the last twelve months. How do you compete with that capital?**
  "I don't try to. The companies that raise much larger rounds are usually trying to be many things to many buyers. We've made the opposite choice — focus on one segment and serve it deeper than anyone else can. That doesn't take more capital. It takes more discipline."

  **Q5: Are you profitable?**
  "We're on plan to be default-alive by the end of this year. This round extends that runway considerably and gives us a choice on timing for the next decision."

  **Q6: What's the biggest risk to your plan?**
  "The biggest risk to any focused company is that the segment moves faster than you do. Healthcare is in a period of rapid change — regulatory, competitive, M&A. The risk is staying as close to that change as we have been. The mitigation is the team and the customers we have right now, and the capital we just raised gives us more room to stay close."

  **Q7: How big can Vantage get inside healthcare alone?**
  "Big enough that the question of horizontal expansion doesn't need to be a 2027 conversation. Mid-market healthcare in the US alone is a category large enough to support a multi-billion-dollar revenue business. We're not close to that ceiling yet."

  **Q8: What's next?**
  "Two things in 2027. The AI compliance module GA, which is the single most important product release this company will make this year. And growing the customer base in mid-market healthcare from 90 to roughly 200. Everything else flows from those two."

  *(Pivot line on layoff if asked: "Earlier this year we closed the SMB product line. That decision was about a product bet that didn't produce the economics we needed, and the affected colleagues received severance, healthcare continuation, and active references. We're focused on the work ahead and on the customers we serve today.")*

  *(Note for legal: confirm round size, lead investor naming permission, and customer-count claim before publication.)*
tips:
  - "The single quote in a press statement is the only sentence a journalist is likely to use verbatim. Spend the most time there."
  - "Avoid 'thrilled,' 'excited,' 'industry-leading' — they signal that no one read the statement carefully."
  - "Embargoed releases require employees to know before reporters do. Internal briefing first, every time."
  - "The hardest Q&A question is the one the spokesperson hopes to skip. That's exactly the one to draft an answer for."
  - "Have legal and the lead investor's comms partner review the statement before going live. Saves the post-publication correction."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - company-update-email
  - exec-podcast-talking-points
  - fundraising-narrative
  - layoff-communication
tags:
  - press
  - media
  - executive-comms
  - statement
  - announcement
---
