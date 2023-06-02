import React from "react";
import BackgroundMobile from "../assets/bg-sidebar-mobile.svg";
import BackgroundDesktop from "../assets/bg-sidebar-desktop.svg";

export default function StepsBar({children}) {
  return (
    <div className="relative">
      <img
        src={BackgroundMobile}
        alt="Background Steps Bar"
        className="w-full lg:hidden"
      />
      <img
        src={BackgroundDesktop}
        alt="Background Steps Bar"
        className="w-full hidden lg:block"
      />
      <nav className="absolute w-full top-11">
        <ul className="flex items-center justify-center gap-5">
          {children}
        </ul>
      </nav>
    </div>
  );
}
