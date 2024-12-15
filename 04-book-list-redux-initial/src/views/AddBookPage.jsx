import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksSlice.js";
import { useState } from "react";

function AddBookPage() {
  const pageTitle = "Add Book";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    title: "",
    cover: "",
    author: "",
    isRead: false,
    synopsis: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleBook(e) {
    e.preventDefault();

    if (newBook.title && newBook.cover && newBook.author) {
      dispatch(addBook(newBook));
      navigate("/");
    } else {
      alert("Please fill the mandatory fields.");
    }
  }
  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />

        <form className="add-form">
          <div className="form-control">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              placeholder="Add Book Title"
              value={newBook.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Book Cover *</label>
            <input
              type="text"
              name="cover"
              placeholder="Add Cover"
              value={newBook.cover}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Author *</label>
            <input
              type="text"
              name="author"
              placeholder="Add Author"
              value={newBook.author}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Synopsis *</label>
            <textarea
              type="text"
              name="synopsis"
              placeholder="Add a synopsis..."
              value={newBook.synopsis}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={(e) => {
              handleBook(e);
            }}
            className="btn btn-block"
          >
            Save Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBookPage;
