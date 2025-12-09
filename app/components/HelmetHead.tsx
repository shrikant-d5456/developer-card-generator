"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  author?: string;
  type?: string;
}

export default function HelmetHead({
  title = "Developer Card — Create Your Developer Card",
  description = "Create a developer card — share your profile, links, and contact info in one beautiful card.",
  keywords = "developer card generator, developer card me, profile card, my developer card, share links card",
  image = "/favicon.png",
  url = "https://developercard.me",
  author = "developercard.me",
  type = "website",
}: HelmetHeadProps) {
  const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="apple-mobile-web-app-title" content="DevCard" />
      {/* Author & Robots */}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      <meta name="apple-mobile-web-app-title" content="DevCard" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />


      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Developer Card" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </Helmet>
  );
}
