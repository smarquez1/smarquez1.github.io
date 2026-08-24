# Mockups

Store approved mockup sources, exports, source notes, and handoffs here. Use `pencil-designer` for design work and `mockup-reviewer` for independent critique.

## Canonical Source Policy

`main` contains only the current canonical mockup for each screen. Git history preserves previous states; do not create permanent versioned copies beside the canonical file.

For a meaningful visual change:

1. Create an issue-specific branch.
2. Edit the existing canonical `.pen` file in place, for example `docs/mockups/personal.pen`.
3. Keep the mockup change and its implementation in the same PR when implementation is in scope.
4. Before review, compare the canonical `.pen`, desktop/mobile exports, handoff, and, when implementation is in scope, the browser output. All applicable artifacts must describe the same approved visual state.
5. Merge the branch only after the mockup, handoff, implementation, and acceptance criteria are approved.
6. If the direction is rejected, discard the branch so `main` remains unchanged.

Use `docs/mockups/explorations/` only when comparing genuine alternatives. Name these files with the issue and direction, for example `issue-123-homepage-hero-b.pen`. They are temporary working files, not canonical sources, and must be removed before merge unless a concrete reason to retain them is documented.

## Workflow

1. Define screen scope in a GitHub Issue.
2. Create or transform the source with the official `@pen.dev/cli` package when the work should be reproducible: `pen --in <input.pen> --out <output.pen> --prompt "..."`.
3. Use the `pen.dev` MCP for interactive inspection and precise canvas edits when needed.
4. Save the open Pencil document (`⌘S`) after MCP edits; CLI writes are persisted to their `--out` path directly.
5. Verify that Git reports the intended canonical `.pen` as modified before renaming, closing, or continuing work.
6. Document the handoff and request independent critique.
7. Obtain human approval.
8. Save approved exports and notes here.
9. Convert approval into issue acceptance criteria before implementation.

Do not use `osascript` or other desktop-automation workarounds for `.pen` files. If a save cannot be performed through the CLI or manually in Pen.app, stop and report the persistence blocker.

## Synchronization Check

Any approved change that alters layout, visible content, responsive structure, theme treatment, or interaction state must update all affected design evidence in the same issue branch:

- The existing canonical `.pen` source.
- Every affected desktop or mobile frame and theme.
- Stable PNG exports used for review.
- Handoff decisions, risks, states, and acceptance criteria.
- Browser implementation, when implementation is in scope.

Copy-only corrections that do not alter layout still require the canonical frame and handoff to use the final verified copy. Implementation-only deviations require explicit human approval and documentation; screenshots of the browser do not replace the editable Pencil source.

## Naming

Canonical source files use stable lowercase snake case names without revision suffixes:

```text
personal.pen
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
