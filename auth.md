---
layout: single
title: Agent Authentication & Registration
permalink: /auth
---

# Agent Authentication & Registration

## Access policy

All content on **kuyt.org** is publicly readable. No authentication or credentials
are required to read posts, indexes, or discovery endpoints.

## Agent registration

Agents that wish to identify themselves may do so informally by sending a request
with a descriptive `User-Agent` header. No formal registration is required.

If you are building an integration and would like to be listed as a known agent,
open an issue or pull request at
[github.com/nevware/nevware](https://github.com/nevware/nevware).

## Discovery endpoints

| Resource | URL | Format |
|---|---|---|
| API catalog | `/.well-known/api-catalog` | `application/linkset+json` (RFC 9727) |
| LLM index | `/llms.txt` | `text/plain` |
| Full corpus index | `/llms-full.txt` | `text/plain` |
| Post index | `/posts/index.md` | `text/markdown` |

## Protected resource metadata

Machine-readable protected resource metadata is available at
`/.well-known/oauth-protected-resource` (RFC 9728).

## Credential & claim requirements

None. The site does not issue, require, or validate tokens.

## Revocation

Not applicable — no credentials are issued.
