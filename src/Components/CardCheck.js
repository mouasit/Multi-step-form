import React from "react";
import { IconCheckMark } from "./Icons";

export default function CardCheck({ title, service, price, active }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-lg border-[1px] p-4 ${
        active ? "border-MarineBlue bg-Alabaster" : "border-LightGray"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`h-7 w-7 rounded-md border-[1px] ${
            active
              ? "flex items-center justify-center border-PurplishBlue bg-PurplishBlue"
              : "border-LightGray"
          }`}
        >
          {active ? <IconCheckMark /> : null}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[1.2rem] font-bold">{title}</span>
          <span className="text-sm text-CoolGray">{service}</span>
        </div>
      </div>
      <span className="text-PurplishBlue">{price}</span>
    </button>
  );
}
