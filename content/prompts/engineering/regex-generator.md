---
title: "Generate and explain a regular expression"
slug: regex-generator
function: engineering
role: coding
description: "Write a regex pattern for a specific matching or extraction task, with a full explanation of each component, test cases, and edge case handling."
useCase: "Use this prompt when you need a regex for validation, extraction, or transformation — and want to understand it well enough to maintain it. Regex without explanation is a future maintenance hazard."
prompt: |
  You are an expert in regular expressions and string processing. Write a regex pattern for the task described below.

  **Regex flavor / language:** {{language}} (e.g., Python re, JavaScript, Go regexp, PCRE, PostgreSQL)
  **What to match:** {{match_description}}
  **Examples that SHOULD match:**
  {{should_match}}
  **Examples that should NOT match:**
  {{should_not_match}}
  **How it will be used:** {{usage_context}} (e.g., input validation, extract a value from a log line, find-and-replace in an editor, database column filter)
  **Special requirements:** {{special_requirements}} (e.g., case-insensitive, multiline, must be anchored, performance-sensitive)

  Provide:

  ## The Pattern

  ```
  {{language_regex_block}}
  [your regex here]
  ```

  If the language uses regex flags, specify the recommended flags and why.

  ## Component-by-Component Explanation

  Break the regex into labeled parts. For each part:
  - The pattern fragment
  - What it matches
  - Why it's written this way (not just another way to say the same thing)

  Format: `[fragment]` — explanation

  ## Test Cases

  | Input | Match? | What was captured (if applicable) |
  |-------|--------|----------------------------------|
  [table of all provided examples plus any edge cases you've identified]

  ## Edge Cases and Limitations

  - What patterns does this regex intentionally exclude?
  - What valid-looking inputs might it reject? (false negatives)
  - What invalid inputs might it accept? (false positives)
  - Any performance concerns (catastrophic backtracking, etc.)?

  ## Usage Example

  Show a complete code snippet using this regex in the specified language:

  ```{{language_code}}
  [complete working example]
  ```

  ## Alternative Approaches

  If there's a simpler regex that covers 90% of the cases, or a non-regex approach that's more maintainable, mention it with a trade-off comparison.
variables:
  - "{{language}}"
  - "{{match_description}}"
  - "{{should_match}}"
  - "{{should_not_match}}"
  - "{{usage_context}}"
  - "{{special_requirements}}"
exampleInput: |
  language: Python (re module)
  match_description: A semantic version string in the format MAJOR.MINOR.PATCH with optional pre-release label (e.g., -alpha.1, -beta.2, -rc.1) and optional build metadata (+build.123)
  should_match: |
    1.0.0
    2.14.3
    1.0.0-alpha
    1.0.0-alpha.1
    1.0.0-beta.2
    1.0.0-rc.1
    1.2.3+build.123
    1.0.0-alpha+001
    0.0.1
  should_not_match: |
    1.0
    1.0.0.0
    v1.0.0
    1.0.0-
    1.0.0+
    1.0.0--alpha
    1.0.a
    1.0.0-alpha..1
  usage_context: Validate version strings submitted through an API endpoint and extract the major, minor, patch, pre-release, and build components
  special_requirements: Must be anchored (no partial matches), named capture groups for each component
exampleOutput: |
  ## The Pattern

  ```python
  import re

  SEMVER_PATTERN = re.compile(
      r'^'
      r'(?P<major>0|[1-9]\d*)'     # major version
      r'\.'
      r'(?P<minor>0|[1-9]\d*)'     # minor version
      r'\.'
      r'(?P<patch>0|[1-9]\d*)'     # patch version
      r'(?P<prerelease>-(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?'
      r'(?P<buildmeta>\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?'
      r'$',
      re.ASCII
  )
  ```

  Flags: `re.ASCII` — limits `\d` and `\w` to ASCII characters only, preventing Unicode digits (e.g., `١.٢.٣`) from being accepted as version numbers.

  ## Component-by-Component Explanation

  `^` — Anchor at start of string. Without this, `junk1.0.0` would match at position 4.

  `(?P<major>0|[1-9]\d*)` — Named capture group "major". Matches either `0` exactly, or a non-zero digit followed by any number of digits. The alternation `0|[1-9]\d*` prevents leading zeros (e.g., `01.0.0` is invalid per SemVer spec). `[1-9]\d*` matches 1–9 then any additional digits.

  `\.` — Literal dot. Must be escaped; unescaped `.` matches any character.

  `(?P<minor>0|[1-9]\d*)` and `(?P<patch>0|[1-9]\d*)` — Same pattern as major, applied to minor and patch components.

  `(?P<prerelease>-(?:...)...)?` — Named capture group "prerelease", made optional with `?`. The `-` is the required separator. Inside, `(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)` matches one pre-release identifier: either a numeric identifier without leading zeros, or an alphanumeric identifier. Multiple identifiers are separated by literal dots: `(?:\.(...))* `.

  `(?P<buildmeta>\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?` — Named capture group "buildmeta", optional. Starts with `+`, followed by dot-separated alphanumeric identifiers. Build metadata allows leading zeros (unlike pre-release).

  `$` — Anchor at end of string. Prevents `1.0.0junk` from matching.

  ## Test Cases

  | Input | Match? | Captured groups |
  |-------|--------|-----------------|
  | `1.0.0` | Yes | major=1, minor=0, patch=0, prerelease=None, buildmeta=None |
  | `2.14.3` | Yes | major=2, minor=14, patch=3 |
  | `1.0.0-alpha` | Yes | prerelease=-alpha |
  | `1.0.0-alpha.1` | Yes | prerelease=-alpha.1 |
  | `1.0.0-beta.2` | Yes | prerelease=-beta.2 |
  | `1.2.3+build.123` | Yes | buildmeta=+build.123 |
  | `1.0.0-alpha+001` | Yes | prerelease=-alpha, buildmeta=+001 |
  | `0.0.1` | Yes | major=0, minor=0, patch=1 |
  | `1.0` | No | Missing patch component |
  | `1.0.0.0` | No | Four-part version not matched |
  | `v1.0.0` | No | Leading `v` not allowed |
  | `1.0.0-` | No | Pre-release separator without identifier |
  | `1.0.0+` | No | Build metadata separator without content |
  | `1.0.a` | No | Non-numeric patch |
  | `1.0.0-alpha..1` | No | Double dot in pre-release |
  | `01.0.0` | No | Leading zero in major |

  ## Edge Cases and Limitations

  **Intentional exclusions:**
  - `v1.0.0` — The `v` prefix is common in Git tags but not part of the SemVer spec. Strip it before validation if needed: `version.lstrip('v')`.
  - Leading zeros in numeric identifiers (`01.0.0`) — Forbidden by SemVer spec.
  - Four-part versions (`1.0.0.0`) — Not SemVer.

  **False negatives (valid-looking inputs rejected):**
  - Very long version strings (e.g., 1000-digit major version) — The regex allows them; your application may want an additional length check.

  **False positives:** None known for compliant SemVer strings.

  **Performance:** No catastrophic backtracking risk. The alternation in the pre-release group is bounded, and anchoring both ends prevents runcontrolled backtracking.

  ## Usage Example

  ```python
  import re

  SEMVER_PATTERN = re.compile(
      r'^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)'
      r'(?P<prerelease>-(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?'
      r'(?P<buildmeta>\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$',
      re.ASCII
  )

  def parse_version(version_string: str) -> dict | None:
      """Parse a SemVer string. Returns None if invalid."""
      match = SEMVER_PATTERN.fullmatch(version_string)
      if not match:
          return None
      return {
          "major": int(match.group("major")),
          "minor": int(match.group("minor")),
          "patch": int(match.group("patch")),
          "prerelease": match.group("prerelease"),   # includes leading "-" or None
          "buildmeta": match.group("buildmeta"),     # includes leading "+" or None
      }

  # Examples
  print(parse_version("1.2.3-beta.1+build.42"))
  # {'major': 1, 'minor': 2, 'patch': 3, 'prerelease': '-beta.1', 'buildmeta': '+build.42'}

  print(parse_version("v1.0.0"))  # None — leading v not allowed
  print(parse_version("01.0.0"))  # None — leading zero
  ```

  ## Alternative Approaches

  **Simpler regex (if you don't need spec-strict validation):**
  ```python
  r'^\d+\.\d+\.\d+(-[\w.]+)?(\+[\w.]+)?$'
  ```
  This accepts `01.0.0` and other invalid forms, but is much easier to read and maintain. Appropriate for internal tooling where strict compliance isn't required.

  **Use a library:** The `semver` package (`pip install semver`) handles parsing, comparison, and incrementing with full spec compliance. If you're doing more than simple validation, prefer `semver.parse(version_string)` over a hand-rolled regex.
tips:
  - "Always provide both positive and negative examples — the negative cases are where most regex bugs hide."
  - "Specify the flavor — Python re, JavaScript, and PCRE support different features (lookaheads, named groups, possessive quantifiers). A regex that works in one may not compile in another."
  - "Ask for catastrophic backtracking analysis if the regex will run against untrusted user input — a malicious string can cause ReDoS (regex denial of service) on poorly constructed patterns."
  - "If maintainability matters more than conciseness, ask for a verbose/comment-mode version — Python's re.VERBOSE flag lets you write regex across multiple lines with comments."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - debug-error-message
  - code-explain
  - write-unit-tests
tags:
  - regex
  - string-processing
  - validation
  - engineering
  - coding
---
