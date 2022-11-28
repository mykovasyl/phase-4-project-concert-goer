import React, { useEffect, useState } from "react";

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
    </div>
  );
}

export default Tickets;
