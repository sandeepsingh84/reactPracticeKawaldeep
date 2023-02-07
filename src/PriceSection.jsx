import React from "react";

const PriceSection = () => {
  const arr = [
    {
      heading: "List View",
      paragraph:
        "Nunc a, lacinia sed resus neque, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbie",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      ),
    },
    {
      heading: "Boards",
      paragraph:
        "purus loborties volutpad posuere id interger numc tellus. a feiguet masa me pellentisue cum set. Faretra a various urna rhoncus, temper return ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      ),
    },
    {
      heading: "Calendar",
      paragraph:
        "purus loborties volutpad posuere id interger numc tellus. Non malesauda feiguet masa me pellentisue cum set. Faretra a various urna rhoncus, temper return ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calendar2"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
        </svg>
      ),
    },
    {
      heading: "Teams",
      paragraph:
        "Tincident sollicitum imterdum muns sis risis at  bibendum vitae. Urna, quam ut sit justo non, consectitur et varius",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fill-rule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
      ),
    },
  ];

  const Lists1 = ['unlimited projects',' Unlimited storage','Cancel any time'];
const List2 = ['No per users fees','24/7 supports','14 days fees'];
  return (
    // <div className="w-full bg-gray-50 ">
    //   <div
    //     // id="main"
    //     className="w-full bg-white flex justify-between rounded-lg border m-10"
    //   >
    //     {/* <div className=" w-1/2 flex" id=''> */}
    //       <div className="w-1/2">
    //         <div>
    //           <p>FULL-FEATURED </p>
    //           <p>Everything you need to talk with your customer</p>
    //         </div>

    //         {arr.map = (lists) => (
    //             <div>
    //               <div>{lists.icon}</div>
    //               <div>
    //                 <div>{lists.heading}</div>
    //                 <div>{lists.paragraph}</div>
    //               </div>
    //             </div>
    //           )}
    //       </div>

    //       <div className="w-1/2 bg-indigo-700 text-white">
    //         <div className="flex">
    //           <div id="f1">
    //             <div>$99</div>
    //             <div>Setup free</div>
    //           </div>
    //           <div id="f2" className="">
    //             <p>+</p>
    //           </div>

    //           <div id="f3 " className="">
    //             <div>$4</div>
    //             <div>Per month</div>
    //           </div>
    //         </div>

    //         <div id="main-list">
    //           <div id="list1">
    //             <div id="items">
    //               <div id="icon">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   class="bi bi-check-lg"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
    //                 </svg>
    //               </div>
    //               <div id="para">
    //                 <p> </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   {/* </div> */}
    // </div>
    <div className="flex justify-center">
    <div id="main" className="w-max border rounded-lg  mx-72 my-24 flex justify-center">
        <div className="w-1/2 py-16 pl-5">
        <div className="w-full pr-24">
        <div>
               <p className="text-sm font-bold text-indigo-500">FULL-FEATURED </p>
               <p className="text-2xl font-bold">Everything you need to talk with your customer</p>
             </div>
<div className="mt-10">
             {arr.map ((lists) => (
                <div className="flex mb-3 w-full  ">
                  <div className="mt-2 mr-4 px-2 py-2 mb-14 bg-indigo-400 border rounded">{lists.icon}</div>
                  <div className="">
                    <div className="mb-1 text-slate-700 font-semibold">{lists.heading}</div>
                    <div className="text-gray-500 text-sm">{lists.paragraph}</div>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </div>

        <div className="w-1/2 bg-indigo-700   pt-44 " >

        <div className="flex justify-center items-center   text-white">
               <div id="f1 " className="mb-2">
                 <div className="text-5xl font-bold mr-12 mb-2 ">$99</div>
                 <div className="text-indigo-300 text-sm font-semibold">Setup free</div>
               </div>
              <div id="f2" className="">
                 <p className="text-3xl mb-6 text-indigo-300 ">+</p>
               </div>

               <div id="f3 " className="ml-12">
                 <div className="text-5xl  font-bold  mb-2">$4</div>
                 <div className="text-indigo-300 text-sm font-semibold">Per month</div>
              </div>
          </div>
          <div className="flex justify-center   ">
          <div id="main-list" className="text-sm mt-5 mb-6">
            {Lists1.map((item) =>( <div id="list1"  >
                 <div id="items" className="flex text-white mb-0.5 bg-indigo-800 w-48 text-indigo-100 pl-3 pt-3 pr-3 pb-3 ml-6 ">
                   <div id="icon" className="mt-1 mr-2 text-indigo-300">
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
                   <div id="para">
                     <p> {item}</p>
                   </div>
                 </div>
</div>
))}
</div>
<div id="main-list" className=" text-sm ml-3 mt-5">
            {List2.map((items) =>( <div id="list2" className="flex">
                 <div id="items" className="flex text-white mb-0.5 bg-indigo-800 pl-3 pt-3 pr-3 pb-3 w-48">
                   <div id="icon" className="mt-1 mr-2 text-indigo-300">
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
                   <div id="para">
                     <p> {items}</p>
                   </div>
                 </div>
</div>
))}
</div>
</div>
<div className="text-white w-full flex justify-center items-center mb-5 ">
  <button className="   text-indigo-900 bg-white px-36 rounded ml-5 pt-2 pb-2	">Get start today</button>
  </div>
  <div className="flex justify-center items-center">
    <p className="text-indigo-300">Try Workflow Lite For Free</p>
  </div>
        </div>
    </div>
    </div>
  );
};

export default PriceSection;
