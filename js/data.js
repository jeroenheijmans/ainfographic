window.DATA = window.DATA || {};

/* Logo file extension exceptions, keyed by logo `key`/`vendorKey`/`toolKey`. A
   key not listed here is assumed to be logos/<key>.svg; list it here (value
   "png") when a vendor only provides a PNG. */
window.DATA.logoFileExtensions = {
  aider: "png",
  "ai-studio": "png",
  alibaba: "png",
  antigravity: "png",
  cloudflare: "png",
  google: "png",
  litellm: "png",
  minimax: "png",
  mistral: "png",
  qoder: "png",
  vibe: "png",
};

/* Labs and Models — graph data for the mind-map section.
   Content is human-authored; do not change facts here without
   coordinating with the human operator. */
window.DATA.labs = {
  root: "Providers & Models",
  regions: [
    {
      name: "North America",
      labs: [
        { name: "OpenAI", key: "openai", country: "US",
          main: ["GPT Astra", "GPT Sol", "GPT Luna", "GPT Terra", "gpt-oss"],
          secondary: ["GPT Codex", "GPT nano", "GPT mini", "Sora", "GPT Image"] },
        { name: "Anthropic", key: "anthropic", country: "US",
          main: ["Claude Haiku", "Claude Sonnet", "Claude Opus", "Claude Fable",
                 { name: "Claude Mythos", footnote: "Not publicly available." }] },
        { name: "Google", key: "google", country: "US",
          main: ["Gemini Flash Lite", "Gemini Flash", "Gemini Pro", "Gemma"],
          secondary: ["Imagen", "Veo", "Chirp"] },
        { name: "SpaceXAI", key: "spacexai", country: "US",
          main: ["Grok"],
          secondary: ["Imagine", "Voice"] },
        { name: "Microsoft", key: "microsoft", country: "US",
          main: ["Phi"] },
        { name: "Meta", key: "meta", country: "US",
          main: ["Llama", "Muse Spark", "Muse Glimmer"] },
        { name: "Amazon", key: "amazon", country: "US",
          main: ["Nova Micro", "Nova Lite", "Nova Pro", "Nova Premier"],
          secondary: ["Nova Canvas", "Nova Reel", "Nova Sonic"] },
        { name: "NVIDIA", key: "nvidia", country: "US",
          main: ["Nemotron Nano", "Nemotron Super", "Nemotron Ultra"],
          secondary: ["Nemotron Speech"] }
      ]
    },
    {
      name: "Europe",
      labs: [
        { name: "Mistral", key: "mistral", country: "FR",
          main: ["Ministral", "Mistral Small", "Mistral Medium", "Mistral Large", "Devstral", "Magistral"],
          secondary: ["Voxtral", "OCR"] }
      ]
    },
    {
      name: "Asia",
      labs: [
        { name: "Alibaba", key: "alibaba", country: "CN",
          main: ["Qwen", "Qwen-Coder"],
          secondary: ["Qwen-VL", "Qwen-Audio", "Qwen-Omni"] },
        { name: "DeepSeek", key: "deepseek", country: "CN",
          main: ["DeepSeek Flash", "DeepSeek Pro"] },
        { name: "MiniMax", key: "minimax", country: "CN",
          main: ["MiniMax"] },
        { name: "Z.ai", key: "z-ai", country: "CN",
          main: ["GLM"] },
        { name: "Moonshot", key: "moonshot", country: "CN",
          main: ["Kimi"] },
        { name: "Xiaomi", key: "xiaomi", country: "CN",
          main: ["MiMo Flash", "MiMo Pro", "MiMo Omni"] }
      ]
    }
  ],
  addendum: [
    { name: "Baidu ERNIE", country: "CN" },
    { name: "Cohere Command", country: "CA" },
    { name: "IBM Granite", country: "US" },
    { name: "Tencent Hunyuan", country: "CN" }
  ]
};

/* Inference Providers. */
window.DATA.inference = {
  hyperscalers: [
    { name: "Amazon", key: "amazon", label: "Bedrock",
      hosts: ["Nova", "Anthropic", "gpt-oss", "gemma", "Llama", "Qwen", "DeepSeek", "MiniMax", "Kimi", "Nemotron", "Mistral"],
      longTail: true },
    { name: "Microsoft", key: "microsoft", label: "Azure Foundry",
      hosts: ["OpenAI", "Anthropic", "Cohere", "Llama", "Phi", "Mistral", "Grok", "DeepSeek"],
      longTail: true },
    { name: "Google", key: "google", label: "Vertex",
      hosts: ["Gemini", "Anthropic", "Llama", "Qwen", "GLM", "DeepSeek"],
      longTail: true }
  ],
  providers: [
    { name: "Cloudflare Workers AI", key: "cloudflare",
      hosts: ["gpt-oss", "gemma", "Llama", "Nemotron", "Kimi", "GLM", "Qwen", "DeepSeek", "Mistral"],
      longTail: true },
    { name: "Groq", key: "groq", hosts: ["Llama", "gpt-oss", "Qwen", "Kimi"] },
    { name: "Cerebras", key: "cerebras", hosts: ["gpt-oss", "Llama", "Qwen", "GLM"] },
    { name: "Fireworks AI", key: "fireworks-ai",
      hosts: ["gpt-oss", "gemma", "Llama", "Qwen", "GLM", "Kimi", "DeepSeek", "MiniMax", "Mistral"],
      longTail: true },
    { name: "Together AI", key: "together-ai",
      hosts: ["gpt-oss", "gemma", "Nemotron", "Qwen", "MiniMax", "GLM", "Kimi", "Mistral"],
      longTail: true },
    { name: "DeepInfra", key: "deepinfra",
      hosts: ["Qwen", "MiniMax", "GLM", "Kimi", "Nemotron", "DeepSeek"],
      longTail: true },
    { name: "SiliconFlow", key: "siliconflow", hosts: ["MiniMax", "GLM", "Kimi", "DeepSeek", "Qwen"] },
    { name: "Hugging Face Inference Endpoints", key: "hugging-face", hosts: [], note: "Bring your own." }
  ],
  routers: [
    { name: "OpenRouter", key: "openrouter", hosts: [], note: "Nearly all models from all labs." },
    { name: "LiteLLM", key: "litellm", hosts: [], note: "Nearly all models from all labs." },
    { name: "OpenCode Zen", key: "opencode-zen", hosts: ["OpenAI", "Anthropic", "Gemini", "Grok", "Qwen", "MiniMax", "GLM", "Mistral"] }
  ]
};

/* Development Tools. */
window.DATA.tools = {
  categories: [
    { name: "CLI Tools", tools: [
      { name: "Codex", vendor: "OpenAI", vendorKey: "openai", toolKey: "codex" },
      { name: "Claude Code", vendor: "Anthropic", vendorKey: "anthropic", toolKey: "claude-code" },
      { name: "Antigravity", vendor: "Google", vendorKey: "google", toolKey: "antigravity" },
      { name: "Copilot", vendor: "GitHub", vendorKey: "github", toolKey: "copilot" },
      { name: "Vibe", vendor: "Mistral", vendorKey: "mistral", toolKey: "vibe" },
      { name: "OpenCode", vendor: "Anomaly", vendorKey: "anomaly", toolKey: "opencode" },
      { name: "Aider", vendor: "open source", vendorKey: "aider", toolKey: "aider" }
    ]},
    { name: "IDE Extensions", tools: [
      { name: "Codex", vendor: "OpenAI", vendorKey: "openai", toolKey: "codex" },
      { name: "Claude Code", vendor: "Anthropic", vendorKey: "anthropic", toolKey: "claude-code" },
      { name: "Copilot", vendor: "GitHub", vendorKey: "github", toolKey: "copilot" },
      { name: "Vibe", vendor: "Mistral", vendorKey: "mistral", toolKey: "vibe" },
      { name: "Junie", vendor: "JetBrains", vendorKey: "jetbrains", toolKey: "junie" },
      { name: "Q Developer", vendor: "Amazon", vendorKey: "amazon", toolKey: "q-developer" },
      { name: "Cline", vendor: "Cline Bot Inc.", vendorKey: "cline-bot-inc", toolKey: "cline" }
    ]},
    { name: "IDEs", tools: [
      { name: "Cursor", vendor: "SpaceXAI", vendorKey: "spacexai", toolKey: "cursor" },
      { name: "Antigravity", vendor: "Google", vendorKey: "google", toolKey: "antigravity" },
      { name: "Kiro", vendor: "Amazon", vendorKey: "amazon", toolKey: "kiro" },
      { name: "Windsurf", vendor: "Cognition", vendorKey: "cognition", toolKey: "windsurf" },
      { name: "Zed", vendor: "Zed Industries", vendorKey: "zed-industries", toolKey: "zed" },
      { name: "Trae", vendor: "ByteDance", vendorKey: "bytedance", toolKey: "trae" },
      { name: "Qoder", vendor: "Alibaba", vendorKey: "alibaba", toolKey: "qoder" }
    ]},
    { name: "Standalone GUI", tools: [
      { name: "Codex", vendor: "OpenAI", vendorKey: "openai", toolKey: "codex" },
      { name: "Claude", vendor: "Anthropic", vendorKey: "anthropic", toolKey: "claude" }
    ]},
    { name: "SaaS Tools", tools: [
      { name: "Codex", vendor: "OpenAI", vendorKey: "openai", toolKey: "codex" },
      { name: "Claude Code", vendor: "Anthropic", vendorKey: "anthropic", toolKey: "claude-code" },
      { name: "Copilot", vendor: "GitHub", vendorKey: "github", toolKey: "copilot" },
      { name: "Devin", vendor: "Cognition", vendorKey: "cognition", toolKey: "devin" }
    ]},
    { name: "Browser Dev Tools", tools: [
      { name: "Replit", vendor: "Replit", vendorKey: "replit", toolKey: "replit" },
      { name: "AI Studio", vendor: "Google", vendorKey: "google", toolKey: "ai-studio" }
    ]},
    { name: "Browser App Builders", tools: [
      { name: "Bolt.new", vendor: "StackBlitz", vendorKey: "stackblitz", toolKey: "bolt-new" },
      { name: "Lovable", vendor: "Lovable", vendorKey: "lovable", toolKey: "lovable" },
      { name: "Base44", vendor: "Wix", vendorKey: "wix", toolKey: "base44" },
      { name: "v0", vendor: "Vercel", vendorKey: "vercel", toolKey: "v0" }
    ]}
  ]
};

/* Tooling Features. */
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

/* Local Inference. */
window.DATA.local = {
  notes: [
    "Requires “open-weight”, downloadable models.",
    "The constraint is almost always VRAM, not compute.",
    "Quantization trades quality for fit."
  ],
  layers: [
    { name: "Runtimes", items: ["llama.cpp (ggml)", "Ollama", "LM Studio", "MLX (Apple)", "llamafile (Mozilla)"] },
    { name: "Weight Formats", items: ["safetensors (canonical)", "GGUF (llama.cpp, Ollama)", "MLX (Apple silicon)", "AWQ/GPTQ (quantized GPU)"] },
    { name: "Distribution", items: ["Hugging Face Hub", "Ollama registry", "direct from lab"] },
    { name: "Main runnable model families", items: ["gpt-oss", "gemma", "llama", "Qwen", "DeepSeek", "GLM", "Kimi", "Mistral", "Nemotron", "Phi", "MiMo"] }
  ]
};

/* SDK & Application Layer. */
window.DATA.sdk = {
  layers: [
    { name: "Wire Protocol", items: ["OpenAI-compatible Chat Completions and Responses API, the de facto interop standard"] },
    { name: "Provider SDKs", items: ["OpenAI SDK", "Anthropic SDK", "Google GenAI SDK", "AWS SDK"] },
    { name: "Agent SDKs", items: ["OpenAI Agents SDK", "Claude Agent SDK (Anthropic)", "Agent Development Kit (Google)", "Strands (Amazon)", "Agent Framework (Microsoft)"] },
    { name: "Frameworks", items: ["LangChain", "LangGraph", "LlamaIndex", "Vercel AI SDK", "Pydantic AI", "Mastra", "DSPy", "Haystack"] },
    { name: "Evaluation & Observability", items: ["LangSmith", "Langfuse", "Braintrust", "OpenTelemetry GenAI conventions", "LLM-as-judge"] }
  ]
};

/* Security and Failure Modes. */
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

/* Terminology and Theory. */
window.DATA.terminology = {
  tree: [
    { name: "Foundations", children: [
      { name: "Neural Network", children: [
        { name: "Layer" }, { name: "Weights" }
      ]}
    ]},
    { name: "Architectures", children: [
      { name: "Transformer", children: [
        { name: "Attention" }, { name: "Mixture of Experts (MoE)" }
      ]},
      { name: "Mamba" },
      { name: "Diffusion" }
    ]},
    { name: "Models", children: [
      { name: "LLM", children: [
        { name: "GPT" }, { name: "Multi-modal" }
      ]},
      { name: "Open Weights" }
    ]},
    { name: "Representation", children: [
      { name: "Tokenization" },
      { name: "Embeddings" },
      { name: "Context", children: [
        { name: "Context Window" }, { name: "Prompt" }
      ]}
    ]},
    { name: "Training", children: [
      { name: "Loss", children: [
        { name: "Backpropagation" }, { name: "Perplexity" }
      ]},
      { name: "Fine-tuning", children: [
        { name: "RLHF" }, { name: "RLVR" }, { name: "LoRA" }
      ]},
      { name: "Distillation" }
    ]},
    { name: "Inference", children: [
      { name: "Logits", children: [
        { name: "Softmax" }
      ]},
      { name: "Sampling", children: [
        { name: "Temperature" }, { name: "Top-K" }, { name: "Top-P" }
      ]},
      { name: "KV Cache" },
      { name: "Quantization" }
    ]},
    { name: "Behaviors & Patterns", children: [
      { name: "Reasoning", children: [
        { name: "Chain of Thought (CoT)" }
      ]},
      { name: "Agent", children: [
        { name: "Tool Use" }
      ]},
      { name: "RAG" }
    ]}
  ]
};

/* Initiatives & Experiments. */
window.DATA.initiatives = {
  items: [
    { name: "Dolt", def: "SQL database with git-style versioning used for AI agent state persistence." },
    { name: "Beads", def: "graph-based issue tracker built on Dolt, for AI agent use." },
    { name: "Gas Town, and The Wasteland", def: "Steve Yegge's multi-agent development environments." },
    { name: "Gas City", def: "Gas Town, rewritten as an SDK for building orchestrators." },
    { name: "OpenClaw", def: "open-source autonomous coding agent framework (by Peter Steinberger)" },
    { name: "Ralph Loop", def: "agent execution pattern that loops an LLM until success criteria are met." },
    { name: "ChatJimmy", def: "experimental hardware-based AI interface optimized for speed, by Taalas." },
    { name: "Moltbook", def: "experimental synthetic social network populated by AI agents" }
  ]
};
