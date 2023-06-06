import React from "react";

export default function CardStep({ numberStep, nameStep }) {
  return (
    <>
      <span className="number flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White lg:h-8 lg:w-8 lg:text-sm">
        {numberStep}
      </span>
      <span className="hidden flex-col items-start lg:flex">
        <span className="uppercase text-CoolGray">
          {"step " + numberStep }
        </span>
        <span className="text-[.9rem] font-bold uppercase text-White">
          {nameStep}
        </span>
      </span>
    </>
  );
}
