# syntax=docker/dockerfile:1

# Build stage
FROM node:22-alpine AS build
WORKDIR /app

# puppeteer is a devDependency used only by the local prerender script;
# the image build (build:docker) never runs it, so don't download Chromium.
ENV PUPPETEER_SKIP_DOWNLOAD=true

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build:docker

# Serve stage
FROM nginx:1.28-alpine
# Pick up Alpine security fixes newer than the base image (brotli CVE-2026-111497, 28.10.2026).
RUN apk upgrade --no-cache

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-security.conf /etc/nginx/snippets/security.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
