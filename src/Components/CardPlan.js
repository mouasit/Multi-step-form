import React from "react";

export default function CardPlan({
  icon,
  type,
  price,
  index,
  active,
  setActive,
  offer,
  setPlan,
  setPrice,
}) {
  return (
    <button
      type="button"
      className={`flex flex-1 items-start gap-4 rounded-lg border-[1px] p-5 hover:border-MarineBlue lg:flex-col lg:items-start lg:justify-between lg:gap-12 ${
        active === index ? "border-MarineBlue bg-Alabaster" : "border-LightGray"
      }`}
      onClick={() => {
        setPlan(type);
        setPrice(price);
        setActive(index);
      }}
    >
      {icon}
      <span className="flex flex-col items-start lg:gap-1">
        <span className=" text-[1.1rem] font-bold capitalize">{type}</span>
        <span className="text-CoolGray">{price}</span>
        {offer ? <span className="text-MarineBlue">{offer}</span> : null}
      </span>
    </button>
  );
}
