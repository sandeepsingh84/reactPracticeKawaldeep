import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiGetPractice = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setData(response?.data?.data))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="section" className="w-full h-vh justify-center flex">
      <div
        id="container"
        className="w-3/5 mt-20 flex justify-center bg-gray-100  rounded border border-gray-200 "
      >
        <div
          style={{
            display: "grid",
            flexDirection: "row",
            gridTemplateColumns: "auto auto auto",
            columnGap: "30px",
            width: "100%",
            justifyContent: "center",
            paddingRight: "70px",
          }}
        >
          {data?.map((items) => (
            <div
              style={{
                width: "100%",
                margin: "50px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: " 3px 3px 7px 	#cccccc",
                border: "1px solid 	#cccccc",
              }}
            >
              <div>
                <img
                  style={{
                    borderRadius: "100px",
                    border: "1px solid white",
                    marginTop: "25px",
                    marginBottom: "15px",
                    width: "100px",
                  }}
                  src={items?.avatar}
                  alt=""
                />
              </div>
              <div style={{ fontWeight: "bold", color: "#4d4d4d" }}>
                {items.first_name} {items.last_name}
              </div>
              <div
                style={{
                  color: "#8c8c8c",
                  fontSize: "13px",
                  fontWeight: "20px",
                }}
              >
                Global Division Officer
              </div>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "25px",
                  backgroundColor: "#bfe8d4",
                  color: "#0f8a4f",
                  borderRadius: "20px",
                  padding: "0 5px 0 5px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "15px",
                }}
              >
                admin
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "10px 0 10px 0",
                    border: "1px solid 	#cccccc",
                    width: "50%",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "0px",
                      marginTop: "3px",
                      marginRight: "10px",
                      color: "#a3a3a3",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-open-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
                    </svg>
                  </div>
                  <div style={{ color: "#404040" }}>E-mail</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid	#cccccc",
                    padding: "10px 0 10px 0",
                    width: "50%",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "0px",
                      marginTop: "3px",
                      marginRight: "10px",
                      color: "#a3a3a3",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </div>
                  <div style={{ color: "#404040" }}>Call</div>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ApiGetPractice;
