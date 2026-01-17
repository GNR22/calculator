my-turborepo/
├─ .gitignore
├─ .npmrc
├─ package.json
├─ README.md
├─ turbo.json
├─ .turbo/
│  ├─ cache/                # Turbo build cache
│  ├─ cookies/              # Turbo cookies (local state)
│  ├─ daemon/               # Turbo daemon runtime/logs
│  └─ preferences/          # Turbo UI/preferences
├─ apps/
│  ├─ calculator/
│  │  ├─ next.config.js
│  │  ├─ package.json
│  │  ├─ .next/             # Next.js build/dev artifacts
│  │  ├─ pages/
│  │  │  ├─ _app.js
│  │  │  └─ index.js
│  │  └─ styles/
│  │     └─ globals.css
│  ├─ docs/
│  │  ├─ .gitignore
│  │  ├─ eslint.config.js
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.js
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ tsconfig.json
│  │  ├─ .next/             # Next.js build/dev artifacts for docs app
│  │  ├─ app/
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.module.css
│  │  │  ├─ page.tsx
│  │  │  └─ fonts/
│  │  └─ public/
│  └─ web/
│     ├─ .gitignore
│     ├─ eslint.config.js
│     ├─ next-env.d.ts
│     ├─ next.config.js
│     ├─ package.json
│     ├─ README.md
│     ├─ tsconfig.json
│     ├─ .next/             # Next.js build/dev artifacts for web app
│     ├─ app/
│     │  ├─ globals.css
│     │  ├─ layout.tsx
│     │  ├─ page.module.css
│     │  ├─ page.tsx
│     │  └─ fonts/
│     └─ public/
├─ packages/
│  ├─ eslint-config/
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ react-internal.js
│  │  └─ package.json
│  ├─ typescript-config/
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ react-library.json
│  │  └─ package.json
│  └─ ui/
│     ├─ eslint.config.mjs
│     ├─ package.json
│     ├─ tsconfig.json
│     └─ src/
│        ├─ button.tsx
│        ├─ card.tsx
│        └─ code.tsx




Calculator app — files present and purpose

-next.config.js
Purpose: Next.js app configuration (custom routing, build settings, environment flags). Needed if you want to customize Next behavior; optional for simple apps.


-package.json
Purpose: App-specific scripts, dependencies, and package metadata (start/dev/build/test commands). Required.


-.next/ (directory) — generated build/runtime artifacts
Purpose: Next.js development/build output (server bundle, client chunks, prerender manifests, dev cache, logs).

Notes: This folder is created by Next and should be in .gitignore (do not commit). It contains files used only at runtime or during development (e.g., build-manifest.json, server pages, trace, cache).

-pages/_app.js
Purpose: Custom App component that wraps all pages. Use for global providers, layout wrappers, or importing global CSS. Present because this app uses the Pages Router pattern. Required only if you need global behavior/styles.

-pages/index.js
Purpose: The app’s main page (root route /). Contains the calculator UI/logic (or placeholder) for the application. Required (or another page route) to serve content.

-styles/globals.css
Purpose: Global CSS applied across the app. Imported in _app.js to apply baseline styles. Helpful but optional if using CSS-in-JS.