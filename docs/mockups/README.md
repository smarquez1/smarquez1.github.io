# Mockups

Store approved mockup sources, exports, source notes, and handoffs here. Use `pencil-designer` for design work and `mockup-reviewer` for independent critique.

## Canonical Source Policy

`main` contains only the current canonical mockup for each screen. Git history preserves previous states; do not create permanent versioned copies beside the canonical file.

For a meaningful visual change:

1. Create an issue-specific branch.
2. Edit the existing canonical `.pen` file in place, for example `docs/mockups/home.pen`.
3. Keep the mockup change and its implementation in the same PR when implementation is in scope.
4. Merge the branch only after the mockup, handoff, implementation, and acceptance criteria are approved.
5. If the direction is rejected, discard the branch so `main` remains unchanged.

Use `docs/mockups/explorations/` only when comparing genuine alternatives. Name these files with the issue and direction, for example `issue-123-homepage-hero-b.pen`. They are temporary working files, not canonical sources, and must be removed before merge unless a concrete reason to retain them is documented.

## Workflow

1. Define screen scope in a GitHub Issue.
2. Create desktop and mobile frames with verified content.
3. Document the handoff and request independent critique.
4. Obtain human approval.
5. Save approved exports and notes here.
6. Convert approval into issue acceptance criteria before implementation.

## Naming

Canonical source files use stable lowercase snake case names without revision suffixes:

```text
home.pen
home_desktop.png
home_mobile.png
timeline.pen
timeline_desktop.png
timeline_mobile.png
```

Use Git branches and history for revisions. Do not add `v2`, `final`, or similar permanent suffixes to canonical files.

## Required Notes

- Screen goal and related issue.
- Source tool and prompt.
- Accepted and rejected decisions.
- Accessibility and responsive behavior.
- Interaction states and implementation risks.
- Handoff acceptance criteria.
- Approved implementation deviations, if any.
