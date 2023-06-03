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

function App() {
  return (
    <Steps className="lg:flex lg:w-[65rem] lg:rounded-xl lg:bg-White lg:p-4 lg:shadow-md">
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
            <Step className="rounded-full lg:flex lg:w-full lg:items-center lg:gap-4 lg:rounded-none lg:pl-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White lg:h-8 lg:w-8 lg:text-sm">
                1
              </span>
              <span className="hidden flex-col items-start lg:flex">
                <span className="uppercase text-CoolGray">step 1</span>
                <span className="text-[.9rem] font-bold uppercase text-White">
                  your info
                </span>
              </span>
            </Step>
            <Step className="rounded-full lg:flex lg:w-full lg:items-center lg:gap-4 lg:rounded-none lg:pl-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White lg:h-8 lg:w-8 lg:text-sm">
                2
              </span>
              <span className="hidden flex-col items-start lg:flex">
                <span className="uppercase text-CoolGray">step 2</span>
                <span className="text-[.9rem] font-bold uppercase text-White">
                  select plan
                </span>
              </span>
            </Step>
            <Step className="rounded-full lg:flex lg:w-full lg:items-center lg:gap-4 lg:rounded-none lg:pl-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White lg:h-8 lg:w-8 lg:text-sm">
                3
              </span>
              <span className="hidden flex-col items-start lg:flex">
                <span className="uppercase text-CoolGray">step 3</span>
                <span className="text-[.9rem] font-bold uppercase text-White">
                  add-ons
                </span>
              </span>
            </Step>
            <Step className="rounded-full lg:flex lg:w-full lg:items-center lg:gap-4 lg:rounded-none lg:pl-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White lg:h-8 lg:w-8 lg:text-sm">
                4
              </span>
              <span className="hidden flex-col items-start lg:flex">
                <span className="uppercase text-CoolGray">step 4</span>
                <span className="text-[.9rem] font-bold uppercase text-White">
                  summary
                </span>
              </span>
            </Step>
          </ListSteps>
        </StepsBar>
      </div>
      <div className="absolute top-[8.3rem] flex w-full flex-1 justify-center lg:relative lg:top-0 lg:justify-center lg:pt-[2rem]">
        <StepsContainer className=" flex w-[94%] flex-col gap-8 lg:w-[27.7rem]">
          <StepsBody>
            <StepsItem>
              <SelectPlan />
            </StepsItem>
          </StepsBody>
          <StepsControllers className="fixed bottom-0 left-0 flex w-full justify-end bg-White p-5 lg:absolute lg:bottom-3 lg:justify-center lg:bg-opacity-0 lg:p-0">
            <StepsButtons
              className="flex w-full justify-end lg:w-[27.7rem]"
              nextContent="next step"
              nextClassName="w-[7.5rem] rounded-md bg-MarineBlue p-3 text-White capitalize"
              previousContent=""
              previousClassName=""
            ></StepsButtons>
          </StepsControllers>
        </StepsContainer>
      </div>
    </Steps>
  );
}

export default App;