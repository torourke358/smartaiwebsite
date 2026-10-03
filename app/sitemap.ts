import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/industries",
    ...industries.map((industry) => `/industries/${industry.slug}`),
    "/faq",
    "/pricing",
    "/how-it-works",
    "/about",
    "/case-study",
    "/work",
    "/audit",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
