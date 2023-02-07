import React from "react";
import "./style.css";

const navbarArray = [
  {
    icon: <i className="fa-solid fa-house-chimney"></i>,
    navItems: "Home",
  },
  {
    icon: <i className="fa-solid fa-file-lines"></i>,

    navItems: "About",
  },
  {
    icon: <i className="fa-solid fa-gears"></i>,

    navItems: "Sercive",
  },
  {
    icon: <i className="fa-solid fa-image"></i>,

    navItems: "Portfolio",
  },
  {
    icon: <i className="fa-solid fa-users"></i>,
    navItems: "Team",
  },
  {
    icon: <i className="fa-solid fa-id-badge"></i>,

    navItems: "Contact",
  },
];

const Navbar = () => {
  const iconFunction = () => {
    const icon = document.querySelector(".icon");
    const search = document.querySelector(".search");
    icon.onclick = function () {
      search.classList.toggle("active");
    };
  };
  return (
    <div className="body">

      <div className="bal">
      <ul className="">
        {navbarArray?.map((data) => (
          <li className="overflow-hidden">
            {/* <div >{data?.icon}</div>
            {/* <div className={`kawal`}>{data?.navItems}</div> */}
            {/* <div className={`kawal`}>{data?.navItems}</div>  */}
            <a href="">
              <div className="icon">
                <div className="">{data?.icon}</div>
                <div className="">{data?.icon}</div>
              </div>

              <div className="name "><span datatype={data?.navItems}>{data?.navItems}</span></div>
            </a>
          </li>
        ))}
      </ul>
      
    </div>
   
    </div>
  );
};

export default Navbar;
