import React from "react";

const PricingFilterAndFind = () => {
  const CardList1 = [
    {
      exp: "Potenti felis in cars at at ligula numcs.",
      icon: (
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
      ),
    },
    {
      exp: "orci neque eget pellentesque.",
      icon: (
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
      ),
    },
  ];
  const CardList2 = [
    {
      exp: "Potenti felis in cars at at ligula numcs.",
      icon: (
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
      ),
    },
    {
      exp: "orci neque eget pellentesque.",
      icon: (
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
      ),
    },
    {
      exp: "Docnec mauris sit in ui tincident etiam.",
      icon: (
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
      ),
    },
  ];
  const CardList3 = [
    {
      exp: "Potenti felis in cars at at ligula numcs.",
      icon: (
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
      ),
    },
    {
      exp: "orci neque eget pellentesque.",
      icon: (
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
      ),
    },
    {
      exp: "Docnec mauris sit in ui tincident etiam.",
      icon: (
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
      ),
    },
    {
      exp: "Facuibus valult mangna",
      icon: (
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
      ),
    },
  ];
  const CardList4 = [
    {
      exp: "Potenti felis in cars at at ligula numcs.",
      icon: (
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
      ),
    },
    {
      exp: "orci neque eget pellentesque.",
      icon: (
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
      ),
    },
    {
      exp: "Docnec mauris sit in ui tincident etiam.,Facuibus valult mangna.",
      icon: (
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
      ),
    },
    {
      exp: " Risus egestas facuibus.",
      icon: (
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
      ),
    },
    {
      exp: "Resus curses ullamcorper",
      icon: (
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
      ),
    },
    {
      exp: " Risus egestas facuibus.",
      icon: (
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
      ),
    },
  ];

  // const list11 = CardList1.filter(
  //   (items) => items.exp === "Potenti felis in cars at at ligula numcs."
  // );
  // const list12 = CardList1.filter(
  //   (items) => items.exp === "orci neque eget pellentesque."
  // );

  const list21 = CardList2.filter(
    (items) => items.exp === "Potenti felis in cars at at ligula numcs."
  );
  const list22 = CardList2.filter(
    (items) => items.exp === "orci neque eget pellentesque."
  );
  const list23 = CardList2.filter(
    (items) => items.exp === "Docnec mauris sit in ui tincident etiam."
  );
  const list24 = CardList2.filter(
    (items) => items.exp === "Potenti felis in cars at at ligula numcs."
  );

  const list31 = CardList3.filter(
    (items) => items.exp === "Potenti felis in cars at at ligula numcs."
  );
  const list32 = CardList3.filter(
    (items) => items.exp === "orci neque eget pellentesque."
  );
  const list33 = CardList3.filter(
    (items) => items.exp === "Docnec mauris sit in ui tincident etiam."
  );
  const list34 = CardList3.filter(
    (items) => items.exp === "Facuibus valult mangna"
  );

  const list41 = CardList4.filter(
    (items) => items.exp === "Potenti felis in cars at at ligula numcs."
  );
  const list42 = CardList4.filter(
    (items) => items.exp === "orci neque eget pellentesque."
  );
  const list43 = CardList4.filter(
    (items) =>
      items.exp ===
      "Docnec mauris sit in ui tincident etiam.,Facuibus valult mangna."
  );
  const list44 = CardList4.filter(
    (items) => items.exp === " Risus egestas facuibus."
  );
  const list45 = CardList4.filter(
    (items) => items.exp === "Resus curses ullamcorper"
  );
  const list11 = CardList1.find((items) => items.exp === "Potenti felis in cars at at ligula numcs.");
  const list12 = CardList1.find((items) => items.exp === "orci neque eget pellentesque.");

  // //console.log("outputcardlist1",CardList1);
  // console.log("filter1", list11);
  //console.log("filter1", list12);
  //console.log("filter1", list22);
  //console.log("cardlist44",list44);
   console.log("find", list11);
    console.log("find1", list12);
  return (
    <div className="w-full bg-slate-50 flex flex-col justify-center items-center">
      <div
        id="main"
        className="w-3/4 bg-white flex flex-col justify-center items-center rounded-lg border-inherit border mt-8 pt-20 pb-20"
      >
        <div
          id="first"
          className="w-full flex flex-col justify-center items-center  "
        >
          <div
            id="ff"
            className="w-full flex flex-col justify-center items-center "
          >
            <h1 className="text-5xl font-bold mb-5 ">Pricing Plans</h1>
            <p className="text-gray-500 font-medium mb-5">
              Start building for free , then add a site plan to go live. Account
              plan unlock additional features.
            </p>
          </div>
          <div
            id="button"
            className="w-56 bg-gray-200 flex  justify-between items-center mb-14 rounded-lg border-inherit border-1 pr-4 "
          >
            <div id="month" className="flex justify-center items-center">
              <p className="text-xs bg-white rounded-lg border-inherit border-2 pt-2 pl-4 pr-4 pb-2 ">
                Monthly billing
              </p>
            </div>
            <div id="yrs">
              <p className="text-xs">Yearly billing</p>
            </div>
          </div>
        </div>

        <div
          id="second"
          className="w-full flex items-center justify-evenly items-stretch "
        >
          <div
            id="card1"
            className="rounded-lg border-inherit border-2 w-60   "
          >
            <div id="content1">
              <p className="font-semibold  pr-5 pt-5 pl-5">Hobby</p>
              <p className="text-xs  pr-5 pt-5 pl-5 text-gray-500">
                All the basics starting for a new business
              </p>
            </div>

            <div id="symbol1" className=" flex  pr-5 pt-5 pl-5 mb-7">
              <div>
                <p className="font-bold text-3xl">$12</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold mt-4">/mo</p>
              </div>
            </div>

            <div
              id="button1 "
              className="flex justify-center bg-gray-900 text-white rounded-lg mr-5 ml-5 mb-7 text-sm pt-2 pb-2"
            >
              <button>Buy Hobbies</button>
            </div>
            <div className="rounded-lg border-inherit border"></div>
            <div className="pr-5 pt-5 pl-2">
              <div>
                <p className="text-xs font-bold mb-4">WHAT'S INCLUDED</p>
                {/* <div>
                  {list1.map((items) => (
                    <div className="flex mb-3 ">
                      {list1.map((items) => (
                        <div id="icon11" className="text-teal-500 mr-2">
                          {items.icon}{" "}
                        </div>
                      ))}

                      <div id="para11"></div>
                    </div>
                  ))}
                </div> */}
                <div className="flex">
            
<div className="mt-1 mr-1 text-green-400">
                    {list12.icon}
                    </div>
                    <div>{list12.exp}</div>
                </div>
                <div className="flex">
            
            <div className="mt-1 mr-1 text-green-400">
                                {list11.icon}
                                </div>
                                <div>{list11.exp}</div>
                            </div>

              </div>
            </div>
          </div>

          <div
            id="card2"
            className="rounded-lg border-inherit border-2 w-60   "
          >
            <div id="content2">
              <p className="font-semibold  pr-5 pt-5 pl-5">Freelancer</p>
              <p className="text-xs  pr-5 pt-5 pl-5 text-gray-500">
                All the basics starting for a new business
              </p>
            </div>

            <div id="symbol2" className=" flex  pr-5 pt-5 pl-5 mb-7">
              <div>
                <p className="font-bold text-3xl">$24</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold mt-4">/mo</p>
              </div>
            </div>

            <div
              id="button2 "
              className="flex justify-center bg-gray-900 text-white rounded-lg mr-5 ml-5 mb-7 text-sm pt-2 pb-2"
            >
              <button>Buy Hobbies</button>
            </div>
            <div className="rounded-lg border-inherit border"></div>
            <div className="pr-5 pt-5 pl-2">
              <div>
                <p className="text-xs font-bold mb-4">WHAT'S INCLUDED</p>
                {/* <div>
                  {CardList2.map((items) => (
                    <div className="flex mb-3">
                      <div id="icon22" className="text-teal-500 mr-2">
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
                      <div id="para22">
                        <p className="text-gray-500 text-xs">{items} </p>
                      </div>
                    </div>
                  ))}
                </div> */}

                <div>
                {list21.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {list22.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {list23.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {list24.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div
            id="card3"
            className="rounded-lg border-inherit border-2 w-60   "
          >
            <div id="content3">
              <p className="font-semibold  pr-5 pt-5 pl-5">Startup</p>
              <p className="text-xs  pr-5 pt-5 pl-5 text-gray-500">
                All the basics starting for a new business
              </p>
            </div>

            <div id="symbol3" className=" flex  pr-5 pt-5 pl-5 mb-7">
              <div>
                <p className="font-bold text-3xl">$32</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold mt-4">/mo</p>
              </div>
            </div>

            <div
              id="button3 "
              className="flex justify-center bg-gray-900 text-white rounded-lg mr-5 ml-5 mb-7 text-sm pt-2 pb-2"
            >
              <button>Buy Hobbies</button>
            </div>
            <div className="rounded-lg border-inherit border"></div>
            <div className="pr-5 pt-5 pl-5">
              <div>
                <p className="text-xs font-bold mb-4">WHAT'S INCLUDED</p>
                {/* <div>
                  {CardList3.map((items) => (
                    <div className="flex mb-3">
                      <div id="icon33" className="text-teal-500 mr-2">
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
                      <div id="para33">
                        <p className="text-gray-500 text-xs">{items} </p>
                      </div>
                    </div>
                  ))}
                </div> */}

                <div>
                {list31.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {list32.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {list33.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {list34.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div
            id="card4"
            className="rounded-lg border-inherit border-2 w-60   "
          >
            <div id="content4">
              <p className="font-semibold  pr-5 pt-5 pl-5">Enterprises</p>
              <p className="text-xs  pr-5 pt-5 pl-5 text-gray-500">
                All the basics starting for a new business
              </p>
            </div>

            <div id="symbol4" className=" flex  pr-5 pt-5 pl-5 mb-7">
              <div>
                <p className="font-bold text-3xl">$48</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold mt-4">/mo</p>
              </div>
            </div>

            <div
              id="button4 "
              className="flex justify-center bg-gray-900 text-white rounded-lg mr-5 ml-5 mb-7 text-sm pt-2 pb-2"
            >
              <button>Buy Hobbies</button>
            </div>
            <div className="rounded-lg border-inherit border"></div>
            <div className="pr-5 pt-5 pl-5">
              <div>
                <p className="text-xs font-bold mb-4">WHAT'S INCLUDED</p>

                {/* <div className="pb-5">
                  {CardList4.map((items) => (
                    <div className="flex mb-3">
                      <div id="icon44" className="text-teal-500 mr-2">
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
                      <div id="para44">
                        <p className="text-gray-500 text-xs">{items} </p>
                      </div>
                    </div>
                  ))}
                </div> */}
                <div>
                  {/* <div className="flex">
                    {list41.map((items) => (
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                    ))}
                    <div>
                      {list41.map((items) => (
                        <p id="exp">{items.exp} </p>
                      ))}
                    </div>
                  </div> */}
                   {list41.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                  {/* <div className="flex">
                    {list42.map((items) => (
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                    ))}
                    <div>
                      {list42.map((items) => (
                        <p id="exp">{items.exp} </p>
                      ))}
                    </div>
                  </div> */}
                   {list42.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                  {/* <div className="flex">
                    {list43.map((items) => (
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                    ))}
                    <div>
                      {list43.map((items) => (
                        <p id="exp">{items.exp} </p>
                      ))}
                    </div>
                  </div> */}
                   {list43.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                  
                    {list44.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                    {/* <div>
                      {list44.map((items) => (
                      
                      ))}
                    </div> */}
                  
                  {/* <div className="flex">
                    {list45.map((items) => (
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                    ))}
                    <div>
                      {list45.map((items) => (
                        <p id="exp">{items.exp} </p>
                      ))}
                    </div>
                  </div> */}
                  {list45.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))}
                   {/* <div className="flex">
                    {list44.map((items) => (
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                    ))}
                    <div>
                      {list44.map((items) => (
                        <p id="exp">{items.exp} </p>
                      ))}
                    </div>
                  </div> */}
                   {/* {list44.map((items) => (
                      <div className="flex">
                      <div className="mt-1 mr-1 text-green-400">
                        {items.icon}{" "}
                      </div>
                        <p id="exp">{items.exp} </p>
                        </div>
                    ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFilterAndFind;
