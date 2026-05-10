---
title: "Influencer outreach template with deliverables and FTC disclosure language"
slug: influencer-outreach-template
function: pr-comms
role: media-relations
description: "Generate an influencer outreach email with clear deliverables, compensation, timeline, and FTC-compliant disclosure language."
useCase: "Use this prompt when reaching out to creators for a paid or gifted partnership. It produces an outreach email that respects the creator's time, names deliverables clearly, sets compensation up front, and includes the FTC disclosure language that protects both sides."
prompt: |
  You are a senior partnerships lead at a DTC brand who has run hundreds of creator deals. Draft an outreach email to a specific creator.

  Brand context:
  - Brand name: {{brand_name}}
  - Category: {{category}}
  - Brand voice (adjectives): {{brand_voice}}
  - Why this creator (specifically — what about their content fits): {{why_this_creator}}

  Creator context:
  - Creator handle and platform(s): {{creator_handle}}
  - Approximate audience size and primary platform: {{audience_size}}
  - Most recent or relevant post you actually watched/read (for personalization): {{recent_post}}

  Deal terms:
  - Deal type: {{deal_type}} (gifted, fixed fee, fixed fee plus performance, affiliate)
  - Compensation: {{compensation}}
  - Deliverables: {{deliverables}} (e.g., 1 Reel, 3 Stories with link sticker, 1 static post; or 1 long-form YouTube)
  - Usage rights requested: {{usage_rights}} (organic only, paid amplification 30 days, etc.)
  - Exclusivity: {{exclusivity}} (none, category exclusive 30 days, etc.)
  - Timing: {{timing}} (post date, content review window, payment terms)
  - Disclosure expectation: {{disclosure_expectation}} (e.g., #ad in caption first line, "Paid partnership with [brand]" on Instagram, verbal disclosure within first 30 seconds on YouTube)

  Produce an outreach email with:

  1. Subject line — short, specific, names the brand and the value (no clickbait)
  2. Opening (2 sentences) — one specific reference to {{recent_post}} that proves you actually engaged with their content; do not flatter generically
  3. Why we are reaching out — connection between {{why_this_creator}} and the brand
  4. Deal terms (clearly labeled) — compensation, deliverables, usage rights, exclusivity, timing
  5. Disclosure expectation — explicit, not buried, with the exact placement and language
  6. Process — what happens next, brief approval flow, payment terms
  7. CTA — clear yes/no/discuss
  8. Sign-off — name, role, direct email

  Rules:
  - Do not use "synergy", "partnership opportunity", "amazing", "love your content".
  - Lead with the specific reference, not the brand introduction.
  - Compensation must be stated upfront. "Let's hop on a call to discuss" is the most common reason creators ignore brand outreach.
  - Disclosure language must be FTC-compliant for the platform: "#ad" in caption first line for Instagram/TikTok; "Paid partnership" tag activated; verbal "this video is sponsored by" within first 30 seconds for YouTube.
  - Length: 220-340 words.
  - Tone matches {{brand_voice}}. Professional, not stiff.

  Important: FTC and platform-specific disclosure rules change. The creator's country of operation may also have its own rules (e.g., UK ASA, EU). Always confirm current FTC Endorsement Guides and platform policies, and have qualified marketing or legal counsel review your influencer agreement template. This prompt produces outreach copy, not a contract.
variables:
  - "{{brand_name}}"
  - "{{category}}"
  - "{{brand_voice}}"
  - "{{why_this_creator}}"
  - "{{creator_handle}}"
  - "{{audience_size}}"
  - "{{recent_post}}"
  - "{{deal_type}}"
  - "{{compensation}}"
  - "{{deliverables}}"
  - "{{usage_rights}}"
  - "{{exclusivity}}"
  - "{{timing}}"
  - "{{disclosure_expectation}}"
exampleInput: |
  brand_name: Bramble Kitchen
  category: small-batch pantry goods, focused on seasonal jams and nut butters
  brand_voice: warm, ingredient-curious, dry humor, never precious
  why_this_creator: Their cooking content is recipe-led with a clear ingredient point of view; pantry staples, not trend-chasing. Their audience cooks, not just bookmarks.
  creator_handle: @maya.cooks (Instagram and YouTube)
  audience_size: 92K Instagram, 41K YouTube
  recent_post: Maya's recent Reel pairing fig jam with whipped goat cheese on rye toast — she walked through the texture choice on the cheese specifically
  deal_type: fixed fee
  compensation: $2,400 flat
  deliverables: 1 Instagram Reel and 2 Stories with link sticker, posted within 14 days of product receipt
  usage_rights: organic only on creator's channels, plus 30-day right for brand to repost on @bramblekitchen with creator credit
  exclusivity: 30-day category exclusivity in pantry/jam category from post date
  timing: target post date June 2-9, content review one round 48 hours before posting, payment net-15 from post
  disclosure_expectation: #ad in first line of Instagram caption; on Stories, the "Paid partnership with Bramble Kitchen" branded content tag activated
exampleOutput: |
  Subject: Bramble Kitchen — paid Reel collaboration, $2,400, posting in June

  Hi Maya,

  Your fig jam Reel last week — the part where you talked about whipping the goat cheese to soften it against the jam's texture — that is exactly the kind of thinking that fits what we make. We watched it three times.

  We are Bramble Kitchen. Small-batch pantry goods, mostly seasonal jams and nut butters. We would like to do a paid collaboration with you in June.

  Deal terms
  - Compensation: $2,400, paid net-15 from post date
  - Deliverables: 1 Instagram Reel and 2 Stories with link sticker, posted within 14 days of product receipt
  - Usage rights: organic only on your channels, plus a 30-day right for us to repost on @bramblekitchen with full credit to you
  - Exclusivity: 30-day category exclusivity (pantry/jam) from your post date — your other content is unaffected
  - Timing: target post window June 2-9; content review with one round of revisions 48 hours before you post

  Disclosure
  We would ask for "#ad" in the first line of the Instagram caption and the "Paid partnership with Bramble Kitchen" branded content tag activated on the Reel and on both Stories. This is what FTC and Instagram require, and we want it visible on our side too.

  Process
  If this works, we will send a short agreement, ship product the same week, and align on creative direction together. You drive the recipe choice; we share notes on what is in season and what we hope to see featured.

  A clear yes, no, or "let's adjust" works. Happy to move terms around if any of this is not quite right for you.

  Sarah Lin
  Partnerships Lead, Bramble Kitchen
  sarah@bramblekitchen.com
tips:
  - "Lead with one real, specific reference to the creator's recent work. Generic flattery is the fastest way to be ignored."
  - "Put compensation in the email. Creators report that the single biggest filter is brands who hide compensation behind a call."
  - "Never ask for usage rights you do not need. Paid amplification rights cost more and slow the deal — only request them if you actually plan to run paid."
  - "Send the agreement template alongside the outreach if the creator says yes. The deal slows down most often during contract redlines, not during outreach."
  - "FTC Endorsement Guides change, and platform rules vary by region (UK ASA, EU member states). Always confirm current rules and have qualified marketing or legal counsel review your influencer agreement template. This prompt produces outreach copy, not a contract."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cart-abandonment-sequence
  - product-description-set-from-spec
  - government-customer-comms-incident
tags:
  - ecommerce
  - influencer
  - partnerships
  - media-relations
  - ftc
---
