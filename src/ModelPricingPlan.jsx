import React from "react";

const ModelPricingPlan = ({ visible, onCancel }) => {
  return (
    visible && (
      <div className="absolute backdrop-blur-sm bg-black/30 w-full h-full top-0 flex justify-center flex-none items-center">
        <div className=" w-72 bg-gray-100 pl-4 pr-4 ">
          <div className="font-semibold ml-3 pt-3 pb-3">Basic Modal</div>
          <div className="bg-white pl-4 pt-3 pb-3">
            <p>Some Contents.....</p>
            <p>Some Contents.....</p>
            <p>Some Contents.....</p>
          </div>
          <div className="pt-3 pb-3 flex  justify-evenly ml-9">
            <button
              className="bg-white py-1 px-3  border hover:text-blue-600 hover:border-blue-500"
              onClick={() => onCancel(false)}
            >
              Cancel
            </button>
            <button className="bg-blue-600 text-white py-1 px-4  hover:bg-blue-500 ">
              OK
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ModelPricingPlan;
