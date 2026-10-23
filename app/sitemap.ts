import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work",
    "/about",
    "/contact",
    "/services",
    ...projects.map((project) => project.href),
  ];

  return paths.map((path) => ({
    url: siteUrl(path),
  }));
}
