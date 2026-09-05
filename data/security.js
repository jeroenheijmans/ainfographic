/* Security and Failure Modes. Source: DATA.md § "Security and Fialure Modes". */
window.DATA = window.DATA || {};
window.DATA.security = {
  angles: [
    { term: "Prompt Injection", def: "untrusted input interpreted as instructions, either direct (from user) or indirect (on fetched external sources)." },
    { term: "Lethal Trifecta", def: "access to sensitive data, untrusted input, and exfiltration capabilities. Only two is still fine, all three causes security issues." },
    { term: "LLM Supply Chain", def: "things in your supply chain, like marketplace skills or MCP servers, might be compromised." },
    { term: "Secrets in context", def: "any secrets available to the agent might be passed upstream." },
    { term: "Model failures", def: "hallucinations, sycophancy, jailbreaks, bias, etc." }
  ],
  mitigations: [
    { term: "Sandboxing", def: "containers, VMs, devcontainers" },
    { term: "Network Restrictions", def: "defualt-deny egress as a cheap break" },
    { term: "Least Privilige", def: "scoped access, read-only tools by default, no prod access" },
    { term: "Human in the Loop", def: "approval gates, plan mode, review before write or execute" },
    { term: "Auditing", def: "trails for agent actions" },
    { term: "Adversarial LLMs", def: "AI assessing safety of AI actions" }
  ]
};
