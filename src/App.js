import "./App.css";
import {
  Steps,
  StepsBar,
  ListSteps,
  Step,
  StepsContainer,
  StepsBody,
  StepsItem,
  StepsControllers,
  StepsButtons,
} from "./Components/Steps";
import PersonalInfo from "./Components/PersonalInfo";
import BackgroundMobile from "./assets/bg-sidebar-mobile.svg";
import BackgroundDesktop from "./assets/bg-sidebar-desktop.svg";
import SelectPlan from "./Components/SelectPlan";
import AddOns from "./Components/AddOns";
import FinishingUp from "./Components/FinishingUp";
import CardStep from "./Components/CardStep";
import ThankYou from "./Components/ThankYou";
import { ConfirmationPersonalInfo } from "./helpers";
import { useState } from "react";

function App() {
  const listSteps = ["your info", "select plan", "add-ons", "summary"];
  const [infoStep, setInfoStep] = useState({});
  const [errorsStep, setErrorsStep] = useState({});
  const [data, setData] = useState({});

  return (
    <Steps className="lg:flex lg:w-[63rem] lg:rounded-xl lg:bg-White lg:p-4 lg:shadow-md">
      <div className="relative">
        <img
          src={BackgroundMobile}
          alt="Background Steps Bar"
          className="w-full lg:hidden"
        />
        <img
          src={BackgroundDesktop}
          alt="Background Steps Bar"
          className="hidden w-full lg:block"
        />
        <StepsBar className="absolute top-11 w-full lg:top-[2rem]">
          <ListSteps className="flex items-center justify-center gap-5 lg:flex-col lg:items-start lg:justify-start lg:gap-6">
            {listSteps.map((e, index) => {
              return (
                <Step
                  className="rounded-full lg:flex lg:w-full lg:items-center lg:gap-4 lg:rounded-none lg:pl-7"
                  key={index}
                  index={index}
                  data={data}
                >
                  <CardStep numberStep={index + 1} nameStep={e} />
                </Step>
              );
            })}
          </ListSteps>
        </StepsBar>
      </div>
      <div className="absolute top-[8.3rem] flex w-full flex-1 justify-center lg:relative lg:top-0 lg:pt-[2rem]">
        <StepsContainer className=" flex w-[94%] flex-col gap-8 lg:w-[30.8rem]">
          <StepsBody>
            <StepsItem>
              <PersonalInfo
                confirm={ConfirmationPersonalInfo}
                setInfoStep={setInfoStep}
                setErrorsStep={setErrorsStep}
                info={data}
              />
            </StepsItem>
            <StepsItem>
              <SelectPlan setInfoStep={setInfoStep} info={data} />
            </StepsItem>
            <StepsItem>
              <AddOns setInfoStep={setInfoStep} info={data} />
            </StepsItem>
            <StepsItem>
              <FinishingUp info={data} />
            </StepsItem>
            <StepsItem>
              <ThankYou />
            </StepsItem>
          </StepsBody>
          <StepsControllers className="fixed bottom-0 left-0 flex w-full justify-end bg-White p-5 lg:absolute lg:bottom-3 lg:justify-center lg:bg-opacity-0 lg:p-0">
            <StepsButtons
              className="flex w-full lg:w-[30.8rem]"
              nextContent="next step"
              nextClassName="w-[7.5rem] rounded-md p-3 text-White capitalize"
              previousContent="go back"
              previousClassName="font-medium capitalize text-CoolGray hover:text-MarineBlue"
              nameConfirmation="confirm"
              infoStep={infoStep}
              errorsStep={errorsStep}
              setErrorsStep={setErrorsStep}
              data={data}
              setData={setData}
            ></StepsButtons>
          </StepsControllers>
        </StepsContainer>
      </div>
    </Steps>
  );
}

export default App;
