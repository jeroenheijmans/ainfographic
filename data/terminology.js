/* Terminology and Theory. Source: DATA.md § "Terminology and Theory". */
window.DATA = window.DATA || {};
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
