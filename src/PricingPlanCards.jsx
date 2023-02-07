import React from "react";

const PricingPlanCards = ({
  data,
  planType,
  setIsModalVisible,
  setSingleCardDetail,
}) => {
  return (
    <div className="w-full flex justify-evenly items-strech ">
      {data?.map((details) => (
        <div className="rounded-lg shadow-md border w-56 ">
          <div className=" h-60">
            <div className="font-semibold pl-4  pt-4">{details.cardName}</div>
            <div className="text-xs mt-3 mb-3 text-gray-500 pl-4 pt-4 pr-4">
              {details.paragraph}
            </div>
            <div className="font-bold text-3xl mb-5 pl-4 pt-4">
              ${details.price}{" "}
              <span className="text-sm text-gray-500 font-semibold ">
                {planType === "year" ? "/year" : "/mo"}
              </span>
            </div>
            <div
              className="flex justify-center bg-gray-900 text-white rounded-lg mr-4 mb-5 text-sm pt-2 pb-2 pl-4 ml-4"
              onClick={() => {
                //   setModal(true);
                setSingleCardDetail(details);
                setIsModalVisible(true);
              }}
            >
              {details.button}
            </div>
          </div>
          <div className="rounded-lg border-inherit border"></div>
          <div className="text-xs font-bold mb-2 mt-4 pb-2 pl-4">
            WHAT'S INCLUDED
          </div>
          {details.term.map((lists) => (
            <div className="flex mb-3 ">
              <div className="text-teal-500 mr-2 mt-1 pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
              <div className="text-gray-500 text-xs pr-4">{lists}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default PricingPlanCards;
