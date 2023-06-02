import "./App.css";
import StepsBar from "./Components/StepsBar";
import StepsContainer from "./Components/StepsContainer";
import StepsBody from "./Components/StepsBody";
import StepsItem from "./Components/StepsItem";

import StepsControllers from "./Components/StepsControllers";
import PersonalInfo from "./Components/PersonalInfo";
import Step from "./Components/Step";

function App() {
  return (
    <main className="lg:flex lg:w-[65rem] lg:rounded-xl lg:bg-White lg:p-4 lg:shadow-md">
      <StepsBar>
        <Step className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White">
          {1}
        </Step>
        <Step className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White">
          {2}
        </Step>
        <Step className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White">
          {3}
        </Step>
        <Step className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-White font-bold text-White">
          {4}
        </Step>
      </StepsBar>
      <div className="absolute top-[8.3rem] flex w-full flex-1 justify-center lg:relative lg:top-0 lg:justify-center lg:pt-[2rem]">
        <StepsContainer className="flex w-[94%] flex-col gap-8 rounded-xl bg-White p-10	 text-MarineBlue shadow-md lg:relative lg:w-auto lg:gap-10 lg:rounded-none lg:bg-opacity-0 lg:p-0 lg:shadow-none">
          <StepsBody>
            <StepsItem>
              <PersonalInfo />
            </StepsItem>
          </StepsBody>
          <StepsControllers
            className="fixed bottom-0 left-0 flex w-full justify-end bg-White p-5 lg:relative lg:top-[3rem] lg:bg-opacity-0 lg:p-0"
            nextContent="Next"
            nextClassName="w-[7.5rem] rounded-md bg-MarineBlue p-3 text-White"
            previousContent=""
            previousClassName=""
          />
        </StepsContainer>
      </div>
    </main>
  );
}

export default App;
