import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextStepProvider, NextStep } from "nextstepjs";
import HelmetHead from "./components/HelmetHead";
import { steps } from "../library/step";
import CustomCard from "./components/features/card/CustomCard";
import { Toaster } from "sonner";

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
        <Toaster richColors position="top-center" />
        <HelmetHead
          title={"Developer Card — Create Your Dev Card"}
          description={"Create a developer card — share your profile, links, and contact info in one beautiful card."}
          keywords={"developer card generator, developer card me, profile card, my developer card, share links card"}
          image={"/profile-card.png"}
        />
        <NextStepProvider>
          <NextStep steps={steps} cardComponent={CustomCard}>
            <div className="app-shell">{children}</div>
          </NextStep>
        </NextStepProvider>
      </body>
    </html>
  );
}
