import { SearchBox, SearchIcon } from "./searchBox.style";

const SearchBoxComponent = ({ searchChangeHandle }) => {
  return (
    <SearchBox>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchChangeHandle}
      />
      <button>
        <SearchIcon />
      </button>
    </SearchBox>
  );
};

export default SearchBoxComponent;
