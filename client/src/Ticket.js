import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Ticket({ ticket }) {
  function handleDelete() {
    fetch(`/tickets/${ticket.id}`, {
      method: "DELETE",
    });
  }

  return (
    <>
      <tr>
        <td>{ticket.name}</td>
        <td>{ticket.quantity}</td>
        <td>
          <Button variant="danger">
            <FaTrashAlt onClick={handleDelete} />
          </Button>
        </td>
      </tr>
    </>
  );
}

export default Ticket;
