import React from "react";
const RightNorthTask = ({ dailtRoutine, setDailyRoutine }) => {
  return (
    <div className="w-96">
      {dailtRoutine?.length > 0 ? (
        dailtRoutine?.map((dailyRoutine) => (
          <div
            id="list-left-main"
            className="flex  bg-white  items-center   px-3 py-2 mr-8 w-full rounded-md mb-2"
          >
            <div id="icon" className="text-pink-600 mr-4 w-8 ">
              {dailyRoutine?.icon}
            </div>
            <div
              id="exp"
              className="w-72 text-pink-600 font-semibold text-base "
            >
              {dailyRoutine?.explanation}
            </div>
            <button
              id="button"
              onClick={() => {
                //console.log('dailyRoutine', dailyRoutine)
                const resultFilter = dailtRoutine?.filter(
                  (item) => item?.explanation !== dailyRoutine?.explanation
                );
                console.log("resultFilter", resultFilter);
                setDailyRoutine(resultFilter);
              }}
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                marginLeft: "50px",
                color: "red",

                padding: "5px 4px 4px 1px",
              }}
            >
              {dailyRoutine?.buttonName}
            </button>
          </div>
        ))
      ) : (
        <p>no content found yet</p>
      )}
    </div>
  );
};
export default RightNorthTask;
