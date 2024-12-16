import { useSelector } from "react-redux";
import { selectNotes, eraseNotes, addNotes } from "../store/notesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Notes(props) {
  const notes = useSelector(selectNotes).filter(
    (note) => note.book_id == props.bookId
  );

  const dispatch = useDispatch();

  function handleEraseNote(id) {
    if (confirm("Are you sure you want to delete this note?")) {
      dispatch(eraseNotes(id));
    }
  }

  const [newNote, setNewNote] = useState({
    book_id: props.bookId,
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleBook(e) {
    e.preventDefault();
    if (newNote.title && newNote.text) {
      dispatch(addNotes(newNote));
      setNewNote({ book_id: props.bookId, title: "", text: "" });
    } else {
      alert("Please fill details properly");
    }
  }
  return (
    <>
      <div className="notes-wrapper">
        <h2>Reader's Notes</h2>

        {notes.length ? (
          <div className="notes">
            {notes.map((note) => (
              <div key={note.id} className="note">
                <div
                  onClick={() => {
                    handleEraseNote(note.id);
                  }}
                  className="erase-note"
                >
                  Erase note
                </div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>This doesn't have any notes please use below form to add notes.</p>
        )}
        <details>
          <summary>Add a note</summary>
          <form className="add-note">
            <div className="form-control">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Add a note title"
                value={newNote.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Note *</label>
              <textarea
                type="text"
                name="text"
                placeholder="Add note"
                value={newNote.text}
                onChange={handleChange}
              />
            </div>

            <button
              onClick={(e) => {
                handleBook(e);
              }}
              className="btn btn-block"
            >
              Add Note
            </button>
          </form>
        </details>
      </div>
    </>
  );
}

export default Notes;
