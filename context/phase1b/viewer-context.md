# Phase 1B Context: Read-Only UI (VitePress)

> Context document for building the VitePress read-only viewer.
> Load this context ONLY during Phase 1B implementation.

---

## 1. VitePress Overview

VitePress is a static site generator built on Vite, designed specifically for documentation and markdown-heavy sites. It's the ideal choice for Solo-OS MVP because:

- **Markdown-native**: Zero friction rendering markdown files
- **Fast**: Vite-powered build and hot reload
- **Lightweight**: Small bundle size, fast load times
- **Extensible**: Vue components can be embedded when needed
- **PWA-ready**: Easy integration with `vite-plugin-pwa`

---

## 2. Project Setup

### Initialize VitePress

```bash
# From Solo-OS root directory
mkdir viewer && cd viewer
npm init -y
npm install vitepress vite-plugin-pwa -D
```

### Directory Structure

```
viewer/
├── .vitepress/
│   ├── config.ts          ← Main configuration
│   └── theme/
│       └── index.ts       ← Theme customization (optional)
├── vite.config.ts         ← Vite + PWA configuration
├── package.json
└── dist/                  ← Built output (gitignored)
```

---

## 3. Configuration Files

### .vitepress/config.ts

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // Point to markdown vault
  srcDir: '../solopreneur-os',
  
  // Site metadata
  title: 'Solo-OS',
  description: 'Personal Operating System for Solopreneurs',
  
  // Theme configuration
  themeConfig: {
    // Enable local search
    search: {
      provider: 'local'
    },
    
    // Sidebar navigation
    sidebar: [
      {
        text: 'Foundation',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Principles', link: '/principles' },
          { text: 'North Star', link: '/north_star' },
          { text: 'Ambitious Realism', link: '/ambitious_realism' }
        ]
      },
      {
        text: 'Reviews',
        collapsed: false,
        items: [
          { text: 'Daily Template', link: '/reviews/daily/template' },
          { text: 'Weekly Template', link: '/reviews/weekly/template' },
          { text: 'Monthly Template', link: '/reviews/monthly/template' },
          { text: 'Annual Template', link: '/reviews/annual/template' }
        ]
      },
      {
        text: 'Frameworks',
        collapsed: true,
        items: [
          { text: 'Annual Review', link: '/frameworks/annual_review' },
          { text: 'Vivid Vision', link: '/frameworks/vivid_vision' },
          { text: 'Ideal Life Costing', link: '/frameworks/ideal_life_costing' },
          { text: 'Life Map', link: '/frameworks/life_map' },
          { text: 'Leverage Audit', link: '/frameworks/leverage_audit' },
          { text: 'Energy Architecture', link: '/frameworks/energy_architecture' }
        ]
      },
      {
        text: 'Interviews',
        collapsed: true,
        items: [
          { text: 'Past Year Reflection', link: '/interviews/past_year_reflection' },
          { text: 'Identity & Values', link: '/interviews/identity_and_values' },
          { text: 'Future Self', link: '/interviews/future_self_interview' },
          { text: 'Honest Capacity Check', link: '/interviews/honest_capacity_check' }
        ]
      },
      {
        text: 'Tracking',
        collapsed: true,
        items: [
          { text: 'Metrics Dictionary', link: '/tracking/metrics_dictionary' },
          { text: 'Tag Index', link: '/tracking/tag_index' }
        ]
      },
      {
        text: 'Goals',
        collapsed: true,
        items: [
          { text: '1 Year', link: '/goals/1_year' },
          { text: '3 Year', link: '/goals/3_year' },
          { text: '10 Year', link: '/goals/10_year' }
        ]
      }
    ],
    
    // Social links (optional)
    socialLinks: []
  },
  
  // Build options
  cleanUrls: true,
  
  // Head tags
  head: [
    ['meta', { name: 'theme-color', content: '#1a1a1a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]
  ]
})
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Solo-OS',
        short_name: 'Solo-OS',
        description: 'Personal Operating System for Solopreneurs',
        theme_color: '#1a1a1a',
        background_color: '#1a1a1a',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,md}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      }
    })
  ]
})
```

### package.json

```json
{
  "name": "solo-os-viewer",
  "version": "1.0.0",
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.0.0",
    "vite-plugin-pwa": "^0.17.0"
  }
}
```

---

## 4. Deployment to Cloudflare Pages

### Option A: GitHub Integration (Recommended)

1. Push code to GitHub repository
2. Go to Cloudflare Dashboard → Pages → Create Project
3. Connect GitHub repository
4. Configure build settings:
   - **Build command**: `cd viewer && npm install && npm run build`
   - **Build output directory**: `viewer/.vitepress/dist`
   - **Root directory**: `/`
5. Deploy

### Option B: Direct Deploy (CLI)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
cd viewer && npm run build

# Deploy
wrangler pages deploy .vitepress/dist --project-name=solo-os
```

### Custom Domain (Optional)

1. In Cloudflare Pages project settings → Custom domains
2. Add domain (e.g., `solo-os.yourdomain.com`)
3. Configure DNS as instructed

---

## 5. PWA Features

### Install Prompt

VitePress with vite-plugin-pwa automatically handles:
- Service worker registration
- Offline caching
- Install prompt (browser-native)

### Offline Access

Once installed, the PWA will:
- Cache all pages for offline viewing
- Update automatically when online
- Show offline indicator if configured

### Testing PWA

1. Open Chrome DevTools → Application → Service Workers
2. Check "Offline" to test offline mode
3. Verify pages load from cache

---

## 6. Customization (Optional)

### Custom Theme

Create `.vitepress/theme/index.ts`:

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

### Custom CSS

Create `.vitepress/theme/custom.css`:

```css
:root {
  --vp-c-brand-1: #646cff;
  --vp-c-brand-2: #747bff;
}

/* Ambitious Realism: Clean, calm, direct */
.VPDoc {
  max-width: 800px;
  margin: 0 auto;
}

/* High information density without clutter */
.vp-doc h1 {
  font-size: 2rem;
  font-weight: 600;
}
```

---

## 7. Quality Gates

### Phase 1B is Complete When:

- [ ] All markdown files render correctly
- [ ] Sidebar navigation works for all sections
- [ ] Search finds content across all files
- [ ] PWA installs on desktop (Chrome/Edge)
- [ ] Offline mode shows cached content
- [ ] Deployed to Cloudflare Pages
- [ ] URL is accessible and loads correctly

### Common Issues

| Issue | Solution |
|-------|----------|
| **Sidebar not updating** | Restart dev server after config changes |
| **PWA not installing** | Check HTTPS, valid manifest, service worker |
| **Safari issues** | Note caveat, recommend "Add to Home Screen" |
| **Build fails** | Check srcDir path, ensure markdown files exist |

---

## 8. Safari/iOS Limitations

Be aware of Safari limitations:

1. **7-day storage eviction**: If PWA not used for 7 days, cache is cleared
   - **Mitigation**: Prompt users to install PWA to Home Screen
   
2. **No File System Access API**: Cannot read local folders
   - **Not applicable**: We deploy static site, not reading local files
   
3. **Service Worker limitations**: Some caching behaviors differ
   - **Mitigation**: Test on Safari, document known issues

---

## 9. Next Steps After Phase 1B

1. Initialize `friction-log.md` in project root
2. Use the system daily for 1-2 weeks
3. Record any UI friction points in the log
4. If 3+ recurring items demand features VitePress cannot provide, trigger Phase 4

---

## 10. Reference Links

- [VitePress Documentation](https://vitepress.dev/)
- [vite-plugin-pwa Documentation](https://vite-pwa-org.netlify.app/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
