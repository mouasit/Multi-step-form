import React from "react";

export default function Form() {
  return (
    <div className="absolute top-[8.3rem] flex w-full justify-center lg:relative lg:top-0 flex-1 lg:justify-center lg:pt-[2rem]">
      <div className="flex	w-[94%] flex-col gap-8 rounded-xl bg-White p-10	 text-MarineBlue shadow-md lg:w-auto lg:relative g:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none lg:gap-10">
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
              className="rounded-md border-[1px] border-MarineBlue lg:border-LightGray  lg:placeholder:font-medium p-4  lg:p-[0.6rem] lg:pl-[.9rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className="rounded-md border-[1px] border-MarineBlue lg:border-LightGray  lg:placeholder:font-medium p-4  lg:p-[0.6rem] lg:pl-[.9rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              className="rounded-md border-[1px] border-MarineBlue lg:border-LightGray  lg:placeholder:font-medium p-4  lg:p-[0.6rem] lg:pl-[.9rem] outline-none"
            />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex w-full justify-end bg-White lg:bg-opacity-0 p-5 lg:relative lg:top-[3rem] lg:p-0">
          <button className="w-[7.5rem] rounded-md bg-MarineBlue p-3 text-White">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
