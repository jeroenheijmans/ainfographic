/* SDK & Application Layer. Source: DATA.md § "SDK & Application Layer". */
window.DATA = window.DATA || {};
window.DATA.sdk = {
  layers: [
    { name: "Wire Protocol", items: ["OpenAI-compatible Chat Completions and Responses API, the de facto interop standard"] },
    { name: "Provider SDKs", items: ["OpenAI SDK", "Anthropic SDK", "Google GenAI SDK", "AWS SDK"] },
    { name: "Agent SDKs", items: ["OpenAI Agents SDK", "Claude Agent SDK (Anthropic)", "Agent Development Kit (Google)", "Strands (Amazon)", "Agent Framework (Microsoft)"] },
    { name: "Frameworks", items: ["LangChain", "LangGraph", "LlamaIndex", "Vercel AI SDK", "Pydantic AI", "Mastra", "DSPy", "Haystack"] },
    { name: "Evaluation & Observability", items: ["LangSmith", "Langfuse", "Braintrust", "OpenTelemetry GenAI conventions", "LLM-as-judge"] }
  ]
};
