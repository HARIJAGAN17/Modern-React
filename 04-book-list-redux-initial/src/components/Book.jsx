import { Link } from "react-router-dom";
import { toggleBook } from "../store/booksSlice";
import { useDispatch } from "react-redux";

function Book({ book }) {
  const dispatch = useDispatch();

  function hadleToggle(e, id) {
    e.preventDefault();
    dispatch(toggleBook(id));
  }
  return (
    <>
      <Link to={"/book/" + book.id}>
        <div className="book">
          {book.isRead && (
            <div className="readIt">
              <i className="fa-solid fa-eye"></i>
            </div>
          )}

          <div className="book-cover">
            <img src={book.cover} />

            <button
              onClick={(e) => {
                hadleToggle(e, book.id);
              }}
              className={book.isRead ? "isRead" : ""}
            >
              <i className="fa-solid fa-eye"></i>
              <span>
                {book.isRead ? "Already Read It" : "Haven't Read it yet"}
              </span>
            </button>
          </div>

          <div className="book-details">
            <p className="book-author">{book.author}</p>
            <h3 className="book-title">{book.title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Book;
