import React from "react";

const EventPractice = () => {
  const getResult = () => {
    console.log("mouse over");
  };
  return (
    <div className="mt-5 flex justify-center">
      <button
        onMouseOver={() => {
          document.getElementById("mouseOver").className =
            "text-red-500 bg-red-50 rounded-md shadow-md px-4 py-1";
          getResult();
        }}
        onMouseOut={() =>
          (document.getElementById("mouseOver").className =
            "text-gray-900 bg-gray-50 rounded-md shadow-md px-4 py-1")
        }
        onClick={() => console.log("onclick")}
        id="mouseOver"
        className="text-gray-900 bg-gray-50 rounded-md shadow-md px-4 py-1"
      >
        on mouse over
      </button>
    </div>
  );
};

export default EventPractice;
