//c. Hiển thị các khách sạn

import "./HomePageHotel.css";
const HomePageHotel = (props) => {
  // console.log(props);

  return (
    <div className="homepagehotel">
      <img src={props.image_url} />
      <div className="content">
        <a href="/detail">{props.name}</a>
        <p>{props.city}</p>
        <h2>Starting from {props.price}</h2>
        <div className="content-">
          <p>{props.rate}</p>
          <p>{props.type}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageHotel;
