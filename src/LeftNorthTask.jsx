import React from "react";
const LeftNortTask = ({ routineNoon, setRoutineNoon }) => {
  return (
    <div className="w-96">
    
      {routineNoon?.length > 0 ? (
   
        routineNoon?.map((noonItems) => (
          <div className="flex  bg-white  items-center  px-3 py-2  w-full rounded-md mb-2">
            <div className="text-pink-600 mr-4 w-8 ">{noonItems.icon2}</div>
            <div className="w-72 text-pink-600 font-semibold text-base ">
              {noonItems.explanation2}
            </div>
            <button
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "center",
                marginLeft: "50px",
                color: "red",

                padding: "5px 4px 4px 1px",
              }}
              onClick={() => {
                //console.log('routineNoon', routineNoon);
                const resultFilter2 = routineNoon?.filter(
                  (noonDetails) =>
                    noonDetails?.explanation2 !== noonItems.explanation2
                );
                console.log("resultFilter2", resultFilter2);
                setRoutineNoon(resultFilter2);
              }}
            >
              {noonItems.buttonName2}
            </button>
          </div>
        ))
      ) : (
        <p>no content found yet</p>
      )}
    </div>
  );
};
export default LeftNortTask;
