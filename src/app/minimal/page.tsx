import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { youtubeVideosData } from "@/utils/constant";
import { MinimalWorkList } from "./MinimalWorkList";
import MinimalGitGraph from "./MinimalGitGraph";
import type { Activity } from "react-activity-calendar";
import "./minimal.css";

export const metadata: Metadata = {
  title: "Fardeen Mansoori",
  description:
    "Founding engineer building AI products. Full-stack, ships fast.",
};

const work = [
  {
    title: "ColdmailAI",
    meta: "SaaS · AI outreach · Gmail campaigns",
    description:
      "End-to-end product — email analysis, AI rewrites, compliance-aware campaigns, payments, and auth.",
    link: "https://coldmailai.fardeen.me/",
    source: "https://github.com/Fardeen26/coldmailai",
  },
  {
    title: "Textify",
    meta: "Adobe-funded · Adobe Express add-on",
    description:
      "Text extraction from images in Adobe Express. Funded and published through Adobe's developer program.",
    link: "https://100xaddons.com",
  },
  {
    title: "Credit Buddy",
    meta: "AI · Fintech",
    description:
      "AI-powered credit card insights — users get faster, clearer answers on rewards and fees.",
    link: "https://creditbuddy.fardeen.me",
    source: "https://github.com/Fardeen26/gen-ai",
  },
  {
    title: "Flick.AI",
    meta: "200+ users · Consumer AI",
    description:
      "Tweet refinement with full customization. Built because generic LLMs miss tone and intent.",
    link: "https://flickai.fardeen.me",
    source: "https://github.com/Fardeen26/flick-ai",
  },
  {
    title: "ColdmailAI for Gmail",
    meta: "Chrome extension · Published",
    description:
      "Draft analysis, feedback, and AI rewrites inside Gmail. Live on Chrome Web Store.",
    link:
      "https://chromewebstore.google.com/detail/coldmailai-for-gmail/alkcehnkimicfimhgecenflniiignfga",
    source: "https://github.com/Fardeen26/coldmailai-extension",
  },
];

const experience = [
  {
    role: "Founding Engineer",
    org: "Naia",
    period: "Aug 2025 – present",
    link: "https://naiaredesign.com/",
    note: "Building product from zero — full stack, shipping weekly.",
  },
  {
    role: "Adobe Developer Champion",
    org: "Adobe Inc.",
    period: "2024 – present",
    link: "https://www.adobe.com/",
    note: "Adobe-funded add-ons and developer advocacy.",
  },
  {
    role: "Freelance",
    org: "Full stack applications",
    period: "2024 – early 2025",
    link: "https://x.com/fardeentwt",
    note: "Shipped production apps for clients end-to-end.",
  },
  {
    role: "Full Stack Development — TA",
    org: "Stealth Startup",
    period: "Feb 2024 – Jun 2024",
    link: "https://x.com/fardeentwt",
    note: "",
  },
];

async function getRecentBlogs() {
  try {
    return await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });
  } catch {
    return [];
  }
}

async function getGitHubContributions() {
  try {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Fardeen26?y=last",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return null;

    const data = await response.json();

    return {
      contributions: data.contributions as Activity[],
    };
  } catch {
    return null;
  }
}

export default async function MinimalPortfolioPage() {
  const blogs = await getRecentBlogs();
  const github = await getGitHubContributions();

  return (
    <main className="minimal-page">
      <div className="minimal-inner">
        <header className="minimal-header">
          <div className="minimal-photo-wrap">
            <Image
              src="/fardeen-photo.png"
              alt="Fardeen Mansoori"
              width={997}
              height={1024}
              className="minimal-photo"
              priority
            />
          </div>

          <div className="minimal-header-body">
            <h1 className="minimal-name">Fardeen Mansoori</h1>
            {/* <p className="minimal-headline">
              Founding Engineer · Full Stack · AI Products
            </p> */}
            <p className="minimal-bio">
              21, trying to make my life easier by building the things i need.
            </p>
            <p className="minimal-links">
              <a href="https://x.com/fardeentwt" target="_blank" rel="noopener noreferrer">
                x
              </a>
              <a href="https://github.com/Fardeen26" target="_blank" rel="noopener noreferrer">
                github
              </a>
              <a
                href="https://www.linkedin.com/in/fardeenmansoori/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <a href="mailto:fardeenmansoori@gmail.com">mail</a>
              <a href="https://cal.com/fardeentwt/15min" target="_blank" >meet</a>
            </p>
          </div>
        </header>

        {github && (
          <MinimalGitGraph contributions={github.contributions} />
        )}

        {blogs.length > 0 && (
          <>
            <h2 className="minimal-section-title">i wrote some stuff</h2>
            <hr className="minimal-rule" />
            <ul className="minimal-list">
              {blogs.map((blog) => (
                <li key={blog.id} className="minimal-list-item">
                  <a href={`/blogs/${blog.id}`} className="minimal-list-item-title">{blog.title}</a>
                  {/* <span className="minimal-list-date">
                    {" "}
                    · {formatDate(blog.createdAt.toISOString())}
                  </span> */}
                </li>
              ))}
            </ul>
            <p className="minimal-entry-links minimal-all-posts">
              <a href="/blogs">all posts</a>
            </p>
          </>
        )}

        <h2 className="minimal-section-title">places i worked at</h2>
        <hr className="minimal-rule" />
        {experience.map((item) => (
          <article key={`${item.role}-${item.org}`} className="minimal-entry">
            <h3 className="minimal-entry-title">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.role}
              </a>
            </h3>
            <p className="minimal-entry-meta">
              {item.org} · {item.period}
            </p>
            {/* {item.note && (
              <p className="minimal-entry-desc">{item.note}</p>
            )} */}
          </article>
        ))}

        <h2 className="minimal-section-title">proof if work</h2>
        <hr className="minimal-rule" />
        <MinimalWorkList items={work} />

        <h2 className="minimal-section-title">Videos</h2>
        <hr className="minimal-rule" />
        <div className="minimal-videos">
          {youtubeVideosData.map((video, idx) => (
            <a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                alt=""
                className="minimal-video-thumb"
              />
              <span className="minimal-video-label">
                {video.title ?? `Tutorial ${idx + 1}`} — watch
              </span>
            </a>
          ))}
        </div>

        <h2 className="minimal-section-title">Education</h2>
        <hr className="minimal-rule" />
        <article className="minimal-entry">
          <h3 className="minimal-entry-title">
            <a href="https://www.uok.ac.in/" target="_blank" rel="noopener noreferrer">
              Bachelors of Computer Application
            </a>
          </h3>
          <p className="minimal-entry-meta">
            University of Kota · Sep 2025
          </p>
        </article>

        <p className="minimal-cta minimal-cta-footer">
          Building something real?{" "}
          <a
            href="https://cal.com/fardeentwt/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s talk →
          </a>
        </p>

        <Link href="/" className="minimal-back">
          ← back to main site
        </Link>
      </div>
    </main>
  );
}
