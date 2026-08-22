# Full-Stack Todo Application with Strapi & React

A full-stack task management application comprising a React Vite frontend and a Strapi CMS backend.

## Overview

This repository contains both the client-side task interface and the headless CMS service:
- **Frontend (`/`)**: React 18 single-page application built with Vite and Supabase integration.
- **Backend (`/todolist`)**: Strapi headless CMS service providing REST API endpoints for task CRUD operations.

## Tech Stack

- **Frontend**: React 18, [Vite](https://vitejs.dev/)
- **Backend**: [Strapi](https://strapi.io/) CMS (Node.js)
- **Database/Cloud**: SQLite / PostgreSQL, `@supabase/supabase-js`

## Prerequisites

- Node.js (v16 or v18 recommended)
- Package manager (`pnpm`, `yarn`, or `npm`)

## Getting Started

### 1. Running the Strapi Backend

```bash
cd todolist
yarn install # or npm install
yarn develop # or npm run develop
```
The Strapi admin panel will be accessible at `http://localhost:1337/admin`.

### 2. Running the React Frontend

In a separate terminal from the root folder:
```bash
pnpm install # or npm install
pnpm dev     # or npm run dev
```
The frontend application will be running at `http://localhost:3000` (or `http://localhost:5173`).

## Available Scripts

### Root (Frontend)
- `pnpm dev` - Starts the Vite dev server for the React app.
- `pnpm build` - Builds production static files.
- `pnpm preview` - Previews the built frontend.

### Backend (`/todolist`)
- `yarn develop` - Starts Strapi in development mode with auto-reload.
- `yarn build` - Builds the Strapi admin interface.
- `yarn start` - Starts Strapi in production mode.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).
