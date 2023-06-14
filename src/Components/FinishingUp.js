import React, { useContext } from "react";
import CardCheckout from "./CardCheckout";
import { StepsContext } from "./Steps";
import { getTotal } from "../helpers";

export default function FinishingUp({ info }) {
  const dataContext = useContext(StepsContext);
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
              <button
                type="button"
                className="text-sm capitalize text-CoolGray underline hover:text-PurplishBlue"
                onClick={() => {
                  dataContext.setOrder(1);
                }}
              >
                change
              </button>
            </div>
            <span className="text-lg font-bold">
              ${info.selectPlan?.price}/
              {info.selectPlan?.typePlan === "monthly" ? "mo" : "yr"}
            </span>
          </div>
          {Object.keys(info.addOns).length > 1 ? (
            <>
              <hr className="h-[.1px] border-none bg-LightGray" />
              {info.addOns?.online ? (
                <CardCheckout
                  service={info.addOns.online.title}
                  price={info.addOns.online.price}
                  typePlan={info.selectPlan.typePlan}
                />
              ) : null}
              {info.addOns?.storage ? (
                <CardCheckout
                  service={info.addOns.storage.title}
                  price={info.addOns.storage.price}
                  typePlan={info.selectPlan.typePlan}
                />
              ) : null}
              {info.addOns?.profile ? (
                <CardCheckout
                  service={info.addOns.profile.title}
                  price={info.addOns.profile.price}
                  typePlan={info.selectPlan.typePlan}
                />
              ) : null}
            </>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-CoolGray">
            Total (per{" "}
            {info.selectPlan.typePlan === "monthly" ? "month" : "year"})
          </span>
          <span className="text-xl font-bold text-PurplishBlue">
            {info.selectPlan.typePlan === "monthly" ? "+" : ""}${getTotal(info)}
            /{info.selectPlan.typePlan === "monthly" ? "mo" : "yr"}
          </span>
        </div>
      </div>
    </div>
  );
}
