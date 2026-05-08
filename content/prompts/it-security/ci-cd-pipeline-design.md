---
title: "Design a CI/CD pipeline for a new service"
slug: ci-cd-pipeline-design
function: it-security
role: devops
description: "Produce a complete CI/CD pipeline design — stages, tools, security gates, environments — for a new service shipping to production."
useCase: "Use this prompt when a new service is spinning up and you need a defensible pipeline design before writing the first GitHub Actions or GitLab CI YAML. It forces decisions on test gates, security scanning, deployment strategy, and rollback before any code is written."
prompt: |
  You are a staff DevOps engineer designing a CI/CD pipeline. Produce a complete pipeline design for the service described below. Be opinionated and explain your tradeoffs.

  Service:
  - Name: {{service_name}}
  - Language/framework: {{stack}}
  - Deploy target: {{deploy_target}}
  - Compliance requirements: {{compliance}} (e.g., SOC 2, HIPAA, none)
  - Team size and release cadence: {{team_cadence}}
  - Existing tooling constraints: {{existing_tooling}}

  Deliver:

  1. **Pipeline diagram** (textual): stages from commit to production, including parallelization opportunities

  2. **Per-stage detail** for each of:
     - Pre-commit (linting, secret scanning, formatting)
     - PR validation (unit tests, type checks, SAST)
     - Build (artifact creation, SBOM generation, signing)
     - Security scanning (dependency scan, container scan, IaC scan if applicable)
     - Integration / E2E tests
     - Staging deploy
     - Production deploy (strategy: rolling, blue-green, canary — pick and justify)
     - Post-deploy verification (smoke tests, synthetic monitoring)

  3. **Security gates**: which checks block merge vs which are advisory; how to handle exceptions

  4. **Secrets handling**: where secrets live, how they reach the pipeline, rotation approach

  5. **Branch strategy and environment promotion**: trunk-based vs gitflow, env-per-branch vs shared

  6. **Failure handling**: rollback mechanism, manual approval gates, on-call notification

  7. **Recommended tools** with rationale (e.g., "GitHub Actions over Jenkins because…"). Avoid recommending more than 8 tools — pipeline sprawl is real.

  8. **Cost and runtime estimate**: rough minutes per pipeline run and CI compute cost per month at the team's expected merge volume

  Be specific. "Run unit tests" is not enough — name the test runner, the parallelization strategy, and the failure threshold.
variables:
  - "{{service_name}}"
  - "{{stack}}"
  - "{{deploy_target}}"
  - "{{compliance}}"
  - "{{team_cadence}}"
  - "{{existing_tooling}}"
exampleInput: |
  service_name: ledger-api
  stack: Go 1.22 with PostgreSQL, gRPC + REST gateway
  deploy_target: AWS EKS (us-east-1, us-west-2 active-active), behind ALB + API Gateway
  compliance: SOC 2 Type II, processes financial transactions
  team_cadence: 8 engineers, target 5–10 deploys/week
  existing_tooling: GitHub (org-wide), Datadog, AWS, Terraform Cloud, no Jenkins
exampleOutput: |
  ## Pipeline overview

  ```
  commit → [pre-commit hooks] → PR open
       → [PR validation: lint, unit, SAST] (parallel, ~4 min)
       → review + merge to main
       → [build: container + SBOM + sign] (~3 min)
       → [security scans: Trivy, Snyk, tfsec] (parallel, ~2 min)
       → [integration tests in ephemeral env] (~6 min)
       → [auto-deploy to staging via ArgoCD] (~2 min)
       → [smoke + synthetic checks] (~3 min)
       → [manual approval] → [canary to prod: 5% → 25% → 100%] (~25 min total)
       → [post-deploy verification + Datadog monitor check]
  ```

  Total commit-to-prod for happy path: ~45 minutes including canary bake.

  ## Per-stage detail

  **Pre-commit** (local + GitHub Actions on PR):
  - `gofumpt`, `golangci-lint` (timeout 3m)
  - `gitleaks` for secret scanning — block on any finding
  - `pre-commit` framework for consistency

  **PR validation** (GitHub Actions, required check):
  - `go test ./... -race -count=1` with `gotestsum` for clean output
  - Parallelize by package using matrix strategy; target <5 min p95
  - SAST: `semgrep` with the `r/golang` and `r/security-audit` rulesets
  - Coverage gate: 70% line coverage on changed files (Codecov diff)
  - Block merge on: any test failure, lint error, semgrep HIGH/CRITICAL

  **Build**:
  - Multi-stage Docker build pushed to ECR
  - Generate SBOM with `syft` → SPDX format
  - Sign image with `cosign` keyless via OIDC; signature stored in registry
  - Tag: `{git_sha}-{build_number}` plus `main` for HEAD

  **Security scanning** (advisory + blocking split):
  - Container: `trivy image --severity HIGH,CRITICAL --exit-code 1` — blocking
  - Dependencies: `govulncheck` — blocking on KEV-listed CVEs only, advisory otherwise
  - IaC: `tfsec` and `checkov` on Terraform — blocking on HIGH for prod modules
  - Exceptions: `.trivyignore` requires security-team CODEOWNER approval and 90-day expiry

  **Integration tests**:
  - Ephemeral env per PR via vcluster on the staging EKS cluster
  - Postgres provisioned via testcontainers for tests requiring real DB
  - Run gRPC + REST contract tests with `buf curl`

  **Staging deploy**:
  - ArgoCD watches `staging` branch; image tag bumped via PR from CI
  - Auto-merge if all green; rollback by reverting the image-tag PR

  **Production deploy** (canary, justified):
  - Blue-green is overkill for a stateless API at this scale; rolling has worse blast radius than canary for financial workloads
  - Argo Rollouts with analysis template: error rate, p99 latency, transaction-failure metric from Datadog
  - 5% / 5min → 25% / 10min → 100%, auto-rollback if any analysis step fails
  - Both regions deploy in parallel after staging passes; one region failing aborts the other

  **Post-deploy verification**:
  - Datadog synthetic API tests run from 3 locations
  - Page on-call if any synthetic fails within 15 min of deploy

  ## Security gates: blocking vs advisory

  | Check | Blocking | Rationale |
  |---|---|---|
  | Unit/integration tests | Yes | Non-negotiable |
  | Secret scan | Yes | Cheap, high signal |
  | SAST HIGH/CRITICAL | Yes | Reviewable in PR |
  | Container scan HIGH/CRITICAL | Yes | With .trivyignore escape valve |
  | Dependency CVE | Mixed | KEV-listed only blocks; rest is advisory + JIRA |
  | License scan | Advisory | Quarterly review by Legal |

  ## Secrets

  - GitHub OIDC → AWS IAM role per repo, no long-lived AWS keys in CI
  - Application secrets in AWS Secrets Manager, mounted via External Secrets Operator on EKS
  - Rotate Secrets Manager entries every 90 days; pipeline has no human-readable secrets

  ## Branch strategy

  Trunk-based. Short-lived feature branches (≤2 days). `main` is always deployable. Two long-lived env branches (`staging`, `production`) updated by automation only.

  ## Failure handling

  - Canary auto-rollback on Argo Rollouts analysis failure
  - Manual rollback: revert the image-tag PR; ArgoCD reconciles in <2 min
  - PagerDuty integration on any post-deploy synthetic failure within 15 min window

  ## Recommended tools (8)

  GitHub Actions, ArgoCD, Argo Rollouts, Trivy, Semgrep, cosign + syft, External Secrets Operator, Datadog. Avoid adding Jenkins, ArtifactHub, or a separate vault — current stack covers it.

  ## Cost and runtime

  - ~45 min/run, ~12 runs/day at 5–10 deploys + PR builds = ~6 GHA hours/day
  - At standard runners: ~$120/mo. SOC 2 audit logs add Datadog log ingestion ~$60/mo. Negligible vs. team cost.

  ## SOC 2 notes

  - Maintain immutable build logs (GHA retention + S3 export, 1 year)
  - Cosign signatures + SBOM = artifact provenance for CC8.1
  - Two-person rule for prod via required reviewer on `production` branch protection
tips:
  - "Push back on canary if the team is small and the service is low-risk — the operational tax of analysis templates is real."
  - "If your compliance regime requires segregation of duties, make sure 'merge to main' and 'deploy to prod' aren't the same human decision."
  - "Estimate pipeline runtime early. A 45-minute pipeline at 8 engineers means people batch changes, which makes blast radius worse, not better."
  - "AI assistance is not a replacement for security review by qualified professionals. Have a security engineer review the gating thresholds before treating this as the team's standard."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - dockerfile-review
  - kubernetes-manifest-review
  - deployment-strategy-doc
tags:
  - ci-cd
  - devops
  - pipeline
  - github-actions
  - deployment
---
