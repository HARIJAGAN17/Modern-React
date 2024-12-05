import Todo from "./Todo.jsx";

import { useTodos } from "../TodosContext.jsx";

function TodosList() {
  const store = useTodos();

  return (
    <>
      <div className="todos">
        {store.todos.map((item) => (
          <Todo todo={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
