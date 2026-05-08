---
title: "Write an employee handbook section"
slug: employee-handbook-section
function: hr
role: people-ops
description: "Generate a clear, readable employee handbook section that communicates policy in plain language without being so legalistic that employees ignore it."
useCase: "Use this prompt to write or update a specific section of your employee handbook. Most handbook sections fail in one of two ways: they're written by lawyers and no one reads them, or they're too casual and don't hold up when policy is contested. This prompt produces sections that are clear enough to actually be read and substantive enough to be relied on."
prompt: |
  You are an HR or People Ops lead writing a section of the employee handbook.

  Context:
  - Company: {{company_name}}
  - Company size and stage: {{company_stage}}
  - Section topic: {{section_topic}} (e.g., remote work policy, PTO, code of conduct, performance management, benefits, harassment and discrimination)
  - Audience: {{audience}} (all employees, managers only, etc.)
  - Policy specifics: {{policy_details}} (the actual rules and guidelines — what you want the policy to say)
  - State(s) or jurisdiction(s) of employment: {{jurisdiction}} (affects at-will language, leave policies, etc.)
  - Tone: {{tone}} (formal, conversational, or balanced — recommend balanced for most startups)
  - Related policies: {{related_policies}} (other sections this connects to)

  Write a handbook section with:

  ## Policy Title
  Clear and specific — "Remote Work Policy" not "Work Arrangements."

  ## Overview (1 paragraph)
  Why this policy exists and what it's designed to accomplish. Written for employees, not HR professionals.

  ## Policy Details
  The substantive rules and guidelines, organized in a logical order:
  - Use headers for major sub-topics
  - Use bullet points for lists of specifics
  - Use plain language — if a policy requires a lawyer to interpret, it's not yet a policy, it's a legal document
  - State what IS allowed before what ISN'T
  - Where management discretion applies, say so explicitly rather than leaving employees to guess

  ## Examples or Scenarios (when helpful)
  2–3 brief examples that illustrate how the policy applies in realistic situations — especially for policies with gray areas.

  ## How to Request or Report
  Where applicable: how employees act on this policy (how to request time off, how to report a concern, how to get approval for exceptions).

  ## Questions
  Who to contact and how.

  Tone: clear, human, and legally defensible. The best handbook sections sound like they were written by a competent HR leader who respects employees' intelligence, not by a legal team optimizing for liability protection.
variables:
  - "{{company_name}}"
  - "{{company_stage}}"
  - "{{section_topic}}"
  - "{{audience}}"
  - "{{policy_details}}"
  - "{{jurisdiction}}"
  - "{{tone}}"
  - "{{related_policies}}"
exampleInput: |
  company_name: Anchor Analytics
  company_stage: 28-person pre-Series A startup
  section_topic: Remote work and flexible work arrangements
  audience: All employees
  policy_details: |
    Anchor is a remote-first company; all roles are remote by default
    Core hours: 10am–3pm local time Monday–Friday (for coordination and collaboration)
    Employees may work from anywhere in the US; international work allowed for up to 4 weeks/year with manager approval and People Ops notification
    Home office: one-time $500 stipend (must be used within 60 days of start date); additional equipment by request
    Coworking spaces: up to $200/month reimbursed with receipt
    In-person: quarterly company all-hands weeks (travel covered); team-level in-person at manager discretion (budgets vary)
    Availability expectations: respond to Slack messages within 4 hours during core hours; calendar should reflect actual availability
    No monitoring software; Anchor trusts employees to be productive without surveillance
  jurisdiction: All US states (primary employees in CA, NY, TX, WA)
  tone: conversational but clear
  related_policies: PTO and time off, expense reimbursement
exampleOutput: |
  # Remote Work and Flexible Work

  ## Overview
  Anchor Analytics is a remote-first company. All roles are remote by default, and we've built our systems, culture, and communication practices around this from the beginning — remote isn't an accommodation, it's how we work. This policy describes how we make remote work successful for everyone: what we expect from employees, what we provide to support the setup, and how we stay coordinated as a distributed team.

  ## Core Principles

  **Remote-first means remote is real work.** We don't have a default expectation that employees will work from an office, and we don't treat in-person time as more legitimate than remote work. Promotions, visibility, and opportunity don't depend on where you sit.

  **Flexibility with coordination.** You have significant flexibility in when you work, but we have one shared expectation: be available and responsive during core hours so the team can coordinate effectively. Outside of core hours, your schedule is your own.

  **Trust over monitoring.** Anchor does not use employee monitoring software. We trust you to do your job, and we hold you accountable for your outcomes, not your keystrokes.

  ---

  ## Core Hours

  **Core hours are 10:00 AM – 3:00 PM in your local time zone, Monday through Friday.**

  During core hours:
  - Be available for meetings and collaboration (block time on your calendar if you're focused and unavailable)
  - Respond to Slack messages within 4 hours
  - Attend scheduled team calls unless you've given advance notice of a conflict

  Outside of core hours, work when you're most productive. Some people do their best work early in the morning; others prefer evenings. We don't prescribe a schedule beyond the 10–3 window.

  **Your calendar should reflect reality.** If you're going to be unavailable for 2 hours in the afternoon, block it. A calendar that shows you free but you're unresponsive is more disruptive than a calendar with a clear block.

  ---

  ## Where You Can Work

  **From within the United States:** All Anchor employees must be eligible to work in the US, and your primary work location must be in the US. You don't need to notify People Ops about your home address, but HR needs your accurate address for payroll and state tax purposes — please keep it updated in Rippling.

  **International work:** You may work from outside the US for up to 4 consecutive weeks per year, with manager approval and advance notice to People Ops (people@anchor.com). This allows for travel, extended family visits, or working abroad without formal relocation. Longer periods require a separate conversation with People Ops due to tax and employment law implications.

  **Tax and compliance note:** Working remotely from a different US state for extended periods (more than a few weeks) can create state tax obligations. If you're planning to spend significant time working from a state other than your home state, please flag this with People Ops before you go.

  ---

  ## Your Home Office Setup

  We want your workspace to be comfortable and set you up for productive work.

  **Home office stipend:** You'll receive a one-time $500 home office stipend, usable within 60 days of your start date. Spend it on whatever makes your workspace better — a monitor, keyboard, mouse, desk accessories, lighting, or anything else. Submit receipts through Expensify under "Home Office" with a brief description.

  **Company equipment:** Anchor provides a laptop (Mac by default; PC available on request). If you need additional equipment beyond the stipend — a specific external monitor, a docking station, an ergonomic chair — submit a request to people@anchor.com. We evaluate these case by case.

  **Coworking spaces:** If you prefer to work from a coworking space rather than home, Anchor reimburses up to $200 per month in coworking space fees. Submit through Expensify with the receipt. This is per-person, not per-day — we reimburse a coworking membership, not individual drop-in visits.

  ---

  ## In-Person Time

  **All-hands:** We hold a company-wide all-hands week quarterly. All employees are expected to attend; all travel and accommodation are covered by Anchor. Dates are planned at least 6 weeks in advance.

  **Team in-person:** Individual teams may hold additional in-person time at the manager's discretion, within team budget. Your manager will communicate these opportunities in advance.

  **Individual travel:** Employees are welcome to work in person with colleagues when traveling for any reason (no special approval needed). If you're passing through a city where a colleague works, coordinate through Slack.

  ---

  ## Examples

  **Example 1 — International work:**
  You want to spend 3 weeks visiting family in Portugal and work remotely from there. You ask your manager 2 weeks in advance, they approve it, and you notify People Ops. You maintain your normal core hours in your local time zone (which, in Portugal, means working 3:00–8:00 PM local time to cover 10 AM–3 PM ET). This works fine.

  **Example 2 — Different state:**
  You're moving temporarily to stay with family in Texas for 6 weeks while your apartment is renovated. You don't need approval for this, but you should notify People Ops so they can assess any state tax implications for you and Anchor.

  **Example 3 — Schedule flexibility:**
  You do your best work from 7 AM – 1 PM and find afternoon meetings disruptive. You're welcome to block your calendar in the afternoon and work earlier, as long as you're responsive during core hours (10 AM – 3 PM) and you communicate clearly with your team about your availability.

  ---

  ## Questions

  Questions about this policy: people@anchor.com or your manager.

  *Related policies: Time Off and PTO, Expense Reimbursement*

  *Last updated: April 2024 | Next review: April 2025*
tips:
  - "Write the 'what IS allowed' before the 'what isn't.' Policies that lead with prohibitions feel punitive. Policies that lead with what employees can do feel empowering — even when the restrictions are identical."
  - "Examples are the most read section of a handbook. Employees want to know how the policy applies to their specific situation — realistic examples answer the question 'but what about when I...' before they have to ask."
  - "State the date the policy was last updated and when it will be reviewed next. A handbook policy with no date could be 5 years old — employees can't tell, and that reduces trust."
  - "Don't try to cover every edge case in the policy itself. Edge cases belong in a manager FAQ or a supplemental guide. The handbook section should cover 80% of situations cleanly — exceptions are exceptions."
  - "Have an employment attorney review handbook sections for your primary states of employment before publishing. The tone can be human; the legal substance must be correct."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - expense-policy-summary
  - policy-change-announcement
  - onboarding-checklist
tags:
  - employee-handbook
  - people-ops
  - policy
  - hr
  - remote-work
---
