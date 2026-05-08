---
title: "Run a STRIDE threat model on a system description"
slug: threat-model-stride
function: it-security
role: security
description: "Apply the STRIDE methodology to a system architecture and produce a prioritized list of threats with mitigations."
useCase: "Use this prompt during design review of a new service, after an architecture change, or before a security audit. STRIDE forces you to think systematically about each component and trust boundary instead of riffing on the threats you happen to remember."
prompt: |
  You are a senior application security engineer running a STRIDE threat model. Be thorough and skeptical. Do not skip categories that "don't apply" — explain why if you decide to skip.

  System under review:
  - Name and purpose: {{system}}
  - Architecture diagram (in text): {{architecture}}
  - Trust boundaries: {{trust_boundaries}}
  - Data classification: {{data_classification}}
  - Auth model: {{auth_model}}
  - Existing controls: {{existing_controls}}

  Produce:

  1. **System decomposition**: list components, data flows, and trust boundaries you identified. Note any ambiguities in the input.

  2. **STRIDE matrix per component**: for each component, walk through:
     - **S**poofing — can someone impersonate this component or its users?
     - **T**ampering — can data in transit, at rest, or in process be modified?
     - **R**epudiation — can actions be denied without proof?
     - **I**nformation disclosure — can confidential data leak?
     - **D**enial of service — can availability be attacked?
     - **E**levation of privilege — can an attacker gain unintended privileges?

  3. **Threat list**, each with:
     - Threat ID (T-001…)
     - STRIDE category
     - Component / data flow affected
     - Threat description (how the attack works)
     - Likelihood (Low/Med/High) with reasoning
     - Impact (Low/Med/High) with reasoning
     - Risk (likelihood × impact, prioritized)
     - Existing controls that mitigate
     - Recommended mitigations (what's missing)

  4. **Top 5 risks**: ranked, with the proposed action for each

  5. **Out-of-scope / accepted risks**: things deliberately not addressed and why

  6. **Open questions** for the system owner — gaps in the input that change conclusions

  Be specific to the architecture given; avoid generic OWASP boilerplate. Cite real attack paths.
variables:
  - "{{system}}"
  - "{{architecture}}"
  - "{{trust_boundaries}}"
  - "{{data_classification}}"
  - "{{auth_model}}"
  - "{{existing_controls}}"
exampleInput: |
  system: customer-portal — self-serve web app where SaaS customers manage subscriptions, view invoices, and update payment methods
  architecture: |
    Browser → CloudFront → ALB → portal-api (Go on EKS)
    portal-api ↔ Postgres (RDS, customer-tenant-isolated by row)
    portal-api ↔ Stripe (payment methods)
    portal-api → invoice-service (internal) → S3 (PDFs, signed URL access)
    portal-api → SQS → email-service (transactional email via SES)
  trust_boundaries: |
    1. Public internet → CloudFront/ALB (TLS termination)
    2. ALB → portal-api (inside VPC, mTLS via Istio)
    3. portal-api → RDS (VPC, IAM auth)
    4. portal-api → Stripe (egress over TLS)
    5. portal-api → S3 signed URL (returned to browser, browser fetches direct from S3)
  data_classification: |
    - PII (name, email, billing address): Tier 2
    - Payment instrument tokens: Tier 1 (no PAN stored — tokens only)
    - Invoice PDFs: Tier 2
    - Session tokens: Tier 1
  auth_model: |
    SSO via Auth0 (OIDC). Session = JWT cookie, 12h. MFA required. Tenant isolation enforced at portal-api by tenant_id claim.
  existing_controls: |
    WAF (AWS WAF managed rules), rate limit at CloudFront, mTLS in mesh, RDS IAM auth, S3 SSE-KMS, audit log via Datadog, Stripe webhook signature verification, CSP header
exampleOutput: |
  # STRIDE Threat Model: customer-portal

  Author: AppSec. Date: 2026-05-07. Status: Draft for engineering review.

  ## 1. System decomposition

  Components:
  - C1: Browser (untrusted)
  - C2: CloudFront + WAF
  - C3: ALB
  - C4: portal-api (Go service)
  - C5: RDS Postgres
  - C6: Stripe (external)
  - C7: invoice-service
  - C8: S3 (invoice PDFs)
  - C9: SQS + email-service + SES
  - C10: Auth0 (external IdP)

  Data flows: 11 distinct flows mapped.

  Ambiguities flagged: (a) tenant_id claim source — is it set at Auth0 or by portal-api on first login? Different threat profile. (b) S3 signed URL TTL not specified.

  ## 2. STRIDE matrix (abridged)

  | Component | S | T | R | I | D | E |
  |---|---|---|---|---|---|---|
  | Browser | Session theft | XSS-driven request forging | User repudiation of action | Cookie theft | n/a (untrusted) | DOM-based privilege via XSS |
  | portal-api | Tenant_id forgery via JWT manipulation | SQL injection / mass-assignment | Insufficient audit log | Tenant data leak via IDOR | Resource exhaustion | Privilege via misconfigured RBAC |
  | RDS | DB credential theft | SQL injection (via portal-api) | DB-level audit gap | Cross-tenant query | Connection exhaustion | DB-level role escalation |
  | S3 (invoice PDFs) | n/a (signed URL is auth) | n/a (write controlled) | Access not logged at object level | Signed URL leak / brute force | Egress cost amplification | n/a |
  | SQS → email | Message forgery (if SQS public) | Email body tampering before send | Email delivery non-repudiation | Email content disclosure | Queue flooding | Privilege via unintended consumers |
  | Auth0 (external) | Account takeover | Token forgery | Login non-repudiation gap | PII at IdP | IdP outage = portal outage | OAuth scope creep |

  Skipped: (none — every category has at least one threat per component reviewed)

  ## 3. Threat list

  | ID | Cat | Component | Threat | Likelihood | Impact | Risk | Existing | Recommend |
  |---|---|---|---|---|---|---|---|---|
  | T-001 | I | portal-api / RDS | Cross-tenant data access via IDOR — endpoint trusts URL `tenant_id` instead of JWT claim | M | H (multi-tenant breach) | **High** | mTLS, IAM auth | Centralized tenant-scoping middleware; deny-by-default queries; per-PR static check for raw tenant_id from request |
  | T-002 | E | portal-api | JWT signing key compromise → tenant_id claim forgery | L | Critical | **High** | Auth0-managed JWKS, rotation | Short-lived tokens (15m access + refresh), Auth0 key rotation alarm, JWT `aud` and `iss` validation tested in CI |
  | T-003 | I | S3 signed URLs | Signed URL leakage via referer header or browser history; URL replayed by attacker | M | M (one customer's invoices) | **Med-High** | S3 SSE-KMS | Reduce TTL to 5 min, require user-agent or IP binding via S3 access policy where possible, log object access via S3 access logs to Datadog |
  | T-004 | T | Browser → portal-api | XSS-driven CSRF or token theft | M | H | **High** | CSP header | Verify CSP is `strict-dynamic`, no `unsafe-inline`; session cookie `HttpOnly; Secure; SameSite=Strict`; subresource integrity on first-party scripts |
  | T-005 | D | portal-api | Application-layer DoS bypassing CloudFront (low-RPS, expensive endpoint like PDF generation) | M | M | **Med** | WAF rate limit | Per-tenant rate limit at portal-api; PDF generation queue with concurrency cap; circuit breaker on invoice-service |
  | T-006 | R | portal-api | "Customer denies they updated payment method" — audit log doesn't bind to user identity strongly | M | M (chargeback liability) | **Med** | Datadog audit | Audit log entry per state change including JWT `sub`, IP, UA; immutable archive to S3 with object lock; integrate with chargeback evidence pipeline |
  | T-007 | S | SQS → email | Forged messages cause spoofed transactional email | L | M (phishing potential) | **Med** | SQS in-VPC | Confirm SQS access policy denies all but invoice-service IAM role; sign messages with HMAC; email-service rejects unsigned |
  | T-008 | I | Auth0 | PII at external IdP — account enumeration via /forgot-password | M | L | **Low-Med** | Auth0 default | Auth0 brute-force protection enabled; uniform response timing on enumeration endpoints; monitoring on Auth0 anomaly detection |
  | T-009 | T | Stripe webhook | Replay or forged webhook → unauthorized state change | L | H (subscription fraud) | **Med** | Stripe sig verification | Verify timestamp tolerance ≤5 min; idempotency key on webhook handler; replay detection store |
  | T-010 | E | portal-api | Mass-assignment in update endpoints — extra fields in JSON update internal flags (e.g., `is_admin`) | M | H | **High** | none stated | Strict allowlist DTO; unit test that rejects extra fields; static analysis rule |

  ## 4. Top 5 risks (ranked)

  1. **T-001 (cross-tenant IDOR)** — multi-tenant data exposure is the single highest-impact failure mode. Action: implement tenant-scoping middleware as a hard requirement, with a PR check that flags any handler not using it. Pen-test specifically for this within 60 days.
  2. **T-004 (XSS → token theft)** — high blast radius given session steals subscription/billing access. Action: audit CSP, harden cookie flags, add SRI to bundler this sprint.
  3. **T-010 (mass-assignment)** — common Go-handler pitfall, easy to ship by accident. Action: codify DTO-with-allowlist pattern in `portal-api`'s base handler; add `gosec`-style check.
  4. **T-002 (JWT key compromise)** — low likelihood, critical impact. Action: shorten access-token TTL to 15 min, validate `aud`/`iss` in middleware tests, alarm on Auth0 JWKS rotation events.
  5. **T-003 (signed URL leakage)** — frequent real-world cause of invoice leakage. Action: TTL → 5 min, enable S3 access logging end-to-end, evaluate browser-side viewer to avoid handing raw S3 URL to user-agent.

  ## 5. Out-of-scope / accepted risks

  - **Stripe-side compromise** — out of scope; Stripe is treated as a trusted third party. Periodic vendor risk review covers this.
  - **Insider threat at Auth0** — accepted; mitigation depends on Auth0's controls (SOC 2 Type II) and our token verification.
  - **Physical attack on AWS infrastructure** — out of scope.
  - **Browser extensions exfiltrating session** — accepted; no practical control beyond CSP and session length.

  ## 6. Open questions

  - Where is `tenant_id` set in the JWT — Auth0 rule, or first-login in portal-api? If the latter, T-001 likelihood rises.
  - Current S3 signed URL TTL? Doc says nothing; if it's the AWS default (15 min) we are in OK shape; if it's hours, T-003 is High.
  - Is invoice-service a separate trust boundary, or does it share portal-api's IAM role? Affects blast radius.
  - Are there admin endpoints on portal-api (support tooling)? Not mentioned. Admin paths often carry the worst privilege escalation risk and should be modeled separately.

  ---

  This threat model is a starting point for engineering review, not a security sign-off. AI-assisted analysis should be validated by a qualified application security engineer, especially for T-001, T-002, and T-010, which require code-level review beyond architecture.
tips:
  - "STRIDE works best when you do it per-component, not for the system as a whole. Per-component forces breadth; system-level lets you skip categories that 'feel solved'."
  - "Pair this with an attacker-goal exercise: 'How would I exfiltrate one customer's invoices?' Walk both top-down and bottom-up."
  - "When likelihood is Low/Med, force yourself to articulate why. 'Low because the attacker would need…' is the part that catches missing controls."
  - "Re-run the threat model after material architecture changes. New trust boundaries or external integrations always introduce new threats — never decrease them."
  - "AI assistance is not a replacement for security review by qualified professionals. STRIDE output is a structured first pass; it must be reviewed and pen-tested by a qualified application security engineer before treating findings as authoritative."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - vulnerability-triage-report
  - third-party-vendor-risk-assessment
  - soc2-control-narrative
tags:
  - threat-modeling
  - stride
  - appsec
  - security
  - architecture-review
---
