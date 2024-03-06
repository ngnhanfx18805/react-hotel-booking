import "./SearchPopup.css";
const SearchPopup = (props) => {
  return (
    <div className="search-popup">
      <h1>Search</h1>
      <form>
        <p>Destination</p>
        <input type="text"></input>
        <p>Check-in Date</p>
        <input type="date"></input>
        <p>Option</p>
        <div className="option">
          <div className="mimax">
            <label>
              Min price
              <label className="per">per night</label>
            </label>
            <input type="text"></input>
          </div>
          <div className="mimax">
            <label>
              Max price
              <label className="per">per night</label>
            </label>
            <input type="text"></input>
          </div>
          <div className="mimax">
            <label>Adult</label>
            <input type="text" placeholder="1"></input>
          </div>
          <div className="mimax">
            <label>Children</label>
            <input type="text" placeholder="0"></input>
          </div>
          <div className="mimax">
            <label>Room</label>
            <input type="text" placeholder="1"></input>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPopup;
