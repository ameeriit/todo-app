import { createSlice } from "@reduxjs/toolkit";

// initial state for todos
const initialState = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: false },
  { id: 3, title: "Finish homework", completed: true },
];

// create a slice of the redux store for todos
const todosSlice = createSlice({
  name: "todos",
  //   this is optional used for reference only
  initialState,
  reducers: {
    // add function
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    // delete function
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // toggle function
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todosSlice.actions;
export default todosSlice.reducer;
