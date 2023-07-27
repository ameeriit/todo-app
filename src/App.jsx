import { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <main className="app container mx-auto px-6 py-8">
      <Header onSearch={handleSearch} />
      <h1 className="text-4xl text-white text-center font-bold mb-12">
        Todo App
      </h1>
      <TodoList searchQuery={searchQuery} />
    </main>
  );
}

export default App;
