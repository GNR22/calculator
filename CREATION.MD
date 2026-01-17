# 🧮 Calculator Project (Monorepo)

**Framework:** Next.js  
**Project Manager:** Turborepo

## 1️⃣ Creation of the Calculator Project

This project was initialized as a monorepo using **Turborepo** to manage the Next.js application and shared UI packages.

### Steps Taken:
1.  **Initialization:** Started a Turborepo using `npm` as the package manager:
    ```bash
    npx create-turbo@latest
    ```
2.  **Structure:** This resulted in the following directory structure:
    ```text
    my-turborepo/
    ├── apps/
    │   └── calculator/      # Next.js app created here
    ├── packages/
    │   └── ui/              # Shared UI package (reusable components)
    ├── turbo.json
    └── package.json
    ```
3.  **Development:**
    * Created a Next.js app inside the `apps/` folder named `calculator`.
    * Created a shared UI package inside `packages/ui` to store reusable components like `Button`.
    * Built the calculator UI using **React state** to handle:
        * Digits
        * Operations (`+`, `-`, `*`, `/`)
        * Decimal input
        * Clear and Equals functionality

---

## 2️⃣ Errors Encountered and Fixes

During the setup process, the following errors were encountered and resolved:

| Error | Cause | Fix |
| :--- | :--- | :--- |
| **EADDRINUSE: address already in use :::3000** | Multiple apps (web and calculator) tried to run on the same default port. | Changed `apps/calculator/package.json` dev script to run on port **3002** (or another free port). |
| **Module not found: Can't resolve 'ui/button'** | The Turborepo UI package is namespaced as `@repo/ui`. | Changed import in calculator to: `import { Button } from '@repo/ui/button'` |
| **Invalid source map. Only conformant source maps can be used** | Windows path issue / Next.js internal warning. | **Harmless**, can be ignored. |

---

## 3️⃣ File Structure and Purpose

### 📂 Turborepo Root
* **`package.json`**: Defines workspaces, root scripts (dev, build, start), and devDependencies (Turbo).
* **`pnpm-workspace.yaml`**: (If using pnpm) Defines packages in the workspace (`apps/*`, `packages/*`).
* **`turbo.json`**: Turborepo pipeline configuration (handles caching and dependency execution).

### 📱 Calculator App (`apps/calculator`)
* **`package.json`**: App-specific dependencies (`next`, `react`, `react-dom`, `@repo/ui`) and dev scripts.
* **`next.config.js`**: Next.js configuration (e.g., `reactStrictMode`).
* **`pages/_app.js`**: Global wrapper for Next.js pages (loads global CSS).
* **`pages/index.js`**: Main calculator page; contains the calculator UI and logic.
* **`styles/globals.css`**: Global styling (body, buttons, fonts).

### 📦 Shared UI Package (`packages/ui`)
* **`package.json`**: Package name (`@repo/ui`), exports, TypeScript, ESLint configs, and devDependencies.
* **`src/button.tsx`**: Reusable Button component exported for the calculator and other apps.

---

## 4️⃣ Workflow Recap & How to Run

The **Turborepo root** manages multiple apps and shared packages efficiently. The **Calculator app** imports the reusable `Button` component from `@repo/ui/button`.

### How to run the calculator app in my-turborepo

**1. Install Dependencies**
Make sure you have installed all dependencies. If you haven't done so yet, run:
```bash
npm install



If you want to use turbo directly in the shell:
npm install -g turbo

2. RUN 
Start Development Server To run the calculator app, navigate to the folder and run the dev script:
cd my-turborepo
npm run dev

or 

Install first npm install -g turbo
cd my-turborepo
turbo run dev


Check Terminal Now in the terminal, there should be calculator#dev in the task column. 
(Note: web#dev and docs#dev are on different ports, you can ignore them. Just go to calculator#dev).

Result
Probably the local and network localhost should look like this:
Local: http://localhost:3002/
Network: http://10.86.241.127:3002/