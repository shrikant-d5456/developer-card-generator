"use client";

import React from "react";
import { VscGithub, VscDebugStart, VscDebugPause } from "react-icons/vsc";
import { useNextStep } from "nextstepjs";
import ShootingStars from "./ShootingStars";
// import BuyMeACoffee from './BuyMeACoffee';

export default function HereSection(): React.JSX.Element {
  const { startNextStep } = useNextStep();
  const [btnRipple, setBtnRipple] = React.useState(true);
  const soundSrc = "/sound.mpeg";
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    audioRef.current = new Audio(soundSrc);
    audioRef.current.preload = "auto";
    const handleEnded = () => setIsPlaying(false);
    audioRef.current.addEventListener("ended", handleEnded);
    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  const handleStartTour = () => {
    startNextStep("mainTour");
    setBtnRipple(false);
  };

  const handlePlaySound = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleStopSound = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };
  
  return (
    <>
      {/* <BuyMeACoffee bottom={24} right={24} /> */}
      <header className=" relative flex items-center justify-center text-white overflow-hidden p-2"
       style={{
      background: "radial-gradient(at 40% 88%, #000000 0px, transparent 50%), radial-gradient(at 40% 14%, #000000 0px, transparent 50%), radial-gradient(at -111% 60.04166634877523%, #84dfff 0px, transparent 60%), radial-gradient(at 94.0301722493665% -51%, #516beb 0px, transparent 50%), #000"
    }}
      >
        {/* Decorative corner glow */}
        <ShootingStars />
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {isPlaying ? 
          <button
            onClick={handleStopSound}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-blue-800 shadow-lg shadow-blue-500/30 px-3 py-2 text-sm font-medium text-white backdrop-blur "
          >
            
            <VscDebugPause size={14} className=" font-extrabold animate-pulse "/>
            stop
              {isPlaying && (
            <div className="flex items-center gap-2 text-xs text-cyan-100 px-2 py-2 ">
              <div className="flex items-end gap-0.5" aria-hidden="true">
                <span className="block w-1 h-3 bg-gray-200 animate-eq-1 rounded-full" />
                <span className="block w-1 h-4 bg-gray-200 animate-eq-2 rounded-full" />
                <span className="block w-1 h-2 bg-gray-200 animate-eq-3 rounded-full" />
                <span className="block w-1 h-4 bg-gray-200 animate-eq-2 rounded-full" />
                <span className="block w-1 h-3 bg-gray-200 animate-eq-1 rounded-full" />
              </div>
            </div>
          )}
          </button>
          :
          <button
            onClick={handlePlaySound}
            className="relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-blue-800 p-1 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 "
          >
                        <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" aria-hidden="true" />

            <span className="relative z-10 inline-flex items-center gap-1 rounded-full py-2 px-3 ">
             <VscDebugStart size={20} className=" font-extrabold " /> ai overview
            </span>
          </button> 
        }
        </div>

        <style jsx>{`
          @keyframes eq1 { 0% { transform: scaleY(0.7); } 50% { transform: scaleY(1.2); } 100% { transform: scaleY(0.7); } }
          @keyframes eq2 { 0% { transform: scaleY(0.6); } 50% { transform: scaleY(1.4); } 100% { transform: scaleY(0.6); } }
          @keyframes eq3 { 0% { transform: scaleY(0.8); } 50% { transform: scaleY(1.6); } 100% { transform: scaleY(0.8); } }
          .animate-eq-1 { animation: eq1 1s ease-in-out infinite; transform-origin: bottom; }
          .animate-eq-2 { animation: eq2 1s ease-in-out infinite; transform-origin: bottom; }
          .animate-eq-3 { animation: eq3 1s ease-in-out infinite; transform-origin: bottom; }
        `}</style>

        <div className="container mx-auto px-2 lg:px-20 relative z-10">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className=" text-xl lg:text-2xl font-bold tracking-tight bg-linear-to-tl from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                developercard.me
              </div>
              <span className="inline-flex items-center text-xs px-2 py-1 bg-yellow-400 text-black rounded-full font-medium shadow-sm">
                v1
              </span>
            </div>

            <div className="flex items-center gap-3">
              <i className="text-sm p-2 rounded-full border border-gray-700/60 backdrop-blur-sm hover:bg-white/5 transition">
                <a href="https://github.com/shrikant-d5456/developer-card-generator" target="_blank" aria-label="GitHub Profile" rel="noopener noreferrer"><VscGithub size={20} /></a>
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
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-blue-400 to-blue-800">
                Developer Card </span>Generator
            </h1>

            <p className="mt-6 text-sm md:text-xl text-gray-300 leading-relaxed">
              Create stunning developer profile cards in seconds with{" "}
              <strong>developercard.me</strong>. Customize gradients, avatar, skills,
              social links, and export high-resolution images or embeddable code
              for your portfolio and GitHub profile.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4 items-start">
              <a
                href="#generate"
                className="inline-flex items-center gap-3 px-6 md:py-3  py-2 rounded-full bg-linear-to-r from-blue-500 to-blue-800 shadow-lg shadow-blue-500/30  hover:scale-[1.02] transform transition  text-white font-semibold"
              >
                ✨ Generate Your developer card
              </a>

              <button
                onClick={handleStartTour}
                className={`${btnRipple ? "btn_ripple" : ""} cursor-pointer inline-flex items-center justify-center md:px-6 md:py-3 px-4 py-2 rounded-full bg-black/30 border border-white/10 shadow-sm mb-6`}
              >
                <span className="mr-2 text-lg">🏃🏻‍♂️‍➡️</span>
                <span className="text-gray-200 font-semibold">Show Steps</span>
              </button>
            </div>

            <div className="mt-12 w-40 h-1 rounded-full bg-white/20 mx-auto" />
          </div>
        </div>
      </header>
    </>
  );
}
