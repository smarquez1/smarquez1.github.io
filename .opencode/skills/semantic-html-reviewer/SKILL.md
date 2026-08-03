---
name: semantic-html-reviewer
description: Use when reviewing or implementing portfolio HTML, page structure, landmarks, headings, links, buttons, forms, or JavaScript-disabled behavior.
---

# Semantic HTML Reviewer

Use this skill for any HTML structure, page section, component markup, or review of generated markup.

## Review Priorities

- HTML must communicate structure before CSS or JavaScript is considered.
- Core content and navigation must work with JavaScript disabled.
- Use landmarks intentionally: `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`.
- Keep heading order logical and meaningful.
- Use `button` for actions and `a` for navigation.
- Use `ol`, `ul`, `time`, `figure`, `figcaption`, `details`, and `summary` when they express real meaning.
- Avoid `div` and `span` when a semantic element exists.
- Do not hide important information behind hover, animation, or JavaScript-only state.

## Portfolio-Specific Rules

- The career timeline should be an ordered list.
- Timeline dates should use `time` where possible.
- Expandable career details should work with native HTML first, preferably `details` and `summary`.
- The `How this was made` section should be readable as normal document content, not only as an interactive widget.
- Easter eggs must be non-essential and must not alter the document meaning.

## Verification Checklist

- [ ] The page has one clear `main` landmark.
- [ ] Headings form a coherent outline.
- [ ] Keyboard users can reach all interactive elements.
- [ ] Links and buttons are used according to behavior.
- [ ] JavaScript-disabled mode still exposes all core content.
- [ ] Important state or context is not conveyed by visuals alone.
