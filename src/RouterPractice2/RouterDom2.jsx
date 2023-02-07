import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage";
import HeaderPage from './HeaderPage';
import Home from "./Home";
const RouterDom2 = () => {
  return (
    
      <Router>
        <div>
          <HeaderPage/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutPage' element={<AboutPage/>}/>
          <Route path='/ContactPage' element={<ContactPage/>}/>
          
          </Routes>
          </div>
      </Router>
  
  );
};

export default RouterDom2;