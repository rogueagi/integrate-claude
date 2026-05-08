---
title: "Document an API endpoint or set of endpoints"
slug: api-endpoint-docs
function: engineering
role: documentation
description: "Generate clear, complete API documentation for one or more endpoints — covering request/response schemas, authentication, error codes, rate limits, and usage examples that developers can use immediately."
useCase: "Use this prompt when adding new endpoints to a public or internal API, when writing API docs from existing code, or when an endpoint has drifted from its documentation and needs to be re-documented accurately."
prompt: |
  You are a technical writer specializing in API documentation. Document the API endpoint(s) described below.

  **API name / context:** {{api_name}}
  **Base URL:** {{base_url}}
  **Authentication method:** {{auth_method}}
  **Endpoint(s) to document:**
  ```
  {{endpoints}}
  ```
  **Request/response details:**
  ```{{language}}
  {{implementation_or_schema}}
  ```
  **Error codes this endpoint can return:** {{error_codes}}
  **Rate limits:** {{rate_limits}}
  **Audience:** {{audience}} (e.g., external developers, internal mobile team, third-party partners)
  **Documentation format:** {{format}} (e.g., OpenAPI/Swagger YAML, Markdown, Notion-style)

  Write complete documentation for each endpoint with:

  ## [METHOD] /path/to/endpoint

  **Summary:** One sentence describing what this endpoint does.

  **Authentication:** Required / optional, and how to provide it.

  ### Request

  **Path parameters** (if any):
  | Parameter | Type | Required | Description |
  |---|---|---|---|

  **Query parameters** (if any):
  | Parameter | Type | Required | Default | Description |
  |---|---|---|---|---|

  **Request body** (if any):
  ```json
  {
    // Annotated example with all fields
  }
  ```

  | Field | Type | Required | Description |
  |---|---|---|---|

  ### Response

  **Success response (2xx):**
  ```json
  {
    // Annotated example response
  }
  ```

  | Field | Type | Description |
  |---|---|---|

  ### Error Responses

  | Status | Code | Description | When it occurs |
  |---|---|---|---|

  ### Example

  Complete curl example:
  ```bash
  curl -X [METHOD] "[base_url]/path" \
    -H "Authorization: Bearer {token}" \
    -H "Content-Type: application/json" \
    -d '{...}'
  ```

  Expected response:
  ```json
  {...}
  ```

  ### Notes
  Any important behavioral notes, edge cases, idempotency behavior, or pagination details.

  [If generating OpenAPI YAML format, produce a valid OpenAPI 3.0 spec block for each endpoint instead of the Markdown format above]
variables:
  - "{{api_name}}"
  - "{{base_url}}"
  - "{{auth_method}}"
  - "{{endpoints}}"
  - "{{implementation_or_schema}}"
  - "{{error_codes}}"
  - "{{rate_limits}}"
  - "{{audience}}"
  - "{{format}}"
exampleInput: |
  api_name: Beacon HR Platform API v2
  base_url: https://api.beacon.io/v2
  auth_method: Bearer token (JWT), passed in Authorization header. Tokens expire after 1 hour.
  endpoints: |
    POST /surveys — Create a new survey
    GET /surveys/{survey_id} — Retrieve a survey by ID
    POST /surveys/{survey_id}/publish — Publish a survey to recipients
  implementation_or_schema: |
    # Survey object
    {
      id: string (UUID),
      name: string (required, max 200 chars),
      description: string (optional),
      questions: array of Question objects (min 1, max 50),
      status: "draft" | "published" | "closed",
      created_by: string (user ID),
      created_at: ISO 8601 datetime,
      published_at: ISO 8601 datetime | null,
      recipient_count: integer
    }

    # Question object
    {
      id: string,
      text: string (required, max 500 chars),
      type: "scale_1_5" | "scale_1_10" | "text" | "yes_no",
      required: boolean (default true)
    }

    # POST /surveys body: { name, description?, questions[] }
    # GET /surveys/{id} response: full Survey object
    # POST /surveys/{id}/publish body: { recipient_group_id: string }
  error_codes: |
    400 — Validation error (missing required field, constraint violation)
    401 — Missing or invalid auth token
    403 — Insufficient permissions (e.g., user doesn't own the survey)
    404 — Survey not found
    409 — Conflict (e.g., survey already published)
    422 — Business rule violation (e.g., publishing a survey with no questions)
    429 — Rate limit exceeded
    500 — Internal server error
  rate_limits: "100 requests per minute per API token. 429 returned with Retry-After header."
  audience: External developers integrating with Beacon via our Partner API
  format: Markdown
exampleOutput: |
  # Beacon HR Platform API v2 — Survey Endpoints

  **Base URL:** `https://api.beacon.io/v2`
  **Authentication:** All endpoints require a Bearer token in the `Authorization` header. Tokens expire after 1 hour.
  **Rate limit:** 100 requests/minute per token. On limit exceeded, `429` is returned with a `Retry-After` header (seconds to wait).

  ---

  ## POST /surveys

  **Summary:** Create a new survey in draft status.

  **Authentication:** Required.

  ### Request

  **Request body:**
  ```json
  {
    "name": "Q1 Engagement Survey",
    "description": "Quarterly pulse check for all employees",
    "questions": [
      {
        "text": "How satisfied are you with your current role?",
        "type": "scale_1_5",
        "required": true
      },
      {
        "text": "What could we do to improve your experience?",
        "type": "text",
        "required": false
      }
    ]
  }
  ```

  | Field | Type | Required | Description |
  |---|---|---|---|
  | `name` | string | Yes | Survey name. Max 200 characters. |
  | `description` | string | No | Optional description shown to recipients. |
  | `questions` | array | Yes | 1–50 question objects. See Question schema below. |

  **Question object:**

  | Field | Type | Required | Description |
  |---|---|---|---|
  | `text` | string | Yes | Question text. Max 500 characters. |
  | `type` | string | Yes | `scale_1_5`, `scale_1_10`, `text`, or `yes_no` |
  | `required` | boolean | No | Whether response is required. Default: `true` |

  ### Response

  **201 Created:**
  ```json
  {
    "id": "srv_a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Q1 Engagement Survey",
    "description": "Quarterly pulse check for all employees",
    "status": "draft",
    "questions": [
      {
        "id": "q_1a2b3c4d",
        "text": "How satisfied are you with your current role?",
        "type": "scale_1_5",
        "required": true
      }
    ],
    "created_by": "usr_abc123",
    "created_at": "2025-03-15T14:30:00Z",
    "published_at": null,
    "recipient_count": 0
  }
  ```

  | Field | Type | Description |
  |---|---|---|
  | `id` | string | Unique survey ID. Used in all subsequent requests. |
  | `status` | string | Always `"draft"` for newly created surveys. |
  | `created_at` | string | ISO 8601 UTC datetime. |
  | `published_at` | null | `null` until the survey is published. |
  | `recipient_count` | integer | Always `0` until published. |

  ### Error Responses

  | Status | Description | When it occurs |
  |---|---|---|
  | 400 | Validation error | Missing `name`, empty `questions` array, or field exceeds length limit |
  | 401 | Unauthorized | Missing or expired Bearer token |
  | 429 | Rate limit exceeded | More than 100 requests/minute |

  ### Example

  ```bash
  curl -X POST "https://api.beacon.io/v2/surveys" \
    -H "Authorization: Bearer eyJhbGc..." \
    -H "Content-Type: application/json" \
    -d '{
      "name": "Q1 Engagement Survey",
      "questions": [
        {"text": "How satisfied are you with your role?", "type": "scale_1_5"}
      ]
    }'
  ```

  ---

  ## GET /surveys/{survey_id}

  **Summary:** Retrieve a survey by its ID, including all questions and current status.

  **Authentication:** Required. The requesting user must be the survey creator or have admin access.

  ### Request

  **Path parameters:**

  | Parameter | Type | Required | Description |
  |---|---|---|---|
  | `survey_id` | string | Yes | The survey ID returned from `POST /surveys`. |

  ### Response

  **200 OK:** Full survey object (same schema as `POST /surveys` response above).

  ### Error Responses

  | Status | Description | When it occurs |
  |---|---|---|
  | 401 | Unauthorized | Missing or expired Bearer token |
  | 403 | Forbidden | Authenticated user is not the survey owner or admin |
  | 404 | Not found | No survey with this ID exists, or it belongs to a different account |

  ### Example

  ```bash
  curl "https://api.beacon.io/v2/surveys/srv_a1b2c3d4-e5f6-7890-abcd-ef1234567890" \
    -H "Authorization: Bearer eyJhbGc..."
  ```

  ---

  ## POST /surveys/{survey_id}/publish

  **Summary:** Publish a draft survey to a recipient group, triggering delivery notifications.

  **Authentication:** Required. Only the survey creator or an admin can publish.

  ### Request

  **Path parameters:**

  | Parameter | Type | Required | Description |
  |---|---|---|---|
  | `survey_id` | string | Yes | ID of the survey to publish. Must be in `draft` status. |

  **Request body:**
  ```json
  {
    "recipient_group_id": "grp_xyz789"
  }
  ```

  | Field | Type | Required | Description |
  |---|---|---|---|
  | `recipient_group_id` | string | Yes | ID of the employee group to send the survey to. Groups are managed in the Beacon admin UI. |

  ### Response

  **200 OK:**
  ```json
  {
    "id": "srv_a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "published",
    "published_at": "2025-03-15T15:00:00Z",
    "recipient_count": 243
  }
  ```

  | Field | Type | Description |
  |---|---|---|
  | `status` | string | `"published"` after a successful publish. |
  | `published_at` | string | ISO 8601 UTC datetime of publication. |
  | `recipient_count` | integer | Number of employees notified. |

  ### Error Responses

  | Status | Description | When it occurs |
  |---|---|---|
  | 403 | Forbidden | User does not own this survey |
  | 404 | Not found | Survey ID does not exist |
  | 409 | Conflict | Survey is already published or closed |
  | 422 | Unprocessable | Survey has no questions, or `recipient_group_id` is invalid |

  ### Example

  ```bash
  curl -X POST "https://api.beacon.io/v2/surveys/srv_a1b2c3d4-e5f6-7890-abcd-ef1234567890/publish" \
    -H "Authorization: Bearer eyJhbGc..." \
    -H "Content-Type: application/json" \
    -d '{"recipient_group_id": "grp_xyz789"}'
  ```

  ### Notes

  - Publishing is **irreversible** — published surveys cannot be returned to draft status. Create a new survey if you need to make changes.
  - Recipient notifications are sent asynchronously. The `recipient_count` in the response reflects the group size at the moment of publication.
  - Closing a published survey is done via `POST /surveys/{survey_id}/close` (separate endpoint).
tips:
  - "The example request and response are the most read sections of any API doc. Make them realistic — use real-looking IDs, plausible data values, and complete curl commands."
  - "Document every error code, including 401 and 429. Developers encounter errors first — good error documentation saves support tickets."
  - "Note idempotency behavior explicitly: 'Can this endpoint be called twice safely?' Developers need to know before they build retry logic."
  - "If you generate OpenAPI YAML, paste it into editor.swagger.io to validate it renders correctly before publishing."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - readme-draft
  - runbook-draft
  - api-integration-plan
  - architecture-decision-record
tags:
  - documentation
  - api
  - engineering
  - openapi
  - developer-experience
---
