# Portfolio Agent Instructions

## Non-Negotiable Rules

- Build a public portfolio for Sergio Marquez that is both a career profile and a frontend quality sample.
- Use real, verified career information only. Do not invent employers, titles, dates, metrics, technologies, outcomes, or project details.
- Do not expose private repository names, customer data, internal product names, implementation details, analytics, or secrets.
- Write project documentation and public-facing copy in clear US English.
- Keep the root `README.md` for Sergio's GitHub profile dashboard; put portfolio documentation in `docs/`.
- Create and maintain a GitHub Issue for meaningful work before implementation. The [Portfolio MVP project](https://github.com/users/smarquez1/projects/4) is the source of current scope, status, and delivery order.
- Do not start a screen until its mockup, handoff, and acceptance criteria are approved by a human.
- Keep `main` limited to the current canonical mockup for each screen. For meaningful visual changes, use an issue-specific branch, edit the canonical mockup in place, and merge the mockup with its implementation when applicable.
- Use `docs/mockups/explorations/` only for genuine alternative exploration. Exploration files are temporary, not sources of truth, and must be removed before merge unless there is a documented reason to retain them.
- Do not commit or push unless the user explicitly requests it.

## Pencil Workflow

- Use the official `@pen.dev/cli` package for reproducible `.pen` creation and modification: `npm install --global @pen.dev/cli@0.3.4`.
- Use `pen --in <input.pen> --out <output.pen> --prompt "..."` for CLI transformations; never overwrite the canonical source until the output has been reviewed.
- Use the `pen.dev` MCP for interactive canvas inspection and precise node edits. MCP edits are not considered persisted until the open document is saved with `⌘S` in Pen.app.
- Do not use `osascript` or other desktop-automation workarounds to save, rename, or manipulate `.pen` files.
- After any MCP save or CLI write, verify the canonical `.pen` path with `git status --short` before renaming, closing, or continuing work.
- Do not rely on stale `pen` or `pencil` shims. If either command fails, reinstall `@pen.dev/cli` and run `mise reshim --force` before editing a design.

## Product Baseline

- Build mobile-first, minimalist, technical, and polished experiences without copying other brands.
- Use semantic HTML first. JavaScript may enhance behavior but must not gate core content or navigation.
- Preserve accessible keyboard behavior, visible focus, sufficient contrast, and `prefers-reduced-motion` support.
- Use the MVP stack: semantic HTML5, Tailwind CSS with a local build, modern JavaScript, Stimulus, Vite, GitHub Pages, and GitHub Actions.
- Do not add Rails, React, TypeScript, a Tailwind CDN, or a runtime AI model without a documented reason and approval.
- Keep public source readable. Any AI feature must preserve accessibility, performance, privacy, and human decision ownership.

## Agent Routing

| Work                        | Agent              | Gate                                                           |
| --------------------------- | ------------------ | -------------------------------------------------------------- |
| Screen design and handoff   | `pencil-designer`  | Issue required; human approval required before implementation. |
| Independent mockup critique | `mockup-reviewer`  | Does not approve or edit designs.                              |
| Approved UI implementation  | `frontend-builder` | Approved mockup, handoff, and acceptance criteria required.    |
| Independent quality audit   | `quality-reviewer` | Reports evidence and defects; does not fix or approve scope.   |

Load the task-specific context through `docs/README.md`; use project skills for specialized review criteria.

## Verification

Before finalizing implementation, verify the changed scope proportionally: build, semantic HTML, keyboard behavior, accessibility, responsive output, JavaScript-disabled behavior, and performance, SEO, or deployment behavior when affected. Use `quality-reviewer` for independent evidence.

When approved hero positioning changes, review the social metadata, alt text, preview image, and `docs/seo/social-preview.md` before completion. Update them together or document why the existing social preview remains intentional.
