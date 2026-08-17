# Yawen Wu — Portfolio

Personal UX/UI portfolio site. Astro 7, TypeScript, vanilla CSS with design tokens (`src/styles/tokens.css`). No CSS framework.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deploying to Cloudflare Pages

- **Build command:** `npm run build`
- **Output directory:** `dist`

No adapter or extra config is needed — this is a fully static site (Astro's default `output: "static"`), so Cloudflare Pages can build and serve it directly from the repo.

## Content

Case studies live in `src/content/work/*.md` / `*.mdx`, one file per project, validated against the schema in `src/content.config.ts`. Add a new case study by adding a file there plus its images under `public/images/<slug>/`.

## Design tokens

All colour, type, spacing, and radius values live in `src/styles/tokens.css`. Components reference tokens only — see the comment block at the top of that file for the current source and rationale.
