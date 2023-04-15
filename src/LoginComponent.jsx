import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
export default function LoginComponent(props) {
  const [isSignUpMode, setIsSignUpMode] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputs(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function changeMode() {
    setIsSignUpMode(!isSignUpMode);
  }

  function signUpUser() {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        console.log(res.user.email);
        props.setIsUserSignedIn(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="login-component">
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
      {isSignUpMode ? (
        <>
          <button className="form-btn" onClick={signUpUser}>
            Sign Up
          </button>
          <p>
            Already have an account?
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={changeMode}
            >
              Sign In
            </span>
          </p>
        </>
      ) : (
        <>
          <button className="form-btn">Sign In</button>
          <p>
            Do not have account ?
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={changeMode}
            >
              Sign Up
            </span>
          </p>
        </>
      )}
    </div>
  );
}
