import "./HomePageType.css";

const HomePageType = (props) => {
  return (
    <div className="homepagetype">
      <img src={props.image} />
      <div>
        <p>{props.name}</p>
        <p>{props.count} hotels</p>
      </div>
    </div>
  );
};

export default HomePageType;
