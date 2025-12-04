"use client";
import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetHead({ title, description, keywords, image }: { title?: string; description?: string; keywords?: string; image?: string }) {
  return (
    <Helmet>
  {/* Basic SEO */}
  {title && <title>{title}</title>}
  {description && <meta name="description" content={description} />}
  {keywords && <meta name="keywords" content={keywords} />}

  {/* Author */}
  <meta name="author" content="developercard.me" />

  {/* Robots (for crawl instructions) */}
  <meta name="robots" content="index, follow" />

  {/* Canonical URL (avoid duplicate content) */}
  <link rel="canonical" href={"https://developercard.me"}  />
  <link rel="icon" href="/favicon.png.png"/>

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={"https://developercard.me"} />
  <meta property="og:image" content={image || "/favicon.png.png"} />
  <meta name="twitter:image" content={image || "/favicon.png.png"} />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image || "/favicon.png.png"} />
</Helmet>

  );
}
