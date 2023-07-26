import PropTypes from "prop-types";

const Todo = ({ id, title, completed, onToggleComplete, onDelete }) => {
  return (
    // checkbox clicked triggers the css effect for completed todos
    <>
      <div className="todo flex flex-wrap gap-4 mb-6">
        <div className="mr-10">
          <input
            className="w-4 h-4 mr-3"
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete(id)}
          />
          <label
            className={`text-lg text-white font-medium ${
              completed ? "line-through text-red-500" : ""
            }`}
          >
            {title}
          </label>
        </div>
        <button
          className="bg-red-500 text-lg font-semibold text-white px-3 py-[2px] rounded-md hover:bg-red-800 transition-all"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
