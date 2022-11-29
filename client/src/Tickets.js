import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets")
      .then((resp) => resp.json())
      .then((tickets) => {
        setTickets(tickets);
      });
  }, []);

  function handleDelete(id) {
    fetch(`/tickets/${id}`, {
      method: "DELETE",
    });
    let newTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(newTickets);
  }

  let usersTickets = tickets.map((ticket) => {
    return (
      <Ticket key={ticket.id} ticket={ticket} handleDelete={handleDelete} />
    );
  });

  return (
    <div>
      <Row>
        <Col md={6}>
          <h3>Reserved Tickets</h3>
          <Table striped hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <td>Concert name</td>
                <td>Quantity of tickets</td>
                <td>Cancel tickets</td>
              </tr>
            </thead>
            <tbody>{usersTickets}</tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Tickets;
