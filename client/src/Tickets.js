import React, { useState } from "react";
import Ticket from "./Ticket";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Tickets({ userTickets, setUserTickets }) {
  function handleDelete(id) {
    fetch(`/tickets/${id}`, {
      method: "DELETE",
    });
    let newTickets = userTickets.filter((ticket) => ticket.id !== id);
    setUserTickets(newTickets);
  }

  let ticketsToDisplay = userTickets.map((ticket) => {
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
            <tbody>{ticketsToDisplay}</tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Tickets;
