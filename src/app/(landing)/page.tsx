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
    if (inserted) {
      setPoweredOn(true);
      setTimeout(() => {
        router.push("/main");
      }, 1000);
    }
  };

  const handleReset = () => {
    setInserted(false);
    setPoweredOn(false);
  };

  return (
    <div className="h-screen bg-black grid place-items-center relative overflow-hidden font-mono">
      <Cartridge inserted={inserted} />
      <Console
        onPower={handlePower}
        onReset={handleReset}
        showButtons={inserted}
      />
      {!inserted && (
        <p className="text-white text-xs absolute top-[120px] left-1/2 -translate-x-1/2 animate-pulse">
          Click to insert cartridge
        </p>
      )}
      {!inserted && (
        <div
          className="absolute top-[80px] left-1/2 -translate-x-1/2 w-20 h-24 cursor-pointer z-50"
          onClick={handleInsert}
        />
      )}
    </div>
  );
}
