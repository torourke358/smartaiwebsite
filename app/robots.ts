import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// AI assistants are a lead source, so their crawlers are named and allowed
// explicitly. Search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot)
// decide whether we can be cited; user bots fetch a page when someone asks;
// training bots (GPTBot, ClaudeBot) and the Google-Extended / Applebot-Extended
// control tokens decide whether models learn who we are.
const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiCrawlers, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
