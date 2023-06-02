import React from "react";

export default function PersonelInfo() {
  return (
    <>
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
            className="rounded-md border-[1px] border-MarineBlue p-4  outline-none lg:border-LightGray  lg:p-[0.6rem] lg:pl-[.9rem] lg:placeholder:font-medium"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email Address</label>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className="rounded-md border-[1px] border-MarineBlue p-4  outline-none lg:border-LightGray  lg:p-[0.6rem] lg:pl-[.9rem] lg:placeholder:font-medium"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className="rounded-md border-[1px] border-MarineBlue p-4  outline-none lg:border-LightGray  lg:p-[0.6rem] lg:pl-[.9rem] lg:placeholder:font-medium"
          />
        </div>
      </div>
    </>
  );
}
