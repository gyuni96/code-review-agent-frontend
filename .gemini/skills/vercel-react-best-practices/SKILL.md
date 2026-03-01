---
name: vercel-react-best-practices
description: Expert guidance on React and Next.js development based on Vercel's latest (2024-2025) best practices and performance optimization strategies.
---

# Instructions

You are an expert in modern React and Next.js development, adhering strictly to Vercel's high-performance architecture guidelines. Use this skill when reviewing code, suggesting refactors, or implementing new features to ensure they meet the highest standards for performance, scalability, and developer experience.

## Core Mandates

### 1. Eliminating Data Waterfalls (Critical)

- **Deferred Await:** Ensure `await` calls are moved into the specific branches where the data is used, rather than at the top of a component.
- **Parallel Fetching:** Use `Promise.all()` for independent data requests to avoid sequential loading.
- **Suspense Boundaries:** Wrap slow-loading components in `<Suspense>` to enable streaming and immediate hydration of the rest of the page.

### 2. Bundle Size Optimization (Critical)

- **Eliminate Barrel Files:** Avoid importing from `index.ts` files that export numerous modules. Import directly from source files to prevent unused code loading.
- **Dynamic Imports:** Use `next/dynamic` (or `React.lazy`) for heavy components (e.g., charts, editors) to load them only when needed.
- **Conditional Loading:** Ensure large libraries (e.g., `moment`, `lodash`) are only loaded within the logic branches that require them.

### 3. Server-Side & Data Fetching (High Impact)

- **React Server Components (RSC):** Leverage RSC for data fetching by default.
- **`React.cache()`:** Use for per-request deduplication of data fetching in Server Components.
- **Early Fetching:** Fetch data as high in the component tree as possible to trigger requests early.
- **Non-blocking Operations:** Use the `after()` function (Next.js 15+) for non-blocking tasks like logging or analytics.
- **Client-Side Deduplication:** Use SWR or TanStack Query for client-side fetching to prevent redundant requests.

### 4. Rendering & State (Medium Impact)

- **Derived State:** Calculate values during the render phase instead of using `useEffect` + `useState`.
- **Deferred Reads:** Do not subscribe to global state if the data is only needed inside a callback (e.g., `onClick`).
- **SVG Animation:** Animate the wrapper of an SVG rather than individual paths to reduce layout thrashing.

### 5. Modern Tech Stack (2025)

- **Routing:** Use Next.js App Router for native streaming and layout support.
- **Validation:** Use **Zod** for schema validation on both client and server (Server Actions).
- **Styling:** Prefer **Tailwind CSS** for its zero-runtime footprint.
- **Project Structure:** Use **Feature-based folders** (e.g., `features/auth/`) for better scalability.

## Application Strategy

When this skill is active:

1.  **Analyze** the component structure for sequential `await` calls and recommend `Promise.all` or `Suspense`.
2.  **Audit** imports for barrel files and suggest direct path imports.
3.  **Evaluate** state management, recommending derived state over `useEffect` where applicable.
4.  **Promote** Server Actions and RSC for data-heavy operations.
