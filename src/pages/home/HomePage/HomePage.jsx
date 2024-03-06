//4. Hiển thị danh sách trên trang Homepage
import React, { useState } from "react";

import HomePageCity from "./HomePageCity/HomePageCity";
import HomePageHotel from "./HomePageHotel/HomePageHotel";
import HomePageType from "./HomePageType/HomePageType";
import "./HomePage.css";

const HomePage = (props) => {
  const dataImageCity = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  //b. Hiển thị các loại khách sạn
  const dataImageType = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  // c. Hiển thị các khách sạn
  const dataImageHotel = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];
  return (
    <div>
      <div className="home-page-city">
        {dataImageCity.map((item) => (
          <HomePageCity
            key={Math.random()}
            name={item.name}
            subText={item.subText}
            image={item.image}
          />
        ))}
      </div>
      <h1>Browse by property type</h1>
      <div className="home-page-type">
        {dataImageType.map((item) => (
          <HomePageType
            key={Math.random()}
            name={item.name}
            count={item.count}
            image={item.image}
          />
        ))}
      </div>
      <h1>Homes guests love</h1>

      <div className="home-page-hotel">
        {dataImageHotel.map((item) => (
          <HomePageHotel
            key={Math.random()}
            name={item.name}
            city={item.city}
            price={item.price}
            rate={item.rate}
            type={item.type}
            image_url={item.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
