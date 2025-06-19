"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cartridge from "./Cartridge";
import Console from "./Console";

export default function Landing() {
  const [inserted, setInserted] = useState(false);
  const [poweredOn, setPoweredOn] = useState(false);
  const router = useRouter();

  const handleInsert = () => {
    setInserted(true);
  };

  const handlePower = () => {
    if (inserted && !poweredOn) {
      setPoweredOn(true);
      setTimeout(() => {
        router.push("/main");
      }, 1000);
    }
  };

  const handleReset = () => {
    if (inserted) {
      setInserted(false);
      setPoweredOn(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-mono">
      {/* Background grid effect */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: `
               linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
             `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Instruction text */}
      {!inserted && (
        <p className="text-white text-sm absolute top-[60px] left-1/2 -translate-x-1/2 animate-pulse z-50">
          Click to insert cartridge
        </p>
      )}

      {/* Cartridge */}
      <Cartridge inserted={inserted} onClick={handleInsert} />

      {/* Console with clickable areas */}
      <div className="z-30 relative">
        <Console
          onPower={handlePower}
          onReset={handleReset}
          showButtons={inserted}
        />

        {/* Invisible clickable areas over the actual console buttons */}
        {inserted && (
          <>
            {/* Power Button Area */}
            <div
              onClick={handlePower}
              className="absolute top-[14%] left-[66%] w-[32px] h-[32px] cursor-pointer z-50"
              title="Power"
            />

            {/* Reset Button Area */}
            <div
              onClick={handleReset}
              className="absolute top-[27%] left-[66%] w-[32px] h-[32px] cursor-pointer z-50"
              title="Reset"
            />
          </>
        )}
      </div>

      {/* Status messages */}
      {inserted && !poweredOn && (
        <p className="text-green-400 text-sm absolute bottom-[100px] left-1/2 -translate-x-1/2 animate-pulse z-50">
          Press Power to start
        </p>
      )}

      {poweredOn && (
        <p className="text-yellow-400 text-sm absolute bottom-[100px] left-1/2 -translate-x-1/2 z-50">
          Booting up...
        </p>
      )}
    </div>
  );
}
