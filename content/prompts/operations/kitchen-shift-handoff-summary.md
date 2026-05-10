---
title: "Synthesize a kitchen shift handoff summary"
slug: kitchen-shift-handoff-summary
function: operations
role: ops-management
description: "Turn raw shift notes into a structured handoff summary covering prep status, 86s, special requests, and any safety or maintenance issues."
useCase: "Use this prompt at the end of a kitchen shift to produce a clean handoff for the next manager and team. It captures prep levels, items 86'd, VIP and special requests, and any equipment or safety items the next shift needs to know about."
prompt: |
  You are an experienced executive sous chef writing a shift handoff for the next kitchen team. Synthesize the raw notes below into a structured handoff summary.

  Shift context:
  - Restaurant / outlet: {{outlet}}
  - Shift just ending: {{ending_shift}} (e.g., "Saturday lunch")
  - Next shift: {{next_shift}}
  - Outgoing manager: {{outgoing_manager}}
  - Incoming manager: {{incoming_manager}}
  - Cover count today: {{cover_count}}

  Raw notes (unsorted, voice-to-text style):
  {{raw_notes}}

  Produce a handoff with these sections:

  1. Topline — one sentence capturing the shift in plain language (smooth, slammed, recovery, etc.) and any single most important thing the next shift needs to know.
  2. Prep status — table or bullet list by station: item, par level, current count, action needed.
  3. 86s and low items — what is out, what is running low, any subs already approved.
  4. VIP / special requests carried forward — guests with allergies, regulars with standing modifications, anything booked that the next shift is responsible for.
  5. Equipment and maintenance — what is broken, what is on a watch list, any tickets opened.
  6. Safety, sanitation, or compliance flags — anything from the shift that affects food safety or code compliance.
  7. Staffing notes — call-outs, late arrivals, anyone leaving early next shift, any on-the-fly schedule adjustments.
  8. Top 3 priorities for incoming manager — the actions that matter most in the first 30 minutes.

  Rules:
  - Pull facts only from the raw notes. If something is implied but not stated, mark it [confirm with outgoing].
  - Keep each bullet short. This is a working document, not a report.
  - Use station names consistently (sauté, grill, garde manger, pastry, pass).
  - Flag anything urgent with [URGENT] at the start of the line.
variables:
  - "{{outlet}}"
  - "{{ending_shift}}"
  - "{{next_shift}}"
  - "{{outgoing_manager}}"
  - "{{incoming_manager}}"
  - "{{cover_count}}"
  - "{{raw_notes}}"
exampleInput: |
  outlet: Harborlight Grill, main dining room
  ending_shift: Saturday lunch (10am-3:30pm)
  next_shift: Saturday dinner (4pm-11pm)
  outgoing_manager: Chef Diego Marin
  incoming_manager: Chef Lena Park
  cover_count: 142
  raw_notes: |
    busy lunch, hit the wall around 1pm but recovered. ran out of branzino at 2:15, used flounder as a sub for the last 4 tickets, told servers. salmon par was 18, we have 9 left, need to pull 12 more for tonight. clams running low, only 4 dozen left, ordered another 6 dozen but won't arrive til monday. station 2 (grill) low burner #3 has been sputtering since noon, ticket opened with maintenance #4421. fryer oil change due tonight before service. pastry: lemon tart out, strawberry shortcake we have 11 servings left. VIP table at 7pm party of 6 for the Andersons, anniversary, no peanuts severe allergy on Mrs Anderson — already briefed expo. line cook Marco called out tomorrow, FYI for sunday brunch but still need to figure out coverage. dish pit had a slow drain, plumber came at 1pm cleared it but said the line is old. server Trevor says the AC vent over table 14 is dripping again, maintenance ticket from last week never closed. health inspector came through at 11am, no critical violations, two minor: thermometer in walk-in #2 was reading 1 degree off, cooler logs missing entries from wednesday morning. 3 cooks tonight, all on time. expecting 220 covers tonight, books are full.
exampleOutput: |
  Topline
  Smooth lunch with a 1pm push, 142 covers cleared. [URGENT] Anderson anniversary party of 6 at 7pm with severe peanut allergy on Mrs. Anderson — expo already briefed but reconfirm with sauté and pastry.

  Prep status
  - Salmon: par 18, on hand 9, pull 12 more for dinner — action: thaw and portion before 4:30
  - Branzino: out — replacement order arriving Monday, push the special tonight off branzino
  - Clams: 4 dozen on hand, 6 dozen ordered, arrives Monday — limit clam dishes tonight
  - Pastry: lemon tart out, strawberry shortcake 11 servings remaining — flag to FOH at 86 board

  86s and low items
  - 86 branzino (sub: flounder used at lunch — [confirm with outgoing] whether sub continues for dinner or pull from menu)
  - 86 lemon tart
  - Low: clams, strawberry shortcake (11 left)

  VIP / special requests
  - [URGENT] 7pm Andersons party of 6, anniversary, Mrs. Anderson severe peanut allergy. Expo briefed at lunch. Action: reconfirm with all stations and pastry at pre-shift, log in allergy book.

  Equipment and maintenance
  - [URGENT] Grill burner #3 sputtering since noon. Ticket #4421 open with maintenance. Plan to work around it for dinner.
  - Fryer oil change due tonight before service starts.
  - Dish pit slow drain cleared by plumber at 1pm. Plumber notes the line is old — watch list.
  - AC vent over table 14 dripping. Last week's ticket never closed — [confirm with outgoing] ticket number, reopen if needed.

  Safety, sanitation, compliance
  - Health inspector visit at 11am, no critical violations.
  - Two minor flags: walk-in #2 thermometer reading 1 degree off (calibrate or replace), and cooler logs missing entries from Wednesday morning. Action: complete tonight's logs in full.

  Staffing notes
  - 3 cooks confirmed for dinner, all on time.
  - Marco called out for tomorrow (Sunday brunch). Coverage gap to resolve before end of shift.

  Top 3 priorities for incoming manager
  1. Reconfirm Anderson allergy protocol with all stations at pre-shift.
  2. Pull and portion 12 salmon, complete fryer oil change before doors at 4pm.
  3. Resolve Sunday brunch coverage and decide branzino sub status for tonight's menu.
tips:
  - "Train the team to dictate raw notes during the shift, not after. Five minutes of bullets at 3pm produces a better handoff than 20 minutes of recall at 3:45."
  - "The top three priorities section is what the next manager actually reads first. Make sure it lists actions, not status."
  - "If the same maintenance issue shows up on two consecutive handoffs, escalate beyond the ticket queue. Drips and slow drains turn into shutdowns."
  - "Use [URGENT] sparingly. If everything is urgent, nothing is."
  - "Save handoffs as searchable notes. Patterns emerge over a quarter — same equipment failing, same prep miscalibrated — that no single shift sees."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - vendor-rfq-food-service
  - guest-recovery-email
  - menu-description-set
tags:
  - hospitality
  - kitchen
  - operations
  - shift-handoff
  - restaurant
---
