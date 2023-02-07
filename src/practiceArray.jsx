import React from "react";
import Pricing from "./pricing";

const PracticeArray = () => {

  return (
    <div>
      <div
        style={{
          backgroundColor: "blue",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
        id="main"
        className="ml-2 mt-2 p-4 text-gray-100 bg-blue-100"
      >ghftyf
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}heryuwiueruiewiuruieuir
          id="sub-main"
        >
          <div id="first">
            {/* <div> */}
            <div
              style={{
                color: "white",
                fontWeight: "20px",
                fontSize: "45px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              Boost your productivity.
            </div>
            {/* </div> */}
            {/* <div> */}
              <div
                style={{ color: "white", fontWeight: "20px", fontSize: "45px" }}
              >
                Start using Wordflow today.
              </div>
            {/* </div> */}
          </div>

          <div id="second"style={{ color: "white" }} className=''>
              Ac euismod vel sitbmaecenas id pellentesque eu sed consectetaur.
            
          </div>
          <div id="third" style={{ color: "white" }}>
              Malesuada adipiscing sagittis vel nulla nec.
            
          </div>
          <div style={{ marginTop: "15px" }}>
            <a
              href=""
              style={{
                padding: "10px",
                textDecoration: "none",
                backgroundColor: "white",
                color: "blue",
                borderRadius: "5px",
              }}
              id="forth"
            >
              Sign up for free
            </a>
            <Pricing/>
          </div>
        </div>
      </div>
      {/* <Pricing/> */}
    </div>
  );
};
export default PracticeArray;
