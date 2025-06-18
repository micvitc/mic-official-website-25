"use client";

import Image from "next/image";
import consoleImg from "./assets/console.png";

export default function Console({
  onPower,
  onReset,
  showButtons,
}: {
  onPower: () => void;
  onReset: () => void;
  showButtons: boolean;
}) {
  return (
    <div className="w-[300px] h-auto mt-24 relative">
      <Image src={consoleImg} alt="Console" />
      {showButtons && (
        <>
          <button
            onClick={onPower}
            className="absolute top-[28%] left-[23%] w-6 h-6 bg-red-600 border-2 border-black rounded-sm shadow-md hover:scale-105 transition"
            title="Power"
          />
          <button
            onClick={onReset}
            className="absolute top-[28%] left-[60%] w-6 h-6 bg-blue-600 border-2 border-black rounded-sm shadow-md hover:scale-105 transition"
            title="Reset"
          />
        </>
      )}
    </div>
  );
}
