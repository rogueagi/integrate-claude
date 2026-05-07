---
title: "Generate a set of user stories for a product feature"
slug: user-story-set
function: product
role: product-management
description: "Generate a complete, well-structured set of user stories for a feature — covering happy path, edge cases, error states, and acceptance criteria ready for sprint planning."
useCase: "Use this prompt when you need to translate a feature concept into sprint-ready user stories. Works best when you have a clear feature scope — produces stories that engineering can estimate and QA can test without needing extensive clarification."
prompt: |
  You are a skilled product manager who writes precise, developer-friendly user stories. Generate a complete set of user stories for the feature described below.

  **Feature name:** {{feature_name}}
  **Feature description:** {{feature_description}}
  **Product context:** {{product_context}}
  **User types involved:** {{user_types}}
  **Key workflows this feature supports:** {{key_workflows}}
  **Known constraints or technical context:** {{technical_constraints}}
  **Priority level:** {{priority}} (MVP / Full Release / Future Enhancement)

  Generate user stories following these guidelines:

  **Story format:**
  As a [specific user type], I want to [specific action] so that [specific, measurable outcome].

  **Acceptance criteria format (Gherkin-style for each story):**
  Given [initial context/state]
  When [action taken]
  Then [expected outcome]
  And [additional outcome if needed]

  **Story organization:**
  1. **Epic overview** — one sentence describing the feature as a whole
  2. **Happy path stories** — the primary flow when everything works as intended (3–6 stories)
  3. **Edge case stories** — boundary conditions, unusual inputs, limit scenarios (3–5 stories)
  4. **Error state stories** — what happens when things go wrong (2–4 stories)
  5. **Permission and role stories** — access control and multi-user scenarios (2–3 stories if applicable)
  6. **Performance/non-functional stories** — speed, accessibility, security requirements as stories (1–3 stories)

  **For each story:**
  - Unique ID (e.g., US-001)
  - Title: short descriptive name
  - Story text: As a / I want to / So that
  - Priority: Must Have / Should Have / Nice to Have
  - Size estimate: XS / S / M / L / XL (relative effort)
  - Acceptance criteria: 3–5 Gherkin scenarios
  - Definition of Done checkboxes
  - Any open questions or dependencies

  **After the stories:**
  - Story map: show how the stories relate to each other in a flow
  - MVP cut: which stories represent the minimum viable version of this feature
  - Missing stories: explicitly note any workflows you suspect are missing based on the description
variables:
  - "{{feature_name}}"
  - "{{feature_description}}"
  - "{{product_context}}"
  - "{{user_types}}"
  - "{{key_workflows}}"
  - "{{technical_constraints}}"
  - "{{priority}}"
exampleInput: |
  feature_name: Two-Factor Authentication (2FA)
  feature_description: Add optional two-factor authentication via authenticator app (TOTP) and SMS to the user login flow. Users can enroll, manage, and recover access.
  product_context: B2B project management SaaS, 5,000 business customers. Currently only email/password login. Enterprise customers are asking for 2FA as a security requirement before purchasing.
  user_types: Regular user (self-service 2FA enrollment), Admin (can require 2FA for their org), IT admin (account recovery for locked-out users)
  key_workflows: Enrollment (setting up 2FA for the first time), login with 2FA, disabling 2FA, account recovery (lost device), admin enforcement
  technical_constraints: Using Auth0 for authentication. TOTP via standard TOTP library. SMS via Twilio. Must work on iOS and Android for authenticator apps.
  priority: MVP
exampleOutput: |
  # User Stories: Two-Factor Authentication (2FA)
  **Epic:** Enable users and admins to add a second authentication factor to protect account access.

  ---
  ## Happy Path Stories

  **US-001: Enroll in TOTP 2FA**
  *Priority: Must Have | Size: M*
  As a regular user, I want to set up two-factor authentication using my authenticator app so that my account is protected against password-based attacks.

  **Acceptance Criteria:**
  ```
  Given I am logged in and on the Security Settings page
  When I click "Enable Two-Factor Authentication" and select "Authenticator App"
  Then I am shown a QR code and manual entry key for my authenticator app

  Given I have scanned the QR code in my authenticator app
  When I enter the 6-digit code from my app and click "Verify"
  Then 2FA is enabled on my account and I see a confirmation message

  Given 2FA is being enabled
  When I complete enrollment
  Then I am shown 10 single-use backup codes and prompted to save them
  ```

  **Definition of Done:**
  - [ ] QR code generated correctly for standard TOTP apps (Google Authenticator, Authy, 1Password)
  - [ ] Backup codes generated, shown once, and stored hashed in database
  - [ ] User receives email confirmation that 2FA was enabled
  - [ ] Enrollment state visible in account settings

  ---
  **US-002: Login with 2FA Enabled**
  *Priority: Must Have | Size: S*
  As a user with 2FA enabled, I want to be prompted for my second factor after entering my password so that my account is protected even if my password is compromised.

  **Acceptance Criteria:**
  ```
  Given I have 2FA enabled and have entered my correct email/password
  When I click "Sign In"
  Then I am redirected to a 2FA verification screen before accessing the app

  Given I am on the 2FA verification screen
  When I enter the current 6-digit code from my authenticator app
  Then I am signed in and redirected to my dashboard

  Given I enter an incorrect 2FA code
  When I submit
  Then I see an error message and can try again (max 5 attempts)
  ```

  ---
  **US-003: Admin Requires 2FA for Organization**
  *Priority: Must Have | Size: M*
  As an organization admin, I want to require all members to enable 2FA so that I can meet our company's security policy requirements.

  **Acceptance Criteria:**
  ```
  Given I am an org admin on the Organization Security Settings page
  When I toggle "Require 2FA for all members" to ON and confirm
  Then all members without 2FA enrolled receive an email with a 7-day enrollment deadline

  Given the 7-day enforcement deadline has passed
  When a non-enrolled member attempts to log in
  Then they are redirected to the 2FA enrollment flow and cannot access the app until enrolled
  ```

  ---
  ## Edge Case Stories

  **US-004: Login with Backup Code**
  *Priority: Must Have | Size: S*
  As a user who has lost access to my authenticator app, I want to log in using a backup code so that I don't get locked out of my account.

  **Acceptance Criteria:**
  ```
  Given I am on the 2FA verification screen and cannot access my authenticator app
  When I click "Use a backup code" and enter a valid unused backup code
  Then I am signed in successfully

  Given I have used a backup code to log in
  When I reach my dashboard
  Then I see a banner prompting me to re-enroll 2FA with a new device

  Given I enter a backup code
  When the code has already been used
  Then I see an error: "This backup code has already been used"
  ```

  ---
  ## Error State Stories

  **US-005: Handle Expired or Invalid TOTP Code**
  *Priority: Must Have | Size: XS*
  As a user entering my 2FA code, I want to see a clear error if my code is invalid or expired so that I know to generate a new code.

  **Acceptance Criteria:**
  ```
  Given I enter a 6-digit code that has expired (>30 seconds old)
  When I submit
  Then I see: "Code expired. Please enter the new code from your app."

  Given I enter 5 consecutive invalid codes
  When I submit the 5th invalid code
  Then my account is temporarily locked for 15 minutes and I receive an email alert
  ```

  ---
  ## Permission Stories

  **US-006: IT Admin Resets 2FA for Locked-Out User**
  *Priority: Must Have | Size: M*
  As an IT admin, I want to reset 2FA for a user who has lost their device and backup codes so that I can restore their access without compromising security.

  **Acceptance Criteria:**
  ```
  Given a user is locked out and contacts IT admin
  When the IT admin navigates to User Management and selects the user
  Then they can click "Reset 2FA" which disables 2FA and emails the user a re-enrollment link

  Given the IT admin resets 2FA for a user
  When the action is completed
  Then an audit log entry is created with: admin ID, affected user, timestamp, and action
  ```

  ---
  ## MVP Cut
  Stories US-001, US-002, US-003, US-004, US-005, US-006 = Minimum viable 2FA feature.

  **Post-MVP (v2):**
  - SMS as a second factor option
  - Per-device "remember this device for 30 days"
  - 2FA enforcement audit reporting for admins

  ## Missing Stories (Flagged)
  - What happens when a user disables 2FA? (Need a story for deliberate unenrollment)
  - What if SMS delivery fails? (If SMS is in scope for MVP)
  - Is there a grace period when org admin first enables enforcement?
tips:
  - "Write acceptance criteria in Gherkin (Given/When/Then) from the start — it forces you to be concrete and makes QA's job dramatically easier."
  - "The 'Missing Stories' section is the most valuable output to review with your engineering team — they'll immediately spot what's missing from a technical perspective."
  - "Error state stories are almost always underwritten. Budget at least 30% of your stories for failure states — that's where user trust is won or lost."
  - "Don't assign point estimates in the story generation phase — get engineering to estimate after reviewing the acceptance criteria, not before."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - prd-one-pager
  - sprint-planning-brief
  - feature-prioritization
  - usability-test-script
tags:
  - user-stories
  - product-management
  - agile
  - sprint-planning
  - requirements
---
