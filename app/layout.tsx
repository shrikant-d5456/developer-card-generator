import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextStepProvider, NextStep } from "nextstepjs";
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
        <NextStepProvider>
          <NextStep steps={steps} cardComponent={CustomCard}>
            <div className="app-shell">{children}</div>
          </NextStep>
        </NextStepProvider>
      </body>
    </html>
  );
}
