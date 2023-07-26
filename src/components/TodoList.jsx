import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import FilterOptions from "./FilterOptions";
import SearchBar from "./SearchBar";
import { addTodo, deleteTodo, toggleComplete } from "../store/reducers";

const TodoList = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((todo) => {
      if (filter === "all") return true;
      if (filter === "completed") return todo.completed;
      if (filter === "incomplete") return !todo.completed;
      return true;
    });

  const addTodoHandler = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleCompleteHandler = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="text-center">
      <SearchBar onSearch={handleSearch} />
      <h1 className="text-4xl text-white text-center font-bold mb-12">
        Todo App
      </h1>
      <div className="max-w-[400px] mx-auto">
        <AddTodoForm addTodo={addTodoHandler} />
        <FilterOptions
          selectedFilter={filter}
          onFilterChange={handleFilterChange}
        />
        <div>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleComplete={toggleCompleteHandler}
              onDelete={deleteTodoHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
