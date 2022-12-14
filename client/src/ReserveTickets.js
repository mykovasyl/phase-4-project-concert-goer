import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ReserveTickets({ userTickets, setUserTickets }) {
  const [ticketNumber, setTicketNumber] = useState(0);
  const location = useLocation();
  const { concert, userId } = location.state;
  const navigate = useNavigate();

  function incrementDown() {
    setTicketNumber(ticketNumber - 1);
  }

  function incrementUp() {
    setTicketNumber(ticketNumber + 1);
  }

  function handleReservation() {
    fetch("/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: concert.name,
        user_id: userId,
        concert_id: concert.id,
        quantity: ticketNumber,
      }),
    })
      .then((resp) => resp.json())
      .then((newTicket) => {
        setUserTickets([...userTickets, newTicket]);
        navigate("/yourtickets");
      });
  }

  return (
    <div>
      <h1>Reserve Tickets for {concert.name}</h1>
      <p>Select quantity of tickets to reserve</p>
      {ticketNumber > 0 ? <button onClick={incrementDown}>-</button> : null}
      <p>{ticketNumber}</p>
      <button onClick={incrementUp}>+</button>
      <br></br>
      <button onClick={handleReservation}>Reserve</button>
    </div>
  );
}

export default ReserveTickets;
