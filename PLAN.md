# Agents Input

This file contains all input for the AI agent to help build out the infographic.
Consider it a "meta prompt" to persist between sessions.
The file will have been edited by AI agents in previous sessions, thus having a bigger 'loop'.

You should be on a specific git branch to do work, never on `main`.
You may never risky git operations like pushing, purely local work on your own branch is allowed.

## Target result

The end result will be a dynamic Infographic repository.
Constraints:

1. This repository should be deployable to GitHub pages as is - no build pipeline.
2. It should also be easily viewable on a local machine, with a lightweight `npx serve .` command.
3. There should be near-zero dependencies, only zero or a tiny number of (version-pinned) cdnjs dependencies are acceptable.
   Great reasons to choose a dependency after all include: (1) a tiny templating engine to keep sections data-driven, (2) a tool to make things beautiful (but do also remember to use modern CSS where possible).
4. A simple setup is strongly preferred, with as few files as possible.
5. It should be absolutely beautiful: one single specific style (light mode). Bespoke and unique, but functional.
6. The user printing or exporting to PDF should get a great experience: turning this infographic into a custom huge poster print (A1 for example) should be trivial.
7. Progressive tweaks for screen media (like subtle animations, parallax effects, background animations) are allowed if they don't interfere with print.
8. Things should be data-driven. Adding new entries to data (see below) in the future should automatically update the infographic. Ideally a human tweaking some data in GitHub web editors should be feasible.
9. Never manipulate data contents, only form might be tweaked. New or updated data comes from human operators always. If the data or its format are problematic: consult your human operator.
10. Data should be in a structured format like yml, json, or otherwise: something both good for humans and editability, and for using for our data-driven approach.

## Data

Data sits in [/data](/data).
**Rule for `.js` files there: never silently fix typos or reword definitions, even obvious ones — flag them to the human operator instead.**

## Backlog

Items in suggested work order.
If reasonable put the entire backlog item in one change set, pause for human review before committing.

### Self-host fonts

Confirmed with the human operator: separate `.woff2` files in a new `fonts/` directory, referenced via relative `@font-face url()` paths (works under `file://` since it's a same-origin relative path, unlike `fetch()`).

All three families (Barlow Condensed, IBM Plex Sans, IBM Plex Mono) are Google Fonts, licensed under the SIL Open Font License (OFL) — embedding and redistribution is explicitly allowed, no attribution file legally required (though crediting in the colophon is a nice touch, optional).

Weights actually used today (from the current Google Fonts `<link>` in `index.html`): Barlow Condensed 500/600/700, IBM Plex Sans 400/500/600, IBM Plex Mono 400/500/600 — 9 files total if downloading only static weights used.

**Action for the human operator**: download the 9 `.woff2` files, e.g. via `google-webfonts-helper` (gwfh.mranftl.com/fonts) or Google Fonts' own per-family download + a woff2 converter, and drop them in a new `fonts/` folder using a predictable naming scheme (e.g. `barlow-condensed-600.woff2`).
Can be done any time, independent of session ordering.

Implementation (once files exist):
- Add `@font-face` rules to `css/style.css` for all 9 files, `font-display: swap`.
- Remove the two Google Fonts `<link rel="preconnect">` tags and the `fonts.googleapis.com` stylesheet `<link>` from `index.html`.
- Verify rendering is pixel-identical (or acceptably close) to the Google Fonts version, and that opening via `file://` still loads the fonts (no CORS issue expected for local relative paths, but confirm).

### License + trademark/logo disclaimer

Confirmed with the human operator: content under **CC BY-SA 4.0**, code (HTML/CSS/JS in this repo) under a separate permissive license — **MIT**.

- Add a top-level `LICENSE` file (MIT, for the code) and either a `LICENSE-CONTENT` file or a clearly-labelled section in `README.md` for the CC BY-SA 4.0 content license (data in `js/data.js`/`DATA.md`, the rendered infographic itself).
- Add a short disclaimer near the license notice (colophon footer is the natural spot, or README) making clear: (a) this work is licensed CC BY-SA 4.0 — adaptations must attribute and are not endorsed by the original author; (b) company/product names referenced are trademarks of their respective owners; (c) any logos added (see #8) are used under their respective owners' guidelines/licenses, not covered by this repo's license.
- Draft the exact wording and put it up for human review before committing — this is legal-adjacent text, don't invent final copy unilaterally even though the license choice itself is now confirmed.
- Decide whether the colophon footer needs a visible license line (e.g. "CC BY-SA 4.0 · trademarks belong to their owners") or whether a link/footnote to a fuller README section is enough given how tight the footer already is.

### Company/tool logos

Confirmed with the human operator: vendor/company logos only (not per-product) in the Development Tools section (03) — same decision applies naturally to Labs (01, already company-level) and Inference Providers (02, mostly company-level already).

**Data format change** (allowed — AGENTS.md permits form changes, not content changes): add a `key` field per lab/provider/tool-vendor in `js/data.js` (kebab-case slug, e.g. `"openai"`, `"z-ai"`), used to look up `logos/<key>.png` (or `.svg`).
This does not change any human-readable content, only adds a lookup field — should be safe to do without flagging as a content change, but call it out explicitly in the commit message anyway since it touches every entry in three data sections.

- Render an `<img>` per card/chip when a `key` is present, `loading="lazy"`, small fixed square size (e.g. 20-24px), with an `onerror` handler that hides the broken image (`this.style.display='none'` or toggle a `hidden` attribute) so a missing logo file degrades to today's text-only look, not a broken-image icon.
- Ship a couple of inline placeholder SVGs (e.g. a simple monogram/square) as the initial `logos/*.png` content so the layout can be reviewed before real logos exist, per PLAN's existing "tiny SVGs as placeholders" guidance.
- Consider a small `scripts/list-logo-keys.js` (run with plain `node`, not a build step) that walks `js/data.js` and prints every unique `key` currently referenced — keeps the "logos still needed" list in sync with data forever, instead of a hand-written list that goes stale the next time DATA.md grows.

**Logo checklist for the human operator to source** (generated from current `js/data.js`, vendor-level per the decision above — this list *will* go stale as data changes, regenerate via the script above once it exists):

Labs / companies (also covers most of Inference Providers' hyperscalers):
SpaceXAI, Anthropic, Google, OpenAI, Microsoft, Amazon, Meta, NVIDIA, Mistral, Alibaba, DeepSeek, MiniMax, Z.ai, Moonshot, Xiaomi.

Additional inference providers/routers (not already labs):
Cloudflare (Workers AI), Groq, Cerebras, Fireworks AI, Together AI, DeepInfra, SiliconFlow, Hugging Face, OpenRouter, LiteLLM, OpenCode Zen.

Additional dev-tool vendors (not already labs):
GitHub, JetBrains, Cline Bot Inc., Cognition, Zed Industries, ByteDance, Replit, StackBlitz, Lovable, Wix, Vercel, Anomaly.

Data oddity noted: Aider's vendor is "open source" (not a logo-able company — recommend no logo/placeholder for that one row, confirm with human operator).

## Design decisions

Recorded design decisions (tiny lightweight alternative to ADR's):

- **Style**: single fixed-width (1440px max) poster card, based on a Claude Design mockup — Barlow Condensed (headers) + IBM Plex Sans (body) + IBM Plex Mono (labels), oklch color tokens per section, one light theme, no dark mode (prints beautifully without color-scheme overrides).
- **Data loading**: data lives in `js/data.js` as plain object literals assigned to `window.DATA.<section>` (JSON-shaped, human-editable), loaded via a `<script src defer>` tag rather than `fetch()`.
  This is required for the "open index.html directly via file://" constraint — `fetch()` of local JSON is blocked by CORS under `file://` in most browsers, but `<script src>` is not.
- **Rendering**: hand-written vanilla JS render functions per section (no generic templating engine) generating HTML/inline SVG.
  Each section's visualization is bespoke per PLAN.md, so a generic template engine added indirection without reducing code.
- **Color**: categorical palette and roles follow the `dataviz` skill's validated default palette (`references/palette.md`), light-mode slots only.
- **Secondary models**: always shown in Labs & Models (no toggle) — changed 2026-09-06 per human operator during visual review; DATA.md § "Labs and Models" still documents the old "hidden until the user decides to show them" behavior and needs a matching update, flagged for the human operator rather than edited unilaterally.
- **Labs/provider grid layout**: flexbox with per-card borders, not CSS-grid-with-background-gap, because the grid-gap trick leaves a solid placeholder box in the last row whenever a group's item count isn't a multiple of the column count (e.g. Europe's single Mistral card).
  See backlog #3 above for a related but distinct row-height defect.
- **"Rendered at" timestamp**: replaced "Edition" label with a per-page-load `Rendered at YYYY-MM-DD HH:MM UTC` string (2026-09-06); `.edition` CSS class switched from the large Barlow Condensed display treatment to the small `--font-mono` label treatment (matches `.counts`/`.colophon`) since the longer string didn't fit the old display size.
  `#counts` (labs/model-family totals) kept in place under it, not moved — no strong reason surfaced to relocate it.
- **Type scale**: raised the smallest text tier (2026-09-06), human operator picked "Option A" (moderate) over a larger alternative after reviewing screenshots — 8px→9px, 10px→11.5px, 10.5px→12px, 11px→12.5px, 11.5px→13px, same ratios preserved, no layout breakage in Labs & Models or Terminology & Theory.
  No separate print type scale exists, so this raise applies to print too — desired, since a wall-poster print (target result #6) wants larger minimums, not smaller.
