---
title: "Draft a secrets management policy for engineering"
slug: secrets-management-policy
function: it-security
role: devops
description: "Generate a practical secrets management policy that engineers will actually follow — covering storage, rotation, access, and incident handling."
useCase: "Use this prompt when standing up secrets practices for a new team, preparing for SOC 2 / ISO 27001 audit, or replacing an ad-hoc situation where secrets live in .env files and Slack DMs. Output is a single document that names tools, owners, and concrete behaviors."
prompt: |
  You are a security-minded staff engineer drafting a secrets management policy for an engineering org. Write a policy doc that engineers will actually read and follow — not a 30-page compliance artifact.

  Org context:
  - Company size: {{company_size}}
  - Stack/cloud: {{stack}}
  - Compliance frame: {{compliance}}
  - Existing tooling: {{existing_tooling}}
  - Known pain points: {{pain_points}}

  The policy must cover:

  1. **Scope**: what counts as a secret (and what doesn't)
  2. **Classification**: tiers (e.g., Tier 1: prod customer data keys; Tier 2: prod infra; Tier 3: dev/test) with handling rules per tier
  3. **Approved storage**: name the systems (e.g., AWS Secrets Manager, HashiCorp Vault, 1Password) and which is for which tier
  4. **Forbidden storage**: explicit list — Slack, .env files committed to git, Notion, email, ticket attachments
  5. **Access**: principle of least privilege, who approves access, how access is reviewed
  6. **Rotation**: cadence per tier, automatic vs manual, who owns rotation for each system
  7. **Local development**: how engineers get dev credentials without copy-pasting prod
  8. **CI/CD**: how pipelines obtain secrets (OIDC preferred), no long-lived keys
  9. **Incident response**: what to do if a secret is leaked — first 30 minutes, first 24 hours
  10. **Detection**: secret scanning in repos, in commits, in logs
  11. **Exceptions**: how to request, who approves, how long they last
  12. **Roles and responsibilities**: who owns the policy, who enforces it, who audits

  Tone: direct, concrete, written by someone who has actually run a rotation incident at 2am. Include examples of right/wrong behavior. Avoid the word "stakeholder."
variables:
  - "{{company_size}}"
  - "{{stack}}"
  - "{{compliance}}"
  - "{{existing_tooling}}"
  - "{{pain_points}}"
exampleInput: |
  company_size: 120 employees, ~45 engineers
  stack: AWS-primary (multi-account org), some GCP for ML, GitHub, Kubernetes (EKS)
  compliance: SOC 2 Type II achieved, GDPR; pursuing HIPAA next year
  existing_tooling: AWS Secrets Manager, GitHub Actions, Datadog, 1Password Business, no Vault
  pain_points: "Secrets in .env files in git history, hardcoded API keys in Lambda environment variables, no rotation cadence, dev access to prod secrets via shared 1Password vault"
exampleOutput: |
  # Secrets Management Policy

  Owner: Security Engineering. Effective: 2026-05-07. Review: annually or on material change.

  ## 1. Scope

  A "secret" is any credential whose disclosure would let an unauthorized party act as us, access our data, or charge our accounts. This includes API keys, database passwords, OAuth client secrets, SSH private keys, JWT signing keys, encryption keys, webhook signing secrets, and any token longer than 16 chars that grants access to a system.

  Out of scope: public configuration (feature flags, public API endpoints, static frontend config). When in doubt, treat as a secret.

  ## 2. Classification

  | Tier | Examples | Storage | Rotation | Access |
  |---|---|---|---|---|
  | T1 — Crown jewels | Customer data DB credentials, payment processor keys, KMS root keys | AWS Secrets Manager (prod account) + Secrets Manager replication | 90 days, automatic | On-call + named owners only, JIT via AWS IAM Identity Center |
  | T2 — Prod infra | Internal service-to-service keys, third-party SaaS API keys | AWS Secrets Manager (per-account) | 180 days, automatic where supported, manual otherwise | Service team + platform team |
  | T3 — Dev/test | Sandbox API keys, local test fixtures | 1Password Business (Engineering vault) or per-developer dev account | Annual or on offboarding | Engineering org |

  ## 3. Approved storage

  - **Tier 1 and Tier 2**: AWS Secrets Manager. Application access via IAM role, never via long-lived AWS keys.
  - **Tier 3 dev credentials**: 1Password Business, vault per team.
  - **Build-time secrets for CI**: GitHub Actions OIDC → AWS IAM role. No `secrets.AWS_ACCESS_KEY_ID` in repo settings.
  - **Local dev access to T2**: AWS IAM Identity Center session, scoped read-only to dev account.

  HashiCorp Vault is not in scope today; we will revisit when HIPAA prep starts.

  ## 4. Forbidden storage (no exceptions)

  - Plaintext in any git repo, including private repos, including the gitignored `.env` files (history is the issue)
  - Slack messages, including DMs and threads
  - Email or any ticketing system (Jira, Linear, Zendesk)
  - Notion, Confluence, Google Docs, READMEs
  - Lambda environment variables for T1 or T2 secrets — use Secrets Manager fetch at cold start
  - `kubectl create secret` from a hand-typed value — use ExternalSecret operator pulling from AWS Secrets Manager

  Right: `valueFrom.secretKeyRef` pointing to an ExternalSecret synced from Secrets Manager.
  Wrong: `value: "sk_live_..."` in any file.

  ## 5. Access

  - Production T1 access defaults to zero. Engineers request JIT via Identity Center, max 4-hour session, peer approval required.
  - Service access uses IAM roles attached to the workload identity (IRSA on EKS, instance profile on EC2).
  - Quarterly access review: Security Engineering exports IAM and Secrets Manager resource policies and confirms each principal still needs access. Stale access removed within 5 business days.

  ## 6. Rotation

  - T1: 90 days, AWS Secrets Manager rotation Lambda for RDS and supported targets; manual ticket-driven for unsupported (Stripe restricted keys, etc.) with rotation owner named in the secret's metadata
  - T2: 180 days, same pattern
  - T3: annual, plus on offboarding within 24 hours of an engineer leaving
  - Rotation Lambda failures page on-call within 1 hour
  - Rotation logs are exported to CloudTrail and reviewed quarterly (CC6.1, CC6.6)

  ## 7. Local development

  - No T1 secret ever leaves AWS Secrets Manager. Local dev uses isolated dev-account credentials.
  - Per-engineer dev secrets via `aws-vault` or `granted` CLI, federated through Identity Center
  - For non-AWS dev secrets (Stripe sandbox, etc.), 1Password CLI: `op read "op://Engineering/stripe-sandbox/api-key"`
  - Onboarding script (`scripts/dev-bootstrap.sh`) sets up `aws-vault` profile and `op` CLI; new engineer gets working dev env with zero secrets in their home directory in plaintext beyond the OS keychain entry

  ## 8. CI/CD

  - GitHub Actions assumes an AWS IAM role via OIDC. The role's trust policy restricts to specific repo and branch.
  - No long-lived AWS access keys in `secrets.*`. Audit on adoption: Security Engineering will scan GitHub org for `AWS_ACCESS_KEY_ID` quarterly.
  - Build artifacts must not contain secrets; we run `gitleaks` on every PR and on the produced Docker image.

  ## 9. Incident response: leaked secret

  **First 30 minutes**:
  1. Whoever discovers the leak rotates the secret immediately. Don't wait for approval — rotation is the safe action.
  2. Open an incident in #sec-incidents with `!incident leaked-secret`.
  3. Identify the surface area: which systems used this secret, what could the attacker have done.
  4. Search logs for unauthorized use of the leaked secret in the window between leak and rotation. Datadog query: `@aws.requestParametersaccessKeyId:*` for AWS keys; provider-specific for SaaS.

  **First 24 hours**:
  - Determine root cause: how did the secret reach the leaked location
  - File CVE-style write-up in the incident channel
  - If customer data was potentially accessed, escalate to Legal and Security leadership; GDPR 72-hour clock may apply
  - Add detection rule to prevent recurrence (gitleaks pattern, log alert, etc.)

  ## 10. Detection

  - `gitleaks` in pre-commit hook (advisory) and PR check (blocking)
  - Trivy filesystem scan in build pipeline for any secret-shaped strings in built images
  - Datadog log scrubbing rules for known secret patterns; alerts on any match
  - Quarterly sweep of Lambda env vars by Security Engineering for unauthorized T1/T2 material

  ## 11. Exceptions

  Need to deviate? File a Linear ticket in the `SEC` project tagged `policy-exception`. Required: justification, mitigating controls, expiration date (max 90 days). Approved by Head of Security or designate. Expired exceptions auto-revert to policy default; the ticket reopens.

  ## 12. Roles and responsibilities

  - **Security Engineering**: owns this policy; runs quarterly access reviews; investigates leaks
  - **Platform Engineering**: owns Secrets Manager, OIDC trust policies, ExternalSecrets operator
  - **Service teams**: own rotation execution for their service's third-party SaaS keys
  - **Engineering leadership**: enforces consequences for repeat policy violations
  - **All engineers**: read this; ask in #sec-help when unsure
tips:
  - "Don't write a 30-page policy. Engineers won't read it. The version above is ~900 words and covers everything an audit needs."
  - "Name your tools by name. 'A secrets management solution' is uselessly vague. 'AWS Secrets Manager' tells someone what to use today."
  - "The incident response section is the one auditors and on-call engineers will actually read. Make it concrete and runnable."
  - "AI assistance is not a replacement for security review by qualified professionals. Have your security lead and an outside auditor review before adoption — and tailor classifications to your actual data inventory."
  - "Pair the policy with a one-page cheat sheet pinned in #engineering: 'Where do I put X?' is faster than re-reading the policy."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - security-policy-acceptable-use
  - soc2-control-narrative
  - asset-management-policy
tags:
  - secrets
  - policy
  - security
  - devops
  - compliance
---
