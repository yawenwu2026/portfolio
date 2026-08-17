// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { createCaseStudyFigurePlugin } from './src/lib/case-study-figure.mjs';

import mdx from '@astrojs/mdx';

// Deployed as a GitHub Pages project site (yawenwu2026/portfolio), which
// GitHub serves at /portfolio/ under the account's github.io domain, not
// at domain root — hence `base`. CF_PAGES_URL stays as a fallback for a
// Cloudflare Pages preview build, where the site sits at domain root and
// `base` would be wrong, so it's only applied when that env var is unset.
const base = process.env.CF_PAGES_URL ? "/" : "/portfolio";

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || "https://yawenwu2026.github.io",
  base,

  markdown: {
    processor: satteri({
      mdastPlugins: [createCaseStudyFigurePlugin(base)],
    }),
  },

  integrations: [mdx()],
});