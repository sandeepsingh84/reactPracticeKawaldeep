import React from "react";

const ModelPricingPlan2 = ({visible ,onCancel,data1,data2}) => {
  return (
    visible&&(
    <div className="absolute  w-full h-screen top-0 backdrop-blur-sm bg-black/70 flex justify-center flex-none items-center">
      <div className="w-1/4 flex justify-center flex-col border-black shadow-md shadow-black bg-white  pl-10 pt-4 pb-4 border ">
        <p className="text-lg font-semibold">FreeLancer</p>
        <p className="mt-2 mb-2 text-sm font-bold">WHAT'S INCLUDED</p>
        <div>
          <div className="flex mb-2">
            <div className="mt-1 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <div className="ml-3">
             {data1}
            </div>
          </div>
          <div className="flex">
            <div className="mt-1 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <div className="ml-3">{data2}</div>
          </div>
        </div>

        <div className="flex w-4/5 justify-end mr-6 mt-6">
          <button className=" text-black px-2 py-1 mr-10 border border-black rounded-md hover:bg-black hover:text-white" onClick={()=>onCancel(false)}>Cancel</button>
          <button className=" text-black px-2 py-1  border border-black rounded-md hover:bg-black hover:text-white">Ok</button>
        </div>
      </div>
    </div>
    )
  );
};

export default ModelPricingPlan2;
