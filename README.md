# Solo-OS: Solopreneur Personal Operating System

> **Status**: Feature-complete (Phases 1-3) — Ready for use

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

## What's Included

### Foundation
| File | Purpose |
|------|---------|
| `ambitious_realism.md` | Core philosophy |
| `north_star.md` | Singular direction |
| `principles.md` | Operating constraints |
| `memory.md` | Pattern detection system |

### Reviews (4 cadences)
| Cadence | Time | Purpose |
|---------|------|---------|
| Daily | ≤5 min | Energy + needle mover + tomorrow's MIT |
| Weekly | 30-60 min | What shipped + ratio check + adjustments |
| Monthly | 60-120 min | Revenue + trends + course correction |
| Annual | Half day | Full reset + vision refresh |

### Frameworks (6 worksheets)
| Framework | Source | Purpose |
|-----------|--------|---------|
| Annual Review | Dr. Anthony Gustin | Wins/losses/lessons/gratitudes |
| Vivid Vision | Cameron Herold | 3-year present-tense narrative |
| Ideal Life Costing | Tim Ferriss | TMI calculation |
| Life Map | Alex Lieberman | 6-domain assessment |
| Leverage Audit | Original | Kill/Automate/Protect |
| Energy Architecture | Original | Schedule around energy |

### Interviews (4 scripts)
| Interview | Frequency | Output |
|-----------|-----------|--------|
| Past Year Reflection | Annual | Year narrative + lessons |
| Identity & Values | Annual | Core values (3-5) |
| Future Self | Annual | 3-year vision details |
| Honest Capacity Check | Quarterly | Stop/start/continue |

### Goals (3 horizons)
- **1 Year**: Annual targets with quarterly milestones
- **3 Year**: Medium-term strategy
- **10 Year**: Long-term direction

### Tracking (5 files)
- Metrics Dictionary (shared definitions)
- Tag Index (canonical tags)
- Client Projects (active work + revenue)
- Content Log (published content)
- Learning Experiments (R&D with hypothesis)

---

## Project Structure

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT
│   ├── .vitepress/config.ts     ← VitePress + PWA config
│   ├── index.md                 ← Homepage
│   ├── memory.md                ← Pattern detection
│   ├── frameworks/              ← 6 strategic worksheets
│   ├── interviews/              ← 4 self-interview scripts
│   ├── reviews/                 ← Daily, weekly, monthly, annual
│   ├── goals/                   ← 1, 3, 10 year
│   └── tracking/                ← Metrics, projects, content, experiments
├── package.json                 ← Build scripts
├── friction-log.md              ← Phase 4 trigger
└── context/                     ← Planning docs (read-only)
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

## Phase Status

| Phase | Status | Description |
|-------|--------|-------------|
| 1A | ✅ | Markdown foundation |
| 1B | ✅ | VitePress viewer + PWA |
| 2 | ✅ | Frameworks, interviews, goals, tracking |
| 3 | ✅ | Memory system, cross-references |
| 4 | Conditional | Next.js (only if friction log triggers) |

---

## The Only Rule

This is a private system. **Honesty is the only requirement.**
