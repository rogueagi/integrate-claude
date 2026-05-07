---
title: "Write a press release for a product launch or milestone"
slug: press-release
function: marketing
role: brand
description: "Generate a publication-ready press release in AP style for a product launch, funding announcement, or company milestone."
useCase: "Use this prompt when you need a press release for a major company announcement. A well-structured press release saves time in media outreach and gives journalists what they need to write a story without chasing you for details."
prompt: |
  You are a PR professional with experience writing press releases for B2B technology companies. Write a press release for the following announcement.

  Announcement details:
  - Company name: {{company_name}}
  - Announcement type: {{announcement_type}} (e.g., product launch, funding round, partnership, milestone, executive hire)
  - Headline news: {{headline_news}} (the core fact being announced)
  - Supporting details: {{supporting_details}} (key facts, numbers, context)
  - Quote from company executive: {{executive_quote}} (name and title of the quoter)
  - Quote from customer, partner, or investor (if applicable): {{third_party_quote}}
  - Company boilerplate: {{boilerplate}} (standard company description for the "About" section)
  - Release date: {{release_date}} (or "FOR IMMEDIATE RELEASE")
  - Media contact: {{media_contact}}

  Write a press release following AP style with this structure:

  **FOR IMMEDIATE RELEASE** (or embargoed date)

  **Headline:** (bold, one sentence, leads with the news not the company name — under 100 characters)

  **Subheadline:** (optional — one sentence that adds context)

  **Dateline:** City, State, Date —

  **Lead paragraph:** The most important facts in one paragraph — who, what, when, where, why. Journalists should be able to write the story from just this paragraph. Under 75 words.

  **Second paragraph:** Context and significance — why does this matter? How is this different or notable?

  **Executive quote:** Properly attributed, in quotation marks, adds perspective not just restates facts.

  **Body paragraphs:** Additional supporting details, how it works, who benefits, timeline.

  **Third-party quote (if applicable):** Customer, investor, or partner perspective.

  **About [Company Name]:** Boilerplate paragraph.

  **Media Contact:** Name, email, phone.

  Tone: factual, professional, newsy. Not promotional. Every claim should be a fact, not marketing language.
variables:
  - "{{company_name}}"
  - "{{announcement_type}}"
  - "{{headline_news}}"
  - "{{supporting_details}}"
  - "{{executive_quote}}"
  - "{{third_party_quote}}"
  - "{{boilerplate}}"
  - "{{release_date}}"
  - "{{media_contact}}"
exampleInput: |
  company_name: Anchor Analytics
  announcement_type: product launch
  headline_news: Anchor Analytics launches AI-powered anomaly detection for operations teams, automatically flagging metric deviations before they become business problems
  supporting_details: |
    - Feature called "Signal" — monitors 50+ operational KPIs in real time
    - Sends alerts via Slack or email when metrics deviate from expected ranges by more than a configurable threshold
    - Available to all Anchor customers on Professional and Enterprise plans starting April 15
    - Beta customers saw average alert-to-action time drop from 48 hours to under 2 hours
    - No SQL or data science background required to configure
  executive_quote: "Most operations teams find out something went wrong when a customer complains or when the monthly report is late. Signal changes that. It's like having a dedicated analyst watching your metrics around the clock." — Elena Vasquez, CEO and Co-founder
  third_party_quote: "We caught a fulfillment error that would have affected 2,000 orders before it became a customer service issue. Signal flagged it 6 hours before anyone on our team would have noticed." — Marcus Okonkwo, VP of Operations, Crestwood Distribution
  boilerplate: Anchor Analytics is a business intelligence platform built for operations teams at mid-market companies. Founded in 2021, Anchor helps non-technical operators connect their data, monitor their KPIs, and make faster decisions without depending on a data team. Anchor is headquartered in Austin, Texas, and serves over 400 customers across logistics, retail, and professional services.
  release_date: FOR IMMEDIATE RELEASE
  media_contact: "Priya Lim, Head of Communications | press@anchoranalytics.io | 512-555-0192"
exampleOutput: |
  FOR IMMEDIATE RELEASE

  **Anchor Analytics Launches AI Anomaly Detection for Operations Teams**
  *New "Signal" feature monitors 50+ KPIs in real time, alerting teams to metric deviations before they become business problems*

  Austin, Texas, April 15, 2024 — Anchor Analytics, the business intelligence platform for operations teams, today announced the launch of Signal, an AI-powered anomaly detection feature that automatically monitors operational metrics and alerts teams when key indicators deviate from expected performance ranges.

  Signal monitors more than 50 operational key performance indicators in real time, delivering alerts via Slack or email when metrics exceed configurable deviation thresholds. The feature is designed for operations teams without dedicated data staff and requires no SQL knowledge or technical configuration. Signal is available immediately to all Anchor customers on Professional and Enterprise plans.

  During a six-month beta program, customers using Signal reduced their average alert-to-action time from 48 hours to under two hours, enabling faster response to operational issues before they reached customers.

  "Most operations teams find out something went wrong when a customer complains or when the monthly report is late," said Elena Vasquez, CEO and Co-founder of Anchor Analytics. "Signal changes that. It's like having a dedicated analyst watching your metrics around the clock."

  Signal integrates with Anchor's existing data connections and requires no additional setup for customers already using the platform. Teams can configure alert sensitivity thresholds by metric, set notification routing by team or individual, and view anomaly history alongside normal metric trends.

  "We caught a fulfillment error that would have affected 2,000 orders before it became a customer service issue," said Marcus Okonkwo, VP of Operations at Crestwood Distribution, a Signal beta customer. "Signal flagged it six hours before anyone on our team would have noticed."

  **About Anchor Analytics**
  Anchor Analytics is a business intelligence platform built for operations teams at mid-market companies. Founded in 2021, Anchor helps non-technical operators connect their data, monitor their KPIs, and make faster decisions without depending on a data team. Anchor is headquartered in Austin, Texas, and serves over 400 customers across logistics, retail, and professional services. Learn more at anchoranalytics.io.

  **Media Contact**
  Priya Lim, Head of Communications
  press@anchoranalytics.io | 512-555-0192
tips:
  - "The lead paragraph is everything. If a journalist can't write a story from just that paragraph, rewrite it. The rest of the release is context — the lead is the news."
  - "Executive quotes should add perspective, not restate facts. 'We are excited to launch this product' is a waste of a quote. Give the executive something to say that only they can say."
  - "Never write 'industry-leading,' 'best-in-class,' or 'revolutionary' in a press release. These words flag your release as marketing copy and reduce journalist trust."
  - "Distribute to a targeted media list, not a blast. 5 journalists who cover your beat are worth more than 500 on a generic PR wire."
  - "Send the release at 9am local time on a Tuesday or Wednesday. Mondays and Fridays are low-attention days for PR."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - brand-voice-guide
  - product-launch-brief
  - investor-update-email
tags:
  - pr
  - press-release
  - brand
  - announcement
---
