import FullPageLoader from "../components/FullPageLoader.jsx";
import { useState } from "react";
import { auth } from "../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice.js";

function LoginPage() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  function handleCredentials(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  }

  function handleSignUp(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        setUserCredentials({ email: "", password: "" });
        console.log("User created sucessfully");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        dispatch(
          addUser({
            id: userCredential.user.uid,
            email: userCredential.user.email,
          })
        );
        console.log("Logged in successfully");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  function handlePasswordReset() {
    const email = prompt("Please enter your email");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset mail sent");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      {isLoading && <FullPageLoader></FullPageLoader>}

      <div className="container login-page">
        <section>
          <h1>Welcome to the Book App</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
            <button
              className={`btn ${loginType == "login" ? "selected" : ""}`}
              onClick={() => setLoginType("login")}
            >
              Login
            </button>
            <button
              className={`btn ${loginType == "signup" ? "selected" : ""}`}
              onClick={() => setLoginType("signup")}
            >
              Signup
            </button>
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Email *</label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type="text"
                name="email"
                placeholder="Enter your email"
                value={userCredentials.email}
              />
            </div>
            <div className="form-control">
              <label>Password *</label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={userCredentials.password}
              />
            </div>
            {loginType == "login" ? (
              <button
                onClick={(e) => handleLogin(e)}
                className="active btn btn-block"
              >
                Login
              </button>
            ) : (
              <button
                onClick={(e) => handleSignUp(e)}
                className="active btn btn-block"
              >
                Sign Up
              </button>
            )}
            {error && <div className="error">{error}</div>}
            {loginType == "login" && (
              <p
                onClick={() => {
                  handlePasswordReset();
                }}
                className="forgot-password"
              >
                Forgot Password?
              </p>
            )}
          </form>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
