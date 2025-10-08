export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Language",
    skills: ["TypeScript", "JavaScript", "Kotlin", "Python"],
  },
  {
    title: "Front",
    skills: [
      "React",
      "Next.js",
      "styled-components",
      "Emotion CSS",
      "Tailwind CSS",
      "Zustand",
      "TanstackQuery",
      "Redux-toolkit",
      "React-Hook-Form",
      "Zod",
      "WebView",
      "Vercel",
    ],
  },
  {
    title: "Android",
    skills: ["DataBinding", "Flow", "Hilt", "Retrofit", "Coroutine", "DataStore", "ViewModel"],
  },
  {
    title: "Collaborations",
    skills: ["Git", "GitHub", "Notion", "Discord", "Slack"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Nest.JS", "AWS EC2", "AWS Lambda", "AWS API Gateway", "Docker"],
  },
  {
    title: "Tools",
    skills: ["Figma", "Postman", "Zapier", "Google Analytics"],
  },
];
