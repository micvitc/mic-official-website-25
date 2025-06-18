"use client";

import Image from "next/image";
import clsx from "clsx";
import cartridgeImg from "./assets/cartridge.png";

export default function Cartridge({ inserted }: { inserted: boolean }) {
  return (
    <div
      className={clsx(
        "w-20 h-auto absolute left-1/2 -translate-x-1/2 transition-transform duration-1000",
        inserted ? "translate-y-[85px]" : "-translate-y-[100px]"
      )}
    >
      <Image src={cartridgeImg} alt="Cartridge" />
    </div>
  );
}
