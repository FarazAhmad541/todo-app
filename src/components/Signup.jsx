import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Oval } from "react-loader-spinner";

import { auth } from "../firebaseConfig";
export default function Signup(props) {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setIsSignUpMode } = props;
  const [passwordError, setPasswordError] = useState("");

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (error) setPasswordError("");
    if (data.password !== data.confirmPassword) {
      setPasswordError("Passwords Donot Match");
      return;
    } else {
      await createUserWithEmailAndPassword(data.email, data.password);
    }
  }

  function DisplayUserName() {
    if (user) {
      return (
        <div>
          <p>Signed Up User: {user.user.email}</p>
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
      <input
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <button onClick={handleSubmit}>Sign Up</button>
      <h3>
        Already have a account{" "}
        <span
          onClick={() => setIsSignUpMode(false)}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Sign In
        </span>
      </h3>
      <DisplayUserName />
      {passwordError}
    </div>
  );
}
