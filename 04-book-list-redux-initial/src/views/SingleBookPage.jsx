import { Link, useParams, useNavigate } from "react-router-dom";
import Notes from "../components/Notes.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks, eraseBook, toggleBook } from "../store/booksSlice.js";
import { eraseBookNotes } from "../store/notesSlice.js";

function SingleBookPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function hadndleEraseBook(id) {
    if (confirm("Are you sure want to delete the book?")) {
      dispatch(eraseBook(id));
      dispatch(eraseBookNotes(id));
      navigate("/");
    }
  }

  const { id } = useParams();

  const books = useSelector(selectBooks);

  const book = books.filter((book) => book.id == id)[0];

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn">← Back to Books</button>
        </Link>

        {book ? (
          <div>
            <div className="single-book">
              <div className="book-cover">
                <img src={book.cover} />
              </div>

              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">{book.author}</h4>
                <p>{book.synopsis}</p>
                <div className="read-checkbox">
                  <input
                    onClick={() => {
                      dispatch(toggleBook(book.id));
                    }}
                    type="checkbox"
                    defaultChecked={book.isRead}
                  />
                  <label>
                    {book.isRead ? "Already Read It" : "Haven't Read it yet"}
                  </label>
                </div>
                <div
                  onClick={() => {
                    hadndleEraseBook(book.id);
                  }}
                  className="erase-book"
                >
                  Erase book
                </div>
              </div>
            </div>

            <Notes bookId={id} />
          </div>
        ) : (
          <div>
            <p>
              Book not found. click above button to go back to list of books
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleBookPage;
