import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

const routes = [
  "/",
  "/services",
  "/software-engineering",
  "/qa-automation",
  "/performance-engineering",
  "/cloud-devops",
  "/ai-data",
  "/it-staffing",
  "/staff-augmentation",
  "/solutions",
  "/industries",
  "/how-we-work",
  "/about",
  "/careers",
  "/contact",
  "/insights",
  "/request-resource",
  "/poc",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
