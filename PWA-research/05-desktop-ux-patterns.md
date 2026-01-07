# Desktop-First PWA Productivity Design Patterns (2025)

This document outlines the essential UI/UX patterns for building professional-grade, desktop-first productivity applications in a PWA context.

---

## 1. Desktop-First Design Patterns
High-performance productivity tools prioritize throughput and focus. The design language shifts from "mobile-first" simplicity to "power-user" efficiency.

### Keyboard-First Navigation
*   **The Shortcut as Primary Action**: Navigation should not require the mouse. Apps like **Linear** and **Superhuman** treat the mouse as a fallback, not the primary input.
*   **Focus Management**: Visual indicators (rings/borders) must be prominent so users always know where the focus is.
*   **Single-Key Actions**: Common actions (e.g., `e` for archive in Superhuman, `c` for create in Linear) reduce cognitive load.

### Command Palette Patterns (Cmd+K)
*   **Context-Aware Menus**: The command palette should change its suggestions based on the current view (e.g., **Pieces Desktop**'s Power Menu).
*   **Global Access**: The `Cmd+K` or `Cmd+P` shortcut acts as the "Universal Entry Point" for search, settings, and navigation.
*   **Action Execution**: Palettes should allow users to *perform* actions (e.g., "Assign to...") rather than just searching for files.

### Spatial Systems & Layouts
*   **Split Pane/Multi-Column**: Avoid full-page transitions. Use collapsible sidebars and multi-pane layouts (e.g., **Obsidian**) to maintain context.
*   **Information Density**: Professional tools use higher information density. Implement a **4-point or 8-point grid system** with tokenized spacing to provide breathing room without wasting space.
*   **Window Controls Overlay (PWA)**: Use the `window-controls-overlay` manifest member to place custom navigation or status UI in the OS title bar area, creating a truly native look.

---

## 2. Productivity App UX Conventions
Patterns focused on "Getting Things Done" and "Personal Knowledge Management" (PKM).

### Quick Capture & Default Input
*   **Daily Note as Home**: Many modern tools (Logseq, Roam, Obsidian) use the "Daily Note" or "Journal" as the default landing page. This removes the "friction of naming" a file before starting work.
*   **The "Inbox" Pattern**: A dedicated space for unsorted items that can be processed later.

### Personal Metrics & Dashboards
*   **Quantified Self Views**: Dashboards that aggregate personal metrics (productivity KPIs, focus time, habit streaks).
*   **Modular Widgets**: Drag-and-drop or configurable widgets (Notion-style) allow users to build their own command centers.

### Visualization for Knowledge
*   **Graph/Network Views**: Visualizing links between notes (Obsidian Graph view) helps users see patterns in their data.
*   **Timeline/Gantt Integrations**: Providing a temporal view of tasks alongside the list view (Linear's Roadmap).

---

## 3. PWA-Specific UX Considerations
Bridging the gap between a "website" and a "desktop application."

### Installation & Onboarding
*   **Custom Installation Prompts**: Don't rely on the browser's default (+) icon. Use an in-app "Install App" button that triggers the `beforeinstallprompt` event.
*   **Standalone Mode**: Always set `display: standalone` in the manifest to remove browser chrome (URL bar, tabs).

### Offline & Sync Status
*   **Invisible Offline Fallbacks**: If a user is offline, the app should still function using cached data via Service Workers.
*   **Sync Status UI**: Communicating background activity:
    *   **Iconography**: A cloud icon with "Syncing..." (spinner) vs "Synced" (check).
    *   **Optimistic UI**: Perform the action locally immediately and sync in the background (Background Sync API).

### "App-Like" Feel
*   **Custom Splash Screens**: Use the manifest to define a background color and icon for the loading state.
*   **Native File Handling**: Use the File System Access API to allow users to open and save files directly to their local disk (essential for apps like Obsidian).

---

## 4. Reference Applications
Best-in-class examples of desktop productivity UX.

| Application | Key Strength | UX Pattern to Borrow |
| :--- | :--- | :--- |
| **Linear** | Unrivaled Speed | Keyboard-first shortcuts, optimistic UI updates. |
| **Superhuman** | Flow State | Elimination of decision fatigue through single-key triage. |
| **Raycast** | Extensibility | Command palette as a platform; instant action execution. |
| **Arc Browser** | Tab Management | Sidebar-first navigation; "Spaces" for context switching. |
| **Obsidian** | Sovereignty | Local-first data, graph visualizations, extreme customizability. |

---

## 5. Accessibility Considerations
Productivity tools must be inclusive to prevent burnout and support power users.

*   **Keyboard Exhaustion**: Ensure shortcuts are ergonomic. Avoid "finger gymnastics" (e.g., `Cmd+Shift+Option+K`).
*   **Screen Reader Navigation**: High-density layouts must be logically structured with ARIA landmarks and roles, especially for complex components like Command Palettes.
*   **Color & Contrast**: High-density tools are often used for 8+ hours a day. Provide "Night" and "High Contrast" modes to reduce eye strain.
*   **Motion**: Support `prefers-reduced-motion` to avoid nausea in heavy-interaction apps with many transitions.

---

*Document created for Solo-OS Research Project - 2026*
