import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Oval } from "react-loader-spinner";
import { auth } from "../firebaseConfig";

export default function Signin(props) {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { setIsSignUpMode } = props;
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  const [userError, setUserError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (data.email && data.password) {
      signInWithEmailAndPassword(data.email, data.password);
    }
    if (error) {
      setUserError(error);
    }
  }

  function DisplayUserName() {
    if (user) {
      return (
        <div>
          <p>Signed In User: {user.user.email}</p>
        </div>
      );
    }
  }

  return loading ? (
    <div className="loader">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  ) : (
    <div className="login-modal">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <button onClick={handleSubmit}>Sign In</button>
      <h3>
        Don't have an account?{" "}
        <span
          onClick={() => setIsSignUpMode(true)}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </h3>
      <DisplayUserName />
      {userError}
    </div>
  );
}
