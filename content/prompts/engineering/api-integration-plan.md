---
title: "Plan an API integration end-to-end"
slug: api-integration-plan
function: engineering
role: coding
description: "Produce a complete integration plan for connecting to a third-party API — covering authentication, data mapping, error handling, rate limiting, testing strategy, and operational concerns."
useCase: "Use this prompt before writing any integration code. A well-scoped plan catches auth gotchas, rate limit problems, and data mapping edge cases that are expensive to fix after the fact. Works for REST, GraphQL, and webhook integrations."
prompt: |
  You are a senior software engineer designing a third-party API integration. Create a comprehensive integration plan for the scenario below.

  **Our system:** {{our_system}} (language, framework, and a brief description of what we're building)
  **Third-party API:** {{third_party_api}} (name, version, documentation link if available)
  **What we need from the API:** {{integration_goal}} (what data to fetch/send, what actions to trigger)
  **Authentication method:** {{auth_method}} (e.g., API key in header, OAuth 2.0 client credentials, OAuth 2.0 user auth, webhook HMAC)
  **Expected data volume:** {{data_volume}} (e.g., "1 request per user action", "batch sync of 50K records nightly", "100 webhooks/minute at peak")
  **Known constraints:** {{constraints}} (rate limits, IP allowlisting, webhook IP ranges, sandbox limitations, etc.)
  **Failure tolerance:** {{failure_tolerance}} (e.g., "must not lose data", "best-effort OK", "user-facing — must show friendly errors")

  Produce a complete integration plan covering:

  ## 1. Integration Architecture Overview
  A brief description of the integration pattern (polling, webhooks, batch sync, real-time, etc.) and why it's the right choice for this use case.

  Include a data flow diagram in text form:
  ```
  [Our System] → [step] → [API] → [response] → [step] → [outcome]
  ```

  ## 2. Authentication Implementation
  - Exact implementation approach for the auth method specified
  - How to store credentials securely (never in code or logs)
  - Token refresh strategy (if applicable)
  - How to handle auth failures and re-authentication

  ## 3. Data Mapping
  For each entity or endpoint involved:
  - API field → Our system field mapping
  - Type conversions required
  - Required vs optional fields
  - Null/missing value handling

  ## 4. Error Handling Strategy
  Cover every error category:
  - **4xx errors:** How to handle each relevant status code
  - **5xx errors:** Retry strategy (backoff, max attempts)
  - **Network errors:** Timeout settings, connection failures
  - **Rate limit errors (429):** How to detect and respond
  - **Data validation errors:** What to do if API returns unexpected shape
  - **Partial failures:** How to handle batch operations where some items fail

  ## 5. Rate Limiting
  - The API's rate limit (if known from constraints)
  - How to implement client-side rate limiting before hitting the limit
  - How to detect when approaching the limit (using response headers if available)
  - Backoff strategy with specific parameters (initial delay, multiplier, max wait)

  ## 6. Idempotency and Data Integrity
  - How to ensure duplicate requests don't create duplicate data
  - What happens if a request partially succeeds
  - How to resume interrupted batch operations

  ## 7. Webhook Handling (if applicable)
  - Signature verification implementation
  - Idempotent event processing (handle duplicate deliveries)
  - Immediate 200 OK response + async processing pattern
  - Dead letter queue for failed webhook processing

  ## 8. Testing Strategy
  - How to test without hitting production data
  - Sandbox/test environment setup
  - How to simulate error conditions (4xx, 5xx, rate limits, network timeouts)
  - Contract testing approach to catch API changes

  ## 9. Observability
  - What to log (request ID, status code, latency — never log credentials or PII in API responses)
  - Key metrics to track (error rate, latency P99, rate limit headroom)
  - Alerting thresholds

  ## 10. Rollout Plan
  - How to ship the integration safely (feature flag, limited rollout)
  - How to verify it works in production before full rollout
  - Rollback procedure if integration causes issues

  ## 11. Operational Runbook (brief)
  - How to re-authenticate if credentials expire
  - How to replay failed jobs
  - Who to contact at the third party for support
variables:
  - "{{our_system}}"
  - "{{third_party_api}}"
  - "{{integration_goal}}"
  - "{{auth_method}}"
  - "{{data_volume}}"
  - "{{constraints}}"
  - "{{failure_tolerance}}"
exampleInput: |
  our_system: Python 3.12 + FastAPI + PostgreSQL. A B2B SaaS HR platform — we need to sync employee data bidirectionally with customers' HRIS systems.
  third_party_api: Workday REST API v43.0. We need to pull active employee records and department hierarchy, and push back engagement survey completion status.
  integration_goal: |
    1. Pull: Fetch all active employees (id, name, email, department, manager_id, hire_date, job_title) once per night for each customer tenant
    2. Push: Write survey completion status (employee_id, survey_id, completed_at) back to a custom Workday field after each survey submission
  auth_method: OAuth 2.0 client credentials (one set of credentials per customer tenant)
  data_volume: |
    - Pull: Up to 200 customer tenants, each with 10–50K employees. Nightly batch.
    - Push: ~500 survey completions per hour during business hours, must be near-real-time (within 5 minutes)
  constraints: |
    - Workday rate limit: 100 requests/minute per tenant, 1000 requests/hour per tenant
    - Each employee record fetch is 1 request for up to 1000 employees (paginated)
    - Push to custom fields: 1 request per employee (cannot batch)
    - Sandbox available: implementation.workday.com sandbox tenant
  failure_tolerance: |
    - Pull: best-effort nightly, alert if >5% of tenants fail
    - Push: must not lose completions; if Workday is down, queue and retry for up to 24 hours
exampleOutput: |
  ## 1. Integration Architecture Overview

  **Pull pattern:** Nightly scheduled batch sync per tenant (cron job) using pagination.
  **Push pattern:** Near-real-time event-driven writes via an internal job queue with retry.

  ```
  PULL (nightly):
  Scheduler → For each tenant → OAuth token fetch → Workday /workers endpoint (paginated)
           → Transform + upsert to PostgreSQL employees table → Log sync result

  PUSH (near-real-time):
  Survey submission → Enqueue job (Redis) → Worker fetches job → OAuth token fetch
                   → PUT /workers/{id}/customFields → Success: mark complete
                                                    → Failure: retry with backoff → DLQ after 10 attempts
  ```

  ## 2. Authentication Implementation

  Each customer tenant has its own Workday OAuth 2.0 client credentials (client_id + client_secret). These are scoped to that tenant's Workday instance.

  **Credential storage:** Store per-tenant in a `tenant_integrations` table with credentials encrypted at rest using your application's KMS key. Never log client_secret. Never store in environment variables (they'd be shared across all tenants).

  **Token fetch:**
  ```python
  async def get_workday_token(tenant_id: str) -> str:
      creds = await get_tenant_credentials(tenant_id)  # decrypt from DB
      response = await httpx.post(
          f"https://{creds.workday_host}/ccx/oauth2/token",
          data={"grant_type": "client_credentials", "scope": "employees"},
          auth=(creds.client_id, creds.client_secret),
          timeout=10.0,
      )
      response.raise_for_status()
      token_data = response.json()
      # Cache token until 60s before expiry
      await cache_token(tenant_id, token_data["access_token"],
                        ttl=token_data["expires_in"] - 60)
      return token_data["access_token"]
  ```

  **Token refresh:** Cache tokens in Redis with TTL = `expires_in - 60`. On cache miss, re-fetch. Never re-use an expired token — always check cache first.

  **Auth failure handling:** On 401 from any API call, evict the cached token and retry once. If still 401, mark the tenant as `auth_failed`, alert the ops team, and skip until re-authenticated.

  ## 3. Data Mapping

  **Pull: Workday Worker → Our Employee**

  | Workday Field | Our Field | Notes |
  |---|---|---|
  | `Worker_ID` | `external_id` | String, required |
  | `Worker_Data.Personal_Data.Name_Data.Preferred_Name.Name_Detail_Data.First_Name` | `first_name` | Nested; null-safe access |
  | `Worker_Data.Personal_Data.Contact_Data.Email_Address_Data[0].Email_Address` | `email` | First active email |
  | `Worker_Data.Employment_Data.Worker_Job_Data[0].Position_Data.Business_Unit_ID` | `department_id` | Map to our departments table |
  | `Worker_Data.Employment_Data.Worker_Job_Data[0].Position_Data.Manager_Reference.ID` | `manager_external_id` | Resolve to our employee_id in post-processing |
  | `Worker_Data.Employment_Data.Worker_Status_Data.Hire_Date` | `hire_date` | ISO 8601 date |

  **Null handling:** If `email` is missing, log a warning and skip the employee (email is required for our system). All other fields: use `None` and allow null in DB.

  **Push: Our Completion → Workday Custom Field**

  | Our Field | Workday Endpoint/Field |
  |---|---|
  | `employee.external_id` | URL path: `/workers/{id}` |
  | `survey.external_key` | Custom field ID (configured per tenant) |
  | `completed_at` (UTC ISO 8601) | Workday date-time field |

  ## 4. Error Handling Strategy

  | Error | Response |
  |---|---|
  | 401 Unauthorized | Evict token cache, retry once. If persists: mark tenant auth_failed, alert |
  | 403 Forbidden | Log + alert — scope issue, requires tenant admin to fix |
  | 404 on push | Employee not found in Workday — log warning, skip (employee may have been terminated) |
  | 422 Validation | Log full response body (sanitized), alert on-call — likely a field mapping bug |
  | 429 Rate Limited | Respect `Retry-After` header; pause tenant's operations, resume after delay |
  | 500/503 | Retry with exponential backoff: 5s, 10s, 20s, 40s, 80s (max 5 attempts) |
  | Network timeout | Treat as transient 5xx; retry same backoff |

  ## 5. Rate Limiting

  Workday allows 100 requests/minute and 1000 requests/hour per tenant.

  **Client-side limiting:** Use a token bucket per tenant in Redis (100 tokens, refill 100/min). Before each request, consume a token. If empty, sleep until refill.

  **Nightly pull math:** 50K employees / 1000 per page = 50 requests per large tenant. 200 tenants × 50 requests = 10K requests total, spread over 6 hours = safe.

  **Push burst protection:** Survey completions arrive in bursts after work hours. Queue pushes and process at max 80/minute per tenant (20% headroom below the 100/min limit).

  **Backoff parameters:** On 429, read `Retry-After` header (seconds). If absent, use 60 seconds. Implement per-tenant backoff so one rate-limited tenant doesn't delay others.

  ## 6. Idempotency and Data Integrity

  **Pull:** Use `external_id` as the upsert key. Re-running a nightly sync is safe — it updates existing records and inserts new ones. Track `last_synced_at` per tenant.

  **Push:** Before pushing, check if we've already successfully pushed this `(employee_id, survey_id)` combination (store result in `workday_sync_log` table). If already pushed: skip. This handles duplicate queue deliveries.

  **Partial batch failure (pull):** If a nightly sync fails mid-way through pagination, record the last successful page cursor in Redis. Resume from that cursor on next attempt rather than restarting from page 1.

  ## 8. Testing Strategy

  **Sandbox:** Use `implementation.workday.com` tenant for all development. Seed it with 10 test employee records covering edge cases (missing email, no manager, international names).

  **Simulate errors in tests:**
  ```python
  # Mock 429 response
  with respx.mock:
      respx.get("https://workday.com/workers").mock(
          return_value=httpx.Response(429, headers={"Retry-After": "30"})
      )
      # Assert backoff behavior
  ```

  **Contract test:** Nightly CI job hits the Workday sandbox and asserts the response schema matches our data mapping. This catches API version changes before they hit production.

  ## 9. Observability

  **Log per request:** tenant_id, endpoint, status_code, latency_ms, request_id (from Workday `Wd-Request-Id` response header). Never log access tokens or employee PII.

  **Metrics to track:**
  - `workday.sync.success_rate` per tenant (alert if <95%)
  - `workday.push.queue_depth` (alert if >1000 — means processing is falling behind)
  - `workday.rate_limit.headroom` per tenant (alert if <20%)
  - `workday.push.p99_latency` (SLO: completions reflected in Workday within 5 minutes)
tips:
  - "Read the API's rate limit documentation twice. Rate limits are the #1 cause of production integration failures, and they're always more complex than they first appear."
  - "Design for the unhappy path first — what happens when the API is down for 2 hours? What about when a single tenant's credentials expire? Every integration needs answers to these."
  - "For OAuth integrations, always cache tokens with a safety margin before expiry. Fetching a fresh token on every request is slow and can itself hit rate limits on the token endpoint."
  - "Never log API credentials or PII from API responses. Log the fields you need for debugging (request_id, status_code, tenant_id) and nothing else."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - system-design-review
  - runbook-draft
  - debug-error-message
  - environment-setup-guide
tags:
  - api
  - integration
  - architecture
  - engineering
  - backend
---
