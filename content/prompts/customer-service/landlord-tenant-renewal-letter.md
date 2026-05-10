---
title: "Draft a landlord-to-tenant lease renewal letter"
slug: landlord-tenant-renewal-letter
function: customer-service
role: support
description: "Generate a clear, respectful lease renewal letter to a tenant, including new terms, renewal options, and a deadline to respond."
useCase: "Use this prompt 60-90 days before a lease ends. It produces a renewal letter that clearly states the new rent, any term changes, and the response deadline, while maintaining a relationship-positive tone with a tenant you want to keep."
prompt: |
  You are a residential property manager who has retained tenants for over a decade. Draft a lease renewal letter from the landlord to the tenant.

  Property and parties:
  - Property address: {{property_address}}
  - Tenant name(s): {{tenant_names}}
  - Landlord / property manager: {{landlord_name}}
  - Current lease end date: {{current_lease_end}}

  Current terms:
  - Current monthly rent: {{current_rent}}
  - Current term: {{current_term}}

  Proposed renewal terms:
  - New monthly rent: {{new_rent}}
  - New term length options: {{term_options}}
  - Other changes (pet policy, parking, utilities, etc.): {{other_changes}}

  Tenant context:
  - How long they have been a tenant: {{tenancy_length}}
  - Payment history: {{payment_history}}
  - Any noted positives (good neighbor, maintained property, etc.): {{positives}}

  Required deadline for response: {{response_deadline}}

  Produce a single one-page letter with:
  - Date and salutation using the tenant's name
  - One sentence acknowledging the relationship if positives exist
  - Clear statement of current rent and proposed new rent, including the dollar increase and percent
  - Brief, honest reason for any rent change (market conditions, expense increases, property improvements — pick what is true)
  - Side-by-side options for term length so the tenant can choose
  - Any other policy changes, plainly stated
  - Response deadline and how to respond
  - Closing offering to discuss

  Rules:
  - Do not use legalese. The letter should be readable by anyone.
  - Do not threaten non-renewal or use pressure language.
  - State numbers as numbers, not vague phrases ("a small increase").
  - If the rent increase is above 5%, include one sentence connecting it to a real driver (taxes, insurance, capital improvements).
  - End with a phone number and email for follow-up.

  Note: this is a starting draft. The user should have local counsel or a property management attorney review before sending, especially in jurisdictions with rent control or specific notice rules.
variables:
  - "{{property_address}}"
  - "{{tenant_names}}"
  - "{{landlord_name}}"
  - "{{current_lease_end}}"
  - "{{current_rent}}"
  - "{{current_term}}"
  - "{{new_rent}}"
  - "{{term_options}}"
  - "{{other_changes}}"
  - "{{tenancy_length}}"
  - "{{payment_history}}"
  - "{{positives}}"
  - "{{response_deadline}}"
exampleInput: |
  property_address: 1820 Spring St, Unit 3B, Atlanta, GA 30309
  tenant_names: Rachel and Tomas Vega
  landlord_name: Stonebridge Property Management, Maya Forrester
  current_lease_end: 2026-08-31
  current_rent: $2,150
  current_term: 12 months
  new_rent: $2,275
  term_options: 12 months at $2,275 / month, or 24 months at $2,225 / month
  other_changes: pet policy now allows up to 2 cats with $25/month pet rent (previously no pets)
  tenancy_length: 3 years
  payment_history: on time every month, no late payments
  positives: maintained the unit well, friendly with neighbors, reported a leak early last fall that prevented bigger damage
  response_deadline: 2026-06-15
exampleOutput: |
  May 10, 2026

  Dear Rachel and Tomas,

  We have appreciated having you at 1820 Spring St over the past three years. You have paid on time every month, kept the unit in great shape, and your call about the kitchen leak last fall almost certainly saved us a much bigger repair.

  Your current lease ends August 31, 2026, and we would like to offer you a renewal.

  Your current rent is $2,150 per month. The proposed new rent is $2,275 per month, an increase of $125, or about 5.8%. Property taxes and insurance on the building rose this year, which is the main driver of the change.

  You have two term options:
  - 12 months at $2,275 per month
  - 24 months at $2,225 per month (a $50 monthly savings in exchange for a longer term)

  One other change: we are updating the pet policy. Up to two cats are now allowed with a $25 per month pet rent. If that is not relevant to you, no action is needed.

  All other lease terms remain the same.

  Please let us know your decision by June 15, 2026. You can reply to this email, call me at (404) 555-0142, or stop by the office.

  If anything in here is unclear, or if you want to talk through the options, I am happy to get on a call.

  Sincerely,
  Maya Forrester
  Stonebridge Property Management
  maya@stonebridgepm.com
  (404) 555-0142
tips:
  - "If the tenant has a strong record, lead the letter with that. People respond to being seen, not just to numbers."
  - "Always offer at least two term options when possible. Tenants who feel they had a choice renew at higher rates."
  - "Send 60-90 days out. Less than 60 days feels rushed and increases the chance the tenant has already started looking."
  - "If the rent increase is significant, include a real reason (taxes, insurance, improvements). Vague increases create suspicion."
  - "Have a property management attorney review your template, especially in jurisdictions with rent control, just-cause eviction, or specific notice requirements. This prompt produces a draft, not legal advice."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - buyer-followup-sequence
  - guest-recovery-email
  - return-policy-rewrite-friendly
tags:
  - real-estate
  - landlord
  - lease
  - renewal
  - tenant-communication
---
