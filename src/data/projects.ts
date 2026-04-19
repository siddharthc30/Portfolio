export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Distributed Task Queue",
    description:
      "A lightweight distributed task queue built on Redis Streams and Python. " +
      "Supports delayed jobs, automatic retries, and horizontal worker scaling. " +
      "Designed for high-throughput background job processing in microservice architectures.",
    stack: ["Python", "Redis", "Docker", "asyncio"],
    github: "https://github.com",
  },
  {
    title: "ML Inference API",
    description:
      "REST API for serving fine-tuned transformer models with request batching and " +
      "result caching. Built with FastAPI and Hugging Face Transformers, deployed on " +
      "AWS Lambda — achieving sub-100ms p99 latency at moderate traffic.",
    stack: ["FastAPI", "PyTorch", "HuggingFace", "AWS Lambda", "Python"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];
