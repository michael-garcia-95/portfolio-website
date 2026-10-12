
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
  const imageUrl = `${SITE_URL}/social-preview.png`;

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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Michael Garcia — Full-Stack Software Developer",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
