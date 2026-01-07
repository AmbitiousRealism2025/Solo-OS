# Solo-OS: Solopreneur Personal Operating System

> **Status**: Phase 1 Complete — Markdown foundation + VitePress viewer ready

---

## What This Is

A markdown-based personal operating system with a read-only UI for solopreneurs. Built on **Ambitious Realism**: Dream big enough to matter, stay honest enough to execute.

**Not**: A SaaS app, startup framework, or productivity theater.  
**Is**: A private, honest mirror for your work.

---

## Quick Start

```bash
npm install
npm run dev      # Dev server at localhost:5173
npm run build    # Production build
npm run preview  # Preview at localhost:4173
```

**Deploy to Cloudflare Pages:**
- Build command: `npm run build`
- Output directory: `solopreneur-os/.vitepress/dist`

---

## What's Built (Phase 1)

### Markdown Vault (`solopreneur-os/`)

| File | Purpose |
|------|---------|
| `index.md` | VitePress homepage |
| `ambitious_realism.md` | Core philosophy |
| `north_star.md` | Singular direction |
| `principles.md` | Operating constraints |
| `reviews/daily/template.md` | 5-min check-in |
| `reviews/weekly/template.md` | 30-60 min review |
| `reviews/monthly/template.md` | 60-120 min review |
| `reviews/annual/template.md` | Half-day reset (Phase 2 content) |
| `tracking/metrics_dictionary.md` | Shared definitions |
| `tracking/tag_index.md` | Canonical tags |

### VitePress Viewer

- Sidebar navigation for all sections
- Local search across all content
- PWA support for offline access
- Dark theme by default

---

## What's Next (Phase 2)

**Frameworks** — 6 strategic worksheets:
- Annual Review (Gustin), Vivid Vision (Herold), Ideal Life Costing (Ferriss)
- Life Map (Lieberman), Leverage Audit, Energy Architecture

**Interviews** — 4 self-interview scripts:
- Past Year Reflection, Identity & Values, Future Self, Honest Capacity Check

**Goals** — 1-year, 3-year, 10-year targets

**Tracking** — Client projects, content log, learning experiments

---

## Project Structure

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT
│   ├── .vitepress/config.ts     ← VitePress + PWA config
│   ├── index.md                 ← Homepage
│   ├── reviews/                 ← Daily, weekly, monthly, annual
│   ├── tracking/                ← Metrics dictionary, tags
│   ├── frameworks/              ← Phase 2
│   ├── interviews/              ← Phase 2
│   └── goals/                   ← Phase 2
├── package.json                 ← Build scripts
├── friction-log.md              ← Phase 4 trigger
├── context/                     ← Planning docs
└── PWA-research/                ← Research archive
```

---

## Philosophy

**Ambitious Realism** = Dream big enough to matter, stay honest enough to execute.

- Not hustle culture (no grinding, crushing it)
- Not self-help theater (no vision boards without plans)
- Not productivity porn (no complex systems for their own sake)
- Not therapy (no "holding space")

Just honest mirrors for your work.

---

## Timeboxes (Sacred)

| Cadence | Time |
|---------|------|
| Daily | ≤5 min |
| Weekly | 30-60 min |
| Monthly | 60-120 min |
| Annual | Half day |

If a review takes longer, cut content. Don't extend time.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Content | Markdown files |
| Viewer | VitePress 1.6 |
| PWA | vite-plugin-pwa |
| Hosting | Cloudflare Pages |

---

## The Only Rule

This is a private system. **Honesty is the only requirement.**
