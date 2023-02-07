import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StaffProfile = ({ getSingleStaff, singleStaff, loading }) => {
  const { staffId } = useParams();
  useEffect(() => {
    if (staffId) {
      getSingleStaff(staffId);
    }
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-full  flex justify-center flex-col h-full items-center">
      {loading === false ? (
        <div className="w-full justify-center flex bg-gray-100 items-center h-screen ">
          loading.....
        </div>
      ) : (
        <div
          style={{
            marginTop: "150px",
            width: "60%",
            border: "1px solid gray",
            boxShadow: "3px 2px 2px gray",
            paddingBottom: "80px",
            backgroundColor: "#d3dded",
          }}
        >
          <p className="font-bold text-lg mb-6 text-gray-900 ml-12 w-full pt-16">
            User InFo
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginLeft: "0px",
              marginRight: "10px",
            }}
          >
            <div className="font-semibold text-gray-800 w-72 ">
              User Name: {singleStaff?.username}
            </div>
            <div className="font-semibold text-gray-800  w-72  ">
              Telephone no. : {singleStaff?.phone}
            </div>
            <div className="font-semibold text-gray-800  w-72 ">
              Email: {singleStaff?.email}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginLeft: "0px",
              marginRight: "10px",
              marginTop: "35px",
            }}
          >
            <div className="font-semibold  text-gray-800  w-72">
              City: {singleStaff?.address?.city}
            </div>
            <div className="font-semibold  text-gray-800  w-72 ">
              Address : {singleStaff?.address?.street} ,
              {singleStaff?.address?.city}
            </div>
            <div className="font-semibold  text-gray-800  w-72">
              Zip Code: {singleStaff?.address?.zipcode}
            </div>
          </div>
          <div className="font-semibold text-gray-800 mt-7 ml-12 ">
            Company InFo : {singleStaff?.company?.name} ,{" "}
            {singleStaff?.company?.bs}
          </div>
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className=" bg-blue-600 rounded-md text-white font-semibold mt-14 py-2 px-4 hover:bg-white hover:text-blue-600"
      >
        Back to home{" "}
      </button>
    </div>
  );
};

export default StaffProfile;
