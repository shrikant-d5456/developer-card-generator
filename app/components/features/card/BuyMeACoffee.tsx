'use client';
import React from 'react';

const username = 'shree5456'                
const BuyMeACoffee = ({ bottom = 24, right = 24 }: { username?: string; bottom?: number; right?: number }) => {
  const url = `https://www.buymeacoffee.com/${username}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy me a coffee"
      style={{ position: 'fixed', bottom: `${bottom}px`, right: `${right}px`, zIndex: 9999 }}
      className="flex items-center gap-2 px-3 py-2 rounded-full shadow-lg bg-yellow-400 text-black hover:bg-yellow-500 transition"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h14v4a5 5 0 0 1-5 5H8a6 6 0 0 1-5-6V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 10.5a3.5 3.5 0 0 0-3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-sm font-medium">Buy me a coffee</span>
    </a>
  );
};

export default BuyMeACoffee;