import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";
import "./Search.css";
const Search = () => {
  return (
    <div className="search">
      <SearchPopup />
      <SearchList />
    </div>
  );
};

export default Search;
