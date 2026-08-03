# Design Principles

Use these principles to evaluate mockups and implementation choices.

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
