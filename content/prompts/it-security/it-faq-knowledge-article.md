---
title: "Write a knowledge base article from an FAQ or recurring ticket"
slug: it-faq-knowledge-article
function: it-security
role: it-support
description: "Convert a recurring helpdesk question or ad-hoc FAQ into a clean, scannable knowledge base article that deflects future tickets."
useCase: "Use this prompt when the same ticket comes in for the third time and you realize you should write it down. The output is a KB article in your help-center voice — searchable, screenshot-friendly, and structured so 80% of users can self-resolve."
prompt: |
  You are an IT support lead writing a knowledge base article. Goal: a user with the problem can solve it themselves in under 3 minutes by skimming, not reading. Avoid wall-of-text.

  Inputs:
  - Topic: {{topic}}
  - Source material: {{source}} (recurring ticket text, internal Slack threads, scratch notes)
  - Target audience: {{audience}} (all employees, engineers only, executives)
  - Platforms in scope: {{platforms}} (Mac, Windows, mobile, web)
  - Related KB articles: {{related}}
  - Tone: {{tone}} (default: friendly, direct, no jargon)

  Produce a KB article with:

  1. **Title**: question-form, what the user would search for. Specific, not "Troubleshooting Issues."

  2. **TL;DR**: 2-line summary — what the article covers and the most common fix

  3. **Symptoms**: bullet list — "use this article if you see…" — helps the wrong-article user bounce out fast

  4. **Quick fix** (the 80% case): numbered, 3–5 steps, screenshot placeholders where helpful

  5. **If quick fix doesn't work**: 2–3 alternative paths, ordered by likelihood

  6. **Still stuck — when to open a ticket**: specific information to include in the ticket so IT doesn't have to ask

  7. **Why this happens** (optional, kept short): one paragraph for the curious; not required to follow steps

  8. **Related articles**: 2–4 links to genuinely related KB

  9. **Metadata for the help center**: tags, keywords for search, last reviewed date, owner

  Constraints:
  - Plain language; the goal is "anyone can follow"
  - Headings the user can scan; never paragraphs longer than 4 lines
  - Be honest about edge cases — "this won't work if…" is more useful than implying universality
  - If steps are platform-dependent, label clearly (Mac / Windows / Mobile)
variables:
  - "{{topic}}"
  - "{{source}}"
  - "{{audience}}"
  - "{{platforms}}"
  - "{{related}}"
  - "{{tone}}"
exampleInput: |
  topic: How to enroll a new YubiKey or replace a lost one
  source: |
    Got 8 tickets in the past 2 weeks about Yubikeys. Common variations:
    - "I lost my Yubikey" → IT reassigns + ships replacement, but user is locked out in interim
    - "I want a backup Yubikey" → process not documented; users don't know they can have one
    - "My Yubikey isn't recognized in Okta" → usually they're trying to use it as MFA but haven't enrolled it yet
    - Scratch notes: enrollment is via okta.[company].com → Settings → Extra Verification → Add Security Key. For lost keys, file IT ticket; we ship replacement to address on file (1-day priority); during interim use OTP recovery factor (which we set up at onboarding)
  audience: all employees
  platforms: web (Okta) + Mac/Windows for plugging the key in; mobile flow noted but secondary
  related: KB-101 First-time MFA setup, KB-105 Lost or stolen device, KB-220 Recovery codes for Okta
  tone: friendly, brief
exampleOutput: |
  # How do I enroll a new YubiKey or replace a lost one?

  *Last reviewed: 2026-05-07. Owner: IT Operations. Read time: ~3 min.*

  ## TL;DR

  Enrolling: log in at okta.[company].com → Settings → Extra Verification → Add Security Key. Replacing a lost key: file an IT ticket (we ship a new one within 1 business day) and use your OTP recovery factor in the meantime.

  ## Use this article if…

  - You received a new YubiKey and want to set it up
  - You want to add a backup YubiKey (recommended — see below)
  - You lost or damaged your YubiKey
  - Your YubiKey isn't being recognized when you try to log in

  ## Quick fix (most common case): enroll a new or replacement YubiKey

  1. Go to **okta.[company].com** and sign in (use your other MFA factor — OTP code or backup YubiKey — if your primary key isn't working).
  2. Click your name in the top right → **Settings**.
  3. Under **Extra Verification**, find **Security Key** and click **Set up** (or **Add another** if you already have one).
  4. Plug your YubiKey into a USB port (or tap to NFC for compatible models).
  5. When the key flashes, **touch it once**. You should see a confirmation. Done.

  *(Screenshots: see attached.)*

  **Tip**: enroll a backup key while you're there. Two enrolled keys mean a lost or broken key isn't a lockout. We ship two YubiKeys to every new hire for this reason.

  ## If the quick fix doesn't work

  **The "Add Security Key" option isn't visible**
  Your account may not yet have the security-key factor enabled. File an IT ticket — we'll enable it.

  **The key isn't recognized when you plug it in**
  - Try a different USB port (avoid hubs and dongles for first enrollment)
  - On Mac: ensure your browser has USB permissions in System Settings → Privacy & Security
  - On Windows: try a different browser (Chrome and Edge have the most reliable WebAuthn support)
  - If still not detected, your key may be defective — see "Lost / damaged key" below

  **You're locked out and can't use Settings**
  Use your OTP recovery factor (Okta Verify push or one of your recovery codes from onboarding). If you don't have either, see "Lost / damaged key" below.

  ## Lost or damaged key

  1. **Right now**: file an IT ticket at help.[company].com — title "Replacement YubiKey" — include your shipping address (defaults to address in BambooHR).
  2. **In the meantime**: use your OTP recovery factor. If your phone has Okta Verify, it works. If you have recovery codes (see KB-220), one of those gets you in.
  3. **No OTP, no recovery codes**: contact IT directly via the helpdesk phone line — we can reset MFA after identity verification.

  We ship replacement keys via 1-day priority to the address in your HR record. Most replacements arrive next business day.

  After the new key arrives, enroll it via the Quick Fix steps above. **Then file a follow-up to remove the lost key from your account** so it can't be used if found.

  ## When to open a ticket

  Open a ticket if:
  - You're locked out with no working factor
  - The Add Security Key option doesn't appear in Settings
  - The key is physically damaged or definitely defective
  - You've enrolled but get an error when trying to log in with the new key

  Information to include in the ticket:
  - Which Okta account (your work email)
  - Mac or Windows + browser used
  - Exact error message or screenshot
  - Whether you have a working backup factor right now

  ## Why this happens (the short version)

  YubiKeys use WebAuthn (FIDO2) for phishing-resistant MFA. They're cryptographically bound to your account, which is why losing one means re-enrolling — there's no way to "transfer" the key to a new device. That's also why phishing attacks can't steal the credential.

  ## Related articles

  - [KB-101: First-time MFA setup](#)
  - [KB-105: Lost or stolen device](#)
  - [KB-220: Recovery codes for Okta](#)
  - [KB-118: Why we use hardware keys instead of SMS](#)

  ---

  *Tags*: yubikey, mfa, okta, security-key, lost-device, fido2
  *Search keywords*: yubikey not working, lost yubikey, replacement yubikey, security key not recognized, add yubikey, backup yubikey, okta yubikey enrollment
  *Owner*: IT Operations
  *Status*: Reviewed 2026-05-07
tips:
  - "Optimize for the user who is in a hurry. The TL;DR and Quick Fix should solve 80% of cases without scrolling — that's the article's job."
  - "Track which articles are getting opened vs which are deflecting tickets. An article with 1,000 views and 0 ticket reduction is a wrong article — rewrite or delete it."
  - "Write the title as a question the user would type into search. 'Troubleshooting MFA' is invisible; 'Why is my YubiKey not working?' gets found."
  - "When you write the article, also link it from the canned ticket reply. Tickets-deflected-per-article is the only metric that matters here."
  - "AI assistance is not a replacement for security review by qualified professionals. KB articles touching authentication, recovery, or device loss should be reviewed by IT and Security leads to ensure they don't accidentally provide a social-engineering script."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - helpdesk-ticket-triage
  - employee-onboarding-it-checklist
  - security-policy-acceptable-use
tags:
  - knowledge-base
  - it-support
  - documentation
  - self-service
  - help-center
---
