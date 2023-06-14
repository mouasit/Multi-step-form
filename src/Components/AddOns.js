import React, { useEffect, useState, useContext } from "react";
import CardCheck from "./CardCheck";
import { StepsContext } from "./Steps";

export default function AddOns({ setInfoStep, info }) {
  const dataContext = useContext(StepsContext);

  const [online, setOnline] = useState(info.addOns?.online);
  const [storage, setStorage] = useState(info.addOns?.storage);
  const [profile, setProfile] = useState(info.addOns?.profile);

  useEffect(() => {
    let data = {};
    data.stepName = "addOns";
    if (online) data.online = online;
    if (storage) data.storage = storage;
    if (profile) data.profile = profile;
    setInfoStep(data);
  }, [online, storage, profile, setInfoStep]);

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
          price={info.selectPlan?.typePlan === "yearly" ? "10" : "1"}
          defaultActive={
            dataContext.order === dataContext.currentStep ? true : online
          }
          setState={setOnline}
          typePlan={info.selectPlan?.typePlan}
        />
        <CardCheck
          title="Larger storage"
          service="Extra 1TB of cloud save"
          price={info.selectPlan?.typePlan === "yearly" ? "20" : "2"}
          defaultActive={
            dataContext.order === dataContext.currentStep ? true : storage
          }
          setState={setStorage}
          typePlan={info.selectPlan?.typePlan}
        />
        <CardCheck
          title="Customizable profile"
          service="Custom theme on your profile"
          price={info.selectPlan?.typePlan === "yearly" ? "20" : "2"}
          defaultActive={
            dataContext.order === dataContext.currentStep ? false : profile
          }
          setState={setProfile}
          typePlan={info.selectPlan?.typePlan}
        />
      </div>
    </div>
  );
}
