import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Concerts from "./Concerts";
import ReserveTickets from "./ReserveTickets";
import Tickets from "./Tickets";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [concerts, setConcerts] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((user) => {
        setUserTickets(user.tickets);
        setCurrentUser(user);
        console.log(user.tickets);
        console.log(user);
      });

    fetch("/concerts")
      .then((resp) => resp.json())
      .then((concerts) => {
        setConcerts(concerts);
      });
  }, []);

  function handleLogOut() {
    setCurrentUser(null);
    fetch("/logout", {
      method: "DELETE",
    });
    navigate("/");
  }

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
        <Route
          path="/reservetickets"
          element={
            <ReserveTickets
              userTickets={userTickets}
              setUserTickets={setUserTickets}
            />
          }
        />
        <Route
          path="/yourtickets"
          element={
            <Tickets
              userTickets={userTickets}
              setUserTickets={setUserTickets}
            />
          }
        />
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
