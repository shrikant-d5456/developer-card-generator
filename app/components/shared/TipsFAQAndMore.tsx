'use client';

import React from "react";
import { FaLightbulb, FaQuestionCircle, FaCheckCircle, FaMagic } from "react-icons/fa";
import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

export default function TipsFAQAndMore() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      q: "How can I personalize my card?",
      a: "You can modify the card by selecting themes, uploading a photo, editing personal details, and adding social media links.",
    },
    {
      q: "Can I share my card with others?",
      a: "Absolutely! You can download your completed card and share it anywhere you like.",
    },
    {
      q: "What format will my card be exported in?",
      a: "Your card is exported as a high-resolution PNG, perfect for online platforms or printing.",
    },
    {
      q: "Is my data kept private?",
      a: "Yes. Your information is only used to create the card and is never stored or shared.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 space-y-10 py-10 mt-20">

      {/* 💡 TIPS & TRICKS */}
      <div className="border-y border-white/10 py-8">
        <div className="flex items-center gap-3 text-blue-400 text-xl font-semibold">
          <FaLightbulb className="text-white" />
          <span>Tips & Tricks</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-6 text-gray-300">

          {/* Design Tips */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-200">Design Tips</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>Explore different gradient combinations for a unique look.</li>
              <li>Keep your text short, clear, and easy to read.</li>
              <li>Add a background image to personalize your design further.</li>
              <li>Use the gradient shuffle button to quickly preview multiple styles.</li>
            </ul>
          </div>

          {/* Sharing Tips */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-200">Sharing Suggestions</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>Perfect for LinkedIn, GitHub, resume headers, or Twitter banners.</li>
              <li>Share your downloadable card with clients, teammates, or community members.</li>
              <li>Print your card for networking events or developer meetups.</li>
              <li>Embed your card in your portfolio or personal website.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ⭐ HOW IT WORKS */}
      <div className="border-y border-white/10 py-8">
        <h2 className="flex items-center gap-3 text-blue-400 text-xl font-semibold">
          <FaMagic className="text-white" />
          How It Works
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 text-gray-300 mt-6">

          <div className="space-y-2 flex justify-center items-center gap-8">
            <div>
              <h3 className="font-semibold text-gray-200">1. Enter Your Information</h3>
              <p className="text-gray-400 text-sm">
                Add your name, role, availability, and social media profiles.
              </p>
            </div>
          </div>

          <div className="space-y-2 flex justify-center items-center gap-8">
            <div>
              <h3 className="font-semibold text-gray-200">2. Style Your Card</h3>
              <p className="text-gray-400 text-sm">
                Pick colors, gradients, font styles, or background images.
              </p>
            </div>
          </div>

          <div className="space-y-2 flex justify-center items-center gap-8">
            <div>
              <h3 className="font-semibold text-gray-200">3. Generate & Download</h3>
              <p className="text-gray-400 text-sm">
                Save your final Developer Card and share it instantly.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 📌 WHAT YOUR CARD INCLUDES */}
      <div className="border-y border-white/10 py-8">
        <h2 className="flex items-center gap-3 text-green-400 text-xl font-semibold">
          <FaCheckCircle />
          What’s Inside Your Developer Card
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 mt-6 text-gray-300">
          <li className="flex items-center gap-3">Name, Title & Key Details</li>
          <li className="flex items-center gap-3">Developer Links (GitHub, LinkedIn, Portfolio)</li>
          <li className="flex items-center gap-3">Customizable Layout & Color Styling</li>
          <li className="flex items-center gap-3">Export in High-Resolution PNG</li>
        </ul>
      </div>

      {/* ❓ FAQ */}
      <div className="border-y border-white/10 py-8">
        <div className="flex items-center gap-3 text-blue-300 text-xl font-semibold">
          <FaQuestionCircle className="text-blue-400" />
          Frequently Asked Questions
        </div>

        <div className="text-sm mt-6 space-y-4">

          {faq.map((item, index) => (
            <div key={index} className="border-b border-white/10 pb-3">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left text-gray-200 text-lg"
              >
                {item.q}
                <span>{openIndex === index ? <VscChevronUp /> : <VscChevronDown />}</span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-300 transition transform duration-300 ease-in-out translate-x-1.5">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
