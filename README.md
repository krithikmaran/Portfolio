# Krithik Maran — Portfolio Website

Personal portfolio website ([krithikmaran.work](https://krithikmaran.work)) built with React, Vite, and Tailwind CSS, deployed on Cloudflare Pages with automated CI/CD via GitHub Actions.

---

## 🚀 Tech Stack

- **Frontend Engine**: React 18 + Vite, Tailwind CSS, Lucide Icons, Framer Motion
- **Testing**: Vitest + Testing Library (`npm test`)
- **Domain & DNS**: Cloudflare (Domain Registrar & DNS Routing)
- **Hosting & Edge**: Cloudflare Pages
- **CI/CD Pipeline & Security**: GitHub Actions (`.github/workflows/deploy.yml`) + Aqua Security Trivy Vulnerability Scanner

---

## 🛠️ Local Development

All frontend source files are inside the `vite-project/` directory:

```bash
# Navigate to the frontend project
cd vite-project

# Install dependencies
npm install

# Start development server
npm run dev

# Run unit tests
npm test

# Run ESLint
npm run lint

# Build for production
npm run build
```

---

## 🔄 CI/CD & Deployment Guide

Automated deployments are managed by GitHub Actions in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Required GitHub Secrets
Under **Repository Settings > Secrets and variables > Actions**:

| Secret Name | Value / Description |
| :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token with Pages Edit permissions |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |

### How the Pipeline Works
1. **Verification**: `npm ci`, ESLint, Vitest unit tests, a Vite build (uploaded as an artifact), and the Aqua Security Trivy vulnerability, secret and misconfiguration scanner.
2. **Docker Build Check**: Builds `vite-project/Dockerfile` and smoke-tests that the container serves the site.
3. **PR Preview**: For pull requests into `main` (from this repo, not forks), deploys the already-built bundle as a Cloudflare Pages preview.
4. **Production Deployment**: On `push` to `main`, or a manual `workflow_dispatch` run **on `main`**, deploys the same bundle to Cloudflare Pages production (`portfolio` project). Manual runs on other branches never deploy to production.

Actions and the Trivy image are pinned to exact commits/digests; Dependabot (`.github/dependabot.yml`) opens weekly PRs to update them and npm packages. Pushes to branches other than `main` don't trigger the pipeline; opening a PR into `main` triggers verification and a preview deploy.

### Site Configuration (`vite-project/public/`)
| File | Purpose |
| :--- | :--- |
| `_headers` | Security headers (CSP, HSTS, frame/sniffing protection) and long-lived caching for hashed `/assets/*` |
| `resume.pdf` | Resume served at a stable URL: `/resume.pdf` |
| `robots.txt`, `sitemap.xml` | Search engine crawling |
| `og-image.png`, `apple-touch-icon.png` | Link preview image and iOS home-screen icon |

Single-page-app routing uses Cloudflare Pages' default behavior (no `404.html`), so no `_redirects` file is needed.
