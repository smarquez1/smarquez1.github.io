---
name: accessibility-auditor
description: Use when reviewing accessibility, WCAG behavior, keyboard navigation, focus states, contrast, reduced motion, forms, or axe findings.
---

# Accessibility Auditor

Use this skill before accepting any UI, interaction, animation, theme, form, or navigation change.

## Review Priorities

- Accessibility is a product requirement, not a final polish pass.
- Every interaction must be available by keyboard.
- Focus states must be visible in light and dark mode.
- Text and UI controls must meet WCAG contrast expectations.
- Motion must respect `prefers-reduced-motion`.
- Content must not rely on color, animation, hover, or visual position alone.
- Forms need labels, useful helper text, and accessible error states.

## Portfolio-Specific Rules

- The timeline must be understandable without animation.
- Easter eggs must not trap focus, steal keyboard shortcuts, or hide content.
- Theme toggles must expose state to assistive technology.
- AI-themed interactions must have static fallbacks and clear boundaries.
- Mockups must be rejected if they cannot be implemented accessibly.

## Verification Checklist

- [ ] Keyboard navigation follows a logical order.
- [ ] Skip link exists and works.
- [ ] Focus indicators are visible and not removed.
- [ ] Color contrast is acceptable in both themes.
- [ ] Reduced-motion mode disables or simplifies non-essential motion.
- [ ] axe or equivalent accessibility checks have no serious unresolved findings.
