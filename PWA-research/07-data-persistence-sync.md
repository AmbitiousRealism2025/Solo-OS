# Data Persistence and Synchronization for Local-First PWAs

This document outlines the research on data persistence and synchronization strategies for a local-first personal productivity PWA, focusing on reliability, data portability, and the "solopreneur" use case.

---

## 1. Browser Storage Options

Choosing the right storage medium is the foundation of a local-first application.

### Comparison Table

| Storage API | Capacity | Use Case | Best For |
| :--- | :--- | :--- | :--- |
| **localStorage** | ~5MB | Simple flags, theme settings | Tiny, non-relational data |
| **IndexedDB** | ~80% of disk | Structured data, blobs | Most PWA data (via Dexie/RxDB) |
| **OPFS (Origin Private File System)** | ~80% of disk | High-performance binary | SQLite-WASM, large files |
| **Cache API** | ~80% of disk | Network responses, assets | Service Worker offline support |

### Storage Quotas and Eviction
*   **Quotas**: Modern browsers allow PWAs to use a significant portion of available disk space (often 60-80% of the drive).
*   **Eviction**: Browsers may delete data if the device runs low on space. 
*   **Persistent Storage API**: Use `navigator.storage.persist()` to request the browser *not* to evict your app's data.

### ⚠️ The Safari/iOS 7-Day Rule (Critical)
As of 2025/2026, Safari (iOS/macOS) implements a strict **7-day eviction policy** for "script-writable storage" (IndexedDB, LocalStorage, Service Worker cache).
*   **The Rule**: If a user does not interact with the website for 7 days, all storage is deleted.
*   **The Exception**: If the user has **"Added to Home Screen"** (installed as a PWA), the storage is typically exempt from this auto-deletion, making installation mandatory for data reliability on iOS.

---

## 2. File System Access

For a productivity app, the ability to read/write files directly on the user's machine is highly desirable.

### File System Access API (Chrome/Edge)
Allows the app to show a file picker and obtain a "handle" to a file or directory on the real file system.
*   **Persistence**: Handles can be stored in IndexedDB so the user doesn't have to pick the folder every time.
*   **Security**: Requires explicit user gesture (click) and permission prompt for write access.

### Fallback Strategies (Safari/Firefox)
Since Safari and Firefox do not support the native File System Access API:
1.  **OPFS**: Use the "sandbox" file system. It's fast and persistent but not visible to the user in Finder/Explorer.
2.  **Legacy Upload/Download**: Provide a "Manual Backup" button that triggers a `.zip` or `.json` download.
3.  **Virtual File Systems**: Use libraries like `browser-fs-access` which abstract the difference between the native API and the fallback `<input type="file">`.

---

## 3. Sync Strategies (Single User, Multi-Device)

A "local-first" app should work offline and sync when online without requiring a complex backend.

### A. Git-based Sync (The "Dev-Friendly" Option)
Use `isomorphic-git` to treat a private GitHub/GitLab repo as your database.
*   **Pros**: Version history for free, extremely reliable, user "owns" the data.
*   **Implementation**: Store the Git repository in **OPFS** or **IndexedDB**.
*   **Challenge**: Requires a CORS proxy (e.g., `@isomorphic-git/cors-proxy`) unless using a provider like Gitea.

### B. Cloud Storage APIs (Dropbox, Google Drive, iCloud)
The "Bring Your Own Storage" (BYOS) model.
*   **Dropbox/Google Drive**: Use their JavaScript SDKs to upload/download a single "state file" (e.g., `data.db` or `backup.json`).
*   **Pros**: Zero server costs for you; users trust these providers.
*   **Cons**: OAuth flows can be clunky in a PWA.

### C. Self-Hosted Sync (CouchDB / Supabase)
*   **PouchDB/CouchDB**: The original sync masters. PouchDB (local) syncs automatically with CouchDB (remote).
*   **Supabase**: Use Supabase for auth and storage, with a local-first layer like **RxDB** to sync changes.

### D. P2P (libp2p, Hypercore)
*   Direct device-to-device sync.
*   **Pros**: Truly decentralized.
*   **Cons**: Both devices usually need to be online at the same time; complex to implement reliably in browser environments.

---

## 4. Data Export and Portability

To prevent "App Death" anxiety, data must be easily exportable.

1.  **Markdown Export**: Essential for notes/tasks. Allow exporting a folder of `.md` files.
2.  **JSON Snapshots**: A single "Download Everything" button that produces a schema-versioned JSON file.
3.  **Automatic Backups**: Every time the app starts or a major change is made, save a timestamped snapshot to a "Backups" table in IndexedDB or OPFS.

---

## 5. Recommended Libraries

### **TinyBase** (Highly Recommended)
The "Reactive Data Store" for the web.
*   **Why**: Extremely lightweight, supports schema, and has "Persisters" for IndexedDB, SQLite, and CRDTs (Yjs/Automerge).
*   **Sync**: Easy to hook up to any custom sync logic.

### **RxDB**
A NoSQL database for JavaScript.
*   **Why**: Built-in sync protocols for GraphQL, CouchDB, and Supabase. Supports OPFS for performance.
*   **Complexity**: Higher than TinyBase, but more "out of the box" features.

### **Dexie.js**
The gold standard for IndexedDB.
*   **Why**: If you don't need a complex reactive store and just want "SQL-like" queries on IndexedDB.

---

## 6. Recommendation: The "Solopreneur" Stack

For a single-user productivity app that is **reliable, future-proof, and simple to build**:

1.  **Persistence**: **TinyBase** + **IndexedDB** (via `createIndexedDbPersister`).
2.  **High-Performance Option**: If handling thousands of items, use **TinyBase** + **SQLite (WASM) in OPFS**.
3.  **Sync Strategy**: **Dropbox or Google Drive App Folder**. 
    *   Simple "Upload on Change" (debounced) and "Check for Update on Start" logic.
    *   No custom backend to maintain.
4.  **Export**: Mandatory **"Export to Markdown/JSON"** feature.
5.  **Reliability**: Prompt the user to "Install to Home Screen" on iOS to bypass the 7-day eviction rule.

### Example: Simple TinyBase Persistence
```javascript
import { createStore } from 'tinybase';
import { createIndexedDbPersister } from 'tinybase/persisters/persister-indexed-db';

const store = createStore().setTable('tasks', {
  1: { text: 'Research Sync', status: 'done' },
});

const persister = createIndexedDbPersister(store, 'my_app_data');

// Load existing data and start auto-saving
await persister.startAutosave();
```

---

*Research compiled: Jan 2026*
