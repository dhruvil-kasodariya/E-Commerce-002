import { SearchBox } from "./searchBox.style";

const SearchBoxComponent = ({ searchChangeHandle }) => {
  return (
    <SearchBox>
      <input
        type="search"
        placeholder="Search..."
        onChange={searchChangeHandle}
      />
    </SearchBox>
  );
};

export default SearchBoxComponent;
