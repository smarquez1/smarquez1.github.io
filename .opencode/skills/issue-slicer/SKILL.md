---
name: issue-slicer
description: Use when converting portfolio docs, mockups, roadmap items, or implementation plans into GitHub Issues with small scope and acceptance criteria.
---

# Issue Slicer

Use this skill when creating or revising GitHub Issues for the portfolio.

## Issue Rules

- Search existing issues before creating a new one.
- Keep each issue reviewable and independently verifiable.
- Separate documentation, mockups, implementation, verification, and deploy work.
- Include acceptance criteria that can be checked without guessing intent.
- Link to relevant docs, mockups, or decisions.
- Do not create implementation issues before the required mockups or content decisions exist.

## Good Issue Shape

```markdown
## Purpose

## Scope

## Acceptance Criteria

## References
```

## Portfolio-Specific Slicing

- Content model comes before visual mockups.
- Mockups come before implementation.
- Semantic structure comes before decorative interaction.
- Accessibility, SEO, performance, and JavaScript-disabled behavior need explicit verification.
- DeepSeek or live AI assistant work stays separate from the MVP.

## Checklist

- [ ] The issue has one clear outcome.
- [ ] Acceptance criteria are concrete.
- [ ] Dependencies are named.
- [ ] It is clear whether the issue changes docs, design, code, deploy, or verification.
- [ ] The issue avoids bundling unrelated work.
