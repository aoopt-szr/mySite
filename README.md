# mySite - Nuxt 3 Project

A modern Nuxt 3 application with content management capabilities.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

- `app/` - Application code
  - `pages/` - Vue page components (auto-routed)
  - `components/` - Reusable Vue components
  - `composables/` - Composable functions for shared logic
  - `data/` - Centralized data sources (single source of truth)
  - `types/` - TypeScript type definitions and interfaces
  - `layouts/` - Layout templates
- `content/` - Markdown content files
- `public/` - Static assets
- `nuxt.config.ts` - Nuxt configuration

## Data Architecture

### Parks Data
The project uses a centralized data approach for parks information:

- **Single Source of Truth**: `app/data/parksData.ts` contains all 28 parks with both tourism and volunteer URLs
- **Type Safety**: `app/types/park.ts` defines `Park` (for display) and `ParkData` (for storage) interfaces
- **Specialized Composables**: 
  - `useTourismParks()` - Returns parks with tourism URLs
  - `useVolunteerParks()` - Returns parks with volunteer URLs
  
This architecture follows DRY principles, prevents data duplication, and makes updates easier (change once, reflect everywhere).

## Tech Stack

- Nuxt 4.2.1
- Vue 3.5.25
- TypeScript
- @nuxt/content
- @nuxt/studio
- better-sqlite3
