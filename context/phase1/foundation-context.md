# Phase 1 Context: Foundation

> Context document for building core philosophy, cadence templates, and shared vocabulary.
> Load this context ONLY during Phase 1 implementation.

---

## 1. PKM Folder Structure Best Practices

### Recommended Structure (PARA Hybrid)
```text
00-Inbox/            # Rapid capture; all new files start here
10-Projects/         # Active efforts with a deadline
20-Areas/            # Ongoing responsibilities (no deadline)
30-Resources/        # Topics of interest
40-Archive/          # Completed projects or defunct areas
50-Logs/             # Time-series data
    ├── Daily/       # YYYY-MM-DD.md
    ├── Weekly/      # YYYY-Www.md (e.g., 2025-W02.md)
    └── Monthly/     # YYYY-MM.md
80-Templates/        # System blueprints
90-System/           # Assets, Scripts, Metadata
```

### Key Principles
- **Numbering**: Prefix top-level folders with numbers (00, 10, 20) for consistent ordering
- **Inbox Rule**: Must be cleared during Weekly Review
- **Flatness over Depth**: Avoid nesting deeper than 3 levels; use links instead
- **PARA Method**: Projects → Areas → Resources → Archives (by actionability)

---

## 2. Daily Check-In Design (5-Min Max)

### Core Principle
Prime the brain in morning, close loops in evening. Avoid "journaling fatigue" by keeping it strictly tactical.

### Recommended Fields (6 max per execution plan)
```yaml
# Frontmatter (for parsing/tracking)
date: {{date}}
energy: 7          # 1-10 scale
energy_type: creative  # creative, administrative, depleted
mode: creator      # client, creator, recovery
```

### Body Structure
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

### Anti-Patterns to Avoid
- More than 6 fields = abandonment risk
- Open-ended journaling questions (leads to 20+ min sessions)
- Multiple "reflection" prompts (one is enough)

---

## 3. Weekly Review Methodology

### The 3-Step Process (45-60 min total)

**Step 1: Close the Loop (15 min)**
- Clear the Inbox folder
- Review "Waiting For" items
- Empty physical/digital capture points

**Step 2: Review the System (15 min)**
- Review last week's Daily Logs for patterns
- Update project statuses
- Archive completed/stagnant projects

**Step 3: Plan the Horizon (15 min)**
- Review calendar for next 2 weeks
- Select 3 Weekly Objectives (high-level goals)
- Identify any blockers

### Weekly Review Template Fields
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

---

## 4. Energy Tracking Metrics

### Definitions (Lock these BEFORE templates)

| Metric | Scale | Definition |
|--------|-------|------------|
| **Energy Level** | 1-10 | 1-3 (depleted), 4-6 (functional), 7-10 (peak) |
| **Energy Type: Creative** | - | Deep work capacity: coding, writing, strategy |
| **Energy Type: Administrative** | - | Email, logistics, AI-assisted tasks |
| **Energy Type: Depleted** | - | Recovery mode, deliberately off |
| **Mode: Client** | - | Paid work, consulting, deliverables |
| **Mode: Creator** | - | Content, products, personal building |
| **Mode: Recovery** | - | Rest, NOT laziness |

### Revenue Type Definitions
| Type | Definition |
|------|------------|
| **Active Income** | Requires your presence (consulting, calls) |
| **Ambient Revenue** | Runs without you (products, courses, affiliate) |

### Learning Type Definitions
| Type | Definition |
|------|------------|
| **R&D** | Productive exploration with clear hypothesis |
| **Procrastination** | Shiny object syndrome disguised as learning |

---

## 5. Timeboxed Template Design

### The "Rule of Three"
Never require more than three entries for any section (3 wins, 3 tasks, 3 gratitudes).

### Commented Instructions Pattern
```markdown
### Weekly Objectives
<!-- What are the 3 non-negotiable outcomes for this week? -->
1.
2.
3.
```

### Constraint by Default
If a section isn't used for 3 consecutive sessions, DELETE IT.

### Frontmatter First
Put all tracking metrics in YAML frontmatter:
- Keeps body clean for thinking
- Makes data parseable by AI agents
- Enables future pattern detection

---

## 6. Common Pitfalls

| Pitfall | Risk | Mitigation |
|---------|------|------------|
| **Over-design** | Abandonment from complexity | Enforce timeboxes; "minimum viable answers" only |
| **Inconsistent fields** | Memory system breaks in Phase 3 | Lock Metrics Dictionary BEFORE writing templates |
| **Too many prompts** | Daily takes 20 min not 5 | Hard cap: 6 fields maximum for daily |
| **Collector's Fallacy** | Saving without processing | Require 1-sentence summary for saved items |
| **Organization as Procrastination** | 2 hours tweaking CSS | Do the "Must-Win" task first |

---

## 7. Tone Guidelines

### DO
- Calm, direct, zero bullshit
- Acknowledge solo work reality: full autonomy = full responsibility
- Treat AI tools as genuine leverage, not magic
- Respect that time freedom and meaningful output can coexist

### DON'T
- "Crush it", "grind", "10x" (hustle culture)
- "Holding space", "honoring yourself" (therapy speak)
- Complex systems, dashboard fetishism (productivity porn)
- Toxic optimism OR playing small

### Voice Example
**Bad**: "Take a moment to honor your journey and celebrate your wins!"
**Good**: "What actually shipped? What didn't? What's the adjustment?"

---

## Phase 1 Quality Gate Checklist

Before proceeding to Phase 2, verify:
- [ ] Daily Check-In completes in ≤5 minutes (test with real day)
- [ ] Weekly Review feels useful, not like homework
- [ ] Weekly Review can be completed using only daily captures
- [ ] Every page has: purpose, timebox, outputs, next action
- [ ] Metrics Dictionary is locked and referenced by all templates
