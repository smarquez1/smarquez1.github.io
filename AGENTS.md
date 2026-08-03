# Portfolio Project Instructions

## Purpose

Build a public professional portfolio for Sergio Marquez that acts as both a career profile and a frontend quality sample.

The site should communicate real professional experience while demonstrating semantic HTML, accessibility, responsive design, performance, SEO, and careful visual execution.

## Working Model

- Use a document-driven workflow: plan, mock up, document, then implement.
- Create GitHub Issues for meaningful work units before implementation.
- Keep work small, reviewable, and verifiable.
- Do not start coding a screen before its mockups and acceptance criteria exist.
- Treat the site itself as the primary public code sample.

## Product Direction

- Minimalist, technical, and polished.
- Inspired by the precision of Vercel and the editorial energy of Basement Studio, without copying either brand.
- Mobile-first and fully responsive across small and large screens.
- Include light and dark modes.
- Include small easter eggs and AI-themed interactions only when they preserve accessibility and performance.
- Keep JavaScript progressive: the site must remain usable with JavaScript disabled.

## Content Rules

- Write all project documentation, site copy, issue content, comments, and public-facing text in clear US English.
- Use real career information only.
- Do not invent employers, titles, dates, metrics, technologies, outcomes, or project details.
- Do not expose private repository names, customer data, internal product names, implementation details, analytics, or secrets.
- Professional work may be described through sanitized, factual summaries.
- Be transparent that most production work is private and that this site is the public sample.
- Mention AI usage as tooling and process support, not as authorship or decision ownership.

## Technical Principles

- HTML first. JavaScript enhances behavior but must not gate core content.
- Use semantic landmarks and elements: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `ol`, `time`, `details`, and `summary` where appropriate.
- Use accessible names, visible focus states, keyboard navigation, skip links, and strong color contrast.
- Respect `prefers-reduced-motion`.
- Optimize for Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.
- MVP stack: semantic HTML5, Tailwind CSS, modern JavaScript, Stimulus, and Vite.
- Hosting and automation: GitHub Pages for hosting and GitHub Actions for CI and deployment.
- Quality tooling: `html-validate`, `axe-core`, Lighthouse CI, Markdown linting, and link checking where useful.
- Do not add Rails, React, TypeScript, or a runtime AI model to the MVP without a documented reason.
- Use Tailwind CSS with a local build, not the CDN.
- Prefer small vanilla JavaScript and Stimulus controllers for progressive enhancement.
- Do not intentionally obfuscate production code. Keep the public source readable enough to support the portfolio-as-code-sample goal.
- Production source maps are acceptable when they help reviewers inspect the work and do not expose secrets, private paths, or unpublished information.
- Treat a cheap and fast model or any real AI API integration as a nice-to-have behind a secure serverless endpoint, never directly from GitHub Pages.

## Mockup Workflow

- Create image-based mockups before implementation.
- Store approved mockups and source references under `docs/mockups/`.
- Document the prompt, intent, responsive behavior, accessibility expectations, and accepted or rejected design decisions.
- Mockups guide the implementation, but the final site must be built from semantic HTML and maintainable Tailwind.

## Verification

Before finalizing implementation work, verify the relevant scope with:

- HTML validation.
- Keyboard navigation review.
- Accessibility audit, preferably axe.
- Lighthouse or Lighthouse CI.
- Responsive review for mobile and desktop.
- JavaScript-disabled review.
- Build and deploy check for GitHub Pages.
