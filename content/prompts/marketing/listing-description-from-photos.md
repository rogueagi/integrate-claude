---
title: "Generate a real estate listing description from photos and notes"
slug: listing-description-from-photos
function: marketing
role: content
description: "Turn agent photos and short bullet notes into a polished MLS listing description that highlights the right details for the buyer profile."
useCase: "Use this prompt when a listing agent has just finished a property walkthrough and has phone photos plus rough notes. It produces an MLS-ready description plus a longer narrative for the brochure and a tight social caption, all matched to the likely buyer profile."
prompt: |
  You are an experienced residential real estate copywriter who has written hundreds of listings across price tiers. Generate listing copy from agent inputs.

  Property facts:
  - Address: {{address}}
  - Beds / baths: {{beds_baths}}
  - Square footage / lot: {{sqft_lot}}
  - Year built: {{year_built}}
  - Asking price: {{price}}
  - Buyer profile (most likely buyer): {{buyer_profile}}

  Agent notes (bullets):
  {{agent_notes}}

  Photo summary (what shows in the photos, room by room):
  {{photo_summary}}

  Produce three deliverables:

  1. MLS description (250-400 characters) — punchy, leads with the strongest single feature for the buyer profile, no exclamation points, no all caps.
  2. Brochure narrative (150-220 words) — flows as prose, takes the buyer through the home in the order they would walk it, names rooms with specifics from the photos and notes.
  3. Social caption (under 60 words) — opens with a hook, ends with the open house time and the agent name.

  Rules:
  - Do not invent features that are not in the notes or photo summary.
  - Avoid cliches: "must see", "won't last", "dream home", "entertainer's delight".
  - Use Fair Housing safe language. Describe the property, not the ideal buyer's family or background.
  - If a feature is implied but unverified (e.g., "looks like new HVAC"), flag it as [agent to verify].

  Open house: {{open_house_time}}
  Listing agent: {{agent_name}}
variables:
  - "{{address}}"
  - "{{beds_baths}}"
  - "{{sqft_lot}}"
  - "{{year_built}}"
  - "{{price}}"
  - "{{buyer_profile}}"
  - "{{agent_notes}}"
  - "{{photo_summary}}"
  - "{{open_house_time}}"
  - "{{agent_name}}"
exampleInput: |
  address: 412 Linden Ave, Oak Park, IL
  beds_baths: 4 / 2.5
  sqft_lot: 2,380 sqft / 6,000 sqft lot
  year_built: 1924
  price: $789,000
  buyer_profile: move-up family from a city condo, values walkability and original character
  agent_notes:
  - Original oak floors throughout main level, refinished 2023
  - Renovated kitchen with quartz, gas range, butler pantry
  - Detached two-car garage, fenced yard
  - 3 blocks to Green Line, half block to Mann Elementary
  - Roof 2019, HVAC looks new but no paperwork yet
  photo_summary:
  - Front: brick bungalow, mature maple, covered porch with swing
  - Living: leaded glass built-ins, gas fireplace
  - Kitchen: white quartz, navy island, brass fixtures
  - Primary: tray ceiling, walk-in closet
  - Backyard: brick patio, raised garden beds
  open_house_time: Sunday May 18, 1-3pm
  agent_name: Carla Whitfield
exampleOutput: |
  MLS description
  Restored 1924 brick bungalow in Oak Park with refinished oak floors, leaded glass built-ins, and a renovated quartz kitchen. Three blocks to the Green Line and half a block to Mann Elementary. Detached two-car garage, fenced yard, brick patio.

  Brochure narrative
  A covered front porch with a swing sets the tone at 412 Linden, a 1924 brick bungalow that has kept its character through a careful renovation. Inside, refinished oak floors lead past leaded glass built-ins to a gas fireplace in the main living room. The kitchen is the heart of the home now: white quartz counters, a navy island, brass fixtures, a gas range, and a butler pantry that handles the overflow. Upstairs, the primary bedroom carries a tray ceiling and a walk-in closet, with three more bedrooms and a full bath nearby. Out back, a brick patio opens to raised garden beds and a fenced yard, with a detached two-car garage off the alley. The roof was replaced in 2019 and the HVAC appears new [agent to verify]. Green Line three blocks away, Mann Elementary half a block.

  Social caption
  Bungalow people, this one is for you. 412 Linden Ave, four beds, leaded glass, oak floors, a kitchen worth cooking in. Open Sunday 1-3pm with Carla Whitfield.
tips:
  - "Photos are the strongest input. Spend two minutes describing them in detail before running the prompt — the output quality tracks directly with the photo summary."
  - "Always state the buyer profile. The same house gets very different copy for a downsizer than a move-up family."
  - "Run a second pass with a different buyer profile if the listing has split appeal (e.g., investor vs owner-occupant)."
  - "Reject anything that sounds like every other listing. If you see 'gleaming hardwoods' in the output, regenerate."
  - "Keep Fair Housing rules in mind. The prompt avoids common traps but you are still the human checkpoint."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - comparative-market-analysis-narrative
  - buyer-followup-sequence
  - investor-pitch-real-estate
tags:
  - real-estate
  - listing
  - copywriting
  - mls
  - content
---
