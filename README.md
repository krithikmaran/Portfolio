# Krithik Maran — Portfolio Website

Personal portfolio website built with React, Vite, and Tailwind CSS, deployed on Vercel with automated CI/CD via GitHub Actions.

---

## 🚀 Tech Stack

- **Frontend Engine**: React 18 + Vite, Tailwind CSS, Lucide Icons, Framer Motion
- **Domain & DNS**: Cloudflare (Domain Registrar & DNS Routing)
- **Hosting & Edge**: Vercel
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
| `VERCEL_TOKEN` | Vercel Personal Access Token (Full Account scope) |
| `VERCEL_ORG_ID` | `team_rFLMXJOgtBCA4OOwJGFOZvOU` |
| `VERCEL_PROJECT_ID` | `prj_hMf26vA77TBwJe3q1Cuew0eMbBoB` |

### How the Pipeline Works
1. **Verification**: Runs `npm ci` and ESLint checks within `vite-project/`.
2. **PR Preview**: Builds and deploys a preview environment for Pull Requests.
3. **Production Deployment**: Automatically triggers on `push` to `main` (and manual `workflow_dispatch`), linking the Vercel project, building the bundle, and deploying live to production.
