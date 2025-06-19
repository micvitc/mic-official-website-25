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
  showButtons?: boolean;
}) {
  return (
    <div className="w-[300px] h-auto relative">
      <Image src={consoleImg} alt="Console" className="w-full h-auto" />
    </div>
  );
}
