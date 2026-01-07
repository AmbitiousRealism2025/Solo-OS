# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Solo-OS is a **markdown-based personal operating system with a read-only UI layer** for solopreneurs (vibecoding consultants and content creators). 

**MVP Strategy**: Markdown files (source of truth) + VitePress read-only viewer (visualization layer)

**Current Status**: Ready to build. Planning complete, context gathered, 4-phase execution plan finalized.

## Key Philosophy: Ambitious Realism

Dream big enough to matter, stay honest enough to execute. No hustle culture, no therapy speak, no productivity porn.

**The Golden Rule**: Markdown vault works standalone. The UI is a lens, not a requirement.

## Build Process

Use `EXECUTION-PLAN-WITH-CONTEXT.md` as the primary guide. It contains `📚 LOAD CONTEXT` markers indicating when to load each context file.

### Phase Workflow

1. **Phase 1A: Markdown Foundation** - Load `context/phase1/foundation-context.md`
   - Build: Core philosophy files, cadence templates, metrics dictionary
   - Gate: Daily check-in must complete in ≤5 minutes, works in any markdown editor

2. **Phase 1B: Read-Only UI** - Load `context/phase1b/viewer-context.md`
   - Build: VitePress viewer, PWA configuration, Cloudflare deployment
   - Gate: All markdown renders, search works, PWA installs and works offline

3. **Phase 2: Frameworks** - Load `context/phase2/frameworks-context.md`
   - Build: Gustin Annual Review, Ferriss TMI, Vivid Vision, Life Map, Leverage Audit, Energy Architecture, interview scripts
   - Gate: Every framework has explicit outputs section linked to reviews

4. **Phase 3: Integration** - Load `context/phase3/integration-context.md`
   - Build: Memory system (signal→pattern→experiment→decision), cross-references, QA pass
   - Gate: QA checklist passes 100%, one real week of usage

5. **Phase 4: Interactive PWA (CONDITIONAL)** - Load `context/phase4/interactive-pwa-context.md`
   - Trigger: Only if `friction-log.md` has 3+ recurring entries demanding features VitePress cannot provide
   - Build: Next.js migration with Mantine UI, forms, computed dashboards
   - Gate: Markdown remains source of truth

## Target Output Structure

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT (Source of Truth)
│   ├── README.md, principles.md, north_star.md, ambitious_realism.md, memory.md
│   ├── frameworks/              ← 6 framework worksheets
│   ├── interviews/              ← 4 interview scripts
│   ├── reviews/                 ← daily/, weekly/, monthly/, annual/ templates
│   ├── goals/                   ← 1_year.md, 3_year.md, 10_year.md
│   ├── tracking/                ← metrics_dictionary.md, tag_index.md, etc.
│   └── uploads/                 ← past_reviews/, notes/
├── viewer/                      ← VITEPRESS APP (Read-Only UI)
│   ├── .vitepress/config.ts     ← Points srcDir to ../solopreneur-os
│   ├── vite.config.ts           ← PWA configuration
│   └── package.json
├── friction-log.md              ← Phase 4 trigger tracking
├── context/                     ← Planning context (READ-ONLY)
└── PWA-research/                ← Research archive (READ-ONLY)
```

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
- Lock Metrics Dictionary BEFORE writing templates
- Markdown works without viewer (system is portable)

## Context Files (Read-Only Reference)

| File | Contains |
|------|----------|
| `context/phase1/foundation-context.md` | PKM structures, daily check-in design, energy metrics |
| `context/phase1b/viewer-context.md` | VitePress setup, PWA config, deployment guide |
| `context/phase2/frameworks-context.md` | All framework details (Gustin, Ferriss, Herold, Lieberman) |
| `context/phase3/integration-context.md` | Memory system, cross-refs, QA checklist |
| `context/references/sources.md` | Attribution citations |

## Tech Stack

| Component | MVP (Phases 1-3) | Future (Phase 4) |
|-----------|------------------|------------------|
| Content | Markdown files | Markdown files |
| Viewer | VitePress | Next.js 15 |
| PWA | vite-plugin-pwa | Serwist |
| UI Library | Default theme | Mantine |
| Hosting | Cloudflare Pages | Cloudflare Pages |

## Critical Path

```
1. Lock Metrics Dictionary (Phase 1A) → Everything depends on shared definitions
2. Make Daily/Weekly usable (Phase 1A) → If these fail, nothing else matters
3. Ship read-only viewer (Phase 1B) → "Good enough" UI, not perfect
4. Framework outputs explicit (Phase 2) → Reviews must reference concrete things
5. Memory system operational (Phase 3) → Only after outputs are stable
6. [OPTIONAL] Interactive PWA (Phase 4) → Only if friction log triggers
```

## Quality Gates

Before proceeding to next phase:
- Daily Check-In takes ≤5 minutes
- Weekly Review uses only daily captures (no extra digging)
- Every page has: purpose, timebox, outputs, next action, navigation links
- All framework outputs link to where they're used in reviews
- Viewer renders all content correctly (Phase 1B+)
- System works WITHOUT viewer (markdown standalone)

## Friction Log

Track UI pain points in `friction-log.md`. Phase 4 is triggered only when:
- 3+ friction items demand features VitePress cannot provide
- Items are recurring (not one-time annoyances)
- System has been used for 2+ weeks (fair trial)
