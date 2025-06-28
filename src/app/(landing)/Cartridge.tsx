"use client";

import Image from "next/image";
import clsx from "clsx";
import cartridgeImg from "./assets/cartridge.png";

export default function Cartridge({
  inserted,
  onClick,
}: {
  inserted: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={clsx(
        "w-16 h-auto absolute left-1/2 -translate-x-1/2 transition-all duration-700 cursor-pointer z-40",
        inserted ? "top-[360px]" : "top-[180px]"
      )}
      onClick={!inserted ? onClick : undefined}
      title={!inserted ? "Click to insert cartridge" : ""}
    >
      <Image src={cartridgeImg} alt="Cartridge" className="w-full h-auto" />
    </div>
  );
}
