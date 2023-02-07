import axios from "axios";
import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffList from "./StaffList";
import StaffProfile from "./StaffProfile";

const ApiTableGet = () => {
  const [array, setArray] = useState([]);
  const [singleStaff, setSingleStaff]= useState({});
const [loading,setLoading]=useState(false);
  // console.log('first', first)
// console.log('singleStaff', singleStaff)
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {setArray(response?.data)
        setLoading(false)
      }
      
      )
      .catch((Error) => console.log("Error", Error));
  };
  const getSingleStaff = (id) => {
    //console.log('id', id)
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) =>setSingleStaff (response?.data))
      .catch((Error) => console.log("Error", Error));
  };
  return (
    <Router>
      {/* <div> */}
        <Routes>
          <Route
            path="/"
            element={<StaffList array={array} getData={getData}/>}
            exact
          />
          <Route
            path="/profile/:staffId"
            element={<StaffProfile getSingleStaff={getSingleStaff} singleStaff={singleStaff} loading={loading}/>}
            exact
          />
        </Routes>
      {/* </div> */}
    </Router>
  );
};

export default ApiTableGet;
