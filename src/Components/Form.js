import React from "react";

export default function Form() {
  return (
    <div className="absolute top-[8.3rem] flex w-full justify-center lg:relative lg:top-0 lg:w-auto">
      <div className="flex	w-[94%] flex-col gap-8 rounded-xl bg-White p-10	 text-MarineBlue shadow-md lg:w-auto lg:gap-0 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
        <div className="header-form">
          <h1 className="text-[1.9rem] font-bold">Personal info</h1>
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
              className="rounded-md border-[1px] border-r-MarineBlue p-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className="rounded-md border-[1px] border-r-MarineBlue p-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              className="rounded-md border-[1px] border-r-MarineBlue p-4 outline-none"
            />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex w-full justify-end bg-White lg:bg-opacity-0 p-5 lg:relative lg:p-0">
          <button className="w-[7.5rem] rounded-md bg-MarineBlue p-3 text-White">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
