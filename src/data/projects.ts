export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "FrontDesk – Agentic Natural Language Query System",
    description:
      "Production tiered-hybrid NL-to-SQL agent over a hotel dataset using OpenAI function-calling " +
      "to route queries across a parameterized tool, a semantic query-spec compiler, and a guarded " +
      "text-to-SQL fallback — minimizing LLM autonomy while preserving open-ended question coverage. " +
      "Includes an end-to-end reliability stack with sqlglot AST-level validation, read-only execution, " +
      "one-shot self-correction retries, grounded narration, and per-stage tracing with Langfuse " +
      "to measure path-selection accuracy, hallucination rate, and decline correctness.",
    stack: ["Python", "FastAPI", "SQLite", "Streamlit", "OpenAI API", "Langfuse", "sqlglot"],
    github: "https://github.com/siddharthc30/frontdesk",
  },
  {
    title: "InlineAsk – Browser Extension",
    description:
      "Chrome extension enabling inline LLM follow-up questions on highlighted text across Claude, " +
      "ChatGPT, Gemini, and Copilot, with a pluggable provider layer integrating the Anthropic and " +
      "OpenAI APIs. Features frontend DOM adapters for grounded context extraction under a 4000-token " +
      "budget, AES-GCM credential encryption, and retry/timeout handling for reliability.",
    stack: ["TypeScript", "Chrome MV3", "Anthropic API", "OpenAI API"],
    github: "https://github.com/siddharthc30/inlineask",
  },
];
