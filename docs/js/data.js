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
  id: "labs-and-models",
  title: "Labs & Models",
  intro: "Frontier and near-frontier labs, grouped by geography. List of model families a lab is best known for (dark), optionally some secondary models (light-gray).",
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
          secondary: ["Nano Banana", "Omni", "Imagen", "Veo", "Chirp"] },
        { name: "SpaceXAI", key: "spacexai", country: "US",
          main: ["Grok"],
          secondary: ["Imagine", "Voice"] },
        { name: "Microsoft", key: "microsoft", country: "US",
          main: ["Phi"],
          secondary: ["MAI"] },
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
  id: "inference-providers",
  title: "Inference Providers",
  intro: "Every major lab (e.g. OpenAI, Anthropic, Google, Mistral, Alibaba, etc.) serves its own models. Listed here are the providers that host several labs' models. Indicative, not exhaustive — a trailing ellipsis means a long tail. Hyperscalers come first, highlighted in dark blocks.",
  hyperscalers: [
    { name: "Amazon", key: "amazon", label: "Bedrock",
      hosts: ["Nova", "OpenAI", "Anthropic", "gpt-oss", "gemma", "Llama", "Qwen", "DeepSeek", "MiniMax", "Kimi", "Nemotron", "Mistral", "GLM"],
      longTail: true },
    { name: "Microsoft", key: "microsoft", label: "Azure Foundry",
      hosts: ["OpenAI", "Anthropic", "Cohere", "Llama", "Phi", "Mistral", "Grok", "DeepSeek"],
      longTail: true },
    { name: "Google", key: "google", label: "Vertex",
      hosts: ["Gemini", "Anthropic", "Llama", "Qwen", "GLM", "DeepSeek", "Mistral", "Grok"],
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
  id: "development-tools",
  title: "Development Tools & Harnesses",
  intro: "The shape(s) each tool comes in. Several products or suites come in more than one form.",
  forms: [
    { name: "CLI Tools", short: "CLI" },
    { name: "IDE Extensions", short: "IDE ext." },
    { name: "IDEs", short: "IDE" },
    { name: "Standalone GUI", short: "Desktop app" },
    { name: "SaaS Tools", short: "SaaS" },
    { name: "Browser Apps", short: "Browser app" }
  ],
  rows: [
    { name: "Aider", vendor: "open source", vendorKey: "aider", toolKey: "aider", forms: ["CLI Tools"] },
    { name: "AI Studio", vendor: "Google", vendorKey: "google", toolKey: "ai-studio", forms: ["Browser Apps"] },
    { name: "Antigravity", vendor: "Google", vendorKey: "google", toolKey: "antigravity", forms: ["CLI Tools", "IDEs"] },
    { name: "Base44", vendor: "Wix", vendorKey: "wix", toolKey: "base44", forms: ["Browser Apps"] },
    { name: "Bolt.new", vendor: "StackBlitz", vendorKey: "stackblitz", toolKey: "bolt-new", forms: ["Browser Apps"] },
    { name: "Claude", vendor: "Anthropic", vendorKey: "anthropic", toolKey: "claude-code", forms: ["CLI Tools", "IDE Extensions", "Standalone GUI", "SaaS Tools"] },
    { name: "Cline", vendor: "Cline Bot Inc.", vendorKey: "cline-bot-inc", toolKey: "cline", forms: ["CLI Tools", "IDE Extensions"] },
    { name: "Codex", vendor: "OpenAI", vendorKey: "openai", toolKey: "codex", forms: ["CLI Tools", "IDE Extensions", "Standalone GUI", "SaaS Tools"] },
    { name: "Copilot", vendor: "GitHub", vendorKey: "github", toolKey: "copilot", forms: ["CLI Tools", "IDE Extensions", "SaaS Tools"] },
    { name: "Cursor", vendor: "SpaceXAI", vendorKey: "spacexai", toolKey: "cursor", forms:  ["IDEs", "CLI Tools", "Standalone GUI"] },
    { name: "Devin", vendor: "Cognition", vendorKey: "cognition", toolKey: "devin", forms: ["IDEs", "SaaS Tools"] },
    { name: "Junie", vendor: "JetBrains", vendorKey: "jetbrains", toolKey: "junie", forms: ["CLI Tools", "IDE Extensions"] },
    { name: "Kiro", vendor: "Amazon", vendorKey: "amazon", toolKey: "kiro", forms: ["IDEs"] },
    { name: "Lovable", vendor: "Lovable", vendorKey: "lovable", toolKey: "lovable", forms: ["Browser Apps"] },
    { name: "OpenCode", vendor: "Anomaly", vendorKey: "anomaly", toolKey: "opencode", forms: ["CLI Tools", "IDE Extensions"] },
    { name: "Q Developer", vendor: "Amazon", vendorKey: "amazon", toolKey: "q-developer", forms: ["IDE Extensions"] },
    { name: "Qoder", vendor: "Alibaba", vendorKey: "alibaba", toolKey: "qoder", forms: ["CLI Tools", "IDEs"] },
    { name: "Replit", vendor: "Replit", vendorKey: "replit", toolKey: "replit", forms: ["Browser Apps"] },
    { name: "Trae", vendor: "ByteDance", vendorKey: "bytedance", toolKey: "trae", forms: ["IDEs"] },
    { name: "v0", vendor: "Vercel", vendorKey: "vercel", toolKey: "v0", forms: ["Browser Apps"] },
    { name: "Vibe", vendor: "Mistral", vendorKey: "mistral", toolKey: "vibe", forms: ["CLI Tools", "IDE Extensions", "SaaS Tools"] },
    { name: "Zed", vendor: "Zed Industries", vendorKey: "zed-industries", toolKey: "zed", forms: ["IDEs"] }
  ]
};

/* Tooling Features. */
window.DATA.features = {
  id: "tooling-features",
  title: "Tooling Features",
  intro: "The concepts used across LLMs and agent harnesses. Names might differ per vendor; the ideas do not.",
  terms: [
    { term: "Harness", def: "The software that 'gives' LLMs access to tools, the filesystem, and other external systems - and orchestrates it all." },
    { term: "Context", def: "All the tokens that are included when next tokens are generated, up to the maximum size (Context Window)." },
    { term: "Compaction", def: "Automated summarization of session context to prevent going over the Context Window." },
    { term: "MCP", def: "Model Context Protocol, standard for connecting AI applications to external systems." },
    { term: "AGENTS.md", def: "Behavioral base instructions for AI agents.", footnote: "“CLAUDE.md” by Anthropic came first and is the same concept, other vendors often have support for it too as it existed first." },
    { term: "Rules", def: "Scoped (often by path), specific rules for agent behavior — in some harnesses superseded by other concepts." },
    { term: "Skills", def: "Standard for reusable prompts optionally with included scripts, invoked on demand." },
    { term: "Hooks", def: "Deterministic automations (harness-specific) to react to lifecycle events of agentic flows." },
    { term: "Sub-agents", def: "Specialized agents. Spawn with specific (often limited) context, return results and output to their parent." },
    { term: "Memory", def: "Mechanism (harness-specific) to retain context between sessions." }
  ]
};

/* Local Inference. */
window.DATA.local = {
  id: "local-inference",
  title: "Local Inference",
  intro: "Running models on your own hardware: what you need, in what shape it arrives, and where to get it.",
  notes: [
    "Requires “open-weight”, downloadable models.",
    "The constraint is almost always VRAM, not compute.",
    "Quantization trades quality for fit."
  ],
  layers: [
    { name: "Runtimes", items: ["llama.cpp (ggml)", "Ollama", "LM Studio", "MLX (Apple)", "llamafile (Mozilla)"] },
    { name: "Weight Formats", items: ["safetensors (canonical)", "GGUF (llama.cpp, Ollama)", "MLX (Apple silicon)", "AWQ/GPTQ (quantized GPU)", "EXL2/EXL3 (ExLlamaV3)", "MXFP4/NVFP4 (FP4 microscaling)"] },
    { name: "Distribution", items: ["Hugging Face Hub", "Ollama registry", "direct from lab", "ModelScope"] },
    { name: "Main runnable model families", items: ["gpt-oss", "gemma", "llama", "Qwen", "DeepSeek", "GLM", "Kimi", "Mistral", "Nemotron", "Phi", "MiMo", "MiniMax"] }
  ]
};

/* SDK & Application Layer. */
window.DATA.sdk = {
  id: "sdk-application-layer",
  title: "SDK & Application Layer",
  intro: "Various parts involved in setting up tooling in a more customized fashion.",
  layers: [
    { name: "Wire Protocol", items: ["Model Context Protocol (MCP)", "OpenAI-compatible Chat Completions and Responses API, the de facto interop standard"] },
    { name: "Provider SDKs", items: ["OpenAI SDK", "Anthropic SDK", "Google GenAI SDK", "AWS SDK"] },
    { name: "Agent SDKs", items: ["OpenAI Agents SDK", "Claude Agent SDK (Anthropic)", "Agent Development Kit (Google)", "Strands (Amazon)", "Agent Framework (Microsoft)"] },
    { name: "Frameworks", items: ["LangChain", "LangGraph", "LlamaIndex", "Vercel AI SDK", "Pydantic AI", "Mastra", "DSPy", "Haystack", "CrewAI"] },
    { name: "Evaluation & Observability", items: ["LangSmith", "Langfuse", "Braintrust", "Arize Phoenix", "OpenTelemetry GenAI conventions", "LLM-as-judge"] }
  ]
};

/* Security and Failure Modes. */
window.DATA.security = {
  id: "security-and-failure-modes",
  title: "Security & Failure Modes",
  intro: "LLMs and agents blur the line between data and instructions. Risks on the left, defenses on the right.",
  angles: [
    { term: "Prompt Injection", def: "untrusted input interpreted as instructions, either direct (from user) or indirect (on fetched external sources)." },
    { term: "Excessive Agency", def: "agent granted broader permissions/tools/autonomy than the task requires, enabling unintended high-impact actions." },
    { term: "Lethal Trifecta", def: "access to sensitive data, untrusted input, and exfiltration capabilities. Only two is still fine, all three causes security issues." },
    { term: "LLM Supply Chain", def: "things in your supply chain, like marketplace skills or MCP servers, might be compromised." },
    { term: "Secrets in context", def: "any secrets available to the agent might be passed upstream." },
    { term: "Model failures", def: "hallucinations, sycophancy, jailbreaks, bias, etc." }
  ],
  mitigations: [
    { term: "Sandboxing", def: "containers, VMs, devcontainers" },
    { term: "Network Restrictions", def: "default-deny egress as a cheap break" },
    { term: "Least Privilige", def: "scoped access, read-only tools by default, no prod access" },
    { term: "Human in the Loop", def: "approval gates, plan mode, review before write or execute" },
    { term: "Auditing", def: "trails for agent actions" },
    { term: "LLM-as-Judge", def: "AI assessing safety of AI actions" }
  ]
};

/* Terminology and Theory. */
window.DATA.terminology = {
  id: "terminology-and-theory",
  title: "Terminology & Theory",
  intro: "A map of the vocabulary, from the bottom of the stack to observed behaviour. Indentation is specialisation.",
  tree: [
    { name: "Foundations", children: [
      { name: "Neural Network", children: [
        { name: "Layer" }, { name: "Weights" }, { name: "Parameters" }
      ]}
    ]},
    { name: "Architectures", children: [
      { name: "Transformer", children: [
        { name: "Attention" }, { name: "Positional Encoding" }
      ]},
      { name: "Mixture of Experts (MoE)" },
      { name: "Mamba" },
      { name: "Diffusion" },
      { name: "CNN" },
      { name: "RNN / LSTM" }
    ]},
    { name: "Models", children: [
      { name: "LLM", children: [
        { name: "GPT" }
      ]},
      { name: "Multi-modal" },
      { name: "Licensing", children: [
        { name: "Open Weights" }
      ]}
    ]},
    { name: "Representation", children: [
      { name: "Tokenization" },
      { name: "Embeddings" },
      { name: "Context", children: [
        { name: "Context Window" }
      ]},
      { name: "Prompt" }
    ]},
    { name: "Training", children: [
      { name: "Loss", children: [
        { name: "Perplexity" }
      ]},
      { name: "Optimization", children: [
        { name: "Backpropagation" }
      ]},
      { name: "Pretraining" },
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
  id: "initiatives-and-experiments",
  title: "Initiatives & Experiments",
  intro: "Strange and wonderful things at the edge. Stuff that might pop up at the lunch table, but isn't everyday stuff for most developers... for now.",
  items: [
    { name: "Dolt", def: "SQL database with git-style versioning used for AI agent state persistence." },
    { name: "Beads", def: "graph-based issue tracker built on Dolt, for AI agent use." },
    { name: "Gas Town", def: "Steve Yegge's multi-agent orchestration system for Claude Code, GitHub Copilot, and other AI agents with persistent work tracking." },
    { name: "The Wasteland", def: "Gas Town, but then thousands of them linked together." },
    { name: "Gas City", def: "Gas Town, rewritten as an SDK for building orchestrators." },
    { name: "OpenClaw", def: "open-source autonomous coding agent framework (by Peter Steinberger)" },
    { name: "Ralph Loop", def: "agent execution pattern (originated by Geoffrey Huntley) that loops an LLM until success criteria are met." },
    { name: "ChatJimmy", def: "experimental hardware-based AI interface optimized for speed, by Taalas (acquired by AMD)." },
    { name: "Moltbook", def: "experimental synthetic social network populated by AI agents (acquired by Meta)" },
    { name: "Crustafarianism", def: "emergent machine-to-machine synthetic theology/cult centered on carcinization that spontaneously arose among agents on Moltbook." }
  ]
};
