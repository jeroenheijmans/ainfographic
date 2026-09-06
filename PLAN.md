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

### 1. Script loading — DONE

All `<script src>` tags in `index.html` now carry `defer` (data, app, and all section scripts).
Order preserved: `js/data.js`, then `js/app.js`, then the nine `js/sections/*.js`, so the `app.js`-before-`sections` and `DATA`-before-`init()` dependencies still hold.
The nine former `data/*.js` files were merged into one `js/data.js` (content unchanged, just concatenated); the `data/` directory was removed.

### 2. Invert background

Confirmed with the human operator: outer page becomes pure white (`oklch(1 0 0)`), poster keeps its current on-screen drop-shadow/border (print already strips those).
Currently `--paper` (oklch(0.93 ...), warm grey) is the `body`/`.page` background and `--card` (oklch(0.99 ..., near-white) is the `.poster` background *and* every inner card's background — i.e. cards currently blend flush into the poster.

- Swap: `body`/`.page` background → new pure-white token (e.g. `--page-bg: oklch(1 0 0)`); `.poster` background → today's `--paper` value.
- Leave `--card`/`--card-tint` (inner cards, chips, tinted zones) as-is — at oklch(0.99) they'll now sit *lighter* than the poster's oklch(0.93) background, which should read as cards floating on the poster (an improvement over today's flush blend, not just a swap).
- Re-check every section's accent tints (`--card-tint`, the per-section hue washes like `.tools-panel` at oklch(0.97), `.inference-panel` at oklch(0.96)) still have enough contrast against the new darker poster background — those values were tuned against the old near-white poster.
- Re-verify print: printed output should now be near-identical to screen (poster background was already closer to paper-white in spirit; confirm the `@media print` overrides don't need adjusting).
- Screenshot both screen (desktop + mobile) and a `page.pdf()` export before committing.

### 3. Responsiveness pass

Baseline is better than expected: `css/style.css` already has ~15 `@media` breakpoints, and a live check at 420px and 1500px in a running `localhost:3000` showed single-column stacking, header wrapping, and footer wrapping all working correctly already.

**Real bug found while checking this** (unrelated to shrinking, present at both 700px and 1500px): in `.lab-grid` / `.provider-grid`, cards are laid out in rows (flexbox/grid), and every card in a row stretches to match the *tallest* card in that row.
A lab with 1-2 models (e.g. SpaceXAI, Microsoft, Meta) sitting next to a lab with 8 models (e.g. Anthropic, OpenAI) ends up with a large empty space at the bottom of the short card.
This happens at every width, not just narrow ones — worth fixing as part of this pass since it's the most visually obvious layout defect found.
Likely fix: `align-items: start` (or a masonry-style layout) so each card sizes to its own content instead of its row's tallest sibling.

Remaining verification (not yet checked, do during this milestone):
- Mid-range widths (480px, 600px, 900px, 1024px, 1200px) for: provider grid, tools grid, terminology multi-column text (`columns: 3/2/1` breakpoints at 1100/800/500px), initiatives card grid, title-block stacking point.
- No horizontal scrollbar/overflow at any width from ~320px up.
- Confirm behavior doesn't regress once #2's background swap and #9's type scale land (do this pass after both, or re-check after).

### 4. "Rendered at" timestamp

`js/app.js` currently sets `"Edition " + new Date().toISOString().slice(0, 7).replace("-", ".")` (e.g. "Edition 2026.09") into `#edition` and `#colophon-edition`.

- Relabel to "Rendered at", format as an ISO-8601 UTC timestamp to the minute (e.g. `2026-09-05 18:24 UTC`) — `new Date().toISOString().slice(0, 16)` gives `2026-09-05T18:24`, swap the `T` for a space and append `UTC`.
- This is dynamic per page-load, not per "edition" of the data anymore — consider whether the `#counts` line (labs/model-family totals) should move or stay put now that "edition" framing is gone.
  Not a blocker, just note the copy no longer says "edition" anywhere so make sure nothing else references that word.
- Style: reuse the existing mono label treatment (`--font-mono`, the current `.edition` CSS class) rather than inventing new styling; just adjust for the longer string.

### 5. External link target

Two links point to `https://jeroenheijmans.nl` (`.byline` in the title block, and the colophon footer link).
Add `target="_blank" rel="noopener noreferrer"` to both.

### 6. Self-host fonts

Confirmed with the human operator: separate `.woff2` files in a new `fonts/` directory, referenced via relative `@font-face url()` paths (works under `file://` since it's a same-origin relative path, unlike `fetch()`).

All three families (Barlow Condensed, IBM Plex Sans, IBM Plex Mono) are Google Fonts, licensed under the SIL Open Font License (OFL) — embedding and redistribution is explicitly allowed, no attribution file legally required (though crediting in the colophon is a nice touch, optional).

Weights actually used today (from the current Google Fonts `<link>` in `index.html`): Barlow Condensed 500/600/700, IBM Plex Sans 400/500/600, IBM Plex Mono 400/500/600 — 9 files total if downloading only static weights used.

**Action for the human operator**: download the 9 `.woff2` files, e.g. via `google-webfonts-helper` (gwfh.mranftl.com/fonts) or Google Fonts' own per-family download + a woff2 converter, and drop them in a new `fonts/` folder using a predictable naming scheme (e.g. `barlow-condensed-600.woff2`).
Can be done any time, independent of session ordering.

Implementation (once files exist):
- Add `@font-face` rules to `css/style.css` for all 9 files, `font-display: swap`.
- Remove the two Google Fonts `<link rel="preconnect">` tags and the `fonts.googleapis.com` stylesheet `<link>` from `index.html`.
- Verify rendering is pixel-identical (or acceptably close) to the Google Fonts version, and that opening via `file://` still loads the fonts (no CORS issue expected for local relative paths, but confirm).

### 7. License + trademark/logo disclaimer

Confirmed with the human operator: content under **CC BY-SA 4.0**, code (HTML/CSS/JS in this repo) under a separate permissive license — **MIT**.

- Add a top-level `LICENSE` file (MIT, for the code) and either a `LICENSE-CONTENT` file or a clearly-labelled section in `README.md` for the CC BY-SA 4.0 content license (data in `js/data.js`/`DATA.md`, the rendered infographic itself).
- Add a short disclaimer near the license notice (colophon footer is the natural spot, or README) making clear: (a) this work is licensed CC BY-SA 4.0 — adaptations must attribute and are not endorsed by the original author; (b) company/product names referenced are trademarks of their respective owners; (c) any logos added (see #8) are used under their respective owners' guidelines/licenses, not covered by this repo's license.
- Draft the exact wording and put it up for human review before committing — this is legal-adjacent text, don't invent final copy unilaterally even though the license choice itself is now confirmed.
- Decide whether the colophon footer needs a visible license line (e.g. "CC BY-SA 4.0 · trademarks belong to their owners") or whether a link/footnote to a fuller README section is enough given how tight the footer already is.

### 8. Company/tool logos

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

### 9. Type scale / accessibility pass

Smallest text sizes today: 10px (several chip/meta labels), 10.5px (a few notes/footnotes), 11-11.5px (several more labels) — genuinely small for both low-vision and general legibility, especially on a dense reference poster.

This is explicitly **not a single-shot fix** — per the human operator, this needs iteration with visual review before committing.
Suggested approach for whichever session picks this up:
- Propose 1-2 revised type scales (e.g. raise the 10-10.5px tier to ~12px minimum, keep the ratio between tiers) and produce before/after screenshots of at least one dense section (Labs & Models or Terminology) at both screen and print sizes.
- Print and screen may reasonably diverge here: print can tolerate smaller point sizes than screen since viewing distance differs, but a poster meant to be read on a wall (target result #6, A1-scale print) argues for *larger* minimums, not smaller — worth surfacing explicitly to the human operator rather than assuming.
- Do this pass after #2 (background invert) and #3 (responsiveness/grid fix) land, so contrast and layout are being judged against the near-final visual base, not the current one.
- Expect multiple review round-trips; do not commit until the human operator signs off on a specific scale.

## Design decisions

Recorded design decisions (tiny lightweight alternative to ADR's):

- **Style**: single fixed-width (1440px max) poster card, based on a Claude Design mockup — Barlow Condensed (headers) + IBM Plex Sans (body) + IBM Plex Mono (labels), oklch color tokens per section, one light theme, no dark mode (prints beautifully without color-scheme overrides).
- **Data loading**: data lives in `js/data.js` as plain object literals assigned to `window.DATA.<section>` (JSON-shaped, human-editable), loaded via a `<script src defer>` tag rather than `fetch()`.
  This is required for the "open index.html directly via file://" constraint — `fetch()` of local JSON is blocked by CORS under `file://` in most browsers, but `<script src>` is not.
- **Rendering**: hand-written vanilla JS render functions per section (no generic templating engine) generating HTML/inline SVG.
  Each section's visualization is bespoke per PLAN.md, so a generic template engine added indirection without reducing code.
- **Color**: categorical palette and roles follow the `dataviz` skill's validated default palette (`references/palette.md`), light-mode slots only.
- **Secondary models**: hidden by default behind a toggle in Labs & Models (DATA.md's own instruction, not the Claude Design mockup's static preview default), always forced visible in `@media print` since a printed sheet has no interactivity.
- **Labs/provider grid layout**: flexbox with per-card borders, not CSS-grid-with-background-gap, because the grid-gap trick leaves a solid placeholder box in the last row whenever a group's item count isn't a multiple of the column count (e.g. Europe's single Mistral card).
  See backlog #3 above for a related but distinct row-height defect.
