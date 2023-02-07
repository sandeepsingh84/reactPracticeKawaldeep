import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import HomePage from "./HomePage";

const RouterDomPractice = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:contactNo" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouterDomPractice;