import React, { useEffect, useState } from "react";
import { IconCheckMark } from "./Icons";

export default function CardCheck({
  title,
  service,
  price,
  defaultActive,
  setState,
}) {
  const [active, setActive] = useState(defaultActive || false);

  useEffect(() => {
    if (active) {
      let data = {};
      data.title = title;
      data.price = price;
      setState(data);
    } else setState(false);
  }, [active, setState, price, title]);

  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between rounded-lg border-[1px] p-4 hover:border-MarineBlue ${
        active ? "border-MarineBlue bg-Alabaster" : "border-LightGray"
      }`}
      onClick={() => {
        if (active) {
          setActive(false);
        } else {
          setActive(true);
        }
      }}
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
