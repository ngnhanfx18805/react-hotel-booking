//2. Tạo Component Navbar

import React from "react";
import "./NavBar.css";
import NavBarItem from "./NavBarItem";
// import * as json from "/data/navBar.json";
const NavBar = (props) => {
  const navBar = [
    //copy navbar.json
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  // console.log(navBar);

  // const onRegister = () => {
  //   location.replace("/Register");
  //   // console.log("search");
  // };
  return (
    <div className="navbar">
      <div className="navbar-login">
        <h3>Booking Website</h3>
        <div className="navbar-login__button">
          <button type="buttom">Register</button>
          <button>Login</button>
        </div>
      </div>
      <div className=".navbar-list">
        <ul>
          {navBar.map(
            (
              item //truyền từng item sang NavBarItem
            ) => (
              <NavBarItem
                key={Math.random()}
                type={item.type}
                icon={item.icon}
                active={item.active}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
