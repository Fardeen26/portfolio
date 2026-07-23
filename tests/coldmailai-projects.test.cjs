const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

process.env.TS_NODE_COMPILER_OPTIONS = JSON.stringify({
  module: "commonjs",
  moduleResolution: "node",
});
require("ts-node/register/transpile-only");

const {
  coldmailaiWebProject,
  webExtensionProjects,
} = require("../src/data/coldmailai-projects.ts");

test("lists the ColdmailAI web app in Full Stack", () => {
  assert.deepEqual(coldmailaiWebProject, {
    logo: "/coldmailai.png",
    title: "ColdmailAI",
    description:
      "An AI-powered cold outreach workspace for analyzing and rewriting emails, managing contacts and templates, and running compliance-aware Gmail campaigns.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Neon PostgreSQL",
      "OpenRouter",
      "Gmail API",
      "Dodo Payments",
      "Tailwind CSS",
    ],
    link: "https://coldmailai.fardeen.me/",
    source: "https://github.com/Fardeen26/coldmailai",
  });
});

test("lists the ColdmailAI extension in Web Extensions", () => {
  assert.deepEqual(webExtensionProjects, [
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
  ]);
});

test("uses the exact ColdmailAI Chrome Web Store listing icon", () => {
  const icon = readFileSync(join(__dirname, "../public/coldmailai.png"));
  const digest = createHash("sha256").update(icon).digest("hex");

  assert.equal(
    digest,
    "92ee6a8e660f4cec3df3d86969bb8ca3e0a3697dd1886f26b6c9e5aba8785d83",
  );
});

test("renders a Web Extensions tab and project panel", () => {
  const tabs = readFileSync(
    join(__dirname, "../src/components/TabbedProjectList.tsx"),
    "utf8",
  );

  assert.match(tabs, /TabsTrigger value="extensions"[^>]*>Web Extensions/);
  assert.match(tabs, /TabsContent value="extensions"/);
  assert.match(tabs, /<WebExtensionProjects \/>/);

  const fullStack = readFileSync(
    join(__dirname, "../src/app/projects/components/ProjectCardList.tsx"),
    "utf8",
  );
  assert.match(
    fullStack,
    /const projects = \[coldmailaiWebProject, \.\.\.data\]/,
  );
});
