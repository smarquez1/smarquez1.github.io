# Sergio Marquez Portfolio

The public portfolio of Sergio Marquez and a frontend quality sample focused on
semantic HTML, accessibility, responsive design, performance, and SEO. Most of
Sergio's production work is private; this site is the public implementation
sample.

## Links

- [Live portfolio](https://smarquez1.github.io/)
- [GitHub profile](https://github.com/smarquez1)
- [LinkedIn](https://www.linkedin.com/in/marquezsd)

## Stack

Vite, Tailwind CSS, Stimulus, semantic HTML5, GitHub Actions, and GitHub Pages.
Quality tooling includes ESLint, Prettier, `html-validate`, `markdownlint-cli2`,
Playwright, axe-core, and Lighthouse CI.

The site is JavaScript-optional and uses no CSS CDN, React, TypeScript, Rails, or
runtime AI model.

## Development

Requires Node.js 22 and npm.

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run lint
npm run format:check
npm run quality:browser
npm run quality:lighthouse
```

Build and preview the production output with `npm run build` and
`npm run preview`.

## Structure

- `index.html`: semantic document shell
- `src/partials/`: page sections composed at build time
- `src/styles.css` and `src/main.js`: styles and progressive enhancement
- `public/`: static assets
- `docs/`: project, design, development, and deployment documentation
- `.github/workflows/`: CI and GitHub Pages deployment

Pushes to `main` deploy `dist/` to GitHub Pages. See
[`docs/development.md`](docs/development.md) and
[`docs/deployment.md`](docs/deployment.md) for details.

The GitHub profile dashboard lives in the separate public repository
[`smarquez1`](https://github.com/smarquez1/smarquez1).
