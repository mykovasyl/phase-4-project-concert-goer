import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser, handleLogOut }) {
  const linkStyling = { padding: "10px" };

  return (
    <nav>
      <Link as={Link} to="/" style={linkStyling}>
        Concert GO-er
      </Link>
      {currentUser ? (
        <>
          <Link as={Link} to="/yourtickets" style={linkStyling}>
            Your tickets
          </Link>
          <Link as={Link} to="/concerts" style={linkStyling}>
            Get tickets to concerts
          </Link>
          <Link as={Link} to="/scheduleaconcert" style={linkStyling}>
            Schedule a concert
          </Link>
        </>
      ) : null}
      {currentUser ? (
        <button onClick={handleLogOut}>Log out</button>
      ) : (
        <>
          <Link as={Link} to="/login" style={linkStyling}>
            Log in
          </Link>
          <Link as={Link} to="/signup" style={linkStyling}>
            Sign up
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
