---
title: "Review a Dockerfile for security and best practices"
slug: dockerfile-review
function: it-security
role: devops
description: "Audit a Dockerfile for security vulnerabilities, image bloat, layer inefficiency, and production-readiness issues."
useCase: "Use this prompt before merging a new service into your container registry, when adopting a third-party Dockerfile, or as part of a periodic image hygiene sweep. It surfaces both security issues (root user, secrets in layers, unpinned bases) and operational issues (cache invalidation, multi-stage opportunities, missing healthchecks)."
prompt: |
  You are a senior DevOps engineer reviewing a Dockerfile for production deployment. Audit the Dockerfile below against these dimensions:

  1. **Security**: non-root user, base image pinning (digest preferred), unnecessary packages, secrets in layers, ADD vs COPY, CVE exposure of base image
  2. **Image size & layers**: multi-stage build opportunities, layer ordering for cache reuse, cleanup of apt/yum caches, .dockerignore implications
  3. **Reproducibility**: pinned versions (apt, pip, npm), deterministic builds, build-arg hygiene
  4. **Runtime**: HEALTHCHECK presence, signal handling (tini/dumb-init), EXPOSE accuracy, WORKDIR, ENTRYPOINT vs CMD usage
  5. **Compliance**: CIS Docker Benchmark items where relevant (4.1 user, 4.6 healthcheck, 4.7 update instructions, 4.9 COPY over ADD)

  Dockerfile:
  ```
  {{dockerfile}}
  ```

  Service context:
  - Language/runtime: {{runtime}}
  - Deployment target: {{deploy_target}} (e.g., EKS, ECS Fargate, Cloud Run)
  - Threat model notes: {{threat_notes}}

  Output format:
  - **Critical issues** (block merge): each with line reference, problem, exact fix
  - **High** (fix this sprint): same format
  - **Medium / nits**: bulleted
  - **Suggested rewrite**: full Dockerfile with all critical and high fixes applied, comments on key changes

  Be specific. "Use a non-root user" is not enough — give the exact RUN/USER lines and explain why the UID matters for the deploy target.
variables:
  - "{{dockerfile}}"
  - "{{runtime}}"
  - "{{deploy_target}}"
  - "{{threat_notes}}"
exampleInput: |
  dockerfile: |
    FROM node:latest
    WORKDIR /app
    ADD . .
    RUN npm install
    ENV API_KEY=sk-prod-abc123
    EXPOSE 3000
    CMD npm start
  runtime: Node.js 20 / Express API
  deploy_target: EKS (Kubernetes 1.29) with PodSecurity restricted profile
  threat_notes: Public-facing API behind ALB, processes PII, no current image scanning in CI
exampleOutput: |
  ## Critical issues (block merge)

  - **L1 — `node:latest` base image**: unpinned tag means non-reproducible builds and surprise CVEs. Pin to digest: `FROM node:20.11.1-bookworm-slim@sha256:...`. The `slim` variant cuts ~700MB and reduces attack surface.
  - **L5 — hardcoded API key in ENV**: `API_KEY=sk-prod-abc123` is baked into the image layer permanently and visible to anyone with pull access. Remove entirely; inject via Kubernetes Secret mounted as env at runtime. Rotate this key immediately — assume it's leaked.
  - **No USER directive**: container runs as root, which violates the EKS `restricted` PodSecurity profile and the pod will fail to schedule. Add `USER node` (the official node image already provides UID 1000).
  - **L3 — `ADD . .`**: ADD has implicit URL/tarball behavior; use `COPY`. Also missing `.dockerignore` means `node_modules`, `.git`, and `.env` get copied into the image.

  ## High

  - **No multi-stage build**: dev dependencies and source-map tooling ship to prod. Split into `builder` (npm ci + build) and `runner` (npm ci --omit=dev + dist/).
  - **No HEALTHCHECK**: ALB target group can't distinguish "starting" from "broken". Add `HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1`.
  - **Missing init**: Node doesn't reap zombies under PID 1. Add `tini` as ENTRYPOINT or use Kubernetes `shareProcessNamespace`.

  ## Medium / nits

  - Pin npm version with `npm ci` (not `npm install`) and commit `package-lock.json`
  - Add `LABEL org.opencontainers.image.source` for provenance

  ## Suggested rewrite

  ```dockerfile
  # syntax=docker/dockerfile:1.7
  FROM node:20.11.1-bookworm-slim@sha256:abc... AS builder
  WORKDIR /app
  COPY package.json package-lock.json ./
  RUN npm ci
  COPY . .
  RUN npm run build && npm prune --omit=dev

  FROM node:20.11.1-bookworm-slim@sha256:abc... AS runner
  RUN apt-get update && apt-get install -y --no-install-recommends tini curl \
      && rm -rf /var/lib/apt/lists/*
  WORKDIR /app
  COPY --from=builder --chown=node:node /app/dist ./dist
  COPY --from=builder --chown=node:node /app/node_modules ./node_modules
  COPY --from=builder --chown=node:node /app/package.json ./
  USER node
  EXPOSE 3000
  HEALTHCHECK --interval=15s --timeout=3s --start-period=20s \
      CMD curl -f http://localhost:3000/health || exit 1
  ENTRYPOINT ["/usr/bin/tini", "--"]
  CMD ["node", "dist/server.js"]
  ```

  Add a `.dockerignore` with at minimum: `node_modules`, `.git`, `.env*`, `Dockerfile`, `*.md`, `coverage/`.
tips:
  - "Always pin base images by digest (sha256), not tag. Tags move; digests don't."
  - "Pair this prompt with a Trivy or Grype scan output — paste both and ask Claude to correlate Dockerfile findings with the actual CVEs in the resolved image."
  - "For multi-stage builds, ask Claude to estimate the final image size delta. It won't be exact but the relative comparison is usually right."
  - "AI assistance is not a replacement for security review by qualified professionals. Treat output as a first pass; have a human security engineer sign off on production-facing images."
  - "Re-run this review whenever you change base images or add a new system package — the threat surface shifts."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - kubernetes-manifest-review
  - ci-cd-pipeline-design
  - secrets-management-policy
tags:
  - docker
  - container-security
  - devops
  - code-review
  - cis-benchmark
---
