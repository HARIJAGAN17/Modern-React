import './Todo.scss'

function Todo(props) {

  return (
    <>
        <div className={`todo ${props.todo.isDone ? 'done' : ''}`}>
            <button className="erase">x erase</button>
            <h3>
                {props.todo.title}
            </h3>
            <p>
                {props.todo.description}
            </p>
            <div className="task-check">
                <input type="checkbox" checked={props.todo.isDone} />
                <label>
                    {!props.todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo