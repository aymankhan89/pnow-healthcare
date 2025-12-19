# PNOW Healthcare

Modern healthcare marketing site built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com). The project ships with a pre-styled landing page, shared design tokens, and a growing UI kit so you can focus on product content instead of plumbing.

## Stack

- Next.js 16 + React 19 with the App Router
- TypeScript with strict mode
- Tailwind CSS 3.4 + PostCSS + CSS variables for theming
- shadcn/ui components (Button, Badge, Card pre-installed) with `@/lib/utils` helper

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start the local dev server on http://localhost:3000
npm run lint       # run ESLint (core web vitals config)
npm run build      # production build
```

### Environment Variables

The contact form posts directly to Airtable. Copy `.env.example` to `.env.local` and provide your credentials:

```bash
cp .env.example .env.local
```

- `AIRTABLE_ACCESS_TOKEN` – personal access token with write access to your base.
- `AIRTABLE_BASE_ID` – Airtable base ID (starts with `app`).
- `AIRTABLE_CONTACT_TABLE` – table ID or name that contains the `First Name`, `Last Name`, `Email`, `Phone`, `Message`, and `Submitted At` columns.

Restart the dev server after updating environment variables so Next.js can pick them up.

## Working with shadcn/ui

- Configuration lives in `components.json`. Tailwind tokens are defined in `tailwind.config.ts` and `src/app/globals.css`.
- Generate additional components any time with:

  ```bash
  npx shadcn@latest add <component-name>
  ```

- Shared utilities such as `cn()` live in `src/lib/utils.ts`, and components render from `src/components/ui`.

## Project Structure

- `src/app` – App Router routes, layouts, and global styles.
- `src/components/ui` – shadcn/ui primitives you can compose into higher-level components.
- `src/lib` – shared helpers.
- `public` – static assets (favicons, illustrations, etc.).

## Deployment

The app works out of the box on Vercel or any Next.js-compatible host. Set `NEXT_TELEMETRY_DISABLED=1` if you prefer to disable telemetry in CI/CD.
