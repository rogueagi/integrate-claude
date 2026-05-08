---
title: "Explain revenue recognition in plain English for a specific contract type"
slug: revenue-recognition-summary
function: finance
role: accounting
description: "Generate a plain-language explanation of how ASC 606 revenue recognition applies to a specific contract type — for use in team training, audit documentation, or executive education."
useCase: "Use this prompt when you need to explain revenue recognition to non-accountants (founders, sales reps, board members), document your accounting policy for a new contract type, or prepare internal guidance for the finance team on a novel revenue scenario."
prompt: |
  You are a Controller or technical accounting advisor explaining revenue recognition under ASC 606 (or IFRS 15) for a specific contract type.

  Context:
  - Company: {{company_name}}
  - Contract type: {{contract_type}} (e.g., annual SaaS subscription, professional services with milestones, usage-based pricing, multi-element arrangement)
  - Specific example contract: {{example_contract}} (describe the actual terms: amount, duration, deliverables, payment schedule)
  - Audience: {{audience}} (e.g., founder/CEO, sales team, new accountant, board member)
  - Key question being answered: {{key_question}} (e.g., "When do we recognize this revenue?", "How do we handle refundable deposits?", "What happens when a customer upgrades mid-year?")
  - Current accounting treatment: {{current_treatment}} (optional — what you're currently doing, to confirm or correct)

  Write an explanation with these sections:

  ## The Short Answer (1 paragraph)
  The plain-language conclusion first: when and how revenue is recognized for this contract type. No jargon — answer the question before explaining the framework.

  ## The ASC 606 Five-Step Framework Applied to This Contract
  Walk through each of the five steps, applied specifically to this contract type:
  1. Identify the contract with the customer
  2. Identify the performance obligations
  3. Determine the transaction price
  4. Allocate the transaction price to performance obligations
  5. Recognize revenue when (or as) performance obligations are satisfied

  For each step: state what ASC 606 requires, then explain how it applies to this specific contract.

  ## Worked Example
  Use the example contract provided to show exactly how the accounting entries flow:
  - What is recognized at contract signing?
  - What is deferred?
  - When is revenue recognized, and how much per period?
  - What happens to the deferred revenue balance over time?
  - Show example journal entries if the audience is an accounting team

  ## Common Edge Cases for This Contract Type
  3–5 scenarios that create complexity or require judgment:
  - What happens if the customer cancels early?
  - What if payment terms are non-standard (upfront vs. arrears)?
  - What if the contract is modified?
  - Any other specific edge cases relevant to this contract structure

  ## Practical Accounting Implications
  What does this mean for the accounting team's processes?
  - What documentation is needed at contract signing?
  - What recurring entries are required?
  - What tracking is needed in the deferred revenue schedule?
  - Any disclosure requirements worth noting

  Tone: clear and educational. The goal is understanding, not compliance theater. Use examples and avoid acronyms without definitions.
variables:
  - "{{company_name}}"
  - "{{contract_type}}"
  - "{{example_contract}}"
  - "{{audience}}"
  - "{{key_question}}"
  - "{{current_treatment}}"
exampleInput: |
  company_name: Anchor Analytics
  contract_type: Annual SaaS subscription billed upfront with a 30-day money-back guarantee
  example_contract: Customer signs a 12-month subscription on March 15, 2024. Total contract value: $24,000. Payment collected in full on March 20, 2024. Service starts March 15. 30-day money-back guarantee period ends April 15. No other deliverables.
  audience: CEO and Sales team (non-accountants)
  key_question: "When does this $24,000 count as revenue? Can we say we 'made' $24,000 on March 15?"
  current_treatment: Currently recognizing the full $24,000 when the invoice is paid
exampleOutput: |
  ## The Short Answer
  No — you cannot recognize the full $24,000 on March 15. When a customer pays $24,000 for a 12-month subscription, you've collected cash but haven't yet earned the revenue. You earn it over 12 months as the service is delivered — $2,000 per month. The $24,000 that hits your bank account on March 20 starts its life on the balance sheet as "deferred revenue" (a liability), and it moves to the income statement at $2,000 per month as you deliver the service. Additionally, the 30-day money-back guarantee creates a brief period of additional uncertainty that affects how quickly some of that deferred revenue can move.

  This matters because your current practice — recognizing the full amount when the invoice is paid — is not correct under GAAP (ASC 606). If you're heading into a fundraise or audit, this needs to be corrected. It doesn't change your cash position, but it does change your income statement.

  ## The ASC 606 Five-Step Framework Applied to This Contract

  **Step 1: Identify the contract with the customer.**
  ASC 606 requires a written or oral agreement that creates enforceable rights. Your signed subscription agreement plus the payment meets this threshold. The contract is identified as of March 15, 2024.

  **Step 2: Identify the performance obligations.**
  A performance obligation is a promise to transfer a distinct good or service to the customer. In a standard SaaS subscription with no other deliverables (no implementation, no training, no premium support), there is a single performance obligation: ongoing access to the Anchor Analytics platform over 12 months. This is a "series of distinct services" that is recognized ratably over the contract period.

  **Step 3: Determine the transaction price.**
  The transaction price is $24,000 — the amount Anchor will receive. The 30-day money-back guarantee creates a variable consideration element: during the guarantee period, some portion of the $24,000 might be refunded. In practice, if your historical refund rate is very low (under 5%), ASC 606 allows you to constrain variable consideration conservatively — meaning you can still recognize $2,000 for the first month on April 15 once the guarantee period is safely passed.

  **Step 4: Allocate the transaction price to performance obligations.**
  Since there's only one performance obligation (platform access), the full $24,000 is allocated to it. No allocation required.

  **Step 5: Recognize revenue when (or as) performance obligations are satisfied.**
  Platform access is delivered continuously over 12 months. Revenue is recognized ratably: $2,000 per month (or $65.75/day for a partial month). It is recognized "over time" because the customer simultaneously receives and consumes the benefit.

  ## Worked Example

  **March 15, 2024 — Contract signed, service begins:**
  No journal entry required yet (no cash received, no revenue earned — just a contract).

  **March 20, 2024 — Cash received ($24,000):**
  | Account | Debit | Credit |
  |---|---|---|
  | Cash | $24,000 | |
  | Deferred Revenue | | $24,000 |

  Cash is an asset. Deferred Revenue is a liability — you owe the customer 12 months of service.

  **March 31, 2024 — Recognize ~16 days of service (March 15–31):**
  16 days / 366 days × $24,000 = $1,049 of revenue earned in March.
  | Account | Debit | Credit |
  |---|---|---|
  | Deferred Revenue | $1,049 | |
  | Revenue | | $1,049 |

  **April 30, 2024 — Money-back guarantee period has passed; recognize April revenue:**
  30 days / 366 × $24,000 = $1,967 (April, assuming the guarantee period is passed safely)
  Same journal entry pattern: debit Deferred Revenue, credit Revenue.

  **By March 14, 2025 (contract end):**
  All $24,000 has been moved from Deferred Revenue to Revenue. Deferred Revenue balance for this contract returns to $0.

  ## Common Edge Cases for This Contract Type

  **Customer requests a refund within the 30-day guarantee:**
  Reverse the revenue recognized to date and return the cash. The contract is cancelled, deferred revenue is reversed, and cash goes out. No revenue is recognized for that customer's contract.

  **Customer cancels after the guarantee period (e.g., month 6):**
  Check the contract terms. If the subscription is non-refundable after the guarantee period, you've already earned the remaining deferred revenue — recognize it at cancellation. If the contract allows pro-rata refunds, you'll have a refund liability for the unused months.

  **Customer upgrades from $24K to $36K at month 6:**
  This is a contract modification. Under ASC 606, if the upgrade adds distinct additional services, treat it as a new contract (new price from the upgrade date). If it expands the existing service, reallocate the remaining consideration and recognize prospectively. This requires a judgment call — document it.

  **Customer pays monthly instead of annually:**
  Monthly billing is simpler — you recognize $2,000 as you invoice each month. No deferred revenue balance required (or a very small one if billing is in advance of service delivery).

  **Annual contract with a renewal option:**
  The renewal is generally treated as a separate future contract, not part of the current transaction price. Do not include projected renewals in current deferred revenue calculations.

  ## Practical Accounting Implications

  **At contract signing:** Record the contract in your deferred revenue schedule with start date, end date, monthly recognition amount, and total contract value. This schedule drives the monthly journal entry.

  **Monthly recurring entry:** Each month-end, calculate the earned portion and post the deferred revenue → revenue journal entry. This should be automated via your deferred revenue waterfall model.

  **Documentation needed:** Executed subscription agreement, payment confirmation, and service start date. If there are any non-standard terms (payment delays, usage caps, guarantee periods longer than 30 days), note them in the contract file for the auditor.

  **For your audit:** Grant Thornton will sample customer contracts and verify that recognized revenue matches the expected ratable amount based on start date and contract value. Your deferred revenue waterfall model is the key document — it should reconcile exactly to the balance sheet deferred revenue balance.

  **Correction of current practice:** If you've been recognizing 12-month subscription payments upfront (current treatment), you'll need to restate prior periods to move revenue from the recognition date back to a ratable schedule. For audit purposes, this is a material adjustment — discuss the approach with your auditor before restating.
tips:
  - "Lead with the conclusion, not the framework. Non-accountants don't care about the five-step model — they care about 'when does this count as revenue?' Answer that first."
  - "The worked example with journal entries is the most valuable section for accounting teams and the least valuable for executives. Tailor the depth to your audience."
  - "The 30-day guarantee is a variable consideration element under ASC 606 — it's a detail that companies frequently overlook when they first implement SaaS subscription accounting."
  - "Deferred revenue is a liability, not a bad thing. Help founders understand that a large deferred revenue balance means you've collected cash for services you haven't yet delivered — it's a sign of a healthy subscription business, not a problem."
  - "If your company has multiple contract types (monthly, annual, usage-based, multi-year), run this prompt for each one separately. Revenue recognition gets complex when contract types mix."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - month-end-checklist
  - audit-prep-memo
  - saas-metrics-commentary
  - monthly-finance-commentary
tags:
  - revenue-recognition
  - asc-606
  - accounting
  - saas
  - controller
---
