/* Tooling Features. Source: DATA.md § "Tooling Features". */
window.DATA = window.DATA || {};
window.DATA.features = {
  terms: [
    { term: "Context", def: "All the tokens that are included when next tokens are generated, up to the maximum size (Context Window)." },
    { term: "Harness", def: "The software that 'gives' LLMs access to tools, the filesystem, and other external systems." },
    { term: "MCP", def: "Model Context Protocol, standard for connecting AI applications to external systems." },
    { term: "AGENTS.md", def: "Behavioral base instructions for AI agents.", footnote: "“CLAUDE.md” by Anthropic came first and is the same concept, other vendors often have support for it too as it existed first." },
    { term: "Rules", def: "Scoped (often by path), specific rules for agent behavior — in some tools superseded by other concepts." },
    { term: "Skills", def: "Standard for reusable prompts optionally with included scripts, invoked on demand." },
    { term: "Hooks", def: "Deterministic automations (harness-specific) to react to lifecycle events of agentic flows." },
    { term: "Sub-agents", def: "Specialized agents. Spawn with specific (often limited) context, return results and output to their parent." },
    { term: "Memory", def: "Mechanism (harness-specific) to retain context between sessions." }
  ]
};
