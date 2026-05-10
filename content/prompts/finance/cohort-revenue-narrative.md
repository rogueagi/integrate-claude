---
title: "Generate a cohort revenue narrative from a CSV summary"
slug: cohort-revenue-narrative
function: finance
role: fpa
description: "Turn a cohort revenue table into a written narrative that explains retention dynamics, expansion behavior, and what later cohorts say about the future of the book."
useCase: "Use this prompt when you have a cohort revenue table (signups by month or quarter, revenue retained at month 1, 3, 6, 12, 24) and need to explain it in a board update, investor letter, or internal review. Cohort tables look impressive but often go unread because nobody writes the story underneath. This prompt produces that story."
prompt: |
  You are a senior FP&A analyst writing the cohort retention narrative for {{company_name}}.

  Inputs:
  - Reporting period and as-of date: {{period}}
  - Cohort revenue table (cohorts as rows, months or quarters since signup as columns, values in dollars or percent of cohort starting revenue): {{cohort_table}}
  - Definition of cohort and metric used (gross dollar retention, net dollar retention, or revenue retained): {{metric_definition}}
  - Pricing or product changes that affect specific cohorts: {{pricing_or_product_changes}}
  - Business context (motion shifts, segment focus, churn events): {{business_context}}

  Produce the narrative with these sections:

  ## Headline
  One sentence that captures the most important truth in the table. Lead with the strongest signal, positive or negative.

  ## Cohort Curve Shape
  Describe the shape of a typical cohort curve at this company. Is the steepest drop in the first three months, or in the second year? Where does retention stabilize? Is there a plateau or a continued decline?

  ## Cohort Quality Trend
  Compare older cohorts to newer cohorts at the same maturity (for example, month 6 retention for the 2024 Q1 cohort vs. month 6 retention for the 2025 Q1 cohort). Are newer cohorts retaining better, worse, or similarly? Quantify.

  ## Expansion Behavior
  If the metric crosses 100 percent at some month, describe when expansion overtakes churn. Which cohorts expand? Which never do?

  ## Outliers and Drivers
  Identify any cohort that breaks the pattern — one that retained much better or worse than its neighbors. Connect to known causes: a pricing change, a churned anchor account, a product launch, a sales motion shift.

  ## Implications for the Forward Plan
  What do these cohorts imply for next year's revenue plan? Specifically, the magnitude of revenue that should be assumed from existing customers vs. the amount that must come from new sales.

  Tone: analytical, specific, and quantitative. Cite numbers from the table. Do not generalize where the data lets you be precise. Flag where the data is too thin to support a conclusion.
variables:
  - "{{company_name}}"
  - "{{period}}"
  - "{{cohort_table}}"
  - "{{metric_definition}}"
  - "{{pricing_or_product_changes}}"
  - "{{business_context}}"
exampleInput: |
  company_name: Lumen Health Software
  period: as of March 31 2026
  cohort_table: |
    Cohort,M0,M3,M6,M12,M18,M24
    2023 Q1,100%,94%,91%,88%,86%,85%
    2023 Q2,100%,93%,90%,87%,85%,84%
    2023 Q3,100%,92%,89%,87%,86%,87%
    2023 Q4,100%,91%,88%,89%,93%,(n/a)
    2024 Q1,100%,93%,92%,96%,103%,(n/a)
    2024 Q2,100%,95%,94%,101%,(n/a),(n/a)
    2024 Q3,100%,96%,97%,(n/a),(n/a),(n/a)
    2024 Q4,100%,97%,(n/a),(n/a),(n/a),(n/a)
  metric_definition: Net dollar retention by signup cohort, measured as period revenue from cohort members divided by their month-zero revenue. Includes expansion, contraction, and churn.
  pricing_or_product_changes: Q4 2023 launched Lumen Plus tier ($299 add-on); Q2 2024 introduced annual prepay incentive (8 percent discount); Q3 2024 sunset legacy Starter plan, force-migrated 14 accounts
  business_context: Shift from SMB self-serve to mid-market sales-led motion in mid-2024; CS team grew from 3 to 9; expansion playbook formalized Q1 2024
exampleOutput: |
  ## Headline
  Cohorts that signed up after the mid-2024 sales motion shift are retaining materially better than the 2023 cohorts, with the 2024 Q1 cohort crossing 100 percent net retention at month 18 and the 2024 Q2 cohort crossing it at month 12.

  ## Cohort Curve Shape
  The Lumen cohort curve has two distinct phases. Months 0 through 6 capture the early churn window: roughly 8 to 12 percent of starting revenue is lost to cancellation, downgrades, and customer failure. After month 6 the curve flattens and, for healthier cohorts, begins to rise as expansion overtakes churn. The 2023 cohorts plateau between 84 and 87 percent and stay there. The 2024 cohorts behave differently, with the curve turning back up around month 9 to 12.

  ## Cohort Quality Trend
  Comparing month-6 retention across cohorts shows clear improvement. The 2023 cohorts retained 89 to 91 percent at month 6. The 2024 cohorts retained 92 to 97 percent at the same maturity, an improvement of 4 to 8 points. This is consistent and present in every 2024 cohort, not driven by a single outlier. At month 12, the gap widens further: 2023 cohorts averaged 88 percent, while the 2024 Q1 and Q2 cohorts hit 96 and 101 percent.

  ## Expansion Behavior
  Expansion crosses through 100 percent net retention starting with the 2024 Q1 cohort at month 18 (103 percent), and earlier for the 2024 Q2 cohort (101 percent at month 12). No 2023 cohort has crossed 100 percent at any observed point. The implication is that expansion did not exist as a meaningful revenue source in the 2023 book, and now does for the 2024 book. The Lumen Plus add-on launch in Q4 2023 and the formalized expansion playbook in Q1 2024 are the most likely structural causes.

  ## Outliers and Drivers
  The 2023 Q4 cohort is an interesting partial outlier. After tracking the 2023 average through month 12, it climbs from 89 percent at M12 to 93 percent at M18, suggesting late expansion uptake. This is consistent with Lumen Plus availability becoming relevant to that cohort once they had reached steady-state usage. There are no negative outliers in the table; every cohort is within a normal band given its vintage.

  ## Implications for the Forward Plan
  If the 2024 cohort behavior persists for the 2025 cohorts (still too early to confirm — the 2024 Q4 cohort is only at month 3), the existing customer book should generate net positive revenue contribution at full maturity rather than being a drag. For the 2026 plan, two specific anchors. First, model existing-customer revenue at 100 to 102 percent of starting ARR for cohorts signed after Q1 2024, and 85 percent for cohorts signed before. Second, expansion ARR is becoming a real revenue line and should be planned and resourced as such — likely 8 to 12 percent of total new ARR by year end if the 2024 Q1 and Q2 trajectories hold.

  The data is too thin to draw strong conclusions about the 2024 Q3 and Q4 cohorts beyond month 6. The 2025 Q1 cohort should be added to this analysis next quarter to confirm the trend.
tips:
  - "Cite cohort-level numbers, not averages. The strength of cohort analysis is the granularity. Saying 'retention improved' is weaker than '2024 Q2 cohort retained 101 percent at M12 versus 87 percent for 2023 Q2'."
  - "Always tie cohort shifts to known structural changes — pricing, product, sales motion. If you cannot connect a cohort improvement to a cause, the trend may not be durable."
  - "Force a yes/no on whether expansion crosses 100 percent net retention for any cohort. That single fact changes how the business is valued."
  - "The youngest two cohorts almost always lack enough data. State that explicitly so the reader does not over-extrapolate."
  - "Provide the cohort definition and metric in the input. NDR by signup cohort is different from logo retention or revenue retained, and the narrative changes accordingly."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - saas-metrics-commentary
  - kpi-dashboard-commentary
  - monthly-finance-commentary
tags:
  - finance
  - cohort-analysis
  - retention
  - fpa
  - narrative
---
