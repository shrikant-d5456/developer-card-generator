"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import { ProfileData, ThemeColors } from "../../../../types/data";
import { VscEllipsis, VscFiles } from "react-icons/vsc";
import { FiFile, FiX } from "react-icons/fi";

export default function DownloadCardPreview({ data, themeColors }: {
    data: ProfileData; themeColors: ThemeColors
}) {

    const rotateX = useMotionValue(50);
    const rotateY = useMotionValue(50);
    const [isHovering, setIsHovering] = useState(false);

    const gradientOpacity = useTransform(rotateX, [-50, 100], [0, 1]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        rotateY.set(((x / rect.width) - 0.5) * 30);
        rotateX.set(((y / rect.height) - 0.5) * -30);
    }

    function resetTilt() {
        rotateX.set(14);
        rotateY.set(14);
    }

    return (
        <>
            <div id="confetti-wrapper" className=" w-full  h-screen top-0 z-50 pointer-events-none overflow-hidden">
                {[...Array(14)].map((_, i) => (
                    <div key={i} className="confetti" />
                ))}
            </div>

            <motion.div
                initial={{ y: -200, opacity: 0, rotateX: 10, rotateY: -10 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    rotateX: 10,
                    rotateY: 10,
                    transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 14,
                        duration: 1.5
                    }
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 140, damping: 10 }}
                className="relative w-[500px]  rounded-2xl cursor-pointer "
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                    setIsHovering(false);
                    resetTilt();
                }}
            >
                {/* Glow Effect */}
                {isHovering && (
                    <motion.div
                        className="absolute inset-0  bg-white opacity-30 blur-xl rounded-xl pointer-events-none"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
                <div className=" absolute -top-1/8 z-50">
                    <p className=" text-sm font-mono text-white">
                        status: <span className=" text-green-500">"success"</span>,
                        message: <span className=" text-yellow-500">"thank you"</span>,
                        mood: <span className=" text-pink-500">"grateful"</span> 
                    </p>
                </div>

                <div id="card" className="cursor-pointer"
                >
                    <div id='generate' className=" relative group  rounded-lg shadow-2xl overflow-hidden ">
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
                            <div className="flex items-center gap-4">
                                <span>UTF-8</span>
                                <span>React</span>
                                <span>JSX</span>
                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>
        </>

    );
}
