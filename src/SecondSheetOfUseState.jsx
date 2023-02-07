import React, { useState } from "react";
const SecondSheetOfUseState = () => {
  const [firstState, setfirstState] = useState(0);
  const [secondState, setsecondState] = useState(0);
  const [thirdState, setthirdState] = useState(firstState + secondState);

  // console.log("firstresult", firstState)
  //console.log('secondState', secondState)
  return (
    <div className="w-full flex flex-col justify-center items-center mt-14 ">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div id="abc" className="flex w-24 jutify-center">
          <h1 className=" border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m">
            Result:
          </h1>
          <div className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m">
            {thirdState}
          </div>
        </div>
        <div className="w-1/2 mt-10 flex justify-between">
          <div className="flex w-24 ">
            <button
              className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
              onClick={() => setfirstState(firstState - 1)}
            >
              
              
            </button>
            <div className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m">
              {firstState}
            </div>
            <button
              className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
              onClick={() => setfirstState(firstState + 1)}
            >
              +
            </button>
          </div>
          <div className="flex w-24">
            <button
              className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
              onClick={() => setsecondState(secondState - 1)}
            >
              
              
            </button>
            <div className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m">
              {secondState}
            </div>
            <button
              className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
              onClick={() => setsecondState(secondState + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="w-1/2 ml-14 mt-10 flex justify-evenly">
          <button
            className="border rounded-lg py-1 px-4 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
            onClick={() => setthirdState(firstState + secondState)}
          >
            
            add
          </button>
          <button
            className="border rounded-lg py-1 px-4 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
            onClick={() => setthirdState(firstState - secondState)}
          >
            sub
          </button>
          <button
            className="border rounded-lg py-1 px-4 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
            onClick={() => setthirdState(firstState * secondState)}
          >
            mul
          </button>
          <button
            className="border rounded-lg py-1 px-4 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
            onClick={() => setthirdState(firstState / secondState)}
          >
            div
          </button>
          <button
            className="border rounded-lg  py-1 px-4 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
            onClick={() => setthirdState(firstState % secondState)}
          >
            per
          </button>
        </div>
        <button
          className="border rounded-lg mt-10 py-1 px-4 bg-gray-200 border-gray-400 shadow-black-900 shadow-m"
          onClick={() => {
            setfirstState(0);
            setsecondState(0);
            setthirdState(0);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};
export default SecondSheetOfUseState;
