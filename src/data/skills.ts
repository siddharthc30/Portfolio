export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "Go", "SQL", "Bash"],
  },
  {
    label: "AI & ML",
    items: ["Pytorch", "Tensorflow", "Hugging Face", "LangChain", "LangSmith", "LangGraph", "OpenAI API", "Computer vision", "RAG" ]
    
  },
  {
    label: "Backend & API",
    items: ["SpringBoot", "FastAPI", "Flask", "RESTful APIs", "WebSocket", "Microservices"],
  },
  {
    label: "Data & Databases",
    items: ["PostgreSQL", "MySQL", "Vector Databases", "Spark", "Hadoop", "kafka"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Github Actions", "AWS", "Azure Dev Tools", "Git", "Linux"],
  },

  {
    label: "Currently Learning",
    items: ["System Design", "ML & LLMOps", "LLM evaluation", "LLM optimization", "Inference Engineering"],
  },
];
