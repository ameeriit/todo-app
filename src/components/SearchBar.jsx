import { useState } from "react";
import PropTypes from "prop-types";
import { FaBuffer } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    // searchbar input for todos
    <div className="text-center py-4 mb-12 flex items-center gap-10 justify-between">
      <FaBuffer className="text-white text-4xl" />
      <div className="relative">
        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4" />
        <input
          className=" text-black bg-gray-200 max-w-[120px] w-full placeholder:text-gray-600 rounded-lg pl-10 pr-4 py-[3px] outline-none"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
