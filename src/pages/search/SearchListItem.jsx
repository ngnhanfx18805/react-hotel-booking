import "./SearchListItem.css";

const SearchList = (props) => {
  console.log(props.dataSearch);
  const item = props.dataSearch;
  return (
    <div>
      <div className="search-list" key={Math.random()}>
        <img src={item.image_url} />
        <div className="search-content">
          <h2>{item.name}</h2>
          <p>{item.distance} from center</p>
          <p className="tag">{item.tag}</p>
          <p className="description">{item.description}</p>
          <p>{item.type}</p>
          <p className="free-cancellation">Free cancellation</p>
          <p id="cancellation">
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div>
          <div className="rate-">
            <h3>{item.rate_text}</h3>
            <h3>{item.rate}</h3>
          </div>
          <div className="price-">
            <p className="price">${item.price}</p>
            <p className="includes">Includes taxes and fees</p>
            <button type="button">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
