import React from "react";
import BackgroundMobile from "../assets/bg-sidebar-mobile.svg";

export default function StepsBar() {
  return (
    <div className="relative">
      <img
        src={BackgroundMobile}
        alt="Background Steps Bar"
        className="w-full"
      />
      <nav className="absolute w-full top-11">
        <ul className="flex items-center justify-center gap-5">
          <li>
            <button className="rounded-full text-White border-[1px] border-White w-10 h-10 flex justify-center items-center font-bold">
              1
            </button>
          </li>
          <li>
            <button className="rounded-full text-White border-[1px] border-White w-10 h-10 flex justify-center items-center font-bold">
              2
            </button>
          </li>
          <li>
            <button className="rounded-full text-White border-[1px] border-White w-10 h-10 flex justify-center items-center font-bold">
              3
            </button>
          </li>
          <li>
            <button className="rounded-full text-White border-[1px] border-White w-10 h-10 flex justify-center items-center font-bold">
              4
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
