import React from "react";

export default function CardPlan({ icon, type, price }) {
  return (
    <button type="button" className="flex items-center gap-4 p-5 rounded-lg border-[1px] border-LightGray">
      {icon}
      <span className="flex flex-col items-start">
        <span className=" text-[1.2rem] font-bold capitalize">{type}</span>
        <span className="text-CoolGray">{price}</span>
      </span>
    </button>
  );
}
