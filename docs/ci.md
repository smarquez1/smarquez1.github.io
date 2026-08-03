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
- `axe-core` at desktop and mobile viewport sizes.
- A Playwright smoke check with JavaScript disabled at desktop and mobile viewport sizes.
- Lighthouse CI assertions for Performance, Accessibility, Best Practices, and SEO.

The deployment workflow repeats the lint and build checks before publishing the
`dist/` artifact. Accessibility, SEO, performance, and JavaScript-disabled
browser checks are also documented as manual review responsibilities for the
deployed GitHub Pages site.

## Local Commands

Run `npm run build` first, then use `npm run quality:browser` for the axe and
JavaScript-disabled checks. Run `npm run quality:lighthouse` for the Lighthouse
CI audit. Both commands audit the local Vite preview server and fail with the
specific violations or assertions that need attention.

## Release Review Matrix

The automated battery runs on every pull request. Before deployment, review the
deployed site at both viewport sizes as well:

| Check                                | Desktop | Mobile | JavaScript disabled |
| ------------------------------------ | ------- | ------ | ------------------- |
| Main content and navigation          | Yes     | Yes    | Yes                 |
| Keyboard navigation and focus states | Yes     | Yes    | Yes                 |
| Lighthouse categories                | Yes     | Yes    | N/A                 |
| Axe accessibility scan               | Yes     | Yes    | N/A                 |

The automated checks are repeatable regression guards. The manual review is
still required for deployed GitHub Pages behavior, visual responsive quality,
and keyboard interaction details that automated audits cannot fully judge.
