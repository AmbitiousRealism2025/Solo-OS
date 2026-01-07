# Phase 3 Context: Integration & Polish

> Context document for building memory system, cross-references, and QA.
> Load this context ONLY during Phase 3 implementation.

---

## 1. Memory System: Signal → Pattern → Experiment → Decision

### The Progression Flow
```
Signal (Individual Observation)
    ↓ (seen 3+ times)
Pattern (Distilled Synthesis)
    ↓ (design hypothesis)
Experiment (Behavioral Test)
    ↓ (evaluate results)
Decision (Workflow Change)
```

### Signal-to-Pattern Promotion Criteria

| Criterion | Threshold |
|-----------|-----------|
| **Frequency (Rule of 3)** | Observation surfaced 3+ times within 30 days |
| **Resonance** | Persistent "hunch" or physical sensation of relevance |
| **Actionability** | Can apply to 2+ different projects/areas |
| **Risk/Value** | Directly impacts safety, finances, or core goals |

### Memory.md Structure
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

---

## 2. Progressive Summarization (Tiago Forte)

### The Layers
1. **Layer 0**: Original source text
2. **Layer 1**: Initial capture of insightful content
3. **Layer 2**: **Bold** the key points/essence
4. **Layer 3**: ==Highlight== the "best of the best"
5. **Layer 4**: Executive summary in your own words (1-3 sentences)
6. **Layer 5 (Remix)**: Transform into something new

### Key Principles
- **Don't apply all layers to all notes**: Value follows power law
- **Summarize only when needed**: Just-in-time, not just-in-case
- **Layer 2-3 should be 10-20%** of previous layer
- **Use resonance**: Let intuition guide what to highlight

---

## 3. Pattern Detection Questions

Use these during reviews to surface hidden patterns:

- "You've set this goal 3 years running and never hit it. What's actually going on?"
- "This is the 4th time you've burned out in Q4. What's the pattern?"
- "Every project with X characteristic has gone poorly. Stop taking them?"
- "What type of work consistently energizes you? What drains you?"
- "What triggers your worst decisions? Your best ones?"

---

## 4. Experiment Design Framework

### The Probe-Sense-Respond Cycle

**Probe (The Intervention)**
A small, low-risk change based on the pattern.
- Example: "For 5 days, use Tool X instead of Tool Y when Trigger Z occurs"

**Sense (Observation)**
Record the delta. Did it produce expected outcome?
- Quantitative: Time saved, tasks completed, energy level
- Qualitative: How did it feel? Was it sustainable?

**Respond (Decision)**
Based on sensing:
- **Scale**: Incorporate into permanent workflow
- **Refine**: Adjust parameters and re-test
- **Discard**: Mark as "Noise" and archive

---

## 5. Decision Logging Format (ADR Style)

```markdown
### Decision: [Title]
- **Date**: YYYY-MM-DD
- **Status**: Proposed | Accepted | Superseded | Deprecated
- **Context**: The specific problem or signal that prompted this
- **Choice**: What was decided
- **Alternatives Considered**: What was rejected and why
- **Consequences**: What is the new reality
- **Review Date**: When to evaluate if this is still working
```

---

## 6. Memory Maintenance Workflows

| Cadence | Activity | Goal |
|---------|----------|------|
| **Daily** | Add 1-3 signals max | Capture without overwhelm |
| **Weekly** | Review signals, look for clusters | Promote to emerging patterns |
| **Monthly** | Review emerging patterns, design 1 experiment | Test hypotheses |
| **Quarterly** | Review decision log, assess PKM architecture | Strategic adjustment |

### Memory Promotion Flow
1. Daily: Capture signals (quick observations)
2. Weekly: Review signals, cluster similar ones
3. Monthly: Promote 3+ occurrences → patterns
4. Patterns with clear hypotheses → experiments
5. Experiments that succeed/fail → decisions

---

## 7. Cross-Reference Best Practices

### Linking Conventions

| Type | Convention | Use Case |
|------|------------|----------|
| **Wiki-links** | `[[File Name]]` | Internal PKM, Obsidian |
| **Standard Markdown** | `[Text](path.md)` | Public docs, GitHub |
| **Aliases** | `[[File Name\|Display Text]]` | Cleaner reading |
| **Block refs** | `[[File Name#^blockid]]` | Specific sections |

### Path Strategy
- **Use Relative Paths**: `./folder/file.md` (portable across machines)
- **Avoid Absolute Paths**: Break on different systems

### Navigation Patterns

**Maps of Content (MOCs)**
- Central index pages aggregating links to a topic
- Acts as "table of contents" for non-linear clusters

**Breadcrumbs**
- Include `Up: [[Parent Note]]` at top of sub-documents

**Folders vs Tags**
- **Folders**: Hard classification (Projects, Archives)
- **Tags**: States or qualities (#active, #to-process)

### Required Cross-References

| File | Must Link To |
|------|--------------|
| `reviews/annual/template.md` | All frameworks + interview outputs |
| `reviews/monthly/template.md` | Leverage audit + energy architecture |
| `reviews/weekly/template.md` | Client/creator tracking |
| All frameworks | Reviews that use their outputs |
| `memory.md` | Relevant patterns and decisions |

---

## 8. Link Integrity QA

### Manual Check
- [ ] All `[[wiki-links]]` resolve to existing files
- [ ] All `[markdown](links.md)` point to valid paths
- [ ] No orphan files (files with no incoming links)
- [ ] No dead-end files (files with no outgoing links, except logs)

### Automated Tools
- `markdown-link-check` (CLI)
- Obsidian: "Show orphan files" in graph view
- VS Code: Markdown All in One extension

---

## 9. QA Checklist

### Tone Check
- [ ] No "crush it", "grind", "10x"
- [ ] No "holding space", "honoring yourself"
- [ ] No complex systems or dashboard fetishism
- [ ] Calm, direct, zero bullshit throughout

### Timebox Check
- [ ] Daily: ≤5 minutes
- [ ] Weekly: ≤60 minutes
- [ ] Monthly: ≤2 hours
- [ ] Annual: ≤half day

### Output Check
- [ ] Every template ends with concrete outputs
- [ ] Every framework has "Outputs" section
- [ ] Every interview ends with commitments

### Link Integrity
- [ ] All internal links work
- [ ] All framework → review links exist
- [ ] All review → framework links exist
- [ ] Memory references are accurate

### Consistency Check
- [ ] Metrics use same definitions everywhere
- [ ] Tags are from canonical list only
- [ ] Date formats consistent (YYYY-MM-DD)
- [ ] Section headers consistent

---

## 10. README Finalization Structure

```markdown
# Solopreneur Personal Operating System

> Dream big enough to matter, stay honest enough to execute.

## What This Is
A private, single-user operating system for [your situation].
Not productivity theater. Not a SaaS app. An honest mirror for your work.

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

## Phase 3 Quality Gate Checklist

System is COMPLETE when:
- [ ] One real week used with the system
- [ ] Can scan last 4 weeks and extract 3 patterns + 1 experiment
- [ ] QA checklist passes 100%
- [ ] No broken links
- [ ] Tone consistent throughout
- [ ] README enables 15-minute onboarding
