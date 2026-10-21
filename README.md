# Todo List with Strapi

A React and Vite front end and a Strapi backend for a to-do list. Only the project setup is in place. The task screens and the task API are not built yet.

**Status:** Stub. The React app is the unchanged Vite starter, and the Strapi backend has default configuration with no content types or API code.

## The problem

The original README describes a task manager with a React interface and a Strapi CMS backend that exposes task CRUD endpoints. The code does not contain that yet. This repo is the scaffold for it.

## What it does

- The frontend renders the default Vite and React starter page from `src/App.jsx`.
- `src/supabase.js` creates a Supabase client for a hardcoded project URL, with the anon key read from `VITE_SUPABASE_ANON_KEY`. Nothing imports it yet.
- The `todolist` folder is a Strapi project with default config files for admin, API, database, middlewares and server, plus an example `.env`.

## How it's built

- Frontend: React 18 with Vite 2 and `@vitejs/plugin-react`.
- Backend: Strapi, configured in `todolist/config`. The `todolist/src/api` folder is empty, so no content types have been defined.
- Data access: `@supabase/supabase-js` is listed as a dependency, but the app does not use it yet.

## Running it locally

Backend:

```bash
cd todolist
yarn install   # or: npm install
yarn develop   # or: npm run develop
```

Frontend, in another terminal from the repo root:

```bash
pnpm install   # or: npm install
pnpm dev       # or: npm run dev
```

The frontend reads `VITE_SUPABASE_ANON_KEY` from the environment, so set it in a local `.env` file before using `src/supabase.js`.

## What's left

- No task screens, forms or lists exist in the frontend.
- No Strapi content types or API routes are defined. The original README described task CRUD endpoints that are not in the code.
- The Supabase client is not used. The original README mentioned both Strapi and Supabase without saying how they connect.
- The anon key was previously committed as a literal in `src/supabase.js`. It is now read from the environment. Because it stays in git history, rotate it in Supabase if it is still in use.
- There are no tests.
