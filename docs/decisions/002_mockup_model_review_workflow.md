# Use Two AI Passes for Mockup Review

- **Status:** Accepted
- **Date:** 2026-08-03

## Decision

Use two model passes for the portfolio mockups through OpenCode and the pen.dev MCP integration:

1. Use GPT-5.6 Luna for the initial design exploration and canvas construction.
2. Use Kimi K3 for an independent second pass focused on critique, consistency, and refinement.

The final design remains a human decision. Neither model is the source of truth for content, accessibility, or product direction.

## Context

The portfolio needs strong visual direction while preserving semantic HTML, mobile-first behavior, accessibility, performance, and a restrained visual language. A second model can challenge the first pass and catch inconsistencies before implementation.

## Review Responsibilities

### GPT-5.6 Luna

- Explore the initial layout and visual direction.
- Create the first `.pen` structure through pen.dev.
- Establish initial typography, color, spacing, and responsive ideas.

### Kimi K3

- Review the first pass independently.
- Identify visual inconsistencies, weak hierarchy, accessibility risks, and mobile issues.
- Suggest focused refinements without expanding the scope unnecessarily.

### Human Review

- Confirm the design matches the portfolio principles.
- Reject invented content or unsupported career claims.
- Validate that the design can become semantic, accessible HTML.
- Approve the final mockup before implementation.

## Constraints

- Do not commit provider API keys or credentials.
- Do not treat model output as verified career information.
- Keep the design useful with JavaScript disabled.
- Preserve the mobile-first requirement.
- Keep approved `.pen` files and exported images versioned with the project when appropriate.
