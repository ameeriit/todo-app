import PropTypes from "prop-types";

const FilterOptions = ({ selectedFilter, onFilterChange }) => {
  return (
    // filter wrapper for todos
    <div className="flex gap-2 flex-wrap mb-8 text-white">
      {/* filter for all, completed and uncompleted todos */}
      <button
        onClick={() => onFilterChange("all")}
        className={`px-4 py-1  font-semibold
          ${
            selectedFilter === "all" ? "active bg-orange-400  rounded-md" : ""
          }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className={`px-4 py-1 font-semibold
          ${
            selectedFilter === "completed"
              ? "active bg-orange-400 rounded-md  "
              : ""
          }
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange("incomplete")}
        className={`px-4 py-1 font-semibold
          ${
            selectedFilter === "incomplete"
              ? "active bg-orange-400 rounded-md"
              : ""
          }`}
      >
        Incomplete
      </button>
    </div>
  );
};

FilterOptions.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterOptions;
