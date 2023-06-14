import React from "react";
import CardCheckout from "./CardCheckout";

export default function FinishingUp({ info }) {
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
              <span className="font-bold capitalize">
                {info.selectPlan?.plan} ({info.selectPlan?.typePlan})
              </span>
              <button className="text-sm capitalize text-CoolGray underline hover:text-PurplishBlue">
                change
              </button>
            </div>
            <span className="font-bold">{info.selectPlan?.price}</span>
          </div>
          {Object.keys(info.addOns).length > 1 ? (
            <>
              <hr className="h-[.1px] border-none bg-LightGray" />
              {info.addOns?.online ? (
                <CardCheckout
                  service={info.addOns.online.title}
                  price={info.addOns.online.price}
                />
              ) : null}
              {info.addOns?.storage ? (
                <CardCheckout
                  service={info.addOns.storage.title}
                  price={info.addOns.storage.price}
                />
              ) : null}
              {info.addOns?.profile ? (
                <CardCheckout
                  service={info.addOns.profile.title}
                  price={info.addOns.profile.price}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-CoolGray">Total (per month)</span>
          <span className="font-bold text-PurplishBlue">+$12/mo</span>
        </div>
      </div>
    </div>
  );
}
