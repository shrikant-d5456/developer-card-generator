'use client';
import React, { useEffect } from "react";
import { FiFile, FiX, FiDownload, FiCopy } from "react-icons/fi";
import { VscFiles, VscEllipsis, VscGlobe } from "react-icons/vsc";
import { ProfileData, ThemeColors } from "../../../../types/data";
import { toast } from 'sonner';
import * as htmlToImage from "html-to-image";
import DownloadCardPreview from './DownloadCardPreview';
import { div } from "framer-motion/client";

function sanitizeColor(color: string) {
  if (!color) return '#000';

  if (/oklab\s*\(/i.test(color)) return '#000';
  return color;
}

export default function CardPreview({ data, themeColors }: {
  data: ProfileData; themeColors: ThemeColors
}) 
{
  const [displayCardPreview, setDisplayCardPreview] = React.useState(false);

  const [cardTheme, setCardTheme] = React.useState(true);
  const [cardLoading, setCardLoading] = React.useState(false);

  useEffect(() => {
    setCardLoading(true);
    const timer = setTimeout(() => {
      setCardLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [data,  cardTheme]);

  const downloadImage = async () => {
    // Wait a frame to ensure the preview is rendered into the DOM
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

    const card = document.getElementById("card");
    if (!card) {
      setDisplayCardPreview(false);
      return;
    }

    try {
      const dataUrl = await htmlToImage.toPng(card, {
        cacheBust: true,
        pixelRatio: 2,
        imagePlaceholder: '',
      });

      const link = document.createElement("a");
      link.download = `${data.name || "profile"}-card.png`;
      link.href = dataUrl;
      link.click();

      toast.success("Card downloaded successfully!");
      setDisplayCardPreview(true);
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Download Error!");
    } finally {
      // Hide the preview after a short delay so user can see it briefly
      setTimeout(() => setDisplayCardPreview(false), 10000);
    }
  };

  let CardPreviewTheme = cardTheme
    ? {
      background: `linear-gradient(${themeColors.direction === 'to-r' ? 'to right' :
        themeColors.direction === 'to-l' ? 'to left' :
          themeColors.direction === 'to-t' ? 'to top' :
            themeColors.direction === 'to-b' ? 'to bottom' :
              themeColors.direction === 'to-br' ? 'to bottom right' :
                themeColors.direction === 'to-bl' ? 'to bottom left' :
                  themeColors.direction === 'to-tr' ? 'to top right' :
                    'to top left'}, ${sanitizeColor(themeColors.color1 ?? '#000')}, ${sanitizeColor(themeColors.color2 ?? '#000')}, ${sanitizeColor(themeColors.color3 ?? '#000')})`,
    }
    : {
      background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${themeColors.image || 'https://tse3.mm.bing.net/th/id/OIP.4ydlAHBvIWvH_5jYEeO_RgHaHa?w=1960&h=1960&rs=1&pid=ImgDetMain&o=7&rm=3'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

  const toggleCardTheme = () => {
    setCardTheme((prev) => !prev);
  };

  const bigPreviewImg = () => {
    const card = document.getElementById("card");
    if (!card) return;
    htmlToImage.toPng(card, {
      cacheBust: true,
      pixelRatio: 2,
      imagePlaceholder: '',
    }).then((dataUrl) => {
      const imgWindow = window.open("");
      if (imgWindow) {
        imgWindow.document.write(`<img src="${dataUrl}" alt="Card Preview" style=" object-fit: contain; width: 100%; height: 100%; background: black; margin: 0 !important;" />`);
        imgWindow.document.body.style.margin = "0";
      }

    })
      .catch((error) => {
        console.error("Error generating image:", error);
        toast.error('Error to open image!');
      });
  };

  return (
    <div className="flex flex-col gap-4 w-[600px] font-sans ml-8">
      {
        displayCardPreview &&
        <div className="fixed w-full h-screen bg-black/80 bg-blur left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className=" w-full h-full flex justify-center items-center">
            <DownloadCardPreview data={data} themeColors={themeColors} />
          </div>
        </div>
      }
      <div className="flex gap-3 justify-between items-center">

        <label id='card-settings' className="inline-flex items-center me-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer border-2 border-e-gray-400"
            onClick={toggleCardTheme}
            aria-pressed={!cardTheme}
          />
          <div className="relative w-9 h-5 bg-neutral-quaternary   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span className=" text-gray-400 ms-3 text-sm font-medium text-heading">{cardTheme ? 'Use Background Image' : 'Use Gradient Background'}</span>
        </label>

        <span className="text-sm text-gray-400">(current: {cardTheme ? 'Gradient' : 'Image'})</span>

      </div>

      {/* VS Code Window */}
      <div id="card" className="p-10 cursor-pointer"
        style={CardPreviewTheme}
        onClick={() => bigPreviewImg()}
      >
        {
            cardLoading ? (
              <div className=" absolute flex items-center justify-center bg-black/10 pr-4">
              <p className=" text-white font-semibold text-sm text-shadow-lg  z-50">Updating card Style<span className=" absolute animate-spin mt-[1px]">🌟</span> </p>
              </div>
             ) : ""
          }
        <div id='generate' className={` ${cardLoading ? ' cursor-progress animate-pulse blur-2xl' : ''} relative group  rounded-lg shadow-2xl overflow-hidden `}>
          <div className=" -top-52 h-[920px] w-20 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45  -left-30 group-hover:left-[200%] duration-500 delay-200" />
          {/* Title Bar */}
          
          <div className="bg-[#0d0d0d] px-4 py-3 flex items-center justify-between border-b-2 border-[#262626]">
            <div className=" w-full flex items-center justify-between gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffd93d]"></div>
                <div className="w-3 h-3 rounded-full bg-[#6bcf7f]"></div>
                <span className="text-[#e0e0e0] text-xs ml-2 font-semibold">profile.dev</span>
              </div>
              <span><VscEllipsis className="text-white" size={14} /></span>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="bg-[#1a1a1a] flex items-center justify-between border-b-2 border-[#262626]">
            <div className="flex items-center gap-2 px-3 py-2 text-xs bg-[#0d0d0d] border-r border-[#262626] text-[#ffffff] font-medium">
              <FiFile className="text-[#64b5f6]" size={14} />
              <span>profile.jsx</span>
              <FiX className="text-[#9e9e9e] hover:text-[#e0e0e0] cursor-pointer ml-2" size={14} />
            </div>

          </div>

          <div className="flex">
            {/* Activity Bar - Narrow icon sidebar */}
            <div className="bg-[#121212] w-10 border-r-2 border-[#262626] flex flex-col items-center py-4 gap-4">
              <div className="text-[#e0e0e0] hover:text-white cursor-pointer transition">
                <VscFiles size={20} />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 py-4 px-2 bg-[#0d0d0d]">
              <div className="bg-[#0d0d0d] rounded-lg font-mono text-sm">
                <div className="text-[#d0d0d0]">
                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right mr-4 select-none">1</span>
                    <span className="text-[#e0e0e0]">{'{'}</span>
                  </div>

                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right select-none">2</span>
                    <span className="ml-8">
                      <span className="text-[#64b5f6]">"name"</span>
                      <span className="text-[#e0e0e0]">: </span>
                      <span className="text-[#f4c88f] lowercase ">"{data.name || 'Your Name'}"</span>,
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right select-none">3</span>
                    <span className="ml-8">
                      <span className="text-[#64b5f6]">"role"</span>
                      <span className="text-[#e0e0e0]">: </span>
                      <span className="text-[#f4c88f] lowercase ">"{data.role || 'Your Role'}"</span>,
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right select-none">4</span>
                    <span className="ml-8">
                      <span className="text-[#64b5f6]">"email"</span>
                      <span className="text-[#e0e0e0]">: </span>
                      <span className="text-[#f4c88f] lowercase ">"{data.email || 'Your email'}"</span>,
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right select-none">5</span>
                    <span className="ml-8">
                      <span className="text-[#64b5f6]">"social"</span>
                      <span className="text-[#e0e0e0]">: {'{'}</span>
                    </span>
                  </div>

                  {data.portfolio && (
                    <div className="flex">
                      <span className="text-[#616161] w-4 text-right select-none">8</span>
                      <span className="ml-12">
                        <span className="text-[#64b5f6]">"website"</span>
                        <span className="text-[#e0e0e0]">: </span>
                        <span className="text-[#f4c88f] lowercase ">"{data.portfolio}"</span>
                      </span>
                    </div>
                  )}


                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right select-none">7</span>
                    <span className="ml-12">
                      <span className="text-[#64b5f6]">"linkedin"</span>
                      <span className="text-[#e0e0e0]">: </span>
                      <span className="text-[#f4c88f] lowercase ">"{data.linkedin}"</span>
                    </span>
                  </div>


                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right mr-4 select-none">9</span>
                    <span className="ml-6 text-[#e0e0e0]">{'}'}</span>
                  </div>

                  <div className="flex">
                    <span className="text-[#616161] w-4 text-right mr-4 select-none">10</span>
                    <span className="ml-2 text-[#e0e0e0]">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-[#0066cc] px-4 py-1 flex items-center justify-between text-xs text-[#ffffff] border-t-2 border-[#262626]">
            <div className="flex items-center gap-4">
              <span>✓ Ready</span>
              <span>Ln 1, Col 1</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span>UTF-8</span>
              <span>JSX</span>
              <span className="flex items-center gap-1"><VscGlobe/> developercard.me</span>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex gap-4 justify-between'>
        {/* Download Button */}
        <button
          id="card-preview"
          onClick={downloadImage}
          className="flex items-center justify-center gap-2 md:ml-0 bg-blue-500 text-gray-200 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all shadow-lg font-medium"
        >
          <FiDownload size={18} />
          <span>Download Card</span>
        </button>

      </div>
    </div>
  );
}

// HOVER TO SHIMMER EFFECT |  DOWNLOAD BUTTON TO CELEBRATION EFFECT | HOVER WITH 3D EFFECT | STEPS TO SHOW | tostify | *** | coffee | visitor counter
// special thanks to chatgpt copilot nextSteps 
