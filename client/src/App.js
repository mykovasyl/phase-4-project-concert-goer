import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Concerts from "./Concerts";
import ReserveTickets from "./ReserveTickets";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    //   fetch("/me")
    //     .then((resp) => resp.json())
    //     .then((user) => setCurrentUser(user));

    fetch("/concerts")
      .then((resp) => resp.json())
      .then((concerts) => {
        setConcerts(concerts);
        console.log(concerts);
      });
  }, []);

  const handleLogOut = () => {
    setCurrentUser(null);
    fetch("/logout", {
      method: "DELETE",
    });
  };

  return (
    <div className="App">
      <NavBar currentUser={currentUser} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home currentUser={currentUser} handleLogOut={handleLogOut} />
          }
        />
        <Route path="/reservetickets" element={<ReserveTickets />} />
        <Route
          path="/concerts"
          element={<Concerts currentUser={currentUser} concerts={concerts} />}
        />
        <Route
          path="/signup"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/login"
          element={<LogIn setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="*"
          element={
            <>
              <h1>404 path not found</h1>
              <h3>Try using the following paths:</h3>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
