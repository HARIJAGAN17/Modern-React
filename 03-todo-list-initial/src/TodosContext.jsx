import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { useState } from "react";

export const TodosContext = createContext("");


const initialTodos = localStorage.getItem("todos").length
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(TodosReducer, initialTodos);
  const [modals, setModals] = useState(false);
  const [filterBy, setFilterBy] = useState("todo");

  function filterTodos() {
    switch (filterBy) {
      case "todo":
        return todos.filter((todo) => !todo.isDone);
      case "done":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
            filterTodos,
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
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
  }
}
