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

TODO: Insert a plan here.
