# Deployment

The portfolio deploys to GitHub Pages through GitHub Actions. The workflow builds the Vite project, validates the source, uploads the generated `dist/` directory as a Pages artifact, and deploys that artifact.

## Public URL

The expected public URL is [smarquez1.github.io/smarquez1](https://smarquez1.github.io/smarquez1/).

## Workflow

The workflow at `.github/workflows/deploy.yml` runs when `main` changes or when it is manually dispatched.

1. Check out the repository.
2. Install the locked npm dependencies with `npm ci`.
3. Run JavaScript, HTML, and Markdown linting.
4. Build the Vite output into `dist/`.
5. Upload `dist/` as the GitHub Pages artifact.
6. Deploy the artifact through the `github-pages` environment.

## Local Verification

Run `npm run build`, then `npm run preview` to inspect the production output over HTTP. Do not open `dist/index.html` with a `file://` URL; browsers block its CSS and JavaScript assets under that protocol. The complete `dist/` directory is what the Pages workflow deploys.

## Repository Settings

GitHub Pages must use **GitHub Actions** as its build and deployment source. The deployment environment is named `github-pages` and receives the URL emitted by `actions/deploy-pages`.
