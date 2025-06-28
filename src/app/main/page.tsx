"use client";

import React from "react";
import ModelScene from "./_components/model-scene";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col mt-5">
      <span className="text-4xl font-bold text-center w-full">
        Hello
      </span>
      <div className="w-full h-full flex-1 flex my-10">
        <ModelScene />
      </div>
    </div>
  );
};

export default LandingPage;
