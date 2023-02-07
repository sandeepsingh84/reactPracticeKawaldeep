import React, { useState } from "react";

const PracticeSheetOfUseState = () => {
  const [number, setNumber] = useState(0);
  console.log("number", number);
  return (
    <div className="W-full flex flex-col justify-center items-center mt-10">
      <p className="">QUANTITIES</p>
      <div className="flex justify-center mt-5  w-56 ">
        <button
          onClick={() => {
            if (number === 0) {
              setNumber(0);
            } else {
              setNumber(number - 1);
            }
          }}
          className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-md "
        >
          -
        </button>

        <div className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-md">
          {number}
        </div>

        <button
          onClick={() => {
            if (number === 10) {
              setNumber(10);
            } else {
              setNumber(number + 1);
            }
          }}
          className="border py-2 px-6 bg-gray-200 border-gray-400 shadow-black-900 shadow-md"
        >
          +
        </button>
      </div>
      
    </div>
  );
};

export default PracticeSheetOfUseState;
