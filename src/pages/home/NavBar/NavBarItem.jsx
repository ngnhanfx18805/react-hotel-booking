import React from "react";
import "./NavBarItem.css";
const NavBarItem = (props) => {
  const icon = "fa " + props.icon;

  return (
    //nếu type = stays thì thêm navbar-list__first vào trường class
    <li className={props.type === "Stays" ? "navbar-list__first" : ""}>
      <a href="#">
        <i className={icon}></i>
        {props.type}
      </a>
    </li>
  );
};

export default NavBarItem;
