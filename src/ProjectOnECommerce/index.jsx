import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
// import Navbar from "./Navbar";
import ProductCards from "./ProductCards";
import ProductProfile from "./ProductProfile";
const ProjectOnECommerce = () => {
  const [currentState, setCurrentState] = useState([]);
  // const [visible, setvisibleState] = useState(false);
  const [getSingleProduct, setGetSingleProduct] = useState({});

  // console.log("getSingleProduct", getSingleProduct);

  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (response?.data?.length > 0) {
          setCurrentState(response?.data);
        }
      })
      .catch((error) => console.log("error", error));
      // setvisibleState(false);
  };

  const SingleProduct = (id) => {
    console.log('id', id)
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // console.log("RESPONSE", response);
        setGetSingleProduct(response?.data);
      })
      .catch((error) => console.log("error", error));
      // setvisibleState(true)
  };

  useEffect(() => {
    // SingleProduct();
    getData();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      < Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProductCards
                currentState={currentState}
                SingleProduct={SingleProduct}


              />
            }
          ></Route>
          <Route
            path="/profile/:productId"
            element={
              <ProductProfile
                getSingleProduct={getSingleProduct}
                SingleProduct={SingleProduct}
                // visible={  visible}
              />
            }
          ></Route>
        </Routes>
      </ Router>
      <div></div>
    </div>
  );
};

export default ProjectOnECommerce;
