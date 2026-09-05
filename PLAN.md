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
2. It should also be easily viewable on a local machine, either by opening an `index.html` directly or with a lightweight `npx serve .` command.
3. There should be near-zero dependencies, only zero or a tiny number of (version-pinned) cdnjs dependencies are acceptable. Great reasons to choose a dependency after all include: (1) a tiny templating engine to keep sections data-driven, (2) a tool to make things beautiful (but do also remember to use modern CSS where possible).
4. A simple setup is strongly preferred, either one `index.html` file with everything or three files (html, css, js).
5. Use tiny SVG's as placeholders if you want logo's for 
5. It should be absolutely beautiful: one single specific style (light or dark, either is fine) and stick with it. Bespoke and unique, but functional.
6. The user printing or exporting to PDF should get a great experience: turning this infographic into a custom huge poster print (A1 for example) should be trivial.
7. Progressive tweaks for screen media (like subtle animations, parallax effects, background animations) are allowed if they don't interfere with print.
8. Things should be data-driven. Adding new entries to data (see below) in the future should automatically update the infographic. Ideally a human tweaking some data in GitHub web editors should be feasible.
9. Never manipulate data contents, only form might be tweaked. New or updated data comes from human operators always. If the data or its format are problematic: consult your human operator.
10. Data should be in a structured format like yml, json, or otherwise: something both good for humans and editability, and for using for our data-driven approach.

Each section may have its own sub-style or format.
For inspiration: grids, venn diagrams, sankey, mind maps, charts, circle packing, sunburst, treemaps, heat maps, magic quadrants, edge bundling, word clouds, and just text and beautiful tables or grids are great too.

## Data

Data starts in [DATA.md](./DATA.md).
Each section contains:

- Some textual metadata that are "instructions" to help with choosing a visualization.
- The actual data, that should be converted from semi-structured markdown, into our structured data format.

## To do

This is the place for a cross-session implementation plan.

Milestones:

1. [x] Scaffold: index.html, css/style.css design system, js/app.js skeleton, data/ dir
2. [x] Data: convert DATA.md into data/*.js structured files (one per section)
3. [x] Section: Labs and Models mind map
4. [x] Section: Inference Providers grid
5. [x] Section: Development Tools grid
6. [x] Section: Tooling Features glossary
7. [x] Section: Local Inference stack diagram
8. [x] Section: SDK & Application Layer stack diagram
9. [x] Section: Security and Failure Modes
10. [x] Section: Terminology and Theory tree
11. [x] Section: Initiatives & Experiments card grid
12. [x] Print/poster CSS pass
13. [x] Screen polish (animations, respecting prefers-reduced-motion)
14. [x] Browser test pass + screenshots (Playwright, screen + print emulation, both verified)

First full build complete as of 2026-07-25, then adversarially reviewed by a
fresh agent (no prior context) same day. Real bugs it found and that got fixed:
secondary models in the Labs mind map were invisible in print unless manually
expanded on screen first; footnote markers on model chips were all an
indistinguishable `*` instead of numbered; and — confirmed via an actual
`page.pdf()` export, not just print-media emulation — the Labs & Models
section is taller than one printed page, so its SVG connector lines got
sliced by the page break into disconnected stubs. Fixed by hiding connector
lines in print (the colour-coded borders still show grouping) and forcing
each region onto its own page via `break-before: page`.

It also caught that three DATA.md typos ("Least Privilige", "defualt-deny",
"netork") had been silently corrected in data/security.js and
data/initiatives.js, and definitions in data/security.js had been
re-capitalized/re-punctuated — both violate AGENTS.md's "never touch content
without coordinating with the human operator." Reverted to verbatim DATA.md
text. **If you're a future session touching data/*.js: do not silently fix
typos or reword definitions, even obvious ones — flag them to the human
operator instead.** The three known typos above are intentionally preserved
verbatim in the data files.

Remaining ideas for future sessions (not blocking, not yet done):

- [ ] Consider a light/dark contrast check (WCAG) pass on the categorical chip
      borders against `--paper-raised` — done by eye, not measured.
- [ ] Consider small tiny-SVG lab logos as chip icons (optional per spec, skipped
      for this pass in favor of consistent typographic chips).
- [ ] Re-check mobile (<760px) layout in a real device/emulator; only checked via
      CSS review, not rendered.
- [ ] The DATA.md section heading "Security and Fialure Modes" (typo) is
      rendered corrected as "Security and Failure Modes" in the UI — treated
      as an authored section title, not itemized data, so left as-is. Worth
      confirming with the human operator if that distinction feels wrong.

If a future session picks this up: check the checkboxes above and `git log`
for what's actually done, this list may lag slightly behind commits.

## Redesign: "State of AI" poster (2026-09-05)

The human operator ran a Claude Design session and produced a specific bespoke
layout ("State of AI.dc.html", synced via the design MCP into
claude.ai/design project `3feafbc1-eb2e-46f7-906b-1df79104ea31`) and asked for
it to be implemented here, replacing the prior "editorial field guide"
scrolling theme. This supersedes the style decisions below (scrolling panels,
mind-map, TOC, serif display font) in favor of:

- A single fixed-width (1440px max) poster card, not a scrolling multi-panel
  page — closer to a literal one-page infographic than a field guide.
- Barlow Condensed (headers) + IBM Plex Sans (body) + IBM Plex Mono (labels),
  via Google Fonts — oklch color tokens per section (each of the 9 sections
  gets its own accent hue, matching the source design).
- Labs & Models rendered as colour-banded region groups with a grid of lab
  cards (chips for main/secondary models), not an SVG mind map/tree. Secondary
  models are hidden by default with a single toggle — the design mockup's
  static `showSecondary: true` prop was a preview default, not a UX spec;
  DATA.md's own instruction ("hidden by default until the user decides to
  show them") is the one that's authoritative and is what got implemented.
- Reused the existing `data/*.js` structured files as-is (already
  DATA.md-derived, human-editable, loaded via `<script src>` for `file://`
  compatibility) — only synced content to match DATA.md's current edits, no
  reshaping needed since the design's data shape and these files' shape are
  close cousins.
- Milestones: [x] title block, [x] labs&models grid, [x] inference providers,
  [x] dev tools, [x] tooling features, [x] local inference, [x] SDK layer,
  [x] security, [x] terminology, [x] initiatives, [x] colophon, [x] print pass,
  [x] responsive pass, [x] browser test.

First pass complete 2026-09-05. Verified via Playwright: desktop (1500px) and
mobile (390px) screenshots, the secondary-models toggle (default hidden per
DATA.md's own instruction, not the design mockup's static preview default),
and a real `page.pdf()` print export (not just print-media emulation) —
10 letter-sized pages, secondary models correctly forced visible in print,
known DATA.md typos ("defualt-deny", "Least Privilige", "netork") correctly
preserved verbatim. One deviation from a literal copy of the source design:
`.lab-grid`/`.provider-grid` use flexbox with per-card borders instead of the
design's CSS-grid-with-background-gap trick, because that trick left a
solid grey placeholder box in the last row whenever a group's item count
wasn't a multiple of the column count (e.g. Europe's single Mistral card,
Asia's 6-lab tail) — same defect the trick would have in the source mockup.

Remaining ideas for a future session (not blocking):
- [ ] Re-check the printed page count/whitespace on a non-Letter page size
      (A3/A4) — only Letter was verified via `page.pdf()`.
- [ ] Consider tiny inline-SVG lab logos as chip icons (still optional per
      spec; skipped again in favor of consistent typographic chips).
- [ ] WCAG contrast check on the categorical chip borders — done by eye only.

## Design decisions

Recorded design decisions (tiny lightweight alternative to ADR's):

- **Style**: light "editorial field guide" theme — warm paper background, dark ink
  text, no dark mode (single style per spec). Chosen because it prints beautifully
  without color-scheme overrides, unlike a dark theme.
- **Data loading**: data lives in `data/*.js` as plain object literals assigned to
  `window.DATA.<section>` (JSON-shaped, human-editable), loaded via `<script src>`
  tags rather than `fetch()`. This is required for the "open index.html directly
  via file://" constraint — `fetch()` of local JSON is blocked by CORS under
  `file://` in most browsers, but `<script src>` is not.
- **Rendering**: hand-written vanilla JS render functions per section (no generic
  templating engine) generating HTML/inline SVG. Each section's visualization is
  bespoke per PLAN.md, so a generic template engine added indirection without
  reducing code.
- **Color**: categorical palette and roles follow the `dataviz` skill's validated
  default palette (`references/palette.md`), light-mode slots only.
