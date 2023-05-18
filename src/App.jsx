import "./index.css";
import Steper from "./components/steper";
import SteperController from "./components/steperController";
import Type from "./components/Type";
import { useState } from "react";
import { steperContext } from "./context/steperContext";
import Maps from "./components/Maps";
import Vente from "./components/vente";
import Details from "./components/Details";
import Images from "./components/Images";

function App() {
  const [CurrentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const step = ["Vente", "Maps", "Details", "Images", "Type"];

  const displaystep = (step) => {
    switch (step) {
      case 1:
        return <Vente />;
      case 2:
        return <Maps />;
      case 3:
        return <Details />;
      case 4:
        return <Images />;
      case 5:
        return <Type />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newstep = CurrentStep;
    direction === "next" ? newstep++ : newstep--;
    newstep > 0 && newstep <= step.length && setCurrentStep(newstep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5 ">
        <Steper step={step} CurrentStep={CurrentStep} />
        <div
          className=" my-10 p-10
        "
        >
          <steperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displaystep(CurrentStep)}
          </steperContext.Provider>
        </div>
      </div>
      {/* navigation controls */}
      <SteperController
        handleClick={handleClick}
        CurrentStep={CurrentStep}
        step={step}
      />
    </div>
  );
}

export default App;
