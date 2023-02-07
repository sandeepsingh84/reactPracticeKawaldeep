import React, { useState } from "react";
const Calculator = () => {
  const [first, setfirstState] = useState(0);
  const [count1, setcount1State] = useState(0);
  const [count2, setcount2State] = useState(0);
  const [number, setnumberState] = useState(count1 + count2);
  console.log('count1', count1)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
  
        
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
          paddingBottom: "30px",
          borderRadius: "40px",
          backgroundColor: "#ecf0f3",
          boxShadow: "13px 13px 20px #cbced1,-13px -13px 20px #fff",
          width: "15%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div id="input" className=" flex justify-center mt-5">
            <input
              style={{
                borderRadius: "25px",
                caretColor: "grey",
                caretShape: "underscore",
                boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                padding: "3px 5px 3px 5px",
              }}
              className=""
              type="number"
              placeholder="0"
              value={first}
              onChange={(kk) => setfirstState(kk.target.value)}
            />
          </div>

          <div className="flex flex-col justify-center mt-5 mb-6">
            <div className="flex justify-center items-center mb-5">
              <button
                style={{
                  borderRadius: "25px",
                  boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                  padding: "3px 6px 3px 6px",
                  marginRight: "20px",
                  cursor: "auto",
                }}
                onClick={() => setcount1State(first)}
              >
                Count1:
              </button>
              <div
                style={{
                  borderRadius: "25px",
                  boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                  padding: "3px 5px 3px 5px",
                  width: "100px",
                  cursor: "pointer",
                  overflow:'hidden'
                }}
              >
                {count1}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                style={{
                  borderRadius: "25px",
                  boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                  padding: "3px 6px 3px 6px",
                  marginRight: "20px",
                  cursor: "auto",
                  
                }}
                onClick={() => setcount2State(first)}
              >
                Count2:
              </button>
              <div
                style={{
                  borderRadius: "25px",
                  boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                  padding: "3px 5px 3px 5px",
                  width: "100px",
                  cursor: "pointer",
                  overflow:'hidden'
                }}
              >
                {count2}
              </div>
            </div>
          </div>
          <div className="flex  justify-between mb-6">
            <button
              style={{
                borderRadius: "25px",
                boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                padding: "3px 7px 3px 7px",
                cursor: "auto",
              }}
              onClick={() => setnumberState(Number(count1) + Number(count2))}
            >
              ADD
            </button>
            <button
              style={{
                borderRadius: "25px",
                boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                padding: "3px 6px 3px 6px",
                cursor: "auto",
              }}
              onClick={() => setnumberState(count1 - count2)}
            >
              SUB
            </button>
          </div>
          <div className="flex  justify-between mb-6">
            <button
              style={{
                borderRadius: "25px",
                boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                padding: "3px 7px 3px 7px",
                cursor: "auto",
              
              }}
              onClick={() => setnumberState(count1 * count2)}
            >
              MUL
            </button>
            <button
              style={{
                borderRadius: "25px",
                boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
                padding: "3px 6px 3px 6px",
                cursor: "auto",
              }}
              onClick={() => setnumberState(count1 / count2)}
            >
              DIV
            </button>
          </div>
          <div
            style={{
              borderRadius: "25px",
              boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
              width: "80px",
              padding: "3px 7px 3px 7px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              alignItems: "center",
              marginLeft: "58px",
              marginTop: "120px",
              position: "absolute",
              overflow:'hidden'
            }}
          >
            {number}
          </div>
          <button
            style={{
              borderRadius: "25px",
              boxShadow: "inset 8px 8px 8px #cbced1, -8px -8px 8px #fff",
              padding: "3px 7px 3px 7px",
              cursor: "auto",
            }}
            onClick={() => {
              setfirstState(0);
              setcount1State(0);
              setcount2State(0);
              setnumberState(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
