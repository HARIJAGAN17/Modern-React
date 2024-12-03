import "./Todo.scss";

function Todo(props) {
  return (
    <>
      <div className={`todo ${props.todo.isDone ? "done" : ""}`}>
        <button
          onClick={() => {
            props.deleteTodo(props.todo.id);
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
              props.toggleIsonde(props.todo.id);
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
