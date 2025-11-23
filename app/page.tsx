import type { Metadata } from "next";
import HeroSection from "./components/shared/HeroSection";
import Footer from "./components/shared/Footer";
import TipsFAQAndMore from "./components/shared/TipsFAQAndMore";
import Home from "./home/Home";

export const metadata : Metadata = {
  title: "Developer Card - Create Your Dev Card",
  description:
    "Create a developer card - share your profile, links, and contact info in one beautiful card.",
  applicationName: "Developer Card",
  keywords: [
    "developer card generator",
    "developer portfolio",
    "profile card generator",
    "profile.dev",
  ],
  openGraph: {
    title: "Developer Card - Create Your Dev Card",
    description: "Create and download your developer card in seconds.",
    url: "https://developercard.me",
    siteName: "Developer Card",
    images: [
      {
        url: "https://developercard.me/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Card",
    description: "Create and download your developer card",
    images: ["https://developercard.me/og-image.png"],
  },
  alternates: {
    canonical: "https://developercard.me",
  },
  icons: {
    icon: '/window.svg',
    apple: '/window.svg',
  }
};

export default function Page() {
  return (
        <main className=" w-full bg-[#0a0909] lg:p-10 p-2">
          <header className="w-full">
            <HeroSection />
          </header>
          <section className=" w-full">
            <Home/>
          </section>
          <TipsFAQAndMore />
          <footer>
             <Footer />
          </footer>        
        </main>
  );
}
