import Todo from "./Todo.jsx";

import { useContext } from "react";

import TodosContext from "../TodosContext.js";

function TodosList() {

  const store = useContext(TodosContext);

  function deleteHandler(id) {
    if (confirm("Are you sure yu want to delete the to-do?")) {
      store.setTodos(store.todos.filter((item) => item.id !== id));
    }
  }

  function toggleIsDoneHandler(id) {
    store.setTodos(
      store.todos.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
          return item;
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <div className="todos">
        {store.todos.map((item) => (
          <Todo
            todo={item}
            key={item.id}
            deleteTodo={(id) => deleteHandler(id)}
            toggleIsonde={(id) => toggleIsDoneHandler(id)}
          />
        ))}
      </div>
    </>
  );
}

export default TodosList;
