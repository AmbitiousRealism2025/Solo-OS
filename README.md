# Solo-OS: Solopreneur Personal Operating System

> **Status**: Ready to Build (MVP = Markdown + Read-Only UI)

---

## What This Project Is

A markdown-based personal operating system with a read-only visualization layer for solopreneurs who work as vibecoding consultants and content creators. Built on the philosophy of **Ambitious Realism**: Dream big enough to matter, stay honest enough to execute.

**This is NOT**: A SaaS app, a startup framework, or productivity theater.
**This IS**: A private, single-user, high-trust personal operating system with a beautiful read-only UI.

---

## MVP Strategy

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Source of Truth** | Markdown files | Portable, future-proof, works anywhere |
| **Read-Only UI** | VitePress + PWA | Beautiful viewer, search, offline access |
| **Interactive PWA** | Next.js (future) | Only if friction log demands it |

**The Golden Rule**: Markdown vault works standalone. The UI is a lens, not a requirement.

---

## Current State

### ✅ Completed: Context Gathering & Planning

- Parallel research agents gathered comprehensive context for all frameworks
- PWA research completed (VitePress vs Next.js analysis)
- 4-phase execution plan finalized
- Tech stack decisions made

### 📁 Project Structure

```
Solo-OS/
├── README.md                           ← You are here
├── EXECUTION-PLAN-WITH-CONTEXT.md      ← Master implementation guide (4 phases)
├── friction-log.md                     ← Track UI pain points (Phase 4 trigger)
├── solopreneur-os/                     ← MARKDOWN VAULT (to be created)
│   ├── README.md
│   ├── principles.md
│   ├── reviews/daily/, weekly/, etc.
│   └── ...
├── viewer/                             ← VITEPRESS APP (to be created)
│   ├── .vitepress/config.ts
│   ├── vite.config.ts
│   └── package.json
├── context/                            ← Pre-gathered research (READ-ONLY)
│   ├── phase1/foundation-context.md
│   ├── phase1b/viewer-context.md       ← To be created
│   ├── phase2/frameworks-context.md
│   └── phase3/integration-context.md
└── PWA-research/                       ← Research archive
```

---

## Implementation Process

### For the Next Agent: How to Build This

**CRITICAL**: Use `EXECUTION-PLAN-WITH-CONTEXT.md` as your primary guide. It contains `📚 LOAD CONTEXT` markers indicating exactly when to load each context file.

### Phase-by-Phase Workflow

#### Phase 1A: Markdown Foundation (2-4 hours)
1. **Load**: `context/phase1/foundation-context.md`
2. **Build**:
   - Core philosophy files (README, principles, north_star, ambitious_realism)
   - Cadence templates (daily, weekly, monthly, annual)
   - Metrics dictionary and tag index
3. **Verify**: Daily check-in completes in ≤5 minutes
4. **Gate**: System works in any markdown editor (VSCode, Obsidian)

#### Phase 1B: Read-Only UI MVP (1-4 hours)
1. **Load**: `context/phase1b/viewer-context.md`
2. **Build**:
   - VitePress project in `viewer/` directory
   - Sidebar navigation mirroring markdown structure
   - PWA configuration for offline access
   - Deploy to Cloudflare Pages
3. **Verify**: All markdown renders, search works, PWA installs
4. **Gate**: System still works WITHOUT viewer (markdown standalone)

#### Phase 2: Framework Implementation (1-2 days)
1. **Load**: `context/phase2/frameworks-context.md`
2. **Build**:
   - Core frameworks (Gustin Annual Review, Ferriss TMI, Vivid Vision, Life Map)
   - Solo modules (Leverage Audit, Energy Architecture)
   - Interview scripts (4 files)
   - Tracking files and goals
3. **Verify**: Every framework has explicit outputs section
4. **Gate**: Can trace any framework output → where it's used in reviews

#### Phase 3: Integration & Polish (4-8 hours)
1. **Load**: `context/phase3/integration-context.md`
2. **Build**:
   - Memory system (memory.md)
   - Cross-references between all files
   - QA pass (tone, timeboxes, links)
   - Viewer updates for new content
3. **Verify**: QA checklist passes 100%
4. **Gate**: One real week used with the system

#### Phase 4: Interactive PWA (CONDITIONAL)
> Only proceed if `friction-log.md` has 3+ recurring entries demanding features VitePress cannot provide.

1. **Load**: `context/phase4/interactive-pwa-context.md`
2. **Build**:
   - Next.js migration with Mantine UI
   - Daily check-in form
   - Computed dashboards
3. **Verify**: Friction log items resolved
4. **Gate**: Markdown remains source of truth

---

## Context Files Summary

| File | Contains | Use When |
|------|----------|----------|
| `phase1/foundation-context.md` | PKM folder structures, daily check-in design (6 fields max), weekly review methodology, energy tracking metrics, timebox design, tone guidelines | Building Phase 1A |
| `phase1b/viewer-context.md` | VitePress setup, PWA configuration, Cloudflare deployment, sidebar generation | Building Phase 1B |
| `phase2/frameworks-context.md` | Gustin Annual Review (13 categories, 4 buckets), Ferriss TMI calculation, Vivid Vision (3-year present-tense), Life Map (6 domains + scoring), Energy Architecture, Leverage Audit (Cyborg/Centaur), Interview design principles | Building Phase 2 |
| `phase3/integration-context.md` | Signal→Pattern→Experiment→Decision flow, Progressive Summarization, promotion criteria, cross-referencing best practices, QA checklist | Building Phase 3 |
| `phase4/interactive-pwa-context.md` | Next.js migration, Mantine UI, TinyBase, form handling, write-back patterns | Building Phase 4 (if triggered) |
| `references/sources.md` | All source citations (Gustin, Ferriss, Herold, Lieberman, Mollick, Forte) | When attribution needed |

---

## Key Constraints (Non-Negotiable)

### Timeboxes
- Daily: ≤5 minutes
- Weekly: ≤60 minutes  
- Monthly: ≤2 hours
- Annual: ≤half day

### Tone
- ✅ Calm, direct, zero bullshit
- ❌ No "crush it", "grind", "10x" (hustle culture)
- ❌ No "holding space", "honoring yourself" (therapy speak)
- ❌ No complex systems or dashboard fetishism (productivity porn)

### Technical
- Standard Markdown links `[text](path.md)` for portability
- Optional `[[WikiLinks]]` for Obsidian users
- 6-10 standardized fields per template
- No backfilling missed reviews (prevents guilt spirals)

---

## Target Folder Structure (To Be Built)

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT (Source of Truth)
│   ├── README.md                    
│   ├── principles.md                
│   ├── north_star.md                
│   ├── ambitious_realism.md         
│   ├── memory.md                    
│   ├── frameworks/
│   │   ├── annual_review.md         
│   │   ├── vivid_vision.md          
│   │   ├── ideal_life_costing.md    
│   │   ├── life_map.md              
│   │   ├── leverage_audit.md        
│   │   └── energy_architecture.md   
│   ├── interviews/
│   │   ├── past_year_reflection.md  
│   │   ├── identity_and_values.md   
│   │   ├── future_self_interview.md 
│   │   └── honest_capacity_check.md 
│   ├── reviews/
│   │   ├── daily/template.md
│   │   ├── weekly/template.md
│   │   ├── monthly/template.md
│   │   └── annual/template.md
│   ├── goals/
│   │   ├── 1_year.md
│   │   ├── 3_year.md
│   │   └── 10_year.md
│   ├── tracking/
│   │   ├── metrics_dictionary.md
│   │   ├── tag_index.md
│   │   ├── client_projects.md
│   │   ├── content_log.md
│   │   └── learning_experiments.md
│   └── uploads/
│       ├── past_reviews/
│       └── notes/
├── viewer/                      ← VITEPRESS APP (Read-Only UI)
│   ├── .vitepress/
│   │   └── config.ts            ← Points srcDir to ../solopreneur-os
│   ├── vite.config.ts           ← PWA plugin configuration
│   ├── package.json
│   └── dist/                    ← Built output (deployed to Cloudflare)
└── friction-log.md              ← Phase 4 trigger tracking
```

---

## Framework Sources (Pre-Researched)

| Framework | Creator | Key Output |
|-----------|---------|------------|
| Annual Review | Dr. Anthony Gustin | Wins/losses/lessons/gratitudes, 13 life categories |
| Ideal Lifestyle Costing | Tim Ferriss | TMI calculation, Having/Being/Doing lists |
| Vivid Vision | Cameron Herold | 3-year present-tense narrative |
| Life Map | Alex Lieberman | 6-domain scores + gap analysis |
| Leverage Audit | Original (informed by Ethan Mollick) | Kill/Automate/Protect list |
| Energy Architecture | Original (informed by Cal Newport, Ali Abdaal) | Ideal week energy map |

---

## Next Steps

1. **Start Phase 1A** following `EXECUTION-PLAN-WITH-CONTEXT.md`
2. **Create `solopreneur-os/` folder** and build markdown foundation
3. **Start Phase 1B** to create VitePress viewer
4. **Deploy to Cloudflare Pages** for anywhere access
5. **Create `friction-log.md`** to track UI pain points
6. **Continue to Phase 2 & 3** for frameworks and integration
7. **Trigger Phase 4 only if** friction log demands interactive features

---

## Success Criteria

A solopreneur can:
- [ ] Receive a complete personal operating system with read-only UI
- [ ] Access the system from any device via deployed PWA
- [ ] Begin using it immediately with zero technical knowledge
- [ ] Experience more clarity rather than more overwhelm
- [ ] Have honest mirrors for their work without external accountability theater
- [ ] Track what actually matters: energy, leverage, output, and life balance
- [ ] Use the system even without internet (PWA offline mode)
- [ ] Use the system even without the UI (markdown works in any editor)

---

## Tech Stack Summary

| Component | MVP (Phases 1-3) | Future (Phase 4, if triggered) |
|-----------|------------------|-------------------------------|
| **Content** | Markdown files | Markdown files (still source of truth) |
| **Viewer** | VitePress | Next.js 15 |
| **UI Library** | Default theme | Mantine |
| **PWA** | vite-plugin-pwa | Serwist |
| **Hosting** | Cloudflare Pages | Cloudflare Pages |
| **Data Layer** | File system | TinyBase + IndexedDB |

---

*Context gathered via parallel agents researching official sources, documentation, and best practices from Gustin, Ferriss, Herold, Lieberman, Mollick, Forte, Newport, and Abdaal.*
*MVP strategy informed by VitePress vs Next.js analysis and Progressive Hybrid Architecture research.*
