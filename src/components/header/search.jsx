import { SearchContext } from "@/provider/search-provider";
import { useContext } from "react";

const Search = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className=" mt-5 border bg-[background: #F4F4F5;
] rounded-md h-[25px] w-[150px] pl-1 text-xs text-black hidden md:flex "
      type="text"
      placeholder="Search"
      onChange={handleChange}
    />
  );
};

export default Search;
