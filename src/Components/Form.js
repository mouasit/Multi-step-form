import React from "react";

export default function Form() {
  return (
    <div className=" absolute top-[8.3rem] flex justify-center">
      <div className="text-MarineBlue flex flex-col gap-8 bg-White w-[94%] p-10 rounded-xl shadow-md">
        <div className="header-form">
          <h1 className="font-bold text-[1.9rem]">Personal info</h1>
          <p className="text-CoolGray">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              className="p-4 outline-none rounded-md border-[1px] border-r-MarineBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className="p-4 outline-none rounded-md border-[1px] border-r-MarineBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              className="p-4 outline-none rounded-md border-[1px] border-r-MarineBlue"
            />
          </div>
        </div>
        <div className="bg-White fixed bottom-0 left-0 w-full flex justify-end p-5">
          <button className="bg-MarineBlue text-White p-3 w-[7.5rem] rounded-md">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
