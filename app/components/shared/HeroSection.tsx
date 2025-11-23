"use client";

import React from "react";
import { VscGithub } from "react-icons/vsc";
import { useNextStep } from "nextstepjs";
import ShootingStars from "./ShootingStars";
// import BuyMeACoffee from './BuyMeACoffee';

export default function HereSection(): React.JSX.Element {
  const { startNextStep } = useNextStep();
  const [btnRipple, setBtnRipple] = React.useState(true);

  const handleStartTour = () => {
    startNextStep("mainTour");
    setBtnRipple(false);
  };

  return (
    <>
      {/* <BuyMeACoffee bottom={24} right={24} /> */}
      <header className=" relative flex items-center justify-center text-white mb-20 overflow-hidden">
        {/* Decorative corner glow */}
        <ShootingStars />
        <div className="container mx-auto px-2 lg:px-20 relative z-10">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className=" text-xl lg:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-900">
                DevCard
              </div>
              <span className="inline-flex items-center text-xs px-2 py-1 bg-yellow-400 text-black rounded-full font-medium shadow-sm">
                v1
              </span>
            </div>

            <div className="flex items-center gap-3">
              <i className="text-sm p-2 rounded-full border border-gray-700/60 backdrop-blur-sm hover:bg-white/5 transition">
                <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub Profile" rel="noopener noreferrer"><VscGithub size={20} /></a>
              </i>
            </div>
          </nav>

          {/* Hero */}
          <div id="step1" className="mt-12 lg:mt-20 text-left max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-black/30 border border-white/10 shadow-sm mb-6">
              <span className="mr-3 text-lg">🚀</span>
              <span className="text-sm text-gray-200">
                Generate developer cards — fast
              </span>
              <svg
                className="ml-4 w-4 h-4 text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-6xl lg:font-bold leading-tight">
              <span className="text-white">Free </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-blue-400 to-blue-600">
                Developer Card </span>Generator
            </h1>

            <p className="mt-6 text-sm md:text-xl text-gray-300 leading-relaxed">
              Create stunning developer profile cards in seconds with{" "}
              <strong>DevCard</strong>. Customize gradients, avatar, skills,
              social links, and export high-resolution images or embeddable code
              for your portfolio and GitHub profile.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4 items-start">
              <a
                href="#generate"
                className="inline-flex items-center gap-3 md:px-6 md:py-3 px-4 py-2 rounded-full bg-linear-to-r from-blue-500 to-blue-500 hover:scale-[1.02] transform transition shadow-lg text-white font-semibold"
              >
                ✨ Generate Your DevCard
              </a>

              <button
                onClick={handleStartTour}
                className={`${btnRipple ? "btn_ripple" : ""} inline-flex items-center justify-center md:px-6 md:py-3 px-4 py-2 rounded-full bg-black/30 border border-white/10 shadow-sm mb-6`}
              >
                <span className="mr-3 text-lg">🏃🏻‍♂️‍➡️</span>
                <span className="text-gray-200">Show Steps</span>
              </button>
            </div>

            <div className="mt-12 w-40 h-1 rounded-full bg-white/20 mx-auto" />
          </div>
        </div>
      </header>
    </>
  );
}
