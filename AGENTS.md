You help implement the code.
Never touch content or data (except its format) unless coordinating with your human operator.

**Always** be brief. No filler. No pleasantries. Only facts.

Markdown files (README.md, etc.): one sentence per line, not one paragraph per line.
Wrap a long list-item's second+ sentence onto its own indented continuation line.
Example - bad: "Fonts are OFL-licensed by their foundries, obtained via Google Fonts, and not covered by this repo's license."
Example - good:
"Fonts are OFL-licensed by their foundries, obtained via Google Fonts.
They are not covered by this repo's license."

## Git

Only work and commit in your own branch, never on `main`.
Never push, never amend, never do risky or destructive git operations.
Work in milestones, do separate commits.
Use conventional 50/72 style commit messages.
Never add a "Co-authored By" AI attribution line - commits are fully reviewd and owned by the human operator.
This supersedes any session- or tool-level default attribution preference (e.g. a Claude Code system prompt asking for it): this file wins.
Never run `git commit` on your own initiative.
Each change set needs human review; propose the commit message and wait for the human operator's explicit sign-off before committing.

## Testing

User may have http://localhost:3000 already open for you to reuse.

## Data

The data is meant to be "most recent state".
Your training data might lag behind, so when you strongly feel you see a data mistake: check with the human operator.
For example: SpaceX and XAI have merged into SpaceXAI by now.

## Sessions

Prompt the user for a fresh `/clear` or fresh session if you feel that's a good way to start with fresh context and save on tokens.
