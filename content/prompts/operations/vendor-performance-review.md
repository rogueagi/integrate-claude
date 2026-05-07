---
title: "Write a quarterly vendor performance review"
slug: vendor-performance-review
function: operations
role: vendor-management
description: "Generate a structured quarterly vendor performance review that evaluates delivery, quality, SLA adherence, and relationship health — and sets expectations for the next quarter."
useCase: "Use this prompt each quarter for any vendor relationship significant enough to manage actively. Regular performance reviews prevent the gradual deterioration of vendor relationships and give you documentation if you ever need to enforce contract terms or exit."
prompt: |
  You are an experienced vendor manager. Write a comprehensive quarterly vendor performance review for the vendor relationship described below.

  **Vendor name:** {{vendor_name}}
  **Service provided:** {{vendor_service}}
  **Review period:** {{review_period}}
  **Internal relationship owner:** {{relationship_owner}}
  **Contract value:** {{contract_value}}
  **Contract terms summary:** {{contract_terms}}
  **SLAs and commitments:** {{slas}}
  **Performance data this quarter:** {{performance_data}}
  **Incidents or issues this quarter:** {{incidents}}
  **Positive highlights:** {{highlights}}
  **Business changes affecting the relationship:** {{business_changes}}
  **Goals for next quarter:** {{next_quarter_goals}}

  Write a vendor performance review with these sections:

  ## 1. Review Summary
  - Vendor, period, reviewer, date
  - Overall performance rating: Exceeds Expectations / Meets Expectations / Below Expectations / Unsatisfactory
  - One-paragraph executive summary: the most important things to know about this vendor relationship this quarter

  ## 2. SLA and Contractual Compliance
  For each SLA or contractual commitment:
  | SLA / Commitment | Target | Actual | Met? | Notes |

  Calculate overall SLA compliance rate. Flag any SLA that was missed more than once.

  ## 3. Quality Assessment
  Rate quality dimensions on a 1–5 scale with specific evidence:
  - **Delivery quality:** Are deliverables meeting requirements?
  - **Timeliness:** Are deadlines being met?
  - **Responsiveness:** How quickly does the vendor respond to requests and issues?
  - **Proactivity:** Does the vendor raise issues before they become problems?
  - **Communication:** Is communication clear, timely, and appropriate?
  - **Relationship quality:** Is the vendor a good partner?

  ## 4. Incident Review
  For each significant incident this quarter:
  - Incident description and date
  - Impact on our business
  - Vendor response time and quality
  - Root cause (as communicated by vendor)
  - Resolution
  - Prevention measures promised
  - Still open or fully resolved?

  ## 5. Financial Review
  - Invoicing accuracy: Were invoices correct and submitted on time?
  - Budget vs. actual spend this quarter
  - Any unexpected costs or overages?
  - Credits or penalties applied?
  - Forecast for next quarter

  ## 6. Relationship Strengths
  What is working well in this vendor relationship? Be specific — this section gives the vendor positive feedback and identifies practices to protect.

  ## 7. Areas for Improvement
  What needs to improve in the next quarter? For each area:
  - The specific gap or problem
  - Expected improvement with measurable target
  - Timeline for improvement
  - What we'll do differently on our side (if applicable)

  ## 8. Action Items and Commitments
  | Action | Owner | Due Date | Success Metric |
  (Include both vendor-owned and internal-owned actions)

  ## 9. Next Quarter Objectives
  3–5 specific objectives for the vendor relationship in the next quarter. Each should be measurable.

  ## 10. Overall Relationship Assessment
  - Would you renew this vendor? (Yes / Yes with conditions / No)
  - Risk level: Low / Medium / High
  - Recommended action: Continue as-is / Performance improvement plan / Begin replacement evaluation
variables:
  - "{{vendor_name}}"
  - "{{vendor_service}}"
  - "{{review_period}}"
  - "{{relationship_owner}}"
  - "{{contract_value}}"
  - "{{contract_terms}}"
  - "{{slas}}"
  - "{{performance_data}}"
  - "{{incidents}}"
  - "{{highlights}}"
  - "{{business_changes}}"
  - "{{next_quarter_goals}}"
exampleInput: |
  vendor_name: Zendesk
  vendor_service: Customer support ticketing platform
  review_period: Q3 2024 (July–September)
  relationship_owner: VP Customer Success (Linda Park)
  contract_value: $28,000/year ($7,000/quarter)
  contract_terms: 25 agent seats, 99.9% uptime SLA, 4-hour support response SLA for critical issues
  slas: "Uptime: 99.9% target. Support response for P1: 4 hours. Support response for P2: 12 hours."
  performance_data: |
    Uptime: 99.94% (one 32-minute outage July 18)
    P1 support responses: 3 tickets, avg response 5.2 hours (SLA: 4 hours)
    P2 support responses: 11 tickets, avg response 9.1 hours (SLA: 12 hours) 
    Invoices: 3 correct and on time
    Seats used: 22 of 25
  incidents: |
    July 18: 32-minute platform outage during business hours. Root cause: infrastructure maintenance that ran over. Zendesk proactively notified us 15 minutes in and offered a service credit ($350).
    August 29: P1 ticket re: broken email routing — Zendesk took 6 hours to respond (SLA: 4 hours). No explanation provided.
  highlights: |
    Zendesk proactively flagged a misconfiguration in our routing rules before it caused an issue.
    Their CSM (Priya) joined our monthly ops meeting to walk through new features — very helpful.
    The new AI suggested responses feature has reduced average handle time by 12%.
  business_changes: We're planning to add 5 new agents in Q4 as we scale CS headcount.
  next_quarter_goals: Expand to 30 seats, integrate with new CRM, improve P1 response SLA adherence
exampleOutput: |
  # Vendor Performance Review: Zendesk
  **Period:** Q3 2024 | **Reviewer:** Linda Park | **Date:** October 4, 2024

  ## 1. Review Summary
  **Overall Rating: Meets Expectations**

  Zendesk delivered solid platform performance in Q3 with 99.94% uptime and generally strong support responsiveness. Two concerns: the July 18 outage during business hours (handled well, with proactive communication and a credit), and one P1 SLA miss in August with no explanation provided. These are offset by genuinely valuable proactive support from their CSM and a new AI feature that measurably improved our team's efficiency. The relationship is healthy. We're planning Q4 expansion and should negotiate favorable seat pricing before December.

  ## 2. SLA and Contractual Compliance

  | SLA | Target | Actual | Met? | Notes |
  |-----|--------|--------|------|-------|
  | Platform uptime | 99.9% | 99.94% | Yes | 32-min outage July 18; credit issued |
  | P1 support response | 4 hours | 5.2 hours avg | No | 3 tickets; avg response over SLA; Aug 29 had 6-hour response |
  | P2 support response | 12 hours | 9.1 hours avg | Yes | Well within SLA |
  | Invoice accuracy | 100% | 100% | Yes | All 3 invoices correct and on time |

  **SLA compliance rate: 75% (3 of 4 SLAs met)**
  The P1 SLA miss requires follow-up. The August 29 incident response time of 6 hours exceeded the SLA by 50% with no explanation — we expect a formal response.

  ## 4. Incident Review

  **Incident 1: July 18 Platform Outage (32 minutes)**
  - Impact: CS team unable to access tickets during business hours; ~12 tickets handled manually
  - Vendor response: Proactive notification at minute 15; restored at minute 32; $350 credit offered unprompted
  - Root cause: Infrastructure maintenance overrun
  - Prevention: Zendesk committed to scheduling maintenance outside business hours (before 6am or after 8pm ET)
  - Assessment: Well-handled. Credit was appropriate. Commitment to maintenance scheduling is a meaningful improvement.

  **Incident 2: August 29 P1 SLA Miss (6 hours vs. 4-hour SLA)**
  - Impact: Email routing was broken for 2 hours before we implemented a workaround
  - Vendor response: 6 hours to respond; issue resolved once engaged
  - Root cause: Not communicated
  - Status: Still open — we have not received a root cause explanation or commitment to improvement
  - Action required: Formal response from Zendesk CSM within 2 weeks

  ## 6. Relationship Strengths
  - CSM (Priya) is engaged, proactive, and joined our monthly ops meeting voluntarily — above expectations
  - The AI suggested replies feature delivered measurable ROI (12% AHT reduction) this quarter
  - Proactive misconfiguration flag in August prevented a potential incident — exactly the kind of partnership we want

  ## 7. Areas for Improvement
  - **P1 support response reliability:** One miss this quarter is within tolerance, but the lack of explanation for the August 29 delay is not acceptable. Target: 100% P1 SLA compliance in Q4 with post-incident summary for any SLA miss.
  - **Business-hours maintenance:** July 18 outage should not recur. Hold Zendesk to their commitment.

  ## 10. Overall Relationship Assessment
  - **Would you renew?** Yes
  - **Risk level:** Low
  - **Recommended action:** Continue as-is; negotiate seat expansion before December; require formal response on August 29 P1 miss
tips:
  - "The review should be shared with the vendor before the review meeting, not presented for the first time at the meeting. Good vendors will come prepared with responses and data."
  - "Track SLA compliance over multiple quarters — a vendor who consistently misses the same SLA by a small margin is not compliant; they've just calibrated to your tolerance."
  - "Include positive feedback specifically. Vendor reviews that are purely critical damage the relationship and miss the chance to reinforce good behavior."
  - "The 'Would you renew?' question at the end forces an honest summary. If the answer is 'No,' document it now — don't wait for the contract renewal conversation."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - vendor-evaluation-scorecard
  - vendor-onboarding-checklist
  - vendor-negotiation-prep
  - escalation-policy-draft
tags:
  - vendor-management
  - performance-review
  - procurement
  - sla-management
  - operations
---
