
import type { Metadata } from "next";

export const SITE_URL =
  "https://michael-garcia-95.github.io/portfolio-website";

export function siteUrl(path = "/"): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");

  return cleanPath
    ? `${SITE_URL}/${cleanPath}/`
    : `${SITE_URL}/`;
}

export function createPageMetadata(
  title: string,
  description: string,
  pathname = "/"
): Metadata {
  const url = siteUrl(pathname);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: "Michael Garcia",
      title,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
