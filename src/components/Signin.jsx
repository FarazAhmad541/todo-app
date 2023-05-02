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

  async function handleSubmit(event) {
    event.preventDefault();
    if (data.email && data.password) {
      await signInWithEmailAndPassword(data.email, data.password);
    }
    if (error) {
      console.log(error);
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
    <div className="signin-modal">
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
      <button onClick={handleSubmit} className="login-btn">
        Sign In
      </button>
      <h4>
        Don't have an account?{" "}
        <span
          onClick={() => setIsSignUpMode(true)}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </h4>
    </div>
  );
}
