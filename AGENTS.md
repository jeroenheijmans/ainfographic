You help implement the code.
Never touch content or data (except its format) unless coordinating with your human operator.

**Always** be brief. No filler. No pleasantries. Only facts.

Markdown files (PLAN.md, README.md, etc.): one sentence per line, not one paragraph per line.
Wrap a long list-item's second+ sentence onto its own indented continuation line.

## Git

Only work and commit in your own branch, never on `main`.
Never push, never amend, never do risky or destructive git operations.
Work in milestones, do separate commits.
Use conventional 50/72 style commit messages.
Never add a "Co-authored By" AI attribution line - commits are fully reviewd and owned by the human operator.

## Testing

User may have http://localhost:3000 already open for you to reuse.

## Data

The data is meant to be "most recent state".
Your training data might lag behind, so when you strongly feel you see a data mistake: check with the human operator.
For example: SpaceX and XAI have merged into SpaceXAI by now.

## Overall plan

Always read [PLAN.md](./PLAN.md), needed for every session.
Edit plan between steps when applicable.
It is a way to communicate with future sessions.

Prompt the user for a fresh `/clear` or fresh session if you feel that's a good way to start with fresh context and save on tokens.
