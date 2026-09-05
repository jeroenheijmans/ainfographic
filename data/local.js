/* Local Inference. Source: DATA.md § "Local Inference". */
window.DATA = window.DATA || {};
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
