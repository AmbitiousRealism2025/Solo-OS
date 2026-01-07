# PWA Core Capabilities and Limitations for Desktop (2025 Research)

## 1. Executive Summary
Progressive Web Apps (PWAs) have matured significantly in 2024 and 2025, evolving from "mobile-first" websites into robust desktop application alternatives. For personal productivity systems, the shift towards "Local-First" architecture is now fully supported by modern browser APIs, allowing PWAs to behave almost indistinguishably from native desktop software on major operating systems.

## 2. Technical Capabilities (2025)
As of early 2025, desktop PWAs have moved beyond simple offline caching to deep operating system integration.

| Capability | Desktop Impact | Primary API |
| :--- | :--- | :--- |
| **Direct File Editing** | Edit local files/folders without "re-downloading." | File System Access API |
| **Native Look & Feel** | Remove browser UI; custom title bars. | Window Controls Overlay |
| **System Integration** | Right-click shortcuts on taskbar/dock. | App Shortcuts |
| **File Handling** | Open files from OS explorer directly into PWA. | File Handling API |
| **Protocol Handling** | Register as handler for links (e.g., `mailto:` or `obsidian:`). | URL Protocol Handler |
| **Offline Consistency** | Reliable data storage and background updates. | Service Workers + IndexedDB |
| **App Badging** | Notification counts on the dock/taskbar icon. | Badging API |

---

## 3. Browser Support Matrix (Desktop - Jan 2025)
Support for PWAs is no longer a "Chrome-only" feature, though Chromium-based browsers still lead in hardware and file system access.

| Feature | Chrome / Edge | Safari (macOS) | Firefox (Windows) |
| :--- | :--- | :--- | :--- |
| **Installable** | Yes (Native Prompt) | Yes ("Add to Dock") | Yes (v143+ September 2025) |
| **File System Access** | Full Support | Limited (Sandboxed/OPFS) | Limited |
| **Notifications** | Yes | Yes | Yes |
| **Badging** | Yes | Yes (v17+) | Yes |
| **Window Overlay** | Yes | No | No |
| **Background Sync** | Yes | Partial | Yes |

*Sources: [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), [Safari 17 Release Notes](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/), [Firefox 143 Release Notes](https://www.firefox.com/en-US/firefox/143.0/releasenotes/)*

---

## 4. Key APIs for Productivity Systems

### A. File System Access API
The most critical API for productivity tools. It allows the app to read and write directly to the user's local disk (with permission).
*   **User Flow:** User selects a "workspace" folder; the PWA retains access across sessions.
*   **Status:** Fully supported in Chrome/Edge. Safari uses **Origin Private File System (OPFS)**, which is a virtual sandbox not directly accessible by other OS apps (like VS Code).
*   **Citation:** [Managing local files from a PWA](https://progressier.com/pwa-capabilities/file-system-desktop)

### B. IndexedDB (Client-Side Database)
The "brain" of a local-first system.
*   **Capabilities:** Stores large amounts of structured data (JSON, Blobs, File Handles).
*   **Performance:** High-performance, asynchronous, and accessible from Service Workers.
*   **Status:** Universally supported across all major browsers.

### C. Service Workers & Background Sync
Ensures the app is always available and data eventually reaches the server.
*   **Background Sync:** Queues "Save" actions taken while offline and executes them once a connection is detected.
*   **Background Fetch:** Allows large downloads (e.g., assets/databases) to continue even if the PWA window is closed.
*   **Citation:** [Progressive Web Apps in 2025](https://theadfirm.net/progressive-web-apps-in-2025-essential-features-every-website-needs/)

---

## 5. PWA vs. Native App (Desktop Context)

| Feature | PWA (2025) | Native (Electron / C++) |
| :--- | :--- | :--- |
| **Installation** | Instant (Zero-byte install) | Large binary download |
| **Updates** | Instant (on reload) | Requires binary patch/restart |
| **Security** | Sandboxed by browser | Full system access (higher risk) |
| **System Resources** | Efficient (shared browser engine) | Heavier (dedicated instance) |
| **Hardware Access** | Moderate (WebBluetooth/WebUSB) | Full (Native Drivers) |
| **Low-Latency Media** | Good (WebGPU/WebAssembly) | Excellent |

---

## 6. Installation Experience on Desktop

### Chrome & Microsoft Edge
*   **Prompting:** Browsers show an "Install" icon in the URL bar if criteria are met (Manifest + Service Worker).
*   **Post-Install:** The app appears in the Start Menu, Taskbar, and can be configured to "Launch on Login."
*   **Standalone Mode:** Opens in its own window without the address bar or tabs.

### Safari (macOS Sonoma+)
*   **Method:** Users must go to *File > Add to Dock*.
*   **Behavior:** Creates a standalone web app window. Safari syncs cookies and state between the browser and the docked app.

### Firefox (Windows v143+)
*   **New Feature:** Firefox 143 (released late 2025) finally allows websites to be installed as standalone apps on Windows, supporting taskbar pinning and offline notifications.
*   **Citation:** [Firefox 143 Release Notes](https://gigazine.net/gsc_news/en/20250917-firefox-143/)

---

## 7. Limitations & Gotchas for 2025
1.  **Browser Engine Divergence:** A feature working in Chrome (e.g., Serial Port Access) will likely fail in Safari/Firefox. Developers must implement heavy feature detection.
2.  **Storage Eviction:** Although quotas are large on desktop (often 60% of disk space), the OS can still "evict" (delete) PWA data if the disk is nearly full. **Persistence Permission** must be explicitly requested.
3.  **Background Processing:** Unlike native apps, PWAs cannot run intensive background tasks (like video rendering or indexing) once the app is closed, unless using the limited Background Fetch/Sync APIs.
4.  **No "True" File System in Safari:** Safari's lack of full File System Access API (non-sandboxed) remains the biggest hurdle for productivity apps that need to interoperate with other desktop software.

---
**Document Version:** 1.0 (Jan 2026)  
**Status:** Final Research Output
