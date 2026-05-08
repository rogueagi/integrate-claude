---
title: "External statement after a layoff"
slug: layoff-external-statement
function: pr-comms
role: crisis-comms
description: "Draft an external statement following a layoff that protects the brand, respects departing employees, and avoids the standard tech-layoff template."
useCase: "Use after a layoff has been announced internally to draft the external-facing statement (LinkedIn post, blog post, press response). The output reads as honest about the decision, generous toward departing employees, and avoids the macroeconomic-blame template that has become a meme."
prompt: |
  You are a comms director who has handled layoff communications at venture-backed and public companies. Draft an external statement for {{company_name}} regarding the {{layoff_size}} reduction in force communicated internally on {{internal_date}}.

  Inputs:
  - Total impact: {{layoff_size}} ({{percent_of_company}}% of headcount)
  - Functions affected: {{affected_functions}}
  - Real reason for the decision: {{real_reason}} (overhired in 2022; revenue trajectory off plan; consolidating bets; lost an enterprise customer)
  - The narrative we want to tell: {{narrative}}
  - Severance and support package: {{severance_details}}
  - What departing employees most want from this statement: {{departing_priorities}}
  - Who is signing: {{signer}}
  - Geographic considerations: {{geo_considerations}} (WARN Act, foreign jurisdictions, works councils)
  - Sensitive: any pending fundraising, M&A, or customer renewals: {{sensitive_context}}

  Structure:

  1. THE NEWS (first paragraph)
  Lead with the action and the size. "Today we are reducing our team by [X] people." Not "We have made some difficult changes."

  2. THE WHY (second paragraph)
  The honest version, calibrated to what we can legally and strategically say. If we overhired, say we overhired. If we made a strategic shift, name what we are doing instead. Avoid the "macroeconomic uncertainty" template; everyone knows what that means now.

  3. WHO IS LEAVING AND WHAT WE ARE DOING FOR THEM
  Severance, healthcare continuation, equity treatment, immigration support, recruiting help. Be specific. Numbers and weeks, not "generous package."

  4. WHO IS LEAVING (the human paragraph)
  Acknowledge the people, not just the headcount. The work they did. The fact that they will be hired elsewhere quickly. If a referrals doc or talent directory is being shared, link it.

  5. WHAT'S NEXT FOR THE COMPANY
  Briefly. The roadmap, the plan, the focus. Do not over-promise. Do not say "we are stronger than ever." This is not the moment.

  6. SIGN-OFF
  Named human. The CEO or founder. Not "the team at [Company]."

  Hard rules:
  - Do not blame "the macroeconomic environment" alone. Investors and reporters call this out now.
  - Do not say "this is the hardest decision we've ever had to make." Cliché.
  - Do not say "we are doubling down" on anything.
  - Do not call laid-off people "talented colleagues" without specifics about what they did.
  - Do not announce externally before internal communication is complete.
  - Do not promise "no further layoffs" unless you are absolutely certain.

  Voice: sober. Not warm. Not cold. The reader should feel the weight of the decision, not the company's discomfort.

  Output: the statement, then a 3-bullet companion note: (1) what to coordinate with the internal comms team before posting, (2) which lines are most likely to be quoted by press, (3) the single most important commitment to make sure ops/finance can deliver on.
variables:
  - "{{company_name}}"
  - "{{layoff_size}}"
  - "{{percent_of_company}}"
  - "{{internal_date}}"
  - "{{affected_functions}}"
  - "{{real_reason}}"
  - "{{narrative}}"
  - "{{severance_details}}"
  - "{{departing_priorities}}"
  - "{{signer}}"
  - "{{geo_considerations}}"
  - "{{sensitive_context}}"
exampleInput: |
  company_name: Linden AI
  layoff_size: 22 people
  percent_of_company: 12
  internal_date: April 23, 2026 (yesterday morning)
  affected_functions: Sales (8), CS (6), G&A (4), Engineering (4 — consolidating two infra teams)
  real_reason: We overhired sales heads against a 2025 plan that did not fully materialize; we also concluded that two infra teams were duplicative after the agent platform rebuild last year.
  narrative: This is a refocus, not a retreat. We grew the sales org for an enterprise motion that took longer than planned; we built infra for two architectures and only one shipped. Both are correctable mistakes that we are correcting.
  severance_details: 16 weeks of base salary plus 1 week per year of tenure (capped at 26). Six months of healthcare paid by the company. Equity vesting cliff waived for anyone with under one year. Immigration counsel covered for visa-dependent employees. 90-day window to exercise vested options.
  departing_priorities: They want recognition that the layoff was a strategic mistake, not their performance. They want references and the talent directory to land before Friday so other companies can hire them.
  signer: Maya Okafor, co-founder and CEO
  geo_considerations: 4 employees in Canada (statutory severance applies above our package). 1 employee in the UK (works council notification not required at this size).
  sensitive_context: Series B announcement is in 14 days. Comms team is split on whether to issue this statement now or wait — counsel says now.
exampleOutput: |
  Today we are reducing our team at Linden AI by 22 people, about 12 percent of the company. The reductions affect roles in sales, customer success, engineering, and general and administrative functions.

  This is the result of two specific mistakes I made, and it's important to name them. First, last year we hired against an enterprise sales plan on the assumption deals would close on a faster cycle than they did; we kept hiring for several months after the data said to slow down. Second, our engineering team was building toward two infrastructure architectures during the agent platform rebuild, and only one of them shipped. We carried both teams longer than was useful. Neither of these were performance problems on the part of the people leaving today. They were planning errors at the executive level, and they are mine.

  Everyone affected was told yesterday morning. Each person is receiving 16 weeks of base salary plus an additional week per year of tenure, with no cap reduction below 16 weeks. The company is paying healthcare premiums in full for six months. We are waiving the one-year vesting cliff for anyone affected. We are extending the option exercise window to 90 days. For employees on work-authorization visas, we are covering counsel through May 31. Our Canadian colleagues are being supported above statutory minimums.

  The 22 people leaving Linden today are the people who built the company we have. They include the engineer who shipped our first agent into production, the AE who closed the first $1M ACV deal, and people who joined when this was a much smaller bet. A talent directory will be live tomorrow at linden.ai/team-2026 with permission-based profiles. If you are hiring and you are reading this, the people on that list are exceptional, and they will be hired quickly. I am personally available as a reference for any of them.

  We are continuing to ship the autonomous support platform and continuing to invest in customer success and engineering for our enterprise customers. We are not pausing the roadmap. We will move forward with a smaller team, and we will not pretend that smaller is automatically better.

  To the team that remains: I will speak with you in person at the all-hands today. To the team that is leaving: thank you. The mistake was mine. The work you did is real, and it is going to follow you wherever you go next.

  — Maya Okafor, co-founder and CEO

  COMPANION NOTES
  - Coordinate with internal comms before posting: the talent directory must be live and tested by the time this goes external. Departing employees want it as a working artifact, not a promise. Confirm consent flows are working for every individual on the list before publish.
  - Most likely to be quoted: "they were planning errors at the executive level, and they are mine" and "we will not pretend that smaller is automatically better." Both will be picked up by Axios and likely by Casey Newton's Platformer in his "layoff letters" recurring piece.
  - The single commitment ops/finance must deliver on: 6 months of full-pay healthcare. This is the line that will be checked. If finance has any caveat (e.g., COBRA mechanics, dependent coverage exclusions), surface and resolve before publishing — promised healthcare that doesn't fully materialize is the layoff comms equivalent of a missed earnings call.
tips:
  - "Most layoff letters fail at the second paragraph — the 'why.' If you can't name the specific decision that led here, you aren't being accountable; you're producing copy."
  - "The departing-employee paragraph should describe specific people's work, not generic praise. 'The engineer who shipped our first agent' lands; 'incredibly talented colleagues' does not."
  - "Have the internal all-hands script and the external statement reviewed in the same session. Tonal mismatch between the two damages both."
  - "The CEO must sign with their own name and own email. 'The team at [Company]' is the layoff-letter equivalent of hiding."
  - "Time the post: same day as internal communication, but late enough that affected employees have had a 1:1 first. Posting before they know is unforgivable."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - apology-statement-public
  - crisis-holding-statement
  - company-announcement-internal
  - cofounder-letter-customer
tags:
  - layoff
  - crisis
  - executive-comms
  - public-statement
  - rif
---
