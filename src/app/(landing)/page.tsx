"use client";

import React from "react";

type Props = {};

const boxStyle = {
  width: "200px",
  height: "184px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  color: "#fff",
  fontWeight: "bold",
  padding: "15px",
};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center mt-5 bg-[linear-gradient(to_bottom,#000810_0%,#003755_34%,#113373_71%,#192C55_100%)]">
      <h1 className="text-4xl font-press-start text-center mt-10 w-full max-w-screen-lg">
        EVENTS
      </h1>
      <div className="flex flex-col gap-10 my-10">
        {/* First row of 3 boxes */}
        <div className="flex flex-row gap-8 justify-start">
          <div
            className="text-1xl font-press-start"
            style={{ ...boxStyle, backgroundColor: "#FFDFE8", color: "#6d1c22",border:"12px solid #E8A2B5" }}>
            Event Name 
            <p style={{ fontWeight: "normal", fontSize: "8px", marginTop: "10px" }}>
    This is the info text for the first event. Add more details here.
          </p>
          </div>
          <div
            className="text-1xl font-press-start"
            style={{ ...boxStyle, backgroundColor: "#C5FFD8", color: "#095709", border:"12px solid #ABEEAB"}}
          >
            Event Name 
            <p style={{ fontWeight: "normal", fontSize: "8px", marginTop: "10px" }}>
    This is the info text for the second event. Add more details here.
          </p>
          </div>
          <div
            className="text-1xl font-press-start"
            style={{ ...boxStyle, backgroundColor: "#CBF1FD", color:"#0A3A6b", border:"12px solid #B3D9FF" }}
          >
            Event Name
            <p style={{ fontWeight: "normal", fontSize: "8px", marginTop: "10px" }}>
    This is the info text for the third event. Add more details here.
          </p> 
          </div>
        </div>
        {/* Second row of 3 boxes */}
        <div className="flex flex-row gap-8 justify-start">
          <div
            className="text-1xl font-press-start"
            style={{ ...boxStyle, backgroundColor: "#CBF1FD", color:"#0A3A6b", border:"12px solid #B3D9FF"}}
          >
            Event Name
            <p style={{ fontWeight: "normal", fontSize: "8px", marginTop: "10px" }}>
    This is the info text for the fourth event. Add more details here.
          </p> 
          </div>
          <div
            className="text-1xl font-press-start"
            style={{ ...boxStyle, backgroundColor: "#fff4dd", color: "#865B00", border:"12px solid #FFD782"}}
          >
            Event Name 
            <p style={{ fontWeight: "normal", fontSize: "8px", marginTop: "10px" }}>
    This is the info text for the fifth event. Add more details here.
          </p> 
          </div>
          <div
            className="text-1xl font-press-start"
            style={{ ...boxStyle, backgroundColor: "#ffdfe8" , color: "#6d1c22", border:"12px solid #E8A2B5"}}
          >
            Event Name 
            <p style={{ fontWeight: "normal", fontSize: "8px", marginTop: "10px" }}>
    This is the info text for the sixth event. Add more details here.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
