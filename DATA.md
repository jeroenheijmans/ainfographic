# Data

Each section in this markdown file is an "area" of the infographic.

## Labs and Models

The data here is a graph with a root node pointing outwards (like a mind map).
The root node would be a blanco circle or start node called "Providers & Models".
The list below shows all the labs (first level), in parentheses the geographic group.
Then (second level) there is a list of "main" model (families) that should be shown by default.
After it (also second level) a list of "secondary" models that are hidden by default until the user decides to show them too.

Note: the list purposely is slightly imbalanced (e.g. some labs don't have a "secondary").
This is on purpose, we try to be in line with how they are talked about, sacrificing technical accuracy.

Note: version numbers are purposely missing, even though they are often used to talk about the models.
This is to prevent the data from going out of date *too* fast.

- North America
  - **SpaceXAI (US)**
    - Main: Grok
    - Secondary: Imagine, Voice
  - **Anthropic (US)**
    - Main: Claude Haiku, Claude Sonnet, Claude Opus, Claude Fable, Claude Mythos (Footnote: not publicly available.)
  - **Google (US)**
    - Main: Gemini Flash, Gemini Pro, Gemma
    - Secondary: Imagen, Veo, Chirp
  - **OpenAI (US)**
    - Main: GPT Astra, GPT Sol, GPT Luna, GPT Terra, gpt-oss
    - Secondary: GPT Codex, GPT nano, GPT mini, Sora, GPT Image
  - **Microsoft (US)**
    - Main: Phi
  - **Amazon (US)**
    - Main: Nova Micro, Nova Lite, Nova Pro, Nova Premier
    - Secondary: Nova Canvas, Nova Reel, Nova Sonic
  - **Meta (US)**
    - Main: Llama
  - **NVIDIA (US)**
    - Main: Nemotron Nano, Nemotron Super, Nemotron Ultra
    - Secondary: Nemotron Speech
- Europe
  - **Mistral (FR)**
    - Main: Ministral, Mistral Small, Mistral Medium, Mistral Large, Devstral, Magistral
    - Secondary: Voxtral, OCR
- Asia
  - **Alibaba (CN)**
    - Main: Qwen, Qwen-Coder
    - Secondary: Qwen-VL, Qwen-Audio, Qwen-Omni
  - **DeepSeek (CN)**
    - Main: DeepSeek Flash, DeepSeek Pro
  - **MiniMax (CN)**
    - Main: MiniMax
  - **Z.ai (CN)**
    - Main: GLM
  - **Moonshot (CN)**
    - Main: Kimi
  - **Xiaomi (CN)**
    - Main: MiMo Flash, MiMo Pro, MiMo Omni

A list of labs not for the main graphic, but as an addenum:

- Baidu ERNIE (CN), Cohere Command (CA), IBM Granite (US), Tencent Hunyuan (CN)

## Inference Providers

Which companies provide inference for models.
The list is meant to be indicative of the most mainstream and most used options, not meant to be exhaustive.
We mix using lab and model family names, to match how conversation about them happens.
E.g. you may read on hacker news "Amazon to host OpenAI models", or "Amazon to host Qwen".
For some providers we end with "..." as there is a long tail.

All major labs also have inference for their own models.
Below we list inference providers that (are expected to) host multiple labs' models.

Hyperscalers first:

- **Amazon ("Bedrock")**: Nova, Anthropic, gpt-oss, gemma, Llama, Qwen, DeepSeek, MiniMax, Kimi, Nemotron, Mistral, ...
- **Microsoft ("Azure Foundry")**: OpenAI, Anthropic, Cohere, Llama, Phi, Mistral, Grok, DeepSeek, ...
- **Google ("Vertex")**: Gemini, Anthropic, Llama, Qwen, GLM, DeepSeek, ...

Inference providers:

- **Cloudflare Workers AI**: gpt-oss, gemma, Llama, Nemotron, Kimi, GLM, Qwen, DeepSeek, Mistral, ...
- **Groq**: Llama, gpt-oss, Qwen, Kimi
- **Cerebras**: gpt-oss, Llama, Qwen, GLM
- **Fireworks AI**: gpt-oss, gemma, Llama, Qwen, GLM, Kimi, DeepSeek, MiniMax, Mistral, ...
- **Together AI**: gpt-oss, gemma, Nemotron, Qwen, MiniMax, GLM, Kimi, Mistral, ...
- **DeepInfra**: Qwen, MiniMax, GLM, Kimi, Nemotron, DeepSeek, ...
- **SiliconFlow**: MiniMax, GLM, Kimi, DeepSeek, Qwen
- **Hugging Face Inference Endpoints**: (Bring your own.)

Routers:

- **OpenRouter**: (Nearly all models from all labs.)
- **LiteLLM**: (Nearly all models from all labs.)
- **OpenCode Zen**: OpenAI, Anthropic, Gemini, Grok, Qwen, MiniMax, GLM, Mistral

## Development Tools

List of most talked-about software development tools, grouped by their usage style.

- **CLI Tools**: Codex (OpenAI), Claude Code (Anthropic), Antigravity (Google), Copilot (GitHub) Vibe (Mistral), OpenCode (Anomaly), Aider (open source)
- **IDE Extensions**: Codex (OpenAI), Claude Code (Anthropic), Copilot (GitHub), Vibe (Mistral), Junie (JetBrains), Q Developer (Amazon), Cline (Cline Bot Inc.)
- **IDEs**: Cursor (SpaceXAI), Antigravity (Google), Kiro (Amazon), Windsurf (Cognition), Zed (Zed Industries), Trae (ByteDance), Qoder (Alibaba)
- **Standalone GUI**: Codex (OpenAI), Claude (Anthropic)
- **SaaS Tools**: Codex (OpenAI), Claude Code (Anthropic), Copilot (GitHub), Devin (Cognition)
- **Browser Dev Tools**: Replit (Replit), AI Studio (Google)
- **Browser App Builders**: Bolt.new (StackBlitz), Lovable (Lovable), Base44 (Wix), v0 (Vercel)

## Tooling Features

The most important concepts used across multiple LLM's and Agents:

- **Context**: All the tokens that are included when next tokens are generated, up to the maximum size (Context Window).
- **Harness**: The software that 'gives' LLMs access to tools, the filesystem, and other external systems.
- **MCP**: Model Context Protocol, standard for connecting AI applications to external systems.
- **AGENTS.md**: Behavioral base instructions for AI agents. (Footnote: "CLAUDE.md" by Anthropic came first and is the same concept, other vendors often have support for it too as it existed first.)
- **Rules**: Scoped (often by path), specific rules for agent behavior - in some tools superseded by other concepts.
- **Skills**: Standard for reusable prompts optionally with included scripts, invoked on demand.
- **Hooks**: Deterministic automations (harness-specific) to react to lifecycle events of agentic flows.
- **Sub-agents**: Specialized agents. Spawn with specific (often limited) context, return results and output to their parent.
- **Memory**: Mechanism (harness-specific) to retain context between sessions.

## Local Inference

The important moving parts of running models on your own hardware.
Requires "open-weight", downloadable models.
The constraint is almost always VRAM, not compute.
Quantization trades quality for fit.

- **Runtimes**: llama.cpp (ggml), Ollama, LM Studio, MLX (Apple), llamafile (Mozilla)
- **Weight Formats**: safetensors (canonical), GGUF (llama.cpp, Ollama), MLX (Apple silicon), AWQ/GPTQ (quantized GPU)
- **Distribution**: Hugging Face Hub, Ollama registry, direct from lab
- **Main runnable model families**: gpt-oss, gemma, llama, Qwen, DeepSeek, GLM, Kimi, Mistral, Nemotron, Phi, MiMo.

## SDK & Application Layer

- **Wire Protocol**: OpenAI-compatible Chat Completions and Responses API, the de facto interop standard.
- **Provider SDKs**: OpenAI SDK, Anthropic SDK, Google GenAI SDK, AWS SDK
- **Agent SDKs**: OpenAI Agents SDK, Claude Agent SDK (Anthropic), Agent Development Kit (Google), Strands (Amazon), Agent Framework (Microsoft)
- **Frameworks**: LangChain, LangGraph, LlamaIndex, Vercel AI SDK, Pydantic AI, Mastra, DSPy, Haystack.
- **Evaluation & Observability**: LangSmith, Langfuse, Braintrust, OpenTelemetry GenAI conventions, LLM-as-judge

## Security and Fialure Modes

LLMs and Agent technology blur the line between data and instructions.
Angles to know about:

- **Prompt Injection**: untrusted input interpreted as instructions, either direct (from user) or indirect (on fetched external sources).
- **Lethal Trifecta**: access to sensitive data, untrusted input, and exfiltration capabilities. Only two is still fine, all three causes security issues.
- **LLM Supply Chain**: things in your supply chain, like marketplace skills or MCP servers, might be compromised.
- **Secrets in context**: any secrets available to the agent might be passed upstream.
- **Model failures**: hallucinations, sycophancy, jailbreaks, bias, etc.

Mitigation options:

- **Sandboxing**: containers, VMs, devcontainers
- **Network Restrictions**: defualt-deny egress as a cheap break
- **Least Privilige**: scoped access, read-only tools by default, no prod access
- **Human in the Loop**: approval gates, plan mode, review before write or execute
- **Auditing**: trails for agent actions
- **Adversarial LLMs**: AI assessing safety of AI actions

## Terminology and Theory

List of important terminology to investigate if you want to do a deep dive into underlying concepts:

- Foundations
  - Neural Network
    - Layer
    - Weights

- Architectures
  - Transformer
    - Attention
    - Mixture of Experts (MoE)
  - Mamba
  - Diffusion

- Models
  - LLM
    - GPT
    - Multi-modal
  - Open Weights

- Representation
  - Tokenization
  - Embeddings
  - Context
    - Context Window
    - Prompt

- Training
  - Loss
    - Backpropagation
    - Perplexity
  - Fine-tuning
    - RLHF
    - RLVR
    - LoRA
  - Distillation

- Inference
  - Logits
    - Softmax
  - Sampling
    - Temperature
    - Top-K
    - Top-P
  - KV Cache
  - Quantization

- Behaviors & Patterns
  - Reasoning
    - Chain of Thought (CoT)
  - Agent
    - Tool Use
  - RAG

## Initiatives & Experiments

Various strange and wonderful GenAI-related initiatives and experiments to be aware of:

- **Dolt**: SQL database with git-style versioning used for AI agent state persistence.
- **Beads**: graph-based issue tracker built on Dolt, for AI agent use.
- **Gas Town, and The Wasteland**: Steve Yegge's multi-agent development environments.
- **Gas City**: Gas Town, rewritten as an SDK for building orchestrators.
- **OpenClaw**: open-source autonomous coding agent framework (by Peter Steinberger)
- **Ralph Loop**: agent execution pattern that loops an LLM until success criteria are met.
- **ChatJimmy**: experimental hardware-based AI interface optimized for speed, by Taalas.
- **Moltbook**: experimental synthetic social netork populated by AI agents