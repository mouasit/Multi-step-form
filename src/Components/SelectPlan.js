import React, { useEffect, useState, useContext } from "react";
import CardPlan from "./CardPlan";
import { IconArcade, IconAdvanced, IconPro } from "./Icons";
import { StepsContext } from "./Steps";

export default function SelectPlan({ setInfoStep, setErrorsStep, info }) {
  const dataContext = useContext(StepsContext);
  const [active, setActive] = useState(info[dataContext.order]?.active || 0);
  const [plan, setPlan] = useState(info[dataContext.order]?.plan || "arcade");
  const [price, setPrice] = useState(
    info[dataContext.order]?.price || "$12/mo"
  );
  const [typePlan, setTypePlan] = useState(
    info[dataContext.order]?.typePlan || "monthly"
  );
  const plans = [
    {
      icon: <IconArcade />,
      type: "arcade",
      priceMonthly: "$9/mo",
      priceYearly: "$90/yr",
      offerYearly: "2 months free",
    },
    {
      icon: <IconAdvanced />,
      type: "advanced",
      priceMonthly: "$12/mo",
      priceYearly: "$120/yr",
      offerYearly: "2 months free",
    },
    {
      icon: <IconPro />,
      type: "pro",
      priceMonthly: "$15/mo",
      priceYearly: "$150/yr",
      offerYearly: "2 months free",
    },
  ];

  useEffect(() => {
    setErrorsStep({});
  }, [setErrorsStep]);
  useEffect(() => {
    let data = {};
    data.plan = plan;
    data.typePlan = typePlan;
    data.price = price;
    data.active = active;
    setInfoStep(data);
  }, [plan, setInfoStep, typePlan, price, active]);
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:relative lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
      <div className="header-form">
        <h1 className="text-[1.9rem] font-bold">Select your plan</h1>
        <p className="text-CoolGray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 lg:flex-row">
          {plans.map((e, index) => {
            return (
              <CardPlan
                icon={e.icon}
                type={e.type}
                price={typePlan === "monthly" ? e.priceMonthly : e.priceYearly}
                key={index}
                index={index}
                active={active}
                setPlan={setPlan}
                setActive={setActive}
                offer={typePlan === "yearly" ? e.offerYearly : false}
                setPrice={setPrice}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-8 rounded-lg bg-Alabaster p-3">
          <span
            className={`font-bold capitalize ${
              typePlan === "monthly" ? "text-MarineBlue" : "text-CoolGray"
            }`}
          >
            monthly
          </span>
          <button
            type="button"
            className="h-[1.5rem] w-[3rem] rounded-full bg-MarineBlue px-1"
            onClick={() => {
              typePlan === "monthly"
                ? setTypePlan("yearly")
                : setTypePlan("monthly");
            }}
          >
            <div
              className={`h-4 w-4 rounded-full bg-White ${
                typePlan === "monthly" ? "float-left" : "float-right"
              }`}
            ></div>
          </button>
          <span
            className={`font-bold capitalize ${
              typePlan === "yearly" ? "text-MarineBlue" : "text-CoolGray"
            }`}
          >
            yearly
          </span>
        </div>
      </div>
    </div>
  );
}
