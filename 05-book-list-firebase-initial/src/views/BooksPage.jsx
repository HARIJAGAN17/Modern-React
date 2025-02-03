import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooks,fetchBooks } from "../store/booksSlice.js";


function BooksPage() {

  const dispatch = useDispatch();
  const pageTitle = "📖 Book List with Router,Firebase";

  const books = useSelector(selectBooks).books;
  const bookStatus = useSelector(selectBooks).status;

  useEffect(() => {
    if(bookStatus == 'idle'){
      dispatch(fetchBooks());
    }
  },[]);

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />
        <div className="books-container">
          {bookStatus=="Loading" ? "Loading..." :
          <div className="books-list">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>}
        </div>
      </div>
    </>
  );
}

export default BooksPage;
