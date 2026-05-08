---
title: "Perform a security review of a code change or feature"
slug: security-review
function: engineering
role: code-review
description: "Systematically assess a feature or code change for security vulnerabilities — covering OWASP Top 10, authentication, authorization, data exposure, and input handling — with severity ratings and concrete fixes."
useCase: "Use this prompt before shipping any feature that handles user input, authentication, authorization, payments, or sensitive data. Security review is most effective before code is merged, not after an incident."
prompt: |
  You are an application security engineer performing a thorough security review. Assess the code or feature described below.

  **What is being reviewed:** {{review_subject}} (feature description or PR summary)
  **Language and framework:** {{language_framework}}
  **Code to review:**
  ```{{language}}
  {{code}}
  ```
  **Where this runs:** {{environment}} (e.g., public-facing web API, internal admin tool, background job, mobile app backend)
  **Who can access it:** {{access_model}} (e.g., authenticated users only, unauthenticated public, admin-only, B2B with tenant isolation)
  **Data it touches:** {{data_description}} (types of data read, written, or transmitted)
  **Authentication / authorization model:** {{auth_model}} (e.g., JWT, session cookies, API keys, RBAC, row-level security)

  Perform a security review using this structure:

  ## Security Review Summary
  Overall security posture: **Approve / Approve with Minor Issues / Request Changes / High Risk — Do Not Ship**

  1–2 sentence summary of the most important finding and the overall risk level.

  ## Critical Vulnerabilities (CVSS 7.0+)
  Vulnerabilities that could lead to significant data breach, authentication bypass, privilege escalation, or system compromise. For each:
  - **Vulnerability:** Name and description
  - **Location:** File / line / function
  - **Attack scenario:** How would an attacker exploit this? (concrete, realistic)
  - **Impact:** What can an attacker do if they exploit this?
  - **Fix:** Specific code or configuration change required
  - **Verification:** How to confirm the fix is correct

  ## High Vulnerabilities (CVSS 4.0–6.9)
  Vulnerabilities with meaningful impact but limited scope or requiring additional conditions. Same format.

  ## Medium / Low Findings
  Issues that reduce security posture but are lower risk. Brief description + fix.

  ## OWASP Top 10 Assessment

  For each relevant OWASP category, note: **Checked ✓** (not present), **Finding** (issue found), or **N/A** (not applicable):

  - A01 Broken Access Control
  - A02 Cryptographic Failures
  - A03 Injection (SQL, NoSQL, OS command, LDAP, etc.)
  - A04 Insecure Design
  - A05 Security Misconfiguration
  - A06 Vulnerable and Outdated Components
  - A07 Identification and Authentication Failures
  - A08 Software and Data Integrity Failures
  - A09 Security Logging and Monitoring Failures
  - A10 Server-Side Request Forgery (SSRF)

  ## Data Handling Assessment
  - Is sensitive data (PII, credentials, tokens) logged anywhere?
  - Is data encrypted in transit and at rest where required?
  - Is the minimum necessary data being collected and stored?
  - Are there any data leakage risks in error messages or API responses?

  ## Hardening Recommendations
  Security improvements that aren't vulnerabilities but would strengthen defenses:
  - Rate limiting
  - Additional input validation
  - Audit logging
  - Security headers
  - Any other defensive measures

  ## Security Test Cases
  Specific test cases that should be written to verify the security properties of this feature:
  ```
  [ ] Test description — what attack it prevents
  ```
variables:
  - "{{review_subject}}"
  - "{{language_framework}}"
  - "{{language}}"
  - "{{code}}"
  - "{{environment}}"
  - "{{access_model}}"
  - "{{data_description}}"
  - "{{auth_model}}"
exampleInput: |
  review_subject: File upload feature — users can upload profile photos and document attachments. Files are stored in S3 and served via a presigned URL.
  language_framework: Node.js / Express 4.18
  language: javascript
  code: |
    const multer = require('multer');
    const AWS = require('aws-sdk');
    const path = require('path');

    const upload = multer({ dest: '/tmp/uploads/' });
    const s3 = new AWS.S3();

    app.post('/api/upload', authenticateJWT, upload.single('file'), async (req, res) => {
      const file = req.file;
      const userId = req.user.id;
      const filename = req.body.filename || file.originalname;

      const key = `uploads/${userId}/${filename}`;

      await s3.upload({
        Bucket: process.env.S3_BUCKET,
        Key: key,
        Body: fs.createReadStream(file.path),
        ContentType: file.mimetype,
      }).promise();

      const url = await s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.S3_BUCKET,
        Key: key,
        Expires: 3600,
      });

      res.json({ url, key });

      fs.unlink(file.path, () => {});
    });

    app.get('/api/files/:key', authenticateJWT, async (req, res) => {
      const url = await s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.S3_BUCKET,
        Key: req.params.key,
        Expires: 60,
      });
      res.redirect(url);
    });
  environment: Public-facing web API, accessible by authenticated users of a B2B SaaS platform
  access_model: Authenticated users (JWT). Multi-tenant — users should only access their own files.
  data_description: User-uploaded files including profile photos and business documents. S3 bucket may contain files from all tenants.
  auth_model: JWT tokens with user_id and tenant_id claims. No RBAC — all authenticated users have same permissions.
exampleOutput: |
  ## Security Review Summary

  **Request Changes — High Risk**

  This upload feature has a critical path traversal vulnerability that allows any authenticated user to overwrite any other user's files (and potentially access them via the `/api/files/:key` endpoint), and has no file type validation allowing malicious file uploads. These must be fixed before shipping.

  ## Critical Vulnerabilities

  **1. Path Traversal via user-controlled filename**
  - **Location:** `/api/upload`, line: `const filename = req.body.filename || file.originalname;`
  - **Attack scenario:** An attacker sends a POST request with `filename=../../admin/config.json`. The S3 key becomes `uploads/user123/../../admin/config.json` which S3 normalizes to `admin/config.json` — overwriting another tenant's file or a sensitive object in the bucket. With `filename=../otherUserId/document.pdf`, they can overwrite any other user's files.
  - **Impact:** Any authenticated user can overwrite any other user's S3 objects (including other tenants). With the `/api/files/:key` endpoint below, they can also read any object in the bucket.
  - **Fix:**
    ```javascript
    // Never use user-provided filenames directly in S3 keys
    const safeFilename = `${Date.now()}-${crypto.randomUUID()}${path.extname(file.originalname)}`;
    const key = `uploads/${req.user.tenant_id}/${req.user.id}/${safeFilename}`;
    ```
  - **Verification:** Attempt to upload with `filename=../../other-tenant/secret.pdf` and confirm the S3 key does not contain `..`.

  **2. Broken Object-Level Authorization on /api/files/:key**
  - **Location:** `GET /api/files/:key`
  - **Attack scenario:** User A uploads a file. User B calls `/api/files/uploads/userA-id/secret.pdf` — they receive a presigned URL for User A's file, bypassing any intended access control.
  - **Impact:** Any authenticated user can access any file in the S3 bucket by guessing or enumerating keys. In a multi-tenant SaaS, this is cross-tenant data leakage.
  - **Fix:**
    ```javascript
    app.get('/api/files/:fileId', authenticateJWT, async (req, res) => {
      // Look up file record in database by fileId
      const file = await db.files.findOne({
        id: req.params.fileId,
        user_id: req.user.id,       // enforce ownership
        tenant_id: req.user.tenant_id
      });
      if (!file) return res.status(404).json({ error: 'File not found' });

      const url = await s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.S3_BUCKET,
        Key: file.s3_key,           // key from DB, never from user input
        Expires: 60,
      });
      res.redirect(url);
    });
    ```

  ## High Vulnerabilities

  **1. No file type validation — malicious file upload**
  - **Issue:** `file.mimetype` is client-provided and not validated. An attacker can upload a `.html` file with a `text/plain` MIME type, or an executable disguised as an image.
  - **Impact:** If any part of the system serves these files with original content types, stored XSS is possible. HTML files served from S3 execute in the context of the S3 domain.
  - **Fix:**
    ```javascript
    const ALLOWED_MIME_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf']);
    const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.pdf']);

    // Check both MIME type AND extension (use file-type library for magic bytes check)
    const ext = path.extname(file.originalname).toLowerCase();
    if (!ALLOWED_MIME_TYPES.has(file.mimetype) || !ALLOWED_EXTENSIONS.has(ext)) {
      return res.status(400).json({ error: 'File type not allowed' });
    }
    ```
    For images, also validate magic bytes using the `file-type` npm package.

  **2. No file size limit configured**
  - **Issue:** `multer({ dest: '/tmp/uploads/' })` has no `limits` configured. Users can upload arbitrarily large files.
  - **Impact:** Disk exhaustion on the server's `/tmp` partition, potential DoS.
  - **Fix:** `multer({ dest: '/tmp/uploads/', limits: { fileSize: 10 * 1024 * 1024 } })` (10MB example)

  ## Medium / Low Findings

  - **`key` returned in API response:** The S3 key is returned to the client. If keys contain predictable patterns, they can be used for enumeration. Use opaque file IDs instead.
  - **ContentType set from client MIME type:** Even after validation, set `ContentType` to the validated type, not the client-provided one.
  - **Temp file cleanup:** `fs.unlink` is called without error handling — temp files may persist if upload fails. Use a try/finally pattern.

  ## OWASP Top 10 Assessment

  - A01 Broken Access Control: **Finding** — BOLA on /api/files/:key; path traversal on upload
  - A02 Cryptographic Failures: **Checked ✓** — presigned URLs are appropriate
  - A03 Injection: **Finding** — path traversal via filename (form of injection)
  - A04 Insecure Design: **Finding** — no file ownership model designed; access control is an afterthought
  - A05 Security Misconfiguration: **Checked ✓** — S3 bucket config not shown but presigned URLs suggest it's not public
  - A06 Vulnerable and Outdated Components: **N/A** — not assessed (check `npm audit`)
  - A07 Identification and Authentication Failures: **Checked ✓** — authenticateJWT present on both endpoints
  - A08 Software and Data Integrity Failures: **N/A**
  - A09 Security Logging and Monitoring Failures: **Finding** — no audit log of file uploads or access
  - A10 SSRF: **N/A** — not applicable here

  ## Data Handling Assessment

  - **Logging:** No PII logging observed — good. Ensure the `key` (which includes user_id) is not logged at INFO level in high-volume environments.
  - **Encryption:** S3 server-side encryption should be enabled at the bucket level — confirm this is configured.
  - **Data minimization:** File metadata (filename, type, size, uploader) should be stored in the database for audit purposes. Currently no audit trail exists.

  ## Hardening Recommendations

  - **Rate limit upload endpoint:** Without limits, authenticated users can flood uploads. Use express-rate-limit: 10 uploads/minute per user.
  - **Add Content-Disposition header:** When serving files, set `Content-Disposition: attachment` for non-image types to prevent browser execution.
  - **Scan for malware:** For document uploads in a B2B context, consider scanning with ClamAV or a cloud service before making files accessible.
  - **Audit log:** Log every upload and access with user_id, tenant_id, filename, size, and timestamp (no file contents).

  ## Security Test Cases

  ```
  [ ] Upload a file with filename=../../other-user-id/malicious.pdf — key should not contain '..'
  [ ] Upload a .html file disguised as image/jpeg — should be rejected
  [ ] Access /api/files/:key with another user's key — should return 404
  [ ] Upload a 100MB file — should be rejected with 413
  [ ] Attempt upload without JWT — should return 401
  [ ] Upload with empty filename — should generate a safe default name
  ```
tips:
  - "Think like an attacker: for every input your code accepts, ask 'what happens if I put something malicious here?' Path traversal, SQL injection, and XSS all start with an attacker controlling an input the developer trusted."
  - "Authorization bugs (who can do what) are more common and often more impactful than authentication bugs (are you who you say you are). Check every data access path."
  - "Multi-tenant systems have a high bar: every query that returns user data must include a tenant_id filter. One missing filter means Tenant A can see Tenant B's data."
  - "Security review is most valuable before code is written (design review) and again before it merges (code review). Retrofitting security is 10x more expensive than designing it in."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - pr-review-checklist
  - debug-error-message
  - write-unit-tests
  - api-integration-plan
tags:
  - security
  - code-review
  - owasp
  - engineering
  - vulnerabilities
---
