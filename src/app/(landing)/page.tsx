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

// Reusable Line component
type LineProps = {
  left: number;
  top: number;
  width: number;
  height: number;
  color?: string;
};

const Line: React.FC<LineProps> = ({
  left,
  top,
  width,
  height,
  color = "blue",
}) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width,
      height,
      backgroundColor: color,
      borderRadius: 2,
      zIndex: 50,
      pointerEvents: "none",
    }}
  />
);

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
      {/*PacMan Grid Lines*/}
      <Line left={55} top={140} width={89} height={5} color="blue" />
      <Line left={139} top={50} width={5} height={95} color="blue" />
      <Line left={55} top={140} width={5} height={700} color="blue" />
      <Line left={55} top={840} width={85} height={5} color="blue" />
      <Line left={139} top={840} width={5} height={95} color="blue" />
      <Line left={139} top={935} width={1625} height={5} color="blue" />
      <Line left={1760} top={840} width={5} height={95} color="blue" />
      <Line left={1760} top={840} width={85} height={5} color="blue" />
      <Line left={1845} top={145} width={5} height={700} color="blue" />
      <Line left={1765} top={140} width={85} height={5} color="blue" />
      <Line left={1765} top={50} width={5} height={95} color="blue" />
      <Line left={140} top={50} width={1630} height={5} color="blue" />
      <Line left={55} top={455} width={60} height={5} color="blue" />
      <Line left={115} top={455} width={5} height={85} color="blue" />
      <Line left={55} top={535} width={60} height={5} color="blue" />
      <Line left={1785} top={320} width={60} height={5} color="blue" />
      <Line left={1785} top={320} width={5} height={80} color="blue" />
      <Line left={1785} top={430} width={5} height={40} color="blue" />
      <Line left={1785} top={470} width={60} height={5} color="blue" />
      <Line left={1600} top={50} width={5} height={60} color="blue" />
      <Line left={1460} top={105} width={140} height={5} color="blue" />
      <Line left={1600} top={860} width={5} height={80} color="blue" />
      <Line left={1600} top={860} width={100} height={5} color="blue" />
      <Line left={1600} top={860} width={5} height={80} color="blue" />
      {/* Decorative Ghosts (top and sides) */}
      <img
        src="/greenghost.png"
        alt="Left Decor"
        className="w-7 h-8 absolute top-[700px] left-[1505px] z-30 animate-bounce"
      />
      <img
        src="/redghost.png.png"
        alt="Left Decor"
        className="w-8 h-8 absolute top-[315px] left-[260px] z-30 animate-bounce"
      />
      <img
        src="/ghost.png"
        alt="Left Decor"
        className="w-10 h-8 absolute top-[530px] left-[180px] z-30 animate-bounce"
      />
      <img
        src="/yellowghost.png"
        alt="Left Decor"
        className="w-8 h-8 absolute top-[800px] left-[300px] z-30 animate-bounce"
      />
      <img
        src="/blueghost.png"
        alt="Right Decor"
        className="w-8 h-8 absolute top-[240px] right-[310px] z-30 animate-bounce"
      />
      <img
        src="/yellowghost.png"
        alt="Right Decor"
        className="w-8 h-8 absolute top-[510px] right-[235px] z-30 animate-bounce"
      />

      {/* Main Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-press-start z-10 text-center mb-8 mt-6">
        EVENTS
      </h1>

      <div className="flex flex-col gap-10 my-10">
        {/* First row of 3 event boxes */}
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
              <p
                className="info-text font-normal text-xs mt-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pac-Man Chomping and Moving Pellets */}
        <div className="relative flex items-center w-full max-w-[964px] h-12 mx-auto -mt-7">
          {/* Pac-Man */}
          <img
  src="/PacMan.gif"
  alt="Pac-Man"
  style={{
    width: "48px", // adjust as needed
    height: "48px", // adjust as needed
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 20,
  }}
/>
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

        {/* Second row of 3 event boxes */}
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
              <p
                className="info-text font-normal text-xs mt-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vertical Dots Right */}
        <div className="absolute top-[340px] right-[80px] flex flex-col gap-[14px] z-50">
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
      </div>

      {/* Tiny yellow dots and ghost at the bottom, now outside the card layout */}
      <div className="w-full flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <img
            src="/ghost.png"
            alt="Ghost"
            className="w-8 h-8 object-contain"
          />
          {[...Array(7)].map((_, i) => (
            <div
              key={`tiny-dot-${i}`}
              className="w-3 h-3 bg-yellow-300 rounded-full"
            ></div>
          ))}
        </div>
      </div>
      {/* Ghosts at the four corners */}
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
        src="/pinkghost (1).png"
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
