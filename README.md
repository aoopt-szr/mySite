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

## Serena Integration

This project is configured to work with [Serena](https://github.com/oraios/serena) - an AI coding agent toolkit.

### Configuration
- `.serena/config.toml` - Serena project settings
- `.serena/onboarding.md` - Project overview for AI agents

### Using Serena
Serena provides semantic code analysis and editing capabilities through:
- Symbol-level navigation and editing
- Intelligent code search and refactoring
- Memory system for maintaining context across sessions

The configuration automatically excludes `node_modules`, `.nuxt`, and build artifacts from analysis.

## Project Structure

- `app/` - Application code
  - `pages/` - Vue page components (auto-routed)
- `content/` - Markdown content files
- `public/` - Static assets
- `nuxt.config.ts` - Nuxt configuration

## Tech Stack

- Nuxt 4.2.1
- Vue 3.5.25
- TypeScript
- @nuxt/content
- better-sqlite3
