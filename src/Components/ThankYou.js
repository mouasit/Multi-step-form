import React from "react";
import { IconCheckMark, IconThankyou } from "./Icons";

export default function ThankYou() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:pb-[2rem] lg:shadow-none">
      <div className="flex flex-col items-center gap-6">
        <IconThankyou />
        <h1 className="font-bold text-[1.8rem]">Thank you!</h1>
      </div>
      <p className="text-center text-CoolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support,please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
