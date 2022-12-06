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
import ScheduleConcert from "./ScheduleConcert";
import Profile from "./Profile";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [concerts, setConcerts] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((user) => {
        if (user.tickets === undefined) {
          setUserTickets([]);
          setCurrentUser(null);
        } else {
          setUserTickets(user.tickets);
          setCurrentUser(user);
        }
      });
  }, []);

  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser(null);
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
          element={
            <Concerts
              currentUser={currentUser}
              userTickets={userTickets}
              concerts={concerts}
              setConcerts={setConcerts}
            />
          }
        />
        <Route
          path="/scheduleaconcert"
          element={
            <ScheduleConcert concerts={concerts} setConcerts={setConcerts} />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/login"
          element={
            <LogIn
              setCurrentUser={setCurrentUser}
              setUserTickets={setUserTickets}
            />
          }
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
