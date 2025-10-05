# Deploy React (Vite) SPA to Koyeb with Docker

## 1) Build locally (optional check)
```bash
npm install
npm run build
# dist/ será gerado
```

## 2) Coloque estes 2 arquivos na raiz do projeto
- `Dockerfile` (multi-stage)
- `nginx.conf` (fallback para SPA)

## 3) Suba para o GitHub
Crie um repositório e faça commit/push do projeto com o `Dockerfile` e `nginx.conf` na raiz.

## 4) Criar o Service no Koyeb
- **Create App → Add Service**
- Deployment: **GitHub**
- Builder: **Dockerfile**
- Exposed port: **80**
- Region: a mais próxima (ex.: US/EU/ASIA)
- Opcional: habilite **Scale to zero**

Clique **Deploy**.

## 5) Domínio e HTTPS
Em **Domains**, adicione um domínio próprio ou use o domínio *.koyeb.app. TLS é automático.

> Dica: se o build falhar por `postcss.config.js`, renomeie para `postcss.config.cjs` com:
```js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }
```
