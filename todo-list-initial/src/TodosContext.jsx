import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";

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

  return (
    <>
      <main>
        <TodosContext.Provider value={{ todos, dispatch }}>
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
