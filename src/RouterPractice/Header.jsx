import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center ">
      <ul className="flex justify-center gap-10">
        <li className="text-gray-900 font-medium ">
          <NavLink
            
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "text-blue-500"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="text-gray-900 font-medium ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "text-blue-500"
            }
            to={`/contact/${"099888999"}`}
          >
            Contact
          </NavLink>
        </li>
        <li className="text-gray-900 font-medium ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "text-blue-500"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
