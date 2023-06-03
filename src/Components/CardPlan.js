import React from "react";

export default function CardPlan({ icon, type, price, active }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-4 rounded-lg border-[1px] p-5 ${
        active ? "border-MarineBlue bg-Magnolia" : "border-LightGray"
      }`}
    >
      {icon}
      <span className="flex flex-col items-start">
        <span className=" text-[1.2rem] font-bold capitalize">{type}</span>
        <span className="text-CoolGray">{price}</span>
      </span>
    </button>
  );
}
