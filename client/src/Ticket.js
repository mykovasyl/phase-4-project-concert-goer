import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Ticket({ ticket, handleDelete }) {
  return (
    <>
      <tr>
        <td>{ticket.name}</td>
        <td>{ticket.quantity}</td>
        <td>
          <Button variant="danger">
            <FaTrashAlt onClick={() => handleDelete(ticket.id)} />
          </Button>
        </td>
      </tr>
    </>
  );
}

export default Ticket;
