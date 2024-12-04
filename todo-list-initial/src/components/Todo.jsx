import "./Todo.scss";
import { useContext } from "react";
import TodosContext from "../TodosContext.js";

function Todo(props) {
  const store = useContext(TodosContext);

  return (
    <>
      <div className={`todo ${props.todo.isDone ? "done" : ""}`}>
        <button
          onClick={() => {
            store.dispatch({
              type: "deleted",
              elId: props.todo.id,
            });
          }}
          className="erase"
        >
          x erase
        </button>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.description}</p>
        <div className="task-check">
          <input
            onClick={() => {
              store.dispatch({
                type: "toggle",
                elId: props.todo.id,
              });
            }}
            type="checkbox"
            defaultChecked={props.todo.isDone}
          />
          <label>{!props.todo.isDone ? "To-Do" : "Done"}</label>
        </div>
      </div>
    </>
  );
}

export default Todo;
