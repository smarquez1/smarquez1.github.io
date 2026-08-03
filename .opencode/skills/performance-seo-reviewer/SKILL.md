---
name: performance-seo-reviewer
description: Use when reviewing Lighthouse, SEO metadata, Open Graph, page speed, asset loading, images, GitHub Pages deploys, or performance budgets.
---

# Performance And SEO Reviewer

Use this skill for build setup, asset choices, metadata, deploy verification, and performance reviews.

## Review Priorities

- Keep the MVP fast, static, and dependable on GitHub Pages.
- Prefer simple HTML, compiled CSS, and minimal JavaScript.
- Avoid large client-side frameworks unless a documented requirement justifies them.
- Defer non-critical JavaScript and decorative enhancements.
- Optimize images and avoid shipping mockup assets as production UI.
- Include clear SEO metadata for the portfolio page.

## Portfolio-Specific Rules

- The page should perform well before easter eggs or AI experiments are added.
- The `Ask Sergio` DeepSeek assistant is not part of the MVP and must not block page load.
- GitHub Pages deploys must be verified on the public URL.
- The README profile and site metadata should reinforce the same positioning.

## Metadata Checklist

- [ ] Descriptive `title`.
- [ ] Useful meta description.
- [ ] Canonical URL when the public URL is known.
- [ ] Open Graph title, description, type, and image when assets exist.
- [ ] Meaningful document language.
- [ ] No private information in metadata or structured data.

## Performance Checklist

- [ ] Lighthouse performance is strong on production build.
- [ ] JavaScript is minimal and non-blocking.
- [ ] CSS is built locally and purged or scoped appropriately.
- [ ] Images are optimized and sized correctly.
- [ ] Fonts do not create unnecessary layout shift.
