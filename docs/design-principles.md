# Design Principles

Use these criteria to evaluate mockups and implementation. See [ADR 001](decisions/001_bespoke_portfolio_design_system.md) for the design-system decision and [ADR 002](decisions/002_mockup_model_review_workflow.md) for approval workflow.

## Direction

Minimalist technology with personality: precise structure, strong typography, high contrast, quiet motion, and small moments of delight.

## Visual Rules

- Start with black, white, and restrained neutrals; use accents sparingly for state or emphasis.
- Prefer typographic hierarchy over decoration.
- Use motion as feedback, not decoration.
- Make theme behavior intentional rather than an automatic inversion.
- Keep easter eggs discoverable but non-essential.

## Interaction Rules

- Every important interaction works with a keyboard; hover effects have focus equivalents.
- Core content remains reachable without animation or JavaScript.
- Clickable-looking elements must be actionable; use buttons for actions and links for navigation.

## Optional AI and Easter Eggs

AI may disclose process support or offer a verified static interaction, but must not obscure human authorship or require a runtime model in the MVP. Optional details must preserve readability, privacy, accessibility, SEO, and performance.
