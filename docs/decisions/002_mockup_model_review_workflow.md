# Use Independent Review for Mockup Approval

- **Status:** Accepted
- **Date:** 2026-08-03

## Decision

Use distinct design and critique passes before human approval of a portfolio mockup:

1. A design agent creates the canvas and handoff.
2. An independent review agent critiques visual quality, accessibility, responsive behavior, and implementation feasibility.
3. A human approves the final mockup before implementation begins.

Current tool and model assignments belong in project-local OpenCode agent configuration, not this decision record.

## Context

The portfolio needs a distinctive visual direction while preserving semantic HTML, mobile-first behavior, accessibility, performance, and factual career content. Independent critique challenges initial assumptions before browser implementation locks in a direction.

## Consequences

- A mockup requires an issue, handoff, independent critique, and human approval before implementation.
- The design agent does not modify production code.
- The review agent reports risks but cannot approve, redesign, or broaden scope.
- Model output is never verified career information or the source of product direction.
- Approved source files and exports remain versioned with their notes when appropriate.
