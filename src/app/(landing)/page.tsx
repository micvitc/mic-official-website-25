"use client";

import React from "react";

const events = [
  {
    title: "Event Name",
    desc: "This is the info text for the first event. Add more details here.",
    bg: "bg-[#FFDFE8]",
    border: "border-[#E8A2B5]",
    text: "text-[#6d1c22]",
    borderColor: "#E8A2B5",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the second event. Add more details here.",
    bg: "bg-[#C5FFD8]",
    border: "border-[#ABEEAB]",
    text: "text-[#095709]",
    borderColor: "#ABEEAB",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the third event. Add more details here.",
    bg: "bg-[#CBF1FD]",
    border: "border-[#B3D9FF]",
    text: "text-[#0A3A6b]",
    borderColor: "#B3D9FF",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the fourth event. Add more details here.",
    bg: "bg-[#CBF1FD]",
    border: "border-[#B3D9FF]",
    text: "text-[#0A3A6b]",
    borderColor: "#B3D9FF",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the fifth event. Add more details here.",
    bg: "bg-[#fff4dd]",
    border: "border-[#FFD782]",
    text: "text-[#865B00]",
    borderColor: "#FFD782",
  },
  {
    title: "Event Name",
    desc: "This is the info text for the sixth event. Add more details here.",
    bg: "bg-[#ffdfe8]",
    border: "border-[#E8A2B5]",
    text: "text-[#6d1c22]",
    borderColor: "#E8A2B5",
  },
];

const boxStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fontWeight: "bold",
  padding: "15px",
  position: "relative" as const,
  boxSizing: "border-box" as const,
};

const LandingPage = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex flex-col items-center px-4 py-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, #00040d 0%, #002855 100%)
        `,
        backgroundSize: "30px 30px, 30px 30px, 100% 100%",
        backgroundRepeat: "repeat, repeat, no-repeat",
        backgroundPosition: "top left, top left, center",
      }}
    >
      <h1 className="text-white text-4xl md:text-5xl font-press-start z-10 text-center mb-8">
        EVENTS
      </h1>

      <div className="flex flex-col gap-10 my-10">
        {/* First row of 3 boxes */}
        <div className="flex flex-row gap-8 mb-2 justify-start">
          {events.slice(0, 3).map((event, i) => (
            <div
              key={i}
              className={`pixel-corners font-press-start ${event.bg} ${event.text}`}
              style={{
                ...boxStyle,
                border: `14px solid ${event.borderColor}`,
              }}
            >
              <span className="text-2xl">{event.title}</span>
              <p className="font-normal text-xs mt-4 font-['IBM Plex Mono',monospace]">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pac-Man Chomping and Moving Pellets */}
        <div className="relative flex items-center w-full max-w-[964px] h-12 mx-auto -mt-7">
          {/* Pac-Man */}
          <div className="pacman-clip"></div>
          {/* Pellets Row */}
          <div className="pellets-row">
            <div className="pellets-inner">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-yellow-300 rounded-full shadow"></div>
              ))}
              {[...Array(48)].map((_, i) => (
                <div key={i + 48} className="w-4 h-4 bg-yellow-300 rounded-full shadow"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Second row of 3 boxes */}
        <div className="flex flex-row gap-8 justify-start -mt-7">
          {events.slice(3, 6).map((event, i) => (
            <div
              key={i}
              className={`pixel-corners font-press-start ${event.bg} ${event.text}`}
              style={{
                ...boxStyle,
                border: `12px solid ${event.borderColor}`,
              }}
            >
              <span className="text-2xl">{event.title}</span>
              <p className="font-normal text-xs mt-4 font-['IBM Plex Mono',monospace]">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vertical Dots Right */}
        <div className="absolute top-[340px] right-[100px] flex flex-col gap-[14px] z-50">
          {[...Array(5)].map((_, i) => (
            <div
              key={`v-dot-${i}`}
              className="w-3 h-3 bg-yellow-300 rounded-full"
            ></div>
          ))}
        </div>

        {/* Vertical Dots Left */}
        <div className="absolute top-[480px] left-[80px] flex flex-col gap-[14px] z-50">
          {[...Array(2)].map((_, i) => (
            <div
              key={`left-dot-${i}`}
              className="w-3 h-3 bg-yellow-300 rounded-full"
            ></div>
          ))}
        </div>

        {/* Tiny yellow dots at the bottom */}
        <div className="w-full flex justify-center -mt-10 mb-4 -ml-12">
          <div className="flex items-center gap-2">
            <img
              src="/ghost.png"
              alt="Ghost"
              className="w-6 h-6 object-contain"
            />
            {[...Array(7)].map((_, i) => (
              <div
                key={`tiny-dot-${i}`}
                className="w-3 h-3 bg-yellow-300 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Ghosts at corners */}
      <img
        src="/yellowghost.png"
        alt="Top Left Ghost"
        className="w-8 h-8 absolute top-20 left-20 z-50"
      />
      <img
        src="/redghost.png.png"
        alt="Top Right Ghost"
        className="w-8 h-8 absolute top-20 right-20 z-50"
      />
      <img
        src="/blueghost.png"
        alt="Bottom Left Ghost"
        className="w-8 h-8 absolute bottom-24 left-20 z-50"
      />
      <img
        src="/pinkghost.png"
        alt="Bottom Right Ghost"
        className="w-8 h-8 absolute bottom-20 right-20 z-50"
      />

      {/* Blue Borders */}
      <div className="absolute top-6 left-6 right-6 h-2 bg-blue-900 z-40"></div>
      <div className="absolute bottom-6 left-6 right-6 h-2 bg-blue-900 z-40"></div>
      <div className="absolute top-6 bottom-6 left-6 w-2 bg-blue-900 z-40"></div>
      <div className="absolute top-6 bottom-6 right-6 w-2 bg-blue-900 z-40"></div>
    </div>
  );
};

export default LandingPage;
