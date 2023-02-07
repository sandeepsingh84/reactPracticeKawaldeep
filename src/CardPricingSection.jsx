import React from "react";

const CardPricingSection = () => {
  const card1 = [
    "Pariatour quod smilitour",
    "Sapiente libero repudiandi",
    "vel ipsa esse repudiandae",
  ];
  const card2 = [
    "Pariatour quod smilitour",
    "Sapiente libero repudiandi",
    "vel ipsa esse repudiandae",
    "Pariatour quod smilitour",
    "Sapiente libero repudiandi",
    "vel ipsa esse repudiandae",
  ];

  card1.map((item, index) => {
    console.log("Array outout>", item, "indexofelements", index);
  });

  return (
    <div id="container" className="w-100">
      <div id="main" className="mx-64 my-20 pb-20  text-white h-fit shadow-md shadow-gray-300 ">
        <div className="h-96 bg-slate-900 border rounded-md border-grey-200">
          <div
            id="headerpart"
            className="flex flex-col justify-center items-center pt-16"
          >
            <p className="text-slate-300 mb-2">PRICING</p>
            <h1 className="text-4xl font-bold mb-3">
              The right price for you , whoever you are
            </h1>
            <p className="text-xl text-slate-300 mb-11 w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quaerat{" "}
              <span className="flex justify-center items-center">
                rem quia, facilis facere dignissimos voluptatum.
              </span>
            </p>
          </div>

          <div id="cards" className=" flex  w-full justify-center  ">
            <div
              id="card1"
              className="bg-white text-black shadow-md shadow-gray-300 mb-10 w-72 pt-7 mt-12"
            >
              <div
                id="first"
                className="flex flex-col justify-center items-center pb-7 "
              >
                <div>
                  <p className="font-semibold text-2xl">Hobby</p>
                </div>
                <div id="first-sub" className="flex mt-2 ">
                  <div>
                    <p className="text-3xl font-bold mt-2">$</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-5xl mx-2">79</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-1xl mt-3">
                      /month
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg  border"></div>
              <div className=" bg-gray-50 pt-6 pb-8">
                {card1.map((list) => (
                  <div id="sk" className="flex mb-2 pl-8 w-full">
                    <div id="icon" className="text-green-500 mt-1 mr-2">
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
                    <div>
                      <p>{list}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center bg-white mx-8 mt-6 rounded-md py-2 shadow-md shadow-gray-300">
                  <button className="flex justify-center font-semibold text-indigo-500">
                    Start your trial
                  </button>
                </div>
              </div>
            </div>

            <div
              id="card2"
              className="bg-white text-black  w-96 border-2 border-violet-700  pt-7  "
            >
              <div>
                <div className="top-80  bg-indigo-700 text-xs text-white flex  items-center w-28 ml-32 border rounded-md border-indigo-700 pt-1 pb-1 pr-1 pl-1 justify-center  absolute">
                  MOST POPULAR
                </div>
                <div
                  id="first2"
                  className="flex flex-col justify-center items-center  pb-7 "
                >
                  <div>
                    <p className="font-bold text-2xl">Growth</p>
                  </div>
                  <div id="first-sub2" className="flex mt-2 ">
                    <div>
                      <p className="text-3xl font-bold mt-2">$</p>
                    </div>
                    <div>
                      <p className="font-extrabold text-5xl mx-2">149</p>
                    </div>
                    <div>
                      <p className="text-gray-500 font-semibold text-1xl mt-3">
                        /month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="  w-full border bg-grey-800"></div>
                <div className=" bg-gray-50 pt-6 pb-8 ">
                  {card2.map((list) => (
                    <div id="sk" className="flex mb-2 pl-8 w-full">
                      <div id="icon" className="text-green-500 mt-1 mr-2">
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
                      <div>
                        <p>{list}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-center  mx-8 mt-6 rounded-md py-2 shadow-md shadow-gray-300 bg-indigo-700 text-white ">
                    <button className=" font-semibold ">
                      Start your trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="card3"
              className="bg-white text-black shadow-md shadow-gray-300 mb-10 w-72 pt-7 mt-12 "
            >
              <div
                id="first3"
                className="flex flex-col justify-center items-center pb-7 "
              >
                <div>
                  <p className="font-semibold text-2xl">Scale</p>
                </div>
                <div id="first-sub3" className="flex mt-2 ">
                  <div>
                    <p className="text-3xl font-bold mt-2">$</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-5xl mx-2">349</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-1xl mt-3">
                      /month
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border-inherit border"></div>
              <div className=" bg-gray-50 pt-6 pb-8">
                {card1.map((list) => (
                  <div id="sk" className="flex mb-2 pl-8 w-full">
                    <div id="icon" className="text-green-500 mt-1 mr-2">
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
                    <div>
                      <p>{list}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center bg-white mx-8 mt-6 rounded-md py-2 shadow-md shadow-gray-300">
                  <button className="flex justify-center font-semibold text-indigo-500">
                    Start your trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPricingSection;
