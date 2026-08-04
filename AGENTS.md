# Portfolio Agent Instructions

## Non-Negotiable Rules

- Build a public portfolio for Sergio Marquez that is both a career profile and a frontend quality sample.
- Use real, verified career information only. Do not invent employers, titles, dates, metrics, technologies, outcomes, or project details.
- Do not expose private repository names, customer data, internal product names, implementation details, analytics, or secrets.
- Write project documentation and public-facing copy in clear US English.
- Keep the root `README.md` for Sergio's GitHub profile dashboard; put portfolio documentation in `docs/`.
- Create and maintain a GitHub Issue for meaningful work before implementation. The [Portfolio MVP project](https://github.com/users/smarquez1/projects/4) is the source of current scope, status, and delivery order.
- Do not start a screen until its mockup, handoff, and acceptance criteria are approved by a human.
- Do not commit or push unless the user explicitly requests it.

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
