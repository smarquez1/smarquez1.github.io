# Design Principles

Use these principles to evaluate mockups and implementation choices.

The design-system decision is recorded in [ADR 001](decisions/001_bespoke_portfolio_design_system.md).

The mockup review workflow is recorded in [ADR 002](decisions/002_mockup_model_review_workflow.md).

## Direction

Minimalist technology with personality.

The design should combine precise structure, strong typography, high contrast, quiet motion, and small moments of delight.

## Visual Rules

- Start with black, white, and restrained neutrals.
- Use accent color sparingly for state, interaction, or timeline emphasis.
- Prefer typographic hierarchy over decorative elements.
- Use motion as feedback, not decoration.
- Make light and dark modes feel intentional, not inverted afterthoughts.
- Keep easter eggs discoverable but non-essential.

## Interaction Rules

- Every important interaction must work by keyboard.
- Hover effects must have focus equivalents.
- Content hidden behind animation must still be reachable without JavaScript.
- If an element looks clickable, it must be clickable.
- Use buttons for actions and links for navigation.

## AI Tone

AI can appear as a playful interaction or process disclosure, but it must not obscure human authorship.

Good:

- AI as a tool used during planning, review, and iteration.
- A static `Ask Sergio` style interaction based on verified public content.
- A `How this was made` section explaining the document-driven process.

Avoid:

- Claims that AI built or decided the product.
- A live model in the MVP.
- Hidden API keys in frontend code.

## Easter Eggs

Easter eggs should reward curiosity without becoming required UI.

Good candidates:

- A small ASCII `Hire me` note in source code or developer-facing output.
- A tasteful terminal-style detail that appears in agent tools or DevTools.
- Hidden copy that reinforces the professional tone without becoming spammy.

Rules:

- Keep source comments short and intentional.
- Keep production code readable enough for reviewers to inspect.
- Use source maps when they help preserve readability and do not expose private information.
- Do not hide important content only in ASCII art.
- Do not add misleading metadata or keyword stuffing.
- Do not reduce accessibility, SEO, or performance scores for the joke.
- Avoid anything that looks like malware, tracking, or console abuse.
