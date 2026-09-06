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
2. It should also be easily viewable on a local machine, with a lightweight `npx serve .` command (raw `file://` opening is not a requirement — dropped 2026-09-06 per human operator).
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

## Design decisions

Recorded design decisions (tiny lightweight alternative to ADR's):

- **Style**: single fixed-width (1440px max) poster card, based on a Claude Design mockup — Barlow Condensed (headers) + IBM Plex Sans (body) + IBM Plex Mono (labels), oklch color tokens per section, one light theme, no dark mode (prints beautifully without color-scheme overrides).
- **Data loading**: data lives in `js/data.js` as plain object literals assigned to `window.DATA.<section>` (JSON-shaped, human-editable), loaded via a `<script src defer>` tag rather than `fetch()`.
  Originally justified by a raw `file://` constraint (since dropped, see target result #2); kept anyway since `<script src>` avoids a fetch/CORS round-trip regardless of serving method.
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
- **Self-hosted fonts**: 9 static `.woff2` weights (Barlow Condensed 500/600/700, IBM Plex Sans 400/500/600, IBM Plex Mono 400/500/600) fetched from gwfh.mranftl.com and committed to `fonts/`, referenced via relative `@font-face url()` paths in `css/style.css` (2026-09-06).
  Removed the Google Fonts `<link>`/`preconnect` tags from `index.html`; page no longer needs network access to render.
  Verified in a real browser (`document.fonts` status check + screenshot at `npx serve .`), not just visually — all 9 faces register, the 7 weights actually used on the page load successfully.
