# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Copy project files
COPY package.json package-lock.json* ./
COPY tsconfig.json vite.config.ts postcss.config.* tailwind.config.js ./
COPY index.html ./
COPY public ./public
COPY src ./src

# Install deps and build
RUN npm install
RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine
# SPA fallback (serve index.html for client-side routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Static files
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
