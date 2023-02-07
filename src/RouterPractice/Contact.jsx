import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Contact = () => {
  const { contactNo } = useParams();
  const navigate = useNavigate();
  return (
    <div className="text-center">
      This is Contact page
      <p className="text-red-500">{contactNo}</p>
      <button
        onClick={() => navigate("/")}
        className="rounded-md shadow-md border px-4 py-1 bg-blue-500 text-white font-medium"
      >
        back to home page
      </button>
    </div>
  );
};

export default Contact;
