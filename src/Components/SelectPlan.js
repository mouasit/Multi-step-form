import React from "react";

export default function SelectPlan() {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:relative lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
      <div className="header-form">
        <h1 className="text-[1.9rem] font-bold">Select your plan</h1>
        <p className="text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
    </div>
  );
}
