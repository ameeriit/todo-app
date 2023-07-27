import PropTypes from "prop-types";

const FilterOptions = ({ selectedFilter, onFilterChange }) => {
  return (
    <select
      value={selectedFilter}
      onChange={(e) => onFilterChange(e.target.value)}
      className="px-2 py-1 block mb-5 bg-gray-800 rounded-md outline-none text-white text-left"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
};

FilterOptions.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterOptions;
