# Solopreneur Personal Operating System: 4-Phase Execution Plan
## WITH READ-ONLY UI MVP & PROGRESSIVE DISCLOSURE

> A detailed implementation roadmap for building a markdown-based personal operating system with a read-only visualization layer for vibecoding consultants and content creators.
>
> **MVP STRATEGY**: Markdown files + Read-Only UI from Day 1. Full interactive PWA deferred until friction log demands it.
>
> **CONTEXT OPTIMIZATION**: This plan includes markers (`📚 LOAD CONTEXT`) indicating when to load specific context files to minimize context window usage and prevent hallucination.

---

## Context File Index

| Phase | Context File | Load When |
|-------|--------------|-----------|
| **Phase 1A** | `context/phase1/foundation-context.md` | Starting Phase 1A (Markdown) |
| **Phase 1B** | `context/phase1b/viewer-context.md` | Starting Phase 1B (UI) |
| **Phase 2** | `context/phase2/frameworks-context.md` | Starting Phase 2 |
| **Phase 3** | `context/phase3/integration-context.md` | Starting Phase 3 |
| **Phase 4** | `context/phase4/interactive-pwa-context.md` | Only if friction log triggers |
| **All Phases** | `context/references/sources.md` | When attribution needed |

---

## Executive Summary

This plan transforms the Solopreneur OS specification into a buildable system across four phases:

| Phase | Focus | Duration | Deliverables |
|-------|-------|----------|--------------|
| **Phase 1A** | Markdown Foundation | 2-4 hours | Core structure, philosophy, cadence templates |
| **Phase 1B** | Read-Only UI (MVP) | 1-4 hours | VitePress viewer with search + PWA offline |
| **Phase 2** | Framework Implementation | 1-2 days | All frameworks, modules, interview scripts |
| **Phase 3** | Integration & Polish | 4-8 hours | Memory system, cross-references, QA |
| **Phase 4** | Interactive PWA | TBD | Only if friction log demands (Next.js migration) |

**Critical Success Factor**: Build cadence-first. The daily/weekly loops must work before adding complexity.

**MVP Definition**: Markdown files remain the source of truth. The UI is a "lens" for viewing—not required for daily use.

---

## MVP Technology Decision: VitePress

### Why VitePress Over Next.js for MVP

| Factor | VitePress | Next.js |
|--------|-----------|---------|
| **Time to Ship** | 1-4 hours | 1-2 days |
| **Complexity** | Low (markdown-native) | High (build pipeline) |
| **Markdown Rendering** | Built-in, excellent | Manual setup required |
| **PWA Support** | `vite-plugin-pwa` | `@serwist/next` |
| **When to Use** | Read-only viewing | Interactive features needed |

**Strategic Rationale**: Your durable asset is the markdown vault, not the viewer. VitePress is thin glue you can abandon without losing anything. If interactive features become necessary, migrate to Next.js—you'll migrate *content* (markdown), not *code*.

### Escalation Trigger to Phase 4 (Next.js)

Move to Next.js when **3+ friction log entries** demand features VitePress cannot provide:
- Guided workflows (forms, validation, step-by-step wizards)
- Computed views that prove genuinely valuable
- Write-back to markdown from UI
- Real-time metrics aggregation

### MVP Tech Stack

```
Viewer:        VitePress 1.x
PWA Layer:     vite-plugin-pwa
Styling:       Default VitePress theme + custom CSS
Search:        VitePress local search (built-in)
Hosting:       Cloudflare Pages (free, unlimited bandwidth)
```

---

## Pre-Implementation Decisions (Resolve Before Starting)

### Technical Decisions
| Decision | Recommendation | Rationale |
|----------|----------------|-----------|
| **Linking Convention** | Standard Markdown `[text](path.md)` | Maximum portability across tools |
| **Wiki Links** | Optional `[[WikiLinks]]` support | For Obsidian users, but not required |
| **Daily Dataset** | 6-10 standardized fields | Enables pattern detection in Phase 3 |
| **Skip Rules** | No backfilling missed reviews | Prevents guilt spirals; always start current |
| **UI Framework** | VitePress (MVP) → Next.js (if needed) | Fastest time-to-value; migrate only if friction demands |
| **Folder Separation** | `solopreneur-os/` + `viewer/` | Markdown vault is portable; viewer is disposable |

### Philosophical Constraints (Non-Negotiable)
- **Timeboxed Everything**: Every template has a hard time limit
- **Output-Oriented**: Every prompt ends with a decision or artifact
- **Zero Bullshit Tone**: No hustle culture, no therapy speak, no productivity porn
- **Solo Reality**: Full autonomy = full responsibility; no team to blame or delegate to
- **Markdown is Source of Truth**: UI is a lens, not a requirement; system works without viewer
- **Read-Only First**: No write-back UI until friction log proves it necessary

---

## Phase 1A: Markdown Foundation

> 📚 **LOAD CONTEXT**: `context/phase1/foundation-context.md`
> Contains: PKM folder structures, daily check-in design, weekly review methodology, energy tracking metrics, timebox design principles, tone guidelines

### Objectives
1. Establish the operating system philosophy and navigation
2. Create usable daily/weekly cadence templates immediately
3. Define shared vocabulary (metrics, tags) that all future content will use
4. Make the system functional from Day 1 (markdown works standalone)

### Success Criteria
- [ ] Complete a real Daily Check-In in ≤5 minutes
- [ ] Complete a Weekly Review using only daily captures (no extra digging)
- [ ] Every page has: purpose, timebox, outputs, next action, and navigation links
- [ ] Metrics Dictionary locked and referenced by all templates
- [ ] System usable in any markdown editor (VSCode, Obsidian, etc.)

---

### Phase 1A Deliverables

#### 1A.1 Core Navigation & Philosophy Files

> 📚 **CONTEXT REF**: See "Tone Guidelines" section in `context/phase1/foundation-context.md`

| File | Purpose | Timebox to Create |
|------|---------|-------------------|
| `README.md` | System overview, quick start (10 min onboarding) | 30 min |
| `principles.md` | Core operating principles and constraints | 20 min |
| `north_star.md` | The singular direction guiding all decisions | 15 min |
| `ambitious_realism.md` | Philosophy explained: dream big, stay honest | 20 min |

**README.md Must Include:**
- How to use daily (5 min), weekly (30 min), monthly (2 hr), annually (half day)
- How to personalize in under 15 minutes
- Ambitious Realism philosophy in plain language
- How to upload past documents and generate pattern summaries
- Statement: "This is a private system. Honesty is the only rule."

#### 1A.2 Cadence Templates (Minimum Viable)

> 📚 **CONTEXT REF**: See "Daily Check-In Design" and "Weekly Review Methodology" in `context/phase1/foundation-context.md`

| File | Timebox | Key Fields |
|------|---------|------------|
| `reviews/daily/template.md` | 5 min | Energy (1-10), energy type, needle mover, fake work, mode check, let go, tomorrow's MIT |
| `reviews/weekly/template.md` | 30-60 min | Shipped items, client/creator ratio, time leaks, energy debt, one insight, one adjustment |
| `reviews/monthly/template.md` | 60-120 min | Revenue check, goal progress, leverage audit, content performance, energy patterns, course correction |
| `reviews/annual/template.md` | Half day | Placeholder shell (Phase 2 fills with framework content) |

**Daily Check-In Fields (Locked)**:
```markdown
## Daily Check-In - {{date}}

**Energy**: _/10
**Energy Type**: [ ] Creative [ ] Administrative [ ] Depleted
**Mode**: [ ] Client [ ] Creator [ ] Recovery — Is this right for today? 

### What moved the real needle today?
> 

### What felt like work but wasn't valuable?
> 

### One thing to let go of:
> 

### Tomorrow's single most important thing:
> 
```

**Weekly Review Fields (Locked)**:
```markdown
## Weekly Review - Week of {{date}}

### What Actually Shipped
- Code: 
- Content: 
- Client deliverables: 

### Client vs Creator Hours
- Client: ___ hrs
- Personal building: ___ hrs
- Ratio: ___:___
- Is this right? [ ] Yes [ ] No — Adjustment:

### Time Leaks (be honest)
> 

### Energy Debt Check
Am I borrowing from future weeks? [ ] Yes [ ] No
If yes, what needs to change?

### One insight about how I work best:
> 

### One adjustment for next week:
> 
```

#### 1A.3 Shared Vocabulary Files

> 📚 **CONTEXT REF**: See "Energy Tracking Metrics" section in `context/phase1/foundation-context.md`

| File | Purpose |
|------|---------|
| `tracking/metrics_dictionary.md` | Definitions: energy levels, focus types, client/creator, learning hours, revenue categories |
| `tracking/tag_index.md` | Canonical tags: `#signal`, `#pattern`, `#experiment`, `#decision` (keep minimal) |

**Metrics Dictionary Must Define:**
- **Energy Levels**: 1-3 (depleted), 4-6 (functional), 7-10 (peak)
- **Energy Types**: Creative (deep work), Administrative (email/logistics), Recovery (deliberately off)
- **Mode Types**: Client (paid work), Creator (content/products), Recovery (rest)
- **Revenue Types**: Active (requires presence), Ambient (runs without you)
- **Learning Types**: R&D (productive exploration), Procrastination (shiny object syndrome)

---

### Phase 1A Folder Structure

```
solopreneur-os/
├── README.md                    ← System overview + quick start
├── principles.md                ← Operating constraints
├── north_star.md                ← Singular guiding direction
├── ambitious_realism.md         ← Philosophy explained
├── reviews/
│   ├── daily/
│   │   └── template.md          ← 5-min check-in
│   ├── weekly/
│   │   └── template.md          ← 30-60 min review
│   ├── monthly/
│   │   └── template.md          ← 2-hr review
│   └── annual/
│       └── template.md          ← Placeholder for Phase 2
├── tracking/
│   ├── metrics_dictionary.md    ← Shared definitions
│   └── tag_index.md             ← Canonical tags
└── uploads/
    ├── past_reviews/            ← For ingesting history
    └── notes/                   ← Raw captures
```

---

### Phase 1A Risk Mitigation

> 📚 **CONTEXT REF**: See "Common Pitfalls" section in `context/phase1/foundation-context.md`

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Over-design** | Abandonment from complexity | Enforce timeboxes; "minimum viable answers" only |
| **Inconsistent fields** | Memory system breaks in Phase 3 | Lock Metrics Dictionary BEFORE writing templates |
| **Too many prompts** | Daily check-in takes 20 min instead of 5 | Hard cap: 6 fields maximum for daily |

---

### Phase 1A Quality Gate

**STOP before Phase 1B if:**
- Daily Check-In takes more than 5 minutes
- Weekly Review feels like homework
- You can't complete Weekly Review using only daily captures

**Action**: Cut prompts ruthlessly before proceeding.

---

## Phase 1B: Read-Only UI (MVP)

> 📚 **LOAD CONTEXT**: `context/phase1b/viewer-context.md`
> Contains: VitePress setup, PWA configuration, folder structure, deployment guide

### Objectives
1. Create a beautiful read-only viewer for the markdown vault
2. Enable full-text search across all content
3. Make the system installable as a PWA (offline access)
4. Deploy to Cloudflare Pages for anywhere access

### Success Criteria
- [ ] All markdown files render correctly with proper navigation
- [ ] Search finds content across daily/weekly/framework files
- [ ] PWA installs to desktop/mobile and works offline
- [ ] Deployed and accessible via URL
- [ ] System still works WITHOUT the viewer (markdown standalone)

---

### Phase 1B Deliverables

#### 1B.1 VitePress Project Setup

| Task | Output | Timebox |
|------|--------|---------|
| Initialize VitePress | `viewer/` directory with config | 15 min |
| Configure sidebar | Auto-generated from `solopreneur-os/` structure | 30 min |
| Add PWA plugin | Offline caching, install prompt | 30 min |
| Custom landing page | Links to Daily, Weekly, Metrics Dictionary | 30 min |

**VitePress Config Structure:**
```javascript
// viewer/.vitepress/config.ts
export default {
  title: 'Solo-OS',
  description: 'Personal Operating System',
  srcDir: '../solopreneur-os',  // Points to markdown vault
  themeConfig: {
    search: { provider: 'local' },
    sidebar: generateSidebar()  // Auto-generate from folders
  }
}
```

#### 1B.2 PWA Configuration

```javascript
// viewer/vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Solo-OS',
        short_name: 'Solo-OS',
        theme_color: '#1a1a1a',
        display: 'standalone'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,md}']
      }
    })
  ]
}
```

#### 1B.3 Deployment

| Platform | Command | URL Pattern |
|----------|---------|-------------|
| **Cloudflare Pages** | `npx wrangler pages deploy dist` | `solo-os.pages.dev` |
| **Vercel** (alt) | `vercel --prod` | `solo-os.vercel.app` |

**Cloudflare Setup (Recommended):**
1. Create Cloudflare account (free)
2. Connect GitHub repo OR manual deploy
3. Build command: `npm run build`
4. Output directory: `viewer/dist`

---

### Phase 1B Folder Structure (Complete)

```
Solo-OS/
├── solopreneur-os/              ← Markdown vault (PORTABLE, SOURCE OF TRUTH)
│   ├── README.md
│   ├── principles.md
│   ├── north_star.md
│   ├── ambitious_realism.md
│   ├── reviews/
│   ├── tracking/
│   └── uploads/
├── viewer/                      ← VitePress app (DISPOSABLE)
│   ├── .vitepress/
│   │   └── config.ts
│   ├── vite.config.ts
│   ├── package.json
│   └── dist/                    ← Built output (gitignored)
├── context/                     ← Planning context (READ-ONLY)
├── PWA-research/                ← Research docs (READ-ONLY)
└── friction-log.md              ← Track UI pain points for Phase 4 decision
```

---

### Phase 1B Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Scope creep** | "Just UX" becomes a product | Read-only policy; no write-back UI |
| **Viewer becomes required** | Defeats markdown portability | Always test: "Can I use this in VSCode only?" |
| **Safari limitations** | 7-day storage eviction | Note caveat; prompt iOS users to install PWA |
| **Build tool complexity** | Blocks daily use | Viewer is optional; markdown works anywhere |

---

### Phase 1B Quality Gate

**STOP before Phase 2 if:**
- Viewer doesn't render all markdown correctly
- Search doesn't find expected content
- PWA doesn't install or work offline
- You're spending more time on UI than using the system

**Action**: Ship "good enough" viewer. Perfect is the enemy of done.

---

## Phase 2: Framework Implementation

> 📚 **LOAD CONTEXT**: `context/phase2/frameworks-context.md`
> Contains: Gustin Annual Review (13 categories, 4 buckets), Ferriss TMI calculation, Vivid Vision methodology, Life Map 6 domains, Energy Architecture, Leverage Audit (Cyborg/Centaur), Interview design principles

### Objectives
1. Implement each named framework as a practical worksheet with concrete outputs
2. Add solo-specific modules as decision tools (not essays)
3. Write interview scripts that force honesty and end in decisions
4. Ensure every framework feeds into the review cadence

### Success Criteria
- [ ] Every framework ends with 3-10 concrete outputs (lists, constraints, targets, decisions)
- [ ] Every framework links to where outputs get used (weekly/monthly/annual reviews)
- [ ] Interview scripts end with commitments: stop / start / continue / decide
- [ ] Annual Review template fully references all framework outputs

---

### Phase 2 Deliverables

#### 2.1 Core Frameworks (External Sources)

> 📚 **CONTEXT REF**: See sections 1-4 in `context/phase2/frameworks-context.md` for complete framework details
> 📚 **ATTRIBUTION REF**: See `context/references/sources.md` for source citations

| File | Source | Key Outputs |
|------|--------|-------------|
| `frameworks/annual_review.md` | Dr. Anthony Gustin | Wins, losses, lessons, gratitudes, 3-5 themes |
| `frameworks/vivid_vision.md` | Tony Robbins/Cameron Herold | 3-year present-tense narrative (3-4 pages) |
| `frameworks/ideal_life_costing.md` | Tim Ferriss | TMI calculation, Having/Being/Doing lists |
| `frameworks/life_map.md` | Alex Lieberman | 6-domain scores + gap analysis |

**Framework Template Structure:**
```markdown
# [Framework Name]

**Source**: [Credit]
**Time Investment**: [X hours annually]
**Used In**: [Link to reviews that reference this]

## Philosophy
> One paragraph on core principle

## Process
1. Step one...
2. Step two...

## Prompts
- Question 1?
- Question 2?

## Outputs (Complete These)
- [ ] Output 1: ___
- [ ] Output 2: ___
- [ ] Output 3: ___

## Integration
These outputs feed into: [Weekly Review](../reviews/weekly/template.md), [Annual Review](../reviews/annual/template.md)
```

**Annual Review (Gustin-style) Key Prompts:**

> 📚 **CONTEXT REF**: Full framework detail in `context/phase2/frameworks-context.md` Section 1

- What were the single most impactful events of the last year?
- Where did time go vs where I wanted it to go?
- What 20% of activities drove 80% of fulfillment?
- What's the story of this year in 3 paragraphs?

**Vivid Vision Key Prompts:**

> 📚 **CONTEXT REF**: Full framework detail in `context/phase2/frameworks-context.md` Section 3

- What does your workspace look like 3 years from now?
- What do people say about your work when you're not in the room?
- How do you feel waking up on a Tuesday morning?
- What types of problems do you solve? What "flow" do you achieve?

**Ideal Lifestyle Costing Formula:**

> 📚 **CONTEXT REF**: Full TMI calculation in `context/phase2/frameworks-context.md` Section 2

```
Target Monthly Income = [Monthly Expenses] + [One-time costs / 12] + [30% Safety Buffer]

Categories:
- HAVING: Things you want to own
- BEING: Skills/status to achieve  
- DOING: Activities/experiences to have
```

**Life Map Domains:**

> 📚 **CONTEXT REF**: Full Life Map framework with audit questions in `context/phase2/frameworks-context.md` Section 4

1. Career - What work energizes vs drains?
2. Relationships - Quality of key connections
3. Health - Physical and mental state
4. Meaning - Work you'd do unpaid
5. Finances - Security and freedom level
6. Fun - Pure joy without "productive" justification

#### 2.2 Solo-Specific Modules (Original Additions)

> 📚 **CONTEXT REF**: See sections 5-6 in `context/phase2/frameworks-context.md` for Energy Architecture and Leverage Audit details

| File | Purpose | Key Output |
|------|---------|------------|
| `frameworks/leverage_audit.md` | Identify where AI/automation creates real value | Kill/Automate/Delegate list |
| `frameworks/energy_architecture.md` | Design schedule around energy reality | Ideal week energy map |

**Leverage Audit Structure:**
```markdown
# Leverage Audit

## The Leverage Test
If AI interaction takes longer than 2x manual execution (including debugging), it's **productivity theater**.

## Current Activities Audit

| Activity | Hours/Week | AI-Augmented? | Real Leverage? | Action |
|----------|------------|---------------|----------------|--------|
| | | [ ] Yes [ ] No | [ ] Yes [ ] No | Keep / Automate / Kill |

## Workflow Classification
- **Cyborg (The Mesh)**: You + AI are one. For high-volume/low-context tasks.
- **Centaur (Hand-off)**: Clear division. You do architecture; AI executes. For high-complexity.

## Outputs
- [ ] 3 things to KILL (you're doing $20/hr work)
- [ ] 3 things to AUTOMATE (AI should handle)
- [ ] 3 things to PROTECT (only you can do)
```

**Energy Architecture Structure:**
```markdown
# Energy Architecture

## Energy Mapping

| Time Block | Energy Type | Best For |
|------------|-------------|----------|
| Morning (peak) | Creative | Deep work: coding, writing, strategy |
| Midday (moderate) | Administrative | AI-assisted tasks, client calls |
| Afternoon (depleted) | Recovery | Reading, email, admin |

## My Ideal Week

| Day | AM (Creative) | Midday (Admin) | PM (Recovery) |
|-----|---------------|----------------|---------------|
| Mon | | | |
| Tue | | | |
| Wed | | | |
| Thu | | | |
| Fri | | | |

## Energy Debt Rules
- No borrowing from future weeks
- Scheduled "recharge sprints" (no client work)
- Recovery is productive, not laziness
```

#### 2.3 Interview Scripts

> 📚 **CONTEXT REF**: See section 7 "Interview Script Design Principles" in `context/phase2/frameworks-context.md`
> Key principles: "What" over "Why", Best Friend Filter, 4-phase structure, questions that drive action

| File | Frequency | End State |
|------|-----------|-----------|
| `interviews/past_year_reflection.md` | Annual | Narrative + lessons + themes |
| `interviews/identity_and_values.md` | Annual | Core values list (3-5) |
| `interviews/future_self_interview.md` | Annual | 3-year vision + constraints |
| `interviews/honest_capacity_check.md` | Quarterly | Stop/start/continue commitments |

**Interview Design Principles:**
- Use "What" questions, not "Why" (prevents rumination)
- The "Best Friend Filter": What would they say you're lying to yourself about?
- Look for "The Recurring Ghost" - mistakes made 3+ times
- Every interview ends with decisions, not feelings

**Sample Honest Capacity Check Questions:**
- What actually shipped vs what you talked about shipping?
- Where did AI tools give leverage? Where did you use them to procrastinate?
- What client work energized you? What would you never take again?
- What content performed vs what you wanted to perform? What does that tell you?
- Where are you still doing work AI should handle?
- What would you build with 3 months of no clients?
- What's the honest gap between public persona and private reality?
- If this year repeated 10x, would you be proud of the trajectory?
- What are you avoiding because it's hard, not because it's wrong?
- Where are you being ambitious? Realistic? Are those calibrated correctly?

#### 2.4 Tracking Files

| File | Purpose |
|------|---------|
| `tracking/client_projects.md` | Active/completed client work log |
| `tracking/content_log.md` | Content published + performance |
| `tracking/learning_experiments.md` | Tool/skill experiments + ROI |

**Client vs Creator Balance Tracking:**
```markdown
# Client vs Creator Balance

## The Barbell Strategy
- **70-80%**: High-paying, low-uncertainty client work (Cash Cow)
- **20-30%**: High-uncertainty, high-leverage content/products (Moonshots)
- **0%**: "Average" projects (moderate pay, high energy, no content value)

## Current Month

| Week | Client Hrs | Creator Hrs | Ratio | On Target? |
|------|------------|-------------|-------|------------|
| W1 | | | | |
| W2 | | | | |
| W3 | | | | |
| W4 | | | | |

## Revenue Mix
- Active Income (requires presence): $___
- Ambient Revenue (runs without you): $___
- Target Ambient %: ___%
```

---

### Phase 2 Folder Structure Addition

```
solopreneur-os/
├── ... (Phase 1A files)
├── frameworks/
│   ├── annual_review.md         ← Gustin framework
│   ├── vivid_vision.md          ← Robbins/Herold framework
│   ├── ideal_life_costing.md    ← Ferriss framework
│   ├── life_map.md              ← Lieberman framework
│   ├── leverage_audit.md        ← Solo: AI/automation audit
│   └── energy_architecture.md   ← Solo: Energy-based scheduling
├── interviews/
│   ├── past_year_reflection.md  ← Annual narrative
│   ├── identity_and_values.md   ← Values extraction
│   ├── future_self_interview.md ← 3-year vision
│   └── honest_capacity_check.md ← Quarterly reality check
├── goals/
│   ├── 1_year.md                ← This year's targets
│   ├── 3_year.md                ← Medium-term vision
│   └── 10_year.md               ← Long-term direction
└── tracking/
    ├── client_projects.md       ← Client work log
    ├── content_log.md           ← Content + performance
    └── learning_experiments.md  ← R&D tracking
```

---

### Phase 2 Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Framework bloat** | Too much ceremony from famous frameworks | Keep only prompts that cause decisions |
| **Misalignment** | Frameworks don't feed review cadence | Add explicit "Used in:" links everywhere |
| **Essay-mode** | Interviews become journaling, not deciding | End every script with stop/start/continue |

---

### Phase 2 Quality Gate

**STOP before Phase 3 if:**
- Any framework lacks explicit outputs section
- Framework outputs aren't linked to reviews
- Interview scripts don't end in commitments

**Test**: Pick one framework. Can you trace its outputs → where they're used in reviews? If not, fix the links.

---

## Phase 3: Integration & Polish

> 📚 **LOAD CONTEXT**: `context/phase3/integration-context.md`
> Contains: Memory system (Signal→Pattern→Experiment→Decision), Progressive Summarization, Pattern Detection questions, Cross-referencing best practices, QA checklist, README finalization

### Objectives
1. Add memory system for pattern detection (signals → patterns → experiments → decisions)
2. Create cross-references so reviews automatically point to relevant frameworks
3. QA entire system for consistency, timeboxes, tone, and broken links
4. Finalize README with complete onboarding flow

### Success Criteria
- [ ] Can quickly answer: "What patterns keep repeating?"
- [ ] Can quickly answer: "What experiments are we running?"
- [ ] Can quickly answer: "What did we decide and why?"
- [ ] No broken links in entire system
- [ ] Consistent tone across all files (calm, direct, zero bullshit)
- [ ] All templates have timeboxes enforced

---

### Phase 3 Deliverables

#### 3.1 Memory System

> 📚 **CONTEXT REF**: See sections 1-5 in `context/phase3/integration-context.md` for complete memory system design including promotion criteria and experiment framework

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `memory.md` | Master pattern summary + key insights | Weekly/Monthly |

**Memory Structure:**
```markdown
# Memory - Pattern Detection System

## How This Works
1. **Signals**: Raw observations worth tracking (daily/weekly)
2. **Patterns**: Recurring clusters with evidence (monthly)
3. **Experiments**: Hypotheses being tested (ongoing)
4. **Decisions**: Irreversible-ish choices + rationale (as needed)

---

## Active Signals
<!-- Add 1-3 bullets per day max. Promote weekly. -->
- [Date] Signal observation... #signal

---

## Confirmed Patterns
<!-- Promoted from signals when seen 3+ times -->

### Pattern: [Name]
- **Evidence**: Seen on [dates]
- **Trigger**: What causes this?
- **Impact**: How does this affect outcomes?
- **Action**: What to do about it?

---

## Running Experiments
<!-- Hypotheses with clear stop conditions -->

### Experiment: [Name]
- **Hypothesis**: If I [action], then [expected result]
- **Start Date**: 
- **Review Date**: 
- **Stop Condition**: 
- **Current Status**: [ ] Running [ ] Succeeded [ ] Failed [ ] Abandoned

---

## Decisions Log
<!-- Irreversible choices with reasoning -->

### Decision: [Name]
- **Date**: 
- **Choice**: 
- **Rationale**: 
- **Alternatives Considered**: 
- **Review Date**: 
```

**Memory Promotion Flow:**

> 📚 **CONTEXT REF**: See "Signal-to-Pattern Promotion Criteria" in `context/phase3/integration-context.md`

1. Daily: Capture 1-3 signals (quick observations)
2. Weekly: Review signals, look for clusters
3. Monthly: Promote repeated signals → patterns
4. Patterns with clear hypotheses → experiments
5. Experiments that succeed/fail → decisions

**Pattern Detection Questions:**
- "You've set this goal 3 years running and never hit it. What's actually going on?"
- "This is the 4th time you've burned out in Q4. What's the pattern?"
- "Every project with X characteristic has gone poorly. Stop taking them?"

#### 3.2 Cross-Reference Updates

> 📚 **CONTEXT REF**: See section 7 "Cross-Reference Best Practices" in `context/phase3/integration-context.md`

**Update these files to include explicit links:**

| File | Add Links To |
|------|--------------|
| `reviews/annual/template.md` | All frameworks + interview outputs |
| `reviews/monthly/template.md` | Leverage audit + energy architecture |
| `reviews/weekly/template.md` | Client/creator tracking |
| All frameworks | Reviews that use their outputs |

#### 3.3 QA Checklist

> 📚 **CONTEXT REF**: See section 9 "QA Checklist" in `context/phase3/integration-context.md`

```markdown
# QA Checklist

## Tone Check
- [ ] No "crush it", "grind", "10x"
- [ ] No "holding space", "honoring yourself"
- [ ] No complex systems or dashboard fetishism
- [ ] Calm, direct, zero bullshit throughout

## Timebox Check
- [ ] Daily: ≤5 minutes
- [ ] Weekly: ≤60 minutes
- [ ] Monthly: ≤2 hours
- [ ] Annual: ≤half day

## Output Check
- [ ] Every template ends with concrete outputs
- [ ] Every framework has "Outputs" section
- [ ] Every interview ends with commitments

## Link Integrity
- [ ] All internal links work
- [ ] All framework → review links exist
- [ ] All review → framework links exist
- [ ] Memory references are accurate

## Consistency Check
- [ ] Metrics use same definitions everywhere
- [ ] Tags are from canonical list only
- [ ] Date formats consistent
- [ ] Section headers consistent
```

#### 3.4 README Finalization

> 📚 **CONTEXT REF**: See section 10 "README Finalization Structure" in `context/phase3/integration-context.md`

**README.md Final Structure:**
```markdown
# Solopreneur Personal Operating System

> Dream big enough to matter, stay honest enough to execute.

## What This Is
A private, single-user operating system for [your situation]. Not productivity theater. Not a SaaS app. An honest mirror for your work.

## Quick Start (15 minutes)
1. Read `ambitious_realism.md` (5 min)
2. Fill in `north_star.md` (5 min)
3. Do your first `reviews/daily/template.md` (5 min)

## How to Use This System

| Cadence | Time | File | Purpose |
|---------|------|------|---------|
| Daily | 5 min | `reviews/daily/` | Energy + needle mover + tomorrow's MIT |
| Weekly | 30 min | `reviews/weekly/` | What shipped + ratio check + adjustments |
| Monthly | 2 hrs | `reviews/monthly/` | Revenue + trends + course correction |
| Annually | Half day | `reviews/annual/` + `frameworks/` | Full reset + vision refresh |

## Personalization
1. Update `principles.md` with your constraints
2. Adjust energy types in `tracking/metrics_dictionary.md`
3. Set your client/creator target ratio

## Uploading Past Documents
1. Place files in `uploads/past_reviews/` or `uploads/notes/`
2. Review for patterns during monthly/annual reviews
3. Extract insights to `memory.md`

## Philosophy: Ambitious Realism
See `ambitious_realism.md` for full explanation.

**Core**: Dream big enough to matter, stay honest enough to execute.
- No toxic optimism
- No playing small
- Clear-eyed about capacity
- Committed to meaningful progress

## The Only Rule
This is a private system. **Honesty is the only rule.**
```

---

### Phase 3 Folder Structure (Complete System)

```
Solo-OS/
├── solopreneur-os/              ← MARKDOWN VAULT (Source of Truth)
│   ├── README.md                ← Finalized onboarding
│   ├── principles.md            ← Operating constraints
│   ├── north_star.md            ← Singular direction
│   ├── ambitious_realism.md     ← Philosophy
│   ├── memory.md                ← Pattern detection master file
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
│   │   ├── daily/
│   │   │   └── template.md
│   │   ├── weekly/
│   │   │   └── template.md
│   │   ├── monthly/
│   │   │   └── template.md
│   │   └── annual/
│   │       └── template.md
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
│   │   └── config.ts
│   ├── vite.config.ts
│   ├── package.json
│   └── dist/
├── friction-log.md              ← PHASE 4 TRIGGER (Track UI pain points)
├── context/                     ← Planning context
└── PWA-research/                ← Research archive
```

---

### Phase 3 Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Memory becomes a second job** | Abandonment | Cap signals to 1-3/day; promote only weekly |
| **False precision** | Noise overwhelms signal | Cap tracked metrics; review quarterly |
| **Link rot** | Broken references confuse | QA checklist before shipping |

---

### Phase 3 Quality Gate

**System is COMPLETE when:**
- [ ] One real week used with the system
- [ ] Can scan last 4 weeks and extract 3 patterns + 1 experiment
- [ ] QA checklist passes 100%
- [ ] No broken links
- [ ] Tone consistent throughout
- [ ] Viewer renders all content correctly
- [ ] friction-log.md initialized and ready for tracking

**After Phase 3**: System is fully functional. Phase 4 is OPTIONAL and triggered only by friction log.

---

## Phase 4: Interactive PWA (Conditional)

> ⚠️ **TRIGGER REQUIRED**: Only proceed if `friction-log.md` has **3+ recurring entries** demanding features VitePress cannot provide.
>
> 📚 **LOAD CONTEXT**: `context/phase4/interactive-pwa-context.md` (to be created when triggered)

### When to Trigger Phase 4

| Friction Type | Example | VitePress Can Handle? |
|---------------|---------|----------------------|
| **View friction** | "Need a calendar view" | Maybe (custom Vue component) |
| **Entry friction** | "Daily check-in form would help" | No → Trigger Phase 4 |
| **Computation friction** | "Want auto-aggregated weekly stats" | No → Trigger Phase 4 |
| **Write friction** | "Want to edit markdown from UI" | No → Trigger Phase 4 |

### Phase 4 Tech Stack (Next.js Migration)

If Phase 4 is triggered, migrate to the "Power & Speed" stack:

```
Framework:     Next.js 15+ (App Router)
PWA Layer:     Serwist (@serwist/next)
Database:      TinyBase + IndexedDB
UI Library:    Mantine (batteries-included)
Styling:       Tailwind CSS
Hosting:       Cloudflare Pages (same as before)
File Access:   browser-fs-access (read local markdown)
```

### Phase 4 Scope (When Triggered)

| Feature | Priority | Complexity |
|---------|----------|------------|
| Daily check-in form | High | Medium |
| Weekly review wizard | High | Medium |
| Metrics dashboard | Medium | High |
| Pattern visualization | Low | High |
| Write-back to markdown | Low | Very High |

### Phase 4 Quality Gate

**Phase 4 is COMPLETE when:**
- [ ] All friction log items addressed
- [ ] Interactive features genuinely save time
- [ ] Markdown remains source of truth (can still use without UI)
- [ ] No feature creep beyond friction log items

---

## Friction Log Template

Create `friction-log.md` in the project root:

```markdown
# Friction Log

Track pain points with the read-only UI. When 3+ recurring items demand features VitePress cannot provide, trigger Phase 4.

## Active Friction Points

| Date | Friction | Frequency | VitePress Fix? | Phase 4 Needed? |
|------|----------|-----------|----------------|-----------------|
| | | | | |

## Resolved

| Date | Friction | Resolution |
|------|----------|------------|
| | | |

## Phase 4 Trigger Checklist

- [ ] 3+ friction items marked "Phase 4 Needed"
- [ ] Items are RECURRING (not one-time annoyances)
- [ ] Estimated value > estimated migration cost
- [ ] Committed to maintaining two systems temporarily
```

---

## Critical Path (Don't Slip These)

```
1. Lock Metrics Dictionary (Phase 1A) → Everything depends on shared definitions
         ↓
2. Make Daily/Weekly usable (Phase 1A) → If these fail, nothing else matters
         ↓
3. Ship read-only viewer (Phase 1B) → "Good enough" UI, not perfect
         ↓
4. Framework outputs explicit (Phase 2) → Reviews must reference concrete things
         ↓
5. Memory system operational (Phase 3) → Only after outputs are stable
         ↓
6. [OPTIONAL] Interactive PWA (Phase 4) → Only if friction log triggers
```

**The Golden Rule**: Markdown vault works standalone. Viewer is additive, not required.

---

## Parallelization Opportunities

**Can Build Simultaneously:**

| Track A | Track B | Track C |
|---------|---------|---------|
| Phase 1A cadence templates | Phase 1B viewer setup | Phase 2 framework content |
| Core philosophy files | PWA configuration | Phase 2 interview scripts |
| Metrics dictionary | Deployment setup | Solo modules (leverage, energy) |

**Dependencies (Must Be Sequential):**
- Metrics Dictionary → All templates
- Phase 1A markdown files → Phase 1B viewer (needs content to display)
- Framework outputs defined → Memory system design
- All Phase 2 content → Cross-reference linking (Phase 3)
- Phase 3 complete → Phase 4 decision (based on friction log)

---

## Estimated Total Timeline

| Approach | Phase 1A | Phase 1B | Phase 2 | Phase 3 | Total (Phases 1-3) |
|----------|----------|----------|---------|---------|-------------------|
| **Minimum Viable** | 2 hours | 1 hour | 4 hours | 2 hours | **9 hours** |
| **Polished** | 4 hours | 2 hours | 8-12 hours | 4 hours | **18-22 hours** |
| **High Quality** | 1 day | 0.5 day | 2 days | 1 day | **4.5 days** |

**Phase 4 (If Triggered):**

| Approach | Phase 4 |
|----------|---------|
| **Minimum Viable** | 1-2 days |
| **Polished** | 3-5 days |
| **High Quality** | 1-2 weeks |

---

## Completion Checklist

A solopreneur can:
- [ ] Receive a complete personal operating system with read-only UI
- [ ] Begin using it immediately with zero technical knowledge
- [ ] Access the system from any device via deployed PWA
- [ ] Experience more clarity rather than more overwhelm
- [ ] Have honest mirrors for their work without external accountability theater
- [ ] Track what actually matters: energy, leverage, output, and life balance
- [ ] Use the system even without the UI (markdown works standalone)

---

## Next Step

**Start Phase 1A immediately:**
1. 📚 Load `context/phase1/foundation-context.md`
2. Create `solopreneur-os/` folder structure
3. Write `README.md` and `ambitious_realism.md`
4. Lock `tracking/metrics_dictionary.md`
5. Create Daily Check-In template
6. Test with one real day

**Then Phase 1B:**
1. 📚 Load `context/phase1b/viewer-context.md` (to be created)
2. Initialize VitePress in `viewer/` directory
3. Configure sidebar and PWA
4. Deploy to Cloudflare Pages
5. Create `friction-log.md` for Phase 4 tracking

---

## Safari/iOS Caveat

Safari has PWA limitations that affect the read-only viewer:
- **7-day storage eviction**: IndexedDB/cache cleared if PWA not used for 7 days (unless installed to Home Screen)
- **No File System Access API**: Cannot read local markdown folder directly on iOS
- **Workaround**: Prompt iOS users to "Add to Home Screen" for best experience

This does NOT affect the core system—markdown files work in any editor.

---

*Plan generated by synthesizing Oracle strategic analysis, framework research (Gustin, Ferriss, Robbins, Lieberman), PWA research, and solo productivity best practices.*
*MVP strategy: VitePress read-only UI with escalation path to Next.js if friction demands.*
*Context files gathered via parallel librarian agents researching official sources, documentation, and best practices.*
