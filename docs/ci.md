# Continuous Integration

The `Continuous Integration` workflow runs on pull requests and pushes to
`main`. It is separate from the GitHub Pages deployment workflow so a quality
failure cannot be hidden inside deployment setup.

## Checks

The workflow installs the locked dependency set with `npm ci`, then runs:

- Prettier formatting checks.
- ESLint JavaScript checks.
- `html-validate` for the page markup.
- Markdown linting for project documentation.
- The production Vite build.

The deployment workflow repeats the lint and build checks before publishing the
`dist/` artifact. Accessibility, SEO, performance, and JavaScript-disabled
browser checks remain explicit release verification work documented in the
roadmap until those tools are added to the project.
