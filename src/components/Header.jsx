import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { FaBuffer } from "react-icons/fa6";

const Header = ({ onSearch }) => {
  return (
    <header className="text-center py-4 mb-12 flex items-center gap-10 justify-between">
      <FaBuffer className="text-white text-4xl" />
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
