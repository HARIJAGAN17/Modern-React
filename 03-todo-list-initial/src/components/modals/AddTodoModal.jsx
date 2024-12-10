import { useState } from "react";
import { useTodos } from "../../TodosContext";

function AddTodoModal() {
  const store = useTodos();

  
 const [newTodo,setNewTodo] = useState({
  title:"",
  description:"",
  isDone:false,
 });

 function handleChange(e){
  const {name,value} = e.target;

  setNewTodo((prev)=>({
    ...prev,
    [name]:value
  }));
 }


  function addHandler() {
    if (newTodo.title && newTodo.description) {
      store.dispatch({ type: "add", newTodo });
      store.setModals(false);

    } else {
      alert("Please fill both the values properly");
    }
  }

  return (
    <>
      <div className="form">
        <h3>Add a new task</h3>
        <label htmlFor="title">Title *</label>
        <input type="text" name="title" placeholder="Enter a title..." value={newTodo.title} onChange={handleChange} />
        <br />
        <label htmlFor="description">Description *</label>
        <textarea
          name="description"
          rows="4"
          placeholder="Enter a description..."
          value={newTodo.description} onChange={handleChange}
        />
        <br />
        <button
          onClick={() => {
            addHandler();
          }}
          className="btn gray"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTodoModal;
