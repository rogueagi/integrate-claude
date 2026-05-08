---
title: "Draft an offer letter for a new hire"
slug: offer-letter-draft
function: hr
role: recruiting
description: "Generate a clear, complete offer letter that communicates compensation, equity, benefits, and start date in plain language — while covering the key legal elements."
useCase: "Use this prompt to draft an offer letter for a new employee. The offer letter is often the first formal document a candidate receives from the company — it should be professional, clear, and complete. This prompt produces an offer letter that's thorough without being intimidating, and specific without being a full employment contract."
prompt: |
  You are an HR or People Ops lead drafting an offer letter for a new hire.

  Context:
  - Company: {{company_name}}
  - State of employment (governs at-will language): {{employment_state}}
  - Candidate name: {{candidate_name}}
  - Role title: {{role_title}}
  - Department: {{department}}
  - Reports to: {{reports_to}}
  - Start date: {{start_date}}
  - Work location: {{work_location}} (remote, hybrid, or office with address)
  - Employment type: {{employment_type}} (full-time, part-time, contractor)
  - Compensation: {{compensation}} (base salary or hourly rate, pay frequency)
  - Bonus: {{bonus}} (if applicable — target amount, structure, discretionary vs. guaranteed)
  - Equity: {{equity}} (if applicable — number of options, vesting schedule, strike price if available)
  - Benefits start date: {{benefits_start}} (first day, 30 days, 90 days)
  - PTO policy: {{pto_policy}} (accrued, unlimited, or specific days)
  - Key conditions: {{conditions}} (background check, reference checks, non-compete if applicable)
  - Offer expiration: {{offer_expiration}}

  Write a complete offer letter with:

  ## Opening
  Warm, professional congratulations that sets the tone.

  ## Role and Reporting Structure
  Title, department, manager — specific and unambiguous.

  ## Compensation
  Base salary or hourly rate, pay frequency, and if relevant, the difference between OTE and base.

  ## Bonus (if applicable)
  Target amount, structure, and clear language about discretionary vs. formula-based.

  ## Equity (if applicable)
  Number of options, vesting schedule, cliff, and plain-language explanation of what this means. Don't assume the candidate understands equity mechanics.

  ## Benefits Overview
  Key benefits with start date — medical/dental/vision, 401K (if applicable), PTO policy, and any notable perks.

  ## Start Date, Location, and Schedule
  Clear on when and where.

  ## Employment Conditions
  At-will language (state-appropriate), contingencies (background check, reference checks, visa status if applicable).

  ## Acceptance Instructions
  How to accept, deadline, and who to contact with questions.

  Tone: warm and professional. The offer letter is the beginning of the employment relationship — it should make the candidate feel welcomed and clear about what they're accepting.
variables:
  - "{{company_name}}"
  - "{{employment_state}}"
  - "{{candidate_name}}"
  - "{{role_title}}"
  - "{{department}}"
  - "{{reports_to}}"
  - "{{start_date}}"
  - "{{work_location}}"
  - "{{employment_type}}"
  - "{{compensation}}"
  - "{{bonus}}"
  - "{{equity}}"
  - "{{benefits_start}}"
  - "{{pto_policy}}"
  - "{{conditions}}"
  - "{{offer_expiration}}"
exampleInput: |
  company_name: Anchor Analytics, Inc.
  employment_state: California
  candidate_name: Jordan Rivera
  role_title: Senior Account Executive
  department: Sales
  reports_to: James Wu, VP of Sales
  start_date: May 20, 2024
  work_location: Remote (US) with quarterly in-person team weeks
  employment_type: Full-time
  compensation: $90,000 base salary, paid semi-monthly
  bonus: $90,000 target variable (15% commission on new ARR up to quota; 22.5% above quota); quarterly payout; 90-day ramp draw at $7,500/month
  equity: 10,000 stock options; 4-year vesting with 1-year cliff; strike price to be set at next 409A (estimated $1.20–$1.50/share); subject to board approval
  benefits_start: First day of employment
  pto_policy: Unlimited PTO (minimum 10 days encouraged; manager approval required for absences >5 consecutive days)
  conditions: Contingent on successful background check; at-will employment per California law; no non-compete
  offer_expiration: April 30, 2024 (5 business days)
exampleOutput: |
  April 23, 2024

  Jordan Rivera
  [Address on file]

  Dear Jordan,

  We're thrilled to offer you the opportunity to join Anchor Analytics as our Senior Account Executive. We've been genuinely impressed by your background and the conversations we've had, and we believe you'll make a significant contribution to our team.

  Below is a summary of the terms of this offer. Please review it carefully and reach out to Maya Chen (people@anchor.com) if you have any questions.

  ---

  **Role and Reporting**

  Position: Senior Account Executive
  Department: Sales
  Reports to: James Wu, VP of Sales
  Employment Type: Full-time
  Start Date: Monday, May 20, 2024

  **Work Location**

  This is a remote position (US-based). You'll work remotely on a day-to-day basis and join the full team for quarterly in-person weeks (locations rotate; travel covered by the company). Exact Q3 and Q4 dates will be shared in advance.

  ---

  **Compensation**

  *Base Salary:* $90,000 per year, paid semi-monthly ($3,750 per paycheck).

  *Variable Compensation:* Your on-target total earnings (OTE) are $180,000, with $90,000 in variable compensation.

  Your commission structure:
  - 15% commission on all new ARR you close, up to your $600,000 annual quota
  - 22.5% commission (1.5x accelerator) on new ARR above quota
  - Commissions are paid quarterly, within 30 days of the close of each calendar quarter

  *Ramp Draw (First 90 Days):* To support your ramp period, you'll receive a guaranteed draw of $7,500/month for months 1–3 (paid as part of your semi-monthly paycheck). The draw is not a loan — it is yours regardless of commission earned during that period. Beginning in month 4, variable compensation reverts to commission-only.

  All variable compensation is subject to the terms of Anchor Analytics' Commission Plan document, which will be provided separately and is incorporated by reference into this letter.

  ---

  **Equity**

  Subject to approval by Anchor Analytics' Board of Directors, you will be granted an option to purchase 10,000 shares of Anchor Analytics Common Stock.

  Key terms:
  - Vesting: 4-year vesting schedule with a 1-year cliff. After 12 months of continuous employment, 25% of your options vest. The remaining 75% vest monthly over the following 36 months.
  - Strike price: Set at the fair market value of Anchor Analytics Common Stock as determined by the next 409A valuation. Based on current estimates, we expect the strike price to be in the range of $1.20–$1.50 per share.
  - Exercise window: Options must generally be exercised within 90 days of separation from the company.

  This grant is subject to the terms of Anchor Analytics' 2022 Equity Incentive Plan and your individual option grant agreement, which you'll receive separately. We're happy to walk through what this means in practice — just ask.

  ---

  **Benefits**

  All benefits begin on your first day of employment.

  - *Health Insurance:* Anchor covers 100% of medical, dental, and vision premiums for you (employee coverage). Dependent coverage is available at employee cost.
  - *401(K):* Available through Guideline. Company match: 3% of base salary, vesting immediately.
  - *Paid Time Off:* Anchor offers unlimited PTO. We encourage a minimum of 10 days per year. Absences of 5+ consecutive business days require manager approval.
  - *Professional Development:* $1,000 per year for courses, conferences, or books. No pre-approval required for amounts under $300.
  - *Home Office:* One-time $500 home office stipend, reimbursable within your first 60 days.
  - *Parental Leave:* 12 weeks fully paid for all parents (birth, adoption, or foster placement).

  ---

  **Employment Terms**

  This offer is contingent on:
  - Successful completion of a background check (initiated after acceptance)
  - Your ability to work in the United States without visa sponsorship from Anchor Analytics

  *At-Will Employment:* Your employment with Anchor Analytics is at-will, meaning either you or the company may terminate the employment relationship at any time, with or without cause or notice, subject to applicable California law. Nothing in this letter creates an employment contract for a specific duration.

  Anchor Analytics does not require you to sign a non-compete agreement as a condition of employment.

  ---

  **To Accept This Offer**

  Please sign and return a copy of this letter by **Tuesday, April 30, 2024**. You can sign digitally (DocuSign link attached) or return a scanned copy to people@anchor.com.

  If you have questions about any part of this offer, please don't hesitate to reach out to me (maya@anchor.com) or James Wu (james@anchor.com) directly. We want you to have everything you need to make a confident decision.

  We're excited about what you'll bring to the team, Jordan. Welcome to Anchor Analytics.

  Sincerely,

  Marcus Chen
  CEO, Anchor Analytics, Inc.

  ---

  **Acceptance**

  I, Jordan Rivera, have read and understand the terms of this offer. I accept the position of Senior Account Executive at Anchor Analytics, Inc., under the terms described in this letter.

  Signature: ___________________________ Date: _______________
tips:
  - "The ramp draw is one of the most important elements for sales hires — be explicit about whether it's a loan (must be repaid) or a guaranteed draw (not repaid). Ambiguity here creates disputes."
  - "Explain equity mechanics in plain language in the letter itself. Don't assume candidates understand strike prices, vesting cliffs, or exercise windows — a brief explanation reduces confusion and increases the perceived value of the equity offer."
  - "State the offer expiration date clearly. Open offers create decision paralysis and make it harder for you to move to other candidates."
  - "The benefits overview should include start dates. Candidates with existing health insurance need to know when Anchor coverage begins — 'benefits day one' or 'benefits after 90 days' is a significant difference."
  - "At-will language is standard in most US states — include it, but don't make it prominent or threatening in tone. It's a legal requirement, not a threat. In California, be careful about any language that could be interpreted as guaranteeing continued employment."
complexity: intermediate
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - job-description-sales
  - interview-scorecard
  - candidate-rejection-email
  - salary-band-communication
tags:
  - recruiting
  - offer-letter
  - hr
  - compensation
  - hiring
---
