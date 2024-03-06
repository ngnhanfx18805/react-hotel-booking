//a. Hiển thị các thành phố
// import styled from "styled-components";
import "./HomePageCity.css";
const HomePageCity = (props) => {
  // const item = styled.homepagecity``;
  // console.log(props);
  return (
    <div className="homepagecity">
      <img src={props.image} />
      <div className="text">
        <h1>{props.name}</h1>
        <h2>{props.subText}</h2>
      </div>
    </div>
  );
};

export default HomePageCity;
