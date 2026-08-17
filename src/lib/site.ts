export const WORDMARK = "Yawen Wu";
export const EMAIL = "yawenwu77@gmail.com";
export const MAILTO_HREF = `mailto:${EMAIL}`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/yawenwu2016/";

/* GitHub Pages serves this site from /portfolio/, not domain root (see
   astro.config.mjs `base`), so every root-relative path — nav links,
   image src, og:image — needs that prefix or it 404s in production.
   Astro doesn't rewrite hardcoded string literals for `base`, only
   paths it generates itself, so call sites route through here instead
   of writing "/..." directly. Pass a path starting with "/". */
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
