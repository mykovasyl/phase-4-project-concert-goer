import React, { useState } from "react";

function ReserveTickets({ currentUser }) {
  const [ticketNumber, setTicketNumber] = useState(0);

  const concert = { id: 2 };

  function incrementDown() {
    setTicketNumber(ticketNumber - 1);
  }

  function incrementUp() {
    setTicketNumber(ticketNumber + 1);
  }

  function handleReservation() {
    fetch("/concerts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.id,
        concert_id: concert.id,
      }),
    })
      .then((resp) => resp.json())
      .then((newTicket) => {
        console.log(newTicket);
      });
  }

  return (
    <div>
      <h1>Reserve Tickets for Concert name</h1>
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
