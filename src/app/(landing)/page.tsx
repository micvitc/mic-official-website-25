"use client";

import React from "react";

const events = [
  {
    title: "Event Name",
    desc: "This is the info text for the first event. Add more details here.",
    bg: "bg-[#FFDFE8]",
    border: "border-[#E8A2B5]",
    text: "text-[#6d1c22]",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the second event. Add more details here.",
    bg: "bg-[#C5FFD8]",
    border: "border-[#ABEEAB]",
    text: "text-[#095709]",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the third event. Add more details here.",
    bg: "bg-[#CBF1FD]",
    border: "border-[#B3D9FF]",
    text: "text-[#0A3A6b]",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the fourth event. Add more details here.",
    bg: "bg-[#CBF1FD]",
    border: "border-[#B3D9FF]",
    text: "text-[#0A3A6b]",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the fifth event. Add more details here.",
    bg: "bg-[#fff4dd]",
    border: "border-[#FFD782]",
    text: "text-[#865B00]",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the sixth event. Add more details here.",
    bg: "bg-[#ffdfe8]",
    border: "border-[#E8A2B5]",
    text: "text-[#6d1c22]",
  },
];

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-[#000810] via-[#003755] via-70% to-[#192C55] py-10">
      {/* Title */}
      <h1 className="text-4xl font-press-start text-center mt-10 w-full max-w-screen-lg text-white tracking-wider drop-shadow-lg">
        EVENTS
      </h1>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`
              w-[340px] h-[308px]
              ${event.bg} ${event.text}
              border-[8px] ${event.border}
              pixel-corners
              flex flex-col items-start justify-start
              p-6 font-press-start text-2xl
              select-none
              transition-transform hover:scale-105
            `}
            style={{
              boxSizing: "border-box",
              WebkitFontSmoothing: "none",
              MozOsxFontSmoothing: "unset",
            }}
          >
            <span>{event.title}</span>
            <p className="font-normal text-base mt-4 font-['IBM Plex Mono',monospace]">
              {event.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
