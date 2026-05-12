# PNOW Healthcare

Modern healthcare marketing site built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com). The landing page is pre-styled with motion-rich hero, services highlights, compliance/security messaging, specialty callouts, trust indicators, and a contact CTA wired to Airtable.

## Overview

- Purpose-built for healthcare marketing teams that need a polished lead-gen site with strong compliance positioning.
- Interactive hero with stat cards and floating icons, services grid, process timeline, security/compliance proof points, client trust section, specialty coverage, and footer contact entry point.
- Contact form posts to Airtable through an API route with basic validation, trimming, and error handling; front-end uses React Hook Form + Zod for client-side safety.
- Uses framer-motion for subtle motion, lucide-react for iconography, and shared design tokens in Tailwind for consistent theming.

## Prerequisites

- Node.js 18.18+ (Next.js 16 requirement) and npm 9+.
- Airtable base/table with columns: `First Name`, `Last Name`, `Email`, `Phone` (optional), `Message`, `Submitted At`.

## Setup

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

Create `/.env.local` with:

```
AIRTABLE_ACCESS_TOKEN=your_token
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_CONTACT_TABLE=Contact Requests
```

Restart the dev server after adding or changing environment variables.

## Scripts

- `npm run dev` – start Next.js in development mode.
- `npm run build` – production build.
- `npm run start` – run the built app.
- `npm run lint` – ESLint with Next.js core web vitals config.

## Project Structure

- `src/app` – App Router routes, layouts, and global styles.
- `src/components/pages/home-page.tsx` – page composition that stitches all sections together.
- `src/components/sections/*` – hero, services, process, security/compliance, trust, specialties, CTA, and layout primitives (navbar/footer).
- `src/data/*` – content and copy blocks for the sections.
- `src/app/api/contact/route.ts` – Airtable-backed contact endpoint; checks required fields and returns JSON responses.
- `src/lib` – shared helpers (e.g., form payload typing/validation, utility functions).
- `public` – static assets (favicons, imagery).

## Working with shadcn/ui

- Component registry is defined in `components.json`; Tailwind tokens live in `tailwind.config.ts` and `src/app/globals.css`.
- Generate more primitives with:

  ```bash
  npx shadcn@latest add <component-name>
  ```

- Shared utilities such as `cn()` live in `src/lib/utils.ts`; UI components render from `src/components/ui`.

## Deployment

Deploy to Vercel or any Next.js-compatible host. Ensure the Airtable environment variables are set. Add `NEXT_TELEMETRY_DISABLED=1` in CI if you prefer to disable telemetry.
