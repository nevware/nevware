# Skill: Find Post By Topic

Use this skill when asked to locate relevant kuyt.org posts for a theme.

## Inputs
- Topic query (for example: architecture, delivery, AI).
- Optional time range.

## Process
1. Start with `/posts/index.md`.
2. Match candidate posts by title and context.
3. Prefer posts with clear relevance to the requested theme.
4. Return both HTML and markdown URLs when possible.

## Output
- Ranked list of matching posts.
- One-line rationale per match.
