---
title: "Summarize and communicate an expense policy"
slug: expense-policy-summary
function: finance
role: accounting
description: "Convert a detailed expense policy into a clear, employee-facing summary that covers what's allowed, what's not, and how to submit — without the legal language."
useCase: "Use this prompt when rolling out a new expense policy, updating an existing one, or onboarding new employees. Most expense policies are written for compliance, not comprehension — this prompt produces the plain-language summary that employees will actually read and follow."
prompt: |
  You are a finance manager or Controller writing a plain-language expense policy summary for employees.

  Context:
  - Company: {{company_name}}
  - Employee audience: {{audience}} (e.g., all employees, sales team only, managers)
  - Expense categories covered: {{expense_categories}} (travel, meals, equipment, software, client entertainment, etc.)
  - Reimbursement limits by category: {{policy_limits}} (per-diem rates, meal caps, hotel caps, etc.)
  - Submission process: {{submission_process}} (tool used, frequency, required documentation)
  - Approval workflow: {{approval_workflow}} (who approves what, thresholds for higher approval)
  - Common violations or edge cases: {{common_issues}} (things employees frequently get wrong)
  - Tone: {{tone}} (formal, casual, or neutral)

  Write a policy summary with these sections:

  ## What This Policy Covers (1 paragraph)
  Who this policy applies to and what kinds of expenses it governs. Keep it brief — employees should immediately know if this is relevant to them.

  ## What We'll Reimburse (table format by category)
  For each expense category:
  - Category name
  - What's covered (examples of approved expenses)
  - Spending limit or guideline
  - What's not covered (common exclusions)

  ## How to Submit an Expense
  Step-by-step instructions for the reimbursement process:
  - What tool to use
  - What documentation is required (receipts, approvals, business purpose)
  - Submission deadline
  - When payment is issued

  ## Approval Process
  Clear explanation of who approves what, at what dollar thresholds, and how long approval typically takes.

  ## Common Questions (FAQ format)
  5–7 frequently asked questions with concise answers — focus on edge cases and gray areas employees ask about most.

  ## What Happens If You Submit Something Outside Policy
  Clear, non-punitive explanation of what occurs: the expense is returned for revision, not reimbursed, or escalated. Avoid legalese — explain it the way a manager would in a conversation.

  Tone: direct and helpful. Employees don't read policies they find confusing or punitive. The goal is compliance through clarity, not compliance through fear.
variables:
  - "{{company_name}}"
  - "{{audience}}"
  - "{{expense_categories}}"
  - "{{policy_limits}}"
  - "{{submission_process}}"
  - "{{approval_workflow}}"
  - "{{common_issues}}"
  - "{{tone}}"
exampleInput: |
  company_name: Anchor Analytics
  audience: all employees
  expense_categories: travel (flights, hotels, ground transport), meals (team and client), home office equipment, software/subscriptions, client entertainment, professional development
  policy_limits: |
    Flights: economy required unless >4 hours; book 14+ days in advance when possible
    Hotels: $250/night cap in major cities, $175 elsewhere; Airbnb allowed if cheaper
    Meals (individual): $75/day per diem when traveling; no per diem for non-travel meals
    Meals (team): up to $40/person for team meals, manager approval required
    Client entertainment: up to $150/person, VP approval required for >$500 total
    Home office: up to $500 one-time for equipment (monitor, keyboard, etc.), preapproval required
    Software/subscriptions: up to $50/month without approval; over $50 requires manager approval
    Professional development: up to $1,000/year per employee, manager approval required
  submission_process: Submit via Expensify within 30 days of expense; attach receipts for all items >$25; include business purpose note for all meals and entertainment
  approval_workflow: Manager approves all submissions; VP approval for expenses >$500; CFO approval for expenses >$2,000
  common_issues: Employees submitting alcohol as a separate line item (it's included in meal totals, not a separate category); missing receipts; submitting expenses older than 30 days
  tone: casual and friendly
exampleOutput: |
  ## What This Policy Covers
  This policy applies to all Anchor Analytics employees and covers reimbursable business expenses including travel, meals, home office equipment, software subscriptions, client entertainment, and professional development. If you spend money on behalf of the company, this guide tells you what we'll pay back and how to get reimbursed.

  ## What We'll Reimburse

  | Category | What's Covered | Limit | What's Not Covered |
  |---|---|---|---|
  | Flights | Economy class (business class if flight >4 hours) | Book 14+ days out when possible | First class, non-refundable tickets without approval, personal add-ons |
  | Hotels | Business-appropriate hotels; Airbnb OK if it saves money | $250/night in major cities, $175 elsewhere | Luxury upgrades, resort fees unrelated to business, room service alcohol |
  | Ground transport | Uber/Lyft, taxis, rental cars for business travel | Reasonable and direct routes | Personal detours, daily car rental without approval |
  | Meals (traveling) | All meals when you're on a business trip | $75/day per diem (breakfast + lunch + dinner combined) | Alcohol as a separate item (included in meal total) |
  | Team meals | Manager-organized team lunches or dinners | $40/person, manager approval required | Regular individual lunch at the office |
  | Client entertainment | Meals, events with clients or prospects | $150/person; VP approval if total >$500 | Personal entertainment, events without a named client or prospect |
  | Home office equipment | Monitor, keyboard, mouse, desk accessories | $500 one-time, preapproval required | Furniture, personal computers, phones |
  | Software & subscriptions | Work-related tools and apps | Up to $50/month without approval; manager approval over $50 | Personal subscriptions, software the company already provides |
  | Professional development | Conferences, courses, books, certifications | $1,000/year, manager approval required | Degree programs, non-job-related courses |

  ## How to Submit an Expense
  1. Log into Expensify (expensify.com — you're already set up with your Anchor email)
  2. Create a new expense and enter the amount, date, category, and a brief business purpose note (e.g., "dinner with Meridian Health team before onsite")
  3. Attach a photo or PDF receipt for any expense over $25
  4. Submit your expense report to your manager
  5. Submit within 30 days of the expense — older expenses may not be reimbursed
  6. Once approved, reimbursement is processed in the next bi-weekly payroll cycle

  ## Approval Process
  - **Under $500:** Your direct manager approves in Expensify
  - **$500–$2,000:** Manager approves, then VP approves (you'll see it move to the next stage)
  - **Over $2,000:** Manager + VP + CFO approval required — plan for 3–5 business days
  - Most expenses are approved within 2 business days once submitted to your manager

  ## Common Questions

  **Can I expense a nice bottle of wine at a client dinner?**
  Yes — alcohol at client meals is included in the per-person entertainment budget. It doesn't need to be separated out. Just make sure the total stays under $150/person (or get VP approval if it'll exceed that).

  **I forgot to submit an expense from 6 weeks ago. Can I still submit it?**
  Technically, our policy covers expenses within 30 days. If it's older than that, talk to your manager first — they'll approve it as an exception if there's a good reason. Finance will process it case-by-case.

  **My flight was cheaper to book last-minute. Do I still get reimbursed?**
  Yes, you'll be reimbursed for the actual cost. The 14-day guideline is a suggestion to help us manage costs — if you genuinely couldn't book earlier, that's fine.

  **I use a personal credit card for all work expenses. Is that okay?**
  Yes, that's the standard process. Submit through Expensify, and we'll reimburse you via payroll. We don't currently offer company cards to all employees.

  **Can I expense a standing desk for my home office?**
  Furniture isn't covered under the home office equipment budget (which is for peripherals like monitors and keyboards). If you have a specific need, talk to your manager — it can be approved as an exception with VP sign-off.

  **What if a receipt was lost or I paid cash?**
  For receipts under $25, no receipt is required. For larger amounts, do your best to get a duplicate from the vendor. If you truly can't, write a brief memo explaining the expense — your manager can approve it on a judgment basis.

  **I'm going to a conference and want to expense the workshops and networking dinner. Is that covered?**
  Conference registration is covered under professional development ($1,000/year limit). The networking dinner is covered under meals (per diem applies). Just submit them as separate line items and include the conference name in the business purpose.

  ## What Happens If You Submit Something Outside Policy
  If an expense doesn't fit the policy, your manager or finance will send it back to you in Expensify with a note explaining why. You'll be asked to either (a) modify the description or category, (b) get additional approval, or (c) acknowledge that it won't be reimbursed. Nothing gets rejected without an explanation, and you're always welcome to ask finance@anchor.com if you're not sure whether something qualifies before you submit.
tips:
  - "The FAQ section prevents the emails that finance gets constantly. Poll your finance team for the 5 questions they've been asked in the last 6 months — those are the FAQs to write."
  - "Avoid the word 'prohibited' — it's punitive language that puts employees on the defensive. 'Not covered' or 'not reimbursable' conveys the same message without the adversarial tone."
  - "State the reimbursement timing explicitly. 'When will I get my money back?' is the most common expense policy question — answering it proactively reduces finance's inbox."
  - "Refresh the FAQ section quarterly. Edge cases that require one-off decisions from finance are usually edge cases because the policy didn't address them — add the answer to the policy so the next employee can self-serve."
  - "If your company has a manager expense card or corporate card program, document that separately. Mixing reimbursement policy with card policy creates confusion."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - month-end-checklist
  - vendor-invoice-dispute
tags:
  - expense-policy
  - accounting
  - employee-comms
  - finance-ops
  - reimbursement
---
