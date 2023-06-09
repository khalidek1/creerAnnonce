import React from "react";

const SteperController = ({ handleClick, CurrentStep, step }) => {
  return (
    <div className=" container flex  justify-around mt-4 mb-8 ">
      {/* back button  */}
      <button
        className={`bg-white text-slate-400 uppercase
       py-2 px-4 rounded-xl font-semibold cursor-pointer border-2
       border-slate-300 hover:bg-slate-700 hover:text-white duration-2oo ease-in-out
       ${CurrentStep === 1 ? " opacity-50  cursor-not-allowed" : ""}`}
        onClick={() => handleClick()}
      >
        Back
      </button>

      <button
        className=" bg-green-500 text-white uppercase
       py-2 px-4 rounded-xl font-semibold cursor-pointer
       hover:bg-slate-700 hover:text-white duration-2oo ease-in-out "
        onClick={() => handleClick("next")}
      >
        {CurrentStep === step.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default SteperController;
