//3.Tạo Component Header cho Homepage
import React from "react";
import "./Header.css";
const Header = (props) => {
  const a = "where are you going?";
  const b = () => {};
  const c = "1 adult • 1 children • 1 room";
  const onSearch = () => {
    location.replace("/search");
    // console.log("search");
  };
  return (
    <div className="container-">
      <div className="container--">
        <h1>A lifetime of discounts? It's Genius</h1>
        <p>
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        <button type="button">Sign in / Register</button>
      </div>
      <form>
        <div className="header">
          <div className="header-item">
            <i className="fa fa-bed" />
            <input type="text" onChange={b} placeholder={a} />
          </div>
          <div className="header-item">
            <i className="fa fa-calendar" />
            <input type="date" />
          </div>
          <div className="header-item">
            <i className="fa fa-female" />
            <input type="text" onChange={b} placeholder={c} />
          </div>
          <button type="button" onClick={onSearch}>
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
