import React from "react";
import CardPlan from "./CardPlan";
import { IconArcade, IconAdvanced, IconPro } from "./Icons";

export default function SelectPlan() {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:relative lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
      <div className="header-form">
        <h1 className="text-[1.9rem] font-bold">Select your plan</h1>
        <p className="text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <CardPlan
            icon={<IconArcade />}
            type="arcade"
            price="$9/mo"
            active={true}
          />
          <CardPlan icon={<IconAdvanced />} type="advanced" price="$12/mo" />
          <CardPlan icon={<IconPro />} type="pro" price="$15/mo" />
        </div>
        <div className="flex items-center justify-center gap-8 rounded-lg bg-Magnolia p-5">
          <span className="font-bold capitalize">monthly</span>
          <button
            type="button"
            className="h-[1.5rem] w-[3rem] rounded-full bg-MarineBlue px-1"
          >
            <div className="h-4 w-4 rounded-full bg-White"></div>
          </button>
          <span className="font-bold capitalize text-CoolGray">yearly</span>
        </div>
      </div>
    </div>
  );
}
