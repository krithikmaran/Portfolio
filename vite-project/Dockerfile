# Container build of the site (optional local/self-hosted alternative to Cloudflare Pages).
# CI builds this image on every run to keep it working.

# ---- Stage 1: build the static bundle ----
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

# ---- Stage 2: serve it with unprivileged NGINX (listens on 8080, runs as non-root) ----
FROM nginxinc/nginx-unprivileged:1.29-alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
# The base image already defaults to this user; stating it explicitly satisfies Trivy DS-0002.
USER nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
CMD ["nginx", "-g", "daemon off;"]
