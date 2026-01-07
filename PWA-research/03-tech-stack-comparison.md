# Modern Tech Stack Comparison: Desktop-First PWA (2025-2026)

This document provides a comprehensive research and comparison of modern tech stacks for building a desktop-first personal productivity application, focusing on the needs of a solo developer in 2025-2026.

## 1. Framework Comparison

| Framework | PWA Support | Offline Capabilities | Build Size / Perf | Ecosystem Maturity | Desktop UI Fit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Next.js 15+** | Plugin (`@serwist/next`) | High (via Workbox) | Moderate | Very High | Excellent (shadcn, Mantine) |
| **Nuxt 3** | Official Module (`@vite-pwa/nuxt`) | High | Good | High | Excellent (Nuxt UI, PrimeVue) |
| **SvelteKit** | Plugin (`vite-plugin-pwa`) | Excellent | Very Small | Moderate | Good (Bits UI, Skeleton) |
| **Remix** | Plugin (`@vite-pwa/remix`) | High | Good | High (React) | Excellent (shadcn) |
| **Solid Start** | Plugin (`vite-plugin-pwa`) | High | Extremely Small | Emerging | Good (Kobalte, Hope UI) |

### Detailed Evaluation

#### Next.js 15+ (React Ecosystem)
- **PWA Support**: Not built-in, but `@serwist/next` (successor to `next-pwa`) provides a robust Workbox integration for App Router.
- **Offline**: Strong service worker management. React Server Components (RSC) can be tricky with offline-first data fetching unless using a client-side database.
- **Developer Experience**: Best-in-class tooling, huge community, but can feel "heavy" for a solo developer.
- **Verdict**: The "safe" choice with the most components available.

#### Nuxt 3 (Vue Ecosystem)
- **PWA Support**: The `@vite-pwa/nuxt` module is the most "built-in" feeling implementation. Zero-config for basic features.
- **Offline**: Excellent integration with the Nuxt lifecycle.
- **Developer Experience**: "Auto-imports" and a unified module system make it very productive for solo developers.
- **Verdict**: Best "Integrated" PWA experience.

#### SvelteKit
- **PWA Support**: Uses `vite-plugin-pwa`. Svelte's compiler-based approach keeps the client-side bundle tiny.
- **Performance**: Fastest startup times and minimal overhead.
- **Developer Experience**: Highly praised for simplicity and "vanilla feel."
- **Verdict**: Best for performance-obsessed productivity tools.

#### Remix (React Router v7)
- **PWA Support**: Now fully on Vite, using `@vite-pwa/remix`.
- **Offline**: Focuses on web standards (loaders/actions). Requires careful strategy for client-side persistence (e.g., `remix-pwa`).
- **Verdict**: Strong choice for developers who prefer the "Web Standards" mental model.

---

## 2. State Management for Local-First

A desktop productivity app (like Notion, Obsidian, or Linear) requires **Zero Latency** and **Offline Persistence**.

| Library | Primary Use Case | Complexity | Conflict Resolution |
| :--- | :--- | :--- | :--- |
| **RxDB** | Full Local-First Database | High | Built-in (CRDTs/Plugins) |
| **Dexie.js** | Simple IndexedDB Wrapper | Low | Manual |
| **Yjs** | Multi-device / Collaboration | Medium | Automatic (CRDT) |
| **TanStack Query + Persist** | Cache Persistence | Low | None (Last-write wins) |
| **Zustand + Persist** | Simple Settings/State | Very Low | None |

### Evaluation
1. **RxDB**: The most powerful for "productivity" apps. Includes observable queries (UI updates automatically on DB change) and seamless sync to any backend (PostgreSQL, CouchDB, etc.).
2. **Yjs**: Essential if you plan to have a "Real-time Sync" or "Collaboration" feature later. It handles merging changes from different devices without conflicts.
3. **Dexie.js**: Use this if you want a simple "Save to Disk" feel without the heavy features of RxDB.

---

## 3. UI Component Libraries (Desktop-Focused)

Productivity apps require **Information Density**, **Keyboard Shortcuts**, and **Complex Components** (Data Tables, Command Bars).

### **Mantine (React)**
- **Focus**: Desktop-first.
- **Why**: Includes everything from DatePickers to Rich Text Editors and Spotlights (Command Bars). It is a "batteries-included" library that saves solo developers months of work.
- **Quality**: Extremely high density and performance.

### **shadcn/ui (React)**
- **Focus**: Design control.
- **Why**: Copy-paste components built on **Radix UI**. You own the code.
- **Pros**: Perfectly accessible primitives. High flexibility.
- **Cons**: You have to "assemble" the more complex components yourself.

### **Nuxt UI (Vue)**
- **Focus**: Integration with Nuxt.
- **Why**: Built with Tailwind and Headless UI. Very fast to build "Admin Dashboard" style interfaces common in productivity apps.

### **Radix UI / Primitives**
- The foundation for modern accessible web apps. Use these if you are building a custom design system from scratch.

---

## 4. Recommended Stack for a Solo Developer (2025/2026)

**The "Power & Speed" Stack:**

- **Framework**: **Next.js 15 (App Router)**
    - *Why*: Largest ecosystem for specialized productivity components (Calendar, Gantt charts, etc.).
- **PWA Layer**: **Serwist**
    - *Why*: Modern, type-safe Workbox wrapper specifically for Next.js.
- **Database**: **RxDB + Dexie Storage**
    - *Why*: Reactive queries make the UI feel instantaneous. Offline-first is a first-class citizen.
- **UI Library**: **Mantine**
    - *Why*: For a solo dev, having a high-quality DatePicker, MultiSelect, and Rich Text Editor ready to go is more valuable than "owning the code" (shadcn).
- **Styling**: **Tailwind CSS**
    - *Why*: Fastest way to iterate on custom desktop layouts.

### Build/Deploy Considerations
- **Hosting**: **Vercel** or **Cloudflare Pages** (for global latency).
- **Sync**: **Supabase** or **Convex** for the backend (both have excellent RxDB integration recipes).
- **Service Worker**: Use `InjectManifest` strategy to have full control over caching logic for large desktop assets.

---
