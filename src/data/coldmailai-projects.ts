import type { Project } from "@/types/project";

export const coldmailaiWebProject: Project = {
  logo: "/coldmailai.png",
  title: "ColdmailAI",
  description:
    "AI-powered cold outreach workspace for analyzing and rewriting emails, and running compliance-aware Gmail campaigns.",
  techStack: [
    "Next.js",
    "TypeScript",
    "Clerk",
    "OpenRouter",
    "Gmail API",
    "Dodo Payments",
    "Tailwind CSS",
  ],
  link: "https://coldmailai.fardeen.me/",
  source: "https://github.com/Fardeen26/coldmailai",
};

export const webExtensionProjects: Project[] = [
  {
    logo: "/coldmailai.png",
    title: "ColdmailAI for Gmail",
    description:
      "A Chrome extension that analyzes active Gmail drafts, provides actionable feedback, and previews AI-assisted rewrites before applying them.",
    techStack: [
      "Chrome Extension",
      "WXT",
      "React",
      "TypeScript",
      "Clerk",
    ],
    link:
      "https://chromewebstore.google.com/detail/coldmailai-for-gmail/alkcehnkimicfimhgecenflniiignfga",
    source: "https://github.com/Fardeen26/coldmailai-extension",
  },
];
