import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState([]);
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    name: "",
    city: "",
    state: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupForm),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(navigate("/login"));
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
    // .then((resp) => resp.json())
    // .then(navigate("/login"));
  }

  function handleInputChange(e) {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Sign up now to schedule concerts and reserve your own tickets!</h1>
      <form onSubmit={handleSubmit}>
        <label>Choose a username:</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={signupForm.username}
          onChange={handleInputChange}
        />
        <label>Create a password:</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={handleInputChange}
        />
        <label>Confirm password:</label>
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm password"
          value={signupForm.passwordConfirmation}
          onChange={handleInputChange}
        />
        <label>
          Full name:
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={signupForm.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            type="text"
            placeholder="City"
            value={signupForm.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State:
          <input
            name="state"
            type="text"
            placeholder="State"
            value={signupForm.state}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign up!</button>
        {error.map((err) => {
          return <h4 key={err}>{err}</h4>;
        })}
      </form>
    </div>
  );
}

export default SignUp;
