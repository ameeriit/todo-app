import { useState } from "react";
import PropTypes from "prop-types";

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form className="mb-10" onSubmit={handleSubmit}>
      <input
        className="w-full border-[2px] rounded-md px-4 py-1 mb-4 mr-4 outline-none placeholder:text-base text-base font-medium"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button
        className="w-full bg-green-500 px-4 py-1 text-lg text-white font-bold rounded-md transition-all hover:bg-orange-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
