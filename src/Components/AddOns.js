import React from "react";
import CardCheck from "./CardCheck";

export default function AddOns() {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:relative lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
      <div className="header-form">
        <h1 className="text-[1.9rem] font-bold">Pick add-ons</h1>
        <p className="text-CoolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <CardCheck
          title="Online service"
          service="Access to multiplayer games"
          price="+$1/mo"
          active={true}
        />
        <CardCheck
          title="Larger storage"
          service="Extra 1TB of cloud save"
          price="+$2/mo"
          active={true}
        />
        <CardCheck
          title="Customizable profile"
          service="Custom theme on your profile"
          price="+$2/mo"
        />
      </div>
    </div>
  );
}
