
import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "Michael Garcia",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
