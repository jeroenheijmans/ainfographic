/* Labs and Models — graph data for the mind-map section.
   Source: DATA.md § "Labs and Models". Content is human-authored; do not
   change facts here without coordinating with the human operator. */
window.DATA = window.DATA || {};
window.DATA.labs = {
  root: "Providers & Models",
  regions: [
    {
      name: "North America",
      labs: [
        { name: "SpaceXAI", country: "US",
          main: ["Grok"],
          secondary: ["Imagine", "Voice"] },
        { name: "Anthropic", country: "US",
          main: ["Claude Haiku", "Claude Sonnet", "Claude Opus", "Claude Fable",
                 { name: "Claude Mythos", footnote: "Not publicly available." }] },
        { name: "Google", country: "US",
          main: ["Gemini Flash", "Gemini Pro", "Gemma"],
          secondary: ["Imagen", "Veo", "Chirp"] },
        { name: "OpenAI", country: "US",
          main: ["GPT Astra", "GPT Sol", "GPT Luna", "GPT Terra", "gpt-oss"],
          secondary: ["GPT Codex", "GPT nano", "GPT mini", "Sora", "GPT Image"] },
        { name: "Microsoft", country: "US",
          main: ["Phi"] },
        { name: "Amazon", country: "US",
          main: ["Nova Micro", "Nova Lite", "Nova Pro", "Nova Premier"],
          secondary: ["Nova Canvas", "Nova Reel", "Nova Sonic"] },
        { name: "Meta", country: "US",
          main: ["Llama"] },
        { name: "NVIDIA", country: "US",
          main: ["Nemotron Nano", "Nemotron Super", "Nemotron Ultra"],
          secondary: ["Nemotron Speech"] }
      ]
    },
    {
      name: "Europe",
      labs: [
        { name: "Mistral", country: "FR",
          main: ["Ministral", "Mistral Small", "Mistral Medium", "Mistral Large", "Devstral", "Magistral"],
          secondary: ["Voxtral", "OCR"] }
      ]
    },
    {
      name: "Asia",
      labs: [
        { name: "Alibaba", country: "CN",
          main: ["Qwen", "Qwen-Coder"],
          secondary: ["Qwen-VL", "Qwen-Audio", "Qwen-Omni"] },
        { name: "DeepSeek", country: "CN",
          main: ["DeepSeek Flash", "DeepSeek Pro"] },
        { name: "MiniMax", country: "CN",
          main: ["MiniMax"] },
        { name: "Z.ai", country: "CN",
          main: ["GLM"] },
        { name: "Moonshot", country: "CN",
          main: ["Kimi"] },
        { name: "Xiaomi", country: "CN",
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
