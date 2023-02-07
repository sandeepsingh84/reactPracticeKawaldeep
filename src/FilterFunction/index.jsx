import React, { useState } from "react";

const FilterFunction = () => {
  const fdsfd = ["dfgdf", "fsdsdf"];
  const [state, setState] = useState(0);

  let x = 5;
  let y = 1;
  let z = 0;

  const addTwoNumber = () => x + y;
  //     const addTwoNumber =( )=>{
  // return z = x ^ y;

  //   }

  const array1 = [
    {
      id: 100,
      class: "java",
      name: "Randhir",
    },
    {
      id: 101,
      class: "python",
      name: "sandeep",
    },
    {
      id: 100,
      class: "c",
      name: "kawalD",
    },
  ];
  
  const kawal = [
    {
      para: "jshsy gsys uusyy gstssgsg",
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
      para: "gsyy duudhd nsuyt fthgy gftt hgrse",
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
      para: "hdydg fdthgy jutrf bhuytg vb ",
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
  //const output1 = array1.filter((items) => items.id === 100);
  //const findFuncOutput = array1.find((item) => item.id === 100);
  const output2 = kawal.filter(
    (data) => data.para === "jshsy gsys uusyy gstssgsg"
  );

  const practicefindfunction = kawal.find(
    (item) => item.para === "gsyy duudhd nsuyt fthgy gftt hgrse"
  );

  const sk = kawal.filter(
    (singh) => singh.para === "jshsy gsys uusyy gstssgsg"
  );

  //console.log("filter array",sk);
  //   console.log("Full array", array1);
  //console.log("output find function",practicefindfunction);
  //console.log("Filter function output2>>>>>", output2);
  console.log("new filter result", sk);
  //   console.log("Find function output>>>>>", findFuncOutput);

  return (
    <div className="flex flex-col">
      {/* <p>filter function</p> */}
      <div className="flex">
        {output2.map((kk) => (
          <div>{kk.icon}</div>
        ))}
        {output2.map((kk) => (
          <div>{kk.para}</div>
        ))}
        <div className="flex">
          {sk.map((ss) => (
            <div>{ss.icon}</div>
          ))}
          {sk.map((ss) => (
            <div>{ss.para}</div>
          ))}
        </div>
      </div>
      <div>
        {sk.map((lst) => (
          <div>{lst.para}</div>
        ))}
      </div>
      <div></div>

      {/* //<p>find function</p> */}
      <div>{practicefindfunction.icon}</div>
      <button
        onClick={() => {
          z = x + y;

          setState(z);
        }}
      >
        add
      </button>

      <div>Result of use state hook {state}</div>
      {/* <div>{addTwoNumber()}</div> */}

      <div>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default FilterFunction;
