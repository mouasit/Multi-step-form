import React from "react";

export default function CardPlan({ icon, type, price, active }) {
  return (
    <button
      type="button"
      className={`flex flex-1 items-center gap-4 rounded-lg border-[1px] p-5 lg:h-[11.5rem] lg:flex-col lg:items-start lg:justify-between ${
        active ? "border-MarineBlue bg-Alabaster" : "border-LightGray"
      }`}
    >
      {icon}
      <span className="flex flex-col items-start">
        <span className=" text-[1.1rem] font-bold capitalize">{type}</span>
        <span className="text-CoolGray">{price}</span>
      </span>
    </button>
  );
}
