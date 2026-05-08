---
title: "Write a banking partner RFP"
slug: banking-rfp-template
function: finance
role: treasury
description: "Generate a structured request for proposal (RFP) for banking services that helps companies evaluate and select a primary banking partner."
useCase: "Use this prompt when selecting a new banking partner, renegotiating existing banking terms, or adding a secondary banking relationship. A structured RFP ensures you evaluate banks on consistent criteria, negotiate from an informed position, and select a partner aligned with your company's growth stage and needs."
prompt: |
  You are a CFO or VP of Finance preparing a banking services RFP for your company.

  Context:
  - Company: {{company_name}}
  - Company stage: {{company_stage}} (e.g., Series A startup, mid-market, pre-IPO)
  - Annual revenue: {{annual_revenue}}
  - Average cash balance: {{avg_cash_balance}}
  - Current banking relationships: {{current_banking}} (optional — banks you're already working with)
  - Services needed: {{services_needed}} (operating accounts, payroll, credit facility, international wires, merchant services, etc.)
  - Credit needs: {{credit_needs}} (line of credit amount, letter of credit, equipment financing)
  - Key selection criteria: {{selection_criteria}} (e.g., tech-forward online banking, startup experience, SBA relationships, international capabilities)
  - RFP deadline: {{rfp_deadline}}
  - Target banks to receive RFP: {{target_banks}}

  Write a banking RFP with these sections:

  ## 1. Company Overview and Banking Opportunity
  A brief description of the company, its stage, and what banking relationship is being sought. Enough for a banker to understand the opportunity and decide whether to respond.

  ## 2. Current Banking Situation
  Current banking setup (without disclosing sensitive details) and the reason for the RFP (new relationship, expanding services, adding secondary bank).

  ## 3. Services Required — Mandatory
  A table of required services with specific questions for each:
  - Operating accounts (checking, savings)
  - ACH and wire services (domestic and international)
  - Payroll services or integration
  - Credit facility requirements
  - Online banking platform requirements
  - Reporting and data export capabilities

  ## 4. Services Required — Preferred
  Services that are desired but not mandatory:
  - Treasury management tools
  - Integration with accounting software
  - Dedicated relationship manager
  - Startup-specific features (cap table management, venture debt)
  - International services

  ## 5. Pricing Questions
  Specific pricing questions for each service category:
  - Monthly account fees
  - Per-transaction fees (ACH, wires, checks)
  - Minimum balance requirements or earnings credit rates
  - Credit facility fees and interest rates

  ## 6. References and Qualifications
  Requests for references from comparable companies and information about the bank's experience with similar companies.

  ## 7. Submission Requirements and Evaluation Criteria
  How to respond, the evaluation criteria, and the decision timeline.

  Tone: professional and specific. A vague RFP produces vague proposals. Every question should be designed to elicit a concrete, comparable answer.
variables:
  - "{{company_name}}"
  - "{{company_stage}}"
  - "{{annual_revenue}}"
  - "{{avg_cash_balance}}"
  - "{{current_banking}}"
  - "{{services_needed}}"
  - "{{credit_needs}}"
  - "{{selection_criteria}}"
  - "{{rfp_deadline}}"
  - "{{target_banks}}"
exampleInput: |
  company_name: Anchor Analytics, Inc.
  company_stage: Pre-Series A SaaS startup
  annual_revenue: $1.75M ARR
  avg_cash_balance: $3.5M–$5M (expecting Series A of $10M+ in Q3 2024)
  current_banking: Silicon Valley Bank (primary), limited services
  services_needed: Operating accounts, payroll integration (Rippling), domestic/international wires, Series A account management, credit facility (future)
  credit_needs: $500K–$1M revolving line of credit (post-Series A), venture debt exploration
  selection_criteria: Strong tech/startup track record, modern online banking platform, Rippling integration, dedicated relationship manager, competitive earnings credit rate on operating cash
  rfp_deadline: April 30, 2024
  target_banks: JPMorgan Chase, First Republic (or successor), Mercury, Brex, Comerica Technology & Life Sciences
exampleOutput: |
  # Banking Services Request for Proposal
  **Anchor Analytics, Inc.**
  **Issued:** April 5, 2024
  **Response Deadline:** April 30, 2024

  ---

  ## 1. Company Overview and Banking Opportunity

  Anchor Analytics, Inc. is a B2B SaaS company providing analytics and reporting software to mid-market and enterprise customers. Founded in 2022, the company has grown to $1.75M ARR with 28 employees and expects to close a Series A financing of $10M+ in Q3 2024.

  We are seeking a primary banking partner that can support our current operating needs and scale with us through and beyond the Series A. We anticipate our average cash balance will grow significantly post-financing and expect our banking relationship to deepen over the next 12–24 months. We are prepared to consolidate our primary banking relationship with the selected partner.

  This RFP is being sent to a small set of financial institutions with demonstrated experience serving venture-backed technology companies.

  ## 2. Current Banking Situation

  Anchor Analytics currently maintains operating accounts at a single institution. We are conducting this RFP to: (a) evaluate banking options in advance of our Series A, (b) establish a secondary or primary banking relationship that reduces concentration risk, and (c) access more sophisticated treasury management and credit services as we scale.

  We are not dissatisfied with our current bank; we are proactively evaluating options to ensure we have the right partner for our next stage of growth.

  ## 3. Required Services

  Please provide detailed responses to the following questions for each required service category:

  **Operating Accounts**
  - Do you offer business checking and savings accounts with no minimum balance requirements or with minimum balance waivers for venture-backed companies?
  - What FDIC or other deposit insurance coverage do you provide? Do you offer FDIC sweep programs or insured cash sweep arrangements for balances above $250K?
  - What is your earnings credit rate (ECR) on operating account balances, and how is it calculated?
  - What is the current yield on your money market or treasury sweep options?

  **Wire and ACH Services**
  - What are your per-transaction fees for: domestic ACH, domestic wires, and international wires?
  - Do you offer same-day ACH capabilities?
  - What is your international wire coverage (number of countries, currency support)?
  - What are your cut-off times for same-day domestic wires?
  - Do you offer multi-currency accounts for international operations?

  **Online Banking Platform**
  - Describe your online banking platform: web interface, mobile app capabilities, and user access controls.
  - Do you support role-based access (e.g., read-only, initiate-only, approve-only) for different employees?
  - Do you offer an API for programmatic access to account data or payment initiation?
  - What multi-factor authentication options do you support?

  **Payroll Integration**
  - Do you have a direct integration or partnership with Rippling?
  - If not, what is the standard ACH funding timeline for payroll? Can you support same-day payroll ACH?
  - What is the process for setting up and changing payroll ACH?

  **Credit Facility**
  - Do you offer revolving lines of credit to venture-backed SaaS companies at our stage?
  - What would a $500K–$1M revolving credit facility look like at our current stage (pre-Series A, $1.75M ARR, $4M+ cash)?
  - What are your standard covenants for early-stage lines of credit?
  - Do you offer venture debt? If so, describe the typical structure for a company at our stage.

  ## 4. Preferred Services

  Please indicate whether you offer the following and provide a brief description:

  - **Treasury management platform:** Do you offer a treasury management system or dashboard that provides consolidated cash visibility, investment management, and cash forecasting?
  - **Accounting software integration:** Do you integrate with QuickBooks Online, NetSuite, or similar accounting systems for automated transaction export?
  - **Dedicated relationship manager:** Will Anchor Analytics have a named, dedicated relationship manager? What is that person's experience with venture-backed technology companies?
  - **Startup-specific services:** Do you offer any services specifically designed for venture-backed companies (cap table custody, restricted account services, escrow for M&A, etc.)?
  - **International capabilities:** Do you support foreign currency accounts, FX hedging, or international treasury management for companies beginning to transact internationally?

  ## 5. Pricing

  Please provide specific pricing for the following (annual and per-transaction pricing where applicable):

  | Service | Your Pricing |
  |---|---|
  | Monthly maintenance fee — business checking | |
  | Incoming domestic wire (per transaction) | |
  | Outgoing domestic wire (per transaction) | |
  | Outgoing international wire (per transaction) | |
  | Domestic ACH (per transaction) | |
  | Earnings Credit Rate (ECR) on operating balances | |
  | Money market / treasury sweep yield (current rate) | |
  | Revolving line of credit — origination fee | |
  | Revolving line of credit — unused commitment fee | |
  | Revolving line of credit — interest rate structure | |

  Please note any minimum balance requirements that affect fee schedules, and describe any fee waiver programs available to venture-backed companies.

  ## 6. References and Qualifications

  - Please provide contact information for 3 current clients at a similar stage (early-stage SaaS, $1M–$5M ARR, venture-backed) who have agreed to serve as references.
  - How many venture-backed SaaS companies in the $1M–$5M ARR range are current banking clients?
  - Describe your bank's experience and track record with companies going through Series A and B financing processes.
  - Are any of the target investors in Anchor's Series A (Sequoia, a16z, Bessemer, or similar Tier 1 VCs) existing limited partners or partners of your institution?

  ## 7. Submission Requirements and Evaluation Criteria

  **How to Respond**
  Please submit your response as a PDF or structured document to maya@anchor.com by April 30, 2024. Questions about this RFP may be directed to the same address.

  **Evaluation Criteria**
  Responses will be evaluated on the following criteria (listed in order of priority):
  1. Quality of online banking platform and technology integration capabilities
  2. Competitiveness of pricing and earnings credit rates
  3. Experience with venture-backed technology companies at our stage
  4. Credit facility terms and availability
  5. Dedicated relationship manager quality and availability

  **Process**
  - RFP responses due: April 30
  - Finalist selection and reference checks: May 7–14
  - Decision and account opening: May 31

  We appreciate your time and look forward to reviewing your proposal.
tips:
  - "The FDIC sweep program question is critical for companies with cash balances above $250K. Most banks offer these programs, but many companies don't know to ask — and they expose themselves to concentration risk on balances above the FDIC limit."
  - "Earnings Credit Rate (ECR) is one of the most negotiable banking terms and one of the least discussed. A good ECR can eliminate most banking fees for companies with significant operating balances."
  - "Send this RFP to at least 3 institutions. The competition drives better terms and helps you identify which banks actually want your business versus which are going through the motions."
  - "Request references from companies at the same stage. A bank's track record with a $500M company is irrelevant to a $2M ARR startup — ask for references you can actually compare to your situation."
  - "Evaluate the relationship manager as carefully as the product. For early-stage companies, the RM is your primary point of contact when things go wrong — choose someone who picks up the phone."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cash-management-policy
  - cash-flow-forecast-narrative
  - fundraising-narrative
tags:
  - treasury
  - banking
  - rfp
  - vendor-management
  - finance-ops
---
