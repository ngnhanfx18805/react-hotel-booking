import React from "react";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import "./Home.css";
import HomePage from "./HomePage/HomePage";
import Register from "./Register/Register";
import Footer from "./Footer/Footer";
const Home = () => {
  const dataFooter = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];

  const valueFooter = dataFooter.map((item) => item.col_values);
  // console.log(valueFooter);
  return (
    <div>
      <div className="home-nav">
        <NavBar />
        <Header className="header" />
      </div>
      <div className="home-page">
        <HomePage />
      </div>
      <div>
        <Register />
      </div>
      <div className="home-footer">
        <Footer valueFooter={valueFooter} />
      </div>
    </div>
  );
};

export default Home;
