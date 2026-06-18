<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->
# Copilot instructions — angular-bases

This repository is a small Angular (v18) application. The guidance below extracts the minimal, actionable knowledge an AI coding agent needs to be productive here.

- **Project entry points:**  `src/main.ts` (bootstrap), `src/index.html`, `src/styles.css`.
- **Angular config:** `angular.json` defines `build`, `serve` and `test` targets. Assets come from the `public/` folder (see `angular.json > projects.bases.architect.build.options.assets`).
- **Dev / build / test commands:** use the npm scripts in `package.json`:
  - `npm start` → `ng serve` (development server)
  - `npm run build` → production build
  - `npm test` → runs Karma/Jasmine tests

- **High-level architecture:**
  - Root module: `src/app/app.module.ts` — bootstraps `AppComponent` and imports feature modules.
  - Feature modules: `src/app/counter/counter.module.ts`, `src/app/heroes/hero.module.ts`.
  - Components live inside their feature folders (e.g. `src/app/counter/components/counter/counter.component.ts`, `src/app/heroes/hero/hero.component.ts`).
  - The app follows non-standalone, module-based components (schematics set `standalone: false`).

- **Common patterns and conventions to follow:**
  - Add new features as Angular modules under `src/app/` (follow the same naming + file layout as `counter` and `heroes`).
  - Keep component CSS/HTML/TS together in the same folder for that component (see existing components).
  - Do not convert components to standalone without an explicit repo-wide decision — schematics and code expect module-scoped components.

- **Testing:**
  - Unit tests use Karma + Jasmine. Look for `*.spec.ts` files next to components (for example `src/app/heroes/list/list.component.spec.ts`).
  - Run `npm test` to run the suite; add tests adjacent to changed components.

- **Assets and static files:** static assets are stored in `public/` and are configured in `angular.json`. When adding images or icons, place them in `public/` and reference them from templates or `index.html`.

- **Important files to reference when changing behavior:**
  - `package.json` — npm scripts and dependency versions (Angular 18, TypeScript ~5.4).
  - `angular.json` — build/serve/test configuration, `tsConfig` references and asset pipeline.
  - `tsconfig.app.json` / `tsconfig.spec.json` — compilation/test settings.
  - `src/app/app.module.ts` — imports and module wiring.

- **Quick examples:**
  - To add a new feature module `foo`: create `src/app/foo/foo.module.ts`, add `src/app/foo/components/<name>.*` and then import `FooModule` in `app.module.ts`.
  - To run locally: `npm install` then `npm start`.

- **What not to change without confirmation:**
  - `angular.json` project-level builders or `tsconfig.*` unless a build/test failure requires it.
  - Converting to standalone components or changing the schematics defaults without discussion.

If something in this file is unclear or you want more examples (tests to update, a PR template, or commit message conventions), tell me which area to expand.  
