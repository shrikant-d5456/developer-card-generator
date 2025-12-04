import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextStepProvider, NextStep } from "nextstepjs";
import { steps } from "../library/step";
import CustomCard from "./components/features/card/CustomCard";
import { Toaster } from "sonner";
import ReactLenis from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Metadata handled by Next.js `metadata` export in this file (server-side) */}
        <ReactLenis root options={{ smoothWheel: true, lerp: 0.2 }}>
          <Toaster richColors position="top-center" />
          <NextStepProvider>
            <NextStep steps={steps} cardComponent={CustomCard}>
              <div className="app-shell">{children}</div>
            </NextStep>
          </NextStepProvider>
        </ReactLenis>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Developer Card — Create Your Dev Card",
  description:
    "Create a developer card — share your profile, links, and contact info in one beautiful card.",
  keywords: [
    "developer card generator",
    "developer card me",
    "profile card",
    "my developer card",
    "share links card",
  ],
  authors: [{ name: "developercard.me" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Developer Card — Create Your Dev Card",
    description:
      "Create a developer card — share your profile, links, and contact info in one beautiful card.",
    url: "https://developercard.me",
    type: "website",
    images: ["/favicon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Card — Create Your Dev Card",
    description:
      "Create a developer card — share your profile, links, and contact info in one beautiful card.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};
