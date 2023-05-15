import { SearchBox } from "./searchBox.style";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBoxComponent = ({ searchChangeHandle }) => {
  return (
    <SearchBox>
      <AiOutlineSearch />
      <input
        type="search"
        placeholder="Search..."
        onChange={searchChangeHandle}
      />
    </SearchBox>
  );
};

export default SearchBoxComponent;
