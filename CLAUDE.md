# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Solo-OS is a **markdown-based personal operating system with a read-only UI layer** for solopreneurs (vibecoding consultants and content creators). 

**MVP Strategy**: Markdown files (source of truth) + VitePress read-only viewer (visualization layer)

**Current Status**: Phase 1A+1B complete. Ready for Phase 2 (Frameworks).

## Key Philosophy: Ambitious Realism

Dream big enough to matter, stay honest enough to execute. No hustle culture, no therapy speak, no productivity porn.

**The Golden Rule**: Markdown vault works standalone. The UI is a lens, not a requirement.

## Current Project Structure

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT (Source of Truth)
│   ├── .vitepress/config.ts     ← VitePress configuration + PWA
│   ├── index.md                 ← Homepage for VitePress
│   ├── README.md                ← System overview (for GitHub/editors)
│   ├── ambitious_realism.md     ← Philosophy
│   ├── north_star.md            ← Singular direction
│   ├── principles.md            ← Operating constraints
│   ├── reviews/
│   │   ├── daily/template.md    ← 5-min check-in
│   │   ├── weekly/template.md   ← 30-60 min review
│   │   ├── monthly/template.md  ← 60-120 min review
│   │   └── annual/template.md   ← Half-day (Phase 2 content)
│   ├── tracking/
│   │   ├── metrics_dictionary.md ← Shared definitions (LOCKED)
│   │   └── tag_index.md          ← Canonical tags
│   ├── frameworks/              ← Phase 2: 6 framework worksheets
│   ├── interviews/              ← Phase 2: 4 interview scripts
│   ├── goals/                   ← Phase 2: 1/3/10 year targets
│   └── uploads/
│       ├── past_reviews/
│       └── notes/
├── package.json                 ← npm scripts: dev, build, preview
├── friction-log.md              ← Phase 4 trigger tracking
├── context/                     ← Planning context (READ-ONLY)
└── PWA-research/                ← Research archive (READ-ONLY)
```

## Build Commands

```bash
npm run dev      # Dev server (hot reload)
npm run build    # Production build → solopreneur-os/.vitepress/dist
npm run preview  # Preview production build
```

## Deployment

**Cloudflare Pages** (via GitHub integration):
- Build command: `npm run build`
- Output directory: `solopreneur-os/.vitepress/dist`

## Phase Status

| Phase | Status | Description |
|-------|--------|-------------|
| **1A** | ✅ Complete | Markdown foundation, templates, metrics dictionary |
| **1B** | ✅ Complete | VitePress viewer with PWA, search, sidebar |
| **2** | 🔜 Next | Frameworks, interviews, goals, tracking files |
| **3** | Pending | Memory system, cross-references, QA pass |
| **4** | Conditional | Next.js migration (only if friction log triggers) |

## Phase 2: What to Build Next

Load `context/phase2/frameworks-context.md` and build:

### Frameworks (6 files)
- `frameworks/annual_review.md` — Gustin: wins/losses/lessons/gratitudes
- `frameworks/vivid_vision.md` — Herold: 3-year present-tense narrative
- `frameworks/ideal_life_costing.md` — Ferriss: TMI calculation
- `frameworks/life_map.md` — Lieberman: 6-domain assessment
- `frameworks/leverage_audit.md` — AI/automation reality check
- `frameworks/energy_architecture.md` — Schedule around energy

### Interviews (4 files)
- `interviews/past_year_reflection.md` — Annual narrative
- `interviews/identity_and_values.md` — Values extraction
- `interviews/future_self_interview.md` — 3-year vision
- `interviews/honest_capacity_check.md` — Quarterly reality check

### Goals (3 files)
- `goals/1_year.md`, `goals/3_year.md`, `goals/10_year.md`

### Tracking (3 files)
- `tracking/client_projects.md`, `tracking/content_log.md`, `tracking/learning_experiments.md`

## Non-Negotiable Constraints

### Timeboxes
- Daily: ≤5 min | Weekly: ≤60 min | Monthly: ≤2 hrs | Annual: ≤half day

### Tone
- Use: Calm, direct, zero bullshit
- Avoid: "crush it", "grind", "10x" (hustle culture)
- Avoid: "holding space", "honoring yourself" (therapy speak)
- Avoid: Complex systems, dashboard fetishism (productivity porn)

### Technical
- Use standard markdown links `[text](path.md)` for portability
- 6-10 standardized fields per template maximum
- No backfilling missed reviews (prevents guilt spirals)
- Every framework must have explicit "Outputs" section
- Every framework must link to reviews that use its outputs

## Context Files (Read-Only Reference)

| File | Contains |
|------|----------|
| `context/phase1/foundation-context.md` | PKM structures, daily check-in design, energy metrics |
| `context/phase1b/viewer-context.md` | VitePress setup, PWA config, deployment guide |
| `context/phase2/frameworks-context.md` | All framework details (Gustin, Ferriss, Herold, Lieberman) |
| `context/phase3/integration-context.md` | Memory system, cross-refs, QA checklist |
| `context/references/sources.md` | Attribution citations |

## Quality Gates

Before proceeding to Phase 3:
- Every framework has explicit outputs section
- Framework outputs link to where they're used in reviews
- Interview scripts end with decisions (stop/start/continue)
- VitePress sidebar updated with new content
- All links work (ignoreDeadLinks is temporary)
