---
title: "Review a Terraform module for issues and best practices"
slug: terraform-module-review
function: it-security
role: devops
description: "Audit a Terraform module for security misconfigurations, drift risk, naming, state hygiene, and reusability issues."
useCase: "Use this prompt before merging a new Terraform module, when inheriting unfamiliar IaC, or as a periodic review of high-blast-radius modules (VPC, IAM, KMS). It catches both the obvious (open security groups, hardcoded ARNs) and the structural (poor variable defaults, missing outputs, no version pinning)."
prompt: |
  You are a staff infrastructure engineer reviewing a Terraform module. Audit the module below across these dimensions:

  1. **Security**: open ingress, IAM least-privilege, encryption at rest and in transit, public S3, KMS key rotation, default VPC use, secret material in plan output
  2. **State and drift**: hardcoded IDs, count vs for_each, lifecycle blocks, resource naming, tagging consistency
  3. **Module hygiene**: provider version pinning, required_version, variable types and validation, sensible defaults, descriptions, outputs, examples
  4. **Reusability**: env-agnostic, no hardcoded account IDs / regions, conditional resources via for_each or count
  5. **Cost surprises**: unrequested NAT gateways, unbounded autoscaling, premium tier defaults
  6. **Compliance signals**: CIS AWS Benchmark / Azure / GCP CIS items relevant to the resource types

  Module:
  ```hcl
  {{terraform_code}}
  ```

  Cloud: {{cloud}}
  Intended use: {{use_case}}
  Compliance frame: {{compliance}}

  Output:
  - **Critical** (block merge) with file:line, problem, exact fix
  - **High** (fix this sprint)
  - **Medium / nits**
  - **Suggested patch** as a unified diff or rewritten file

  Be precise about variable types and validation blocks. Flag anything that would cause `terraform plan` drift on a re-apply.
variables:
  - "{{terraform_code}}"
  - "{{cloud}}"
  - "{{use_case}}"
  - "{{compliance}}"
exampleInput: |
  terraform_code: |
    resource "aws_s3_bucket" "data" {
      bucket = "company-data-bucket"
      acl    = "public-read"
    }
    resource "aws_security_group" "web" {
      name = "web-sg"
      ingress {
        from_port   = 0
        to_port     = 65535
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
      }
    }
    resource "aws_iam_role_policy" "app" {
      role   = aws_iam_role.app.id
      policy = jsonencode({
        Statement = [{ Effect = "Allow", Action = "*", Resource = "*" }]
      })
    }
  cloud: AWS
  use_case: Backing storage and ingress for a customer-facing analytics dashboard
  compliance: SOC 2, considering ISO 27001 next year
exampleOutput: |
  ## Critical (block merge)

  - **L1–4 — public S3 bucket**: `acl = "public-read"` plus no `aws_s3_bucket_public_access_block` means PII could be exposed. CIS AWS 2.1.5. Fix: remove `acl`, add separate `aws_s3_bucket_public_access_block` with all four flags `true`, plus `aws_s3_bucket_server_side_encryption_configuration` with KMS, plus `aws_s3_bucket_versioning` enabled.
  - **L1 — globally unique bucket name hardcoded**: `company-data-bucket` will collide on re-apply in another account or region. Use a name prefix: `bucket_prefix = "company-data-"` and let Terraform append a suffix. Also consider including the account ID via `data.aws_caller_identity`.
  - **L5–11 — security group 0.0.0.0/0 on all TCP**: catastrophic. CIS AWS 5.2. Restrict to 443 only, source from ALB SG via `source_security_group_id`. If this needs public ingress, it should sit behind an ALB, not be the ALB.
  - **L12–17 — IAM `Action: "*", Resource: "*"`**: full admin to whatever assumes this role. Replace with the minimum action set for the workload. If you don't know it yet, start with read-only and expand.

  ## High

  - No `terraform { required_version, required_providers }` block — providers will float and break consumers.
  - No tags. SOC 2 evidence collection relies on tag-based filtering. Add a `tags` variable with required keys (`Environment`, `Owner`, `DataClassification`) and merge with resource-specific tags.
  - `aws_iam_role.app` is referenced but not defined in the snippet — confirm the role's trust policy is also reviewed.

  ## Medium / nits

  - No outputs. Consumers can't reference the bucket ARN or SG ID.
  - No `lifecycle { prevent_destroy = true }` on the bucket; a typo in `terraform destroy` could nuke prod data.
  - Variable validation missing throughout.

  ## Suggested patch

  ```hcl
  terraform {
    required_version = ">= 1.6.0"
    required_providers {
      aws = { source = "hashicorp/aws", version = "~> 5.40" }
    }
  }

  variable "name_prefix" {
    type = string
    validation {
      condition     = length(var.name_prefix) <= 30 && can(regex("^[a-z0-9-]+$", var.name_prefix))
      error_message = "name_prefix must be lowercase alphanumeric with hyphens, <= 30 chars."
    }
  }

  variable "tags" {
    type = map(string)
    validation {
      condition     = alltrue([for k in ["Environment", "Owner", "DataClassification"] : contains(keys(var.tags), k)])
      error_message = "tags must include Environment, Owner, DataClassification."
    }
  }

  variable "alb_security_group_id" {
    type = string
  }

  resource "aws_kms_key" "data" {
    description             = "KMS key for ${var.name_prefix} data bucket"
    enable_key_rotation     = true
    deletion_window_in_days = 30
    tags                    = var.tags
  }

  resource "aws_s3_bucket" "data" {
    bucket_prefix = "${var.name_prefix}-data-"
    tags          = var.tags

    lifecycle {
      prevent_destroy = true
    }
  }

  resource "aws_s3_bucket_public_access_block" "data" {
    bucket                  = aws_s3_bucket.data.id
    block_public_acls       = true
    block_public_policy     = true
    ignore_public_acls      = true
    restrict_public_buckets = true
  }

  resource "aws_s3_bucket_server_side_encryption_configuration" "data" {
    bucket = aws_s3_bucket.data.id
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = aws_kms_key.data.arn
        sse_algorithm     = "aws:kms"
      }
      bucket_key_enabled = true
    }
  }

  resource "aws_s3_bucket_versioning" "data" {
    bucket = aws_s3_bucket.data.id
    versioning_configuration { status = "Enabled" }
  }

  resource "aws_security_group" "web" {
    name_prefix = "${var.name_prefix}-web-"
    description = "Allows HTTPS from ALB only"
    vpc_id      = var.vpc_id
    tags        = var.tags
  }

  resource "aws_vpc_security_group_ingress_rule" "web_https_from_alb" {
    security_group_id            = aws_security_group.web.id
    referenced_security_group_id = var.alb_security_group_id
    from_port                    = 443
    to_port                      = 443
    ip_protocol                  = "tcp"
  }

  output "bucket_arn" { value = aws_s3_bucket.data.arn }
  output "bucket_id"  { value = aws_s3_bucket.data.id }
  ```

  IAM policy left out of this patch — it requires you to enumerate the actual actions the workload performs. Don't grant `*:*` to unblock the merge.
tips:
  - "Run `tfsec`, `checkov`, and `terraform validate` before this prompt — paste their output as additional context for higher-quality findings."
  - "If the module spans multiple files, paste them concatenated with `# === filename ===` separators rather than asking Claude to imagine the structure."
  - "Ask for the diff against a known-good module template (e.g., terraform-aws-modules/s3-bucket) when refactoring legacy IaC — it's faster than greenfield review."
  - "AI assistance is not a replacement for security review by qualified professionals. Cloud misconfigurations have caused some of the largest breaches on record; have a cloud security engineer sign off on production IAM and network changes."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - dockerfile-review
  - kubernetes-manifest-review
  - secrets-management-policy
tags:
  - terraform
  - iac
  - cloud-security
  - aws
  - code-review
---
