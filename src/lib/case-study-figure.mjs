// Converts the `![alt](src)` + `*caption*` Markdown pattern used throughout
// case study body content into a semantic <figure>/<figcaption>, lazy loaded
// by default. Lets case study authors write plain Markdown images without
// having to hand-write HTML for every figure.
//
// Output mirrors src/components/Figure.astro (class="figure", data-mode,
// data-full-bleed) so both render identically via the shared rules in
// global.css. Plain Markdown has no syntax for the Figure props, so it always
// gets Figure's defaults: mode "contain", full bleed.
//
// Images whose filename matches WIDE_DIAGRAM_NAMES get the tap-to-expand
// treatment instead (src/components/WideDiagram.astro), because these two
// case studies are plain .md and never instantiate that component directly.
// The markup here must stay in sync with WideDiagram.astro's template — the
// shared open/close script in CaseStudy.astro drives both by CSS hook, not
// by which one actually rendered them.

const WIDE_DIAGRAM_NAMES = new Set([
  "tram-01-current-flow",
  "tram-03-competitive-analysis",
  "tram-04-information-architecture",
  "navi-03-user-research",
  "navi-04-requirement-analysis",
  "navi-05-information-architecture",
  "navi-07-analytics",
]);

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function isWideDiagram(src) {
  const filename = src.split("/").pop() ?? "";
  const name = filename.replace(/\.[^.]+$/, "");
  return WIDE_DIAGRAM_NAMES.has(name);
}

function renderFigure(src, alt, figcaption) {
  return `<figure class="figure" data-mode="contain" data-full-bleed="true"><img src="${src}" alt="${alt}" loading="lazy" data-fade />${figcaption}</figure>`;
}

function renderWideDiagram(src, alt, captionText) {
  const figcaption = captionText ? `<figcaption>${escapeHtml(captionText)}</figcaption>` : "";
  return `<figure class="wide-diagram" data-wide-diagram>
<button type="button" class="wide-diagram__trigger" data-wide-trigger aria-haspopup="dialog">
<img src="${src}" alt="${alt}" loading="lazy" data-fade />
<span class="wide-diagram__hint">Tap to enlarge</span>
</button>
${figcaption}
<dialog class="wide-diagram__dialog" data-wide-dialog aria-label="${alt}">
<button type="button" class="wide-diagram__close" data-wide-close aria-label="Close enlarged image">&times;</button>
<div class="wide-diagram__scroll"><img src="${src}" alt="${alt}" /></div>
</dialog>
</figure>`;
}

// `base` mirrors astro.config.mjs's own `base` (e.g. "/portfolio") — this
// plugin runs as a remark step at build time, outside Vite, so it has no
// access to `import.meta.env.BASE_URL` the way .astro components do (see
// src/lib/site.ts's withBase) and needs the value passed in directly.
export function createCaseStudyFigurePlugin(base = "") {
  const prefix = base.replace(/\/$/, "");
  const withBase = (src) => (src.startsWith("/") ? `${prefix}${src}` : src);

  return {
    name: "case-study-figure",
    paragraph(node) {
      const children = node.children;
      const isImageWithCaption =
        children.length === 3 &&
        children[0].type === "image" &&
        children[1].type === "text" &&
        children[1].value.trim() === "" &&
        children[2].type === "emphasis";
      const isImageOnly = children.length === 1 && children[0].type === "image";

      if (!isImageWithCaption && !isImageOnly) {
        return;
      }

      const image = children[0];
      const alt = escapeAttr(image.alt ?? "");
      const src = escapeAttr(withBase(image.url ?? ""));

      let captionText = "";
      if (isImageWithCaption) {
        captionText = children[2].children
          .filter((child) => child.type === "text")
          .map((child) => child.value)
          .join("");
      }

      if (isWideDiagram(image.url ?? "")) {
        return { rawHtml: renderWideDiagram(src, alt, captionText) };
      }

      const figcaption = captionText ? `<figcaption>${escapeHtml(captionText)}</figcaption>` : "";
      return { rawHtml: renderFigure(src, alt, figcaption) };
    },
  };
}
