---
title: "Write a help center article from a support ticket thread"
slug: knowledge-base-article
function: customer-service
role: support
description: "Transform a resolved support ticket or internal note into a polished, SEO-friendly help center article that deflects future tickets on the same issue."
useCase: "Use this prompt after resolving a recurring or complex support issue to document the solution as a help center article. Good documentation reduces support volume and empowers customers to self-serve — this prompt does the heavy lifting of turning a ticket thread into a publishable article."
prompt: |
  You are a technical writer and knowledge management specialist. Write a help center article based on the following support ticket or internal notes.

  Inputs:
  - Product/feature name: {{product_name}}
  - Issue or question this article addresses: {{issue_description}}
  - Resolution or answer: {{resolution}}
  - Raw support ticket thread or notes (paste verbatim): {{raw_content}}
  - Target reader: {{target_reader}} (e.g., non-technical end user, admin/IT manager, developer)
  - Any screenshots or steps involved: {{steps}}
  - Related help articles to link to: {{related_articles}}

  Write a help center article with this structure:

  **Title:**
  Written as a task ("How to...") or question ("Why does...") that matches how someone would search for this. Under 60 characters.

  **Overview (1–2 sentences):**
  What this article covers and who it's for. Written in plain language.

  **In this article:**
  A short table of contents if the article is multi-section (optional for simple articles).

  **Body:**
  - Use numbered steps for procedures
  - Use bullet points for lists of options or considerations
  - Use short paragraphs (3 sentences max) for explanations
  - Bold any UI elements (button names, menu items) exactly as they appear in the product
  - Include a "Note:" callout for important warnings or edge cases
  - Avoid jargon; define technical terms if they're necessary

  **Still having trouble? (closing section)**
  One or two sentences telling the reader what to do if the article didn't solve their problem (contact support, escalate, etc.).

  Tone: clear, direct, patient. Written as if explaining to someone who knows their job but is new to this product.
variables:
  - "{{product_name}}"
  - "{{issue_description}}"
  - "{{resolution}}"
  - "{{raw_content}}"
  - "{{target_reader}}"
  - "{{steps}}"
  - "{{related_articles}}"
exampleInput: |
  product_name: Anchor Analytics
  issue_description: customer can't connect their Salesforce CRM to Anchor — getting an "authorization failed" error
  resolution: the issue is usually caused by the Salesforce user connecting Anchor not having API access enabled in their Salesforce profile; the fix is to enable API access in Salesforce settings and then reconnect
  raw_content: |
    Customer: "I keep getting 'Salesforce authorization failed' when I try to connect. I've entered my credentials correctly."
    Support: "Can you check if your Salesforce user profile has API access enabled?"
    Customer: "I'm not sure. How do I check?"
    Support: "In Salesforce, go to Setup > Users > Profiles > find your profile > and check if 'API Enabled' is checked."
    Customer: "I found it — it wasn't enabled. I turned it on and now it's connecting. Thank you!"
  target_reader: non-technical admin who manages Anchor for their team
  steps: Setup > Users > Profiles > [your profile] > System Permissions > API Enabled (checkbox)
  related_articles: Connecting your CRM to Anchor, Anchor supported integrations
exampleOutput: |
  **Title:** How to Fix "Salesforce Authorization Failed" in Anchor

  **Overview**
  This article explains how to resolve the "Salesforce authorization failed" error that appears when connecting Anchor Analytics to your Salesforce account. This issue affects Salesforce administrators and any user connecting Anchor for the first time.

  **Why this happens**
  Anchor connects to Salesforce through the Salesforce API. If the Salesforce user account being used to connect doesn't have API access enabled, the authorization will fail — even if your username and password are correct.

  **How to fix it**

  **Step 1: Check if API access is enabled in Salesforce**
  1. Log in to Salesforce and go to **Setup** (gear icon, top right)
  2. In the left menu, navigate to **Users** > **Profiles**
  3. Find and click your profile name
  4. Scroll to **System Permissions**
  5. Look for **API Enabled** — if the checkbox is unchecked, this is the cause

  **Step 2: Enable API access**
  1. Click **Edit** on your profile
  2. Find **API Enabled** under System Permissions and check the box
  3. Click **Save**

  > **Note:** You must have Salesforce System Administrator access to edit profile permissions. If you don't have this access, contact your Salesforce admin.

  **Step 3: Reconnect Anchor to Salesforce**
  1. Return to Anchor Analytics and go to **Settings** > **Integrations**
  2. Click **Connect** next to Salesforce
  3. Follow the authorization prompts — the connection should complete successfully

  **Still having trouble?**
  If you've enabled API access and the error persists, contact our support team at support@anchoranalytics.io. Include a screenshot of the error and your Salesforce profile name.

  **Related articles:**
  - Connecting your CRM to Anchor
  - Anchor supported integrations
tips:
  - "The title format 'How to Fix [Error]' or 'Why does [problem] happen' matches how customers search — use this format consistently across your help center."
  - "After publishing, search Google for the exact error message ('Salesforce authorization failed') to see if your article could rank for it. Help articles rank for long-tail error queries frequently."
  - "Include the exact error message text in the article body — customers copy-paste errors into search; if your article contains that exact string, it surfaces."
  - "Use this prompt after every support ticket that took more than 10 minutes to resolve. If it took that long for a trained support rep, a customer trying to self-serve would give up."
  - "Review your help center articles quarterly for accuracy — a step that was correct a year ago may reference a UI that no longer exists."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - macro-response-set
  - ticket-response-draft
  - internal-handoff-summary
tags:
  - knowledge-base
  - documentation
  - support
  - self-serve
---
