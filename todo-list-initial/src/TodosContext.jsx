import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { useState } from "react";

export const TodosContext = createContext("");

const initialTodos = [
  {
    id: 0,
    title: "Do Groceries",
    description: "Buy apples, rice, juice and toilet paper.",
    isDone: true,
  },
  {
    id: 1,
    title: "Study React",
    description: "Understand context & reducers.",
    isDone: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn state management with Redux",
    isDone: false,
  },
];

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(TodosReducer, initialTodos);
  const [modals, setModals] = useState(false);
  const [filterBy, setFilterBy] = useState("todo");

  return (
    <>
      <main>
        <TodosContext.Provider
          value={{
            todos,
            dispatch,
            modals,
            setModals,
            filterBy,
            setFilterBy,
          }}
        >
          {props.children}
        </TodosContext.Provider>
      </main>
    </>
  );
}

export default TodosProvider;

export function useTodos() {
  return useContext(TodosContext);
}

function TodosReducer(todos, action) {
  switch (action.type) {
    case "deleted":
      if (confirm("Are you sure you wan to delete ?"))
        return todos.filter((item) => item.id !== action.elId);

    case "add":
      let newTodo = action.newTodo;
      newTodo.id = todos.length
        ? Math.max(...todos.map((item) => item.id)) + 1
        : 0;
      return [...todos, newTodo];

    case "toggle":
      return todos.map((item) => {
        if (item.id === action.elId) {
          item.isDone != item.isDone;
          return item;
        } else {
          return item;
        }
      });
  }
}
