import "./Todo.scss";
import { useTodos } from "../TodosContext.jsx";

function Todo(props) {
  const store = useTodos();

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
