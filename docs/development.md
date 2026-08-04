# Frontend Development

The portfolio uses a small Vite foundation with local Tailwind compilation and Stimulus for progressive enhancement.

## Quick Path

1. Run `npm install`.
2. Run `npm run dev` for local development.
3. Run `npm run lint` to check JavaScript, HTML, and Markdown.
4. Run `npm run build` to produce the static `dist/` output.
5. Run `npm run preview` to inspect the production build locally.

## HTML Partials

The document shell lives in `index.html`. Page sections live in
`src/partials/` and use simple `<!-- partial:name -->` markers in the shell.
Vite resolves those markers during development and production builds through a
small local plugin. The browser receives one complete semantic HTML document;
no runtime template loader or JavaScript is required to render the sections.

The HTML lint command builds the site first and validates `dist/index.html`, so
the quality gate checks the composed document that will be deployed.

## Tooling

| Area                         | Tool                                          |
| ---------------------------- | --------------------------------------------- |
| Build and development server | Vite                                          |
| Styling                      | Tailwind CSS compiled through the Vite plugin |
| Progressive enhancement      | Stimulus                                      |
| JavaScript linting           | ESLint flat config                            |
| HTML validation              | `html-validate`                               |
| Markdown linting             | `markdownlint-cli2`                           |
| Formatting checks            | Prettier                                      |

## Source Maps

Vite's default production source-map behavior remains disabled until the public output and deployment workflow are reviewed. This avoids exposing local paths or unpublished source details by accident. If source maps become useful for reviewers, enable them deliberately in `vite.config.js` and verify the generated files before deployment.

## Constraints

- The MVP remains semantic HTML-first and JavaScript-optional.
- Tailwind is compiled locally; the CDN is not used.
- The project does not add Rails, React, TypeScript, or a runtime AI model.
