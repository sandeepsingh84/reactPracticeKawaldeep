import React, { useState } from "react";
const CallBackFunction = () => {
    const [first, setfirst] = useState(0)
  const practice = (x, y) => {
    let z = 0;
    z = x + y;
    // console.log("z", z);
    setfirst(z)
  };

  const Array = [
    { x: 9, y: 5 },
    { x: 4, y: 2 },
  ];

  return (
    <>
      {Array?.map((item) => (
        <div className="border-b bg-gray-200 flex justify-evenly">
            <div className="flex space-x-4">
          <p>x = {item?.x}</p>
          <p> y ={item?.y}</p>
          </div>
          <div onClick={() => practice(item?.x, item?.y)}>click</div>
        </div>
      ))}
      {first}
    </>
  );
};
export default CallBackFunction;
