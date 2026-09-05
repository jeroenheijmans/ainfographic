/* Inference Providers. Source: DATA.md § "Inference Providers". */
window.DATA = window.DATA || {};
window.DATA.inference = {
  hyperscalers: [
    { name: "Amazon", label: "Bedrock",
      hosts: ["Nova", "Anthropic", "gpt-oss", "gemma", "Llama", "Qwen", "DeepSeek", "MiniMax", "Kimi", "Nemotron", "Mistral"],
      longTail: true },
    { name: "Microsoft", label: "Azure Foundry",
      hosts: ["OpenAI", "Anthropic", "Cohere", "Llama", "Phi", "Mistral", "Grok", "DeepSeek"],
      longTail: true },
    { name: "Google", label: "Vertex",
      hosts: ["Gemini", "Anthropic", "Llama", "Qwen", "GLM", "DeepSeek"],
      longTail: true }
  ],
  providers: [
    { name: "Cloudflare Workers AI",
      hosts: ["gpt-oss", "gemma", "Llama", "Nemotron", "Kimi", "GLM", "Qwen", "DeepSeek", "Mistral"],
      longTail: true },
    { name: "Groq", hosts: ["Llama", "gpt-oss", "Qwen", "Kimi"] },
    { name: "Cerebras", hosts: ["gpt-oss", "Llama", "Qwen", "GLM"] },
    { name: "Fireworks AI",
      hosts: ["gpt-oss", "gemma", "Llama", "Qwen", "GLM", "Kimi", "DeepSeek", "MiniMax", "Mistral"],
      longTail: true },
    { name: "Together AI",
      hosts: ["gpt-oss", "gemma", "Nemotron", "Qwen", "MiniMax", "GLM", "Kimi", "Mistral"],
      longTail: true },
    { name: "DeepInfra",
      hosts: ["Qwen", "MiniMax", "GLM", "Kimi", "Nemotron", "DeepSeek"],
      longTail: true },
    { name: "SiliconFlow", hosts: ["MiniMax", "GLM", "Kimi", "DeepSeek", "Qwen"] },
    { name: "Hugging Face Inference Endpoints", hosts: [], note: "Bring your own." }
  ],
  routers: [
    { name: "OpenRouter", hosts: [], note: "Nearly all models from all labs." },
    { name: "LiteLLM", hosts: [], note: "Nearly all models from all labs." },
    { name: "OpenCode Zen", hosts: ["OpenAI", "Anthropic", "Gemini", "Grok", "Qwen", "MiniMax", "GLM", "Mistral"] }
  ]
};
