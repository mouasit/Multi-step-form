import React from "react";
import CardCheckout from "./CardCheckout";

export default function FinishingUp({ info }) {
  console.log(info);
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:relative lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
      <div className="header-form">
        <h1 className="text-[1.9rem] font-bold">Finishing up</h1>
        <p className="text-CoolGray">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4 rounded-lg bg-Alabaster p-4">
          <div className="flex items-end justify-between">
            <div className="flex flex-col items-start">
              <span className="font-bold capitalize">arcade (monthly)</span>
              <button className="text-sm capitalize text-CoolGray underline">
                change
              </button>
            </div>
            <span className="font-bold">$9/mo</span>
          </div>
          <hr className="h-[.1px] border-none bg-LightGray" />
          <CardCheckout service="Online service" price="$1/mo" />
          <CardCheckout service="larger storage" price="$2/mo" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-CoolGray">Total (per month)</span>
          <span className="font-bold text-PurplishBlue">+$12/mo</span>
        </div>
      </div>
    </div>
  );
}
