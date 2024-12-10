import Todo from "./Todo.jsx";

import { useTodos } from "../TodosContext.jsx";

function TodosList() {
  const store = useTodos();

  return (
    <>
      <div className="todos">
        {
        store.filterTodos().length? store.filterTodos().map((item) => (
          <Todo todo={item} key={item.id} />
        )) : "No todos here"
        }
      </div>
    </>
  );
}

export default TodosList;
