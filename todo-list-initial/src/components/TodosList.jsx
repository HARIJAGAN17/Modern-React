import Todo from "./Todo.jsx";

import { useContext } from "react";

import TodosContext from "../TodosContext.js";

function TodosList() {
  const store = useContext(TodosContext);

  function deleteHandler(id) {
    store.dispatch({
      type: "deleted",
      elId: id,
    });
  }

  function toggleIsDoneHandler(id) {
    store.dispatch({
      type: "toggle",
      elId: id,
    });
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
