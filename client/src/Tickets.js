import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets")
      .then((resp) => resp.json())
      .then((tickets) => {
        setTickets(tickets);
      });
  }, []);

  return (
    <div>
      <h1>Reserved Tickets</h1>
      {tickets.map((ticket) => {
        return <Ticket key={ticket.id} ticket={ticket} />;
      })}
    </div>
  );
}

export default Tickets;
