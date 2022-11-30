import React from "react";
import { Link } from "react-router-dom";

function Home({ currentUser, handleLogOut }) {
  return (
    <div>
      <h1>Concert Go-er</h1>
      <h3>Schedule your own and get tickets for concerts!</h3>
      {currentUser ? (
        <>
          <p>Welcome back, {currentUser.name}</p>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <Link to="signup" style={{ marginRight: "10px" }}>
            Sign up today!
          </Link>
          <Link to="login">Log in</Link>
        </>
      )}
    </div>
  );
}

export default Home;
