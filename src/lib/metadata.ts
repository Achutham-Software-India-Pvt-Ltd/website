import type { Metadata } from "next";
import { siteConfig } from "./config";

/**
 * Build consistent per-page metadata. Pass a path starting with "/".
 */
export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const fullTitle =
    path === "/" ? title : `${title} | ${siteConfig.brandName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
