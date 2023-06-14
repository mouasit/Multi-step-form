import React, { useEffect, useState } from "react";

export default function PersonalInfo({ setInfoStep, setErrorsStep, info }) {

  const [name, setName] = useState(info.personalInfo?.name || "");
  const [email, setEmail] = useState(info.personalInfo?.email || "");
  const [phone, setPhone] = useState(info.personalInfo?.phone || "");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  useEffect(() => {
    let errors = {};
    errors.setErrorName = setErrorName;
    errors.setErrorEmail = setErrorEmail;
    errors.setErrorPhone = setErrorPhone;
    setErrorsStep(errors);
  }, [setErrorsStep]);
  useEffect(() => {
    let data = {};
    data.stepName = "personalInfo";
    data.name = name;
    data.email = email;
    data.phone = phone;
    setInfoStep(data);
  }, [name, email, phone, setInfoStep]);

  return (
    <div className="flex flex-col gap-8 rounded-xl bg-White p-10 text-MarineBlue shadow-md lg:relative lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
      <div className="header-form">
        <h1 className="text-[1.9rem] font-bold">Personal info</h1>
        <p className="text-CoolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label>Name</label>
            {errorName.length ? (
              <span className="font-bold text-StrawberryRed">{errorName}</span>
            ) : null}
          </div>
          <input
            type="text"
            value={name}
            placeholder="e.g. Stephen King"
            className={`rounded-md border-[1px] border-LightGray  p-4 outline-none  focus:border-MarineBlue lg:p-[0.7rem] lg:pl-[.9rem] lg:placeholder:font-medium ${
              errorName.length ? "border-StrawberryRed" : ""
            }`}
            onChange={(e) => {
              setErrorName("");
              setName(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label>Email Address</label>
            {errorEmail.length ? (
              <span className="font-bold text-StrawberryRed">{errorEmail}</span>
            ) : null}
          </div>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            className={`rounded-md border-[1px] border-LightGray  p-4 outline-none  focus:border-MarineBlue lg:p-[0.7rem] lg:pl-[.9rem] lg:placeholder:font-medium ${
              errorEmail.length ? "border-StrawberryRed" : ""
            }`}
            onChange={(e) => {
              setErrorEmail("");
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label>Phone Number</label>
            {errorPhone.length ? (
              <span className="font-bold text-StrawberryRed">{errorPhone}</span>
            ) : null}
          </div>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            className={`rounded-md border-[1px] border-LightGray  p-4 outline-none  focus:border-MarineBlue lg:p-[0.7rem] lg:pl-[.9rem] lg:placeholder:font-medium ${
              errorPhone.length ? "border-StrawberryRed" : ""
            }`}
            onChange={(e) => {
              setErrorPhone("");
              setPhone(e.currentTarget.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
