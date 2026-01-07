# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Solo-OS is a **markdown-based personal operating system with a read-only UI layer** for solopreneurs (vibecoding consultants and content creators). 

**MVP Strategy**: Markdown files (source of truth) + VitePress read-only viewer (visualization layer)

**Current Status**: Phases 1-3 complete. System is feature-complete and ready for use.

## Key Philosophy: Ambitious Realism

Dream big enough to matter, stay honest enough to execute. No hustle culture, no therapy speak, no productivity porn.

**The Golden Rule**: Markdown vault works standalone. The UI is a lens, not a requirement.

## Current Project Structure

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT (Source of Truth)
│   ├── .vitepress/config.ts     ← VitePress configuration + PWA
│   ├── index.md                 ← Homepage for VitePress
│   ├── README.md                ← System overview & navigation
│   ├── ambitious_realism.md     ← Philosophy
│   ├── north_star.md            ← Singular direction
│   ├── principles.md            ← Operating constraints
│   ├── memory.md                ← Pattern detection system
│   ├── reviews/
│   │   ├── daily/template.md    ← 5-min check-in
│   │   ├── weekly/template.md   ← 30-60 min review
│   │   ├── monthly/template.md  ← 60-120 min review
│   │   └── annual/template.md   ← Half-day reset
│   ├── frameworks/
│   │   ├── annual_review.md     ← Gustin methodology
│   │   ├── vivid_vision.md      ← Herold 3-year narrative
│   │   ├── ideal_life_costing.md ← Ferriss TMI
│   │   ├── life_map.md          ← Lieberman 6 domains
│   │   ├── leverage_audit.md    ← Kill/Automate/Protect
│   │   └── energy_architecture.md ← Schedule around energy
│   ├── interviews/
│   │   ├── past_year_reflection.md
│   │   ├── identity_and_values.md
│   │   ├── future_self_interview.md
│   │   └── honest_capacity_check.md
│   ├── goals/
│   │   ├── 1_year.md
│   │   ├── 3_year.md
│   │   └── 10_year.md
│   ├── tracking/
│   │   ├── metrics_dictionary.md ← Shared definitions (LOCKED)
│   │   ├── tag_index.md          ← Canonical tags
│   │   ├── client_projects.md    ← Active projects
│   │   ├── content_log.md        ← Published content
│   │   └── learning_experiments.md ← R&D tracker
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
| **2** | ✅ Complete | Frameworks, interviews, goals, tracking files |
| **3** | ✅ Complete | Memory system, cross-references, QA pass |
| **4** | Conditional | Next.js migration (only if friction log triggers) |

## System Contents

### Reviews (4 cadences)
- Daily (≤5 min), Weekly (30-60 min), Monthly (60-120 min), Annual (half day)

### Frameworks (6 worksheets)
- Annual Review (Gustin), Vivid Vision (Herold), Ideal Life Costing (Ferriss)
- Life Map (Lieberman), Leverage Audit, Energy Architecture

### Interviews (4 scripts)
- Past Year Reflection, Identity & Values, Future Self, Honest Capacity Check

### Goals (3 horizons)
- 1-year targets, 3-year strategy, 10-year vision

### Tracking (5 files)
- Metrics Dictionary, Tag Index, Client Projects, Content Log, Learning Experiments

### Memory System
- Signal → Pattern → Experiment → Decision flow

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
- Every framework has explicit "Outputs" section
- Every framework links to reviews that use its outputs

## Context Files (Read-Only Reference)

| File | Contains |
|------|----------|
| `context/phase1/foundation-context.md` | PKM structures, daily check-in design, energy metrics |
| `context/phase1b/viewer-context.md` | VitePress setup, PWA config, deployment guide |
| `context/phase2/frameworks-context.md` | All framework details (Gustin, Ferriss, Herold, Lieberman) |
| `context/phase3/integration-context.md` | Memory system, cross-refs, QA checklist |
| `context/references/sources.md` | Attribution citations |

## Phase 4 Trigger

Phase 4 (Next.js migration) only activates if `friction-log.md` shows:
- 3+ entries about VitePress limitations
- Clear pattern of user friction with current implementation
- Features genuinely impossible in VitePress

Until then, VitePress is sufficient.
