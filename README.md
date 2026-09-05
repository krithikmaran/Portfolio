# Krithik Maran — Portfolio Website

Personal portfolio website built with React, Vite, and Tailwind CSS, deployed on Cloudflare Pages with automated CI/CD via GitHub Actions.

---

## 🚀 Tech Stack

- **Frontend Engine**: React 18 + Vite, Tailwind CSS, Lucide Icons, Framer Motion
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
1. **Verification**: Runs `npm ci`, ESLint checks, and Aqua Security Trivy vulnerability scanner.
2. **PR Preview**: Builds with Vite and deploys a preview environment to Cloudflare Pages for Pull Requests.
3. **Production Deployment**: Automatically triggers on `push` to `main` (and manual `workflow_dispatch`), builds the bundle with Vite, and deploys to Cloudflare Pages production (`portfolio` project).
