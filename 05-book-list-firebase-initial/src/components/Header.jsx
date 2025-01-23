import { NavLink } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

function Header({ pageTitle }) {
  function handleSignOut() {
    if (confirm("Are you sure you want to logout?")) {
      signOut(auth)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <h1>{pageTitle}</h1>

      <div className="header-btns">
        <NavLink to="/">
          <button className="btn">Books</button>
        </NavLink>

        <NavLink to="/add-book">
          <button className="btn">Add Book +</button>
        </NavLink>

        <button
          onClick={() => {
            handleSignOut();
          }}
          className="btn transparent"
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default Header;
