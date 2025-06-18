"use client";

import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center mt-5 bg-[linear-gradient(to_bottom,#000810_0%,#003755_34%,#113373_71%,#192C55_100%)]">
      <h1 className="text-4xl font-press-start text-center mt-10 w-full max-w-screen-lg">
        EVENTS
      </h1>
      <div className="w-full h-full flex-1 flex my-10 justify-center items-center">
        {/* The box */}
        <div
          style={{
            width: "170px",
            height: "154px",
            backgroundColor: "#3490dc",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          I am a box!
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
