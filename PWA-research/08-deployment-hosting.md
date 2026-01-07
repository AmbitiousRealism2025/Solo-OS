# PWA Personal Productivity App: Deployment & Hosting Research

This document outlines the hosting, build, and deployment landscape for a solo developer building a PWA in 2026.

## 1. Static Hosting Options

For a PWA, static hosting is usually sufficient as the "app shell" and core assets are static. Backend logic is typically handled via serverless functions or a separate API.

| Provider | Best For | Key Free Tier Limits (2026) |
| :--- | :--- | :--- |
| **Vercel** | Next.js / React / UX | 100GB Bandwidth, 1M Edge/Serverless Invocations, 1 concurrent build. |
| **Cloudflare Pages** | Performance / Scale | **Unlimited Bandwidth**, Unlimited Requests, 500 builds/mo, 1 concurrent build. |
| **Netlify** | DX / Jamstack | 100GB Bandwidth, 300 build minutes/mo, 1 concurrent build. |
| **GitHub Pages** | Purely Static | Free for public repos, 100GB/mo bandwidth limit (soft), no server-side logic. |
| **Self-Hosted** | Control / Privacy | Cost of VPS (~$5-10/mo). Use **Coolify** or **Dokploy** for a PaaS-like experience. |

### Key Nuances:
- **Cloudflare Pages** is currently the leader for "deploy and forget" due to its lack of bandwidth caps on the free tier, making it immune to "surprise bills" from traffic spikes or bot attacks.
- **Vercel** offers the most polished developer experience and "Edge" capabilities but has stricter bandwidth limits.
- **GitHub Pages** lacks modern features like preview deployments and redirect rules (crucial for SPAs/PWAs without hash routing).

---

## 2. Build Considerations

### Static Site Generation (SSG) vs. Server Components
- **SSG:** Ideal for PWAs. The entire site is pre-rendered at build time. This ensures the service worker can precache the entire application shell.
- **Server Components (RSC):** Useful for dynamic data, but for a PWA aiming for "Offline-First," SSG or Client-Side Rendering (CSR) with IndexedDB is preferred.

### Bundle Size Optimization
- **Code Splitting:** Use dynamic `import()` for routes and heavy libraries (e.g., PDF generators, charting).
- **Tree Shaking:** Ensure libraries used are ESM-compliant. Avoid `lodash` (use `lodash-es` or native methods).
- **Image Optimization:** Use modern formats (WebP/AVIF). Vercel/Cloudflare offer automatic image optimization, but check free tier limits.

### Service Worker Generation
- **vite-plugin-pwa:** The standard for Vite-based projects. It abstracts Workbox configuration.
- **Workbox Strategies:**
  - **CacheFirst:** For static assets (JS, CSS, Images).
  - **StaleWhileRevalidate:** For the App Shell and common UI components.
  - **NetworkFirst:** For critical user data that *must* be fresh if a connection exists.

---

## 3. Cost Analysis

### The "Free" Reality
Most solo developers can run a PWA for **$0/month** indefinitely until they reach significant scale (>10k monthly active users).

- **When does it cost money?**
  - **Bandwidth:** Exceeding 100GB (Vercel/Netlify). Cloudflare is safer here.
  - **Build Minutes:** If you push code 50+ times a day.
  - **Serverless Execution:** If your app does heavy background processing.
- **Self-Hosting Costs:**
  - **VPS:** $4.99 - $12.00/mo (Hetzner, DigitalOcean, Akamai).
  - **Maintenance:** Time spent patching Linux, managing Docker, and configuring Nginx.

---

## 4. CI/CD Options

### GitHub Actions
- The default for most. Use it to run tests, linting, and then trigger the deployment.
- **Preview Deployments:** Vercel and Cloudflare Pages automatically create "Preview URLs" for every PR, which is invaluable for testing on mobile devices before merging.

### Testing in CI
- Run **Playwright** or **Cypress** in headless mode during the build process to ensure PWA manifest and service worker registration don't break.

---

## 5. Domain and SSL

- **SSL Requirements:** PWAs **must** be served over HTTPS (except for `localhost`).
- **Standard Practice:** All listed providers (Vercel, CF, Netlify) provide **automated Managed SSL** via Let's Encrypt for free.
- **Custom Domains:** Support is standard. You only pay the registrar fee for the domain (~$10-20/year).

---

## 6. For a Solo Developer: The Recommendation

### The "Simplest Path" (Highly Recommended)
**Cloudflare Pages + vite-plugin-pwa**

1. **Why?** 
   - **Zero Cost:** Unlimited bandwidth means no "bill shock."
   - **Performance:** Assets are served from Cloudflare's global edge.
   - **Simplicity:** Connect your GitHub repo and it "just works."
   - **PWA Friendly:** Handles the `_headers` and `_redirects` files needed for SPA routing and security headers easily.

### The "Pro-Control" Path
**Coolify on a $5 Hetzner VPS**

1. **Why?**
   - If you need a real database (PostgreSQL/Redis) alongside your PWA and want to keep everything in one "box."
   - No "platform lock-in."

### Summary Recommendation:
Start with **Cloudflare Pages**. It offers the highest "set and forget" factor with the least risk of cost scaling for a hobby project.
