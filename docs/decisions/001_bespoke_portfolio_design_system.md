# Use a Bespoke Portfolio Design System

- **Status:** Accepted
- **Date:** 2026-08-03

## Decision

Create a small, bespoke design system for the portfolio instead of adopting a complete dashboard-oriented design system as the project foundation.

The system will use Tailwind design tokens and a focused set of portfolio-specific components and patterns. shadcn/ui may be used as structural inspiration, but it will not define the site's visual language or become a required design dependency.

## Context

Pencil provides several design-system starting points, including systems designed for operational dashboards and SaaS applications. Those systems are useful references, but their default patterns emphasize sidebars, metrics, tables, and dense application screens.

This portfolio needs a different direction:

- Minimal and technical.
- Editorial and content-focused.
- Strong typography and spacing.
- Light and dark modes.
- Mobile-first behavior.
- Accessible, semantic, and fast.
- A small number of thoughtful interactions and easter eggs.

## Alternatives Considered

### Adopt a complete dashboard design system

Rejected as the foundation because it would bias the portfolio toward application dashboards and reduce ownership of the visual direction.

### Use shadcn/ui as the visual system

Rejected as the primary visual source. It remains a useful reference for accessible component structure and implementation patterns.

### Build a large component library

Rejected because the portfolio does not need dozens of components. We will build only what the approved screens require.

## Consequences

### Benefits

- The visual language matches the portfolio's editorial purpose.
- The implementation remains lightweight and performance-friendly.
- Design decisions stay visible and reviewable.
- The project demonstrates design judgment instead of only library familiarity.

### Costs

- We must define and maintain our own tokens and component rules.
- Mockups require more intentional review before implementation.
- Some accessibility and responsive behavior must be designed rather than inherited from a kit.

## Initial Scope

- Color tokens for light and dark modes.
- Typography scale and metadata styles.
- Spacing, borders, radii, and motion rules.
- Navigation, links, buttons, timeline entries, tags, theme toggle, contact links, and resume download.
- Mobile-first layout rules.
- Keyboard, contrast, focus, and reduced-motion requirements.
